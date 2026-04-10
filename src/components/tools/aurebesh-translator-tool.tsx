'use client'

import { useState } from 'react'
import { Copy, RefreshCw, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Aurebesh character data ───────────────────────────────────────────────────
// Each entry: { name, paths } where paths are SVG path `d` strings in a 32×40 viewBox.
// Glyphs are drawn with stroke, no fill — authentic Aurebesh line-art style.

interface GlyphDef {
  name: string
  paths: string[]
}

const GLYPHS: Record<string, GlyphDef> = {
  // ── Single letters ────────────────────────────────────────────────────────
  // All paths redrawn to match canonical Aurebesh glyph forms.

  a: {
    // Aurek — right-pointing angle bracket with a crossbar
    name: 'Aurek',
    paths: [
      'M26 20 L8 6 L8 34',   // right-pointing chevron / ">" rotated
      'M8 20 L20 20',         // crossbar
    ],
  },
  b: {
    // Besh — vertical spine with two rectangular bumps on the right
    name: 'Besh',
    paths: [
      'M8 4 L8 36',
      'M8 6 L20 6 L20 18 L8 18',
      'M8 22 L20 22 L20 34 L8 34',
    ],
  },
  c: {
    // Cresh — open crescent / C-shape with two horizontal end caps
    name: 'Cresh',
    paths: [
      'M26 8 Q4 8 4 20 Q4 32 26 32',
      'M26 8 L26 14',
      'M26 32 L26 26',
    ],
  },
  d: {
    // Dorn — closed D-shape (rounded right side)
    name: 'Dorn',
    paths: [
      'M8 4 L8 36',
      'M8 4 L18 4 Q30 4 30 20 Q30 36 18 36 L8 36',
    ],
  },
  e: {
    // Esk — three upward peaks / M shape (mountains)
    name: 'Esk',
    paths: [
      'M4 36 L4 10 L16 26 L28 10 L28 36',
    ],
  },
  f: {
    // Forn — upside-down T with extra horizontal line
    name: 'Forn',
    paths: [
      'M16 4 L16 36',
      'M4 36 L28 36',
      'M4 20 L28 20',
    ],
  },
  g: {
    // Grek — C-shape with inward horizontal prong at middle
    name: 'Grek',
    paths: [
      'M26 8 Q4 8 4 20 Q4 32 26 32',
      'M26 8 L26 14',
      'M16 20 L26 20 L26 32',
    ],
  },
  h: {
    // Herf — three parallel horizontal lines (Ξ)
    name: 'Herf',
    paths: [
      'M4 8 L28 8',
      'M4 20 L28 20',
      'M4 32 L28 32',
    ],
  },
  i: {
    // Isk — vertical stroke with horizontal serifs top and bottom
    name: 'Isk',
    paths: [
      'M16 4 L16 36',
      'M8 4 L24 4',
      'M8 36 L24 36',
    ],
  },
  j: {
    // Jenth — hooked J-shape with top bar
    name: 'Jenth',
    paths: [
      'M8 4 L24 4',
      'M16 4 L16 30 Q16 38 6 36',
    ],
  },
  k: {
    // Krill — two diagonal strokes meeting a vertical (K-like)
    name: 'Krill',
    paths: [
      'M8 4 L8 36',
      'M26 4 L8 20',
      'M8 20 L26 36',
    ],
  },
  l: {
    // Leth — vertical line with horizontal foot
    name: 'Leth',
    paths: [
      'M8 4 L8 36 L28 36',
    ],
  },
  m: {
    // Mern — two downward peaks / W-shape
    name: 'Mern',
    paths: [
      'M4 4 L4 30 L16 14 L28 30 L28 4',
    ],
  },
  n: {
    // Nern — diagonal slash connecting two verticals
    name: 'Nern',
    paths: [
      'M8 4 L8 36',
      'M24 4 L24 36',
      'M8 4 L24 36',
    ],
  },
  o: {
    // Osk — upward triangle (△)
    name: 'Osk',
    paths: [
      'M16 4 L4 36 L28 36 Z',
    ],
  },
  p: {
    // Peth — vertical spine with single rectangular bump on right (top half)
    name: 'Peth',
    paths: [
      'M8 4 L8 36',
      'M8 4 L22 4 L22 20 L8 20',
    ],
  },
  q: {
    // Qek — circle with a diagonal tail
    name: 'Qek',
    paths: [
      'M16 6 Q4 6 4 18 Q4 30 16 30 Q28 30 28 18 Q28 6 16 6',
      'M24 26 L30 36',
    ],
  },
  r: {
    // Resh — "7" shape: horizontal top with diagonal leg
    name: 'Resh',
    paths: [
      'M6 6 L28 6 L8 36',
      'M6 20 L20 20',
    ],
  },
  s: {
    // Senth — S-curve
    name: 'Senth',
    paths: [
      'M26 7 Q10 4 10 14 Q10 22 16 22 Q22 22 22 30 Q22 38 6 35',
    ],
  },
  t: {
    // Trill — cross / plus sign
    name: 'Trill',
    paths: [
      'M4 8 L28 8',
      'M16 8 L16 36',
    ],
  },
  u: {
    // Usk — horseshoe / open cup (υ)
    name: 'Usk',
    paths: [
      'M6 4 L6 26 Q6 38 16 38 Q26 38 26 26 L26 4',
    ],
  },
  v: {
    // Vev — downward-pointing triangle (▽)
    name: 'Vev',
    paths: [
      'M4 4 L28 4 L16 36 Z',
    ],
  },
  w: {
    // Wesk — oval / ellipse
    name: 'Wesk',
    paths: [
      'M16 4 Q30 4 30 20 Q30 36 16 36 Q2 36 2 20 Q2 4 16 4',
    ],
  },
  x: {
    // Xesh — X / two crossing diagonals
    name: 'Xesh',
    paths: [
      'M4 4 L28 36',
      'M28 4 L4 36',
    ],
  },
  y: {
    // Yirt — trident / Ψ (fork with three prongs)
    name: 'Yirt',
    paths: [
      'M16 20 L16 36',
      'M4 4 L4 20 Q4 32 16 20 Q28 32 28 20 L28 4',
    ],
  },
  z: {
    // Zerek — Z-shape with diagonals
    name: 'Zerek',
    paths: [
      'M4 4 L28 4 L4 36 L28 36',
    ],
  },

  // ── Digraphs ──────────────────────────────────────────────────────────────
  th: {
    // Thesh — cross with two extra vertical ticks
    name: 'Thesh',
    paths: [
      'M4 10 L28 10',
      'M16 10 L16 36',
      'M8 10 L8 22',
      'M24 10 L24 22',
    ],
  },
  sh: {
    // Shen — S-curve with a top flourish
    name: 'Shen',
    paths: [
      'M26 7 Q10 4 10 14 Q10 22 16 22 Q22 22 22 30 Q22 38 6 35',
      'M24 4 L30 10',
    ],
  },
  ch: {
    // Cherek — crescent with inner vertical
    name: 'Cherek',
    paths: [
      'M26 8 Q4 8 4 20 Q4 32 26 32',
      'M26 8 L26 14',
      'M16 8 L16 32',
    ],
  },
  ng: {
    // Enth — N with horizontal crossbar
    name: 'Enth',
    paths: [
      'M8 4 L8 36',
      'M24 4 L24 36',
      'M8 4 L24 36',
      'M8 20 L24 20',
    ],
  },
  oo: {
    // Onith — concentric circles
    name: 'Onith',
    paths: [
      'M16 4 Q30 4 30 20 Q30 36 16 36 Q2 36 2 20 Q2 4 16 4',
      'M16 11 Q24 11 24 20 Q24 29 16 29 Q8 29 8 20 Q8 11 16 11',
    ],
  },
  ae: {
    // Arent — Aurek + Esk hybrid
    name: 'Arent',
    paths: [
      'M26 20 L8 6 L8 34',
      'M8 20 L20 20',
      'M22 34 L22 10 L30 22',
    ],
  },
  eo: {
    // Eosk — oval with E-peaks inside
    name: 'Eosk',
    paths: [
      'M16 4 Q30 4 30 20 Q30 36 16 36 Q2 36 2 20 Q2 4 16 4',
      'M8 30 L8 14 L14 22 L20 14 L26 22',
    ],
  },
}

// Digraph lookup order (longest first so "oo" beats "o")
const DIGRAPHS = ['th', 'sh', 'ch', 'ng', 'oo', 'ae', 'eo']

// ─── Tokenizer ────────────────────────────────────────────────────────────────

interface Token {
  key: string       // glyph key (single letter or digraph) or ' ' or '\n'
  display: string   // original characters for display
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  const lower = text.toLowerCase()

  while (i < lower.length) {
    if (lower[i] === ' ') { tokens.push({ key: ' ', display: ' ' }); i++; continue }
    if (lower[i] === '\n') { tokens.push({ key: '\n', display: '\n' }); i++; continue }

    // Try digraph first
    const dig = DIGRAPHS.find(d => lower.startsWith(d, i))
    if (dig) {
      tokens.push({ key: dig, display: text.slice(i, i + dig.length) })
      i += dig.length
      continue
    }

    // Single letter
    if (GLYPHS[lower[i]]) {
      tokens.push({ key: lower[i], display: text[i] })
      i++
      continue
    }

    // Unknown character (punctuation, numbers, etc.) — pass through
    tokens.push({ key: lower[i], display: text[i] })
    i++
  }
  return tokens
}

// ─── Single Aurebesh glyph SVG ────────────────────────────────────────────────

function AurebeshGlyph({
  glyphKey,
  size = 36,
  color = 'currentColor',
  showName = false,
}: {
  glyphKey: string
  size?: number
  color?: string
  showName?: boolean
}) {
  const glyph = GLYPHS[glyphKey]
  if (!glyph) return null

  return (
    <div className="flex flex-col items-center gap-0.5">
      <svg
        viewBox="0 0 32 40"
        width={size}
        height={size * 1.25}
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label={glyph.name}
      >
        {glyph.paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
      {showName && (
        <span className="text-[8px] text-muted-foreground font-mono leading-none">{glyph.name}</span>
      )}
    </div>
  )
}

// ─── Romanized output ─────────────────────────────────────────────────────────

function toRomanized(tokens: Token[]): string {
  return tokens.map(t => {
    if (t.key === ' ') return '  '
    if (t.key === '\n') return '\n'
    const glyph = GLYPHS[t.key]
    if (glyph) return glyph.name.toUpperCase()
    return t.display.toUpperCase()
  }).join(' · ')
    .replace(/ · {2} · /g, '   ')   // collapse double-spaces back
    .replace(/\n · /g, '\n')
}

// ─── Examples ─────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'May the Force', input: 'May the Force be with you' },
  { label: 'Star Wars', input: 'Star Wars' },
  { label: 'Jedi', input: 'I am a Jedi' },
  { label: 'Hello there', input: 'Hello there' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function AurebeshTranslatorTool() {
  const [input, setInput] = useState('')
  const [activeTab, setActiveTab] = useState<'visual' | 'romanized' | 'chart'>('visual')

  const tokens = tokenize(input)
  const romanized = toRomanized(tokens)
  const glyphTokens = tokens.filter(t => t.key !== ' ' && t.key !== '\n')

  const copyRomanized = () => {
    navigator.clipboard.writeText(romanized).then(() => {
      toast({ title: 'Copied!', description: 'Aurebesh romanized text copied.' })
    })
  }

  const copyInput = () => {
    navigator.clipboard.writeText(input).then(() => {
      toast({ title: 'Copied!', description: 'English text copied (use with Aurebesh font).' })
    })
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Star Wars phrases:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => setInput(ex.input)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">English Text</label>
        <Textarea
          placeholder="Type English text to translate into Aurebesh..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="min-h-[90px] resize-none text-sm"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{input.length} characters · {glyphTokens.length} Aurebesh glyphs</span>
          {input && (
            <button onClick={() => setInput('')} className="flex items-center gap-1 hover:text-foreground transition-colors">
              <RefreshCw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-muted/30 rounded-xl border w-fit">
        {([
          { key: 'visual', label: '⟁ Visual Glyphs' },
          { key: 'romanized', label: '㊍ Letter Names' },
          { key: 'chart', label: '📖 Alphabet Chart' },
        ] as const).map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-primary text-primary-foreground shadow'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Visual Glyphs tab */}
      {activeTab === 'visual' && (
        <div className="space-y-3">
          {input.trim() ? (
            <>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Aurebesh Output</span>
                <Button size="sm" variant="outline" onClick={copyInput} className="h-7 px-3 gap-1 text-xs">
                  <Copy className="w-3 h-3" /> Copy text
                </Button>
              </div>
              <div className="p-6 bg-gray-950 border border-gray-800 rounded-2xl min-h-[120px] overflow-x-auto">
                <div className="flex flex-wrap gap-x-3 gap-y-6">
                  {tokens.map((t, i) => {
                    if (t.key === '\n') return <div key={i} className="w-full" />
                    if (t.key === ' ') return <div key={i} className="w-4" />
                    if (!GLYPHS[t.key]) {
                      // Pass-through unknown chars (numbers, punctuation)
                      return (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-9 h-[45px] flex items-center justify-center">
                            <span className="text-gray-300 font-mono text-lg">{t.display}</span>
                          </div>
                        </div>
                      )
                    }
                    return (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <AurebeshGlyph glyphKey={t.key} size={36} color="#e2e8f0" />
                        <span className="text-[9px] text-gray-500 font-mono">{t.display.toUpperCase()}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Digraphs automatically combined: TH → Thesh, SH → Shen, CH → Cherek, NG → Enth, OO → Onith
              </p>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-gray-950 rounded-2xl border border-gray-800">
              <div className="flex justify-center gap-3 mb-3">
                <AurebeshGlyph glyphKey="s" size={28} color="#6b7280" />
                <AurebeshGlyph glyphKey="t" size={28} color="#6b7280" />
                <AurebeshGlyph glyphKey="a" size={28} color="#6b7280" />
                <AurebeshGlyph glyphKey="r" size={28} color="#6b7280" />
              </div>
              <p className="text-sm">Type English text above to see it in Aurebesh</p>
              <p className="text-xs mt-1 opacity-50">Galactic Basic awaits</p>
            </div>
          )}
        </div>
      )}

      {/* Romanized tab */}
      {activeTab === 'romanized' && (
        <div className="space-y-3">
          {input.trim() ? (
            <>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Aurebesh Letter Names</span>
                <Button size="sm" variant="outline" onClick={copyRomanized} className="h-7 px-3 gap-1 text-xs">
                  <Copy className="w-3 h-3" /> Copy names
                </Button>
              </div>
              <div className="p-5 bg-muted/20 border rounded-2xl min-h-[80px]">
                <p className="font-mono text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-all">
                  {romanized}
                </p>
              </div>
              <div className="p-4 bg-muted/20 border rounded-xl">
                <p className="text-xs font-medium mb-2">Character breakdown:</p>
                <div className="flex flex-wrap gap-2">
                  {tokens.filter(t => GLYPHS[t.key]).map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-primary/5 border border-primary/20 rounded-lg">
                      <AurebeshGlyph glyphKey={t.key} size={14} color="currentColor" />
                      <span className="text-xs font-mono text-muted-foreground">{t.display.toUpperCase()}</span>
                      <span className="text-xs font-mono text-primary">→</span>
                      <span className="text-xs font-mono">{GLYPHS[t.key].name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-muted-foreground border rounded-2xl">
              <p className="text-sm">Type English text to see Aurebesh letter names</p>
            </div>
          )}
        </div>
      )}

      {/* Alphabet Chart tab */}
      {activeTab === 'chart' && (
        <div className="space-y-4">
          <p className="text-xs text-muted-foreground">Complete Aurebesh alphabet — the written form of Galactic Basic from the Star Wars universe.</p>

          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2">
            {'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
              <div
                key={letter}
                className="flex flex-col items-center gap-2 p-3 bg-gray-950 border border-gray-800 rounded-xl hover:border-primary/40 transition-colors"
              >
                <AurebeshGlyph glyphKey={letter} size={28} color="#e2e8f0" />
                <div className="text-center">
                  <p className="text-xs font-bold text-gray-300">{letter.toUpperCase()}</p>
                  <p className="text-[9px] text-gray-500 font-mono leading-tight">{GLYPHS[letter].name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Digraphs */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Digraphs (combined characters)</p>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {DIGRAPHS.map(dig => (
                <div
                  key={dig}
                  className="flex flex-col items-center gap-2 p-3 bg-gray-950 border border-primary/20 rounded-xl"
                >
                  <AurebeshGlyph glyphKey={dig} size={28} color="#a78bfa" />
                  <div className="text-center">
                    <p className="text-xs font-bold text-purple-300">{dig.toUpperCase()}</p>
                    <p className="text-[9px] text-gray-500 font-mono leading-tight">{GLYPHS[dig].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
