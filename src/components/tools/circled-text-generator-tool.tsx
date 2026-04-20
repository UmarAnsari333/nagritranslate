'use client'

import { useState, useCallback, useEffect } from 'react'
import { Copy, Check, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Character maps ───────────────────────────────────────────────────────────

const CIRCLED: Record<string, string> = {
  a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',
  n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',
  A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',
  N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ',
  '0':'⓪','1':'①','2':'②','3':'③','4':'④','5':'⑤','6':'⑥','7':'⑦','8':'⑧','9':'⑨',
}

const applyMap = (text: string, map: Record<string, string>) =>
  text.split('').map(c => map[c] ?? c).join('')

// ─── Styles ───────────────────────────────────────────────────────────────────

interface Style {
  id: string
  name: string
  description: string
  popular?: boolean
  transform: (t: string) => string
}

const STYLES: Style[] = [
  { id: 'circled',             name: 'Circled',              description: 'Standard circled letters — works everywhere',            popular: true,  transform: t => applyMap(t, CIRCLED) },
  { id: 'circled-upper',       name: 'Circled Uppercase',    description: 'All letters forced to uppercase then circled',           popular: true,  transform: t => applyMap(t.toUpperCase(), CIRCLED) },
  { id: 'circled-lower',       name: 'Circled Lowercase',    description: 'All letters forced to lowercase then circled',                           transform: t => applyMap(t.toLowerCase(), CIRCLED) },
  { id: 'circled-spaced',      name: 'Circled Spaced',       description: 'Circled letters with a space between each one',         popular: true,  transform: t => [...applyMap(t, CIRCLED)].join(' ') },
  { id: 'circled-upper-spaced',name: 'Circled Caps Wide',    description: 'Uppercase circled letters with wide spacing',                           transform: t => [...applyMap(t.toUpperCase(), CIRCLED)].join(' ') },
  { id: 'circled-lower-spaced',name: 'Circled Lower Wide',   description: 'Lowercase circled letters spaced out',                                  transform: t => [...applyMap(t.toLowerCase(), CIRCLED)].join(' ') },
  { id: 'circle-wrap',         name: '◉ Circle Wrap ◉',      description: 'Circled text framed with filled-circle symbols',        popular: true,  transform: t => `◉ ${applyMap(t, CIRCLED)} ◉` },
  { id: 'ring-wrap',           name: '○ Ring Frame ○',        description: 'Circled text framed with open ring symbols',                           transform: t => `○ ${applyMap(t, CIRCLED)} ○` },
  { id: 'dot-circle-wrap',     name: '⊙ Dot Circle ⊙',       description: 'Circled text wrapped in dotted-circle symbols',                        transform: t => `⊙ ${applyMap(t, CIRCLED)} ⊙` },
  { id: 'double-circle-wrap',  name: '◎ Double Circle ◎',    description: 'Circled text framed with double-circle symbols',                       transform: t => `◎ ${applyMap(t, CIRCLED)} ◎` },
  { id: 'circled-stars',       name: '✦ Star Circle ✦',      description: 'Circled text with star decorations',                                   transform: t => `✦ ${applyMap(t, CIRCLED)} ✦` },
  { id: 'circled-hearts',      name: '♡ Heart Circle ♡',     description: 'Circled text wrapped in heart symbols',                                transform: t => `♡ ${applyMap(t, CIRCLED)} ♡` },
  { id: 'circled-dots',        name: 'Dot · Separated',      description: 'Circled letters separated by middle dots',                             transform: t => [...applyMap(t, CIRCLED)].join('·') },
  { id: 'circled-rings',       name: '○ Ring Separated',     description: 'Circled letters separated by small ring symbols',                      transform: t => [...applyMap(t, CIRCLED)].join('○') },
]

const OPEN_NUMS  = ['⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩','⑪','⑫','⑬','⑭','⑮','⑯','⑰','⑱','⑲','⑳']
const FILL_NUMS  = ['❶','❷','❸','❹','❺','❻','❼','❽','❾','❿']
const ALPHABET   = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

// ─── Component ────────────────────────────────────────────────────────────────

export function CircledTextGeneratorTool() {
  const [input,    setInput]    = useState('')
  const [copied,   setCopied]   = useState<string | null>(null)
  const [favs,     setFavs]     = useState<string[]>([])
  const [showFavs, setShowFavs] = useState(false)
  const [preview,  setPreview]  = useState('Text')

  useEffect(() => {
    const DEMOS = ['Circle', 'Hello', 'Style', 'Magic', 'Text']
    let i = 0
    const id = setInterval(() => { setPreview(DEMOS[i % DEMOS.length]); i++ }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('circled-favs') ?? '[]')
      if (Array.isArray(saved)) setFavs(saved)
    } catch { /* ignore */ }
  }, [])

  const toggleFav = useCallback((id: string) => {
    setFavs(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
      localStorage.setItem('circled-favs', JSON.stringify(next))
      return next
    })
  }, [])

  const copyText = useCallback((text: string, id: string) => {
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
    toast({ title: 'Copied!', description: 'Circled text copied to clipboard' })
  }, [])

  const display  = input || preview
  const filtered = showFavs ? STYLES.filter(s => favs.includes(s.id)) : STYLES

  return (
    <div className="w-full space-y-5">

      {/* ── Input ─────────────────────────────────────────────────────────── */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Your Text
        </label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type any word or phrase…"
          className="min-h-24 text-base resize-none w-full"
          autoFocus
        />
        {input && (
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-muted-foreground">{input.length} characters</span>
            <button
              onClick={() => setInput('')}
              className="text-[11px] text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* ── Filter ────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setShowFavs(false)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all touch-manipulation ${
            !showFavs ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60'
          }`}
        >
          All Styles ({STYLES.length})
        </button>
        {favs.length > 0 && (
          <button
            onClick={() => setShowFavs(true)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all touch-manipulation ${
              showFavs ? 'bg-rose-500 text-white border-rose-500' : 'bg-muted/30 text-muted-foreground hover:bg-muted/60'
            }`}
          >
            ❤️ Favourites ({favs.length})
          </button>
        )}
      </div>

      {/* ── Style cards ───────────────────────────────────────────────────── */}
      <div className="space-y-3">
        {filtered.map(style => {
          const result   = style.transform(display)
          const isCopied = copied === style.id
          const isFav    = favs.includes(style.id)
          return (
            <div
              key={style.id}
              className="p-3 sm:p-4 rounded-xl border bg-gradient-to-br from-muted/20 to-muted/10 hover:border-primary/30 transition-all"
            >
              {/* Card header */}
              <div className="flex items-start gap-2 mb-2">
                {/* Left: name + description */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold">{style.name}</span>
                    {style.popular && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">{style.description}</p>
                </div>
                {/* Right: actions */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => toggleFav(style.id)}
                    className={`p-1.5 rounded-full transition-all touch-manipulation ${isFav ? 'text-rose-500' : 'text-muted-foreground hover:text-rose-400'}`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>
                  <Button
                    size="sm"
                    variant={isCopied ? 'default' : 'outline'}
                    className="h-7 text-xs px-2 touch-manipulation"
                    onClick={() => copyText(result, style.id)}
                  >
                    {isCopied
                      ? <><Check className="w-3 h-3 sm:mr-1" /><span className="hidden sm:inline">Copied</span></>
                      : <><Copy className="w-3 h-3 sm:mr-1" /><span className="hidden sm:inline">Copy</span></>}
                  </Button>
                </div>
              </div>
              {/* Output */}
              <div
                className="text-lg sm:text-2xl leading-relaxed break-all cursor-pointer select-all w-full"
                onClick={() => copyText(result, style.id)}
                title="Click to copy"
              >
                {result}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Circled numbers ───────────────────────────────────────────────── */}
      <div className="pt-4 border-t space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Circled Numbers — Click to Insert
        </p>
        <div className="space-y-2">
          {/* Open circle ①–⑳ */}
          <p className="text-[10px] text-muted-foreground font-semibold uppercase">Open Circle ①–⑳</p>
          <div className="grid grid-cols-7 sm:grid-cols-11 gap-1">
            {OPEN_NUMS.map((c, i) => (
              <button
                key={i}
                onClick={() => setInput(p => p + c)}
                className="flex items-center justify-center h-8 text-sm rounded-lg border hover:bg-primary/10 hover:border-primary/30 active:scale-95 transition-all touch-manipulation"
              >
                {c}
              </button>
            ))}
          </div>
          {/* Filled circle ❶–❿ */}
          <p className="text-[10px] text-muted-foreground font-semibold uppercase">Filled Circle ❶–❿</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
            {FILL_NUMS.map((c, i) => (
              <button
                key={i}
                onClick={() => setInput(p => p + c)}
                className="flex items-center justify-center h-8 text-sm rounded-lg border hover:bg-primary/10 hover:border-primary/30 active:scale-95 transition-all touch-manipulation"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── A–Z alphabet chart ────────────────────────────────────────────── */}
      <div className="pt-3 border-t space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Full Alphabet — Click to Insert
        </p>
        {[
          { label: 'Uppercase Ⓐ–Ⓩ', useUpper: true },
          { label: 'Lowercase ⓐ–ⓩ', useUpper: false },
        ].map(({ label, useUpper }) => (
          <div key={label} className="space-y-1">
            <p className="text-[10px] text-muted-foreground font-semibold uppercase">{label}</p>
            <div className="grid grid-cols-9 gap-1">
              {ALPHABET.map(upper => {
                const ch  = useUpper ? upper : upper.toLowerCase()
                return (
                  <button
                    key={ch}
                    onClick={() => setInput(p => p + upper)}
                    title={`${upper} → ${CIRCLED[ch]}`}
                    className="flex flex-col items-center py-1 rounded-lg border hover:bg-primary/10 hover:border-primary/30 active:scale-95 transition-all touch-manipulation"
                  >
                    <span className="text-sm leading-none">{CIRCLED[ch] ?? ch}</span>
                    <span className="text-[8px] text-muted-foreground mt-0.5">{upper}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
