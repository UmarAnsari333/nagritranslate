'use client'

import { useState, useCallback } from 'react'
import { Search, Loader2, Copy, Check, HelpCircle, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

interface DatamuseWord {
  word: string
  score: number
  tags?: string[]
  numSyllables?: number
}

const LETTER_SCORES: Record<string, number> = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, S: 1, T: 1, R: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
}

function wordScore(word: string): number {
  return word.toUpperCase().split('').reduce((sum, c) => sum + (LETTER_SCORES[c] ?? 0), 0)
}

function ScoreBreakdown({ word }: { word: string }) {
  return (
    <span className="flex items-center gap-0.5 text-[10px] font-mono text-muted-foreground">
      {word.toUpperCase().split('').map((c, i) => (
        <span key={i} className={(LETTER_SCORES[c] ?? 0) >= 8 ? 'text-amber-600 dark:text-amber-400 font-bold' : ''}>
          {c}
          <sup>{LETTER_SCORES[c] ?? 0}</sup>
        </span>
      ))}
    </span>
  )
}

type SortBy = 'score' | 'length' | 'alpha'

const EXAMPLES = [
  { label: 'q?', desc: 'QI, QA…' },
  { label: 'z??', desc: 'ZAP, ZIT, ZEN…' },
  { label: 'j???', desc: 'JAZZ, JIBE, JOKE…' },
  { label: '??x', desc: '3-letter X words' },
  { label: '*tion', desc: 'nation, action…' },
  { label: '?????', desc: 'all 5-letter words' },
]

export function ScrabbleFinderTool() {
  const [pattern, setPattern] = useState('')
  const [results, setResults] = useState<DatamuseWord[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [sortBy, setSortBy] = useState<SortBy>('score')
  const [filterLen, setFilterLen] = useState<number | null>(null)

  const search = useCallback(async (sp = pattern) => {
    const trimmed = sp.trim().toLowerCase()
    if (!trimmed) return
    setLoading(true)
    setError('')
    setResults([])
    setSearched(trimmed)
    setFilterLen(null)

    try {
      const url = `https://api.datamuse.com/words?sp=${encodeURIComponent(trimmed)}&md=p&max=200`
      const res = await fetch(url)
      const data: DatamuseWord[] = await res.json()
      if (!Array.isArray(data) || data.length === 0) {
        setError(`No words found matching "${trimmed}".`)
      } else {
        setResults(data)
      }
    } catch {
      setError('Could not reach the word API. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }, [pattern])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search()
  }

  const handleCopy = async () => {
    if (!results.length) return
    await navigator.clipboard.writeText(sorted.map((r) => `${r.word} (${wordScore(r.word)}pts)`).join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Sort & filter
  const filtered = filterLen ? results.filter((r) => r.word.length === filterLen) : results
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'score') return wordScore(b.word) - wordScore(a.word)
    if (sortBy === 'length') return b.word.length - a.word.length
    return a.word.localeCompare(b.word)
  })

  // Available lengths from results
  const lengths = [...new Set(results.map((r) => r.word.length))].sort((a, b) => a - b)

  const topScore = sorted.length > 0 ? wordScore(sorted[0].word) : 0

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Input */}
      <Card className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pattern">
              Pattern{' '}
              <span className="text-xs text-muted-foreground font-normal">
                (* = any letters, ? = one letter) — results sorted by Scrabble score
              </span>
            </Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  id="pattern"
                  type="text"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  placeholder="e.g. q? or z?? or *tion"
                  className="w-full pl-9 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm font-mono transition"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <Button type="submit" disabled={loading || !pattern.trim()}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Find Words'}
              </Button>
            </div>
          </div>
        </form>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-xs text-muted-foreground mt-0.5">Try:</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex.label}
              onClick={() => { setPattern(ex.label); search(ex.label) }}
              className="text-xs px-2.5 py-1 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors font-mono"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </Card>

      {error && <p className="text-sm text-muted-foreground text-center py-4">{error}</p>}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground font-mono">{searched}</span>
              {' '}— {filtered.length} valid Scrabble word{filtered.length !== 1 ? 's' : ''}
              {topScore > 0 && sortBy === 'score' && (
                <span className="ml-2 text-amber-600 dark:text-amber-400 font-medium">
                  · top score: {topScore} pts
                </span>
              )}
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8">
                {copied ? <><Check className="w-4 h-4 mr-1" />Copied!</> : <><Copy className="w-4 h-4 mr-1" />Copy</>}
              </Button>
            </div>
          </div>

          {/* Sort */}
          <div className="flex flex-wrap items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Sort:</span>
            {(['score', 'length', 'alpha'] as SortBy[]).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  sortBy === s ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {s === 'score' ? 'Highest score' : s === 'length' ? 'Longest first' : 'A–Z'}
              </button>
            ))}
            {lengths.length > 1 && (
              <>
                <span className="text-xs text-muted-foreground ml-2">Length:</span>
                <button
                  onClick={() => setFilterLen(null)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                    !filterLen ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted hover:bg-accent'
                  }`}
                >
                  All
                </button>
                {lengths.map((l) => (
                  <button
                    key={l}
                    onClick={() => setFilterLen(filterLen === l ? null : l)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      filterLen === l ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted hover:bg-accent'
                    }`}
                  >
                    {l}L
                  </button>
                ))}
              </>
            )}
          </div>

          {/* Word cards */}
          <Card className="p-4">
            <div className="flex flex-wrap gap-2">
              {sorted.map((r) => {
                const pts = wordScore(r.word)
                const isHigh = pts >= 15
                return (
                  <Link
                    key={r.word}
                    href={`/dictionary/${r.word}`}
                    className={`group inline-flex flex-col items-center px-3 py-2 rounded-xl border bg-background hover:bg-accent hover:text-accent-foreground transition-colors ${
                      isHigh ? 'border-amber-300 dark:border-amber-700' : ''
                    }`}
                  >
                    <span className="text-sm font-bold font-mono tracking-wide">{r.word.toUpperCase()}</span>
                    <ScoreBreakdown word={r.word} />
                    <span className={`text-xs font-semibold mt-0.5 ${isHigh ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground'}`}>
                      {pts} pts
                    </span>
                  </Link>
                )
              })}
            </div>
          </Card>
        </div>
      )}

      {/* Help card */}
      <Card className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800">
        <div className="flex items-start gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-emerald-900 dark:text-emerald-100">
            <p className="font-semibold mb-2">How to use</p>
            <ul className="space-y-1 text-xs text-emerald-800 dark:text-emerald-200">
              <li><code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 rounded">?</code> — exactly one letter &nbsp;·&nbsp; <code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 rounded">*</code> — any number of letters</li>
              <li><code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 rounded">q?</code> — 2-letter Q words (QI, QA) &nbsp;·&nbsp; <code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 rounded">z??</code> — 3-letter Z words</li>
              <li><code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 rounded">*x</code> — words ending in X &nbsp;·&nbsp; <code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 rounded">?????</code> — all valid 5-letter words</li>
              <li>Results are sorted by Scrabble point value — highest scoring words first.</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
