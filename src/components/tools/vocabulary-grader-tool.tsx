'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Loader2, RotateCcw, ExternalLink } from 'lucide-react'
import { LEGEND } from '@/lib/vocabulary-rarity'

interface Rarity {
  label: string
  level: number
  bg: string
  text: string
  border: string
}

function getRarity(freq: number): Rarity {
  if (freq >= 100) return { label: 'Very Common', level: 0, bg: '', text: 'text-foreground', border: '' }
  if (freq >= 10)  return { label: 'Common',      level: 1, bg: '', text: 'text-foreground', border: '' }
  if (freq >= 1)   return { label: 'Everyday',    level: 2, bg: 'bg-sky-100 dark:bg-sky-900/40', text: 'text-sky-900 dark:text-sky-100', border: 'border-b border-sky-300 dark:border-sky-700' }
  if (freq >= 0.1) return { label: 'Uncommon',    level: 3, bg: 'bg-amber-100 dark:bg-amber-900/40', text: 'text-amber-900 dark:text-amber-100', border: 'border-b border-amber-400 dark:border-amber-600' }
  if (freq >= 0.01)return { label: 'Rare',        level: 4, bg: 'bg-orange-100 dark:bg-orange-900/40', text: 'text-orange-900 dark:text-orange-100', border: 'border-b-2 border-orange-500' }
  return               { label: 'Very Rare',       level: 5, bg: 'bg-red-100 dark:bg-red-900/40', text: 'text-red-900 dark:text-red-100', border: 'border-b-2 border-red-500' }
}

interface Token { raw: string; word: string }
interface WordResult { word: string; freq: number | null; rarity: Rarity | null }

