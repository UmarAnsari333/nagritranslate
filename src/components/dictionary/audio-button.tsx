'use client'

import { useState } from 'react'
import { Volume2, Loader2 } from 'lucide-react'

export function AudioButton({ src, label }: { src: string; label: string }) {
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const audio = new Audio(src)
    setPlaying(true)
    audio.play()
    audio.addEventListener('ended', () => setPlaying(false))
    audio.addEventListener('error', () => setPlaying(false))
  }

  return (
    <button
      onClick={play}
      disabled={playing}
      title={`Play ${label} pronunciation`}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 border rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
    >
      {playing ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
      ) : (
        <Volume2 className="w-3.5 h-3.5" />
      )}
      {label}
    </button>
  )
}
