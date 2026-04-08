'use client'

import { useState, useRef, useEffect } from 'react'
import { Copy, Play, Square, RefreshCw, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { toast } from '@/hooks/use-toast'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function makeDistortionCurve(amount: number): Float32Array {
  const curve = new Float32Array(512)
  for (let i = 0; i < 512; i++) {
    const x = (i * 2) / 512 - 1
    curve[i] = ((Math.PI + amount) * x) / (Math.PI + amount * Math.abs(x))
  }
  return curve
}

/** Export an AudioBuffer as a WAV Blob */
function bufferToWav(buffer: AudioBuffer): Blob {
  const numCh = buffer.numberOfChannels
  const len = buffer.length
  const ab = new ArrayBuffer(44 + len * numCh * 2)
  const view = new DataView(ab)
  const channels: Float32Array[] = []
  for (let i = 0; i < numCh; i++) channels.push(buffer.getChannelData(i))

  let pos = 0
  const u32 = (v: number) => { view.setUint32(pos, v, true); pos += 4 }
  const u16 = (v: number) => { view.setUint16(pos, v, true); pos += 2 }
  const i16 = (v: number) => { view.setInt16(pos, v, true); pos += 2 }

  u32(0x46464952); u32(ab.byteLength - 8); u32(0x45564157)
  u32(0x20746d66); u32(16); u16(1); u16(numCh)
  u32(buffer.sampleRate); u32(buffer.sampleRate * numCh * 2)
  u16(numCh * 2); u16(16)
  u32(0x61746164); u32(len * numCh * 2)

  for (let s = 0; s < len; s++) {
    for (let c = 0; c < numCh; c++) {
      const v = Math.max(-1, Math.min(1, channels[c][s]))
      i16(v < 0 ? v * 32768 : v * 32767)
    }
  }
  return new Blob([ab], { type: 'audio/wav' })
}

/** Split text into ≤180-char word-boundary chunks for the TTS API */
function splitIntoChunks(text: string, maxLen = 180): string[] {
  const words = text.split(/\s+/)
  const chunks: string[] = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxLen) {
      if (current) chunks.push(current.trim())
      current = word
    } else {
      current = (current + ' ' + word).trim()
    }
  }
  if (current) chunks.push(current.trim())
  return chunks
}

/** Concatenate multiple AudioBuffers into one */
function concatenateBuffers(buffers: AudioBuffer[], sampleRate: number): AudioBuffer {
  const totalLen = buffers.reduce((s, b) => s + b.length, 0)
  const numCh = Math.max(...buffers.map(b => b.numberOfChannels))
  const out = new OfflineAudioContext(numCh, Math.max(totalLen, 1), sampleRate)
    // We'll build it manually via a plain ArrayBuffer
  const result = {
    numberOfChannels: numCh,
    length: totalLen,
    sampleRate,
    channels: Array.from({ length: numCh }, () => new Float32Array(totalLen)),
  }
  let offset = 0
  for (const buf of buffers) {
    for (let c = 0; c < numCh; c++) {
      const src = buf.numberOfChannels > c ? buf.getChannelData(c) : buf.getChannelData(0)
      result.channels[c].set(src, offset)
    }
    offset += buf.length
  }
  // Wrap in a fake AudioBuffer-like structure for OfflineAudioContext
  return result as unknown as AudioBuffer
}

/** Apply robot effects to a decoded AudioBuffer and return processed AudioBuffer */
async function applyRobotEffects(
  inputBuf: AudioBuffer,
  pitchVal: number,
): Promise<AudioBuffer> {
  const numCh = inputBuf.numberOfChannels
  const len = inputBuf.length
  const sr = inputBuf.sampleRate

  const ctx = new OfflineAudioContext(numCh, len, sr)

  // Source
  const src = ctx.createBufferSource()
  src.buffer = inputBuf
  // Pitch shift via playback rate: pitchVal 0→low, 1.5→high
  // Keep rate at 1 so words stay intelligible; pitch in TTS already handled
  src.playbackRate.value = 1.0

  // Ring modulator carrier
  const ring = ctx.createOscillator()
  ring.type = 'sine'
  ring.frequency.value = 30 + pitchVal * 50
  const ringGain = ctx.createGain()
  ringGain.gain.value = 0      // ring mod: modulate amplitude
  ring.connect(ringGain.gain)
  ring.start(0)

  // Distortion
  const dist = ctx.createWaveShaper()
  dist.curve = makeDistortionCurve(180)
  dist.oversample = '4x'

  // Bandpass filter — narrows freq range to phone/robot bandwidth
  const bpf = ctx.createBiquadFilter()
  bpf.type = 'bandpass'
  bpf.frequency.value = 700 + pitchVal * 400
  bpf.Q.value = 4

  // Subtle treble boost for metallic edge
  const treble = ctx.createBiquadFilter()
  treble.type = 'highshelf'
  treble.frequency.value = 3500
  treble.gain.value = 6

  // Output gain
  const outGain = ctx.createGain()
  outGain.gain.value = 1.3

  src.connect(ringGain)
  ringGain.connect(dist)
  dist.connect(bpf)
  bpf.connect(treble)
  treble.connect(outGain)
  outGain.connect(ctx.destination)
  src.start(0)

  return ctx.startRendering()
}