function tokenise(text: string): Token[] {
  const parts = text.split(/(\s+)/)
  const tokens: Token[] = []
  for (const part of parts) {
    if (/^\s+$/.test(part)) {
      tokens.push({ raw: part, word: '' })
    } else {
      for (const sp of part.split(/([^a-zA-Z']+)/)) {
        const cleaned = sp.replace(/^'+|'+$/g, '').toLowerCase()
        tokens.push({ raw: sp, word: /^[a-zA-Z]/.test(sp) ? cleaned : '' })
      }
    }
  }
  return tokens.filter((t) => t.raw.length > 0)
}

async function fetchFreq(word: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=f&max=1`)
    if (!res.ok) return null
    const data: Array<{ word: string; tags?: string[] }> = await res.json()
    if (!data[0] || data[0].word !== word) return null
    const tag = data[0].tags?.find((t) => t.startsWith('f:'))
    return tag ? parseFloat(tag.slice(2)) : null
  } catch {
    return null
  }
}

const SAMPLE_TEXT = `The sun dipped below the horizon, casting an ephemeral glow across the verdant hills. A melancholy silence pervaded the valley as the last vestige of daylight surrendered to the encroaching dusk. She stood there, contemplating the ineffable beauty of the moment, her thoughts adrift in a labyrinth of memories both sublime and bittersweet.`

const MAX_UNIQUE = 200
const BATCH = 20

export function VocabularyGraderTool() {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [progress, setProgress] = useState({ done: 0, total: 0 })
  const [results, setResults] = useState<Map<string, WordResult>>(new Map())
  const [tokens, setTokens] = useState<Token[]>([])

  const analyze = useCallback(async () => {
    const trimmed = text.trim()
    if (!trimmed) return
    const toks = tokenise(trimmed)
    setTokens(toks)
    const uniqueWords = [...new Set(toks.map((t) => t.word).filter(Boolean))].slice(0, MAX_UNIQUE)
    setProgress({ done: 0, total: uniqueWords.length })
    setStatus('loading')
    const map = new Map<string, WordResult>()
    for (let i = 0; i < uniqueWords.length; i += BATCH) {
      const batch = uniqueWords.slice(i, i + BATCH)
      const settled = await Promise.all(batch.map((w) => fetchFreq(w)))
      batch.forEach((w, idx) => {
        const freq = settled[idx]
        map.set(w, { word: w, freq, rarity: freq !== null ? getRarity(freq) : null })
      })
      setProgress({ done: Math.min(i + BATCH, uniqueWords.length), total: uniqueWords.length })
    }
    setResults(map)
    setStatus('done')
  }, [text])

  const reset = () => { setText(''); setStatus('idle'); setResults(new Map()); setTokens([]) }

  const counts: Record<string, number> = {}
  let gradedWords = 0
  results.forEach((r) => {
    if (r.rarity) { counts[r.rarity.label] = (counts[r.rarity.label] ?? 0) + 1; gradedWords++ }
  })
  const uncommonCount = (counts['Uncommon'] ?? 0) + (counts['Rare'] ?? 0) + (counts['Very Rare'] ?? 0)
  const uncommonPct = gradedWords > 0 ? Math.round((uncommonCount / gradedWords) * 100) : 0
  const notableWords = [...results.values()]
    .filter((r) => r.rarity && r.rarity.level >= 3)
    .sort((a, b) => (b.rarity!.level - a.rarity!.level) || a.word.localeCompare(b.word))

  return (
    <div>
      {/* Input */}
      {status === 'idle' && (
        <div className="mb-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here…"
            rows={8}
            className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-y transition"
          />
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={analyze}
              disabled={!text.trim()}
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              Analyze Text
            </button>
            <button
              onClick={() => setText(SAMPLE_TEXT)}
              className="px-4 py-2.5 border rounded-lg text-sm hover:bg-muted transition-colors"
            >
              Try sample text
            </button>
            <span className="text-xs text-muted-foreground ml-auto">
              {text.trim() ? `${text.trim().split(/\s+/).length} words` : ''}
            </span>
          </div>
        </div>
      )}

      {/* Loading */}
      {status === 'loading' && (
        <div className="mb-8 p-6 border rounded-2xl bg-muted/20 flex items-center gap-4">
          <Loader2 className="w-5 h-5 animate-spin text-primary shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">Checking word frequencies…</p>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress.total ? (progress.done / progress.total) * 100 : 0}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{progress.done} / {progress.total} unique words</p>
          </div>
        </div>
      )}

      {/* Results */}
      {status === 'done' && (
        <>
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-4 py-2 border rounded-lg text-sm hover:bg-muted transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> New text
            </button>
            <span className="text-xs text-muted-foreground ml-auto">
              {gradedWords} unique words graded · {uncommonPct}% uncommon or rarer
            </span>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 mb-5">
            {LEGEND.map((l) => (
              <span key={l.label} className={`text-xs px-2.5 py-1 rounded-full font-medium ${l.bg} ${l.text}`}>
                {l.label}
              </span>
            ))}
          </div>

          {/* Highlighted text */}
          <div className="p-5 border rounded-2xl bg-card mb-8 leading-8 text-base">
            {tokens.map((tok, i) => {
              if (!tok.word) return <span key={i}>{tok.raw}</span>
              const result = results.get(tok.word)
              if (!result?.rarity || result.rarity.level <= 1) return <span key={i}>{tok.raw}</span>
              return (
                <Link
                  key={i}
                  href={`/word-frequency/${tok.word}`}
                  title={`${result.rarity.label} — click for details`}
                  className={`inline rounded px-0.5 cursor-pointer transition-opacity hover:opacity-75 ${result.rarity.bg} ${result.rarity.text} ${result.rarity.border}`}
                >
                  {tok.raw}
                </Link>
              )
            })}
          </div>

          {/* Breakdown */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Breakdown</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {LEGEND.map((l) => (
                <div key={l.label} className={`p-3 rounded-xl text-center ${l.bg}`}>
                  <p className={`text-2xl font-bold tabular-nums ${l.text}`}>{counts[l.label] ?? 0}</p>
                  <p className={`text-[11px] font-medium mt-0.5 ${l.text}`}>{l.label}</p>
                </div>
              ))}
            </div>
            {uncommonCount > 0 && (
              <p className="text-sm text-muted-foreground mt-3">
                <span className="font-semibold text-foreground">{uncommonPct}%</span> of your unique vocabulary is Uncommon or rarer — typical literary prose sits between 15–30%.
              </p>
            )}
          </section>

          {/* Notable words table */}
          {notableWords.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Highlighted words</h2>
              <div className="border rounded-2xl overflow-hidden">
                {notableWords.map((r) => {
                  const freqDisplay = r.freq !== null
                    ? (r.freq < 0.01 ? r.freq.toFixed(4) : r.freq < 1 ? r.freq.toFixed(3) : r.freq.toFixed(1))
                    : '—'
                  const legend = LEGEND.find((l) => l.label === r.rarity!.label)
                  return (
                    <div key={r.word} className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${legend?.bg ?? ''} ${legend?.text ?? ''}`}>
                        {r.rarity!.label}
                      </span>
                      <span className="font-medium text-sm flex-1">{r.word}</span>
                      <span className="text-xs text-muted-foreground tabular-nums shrink-0">{freqDisplay} per million</span>
                      <Link href={`/word-frequency/${r.word}`} className="flex items-center gap-1 text-xs text-primary hover:underline shrink-0">
                        Details <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
