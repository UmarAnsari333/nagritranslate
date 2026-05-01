'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Loader2 } from 'lucide-react'

interface Suggestion { word: string; score: number }

export function AntonymsSearch() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const trimmed = input.trim()
    if (trimmed.length < 2) { setSuggestions([]); setShowSuggestions(false); return }
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://api.datamuse.com/sug?s=${encodeURIComponent(trimmed)}&max=8`)
        if (res.ok) {
          const data: Suggestion[] = await res.json()
          setSuggestions(data)
          setShowSuggestions(data.length > 0)
        }
      } catch { setSuggestions([]) }
    }, 250)
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [input])

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node))
        setShowSuggestions(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  const navigate = (word: string) => {
    const trimmed = word.trim().toLowerCase()
    if (!trimmed) return
    setLoading(true)
    setShowSuggestions(false)
    router.push(`/antonyms/${encodeURIComponent(trimmed)}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeIndex >= 0 && suggestions[activeIndex]) navigate(suggestions[activeIndex].word)
    else navigate(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || !suggestions.length) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(p => Math.min(p + 1, suggestions.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(p => Math.max(p - 1, -1)) }
    else if (e.key === 'Escape') { setShowSuggestions(false); setActiveIndex(-1) }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl mx-auto">
      <div className="relative flex-1" ref={containerRef}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setActiveIndex(-1) }}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search any word — e.g. happy, fast, brave…"
          className="w-full pl-9 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm transition"
          autoComplete="off"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-background border rounded-lg shadow-lg overflow-hidden">
            {suggestions.map((s, i) => (
              <li
                key={s.word}
                onMouseDown={() => navigate(s.word)}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                  i === activeIndex ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'
                }`}
              >
                {s.word}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className="px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2 shrink-0"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Find Antonyms'}
      </button>
    </form>
  )
}
