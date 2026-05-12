'use client'

import { useState, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Cloud, Copy, Check, Download } from 'lucide-react'
import Link from 'next/link'

// ── Stop words ────────────────────────────────────────────────────────────────

const STOP = new Set([
  'a','an','the','and','or','but','nor','so','yet','for','in','on','at','to',
  'of','by','up','as','is','it','its','be','been','being','am','are','was',
  'were','do','does','did','will','would','could','should','may','might',
  'shall','can','have','has','had','he','she','we','they','i','you','me',
  'him','her','us','them','my','your','his','our','their','this','that',
  'these','those','which','whom',
  'all','each','every','both','few','more','most','other','some','such',
  'no','not','only','same','than','too','very','just','also','here','there',
  'then','once','if','because','while','although','with','from','into',
  'about','against','between','through','during','before','after','above',
  'below','over','under','again','further','any','own','out','off','now',
  'get','got','go','going','gone','come','came','make','made','know','knew',
  'take','took','see','saw','say','said','one','two','three','four','five',
  'even','still','back','well','way','down','first','last','long','little',
  'own','right','old','big','high','great','new','good','bad','much','many',
])

// ── Helpers ───────────────────────────────────────────────────────────────────

function seeded(seed: string): number {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0
  return (h >>> 0) / 4294967296
}

function processText(text: string, maxWords: number): Array<{ word: string; count: number }> {
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z\s'-]/g, ' ')
    .split(/\s+/)
    .map(w => w.replace(/^[^a-z]+|[^a-z]+$/g, ''))
    .filter(w => w.length >= 3 && !STOP.has(w) && /^[a-z]/.test(w))

  const counts: Record<string, number> = {}
  for (const w of tokens) counts[w] = (counts[w] ?? 0) + 1

  return Object.entries(counts)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, maxWords)
}

// ── Color themes ──────────────────────────────────────────────────────────────

const THEMES: Record<string, string[]> = {
  violet:  ['#7c3aed','#a855f7','#c084fc','#6d28d9','#8b5cf6','#9333ea'],
  ocean:   ['#0369a1','#0284c7','#06b6d4','#0891b2','#164e63','#0e7490'],
  forest:  ['#15803d','#16a34a','#4ade80','#166534','#14532d','#22c55e'],
  sunset:  ['#dc2626','#ea580c','#d97706','#db2777','#c2410c','#be185d'],
  slate:   ['#1e293b','#334155','#475569','#64748b','#0f172a','#1e3a5f'],
}

const THEME_LABELS: Record<string, string> = {
  violet: 'Violet', ocean: 'Ocean', forest: 'Forest', sunset: 'Sunset', slate: 'Slate',
}

// ── Word cloud renderer ───────────────────────────────────────────────────────

interface CloudWord { word: string; count: number }

function CloudDisplay({
  words,
  theme,
}: {
  words: CloudWord[]
  theme: string
}) {
  if (!words.length) return null
  const maxCount = words[0].count
  const palette = THEMES[theme]

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-3 justify-center items-center py-8 px-6 leading-none select-none">
      {words.map(({ word, count }) => {
        const ratio = count / maxCount
        const fontSize = 0.75 + ratio * 2.75 // 0.75rem – 3.5rem
        const rotation = seeded(word) > 0.72
          ? Math.round((seeded(word + 'r') - 0.5) * 28)
          : 0
        const color = palette[Math.floor(seeded(word + 'c') * palette.length)]
        const opacity = 0.55 + ratio * 0.45

        return (
          <Link
            key={word}
            href={`/dictionary/${encodeURIComponent(word)}`}
            style={{
              fontSize: `${fontSize}rem`,
              transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined,
              color,
              opacity,
              lineHeight: 1.1,
              fontWeight: ratio > 0.6 ? 700 : ratio > 0.3 ? 600 : 400,
              display: 'inline-block',
              transition: 'opacity 0.15s',
            }}
            className="hover:opacity-100 hover:underline"
            title={`${word} (${count})`}
          >
            {word}
          </Link>
        )
      })}
    </div>
  )
}

// ── Main tool ─────────────────────────────────────────────────────────────────

const SAMPLE_TEXT = `The quick brown fox jumps over the lazy dog near the river bank where tall willow trees grow beside the flowing water and ancient stones covered in soft green moss line the muddy path through the quiet forest where birds sing their morning songs and deer graze peacefully in the golden light of dawn breaking over distant mountains covered in snow and mist rising slowly from the valley below while farmers tend their fields and children play along the winding roads between old stone walls marking centuries of human stories written in the landscape itself`

