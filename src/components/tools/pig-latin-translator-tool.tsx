'use client'

import { useState, useMemo } from 'react'
import { Copy, Check, ArrowLeftRight, ChevronDown, ChevronUp, X } from 'lucide-react'

// ─── Pig Latin Engine ─────────────────────────────────────────────────────────

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u'])
function isVowel(ch: string) { return VOWELS.has(ch.toLowerCase()) }

function preserveCase(original: string, translated: string): string {
  if (!original || !translated) return translated
  const isAllCaps = original === original.toUpperCase() && original.toLowerCase() !== original.toUpperCase()
  const isCap = original[0] === original[0].toUpperCase() && original[0] !== original[0].toLowerCase()
  if (isAllCaps) return translated.toUpperCase()
  if (isCap) return translated.charAt(0).toUpperCase() + translated.slice(1).toLowerCase()
  return translated
}

interface WordResult { original: string; result: string; rule: string }

function encodeWord(word: string, variant: 'way' | 'yay'): WordResult {
  const m = word.match(/^([^a-zA-Z]*)([a-zA-Z]*)([^a-zA-Z]*)$/)
  if (!m || !m[2]) return { original: word, result: word, rule: '—' }
  const [, pre, core, post] = m
  if (!core) return { original: word, result: word, rule: '—' }
  const low = core.toLowerCase()

  if (isVowel(low[0])) {
    const suf = variant === 'yay' ? 'yay' : 'way'
    return { original: word, result: pre + preserveCase(core, low + suf) + post, rule: `Vowel start → add "${suf}"` }
  }
  if (low.startsWith('qu')) {
    const raw = low.slice(2) + 'quay'
    return { original: word, result: pre + preserveCase(core, raw) + post, rule: 'Move "qu" cluster → end + "ay"' }
  }
  let i = 0
  while (i < low.length && !isVowel(low[i])) i++
  if (i === low.length) {
    return { original: word, result: pre + preserveCase(core, low + 'ay') + post, rule: 'No vowels → add "ay"' }
  }
  const cluster = low.slice(0, i)
  const raw = low.slice(i) + cluster + 'ay'
  return { original: word, result: pre + preserveCase(core, raw) + post, rule: `Move "${cluster}" → end + "ay"` }
}

function decodeWord(word: string): string {
  const m = word.match(/^([^a-zA-Z]*)([a-zA-Z]*)([^a-zA-Z]*)$/)
  if (!m || !m[2]) return word
  const [, pre, core, post] = m
  const low = core.toLowerCase()
  if (low.endsWith('way') && low.length > 3) return pre + preserveCase(core, low.slice(0, -3)) + post
  if (low.endsWith('yay') && low.length > 3) return pre + preserveCase(core, low.slice(0, -3)) + post
  if (low.endsWith('ay') && low.length > 2) {
    const body = low.slice(0, -2)
    let j = body.length - 1
    while (j >= 0 && !isVowel(body[j])) j--
    return pre + preserveCase(core, body.slice(j + 1) + body.slice(0, j + 1)) + post
  }
  return word
}

function processText(text: string, mode: 'encode' | 'decode', variant: 'way' | 'yay') {
  const breakdown: WordResult[] = []
  let output = ''
  for (const token of text.split(/(\s+)/)) {
    if (/^\s+$/.test(token) || token === '') { output += token; continue }
    if (mode === 'encode') {
      const r = encodeWord(token, variant)
      output += r.result
      if (/[a-zA-Z]/.test(token)) breakdown.push(r)
    } else {
      output += decodeWord(token)
    }
  }
  return { output, breakdown }
}

// ─── Quick lookup words ───────────────────────────────────────────────────────

const QUICK_WORDS = [
  { en: 'no',       pl: 'onay' },
  { en: 'yes',      pl: 'esyay' },
  { en: 'hello',    pl: 'ellohay' },
  { en: 'love',     pl: 'ovelay' },
  { en: 'friend',   pl: 'iendfray' },
  { en: 'school',   pl: 'oolschay' },
  { en: 'please',   pl: 'easeplay' },
  { en: 'thank you',pl: 'ankthay ouyay' },
  { en: 'cool',     pl: 'oolcay' },
  { en: 'happy',    pl: 'appyhay' },
  { en: 'money',    pl: 'oneymay' },
  { en: 'food',     pl: 'oodfay' },
]

const EXAMPLE_SENTENCES = [
  'Hello, my name is Pig Latin.',
  'No, I do not understand you.',
  'The quick brown fox jumps over the lazy dog.',
  'Can you understand what I am saying?',
]

// ─── Component ────────────────────────────────────────────────────────────────

