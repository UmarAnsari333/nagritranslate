'use client'

import { useState } from 'react'
import { Search, Loader2, Copy, Check, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

interface DatamuseWord {
  word: string
  score: number
  tags?: string[]
}

const EXAMPLES = [
  { label: 't??k', desc: 'teak, tuck, tack…' },
  { label: '*tion', desc: 'nation, action…' },
  { label: 'b*nd', desc: 'band, bond, bind…' },
  { label: 'un*', desc: 'undo, unite, until…' },
]

export function WordPatternTool() {
  const [pattern, setPattern] = useState('')
  const [meansLike, setMeansLike] = useState('')
  const [results, setResults] = useState<DatamuseWord[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const search = async (sp = pattern) => {
    const trimmed = sp.trim()
    if (!trimmed) return
    setLoading(true)
    setError('')
    setResults([])
    setSearched(trimmed)

    try {
      const params = new URLSearchParams({ sp: trimmed, max: '100', md: 'p' })
      if (meansLike.trim()) params.set('ml', meansLike.trim())

      const res = await fetch(`https://api.datamuse.com/words?${params}`)
      if (!res.ok) throw new Error()
      const data: DatamuseWord[] = await res.json()
      if (data.length === 0) setError(`No words found matching "${trimmed}".`)
      setResults(data)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search()
  }

  const handleCopy = async () => {
    if (!results.length) return
    await navigator.clipboard.writeText(results.map((r) => r.word).join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const posLabel = (tags?: string[]) => {
    if (!tags) return ''
    const pos = tags.find((t) => ['n', 'v', 'adj', 'adv'].includes(t))
    const map: Record<string, string> = { n: 'noun', v: 'verb', adj: 'adj', adv: 'adv' }
    return pos ? map[pos] : ''
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      <Card className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pattern">
              Word pattern{' '}
              <span className="text-xs text-muted-foreground font-normal">
                (* = any letters, ? = one letter)
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
                  placeholder="e.g. t??k or *tion"
                  className="w-full pl-9 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm font-mono transition"
                  autoComplete="off"
                />
              </div>
              <Button type="submit" disabled={loading || !pattern.trim()}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Find Words'}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="means-like">
              Also means like{' '}
              <span className="text-xs text-muted-foreground font-normal">(optional — filter by meaning)</span>
            </Label>
            <input
              id="means-like"
              type="text"
              value={meansLike}
              onChange={(e) => setMeansLike(e.target.value)}
              placeholder="e.g. fast, large, happy"
              className="w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm transition"
              autoComplete="off"
            />
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

      {results.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground font-mono">{searched}</span> — {results.length} words found
            </p>
            <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8">
              {copied ? <><Check className="w-4 h-4 mr-1" />Copied!</> : <><Copy className="w-4 h-4 mr-1" />Copy all</>}
            </Button>
          </div>
          <Card className="p-4">
            <div className="flex flex-wrap gap-2">
              {results.map((r) => {
                const pos = posLabel(r.tags)
                return (
                  <Link
                    key={r.word}
                    href={`/dictionary/${r.word}`}
                    className="inline-flex items-baseline gap-1 text-sm px-3 py-1 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {r.word}
                    {pos && <span className="text-[10px] text-muted-foreground">{pos}</span>}
                  </Link>
                )
              })}
            </div>
          </Card>
        </div>
      )}

      <Card className="p-4 bg-violet-50 dark:bg-violet-950 border-violet-200 dark:border-violet-800">
        <div className="flex items-start gap-2">
          <HelpCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-violet-900 dark:text-violet-100">
            <p className="font-semibold mb-2">Pattern Syntax</p>
            <ul className="space-y-1 text-xs text-violet-800 dark:text-violet-200">
              <li><code className="font-mono bg-violet-100 dark:bg-violet-900 px-1 rounded">*</code> — any number of letters (including zero)</li>
              <li><code className="font-mono bg-violet-100 dark:bg-violet-900 px-1 rounded">?</code> — exactly one letter</li>
              <li><code className="font-mono bg-violet-100 dark:bg-violet-900 px-1 rounded">t??k</code> — 4-letter words starting with t, ending in k</li>
              <li><code className="font-mono bg-violet-100 dark:bg-violet-900 px-1 rounded">*tion</code> — any word ending in "tion"</li>
              <li><code className="font-mono bg-violet-100 dark:bg-violet-900 px-1 rounded">un*</code> — any word starting with "un"</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
