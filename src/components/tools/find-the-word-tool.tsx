'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Loader2, Search, Copy, Check, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface WordResult {
  word: string
  score: number
  defs?: string[]
  tags?: string[]
}

const POS_MAP: Record<string, string> = {
  n: 'noun',
  v: 'verb',
  adj: 'adjective',
  adv: 'adverb',
  u: 'unknown',
  p: 'pronoun',
  prep: 'preposition',
  conj: 'conjunction',
}

function parsePos(tags: string[] = []): string {
  for (const tag of tags) {
    if (POS_MAP[tag]) return POS_MAP[tag]
  }
  return ''
}

function parseDef(defs: string[] = []): string {
  if (!defs.length) return ''
  const parts = defs[0].split('\t')
  return parts[1] ?? parts[0]
}

const EXAMPLES = [
  'the smell of rain on dry earth',
  'intense happiness that makes you want to cry',
  'walking quietly so others can\'t hear you',
  'the fear of open spaces',
  'words that sound pleasant to the ear',
  'a small stream of water',
]

export function FindTheWordTool() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<WordResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [copiedWord, setCopiedWord] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  async function search(q?: string) {
    const text = (q ?? query).trim()
    if (!text) return
    if (q) setQuery(q)
    setLoading(true)
    setSearched(false)
    setResults([])
    try {
      const res = await fetch(
        `https://api.datamuse.com/words?ml=${encodeURIComponent(text)}&md=dp&max=20`
      )
      if (!res.ok) throw new Error()
      const data: WordResult[] = await res.json()
      setResults(data)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
      setSearched(true)
    }
  }

  function copy(word: string) {
    navigator.clipboard.writeText(word)
    setCopiedWord(word)
    setTimeout(() => setCopiedWord(null), 1500)
  }

  return (
    <div className="space-y-8">
      {/* Input area */}
      <div className="space-y-3">
        <Textarea
          ref={textareaRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              search()
            }
          }}
          placeholder={"Describe the word you're looking for… e.g. \"the smell of rain on dry earth\""}
          className="min-h-[96px] text-base resize-none"
          aria-label="Word description"
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={() => search()}
            disabled={loading || !query.trim()}
            className="gap-2"
          >
            {loading
              ? <Loader2 className="h-4 w-4 animate-spin" />
              : <Search className="h-4 w-4" />}
            Find the Word
          </Button>
          {query && (
            <button
              onClick={() => { setQuery(''); setResults([]); setSearched(false) }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Example prompts */}
      {!searched && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Try an example</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                onClick={() => search(ex)}
                className="text-sm px-3 py-1.5 rounded-full border bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {searched && results.length === 0 && (
        <div className="text-center py-10 text-muted-foreground">
          <p className="font-medium">No words found.</p>
          <p className="text-sm mt-1">Try rephrasing your description or use more specific language.</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {results.length} word{results.length !== 1 ? 's' : ''} found for <span className="font-medium text-foreground">"{query}"</span>
          </p>
          <div className="grid gap-2.5">
            {results.map((r, i) => {
              const pos = parsePos(r.tags)
              const def = parseDef(r.defs)
              return (
                <div
                  key={r.word}
                  className="group flex items-start justify-between gap-4 p-4 rounded-xl border bg-card hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className="text-xs text-muted-foreground font-mono mt-1 w-5 shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <Link
                          href={`/dictionary/${encodeURIComponent(r.word)}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          {r.word}
                        </Link>
                        {pos && (
                          <Badge variant="secondary" className="text-xs font-normal">
                            {pos}
                          </Badge>
                        )}
                        <Link
                          href={`/word-frequency/${encodeURIComponent(r.word)}`}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label={`Word frequency for ${r.word}`}
                        >
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </Link>
                      </div>
                      {def && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{def}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => copy(r.word)}
                    className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label={`Copy ${r.word}`}
                    title="Copy word"
                  >
                    {copiedWord === r.word
                      ? <Check className="h-4 w-4 text-green-500" />
                      : <Copy className="h-4 w-4 text-muted-foreground" />}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
