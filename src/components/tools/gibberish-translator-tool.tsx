'use client'

import { useState, useMemo } from 'react'
import { Copy, Check, Volume2, ArrowLeftRight } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const VOWELS = 'aeiouAEIOU'
const isVowel = (c: string) => VOWELS.includes(c)

function applyWordwise(text: string, fn: (word: string) => string): string {
  return text.replace(/[a-zA-Z']+/g, fn)
}

// ─── Pig Latin ────────────────────────────────────────────────────────────────

function pigLatinEncode(word: string): string {
  const isCapital = /^[A-Z]/.test(word)
  const lower = word.toLowerCase()
  const vi = lower.split('').findIndex(isVowel)

  let result: string
  if (vi === 0) {
    result = lower + 'way'
  } else if (vi === -1) {
    result = lower + 'ay'
  } else {
    result = lower.slice(vi) + lower.slice(0, vi) + 'ay'
  }
  return isCapital ? result[0].toUpperCase() + result.slice(1) : result
}

function pigLatinDecode(word: string): string {
  const isCapital = /^[A-Z]/.test(word)
  const lower = word.toLowerCase()

  let result: string
  if (lower.endsWith('way')) {
    result = lower.slice(0, -3)
  } else if (lower.endsWith('ay')) {
    const stem = lower.slice(0, -2)
    let split = stem.length
    for (let i = stem.length - 1; i >= 0; i--) {
      if (isVowel(stem[i])) { split = i + 1; break }
    }
    result = stem.slice(split) + stem.slice(0, split)
  } else {
    result = lower
  }
  return isCapital ? result[0].toUpperCase() + result.slice(1) : result
}

// ─── Insertion variants ───────────────────────────────────────────────────────

function insertEncode(ins: string) {
  return (word: string) => word.replace(/[aeiouAEIOU]/g, v => ins + v)
}

function insertDecode(ins: string) {
  const esc = ins.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return (word: string) => word.replace(new RegExp(esc + '([aeiouAEIOU])', 'g'), '$1')
}

// ─── Tutnese ─────────────────────────────────────────────────────────────────

const TUT: Record<string, string> = {
  b:'bub', c:'cash', d:'dud', f:'fuf', g:'gug', h:'hash',
  j:'jay', k:'kack', l:'lul', m:'mum', n:'nun', p:'pub',
  q:'quack', r:'rut', s:'sus', t:'tut', v:'vuv', w:'wash',
  x:'ex', y:'yub', z:'zub',
}

const TUT_SORTED = Object.entries(TUT)
  .sort((a, b) => b[1].length - a[1].length) // longest first for greedy decode

function tutEncode(word: string): string {
  return [...word].map(c => {
    const l = c.toLowerCase()
    if (!TUT[l]) return c
    const enc = TUT[l]
    return /^[A-Z]/.test(c) ? enc[0].toUpperCase() + enc.slice(1) : enc
  }).join('')
}

function tutDecode(word: string): string {
  const lower = word.toLowerCase()
  let result = ''
  let i = 0
  while (i < lower.length) {
    if (isVowel(lower[i])) {
      result += lower[i++]
    } else {
      let matched = false
      for (const [orig, enc] of TUT_SORTED) {
        if (lower.startsWith(enc, i)) {
          result += orig
          i += enc.length
          matched = true
          break
        }
      }
      if (!matched) result += lower[i++]
    }
  }
  return result
}

// ─── Variant definitions ──────────────────────────────────────────────────────

interface Variant {
  id: string
  name: string
  emoji: string
  description: string
  exampleIn: string
  exampleOut: string
  encode: (t: string) => string
  decode: (t: string) => string
}

const VARIANTS: Variant[] = [
  {
    id: 'pig-latin',
    name: 'Pig Latin',
    emoji: '🐷',
    description: 'Move leading consonants to the end and add "ay". Words starting with a vowel get "way" added instead.',
    exampleIn: 'Hello World',
    exampleOut: 'Ellohay Orldway',
    encode: t => applyWordwise(t, pigLatinEncode),
    decode: t => applyWordwise(t, pigLatinDecode),
  },
  {
    id: 'ubbi-dubbi',
    name: 'Ubbi Dubbi',
    emoji: '🫧',
    description: 'Insert "ub" before every vowel. Famous from the 1970s US kids\' TV show Zoom.',
    exampleIn: 'Hello World',
    exampleOut: 'Hubellubo Wuborld',
    encode: t => applyWordwise(t, insertEncode('ub')),
    decode: t => applyWordwise(t, insertDecode('ub')),
  },
  {
    id: 'ob-language',
    name: 'Ob Language',
    emoji: '🔵',
    description: 'Insert "ob" before every vowel sound. A classic playground secret language spoken worldwide.',
    exampleIn: 'Hello World',
    exampleOut: 'Hobellobo Woborld',
    encode: t => applyWordwise(t, insertEncode('ob')),
    decode: t => applyWordwise(t, insertDecode('ob')),
  },
  {
    id: 'op-language',
    name: 'Op Language',
    emoji: '🟠',
    description: 'Insert "op" before every vowel. Especially popular in Australia and parts of the United States.',
    exampleIn: 'Hello World',
    exampleOut: 'Hopelloрo Woporld',
    encode: t => applyWordwise(t, insertEncode('op')),
    decode: t => applyWordwise(t, insertDecode('op')),
  },
  {
    id: 'idig',
    name: 'Idig / Igpay',
    emoji: '🌀',
    description: 'Insert "idig" before every vowel — the most scrambled and unrecognisable of all variants.',
    exampleIn: 'Hello',
    exampleOut: 'Hidigellidigio',
    encode: t => applyWordwise(t, insertEncode('idig')),
    decode: t => applyWordwise(t, insertDecode('idig')),
  },
  {
    id: 'tutnese',
    name: 'Tutnese',
    emoji: '🔤',
    description: 'Replace every consonant with a unique syllable: B→bub, L→lul, T→tut, S→sus, H→hash… Vowels stay unchanged.',
    exampleIn: 'Hello',
    exampleOut: 'Hashelullulo',
    encode: t => applyWordwise(t, tutEncode),
    decode: t => applyWordwise(t, tutDecode),
  },
]

const EXAMPLES = [
  { label: 'Tongue Twister', text: 'She sells seashells by the seashore' },
  { label: 'Shakespeare', text: 'To be or not to be that is the question' },
  { label: 'Classic', text: 'The quick brown fox jumps over the lazy dog' },
  { label: 'Woodchuck', text: 'How much wood would a woodchuck chuck' },
  { label: 'Peter Piper', text: 'Peter Piper picked a peck of pickled peppers' },
  { label: 'Simple', text: 'Hello my name is' },
]

// ─── Component ────────────────────────────────────────────────────────────────

type Mode = 'encode' | 'decode'

export function GibberishTranslatorTool() {
  const [input, setInput] = useState('')
  const [variantId, setVariantId] = useState('pig-latin')
  const [mode, setMode] = useState<Mode>('encode')
  const [copied, setCopied] = useState(false)

  const variant = VARIANTS.find(v => v.id === variantId) ?? VARIANTS[0]

  const output = useMemo(() => {
    if (!input) return ''
    return mode === 'encode' ? variant.encode(input) : variant.decode(input)
  }, [input, variant, mode])

  const breakdown = useMemo(() => {
    if (!input.trim()) return []
    const parts = input.match(/[a-zA-Z']+|[^a-zA-Z']+/g) ?? []
    return parts.map(part => ({
      original: part,
      transformed: /[a-zA-Z]/.test(part)
        ? (mode === 'encode' ? variant.encode(part) : variant.decode(part))
        : part,
      isWord: /[a-zA-Z]/.test(part),
    }))
  }, [input, variant, mode])

  const copy = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast({ title: 'Copied!', description: 'Gibberish text copied to clipboard.' })
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

  return (
    <div className="space-y-6 w-full min-w-0">

      {/* Variant selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Choose Gibberish Style</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {VARIANTS.map(v => (
            <button
              key={v.id}
              onClick={() => setVariantId(v.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                variantId === v.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-muted/20 hover:bg-muted/40 border-muted/40'
              }`}
            >
              <span className="text-xl">{v.emoji}</span>
              <p className="text-sm font-semibold mt-1 leading-tight">{v.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Variant info pill */}
      <div className="p-3 bg-primary/5 rounded-xl border border-primary/20 text-sm">
        <p className="text-foreground font-medium mb-1">{variant.emoji} {variant.name}</p>
        <p className="text-muted-foreground text-xs leading-relaxed">{variant.description}</p>
        <p className="mt-1.5 font-mono text-xs bg-background/60 px-2 py-1 rounded-lg inline-block">
          &quot;{variant.exampleIn}&quot; → &quot;{variant.exampleOut}&quot;
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex items-center gap-3">
        <div className="flex gap-1 p-1 bg-muted/30 rounded-xl">
          {(['encode', 'decode'] as Mode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                mode === m
                  ? 'bg-background shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {m === 'encode' ? '🔒 Encode' : '🔓 Decode'}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {mode === 'encode' ? 'English → Gibberish' : 'Gibberish → English'}
        </p>
      </div>

      {/* Example sentences */}
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Try an example</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.text}
              onClick={() => { setInput(ex.text); setMode('encode') }}
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
            {mode === 'encode' ? 'English Text' : 'Gibberish to Decode'}
          </label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Type English here…' : 'Paste gibberish here to decode…'}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none font-mono"
          />
          <p className="text-xs text-muted-foreground text-right">{input.length} characters</p>
        </div>

        {/* Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              {mode === 'encode' ? 'Gibberish Output' : 'Decoded English'}
            </label>
            <div className="flex items-center gap-1.5">
              <button
                onClick={speak}
                disabled={!output}
                title="Listen aloud"
                className="p-1.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={swap}
                disabled={!output}
                title="Swap — use output as new input"
                className="p-1.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
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
                {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
              </button>
            </div>
          </div>
          <div
            onClick={copy}
            className="min-h-[124px] w-full px-4 py-3 rounded-xl border bg-muted/10 text-sm font-mono break-all leading-relaxed cursor-pointer select-all"
          >
            {output
              ? output
              : <span className="text-muted-foreground italic not-italic">Translation appears here…</span>
            }
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

      {/* Tutnese reference table */}
      {variantId === 'tutnese' && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Tutnese Consonant Chart
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
            {Object.entries(TUT).map(([c, enc]) => (
              <div key={c} className="p-2 bg-muted/20 rounded-xl border text-center">
                <p className="text-sm font-bold uppercase">{c}</p>
                <p className="text-xs text-primary font-mono">{enc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pig Latin quick-reference rules */}
      {variantId === 'pig-latin' && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Pig Latin Rules
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { rule: 'Starts with consonant(s)', example: 'string → ingstray', detail: 'Move all leading consonants to end, add "ay"' },
              { rule: 'Starts with vowel', example: 'apple → appleway', detail: 'Keep word as-is, just add "way" to the end' },
              { rule: 'No vowels', example: 'nth → nthay', detail: 'Treat entire word as consonant cluster, add "ay"' },
            ].map(r => (
              <div key={r.rule} className="p-3 bg-muted/20 rounded-xl border">
                <p className="text-xs font-semibold mb-1">{r.rule}</p>
                <p className="text-xs font-mono text-primary mb-1">{r.example}</p>
                <p className="text-[10px] text-muted-foreground">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
