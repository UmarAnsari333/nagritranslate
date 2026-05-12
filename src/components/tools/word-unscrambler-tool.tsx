'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Shuffle } from 'lucide-react'
import Link from 'next/link'

interface DmWord { word: string; score: number }

function letterCounts(s: string): Record<string, number> {
  const c: Record<string, number> = {}
  for (const ch of s) c[ch] = (c[ch] ?? 0) + 1
  return c
}

function canMake(word: string, available: Record<string, number>): boolean {
  const needed = letterCounts(word)
  for (const [ch, n] of Object.entries(needed)) {
    if ((available[ch] ?? 0) < n) return false
  }
  return true
}

const EXAMPLES = ['listen', 'planet', 'garden', 'master', 'stream', 'friend', 'rescue', 'player', 'silent', 'tinsel']

export function WordUnscramblerTool() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<Record<number, string[]>>({})
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState('')
  const [minLen, setMinLen] = useState(2)
  const [done, setDone] = useState(false)

  const unscramble = useCallback(async (letters?: string) => {
    const raw = (letters ?? input).replace(/[^a-zA-Z]/g, '').toLowerCase()
    if (raw.length < 2) return
    if (letters) setInput(raw)
    setLoading(true)
    setDone(false)
    setResults({})

    const available = letterCounts(raw)
    const maxLen = Math.min(raw.length, 10)
    const lengths = Array.from({ length: maxLen - 1 }, (_, i) => i + 2)

    try {
      const fetches = lengths.map(len =>
        fetch(`https://api.datamuse.com/words?sp=${'?'.repeat(len)}&max=1000`)
          .then(r => r.json() as Promise<DmWord[]>)
          .catch(() => [] as DmWord[])
      )
      const responses = await Promise.all(fetches)

      const grouped: Record<number, string[]> = {}
      responses.forEach((words, i) => {
        const len = i + 2
        const valid = words.filter(w => canMake(w.word, available)).map(w => w.word)
        if (valid.length > 0) grouped[len] = valid
      })

      setResults(grouped)
      setSearched(raw)
    } finally {
      setLoading(false)
      setDone(true)
    }
  }, [input])

  const lengths = Object.keys(results).map(Number).sort((a, b) => b - a)
  const filtered = lengths.filter(l => l >= minLen)
  const visibleCount = filtered.reduce((s, l) => s + results[l].length, 0)
  const totalCount = lengths.reduce((s, l) => s + results[l].length, 0)

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={e => setInput(e.target.value.replace(/[^a-zA-Z]/g, '').toLowerCase())}
          onKeyDown={e => e.key === 'Enter' && unscramble()}
          placeholder="Enter scrambled letters… e.g. listen"
          className="text-base font-mono tracking-widest"
          maxLength={12}
          aria-label="Scrambled letters"
        />
        <Button
          onClick={() => unscramble()}
          disabled={loading || input.replace(/[^a-zA-Z]/g, '').length < 2}
          className="gap-2 shrink-0"
        >
          {loading
            ? <Loader2 className="h-4 w-4 animate-spin" />
            : <Shuffle className="h-4 w-4" />}
          Unscramble
        </Button>
      </div>

      {/* Min length filter — shown once results are ready */}
      {done && totalCount > 0 && (
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm text-muted-foreground shrink-0">Min length:</span>
          {[2, 3, 4, 5, 6].filter(n => n <= searched.length).map(n => (
            <button
              key={n}
              onClick={() => setMinLen(n)}
              className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                minLen === n
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {n}+
            </button>
          ))}
        </div>
      )}

      {/* Example chips */}
      {!done && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Try an example</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                onClick={() => unscramble(ex)}
                className="text-sm px-3 py-1.5 rounded-full border bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground font-mono transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {done && totalCount === 0 && (
        <div className="text-center py-10 text-muted-foreground">
          <p className="font-medium">No common words found for &ldquo;{searched}&rdquo;.</p>
          <p className="text-sm mt-1">Try adding more letters or check for typos.</p>
        </div>
      )}

      {/* Results grouped by length */}
      {done && totalCount > 0 && (
        <div className="space-y-5">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{visibleCount}</span> word{visibleCount !== 1 ? 's' : ''} from{' '}
            <span className="font-mono font-semibold text-foreground">{searched.toUpperCase()}</span>
            {minLen > 2 && <span> ({totalCount} total, filtered to {minLen}+ letters)</span>}
          </p>
          {filtered.map(len => (
            <div key={len}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{len} letters</span>
                <span className="text-xs text-muted-foreground">— {results[len].length} word{results[len].length !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {results[len].map(word => (
                  <Link
                    key={word}
                    href={`/dictionary/${encodeURIComponent(word)}`}
                    className="px-3 py-1.5 rounded-xl border bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