export function WordCloudTool() {
  const [text, setText] = useState('')
  const [words, setWords] = useState<CloudWord[]>([])
  const [theme, setTheme] = useState('violet')
  const [maxWords, setMaxWords] = useState(60)
  const [generated, setGenerated] = useState(false)
  const [copied, setCopied] = useState(false)
  const cloudRef = useRef<HTMLDivElement>(null)

  const generate = useCallback((t?: string, mw?: number) => {
    const src = t ?? text
    if (!src.trim()) return
    const result = processText(src, mw ?? maxWords)
    setWords(result)
    setGenerated(true)
  }, [text, maxWords])

  const useSample = () => {
    setText(SAMPLE_TEXT)
    generate(SAMPLE_TEXT, maxWords)
  }

  const copyWordList = async () => {
    const list = words.map(w => `${w.word} (${w.count})`).join('\n')
    await navigator.clipboard.writeText(list)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const downloadSVG = () => {
    if (!cloudRef.current) return
    const el = cloudRef.current
    const { width, height } = el.getBoundingClientRect()
    // Collect word data from the rendered spans
    const spans = Array.from(el.querySelectorAll('a'))
    const lines: string[] = []
    spans.forEach(span => {
      const rect = span.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x = rect.left - elRect.left + rect.width / 2
      const y = rect.top - elRect.top + rect.height / 2
      const style = window.getComputedStyle(span)
      const color = style.color
      const fontSize = style.fontSize
      const fontWeight = style.fontWeight
      const transform = style.transform
      const word = span.textContent ?? ''
      const rotate = transform && transform !== 'none'
        ? (() => {
            const m = transform.match(/matrix\(([^)]+)\)/)
            if (m) {
              const [a, b] = m[1].split(',').map(Number)
              return Math.round(Math.atan2(b, a) * 180 / Math.PI)
            }
            return 0
          })()
        : 0
      lines.push(
        `<text x="${x}" y="${y}" fill="${color}" font-size="${fontSize}" font-weight="${fontWeight}" font-family="system-ui,sans-serif" text-anchor="middle" dominant-baseline="middle" transform="rotate(${rotate},${x},${y})">${word}</text>`
      )
    })
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" style="background:white">${lines.join('')}</svg>`
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'word-cloud.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Text input */}
      <div className="space-y-3">
        <Textarea
          value={text}
          onChange={e => { setText(e.target.value); setGenerated(false) }}
          placeholder="Paste any text — an article, essay, story, or speech…"
          className="min-h-[120px] text-base resize-none"
          aria-label="Text input"
        />
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => generate()} disabled={!text.trim()} className="gap-2">
            <Cloud className="h-4 w-4" />
            Generate Cloud
          </Button>
          <Button variant="outline" onClick={useSample}>
            Use sample text
          </Button>
          {text && (
            <button
              onClick={() => { setText(''); setWords([]); setGenerated(false) }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Controls — shown once cloud is generated */}
      {generated && words.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl border bg-muted/10">
          {/* Color theme */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide shrink-0">Theme:</span>
            {Object.keys(THEMES).map(t => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  theme === t
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground hover:bg-muted'
                }`}
              >
                {THEME_LABELS[t]}
              </button>
            ))}
          </div>

          {/* Max words */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide shrink-0">Words:</span>
            {[30, 60, 100].map(n => (
              <button
                key={n}
                onClick={() => { setMaxWords(n); generate(text, n) }}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  maxWords === n
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground hover:bg-muted'
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="outline" size="sm" onClick={copyWordList} className="gap-1.5 text-xs">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy list'}
            </Button>
            <Button variant="outline" size="sm" onClick={downloadSVG} className="gap-1.5 text-xs">
              <Download className="h-3.5 w-3.5" />
              SVG
            </Button>
          </div>
        </div>
      )}

      {/* Word cloud output */}
      {generated && words.length === 0 && (
        <div className="text-center py-10 text-muted-foreground">
          <p className="font-medium">No words to display.</p>
          <p className="text-sm mt-1">
            {text.trim().split(/\s+/).length < 5
              ? 'Paste at least a few sentences for a meaningful cloud.'
              : 'All words in your text were filtered as common words. Try text with more specific vocabulary.'}
          </p>
        </div>
      )}

      {generated && words.length > 0 && (
        <div
          ref={cloudRef}
          className="min-h-[320px] rounded-2xl border bg-background overflow-hidden"
        >
          <CloudDisplay words={words} theme={theme} />
        </div>
      )}

      {/* Word count summary */}
      {generated && words.length > 0 && (
        <p className="text-xs text-muted-foreground text-center">
          Showing top <strong>{words.length}</strong> words · click any word to see its definition · hover to see frequency
        </p>
      )}
    </div>
  )
}
