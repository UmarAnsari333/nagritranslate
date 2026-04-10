'use client'

import { useState, useEffect, useRef } from 'react'
import { Copy, Play, Volume2, VolumeX, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'

const MORSE_CODE: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
}

const REVERSE_MORSE: { [key: string]: string } = {}
Object.entries(MORSE_CODE).forEach(([key, value]) => {
  REVERSE_MORSE[value] = key
})

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE[char] || char)
    .join(' ')
}

function morseToText(morse: string): string {
  return morse
    .split(' ')
    .map(code => REVERSE_MORSE[code] || code)
    .join('')
}

export function MorseCodeTranslatorTool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'text-to-morse' | 'morse-to-text'>('text-to-morse')
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState([50])
  const [frequency, setFrequency] = useState([500])
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (input.trim()) {
      if (mode === 'text-to-morse') {
        setOutput(textToMorse(input))
      } else {
        setOutput(morseToText(input))
      }
    } else {
      setOutput('')
    }
  }, [input, mode])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: 'Copied!',
      description: 'Text copied to clipboard',
    })
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
    stopAudio()
  }

  const swapMode = () => {
    const newMode = mode === 'text-to-morse' ? 'morse-to-text' : 'text-to-morse'
    setMode(newMode)
    // Swap input and output
    setInput(output)
    setOutput(input)
  }

  const playMorseCode = async () => {
    if (isPlaying) {
      stopAudio()
      return
    }

    const morse = mode === 'text-to-morse' ? output : input
    if (!morse.trim()) return

    setIsPlaying(true)

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      audioContextRef.current = new AudioContextClass()
      const ctx = audioContextRef.current
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.frequency.value = frequency[0]
      oscillator.type = 'sine'

      gainNode.gain.value = 0

      const dotDuration = speed[0] // milliseconds
      const now = ctx.currentTime

      let time = now
      for (const char of morse) {
        if (char === '.') {
          gainNode.gain.setValueAtTime(0.1, time)
          gainNode.gain.setValueAtTime(0, time + dotDuration / 1000)
          time += dotDuration / 1000 + dotDuration / 1000 // dot + pause
        } else if (char === '-') {
          gainNode.gain.setValueAtTime(0.1, time)
          gainNode.gain.setValueAtTime(0, time + (3 * dotDuration) / 1000)
          time += (3 * dotDuration) / 1000 + dotDuration / 1000 // dash + pause
        } else if (char === '/') {
          time += (3 * dotDuration) / 1000 // word pause
        } else if (char === ' ') {
          time += (3 * dotDuration) / 1000 // letter pause
        }
      }

      oscillator.start(now)
      oscillator.stop(time + 0.1)

      // Auto-stop when done
      setTimeout(() => {
        setIsPlaying(false)
      }, (time - now) * 1000)

    } catch (error) {
      console.error('Audio playback error:', error)
      setIsPlaying(false)
      toast({
        title: 'Error',
        description: 'Failed to play audio. Please try again.',
        variant: 'destructive',
      })
    }
  }

  const stopAudio = () => {
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close()
      } catch (e) {
        // Ignore
      }
      audioContextRef.current = null
    }
    setIsPlaying(false)
  }

  const handleExample = () => {
    const example = mode === 'text-to-morse' ? 'SOS' : '... --- ...'
    setInput(example)
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      <div>
        <h2 className="text-2xl font-bold mb-2">Morse Code Translator</h2>
        <p className="text-sm text-muted-foreground">
          Convert text to Morse code and vice versa, with audio playback
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text-to-morse">Text to Morse</TabsTrigger>
          <TabsTrigger value="morse-to-text">Morse to Text</TabsTrigger>
        </TabsList>

        <TabsContent value="text-to-morse" className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Enter Text
            </label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to convert to Morse code (e.g., SOS)"
              className="min-h-[120px] font-mono"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={swapMode} variant="outline" className="flex-1">
              <RefreshCw className="w-4 h-4 mr-2" />
              Switch to Morse to Text
            </Button>
            <Button onClick={clearAll} variant="outline">
              Clear
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="morse-to-text" className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Enter Morse Code
            </label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Morse code (e.g., ... --- ...)"
              className="min-h-[120px] font-mono"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={swapMode} variant="outline" className="flex-1">
              <RefreshCw className="w-4 h-4 mr-2" />
              Switch to Text to Morse
            </Button>
            <Button onClick={clearAll} variant="outline">
              Clear
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Examples */}
      <div>
        <p className="text-sm font-medium mb-3">Quick Examples:</p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleExample} variant="outline" size="sm">
            SOS
          </Button>
          <Button onClick={() => setInput(mode === 'text-to-morse' ? 'Hello World' : '.... . .-.. .-.. --- / .-- --- .-. .-.. -..')} variant="outline" size="sm">
            Hello World
          </Button>
          <Button onClick={() => setInput(mode === 'text-to-morse' ? '123 456' : '.---- ..--- ...-- / ....- ..... -....')} variant="outline" size="sm">
            Numbers
          </Button>
        </div>
      </div>

      {output && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Output</h3>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  {mode === 'text-to-morse' ? 'Morse Code' : 'Text'}
                </CardTitle>
                <Button
                  onClick={() => copyToClipboard(output)}
                  size="sm"
                  variant="outline"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted/50 rounded-lg font-mono text-lg break-all min-h-[60px]">
                {output}
              </div>
            </CardContent>
          </Card>

          {/* Audio Controls */}
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                Audio Playback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={playMorseCode}
                className="w-full"
                size="lg"
                variant={isPlaying ? "destructive" : "default"}
              >
                <Play className={`w-5 h-5 mr-2 ${isPlaying ? '' : 'fill-current'}`} />
                {isPlaying ? 'Stop' : 'Play Morse Code'}
              </Button>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="font-medium">Speed (dot duration)</label>
                    <span className="text-muted-foreground">{speed[0]}ms</span>
                  </div>
                  <Slider
                    value={speed}
                    onValueChange={setSpeed}
                    min={20}
                    max={200}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="font-medium">Frequency (Hz)</label>
                    <span className="text-muted-foreground">{frequency[0]}Hz</span>
                  </div>
                  <Slider
                    value={frequency}
                    onValueChange={setFrequency}
                    min={200}
                    max={1000}
                    step={50}
                    className="w-full"
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Adjust the speed and frequency to customize the Morse code audio.
                Lower speed = slower playback. Higher frequency = higher pitch.
              </p>
            </CardContent>
          </Card>

          {/* Morse Code Reference */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Morse Code Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 text-sm">
                {Object.entries(MORSE_CODE)
                  .filter(([key]) => key !== ' ')
                  .sort((a, b) => a[0].localeCompare(b[0]))
                  .map(([char, code]) => (
                    <div key={char} className="p-2 bg-muted/50 rounded text-center">
                      <div className="font-bold">{char}</div>
                      <div className="font-mono text-xs text-muted-foreground">{code}</div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
