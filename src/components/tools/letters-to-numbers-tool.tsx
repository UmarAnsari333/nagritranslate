'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, ArrowLeftRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Conversion helpers ────────────────────────────────────────────────────────

// A=1, B=2 … Z=26. Non-letters pass through unchanged.
function lettersToNumbers(text: string, sep: string): string {
  return [...text]
    .map(ch => {
      const lower = ch.toLowerCase()
      if (lower >= 'a' && lower <= 'z') return String(lower.charCodeAt(0) - 96)
      return ch
    })
    .join(sep === 'space' ? ' ' : sep === 'dash' ? '-' : '')
}

// Parses a number-string back to letters. Numbers 1-26 → letter, else kept.
function numbersToLetters(text: string, caseMode: 'upper' | 'lower'): string {
  // Match runs of digits, or any other char
  return text
    .replace(/\d+/g, n => {
      const num = parseInt(n, 10)
      if (num >= 1 && num <= 26) {
        const letter = String.fromCharCode(96 + num)
        return caseMode === 'upper' ? letter.toUpperCase() : letter
      }
      return n
    })
}

// ─── Component ────────────────────────────────────────────────────────────────

const SEPARATORS = [
  { id: 'none',  label: 'None',  example: '8516' },
  { id: 'space', label: 'Space', example: '8 5 1 6' },
  { id: 'dash',  label: 'Dash',  example: '8-5-1-6' },
] as const

type Sep = typeof SEPARATORS[number]['id']

export function LettersToNumbersTool() {
  const [mode,   setMode]   = useState<'encode' | 'decode'>('encode')
  const [input,  setInput]  = useState('')
  const [sep,    setSep]    = useState<Sep>('space')
  const [caseMode, setCaseMode] = useState<'upper' | 'lower'>('upper')
  const [copied, setCopied] = useState(false)

  const output = mode === 'encode'
    ? lettersToNumbers(input, sep)
    : numbersToLetters(input, caseMode)

  const copyOutput = useCallback(() => {
    if (!output) return
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({ title: 'Copied!', description: 'Result copied to clipboard' })
  }, [output])

  const swapAndReverse = () => {
    setMode(m => m === 'encode' ? 'decode' : 'encode')
    setInput(output)
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
            {m === 'encode' ? '🔤 Letters → Numbers' : '🔢 Numbers → Letters'}
          </button>
        ))}
      </div>

      {/* Options row */}
      {mode === 'encode' ? (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Separator:</span>
          {SEPARATORS.map(s => (
            <button
              key={s.id}
              onClick={() => setSep(s.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all touch-manipulation ${
                sep === s.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {s.label} <span className="opacity-60">({s.example})</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Output case:</span>
          {(['upper', 'lower'] as const).map(c => (
            <button
              key={c}
              onClick={() => setCaseMode(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all touch-manipulation ${
                caseMode === c
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {c === 'upper' ? 'UPPERCASE' : 'lowercase'}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {mode === 'encode' ? 'Text Input' : 'Numbers Input'}
        </label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={
            mode === 'encode'
              ? 'Type any text — letters become their A=1 number…'
              : 'Paste numbers like: 8 5 12 12 15 or 8-5-12-12-15…'
          }
          className="min-h-28 text-base resize-none"
          autoFocus
        />
        {input && (
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-muted-foreground">{input.length} characters</span>
            <button onClick={() => setInput('')} className="text-[11px] text-muted-foreground hover:text-destructive transition-colors">
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
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0">
              {mode === 'encode' ? 'Number Output' : 'Letter Output'}
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
            className="p-4 rounded-xl border bg-muted/30 min-h-20 text-xl sm:text-2xl leading-relaxed break-all select-all cursor-pointer tracking-wide font-mono"
            onClick={copyOutput}
            title="Click to copy"
          >
            {output || <span className="text-muted-foreground/50 text-sm font-sans">No convertible characters found</span>}
          </div>
          <p className="text-[11px] text-muted-foreground">Click output to copy</p>
        </div>
      )}

      {/* Character-by-character breakdown */}
      {input && mode === 'encode' && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Character Breakdown
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[...input].map((ch, i) => {
              const lower = ch.toLowerCase()
              const isLetter = lower >= 'a' && lower <= 'z'
              const num = isLetter ? String(lower.charCodeAt(0) - 96) : null
              const isSpace = ch === ' '
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center px-2 py-1.5 rounded-lg border text-center min-w-[2.4rem] ${
                    isLetter
                      ? 'bg-primary/5 border-primary/20'
                      : isSpace
                        ? 'bg-muted/20 border-dashed'
                        : 'bg-muted/30'
                  }`}
                >
                  <span className="text-base font-mono font-bold leading-none">
                    {num ?? (isSpace ? '·' : ch)}
                  </span>
                  <span className="text-[9px] text-muted-foreground mt-1 uppercase leading-none">
                    {isSpace ? 'sp' : ch.toUpperCase()}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* A–Z reference table */}
      <div className="space-y-2 pt-3 border-t">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          A–Z Reference
        </p>
        <div className="grid grid-cols-9 sm:grid-cols-13 gap-1">
          {Array.from({ length: 26 }, (_, i) => {
            const letter = String.fromCharCode(65 + i)
            const num = i + 1
            return (
              <button
                key={letter}
                onClick={() => mode === 'encode' && setInput(p => p + letter)}
                title={`${letter} = ${num}`}
                className="flex flex-col items-center p-1.5 rounded-lg border hover:bg-primary/10 hover:border-primary/30 active:scale-95 transition-all touch-manipulation"
              >
                <span className="text-sm font-bold leading-none">{num}</span>
                <span className="text-[9px] text-muted-foreground mt-1 uppercase font-bold">{letter}</span>
              </button>
            )
          })}
        </div>
        <p className="text-[10px] text-muted-foreground">
          {mode === 'encode'
            ? 'Click any letter to insert it · A=1, B=2 … Z=26'
            : 'A=1, B=2 … Z=26 — reference for decoding'}
        </p>
      </div>
    </div>
  )
}
