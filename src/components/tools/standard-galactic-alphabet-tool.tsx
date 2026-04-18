'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, ArrowLeftRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── SGA ↔ Latin mapping ──────────────────────────────────────────────────────
// Unicode approximation — the widely-used single-character-per-letter mapping.
// SGA proper lives in the ConScript Unicode Registry (U+EB40–U+EB59), which
// requires a special font. This approximation uses existing Unicode characters
// that visually resemble each SGA glyph and works in any app without a font.

const SGA_MAP: Record<string, string> = {
  a:'ᔑ', b:'ʖ',  c:'ᓵ', d:'↸', e:'ᒷ', f:'⎓', g:'⊣', h:'⍑',
  i:'╎', j:'⋮',  k:'ꖌ', l:'ꖎ', m:'ᒲ', n:'リ', o:'𝙹', p:'¡',
  q:'ᑑ', r:'∷',  s:'ᓭ', t:'ℸ', u:'⚍', v:'⍊', w:'∴', x:'‖',
  y:'⨅', z:'⊓',
}

const SGA_REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(SGA_MAP).map(([k, v]) => [v, k])
)

const ALPHABET = Object.entries(SGA_MAP)   // [['a','ᔑ'], …]

// ─── Conversion helpers ────────────────────────────────────────────────────────

function toSGA(text: string): string {
  return [...text].map(ch => SGA_MAP[ch.toLowerCase()] ?? ch).join('')
}

function fromSGA(text: string): string {
  // Spread splits surrogate pairs correctly (e.g. 𝙹 is 2 UTF-16 units)
  return [...text].map(ch => {
    const latin = SGA_REVERSE[ch]
    return latin ? latin.toUpperCase() : ch
  }).join('')
}

// ─── Component ────────────────────────────────────────────────────────────────

export function StandardGalacticAlphabetTool() {
  const [input,  setInput]  = useState('')
  const [mode,   setMode]   = useState<'encode' | 'decode'>('encode')
  const [copied, setCopied] = useState(false)

  const output = mode === 'encode' ? toSGA(input) : fromSGA(input)

  const copyOutput = useCallback(() => {
    if (!output) return
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({ title: 'Copied!', description: mode === 'encode' ? 'SGA text copied to clipboard' : 'English text copied to clipboard' })
  }, [output, mode])

  const swapAndReverse = () => {
    const next = mode === 'encode' ? 'decode' : 'encode'
    setMode(next)
    setInput(output)
  }

  const insertLetter = (latin: string) => {
    if (mode === 'encode') setInput(p => p + latin.toUpperCase())
  }

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Mode toggle */}
      <div className="flex gap-1 p-1 rounded-xl bg-muted/40 border w-full">
        {(['encode', 'decode'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all touch-manipulation ${
              mode === m
                ? 'bg-background shadow-sm text-foreground border border-border/50'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {m === 'encode' ? '🌍 English → SGA' : '👾 SGA → English'}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="space-y-1.5 w-full min-w-0">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {mode === 'encode' ? 'English Input' : 'SGA Input'}
        </label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={
            mode === 'encode'
              ? 'Type anything — a name, a message, a secret…'
              : 'Paste SGA characters here to decode…'
          }
          className="min-h-28 text-base resize-none"
          autoFocus
        />
        {input && (
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{input.length} characters</span>
            <button
              onClick={() => setInput('')}
              className="text-[11px] text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Swap button */}
      {input && output && (
        <div className="flex justify-center">
          <button
            onClick={swapAndReverse}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border rounded-full px-3 py-1.5 hover:bg-muted/60 transition-all touch-manipulation"
          >
            <ArrowLeftRight className="w-3 h-3" />
            Swap &amp; reverse
          </button>
        </div>
      )}

      {/* Output */}
      {input && (
        <div className="space-y-1.5 w-full min-w-0">
          <div className="flex items-center justify-between gap-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0">
              {mode === 'encode' ? 'SGA Output' : 'English Output'}
            </label>
            <Button
              size="sm"
              variant={copied ? 'default' : 'outline'}
              className="h-7 text-xs shrink-0"
              onClick={copyOutput}
            >
              {copied
                ? <><Check className="w-3 h-3 mr-1" />Copied</>
                : <><Copy className="w-3 h-3 mr-1" />Copy</>}
            </Button>
          </div>
          <div
            className="p-4 rounded-xl border bg-muted/30 min-h-20 text-2xl sm:text-3xl leading-relaxed break-all select-all cursor-pointer tracking-wide"
            onClick={copyOutput}
            title="Click to copy"
          >
            {output}
          </div>
          <p className="text-[11px] text-muted-foreground">
            Click output to copy · {[...output].length} characters out
          </p>
        </div>
      )}

      {/* Character-by-character breakdown */}
      {input && mode === 'encode' && (
        <div className="space-y-2 w-full min-w-0">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Character Breakdown
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[...input].map((ch, i) => {
              const lower = ch.toLowerCase()
              const sga = SGA_MAP[lower]
              const isSpace = ch === ' '
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center px-2 py-1.5 rounded-lg border text-center min-w-[2.2rem] ${
                    sga
                      ? 'bg-primary/5 border-primary/20'
                      : isSpace
                        ? 'bg-muted/20 border-dashed'
                        : 'bg-muted/30'
                  }`}
                >
                  <span className="text-base leading-none">{sga ?? (isSpace ? '·' : ch)}</span>
                  <span className="text-[9px] text-muted-foreground mt-1 uppercase leading-none">
                    {isSpace ? 'sp' : ch}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Alphabet reference grid */}
      <div className="space-y-2 pt-3 border-t w-full min-w-0">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Full SGA Alphabet — click to insert
        </p>
        <div className="grid grid-cols-9 sm:grid-cols-13 gap-1 w-full">
          {ALPHABET.map(([latin, sga]) => (
            <button
              key={latin}
              onClick={() => insertLetter(latin)}
              title={`${latin.toUpperCase()} = ${sga}`}
              className="flex flex-col items-center p-1.5 rounded-lg border hover:bg-primary/10 hover:border-primary/30 active:scale-95 transition-all touch-manipulation"
            >
              <span className="text-lg sm:text-xl leading-none">{sga}</span>
              <span className="text-[9px] text-muted-foreground mt-1 uppercase font-bold">{latin}</span>
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground">
          {mode === 'encode'
            ? '26 SGA glyphs — click any to insert the Latin letter into your input'
            : '26 SGA glyphs — reference for decoding'}
        </p>
      </div>
    </div>
  )
}
