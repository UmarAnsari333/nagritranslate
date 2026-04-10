'use client'

import { useState, useMemo } from 'react'
import { Copy, RefreshCw } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

// ─── Mirror character map ─────────────────────────────────────────────────────
// Each character is replaced with its Unicode horizontal mirror equivalent,
// then the whole string is reversed — exactly how da Vinci wrote.

const MIRROR_MAP: Record<string, string> = {
  // Lowercase
  a: 'ɒ', b: 'd', c: 'ɔ', d: 'b', e: 'ə',
  f: 'ꟻ', g: 'ϱ', h: 'ʜ', i: 'i', j: 'ɾ',
  k: 'ʞ', l: 'l', m: 'm', n: 'ᴎ', o: 'o',
  p: 'q', q: 'p', r: 'ɹ', s: 'ƨ', t: 'ʇ',
  u: 'u', v: 'v', w: 'w', x: 'x', y: 'ʎ', z: 'ƨ',
  // Uppercase
  A: 'A', B: 'ᗺ', C: 'Ↄ', D: 'ᗡ', E: 'Ǝ',
  F: 'ꟻ', G: 'ᘜ', H: 'H', I: 'I', J: 'ꓤ',
  K: 'ʞ', L: '⌐', M: 'M', N: 'И', O: 'O',
  P: 'ꟼ', Q: 'Ọ', R: 'ᴚ', S: 'Ƨ', T: 'T',
  U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: 'Ƨ',
  // Numbers
  '0': '0', '1': 'Ɩ', '2': 'ᘔ', '3': 'Ɛ', '4': 'ᔭ',
  '5': 'ƨ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  // Punctuation
  '(': ')', ')': '(', '[': ']', ']': '[',
  '{': '}', '}': '{', '<': '>', '>': '<',
  '?': '⸮', '.': '.', ',': ',',
  '/': '\\', '\\': '/',
}

// ─── Styles ───────────────────────────────────────────────────────────────────

type Style = 'full' | 'reverse-only' | 'mirror-chars-only'

interface StyleDef {
  id: Style
  label: string
  description: string
}

const STYLES: StyleDef[] = [
  { id: 'full', label: 'Full Mirror', description: 'Mirror chars + reverse order (true da Vinci)' },
  { id: 'reverse-only', label: 'Reverse Only', description: 'Just reverse the string order' },
  { id: 'mirror-chars-only', label: 'Mirror Chars', description: 'Replace chars only, keep order' },
]

// ─── Transform functions ──────────────────────────────────────────────────────

function mirrorChar(ch: string): string {
  return MIRROR_MAP[ch] ?? ch
}

function applyStyle(text: string, style: Style): string {
  const mirrored = text.split('').map(mirrorChar).join('')
  if (style === 'full') return mirrored.split('').reverse().join('')
  if (style === 'reverse-only') return text.split('').reverse().join('')
  return mirrored // mirror-chars-only
}

// ─── Examples ─────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Da Vinci', input: 'Leonardo da Vinci' },
  { label: 'Hello World', input: 'Hello World' },
  { label: 'Mirror Mirror', input: 'Mirror mirror on the wall' },
  { label: 'Secret Note', input: 'This is a secret message' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function MirrorTextTool() {
  const [input, setInput] = useState('')
  const [style, setStyle] = useState<Style>('full')

  const output = useMemo(() => {
    if (!input.trim()) return ''
    // Handle multi-line: mirror each line independently
    return input
      .split('\n')
      .map(line => applyStyle(line, style))
      .join('\n')
  }, [input, style])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      toast({ title: 'Copied!', description: 'Mirror text copied to clipboard.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => setInput(ex.input)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Style selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Mirror Style</label>
        <div className="grid grid-cols-3 gap-2">
          {STYLES.map(s => (
            <button
              key={s.id}
              onClick={() => setStyle(s.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                style === s.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-muted/10 hover:border-primary/30 hover:bg-primary/5'
              }`}
            >
              <p className="text-xs font-bold">{s.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Text</label>
        <Textarea
          placeholder="Type something to mirror it..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="min-h-[100px] resize-none text-sm"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{input.length} characters</span>
          {input && (
            <button onClick={() => setInput('')} className="flex items-center gap-1 hover:text-foreground transition-colors">
              <RefreshCw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Output */}
      {input.trim() && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Mirror Result
            </h3>
            <Button size="sm" variant="outline" onClick={copy} className="h-7 px-2 gap-1 text-xs">
              <Copy className="w-3 h-3" /> Copy
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-muted/20 border min-h-[80px]">
            <p className="text-lg font-mono leading-relaxed whitespace-pre-wrap break-words select-all tracking-wide">
              {output}
            </p>
          </div>

          {/* Side-by-side comparison */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-muted-foreground mb-1 font-medium uppercase tracking-wider text-[10px]">Original</p>
              <p className="font-mono break-all">{input.split('\n')[0]}</p>
            </div>
            <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-muted-foreground mb-1 font-medium uppercase tracking-wider text-[10px]">Mirrored</p>
              <p className="font-mono break-all">{output.split('\n')[0]}</p>
            </div>
          </div>
        </div>
      )}

      {!input.trim() && (
        <div className="text-center py-10 text-muted-foreground">
          <div className="text-5xl mb-3 font-mono tracking-widest">
            <span>Hello</span>
            <span className="mx-2 opacity-30">↔</span>
            <span>ollǝH</span>
          </div>
          <p className="text-sm">Type text above to mirror it like da Vinci.</p>
          <p className="text-xs mt-1 opacity-60">Characters are replaced with their Unicode mirror equivalents, then the string is reversed.</p>
        </div>
      )}

      {/* Quick reference */}
      <div className="p-4 bg-muted/20 rounded-xl border">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Mirror Character Reference</p>
        <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 text-xs font-mono text-center">
          {[
            ['b','d'],['d','b'],['p','q'],['q','p'],['n','ᴎ'],
            ['e','ə'],['f','ꟻ'],['k','ʞ'],['r','ɹ'],['y','ʎ'],
            ['B','ᗺ'],['C','Ↄ'],['D','ᗡ'],['E','Ǝ'],['N','И'],
            ['P','ꟼ'],['R','ᴚ'],['S','Ƨ'],['6','9'],['9','6'],
          ].map(([orig, mirror]) => (
            <div key={orig} className="p-1.5 bg-background rounded-lg border">
              <p className="text-primary font-bold">{orig}</p>
              <p className="text-muted-foreground text-[10px]">→{mirror}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
