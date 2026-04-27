'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Loader2 } from 'lucide-react'

export function DictionarySearch({ defaultValue = '', autoFocus = false }: { defaultValue?: string; autoFocus?: boolean }) {
  const router = useRouter()
  const [word, setWord] = useState(defaultValue)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = word.trim().toLowerCase()
    if (!trimmed) return
    setLoading(true)
    router.push(`/dictionary/${encodeURIComponent(trimmed)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search any English word…"
          className="w-full pl-9 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm transition"
          autoComplete="off"
          autoFocus={autoFocus}
        />
      </div>
      <button
        type="submit"
        disabled={loading || !word.trim()}
        className="px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Look up'}
      </button>
    </form>
  )
}