// ─── TTS text preprocessing ───────────────────────────────────────────────────

function robotizeForTTS(text: string, glitch: boolean): string {
  let result = text.toUpperCase().replace(/[!?]+/g, '.').trim()

  if (glitch) {
    result = result.replace(/\b(\w{3,})\b/g, (w) =>
      Math.random() < 0.2 ? `${w.slice(0, Math.ceil(w.length / 2))}-${w}` : w,
    )
  }

  // Comma between each word → mechanical pause in TTS
  result = result.split(/\s+/).filter(Boolean).join(', ')
  return result
}

// ─── Visual robot text styles ─────────────────────────────────────────────────

const robotStyles = [
  {
    name: 'ROBOT CAPS',
    id: 'caps',
    description: 'Uppercase robotic',
    transform: (t: string) => t.toUpperCase(),
  },
  {
    name: 'R0B0T C0D3',
    id: 'leet',
    description: 'Leet speak',
    transform: (t: string) =>
      t.toUpperCase()
        .replace(/A/g, '4').replace(/E/g, '3').replace(/I/g, '1')
        .replace(/O/g, '0').replace(/S/g, '5').replace(/T/g, '7')
        .replace(/B/g, '8').replace(/G/g, '9'),
  },
  {
    name: 'R·O·B·O·T',
    id: 'dots',
    description: 'Dot separated',
    transform: (t: string) =>
      t.toUpperCase().split('').join('·').replace(/·{2,}/g, '  '),
  },
  {
    name: 'S P A C E D',
    id: 'spaced',
    description: 'Space between chars',
    transform: (t: string) =>
      t.toUpperCase().split('').join(' ').replace(/ {2,}/g, '   '),
  },
  {
    name: '[ROBOT] [TEXT]',
    id: 'brackets',
    description: 'Bracket words',
    transform: (t: string) =>
      t.toUpperCase().split(' ').filter(Boolean).map(w => `[${w}]`).join(' '),
  },
  {
    name: '>>COMMAND<<',
    id: 'command',
    description: 'Command-line style',
    transform: (t: string) =>
      t.toUpperCase().split(/[.!?]+/).filter(Boolean).map(s => `>> ${s.trim()} <<`).join('\n'),
  },
  {
    name: 'GL1TCH',
    id: 'glitch',
    description: 'Glitch / error style',
    transform: (t: string) => {
      const errors = ['ERR_', 'SYS_', 'PROC_', 'DATA_', 'CORE_']
      return t.toUpperCase().split(' ').map((w, i) =>
        i % 4 === 0 ? `${errors[i % errors.length]}${w}` : w
      ).join(' ')
    },
  },
]

function copyText(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    toast({ title: 'Copied!', description: 'Robot text copied.' })
  })
}

// ─── Component ────────────────────────────────────────────────────────────────

