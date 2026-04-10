'use client'

import { useState, useMemo } from 'react'
import { Copy, Check, Volume2, ArrowLeftRight } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

// ─── Cipher maps ──────────────────────────────────────────────────────────────

const ENCODE: Record<string, string> = {
  A:'Y', B:'P', C:'L', D:'T', E:'A', F:'V', G:'K', H:'R', I:'E', J:'Z',
  K:'G', L:'M', M:'S', N:'H', O:'U', P:'B', Q:'X', R:'N', S:'C', T:'D',
  U:'I', V:'J', W:'F', X:'Q', Y:'O', Z:'W',
}

const DECODE: Record<string, string> = Object.fromEntries(
  Object.entries(ENCODE).map(([eng, alb]) => [alb, eng])
)

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// Approximate in-game primer discovery order
const PRIMER_ORDER = [
  'A','E','P','B','T','S','R','Y','N','K',
  'L','M','H','Q','U','G','I','C','D','V',
  'Z','J','F','X','O','W',
]

// ─── Translation logic ────────────────────────────────────────────────────────

function translateText(
  text: string,
  mode: 'encode' | 'decode',
  discovered: Set<string>, // set of English letters that are "known"
  primerMode: boolean,
): string {
  const map = mode === 'encode' ? ENCODE : DECODE
  return [...text].map(c => {
    if (!/[A-Za-z]/.test(c)) return c
    const upper = c.toUpperCase()
    const result = map[upper]
    if (!result) return c
    // Primer mode: gate on English letter being discovered
    const engLetter = mode === 'encode' ? upper : result
    if (primerMode && !discovered.has(engLetter)) return c
    return c === upper ? result : result.toLowerCase()
  }).join('')
}

// ─── Example phrases ──────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Hello', alBhed: 'Rammu', english: 'Hello' },
  { label: 'What are you doing?', alBhed: 'Fryd yna oui tuehk?', english: 'What are you doing?' },
  { label: 'I like you', alBhed: 'E mega oui', english: 'I like you' },
  { label: 'I could get used to this', alBhed: 'E luimt kad icad du drec', english: 'I could get used to this' },
  { label: 'I love Final Fantasy', alBhed: 'E muja Vehym Vyhdyco', english: 'I love Final Fantasy' },
  { label: 'Hello World', alBhed: 'Rammu Funmt', english: 'Hello World' },
]

// ─── Component ────────────────────────────────────────────────────────────────

type Mode = 'encode' | 'decode'