export function PigLatinTranslatorTool() {
  const [input, setInput] = useState('Hello, my name is Pig Latin.')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [variant, setVariant] = useState<'way' | 'yay'>('way')
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [copied, setCopied] = useState(false)

  const { output, breakdown } = useMemo(() => processText(input, mode, variant), [input, mode, variant])

  function copy() {
    navigator.clipboard.writeText(output).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000) })
  }

  function swap() { setInput(output); setMode((m) => (m === 'encode' ? 'decode' : 'encode')) }

  const inputLabel  = mode === 'encode' ? 'English'   : 'Pig Latin'
  const outputLabel = mode === 'encode' ? 'Pig Latin' : 'English'

  return (
    <div className="space-y-5">

      {/* ── Top controls ── */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        {/* Direction tabs */}
        <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border">
          <button onClick={() => setMode('encode')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${mode === 'encode' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            🐷 English → Pig Latin
          </button>
          <button onClick={() => setMode('decode')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${mode === 'decode' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            🔄 Pig Latin → English
          </button>
        </div>

        {/* Variant picker */}
        {mode === 'encode' && (
          <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border">
            <button onClick={() => setVariant('way')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${variant === 'way' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              Classic <span className="opacity-60">(-way)</span>
            </button>
            <button onClick={() => setVariant('yay')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${variant === 'yay' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              Yay <span className="opacity-60">(-yay)</span>
            </button>
          </div>
        )}
      </div>

      {/* ── Translator panels ── */}
      <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-0 rounded-2xl border overflow-hidden shadow-sm">

        {/* Input panel */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-muted/10 border-b">
            <span className="text-xs font-bold tracking-wide uppercase text-muted-foreground">{inputLabel}</span>
            {input && (
              <button onClick={() => setInput('')}
                className="text-muted-foreground hover:text-foreground transition p-0.5 rounded">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={7}
            placeholder={mode === 'encode' ? 'Type or paste English text…' : 'Paste Pig Latin text…'}
            className="flex-1 w-full px-4 py-3 bg-background text-sm resize-none focus:outline-none placeholder:text-muted-foreground/50 leading-relaxed"
          />
          <div className="px-4 py-2 border-t bg-muted/5 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{input.length} chars · {input.split(/\s+/).filter(Boolean).length} words</span>
          </div>
        </div>

        {/* Swap button (vertical divider on desktop, horizontal on mobile) */}
        <div className="flex items-center justify-center border-x sm:border-x bg-muted/5 px-1 py-3 sm:py-0">
          <button onClick={swap} title="Swap input and output"
            className="flex flex-col sm:flex-row items-center gap-1 p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary transition text-muted-foreground group">
            <ArrowLeftRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-semibold hidden sm:hidden">Swap</span>
          </button>
        </div>

        {/* Output panel */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-muted/10 border-b">
            <span className="text-xs font-bold tracking-wide uppercase text-muted-foreground">{outputLabel}</span>
            <button onClick={copy}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition">
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            rows={7}
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            className="flex-1 w-full px-4 py-3 bg-muted/5 text-sm resize-none focus:outline-none cursor-pointer leading-relaxed text-foreground"
          />
          <div className="px-4 py-2 border-t bg-muted/5 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{output.split(/\s+/).filter(Boolean).length} words</span>
            <span className="text-[11px] text-muted-foreground">Click output to select all</span>
          </div>
        </div>
      </div>

      {/* ── Example sentences ── */}
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="text-xs text-muted-foreground font-medium shrink-0">Try:</span>
        {EXAMPLE_SENTENCES.map((ex) => (
          <button key={ex} onClick={() => { setInput(ex); setMode('encode') }}
            className="text-xs px-2.5 py-1 rounded-full border bg-muted/20 hover:bg-muted/40 transition text-muted-foreground hover:text-foreground">
            {ex.length > 30 ? ex.slice(0, 28) + '…' : ex}
          </button>
        ))}
      </div>

      {/* ── Quick Lookup ── */}
      <div className="rounded-2xl border overflow-hidden">
        <div className="px-4 py-3 bg-muted/10 border-b">
          <h3 className="text-sm font-bold">Quick Word Lookup</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Common words — click any to use as input</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y">
          {QUICK_WORDS.map(({ en, pl }) => (
            <button key={en} onClick={() => { setInput(en); setMode('encode') }}
              className="flex items-center justify-between px-4 py-3 hover:bg-muted/10 transition text-left group">
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition">{en}</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-mono">{pl}</p>
              </div>
              <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition">Try →</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Word-by-word breakdown ── */}
      {mode === 'encode' && breakdown.length > 0 && (
        <div className="rounded-xl border overflow-hidden">
          <button onClick={() => setShowBreakdown((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-3 bg-muted/10 hover:bg-muted/20 transition text-sm font-semibold">
            <span>Word-by-Word Breakdown <span className="text-muted-foreground font-normal">({breakdown.length} words)</span></span>
            {showBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {showBreakdown && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/10 border-b">
                  <tr>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground">English</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground">Pig Latin</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground hidden sm:table-cell">Rule Applied</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {breakdown.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/5">
                      <td className="px-4 py-2.5 font-medium">{row.original}</td>
                      <td className="px-4 py-2.5 text-primary font-semibold">{row.result}</td>
                      <td className="px-4 py-2.5 text-muted-foreground text-xs hidden sm:table-cell">{row.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
