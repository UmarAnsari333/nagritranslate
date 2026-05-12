'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Search, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BigramResult {
  word: string
  score: number
}

interface BigramData {
  before: BigramResult[]
  after: BigramResult[]
}

const EXAMPLES = ['coffee', 'dark', 'deep', 'free', 'high', 'long', 'night', 'run', 'time', 'wild']

function ResultList({
  items,
  direction,
  pivot,
}: {
  items: BigramResult[]
  direction: 'before' | 'after'
  pivot: string
}) {
  const maxScore = items[0]?.score ?? 1

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const pct = Math.round((item.score / maxScore) * 100)
        return (
          <div key={item.word} className="group relative flex items-center gap-3 rounded-xl border bg-card px-4 py-2.5 hover:bg-muted/40 transition-colors overflow-hidden">
            {/* Frequency bar behind */}
            <div
              className="absolute inset-y-0 left-0 bg-primary/5 rounded-xl transition-all"
              style={{ width: `${pct}%` }}
            />
            <span className="relative text-xs text-muted-foreground font-mono w-5 shrink-0">{i + 1}</span>
            <div className="relative flex-1 flex items-center gap-2 min-w-0">
              {direction === 'after' && (
                <span className="text-xs text-muted-foreground shrink-0">{pivot}</span>
              )}
              <Link
                href={`/bigram-explorer/${encodeURIComponent(item.word)}`}
                className="font-semibold text-primary hover:underline truncate"
              >
                {item.word}
              </Link>
              {direction === 'before' && (
                <span className="text-xs text-muted-foreground shrink-0">{pivot}</span>
              )}
            </div>
            <Link
              href={`/dictionary/${encodeURIComponent(item.word)}`}
              className="relative text-xs text-muted-foreground hover:text-primary transition-colors shrink-0 opacity-0 group-hover:opacity-100"
            >
              define
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export function BigramExplorerTool({ initialWord }: { initialWord?: string }) {
  const router = useRouter()
  const [inputWord, setInputWord] = useState(initialWord ?? '')
  const [data, setData] = useState<BigramData | null>(null)
  const [searchedWord, setSearchedWord] = useState(initialWord ?? '')
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const explore = useCallback(async (word?: string) => {
    const w = (word ?? inputWord).trim().toLowerCase()
    if (!w) return
    setInputWord(w)
    setLoading(true)
    setSearched(false)

    try {
      const [beforeRes, afterRes] = await Promise.all([
        fetch(`https://api.datamuse.com/words?rel_bgb=${encodeURIComponent(w)}&max=20`),
        fetch(`https://api.datamuse.com/words?rel_bga=${encodeURIComponent(w)}&max=20`),
      ])
      const [before, after]: [BigramResult[], BigramResult[]] = await Promise.all([
        beforeRes.json(),
        afterRes.json(),
      ])
      setData({ before, after })
      setSearchedWord(w)
      // Update URL without full navigation
      router.replace(`/bigram-explorer/${encodeURIComponent(w)}`, { scroll: false })
    } catch {
      setData({ before: [], after: [] })
    } finally {
      setLoading(false)
      setSearched(true)
    }
  }, [inputWord, router])

  // Fire on mount if initialWord is set
  const [didInit, setDidInit] = useState(false)
  if (initialWord && !didInit && !searched) {
    setDidInit(true)
    explore(initialWord)
  }

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="flex gap-2">
        <Input
          value={inputWord}
          onChange={e => setInputWord(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && explore()}
          placeholder="Enter any word…"
          className="text-base"
          aria-label="Word to explore"
        />
        <Button onClick={() => explore()} disabled={loading || !inputWord.trim()} className="gap-2 shrink-0">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          Explore
        </Button>
      </div>

      {/* Example chips */}
      {!searched && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Try a word</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                onClick={() => explore(ex)}
                className="text-sm px-3 py-1.5 rounded-full border bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {searched && data && (data.before.length === 0 && data.after.length === 0) && (
        <div className="text-center py-10 text-muted-foreground">
          <p className="font-medium">No bigram data found for &ldquo;{searchedWord}&rdquo;.</p>
          <p className="text-sm mt-1">Try a more common word.</p>
        </div>
      )}

      {data && (data.before.length > 0 || data.after.length > 0) && (
        <div className="space-y-4">
          {/* Pivot display */}
          <div className="flex items-center justify-center gap-3 py-3 px-5 bg-primary/5 border rounded-2xl">
            <ArrowLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-lg font-bold text-primary">{searchedWord}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                <h2 className="font-semibold text-sm">
                  Words before <span className="text-primary">{searchedWord}</span>
                </h2>
                <span className="text-xs text-muted-foreground">({data.before.length})</span>
              </div>
              {data.before.length > 0
                ? <ResultList items={data.before} direction="before" pivot={searchedWord} />
                : <p className="text-sm text-muted-foreground py-4">No data for words before this word.</p>
              }
            </div>

            {/* After column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-sm">
                  Words after <span className="text-primary">{searchedWord}</span>
                </h2>
                <span className="text-xs text-muted-foreground">({data.after.length})</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              {data.after.length > 0
                ? <ResultList items={data.after} direction="after" pivot={searchedWord} />
                : <p className="text-sm text-muted-foreground py-4">No data for words after this word.</p>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