export function RobotVoiceGeneratorTool() {
  const [input, setInput] = useState('')
  const [speed, setSpeed] = useState([0.75])
  const [pitch, setPitch] = useState([0.1])
  const [glitch, setGlitch] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const buzzRef = useRef<OscillatorNode | null>(null)

  useEffect(() => () => {
    window.speechSynthesis?.cancel()
    stopBuzz()
    audioCtxRef.current?.close()
  }, [])

  function startBuzz(pitchVal: number) {
    try {
      const ctx = new AudioContext()
      audioCtxRef.current = ctx

      const osc = ctx.createOscillator()
      osc.type = 'sawtooth'
      osc.frequency.value = 80 + pitchVal * 120

      const ring = ctx.createOscillator()
      ring.type = 'sine'
      ring.frequency.value = 30 + pitchVal * 30
      const ringGain = ctx.createGain()
      ringGain.gain.value = 0
      ring.connect(ringGain.gain)

      const dist = ctx.createWaveShaper()
      dist.curve = makeDistortionCurve(300)

      const bpf = ctx.createBiquadFilter()
      bpf.type = 'bandpass'
      bpf.frequency.value = 600 + pitchVal * 200
      bpf.Q.value = 8

      const gain = ctx.createGain()
      gain.gain.value = 0.1

      osc.connect(ringGain)
      ringGain.connect(dist)
      dist.connect(bpf)
      bpf.connect(gain)
      gain.connect(ctx.destination)

      osc.start(); ring.start()
      buzzRef.current = osc
    } catch { /* no buzz — still works */ }
  }

  function stopBuzz() {
    try { buzzRef.current?.stop() } catch {}
    buzzRef.current = null
    audioCtxRef.current?.close().catch(() => {})
    audioCtxRef.current = null
  }

  const speak = () => {
    if (!input.trim()) return
    if (!window.speechSynthesis) {
      toast({ title: 'Not supported', description: 'Your browser does not support speech synthesis.', variant: 'destructive' })
      return
    }
    window.speechSynthesis.cancel()
    stopBuzz()

    const utterance = new SpeechSynthesisUtterance(robotizeForTTS(input, glitch))
    utterance.rate = speed[0]
    utterance.pitch = pitch[0]
    utterance.volume = 1

    const voices = window.speechSynthesis.getVoices()
    const preferred = ['google uk english male', 'microsoft david', 'microsoft mark', 'microsoft george', 'fred']
    const robotVoice = voices.find(v => preferred.some(p => v.name.toLowerCase().includes(p)))
      ?? voices.find(v => v.lang.startsWith('en'))
    if (robotVoice) utterance.voice = robotVoice

    utterance.onstart = () => { setIsPlaying(true); startBuzz(pitch[0]) }
    utterance.onend = () => { setIsPlaying(false); stopBuzz() }
    utterance.onerror = () => { setIsPlaying(false); stopBuzz() }

    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    window.speechSynthesis?.cancel()
    stopBuzz()
    setIsPlaying(false)
  }

  // ── Download: fetch real TTS audio → apply robot effects → save WAV ─────────
  const downloadAudio = async () => {
    if (!input.trim()) return
    setIsDownloading(true)

    try {
      // 1. Split into ≤180-char chunks (API limit)
      const chunks = splitIntoChunks(input, 180)

      // 2. Fetch MP3 audio for each chunk from our server-side proxy
      const tempCtx = new AudioContext()
      const decoded: AudioBuffer[] = []

      for (const chunk of chunks) {
        const res = await fetch(`/api/tts?text=${encodeURIComponent(chunk)}`)
        if (!res.ok) throw new Error('TTS API error: ' + res.status)
        const ab = await res.arrayBuffer()
        const buf = await tempCtx.decodeAudioData(ab)
        decoded.push(buf)
      }
      await tempCtx.close()

      // 3. Concatenate all chunks into one buffer
      const sr = decoded[0].sampleRate
      const numCh = decoded[0].numberOfChannels
      const totalLen = decoded.reduce((s, b) => s + b.length, 0)

      const combined = new OfflineAudioContext(numCh, Math.max(totalLen, 1), sr)
      const combinedBuf = await (async () => {
        // Build manually by creating a real AudioBuffer
        const ctx2 = new OfflineAudioContext(numCh, Math.max(totalLen, 1), sr)
        let offset = 0
        for (const buf of decoded) {
          const src = ctx2.createBufferSource()
          src.buffer = buf
          src.connect(ctx2.destination)
          src.start(offset / sr)
          offset += buf.length
        }
        return ctx2.startRendering()
      })()
      combined.close?.()

      // 4. Apply robot effects (ring mod + distortion + bandpass)
      const processed = await applyRobotEffects(combinedBuf, pitch[0])

      // 5. Export as WAV and trigger download
      const wavBlob = bufferToWav(processed)
      const url = URL.createObjectURL(wavBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'robot-voice.wav'
      a.click()
      URL.revokeObjectURL(url)

      toast({ title: 'Downloaded!', description: 'robot-voice.wav saved.' })
    } catch (err) {
      console.error(err)
      toast({
        title: 'Download failed',
        description: 'Could not generate audio. Check your connection.',
        variant: 'destructive',
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const clear = () => { stop(); setInput('') }

  const speedLabel = speed[0] < 0.6 ? 'Very Slow' : speed[0] < 0.85 ? 'Slow' : speed[0] < 1.15 ? 'Normal' : speed[0] < 1.5 ? 'Fast' : 'Very Fast'
  const pitchLabel = pitch[0] < 0.15 ? 'Deep Robot' : pitch[0] < 0.4 ? 'Low Robot' : pitch[0] < 0.7 ? 'Robot' : pitch[0] < 1.1 ? 'Normal' : 'High'

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Text</label>
        <Textarea
          placeholder="GREETINGS HUMAN. TYPE YOUR MESSAGE HERE."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[120px] resize-none font-mono text-sm"
        />
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{input.length} characters</span>
          {input && (
            <button onClick={clear} className="flex items-center gap-1 hover:text-foreground transition-colors">
              <RefreshCw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Speed & Pitch */}
      <div className="grid sm:grid-cols-2 gap-6 p-5 bg-muted/30 rounded-xl border">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Speed</label>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
              {speed[0].toFixed(1)}x — {speedLabel}
            </span>
          </div>
          <Slider min={0.3} max={2} step={0.05} value={speed} onValueChange={setSpeed} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0.3x Slow</span><span>2.0x Fast</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Pitch</label>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
              {pitch[0].toFixed(2)} — {pitchLabel}
            </span>
          </div>
          <Slider min={0} max={1.5} step={0.05} value={pitch} onValueChange={setPitch} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0 Deep</span><span>1.5 High</span>
          </div>
        </div>
      </div>

      {/* Glitch toggle */}
      <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl border">
        <button
          onClick={() => setGlitch(g => !g)}
          className={`relative w-12 h-6 rounded-full transition-colors ${glitch ? 'bg-primary' : 'bg-muted-foreground/30'}`}
        >
          <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${glitch ? 'translate-x-7' : 'translate-x-1'}`} />
        </button>
        <div>
          <p className="text-sm font-medium">Glitch Mode</p>
          <p className="text-xs text-muted-foreground">Adds stutters and glitch artifacts</p>
        </div>
        {glitch && <span className="ml-auto text-xs font-mono text-primary animate-pulse">GL1TCH ON</span>}
      </div>

      {/* Play / Download buttons */}
      <div className="flex gap-3">
        <Button
          onClick={isPlaying ? stop : speak}
          disabled={!input.trim()}
          className="flex-1 gap-2 h-12 text-base"
          variant={isPlaying ? 'destructive' : 'default'}
        >
          {isPlaying
            ? <><Square className="w-4 h-4 fill-current" /> Stop</>
            : <><Play className="w-4 h-4 fill-current" /> Play Robot Voice</>}
        </Button>

        <Button
          onClick={downloadAudio}
          disabled={!input.trim() || isDownloading}
          variant="outline"
          className="gap-2 h-12 px-5"
        >
          <Download className="w-4 h-4" />
          {isDownloading ? 'Generating...' : 'Download WAV'}
        </Button>
      </div>

      {isPlaying && (
        <div className="flex items-center gap-2 text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary inline-block animate-ping" />
          <span className="font-mono animate-pulse">TRANSMITTING ROBOT SIGNAL...</span>
        </div>
      )}

      {isDownloading && (
        <div className="flex items-center gap-2 text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
          <span className="font-mono">PROCESSING AUDIO... APPLYING ROBOT EFFECTS...</span>
        </div>
      )}

      {/* Visual styles */}
      {input.trim() && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Visual Robot Text Styles</h3>
          <div className="space-y-3">
            {robotStyles.map((style) => {
              const transformed = style.transform(input)
              return (
                <div key={style.id} className="p-4 rounded-xl bg-muted/20 border hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-xs font-bold text-primary font-mono">{style.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">— {style.description}</span>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => copyText(transformed)} className="h-7 px-2 gap-1 text-xs">
                      <Copy className="w-3 h-3" /> Copy
                    </Button>
                  </div>
                  <p className="font-mono text-sm break-all leading-relaxed whitespace-pre-wrap">{transformed}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {!input.trim() && (
        <div className="text-center py-8 text-muted-foreground">
          <div className="text-4xl mb-3">🤖</div>
          <p className="text-sm font-mono">AWAITING INPUT. PLEASE ENTER TEXT.</p>
          <p className="text-xs mt-1 opacity-60 font-mono">SET PITCH TO 0.00 FOR MAXIMUM ROBOT EFFECT.</p>
        </div>
      )}
    </div>
  )
}
