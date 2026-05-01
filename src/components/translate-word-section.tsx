import Link from 'next/link'
import { Languages } from 'lucide-react'

const POPULAR_LANGS = [
  { label: 'Spanish',    flag: '🇪🇸' },
  { label: 'French',     flag: '🇫🇷' },
  { label: 'German',     flag: '🇩🇪' },
  { label: 'Arabic',     flag: '🇸🇦' },
  { label: 'Hindi',      flag: '🇮🇳' },
  { label: 'Japanese',   flag: '🇯🇵' },
  { label: 'Chinese',    flag: '🇨🇳' },
  { label: 'Portuguese', flag: '🇧🇷' },
  { label: 'Russian',    flag: '🇷🇺' },
  { label: 'Korean',     flag: '🇰🇷' },
  { label: 'Italian',    flag: '🇮🇹' },
  { label: 'Turkish',    flag: '🇹🇷' },
]

function slugify(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-')
}

interface Props {
  word: string
}

export function TranslateWordSection({ word }: Props) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Languages className="w-4 h-4 text-primary" />
        <h2 className="text-lg font-bold">Translate &ldquo;{word}&rdquo;</h2>
      </div>
      <div className="p-4 bg-muted/20 rounded-2xl border">
        <p className="text-xs text-muted-foreground mb-3">Pick a language to open the translator with this word pre-filled</p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_LANGS.map(({ label, flag }) => (
            <Link
              key={label}
              href={`/ai-translate/english-to-${slugify(label)}?q=${encodeURIComponent(word)}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
            >
              <span>{flag}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