export function AlBhedTranslatorTool() {
  const [input, setInput]           = useState('')
  const [mode, setMode]             = useState<Mode>('encode')
  const [primerMode, setPrimerMode] = useState(false)
  const [primerCount, setPrimerCount] = useState(26) // how many primers found (1–26)
  const [copied, setCopied]         = useState(false)

  // Build discovered set from primer slider
  const discovered = useMemo(() => {
    const set = new Set<string>()
    PRIMER_ORDER.slice(0, primerCount).forEach(l => set.add(l))
    return set
  }, [primerCount])

  const output = useMemo(() =>
    translateText(input, mode, discovered, primerMode),
    [input, mode, discovered, primerMode]
  )

  // Word-by-word breakdown
  const breakdown = useMemo(() => {
    if (!input.trim()) return []
    const parts = input.match(/[A-Za-z']+|[^A-Za-z']+/g) ?? []
    return parts.map(part => ({
      original: part,
      transformed: /[A-Za-z]/.test(part)
        ? translateText(part, mode, discovered, primerMode)
        : part,
      isWord: /[A-Za-z]/.test(part),
    }))
  }, [input, mode, discovered, primerMode])

  const copy = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast({ title: 'Copied!', description: 'Al Bhed text copied to clipboard.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  const speak = () => {
    if (!output || typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(output)
    utt.rate = 0.85
    window.speechSynthesis.speak(utt)
  }

  const swap = () => {
    if (!output) return
    setMode(m => m === 'encode' ? 'decode' : 'encode')
    setInput(output)
  }

  const tryExample = (ex: typeof EXAMPLES[0]) => {
    setMode('decode')
    setInput(ex.alBhed)
    setPrimerMode(false)
  }

  return (
    <div className="space-y-6 w-full min-w-0">

      {/* Mode toggle */}
      <div className="flex flex-col sm:flex-row gap-2">
        {(['encode', 'decode'] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all text-center border ${
              mode === m
                ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                : 'bg-muted/20 text-muted-foreground hover:text-foreground border-muted/40'
            }`}
          >
            {m === 'encode' ? '🌐 English → Al Bhed' : '🔓 Al Bhed → English'}
          </button>
        ))}
      </div>

      {/* Primer mode */}
      <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setPrimerMode(p => !p)}
              className={`relative w-10 h-5 rounded-full transition-colors flex-shrink-0 ${
                primerMode ? 'bg-amber-500' : 'bg-muted/60'
              }`}
            >
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                primerMode ? 'translate-x-5' : 'translate-x-0.5'
              }`} />
            </button>
            <label className="text-sm font-semibold cursor-pointer" onClick={() => setPrimerMode(p => !p)}>
              📖 Primer Mode
            </label>
            <span className="text-xs text-muted-foreground hidden sm:inline">— simulate finding Al Bhed Primers in-game</span>
          </div>
          {primerMode && (
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
              {primerCount}/26 primers found
            </span>
          )}
        </div>

        {primerMode && (
          <div className="space-y-3">
            {/* Slider */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-6">1</span>
              <input
                type="range"
                min={0}
                max={26}
                value={primerCount}
                onChange={e => setPrimerCount(Number(e.target.value))}
                className="flex-1 accent-amber-500"
              />
              <span className="text-xs text-muted-foreground w-6">26</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setPrimerCount(0)}
                  className="text-[10px] px-2 py-1 rounded bg-muted/40 hover:bg-muted/70 transition-colors"
                >None</button>
                <button
                  onClick={() => setPrimerCount(26)}
                  className="text-[10px] px-2 py-1 rounded bg-muted/40 hover:bg-muted/70 transition-colors"
                >All</button>
              </div>
            </div>

            {/* Letter grid showing discovered/undiscovered */}
            <div className="grid grid-cols-7 sm:grid-cols-13 gap-1" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(2rem, 1fr))' }}>
              {PRIMER_ORDER.map((letter, idx) => {
                const isDiscovered = idx < primerCount
                return (
                  <button
                    key={letter}
                    onClick={() => setPrimerCount(isDiscovered ? idx : idx + 1)}
                    title={`Primer ${idx + 1}: ${letter}`}
                    className={`p-1.5 rounded-lg border text-center transition-all ${
                      isDiscovered
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-700 dark:text-amber-300'
                        : 'bg-muted/10 border-muted/20 text-muted-foreground/40'
                    }`}
                  >
                    <p className="text-[9px] font-medium">{letter}</p>
                    <p className="text-[9px] font-mono">{ENCODE[letter]}</p>
                  </button>
                )
              })}
            </div>
            <p className="text-[10px] text-muted-foreground">
              Undiscovered letters remain untranslated — just like reading Al Bhed without the Primer in FFX.
            </p>
          </div>
        )}
      </div>

      {/* Examples */}
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Try a phrase from FFX</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.alBhed}
              onClick={() => tryExample(ex)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input / Output */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {mode === 'encode' ? 'English Text' : 'Al Bhed Text'}
          </label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={mode === 'encode'
              ? 'Type English here…'
              : 'Paste Al Bhed text to decode…'}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none font-mono"
          />
          <p className="text-xs text-muted-foreground text-right">{input.length} characters</p>
        </div>

        {/* Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              {mode === 'encode' ? 'Al Bhed Output' : 'English Output'}
            </label>
            <div className="flex items-center gap-1.5">
              <button onClick={speak} disabled={!output} title="Listen aloud"
                className="p-1.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <Volume2 className="w-3.5 h-3.5" />
              </button>
              <button onClick={swap} disabled={!output} title="Swap input ↔ output"
                className="p-1.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={copy}
                disabled={!output}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                    : 'bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {copied ? <><Check className="w-3 h-3" />Copied</> : <><Copy className="w-3 h-3" />Copy</>}
              </button>
            </div>
          </div>
          <div
            onClick={copy}
            className="min-h-[124px] w-full px-4 py-3 rounded-xl border bg-muted/10 text-sm font-mono break-all leading-relaxed cursor-pointer select-all"
          >
            {output || <span className="text-muted-foreground italic">Translation appears here…</span>}
          </div>
          <p className="text-xs text-muted-foreground text-right">{output.length} characters</p>
        </div>
      </div>

      {/* Word-by-word breakdown */}
      {breakdown.some(p => p.isWord) && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Word-by-Word Breakdown
          </h3>
          <div className="flex flex-wrap gap-2">
            {breakdown.filter(p => p.isWord).map((p, i) => (
              <div key={i} className="px-3 py-2 bg-muted/20 rounded-xl border text-center">
                <p className="text-[10px] text-muted-foreground font-medium">{p.original}</p>
                <p className="text-xs font-mono font-bold mt-0.5 text-primary">{p.transformed}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full cipher table */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Al Bhed Cipher Table
        </h3>
        <div className="grid grid-cols-6 sm:grid-cols-9 gap-1">
          {ALPHABET.map(l => (
            <div
              key={l}
              className={`rounded-lg border text-center py-1.5 px-1 ${
                primerMode && discovered.has(l)
                  ? 'bg-amber-500/20 border-amber-500/30'
                  : primerMode
                    ? 'bg-muted/5 border-muted/20 opacity-40'
                    : 'bg-muted/10 border-muted/20'
              }`}
            >
              <p className="text-[10px] font-bold text-muted-foreground">{l}</p>
              <p className={`text-xs font-mono font-bold ${
                primerMode && discovered.has(l)
                  ? 'text-amber-700 dark:text-amber-300'
                  : primerMode
                    ? 'text-muted-foreground/30'
                    : 'text-primary'
              }`}>{ENCODE[l]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
