'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, Download } from 'lucide-react'

// ─── Google Fonts ──────────────────────────────────────────────────────────────
// Load all weights + italics for fonts that support them
const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Patrick+Hand&family=Gloria+Hallelujah&family=Architects+Daughter&family=Indie+Flower&family=Caveat:wght@400;500;600;700&family=Shadows+Into+Light&family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Neucha&family=Reenie+Beanie&family=Just+Another+Hand&family=Schoolbell&family=Gochi+Hand&display=swap'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FontVariant {
  id: string          // unique per card+variant
  label: string       // "Regular", "Bold", "Italic", "Bold Italic"
  weight: number
  style: 'normal' | 'italic'
}

interface FontDef {
  id: string
  name: string
  family: string
  desc: string
  badge: string
  badgeClass: string
  defaultSizePx: number
  variants: FontVariant[]
}

// ─── Font definitions (with all available variants) ────────────────────────────

const FONTS: FontDef[] = [
  {
    id: 'comic-sans',
    name: 'Comic Sans MS',
    family: "'Comic Sans MS', 'Comic Sans', cursive",
    desc: 'The original — pre-installed on Windows & macOS since 1994',
    badge: 'Original',
    badgeClass: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
    defaultSizePx: 28,
    variants: [
      { id: 'comic-sans-regular',     label: 'Regular',     weight: 400, style: 'normal'  },
      { id: 'comic-sans-italic',      label: 'Italic',      weight: 400, style: 'italic'  },
      { id: 'comic-sans-bold',        label: 'Bold',        weight: 700, style: 'normal'  },
      { id: 'comic-sans-bold-italic', label: 'Bold Italic', weight: 700, style: 'italic'  },
    ],
  },
  {
    id: 'comic-neue',
    name: 'Comic Neue',
    family: "'Comic Neue', cursive",
    desc: 'The refined redesign — cleaner, more consistent Comic Sans',
    badge: 'Most Similar',
    badgeClass: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    defaultSizePx: 28,
    variants: [
      { id: 'comic-neue-regular',     label: 'Regular',     weight: 400, style: 'normal'  },
      { id: 'comic-neue-italic',      label: 'Italic',      weight: 400, style: 'italic'  },
      { id: 'comic-neue-bold',        label: 'Bold',        weight: 700, style: 'normal'  },
      { id: 'comic-neue-bold-italic', label: 'Bold Italic', weight: 700, style: 'italic'  },
    ],
  },
  {
    id: 'caveat',
    name: 'Caveat',
    family: "'Caveat', cursive",
    desc: 'Compact and natural — ideal for handwritten annotations and notes',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 30,
    variants: [
      { id: 'caveat-regular', label: 'Regular', weight: 400, style: 'normal' },
      { id: 'caveat-medium',  label: 'Medium',  weight: 500, style: 'normal' },
      { id: 'caveat-semibold',label: 'SemiBold',weight: 600, style: 'normal' },
      { id: 'caveat-bold',    label: 'Bold',    weight: 700, style: 'normal' },
    ],
  },
  {
    id: 'kalam',
    name: 'Kalam',
    family: "'Kalam', cursive",
    desc: 'Warm and readable — South Asian handwriting influence',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 26,
    variants: [
      { id: 'kalam-light',   label: 'Light',   weight: 300, style: 'normal' },
      { id: 'kalam-regular', label: 'Regular', weight: 400, style: 'normal' },
      { id: 'kalam-bold',    label: 'Bold',    weight: 700, style: 'normal' },
    ],
  },
  {
    id: 'patrick-hand',
    name: 'Patrick Hand',
    family: "'Patrick Hand', cursive",
    desc: 'Friendly and legible — closest in weight and feel to Comic Sans',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 28,
    variants: [
      { id: 'patrick-hand-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'gloria-hallelujah',
    name: 'Gloria Hallelujah',
    family: "'Gloria Hallelujah', cursive",
    desc: 'Expressive and bouncy — high energy handwriting with character',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 22,
    variants: [
      { id: 'gloria-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'architects-daughter',
    name: 'Architects Daughter',
    family: "'Architects Daughter', cursive",
    desc: 'Drafting-table casual with a slightly technical, blueprint feel',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 24,
    variants: [
      { id: 'architects-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'indie-flower',
    name: 'Indie Flower',
    family: "'Indie Flower', cursive",
    desc: 'Light, airy and charming — popular for invitations and cards',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 28,
    variants: [
      { id: 'indie-flower-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'shadows-into-light',
    name: 'Shadows Into Light',
    family: "'Shadows Into Light', cursive",
    desc: 'Thin and whimsical with delicate, airy letterforms',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 26,
    variants: [
      { id: 'shadows-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'permanent-marker',
    name: 'Permanent Marker',
    family: "'Permanent Marker', cursive",
    desc: 'Bold thick marker strokes — great for headings and posters',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 26,
    variants: [
      { id: 'permanent-marker-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'neucha',
    name: 'Neucha',
    family: "'Neucha', cursive",
    desc: 'Rough charcoal-like texture with lots of personality and energy',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 28,
    variants: [
      { id: 'neucha-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'reenie-beanie',
    name: 'Reenie Beanie',
    family: "'Reenie Beanie', cursive",
    desc: 'Very casual, almost scrawled — perfect for a quick-note feel',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 30,
    variants: [
      { id: 'reenie-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'just-another-hand',
    name: 'Just Another Hand',
    family: "'Just Another Hand', cursive",
    desc: 'Minimalist handwriting with clean, open loops and readable forms',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 30,
    variants: [
      { id: 'just-another-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'schoolbell',
    name: 'Schoolbell',
    family: "'Schoolbell', cursive",
    desc: 'Chalkboard classroom feel — nostalgic and approachable',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 26,
    variants: [
      { id: 'schoolbell-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
  {
    id: 'gochi-hand',
    name: 'Gochi Hand',
    family: "'Gochi Hand', cursive",
    desc: 'Japanese-influenced casual handwriting — open, warm and friendly',
    badge: 'Google Font',
    badgeClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    defaultSizePx: 26,
    variants: [
      { id: 'gochi-regular', label: 'Regular', weight: 400, style: 'normal' },
    ],
  },
]

const PANGRAM = 'The quick brown fox jumps over the lazy dog'

const EXAMPLES = [
  'The quick brown fox jumps over the lazy dog',
  'Pack my box with five dozen liquor jugs',
  'How vexingly quick daft zebras jump!',
  'Hello World! Comic Sans forever.',
  'Design is fun — keep it casual',
]

// ─── Canvas download ───────────────────────────────────────────────────────────

async function downloadAsPng(
  text: string,
  font: FontDef,
  variant: FontVariant,
  sizePx: number,
) {
  const W = 1200
  const padX = 80
  const padY = 60
  const fontDecl = `${variant.style} ${variant.weight} ${sizePx * 1.5}px ${font.family}`

  if (font.id !== 'comic-sans') {
    try { await document.fonts.load(fontDecl) } catch {}
  }

  const tmp = document.createElement('canvas').getContext('2d')!
  tmp.font = fontDecl
  const words = (text || PANGRAM).split(' ')
  const lines: string[] = []
  let cur = ''
  for (const word of words) {
    const test = cur ? `${cur} ${word}` : word
    if (tmp.measureText(test).width > W - padX * 2) { if (cur) lines.push(cur); cur = word }
    else cur = test
  }
  if (cur) lines.push(cur)
  if (!lines.length) lines.push(text || PANGRAM)

  const lineH = Math.round(sizePx * 1.5 * 1.5)
  const canvasH = lines.length * lineH + padY * 2

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = canvasH
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, W, canvasH)
  ctx.font = fontDecl
  ctx.fillStyle = '#1a1a1a'
  ctx.textBaseline = 'top'
  ctx.textAlign = 'center'
  lines.forEach((line, i) => ctx.fillText(line, W / 2, padY + i * lineH))

  canvas.toBlob((blob) => {
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${font.id}-${variant.label.toLowerCase().replace(' ', '-')}.png`
    a.click()
    URL.revokeObjectURL(url)
  }, 'image/png')
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ComicSansFontGeneratorTool() {
  const [text, setText] = useState(PANGRAM)
  const [fontSize, setFontSize] = useState(28)
  const [copied, setCopied] = useState<string | null>(null)
  const [downloading, setDownloading] = useState<string | null>(null)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    if (document.getElementById('comic-sans-gfonts')) { setFontsLoaded(true); return }
    const link = document.createElement('link')
    link.id = 'comic-sans-gfonts'
    link.rel = 'stylesheet'
    link.href = GOOGLE_FONTS_URL
    link.onload = () => setFontsLoaded(true)
    document.head.appendChild(link)
  }, [])

  function copy(variantId: string, value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(variantId)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  async function download(font: FontDef, variant: FontVariant) {
    const key = variant.id
    setDownloading(key)
    try {
      await downloadAsPng(text, font, variant, fontSize)
    } finally {
      setDownloading(null)
    }
  }

  const displayText = text || PANGRAM

  return (
    <div className="space-y-8">

      {/* ── Input ── */}
      <div>
        <label className="block text-sm font-semibold mb-2">Preview Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={120}
          placeholder="Type to preview in all fonts…"
          className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <div className="flex items-center justify-between mt-1.5 flex-wrap gap-2">
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                onClick={() => setText(ex)}
                className="text-xs px-2.5 py-1 rounded-full border bg-muted/20 hover:bg-muted/40 transition text-muted-foreground hover:text-foreground"
              >
                {ex.length > 30 ? ex.slice(0, 28) + '…' : ex}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground shrink-0">{text.length}/120</span>
        </div>
      </div>

      {/* ── Font size ── */}
      <div className="flex items-center gap-4">
        <label className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
          Size: <span className="text-foreground">{fontSize}px</span>
        </label>
        <input
          type="range" min={14} max={56} step={2} value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="flex-1 accent-primary"
        />
        <div className="flex gap-2 text-[10px] text-muted-foreground shrink-0">
          <span>14px</span><span>56px</span>
        </div>
      </div>

      {/* ── Font cards ── */}
      {!fontsLoaded && (
        <p className="text-sm text-muted-foreground text-center py-4 animate-pulse">Loading fonts…</p>
      )}

      <div className="space-y-4">
        {FONTS.map((font) => (
          <div
            key={font.id}
            className={`rounded-2xl border overflow-hidden ${
              font.id === 'comic-sans'
                ? 'border-yellow-500/30'
                : font.id === 'comic-neue'
                  ? 'border-green-500/30'
                  : ''
            }`}
          >
            {/* Font header */}
            <div className={`flex items-center gap-2 px-5 py-3 border-b ${
              font.id === 'comic-sans'
                ? 'bg-yellow-500/5'
                : font.id === 'comic-neue'
                  ? 'bg-green-500/5'
                  : 'bg-muted/5'
            }`}>
              <span className="font-bold text-sm">{font.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${font.badgeClass}`}>
                {font.badge}
              </span>
              <span className="text-xs text-muted-foreground ml-1 hidden sm:inline">{font.desc}</span>
            </div>

            {/* Variant rows */}
            <div className="divide-y">
              {font.variants.map((variant) => {
                const isCopied = copied === variant.id
                const isDownloading = downloading === variant.id
                return (
                  <div key={variant.id} className="flex items-center gap-4 px-5 py-4">
                    {/* Variant label */}
                    <span className="text-xs text-muted-foreground w-20 shrink-0 font-medium">
                      {variant.label}
                    </span>

                    {/* Preview text */}
                    <div
                      className="flex-1 min-w-0 overflow-hidden"
                      style={{
                        fontFamily: font.family,
                        fontSize: `${fontSize}px`,
                        fontWeight: variant.weight,
                        fontStyle: variant.style,
                        lineHeight: 1.4,
                        wordBreak: 'break-word',
                      }}
                    >
                      {displayText}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-1.5 shrink-0">
                      <button
                        onClick={() => copy(variant.id, displayText)}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border bg-background hover:bg-muted/20 transition"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                        {isCopied ? 'Copied' : 'Copy'}
                      </button>
                      <button
                        onClick={() => download(font, variant)}
                        disabled={isDownloading}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition disabled:opacity-50"
                      >
                        <Download className="w-3.5 h-3.5" />
                        {isDownloading ? '…' : 'PNG'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Comic Sans MS requires the font pre-installed (Windows/macOS). All others load from Google Fonts.
        PNG downloads are 1200px wide.
      </p>
    </div>
  )
}
