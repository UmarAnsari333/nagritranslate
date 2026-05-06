'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Loader2 } from 'lucide-react'

interface FillInBlankSearchProps {
  initialBefore?: string
  initialAfter?: string
}

export function FillInBlankSearch({ initialBefore = '', initialAfter = '' }: FillInBlankSearchProps) {
  const router = useRouter()
  const [before, setBefore] = useState(initialBefore === 'any' ? '' : initialBefore)
  const [after, setAfter] = useState(initialAfter === 'any' ? '' : initialAfter)
  const [loading, setLoading] = useState(false)

  const navigate = (b: string, a: string) => {
    const cleanBefore = b.trim().toLowerCase() || 'any'
    const cleanAfter = a.trim().toLowerCase() || 'any'
    if (cleanBefore === 'any' && cleanAfter === 'any') return
    setLoading(true)
    router.push(`/fill-in-the-blank/${encodeURIComponent(cleanBefore)}/${encodeURIComponent(cleanAfter)}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(before, after)
  }

  const canSubmit = !loading && (before.trim().length > 0 || after.trim().length > 0)

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex items-stretch gap-2">
        {/* Before input */}
        <input
          type="text"
          value={before}
          onChange={(e) => setBefore(e.target.value)}
          placeholder="first word…"
          className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm transition text-center font-medium"
          autoComplete="off"
        />

        {/* Visual blank */}
        <div className="flex items-center gap-1.5 px-2 shrink-0">
          <div className="w-3 h-0.5 bg-border rounded-full" />
          <span className="text-lg font-bold text-muted-foreground tracking-widest">___</span>
          <div className="w-3 h-0.5 bg-border rounded-full" />
        </div>

        {/* After input */}
        <input
          type="text"
          value={after}
          onChange={(e) => setAfter(e.target.value)}
          placeholder="last word…"
          className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm transition text-center font-medium"
          autoComplete="off"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit}
          className="px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center gap-2 shrink-0"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Search className="w-4 h-4" />Find</>}
        </button>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Fill in one or both words — leave either blank to search one-sided
      </p>
    </form>
  )
}
