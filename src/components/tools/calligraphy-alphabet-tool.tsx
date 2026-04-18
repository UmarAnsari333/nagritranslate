'use client'

import { useState, useCallback, useEffect } from 'react'
import { Copy, Check, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Character maps ───────────────────────────────────────────────────────────

const MAPS: Record<string, Record<string, string>> = {
  BOLD_SCRIPT: {
    a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',
    n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
    A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',
    N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
  },
  SCRIPT: {
    a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',k:'𝓀',l:'𝓁',m:'𝓂',
    n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',
    A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',K:'𝒦',L:'ℒ',M:'ℳ',
    N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
  },
  FRAKTUR: {
    a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',
    n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
    A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',
    N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
  },
  BOLD_FRAKTUR: {
    a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',k:'𝖐',l:'𝖑',m:'𝖒',
    n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟',
    A:'𝕬',B:'𝕭',C:'𝕮',D:'𝕯',E:'𝕰',F:'𝕱',G:'𝕲',H:'𝕳',I:'𝕴',J:'𝕵',K:'𝕶',L:'𝕷',M:'𝕸',
    N:'𝕹',O:'𝕺',P:'𝕻',Q:'𝕼',R:'𝕽',S:'𝕾',T:'𝕿',U:'𝖀',V:'𝖁',W:'𝖂',X:'𝖃',Y:'𝖄',Z:'𝖅',
  },
  SERIF_ITALIC: {
    a:'𝑎',b:'𝑏',c:'𝑐',d:'𝑑',e:'𝑒',f:'𝑓',g:'𝑔',h:'ℎ',i:'𝑖',j:'𝑗',k:'𝑘',l:'𝑙',m:'𝑚',
    n:'𝑛',o:'𝑜',p:'𝑝',q:'𝑞',r:'𝑟',s:'𝑠',t:'𝑡',u:'𝑢',v:'𝑣',w:'𝑤',x:'𝑥',y:'𝑦',z:'𝑧',
    A:'𝐴',B:'𝐵',C:'𝐶',D:'𝐷',E:'𝐸',F:'𝐹',G:'𝐺',H:'𝐻',I:'𝐼',J:'𝐽',K:'𝐾',L:'𝐿',M:'𝑀',
    N:'𝑁',O:'𝑂',P:'𝑃',Q:'𝑄',R:'𝑅',S:'𝑆',T:'𝑇',U:'𝑈',V:'𝑉',W:'𝑊',X:'𝑋',Y:'𝑌',Z:'𝑍',
  },
  BOLD_ITALIC: {
    a:'𝒂',b:'𝒃',c:'𝒄',d:'𝒅',e:'𝒆',f:'𝒇',g:'𝒈',h:'𝒉',i:'𝒊',j:'𝒋',k:'𝒌',l:'𝒍',m:'𝒎',
    n:'𝒏',o:'𝒐',p:'𝒑',q:'𝒒',r:'𝒓',s:'𝒔',t:'𝒕',u:'𝒖',v:'𝒗',w:'𝒘',x:'𝒙',y:'𝒚',z:'𝒛',
    A:'𝑨',B:'𝑩',C:'𝑪',D:'𝑫',E:'𝑬',F:'𝑭',G:'𝑮',H:'𝑯',I:'𝑰',J:'𝑱',K:'𝑲',L:'𝑳',M:'𝑴',
    N:'𝑵',O:'𝑶',P:'𝑷',Q:'𝑸',R:'𝑹',S:'𝑺',T:'𝑻',U:'𝑼',V:'𝑽',W:'𝑾',X:'𝑿',Y:'𝒀',Z:'𝒁',
  },
  DOUBLE_STRUCK: {
    a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',
    n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
    A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',
    N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
  },
  SMALL_CAPS: {
    a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',
    n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'ꜱ',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
    A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',
    N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'ꜱ',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ',
  },
}

const applyMap = (text: string, map: Record<string, string>) =>
  text.split('').map(c => map[c] ?? c).join('')

// ─── Style definitions ────────────────────────────────────────────────────────

interface CalliStyle {
  id: string
  name: string
  category: string
  description: string
  preview: string  // preview using the style itself
  popular?: boolean
  transform: (t: string) => string
}

const STYLES: CalliStyle[] = [
  // ── Script / Cursive ──────────────────────────────────────────────────────
  {
    id: 'bold-script',
    name: 'Bold Script',
    category: 'script',
    description: 'Thick flowing cursive — the most popular calligraphy style online',
    preview: '𝓐𝓑𝓒𝓓',
    popular: true,
    transform: t => applyMap(t, MAPS.BOLD_SCRIPT),
  },
  {
    id: 'script',
    name: 'Elegant Script',
    category: 'script',
    description: 'Thin, delicate cursive with classic calligraphy proportions',
    preview: '𝒜ℬ𝒞𝒟',
    popular: true,
    transform: t => applyMap(t, MAPS.SCRIPT),
  },
  {
    id: 'bold-italic',
    name: 'Bold Italic',
    category: 'script',
    description: 'Slanted bold serif — elegant with a formal look',
    preview: '𝑨𝑩𝑪𝑫',
    transform: t => applyMap(t, MAPS.BOLD_ITALIC),
  },
  {
    id: 'serif-italic',
    name: 'Serif Italic',
    category: 'script',
    description: 'Classic italic with fine serif strokes — great for formal writing',
    preview: '𝐴𝐵𝐶𝐷',
    transform: t => applyMap(t, MAPS.SERIF_ITALIC),
  },
  {
    id: 'bold-script-caps',
    name: 'Bold Script Caps',
    category: 'script',
    description: 'Bold script in all capitals for headlines and signatures',
    preview: '𝓐𝓑𝓒𝓓',
    transform: t => applyMap(t.toUpperCase(), MAPS.BOLD_SCRIPT),
  },
  {
    id: 'script-lower',
    name: 'Script Lowercase',
    category: 'script',
    description: 'Elegant script rendered entirely in lowercase',
    preview: '𝒶𝒷𝒸𝒹',
    transform: t => applyMap(t.toLowerCase(), MAPS.SCRIPT),
  },

  // ── Gothic / Fraktur ──────────────────────────────────────────────────────
  {
    id: 'fraktur',
    name: 'Gothic Fraktur',
    category: 'gothic',
    description: 'Classic German blackletter — dramatic and ornate',
    preview: '𝔄𝔅ℭ𝔇',
    popular: true,
    transform: t => applyMap(t, MAPS.FRAKTUR),
  },
  {
    id: 'bold-fraktur',
    name: 'Bold Gothic',
    category: 'gothic',
    description: 'Heavy blackletter with strong strokes — medieval and powerful',
    preview: '𝕬𝕭𝕮𝕯',
    popular: true,
    transform: t => applyMap(t, MAPS.BOLD_FRAKTUR),
  },
  {
    id: 'fraktur-caps',
    name: 'Gothic Capitals',
    category: 'gothic',
    description: 'Blackletter rendered in all capitals — commanding and regal',
    preview: '𝔄𝔅ℭ𝔇',
    transform: t => applyMap(t.toUpperCase(), MAPS.FRAKTUR),
  },
  {
    id: 'bold-fraktur-caps',
    name: 'Bold Gothic Caps',
    category: 'gothic',
    description: 'Heavy blackletter all-caps — maximum impact and drama',
    preview: '𝕬𝕭𝕮𝕯',
    transform: t => applyMap(t.toUpperCase(), MAPS.BOLD_FRAKTUR),
  },

  // ── Decorative / Special ──────────────────────────────────────────────────
  {
    id: 'double-struck',
    name: 'Double Struck',
    category: 'decorative',
    description: 'Outlined hollow letters — mathematical and modern',
    preview: '𝔸𝔹ℂ𝔻',
    popular: true,
    transform: t => applyMap(t, MAPS.DOUBLE_STRUCK),
  },
  {
    id: 'small-caps',
    name: 'Small Caps',
    category: 'decorative',
    description: 'Reduced capital-height letters — refined and subtle',
    preview: 'ᴀʙᴄᴅ',
    transform: t => applyMap(t.toLowerCase(), MAPS.SMALL_CAPS),
  },
  {
    id: 'mixed-script-gothic',
    name: 'Script & Gothic Mix',
    category: 'decorative',
    description: 'Alternates bold script and gothic for an artistic contrast',
    preview: '𝓐𝔅𝓒𝔇',
    transform: t => t.split('').map((c, i) =>
      i % 2 === 0 ? (MAPS.BOLD_SCRIPT[c] ?? c) : (MAPS.FRAKTUR[c] ?? c)
    ).join(''),
  },
  {
    id: 'hearts-script',
    name: '♡ Heart Script ♡',
    category: 'decorative',
    description: 'Bold script wrapped in hearts — romantic and sweet',
    preview: '♡𝓐𝓑𝓒♡',
    transform: t => `♡ ${applyMap(t, MAPS.BOLD_SCRIPT)} ♡`,
  },
  {
    id: 'star-script',
    name: '✦ Star Script ✦',
    category: 'decorative',
    description: 'Elegant script accented with stars',
    preview: '✦𝒜ℬ𝒞✦',
    transform: t => `✦ ${applyMap(t, MAPS.SCRIPT)} ✦`,
  },
  {
    id: 'crown-gothic',
    name: '👑 Royal Gothic',
    category: 'decorative',
    description: 'Bold Gothic framed with crown symbols',
    preview: '♛𝕬𝕭𝕮♛',
    transform: t => `♛ ${applyMap(t.toUpperCase(), MAPS.BOLD_FRAKTUR)} ♛`,
  },
  {
    id: 'flourish-script',
    name: '❧ Flourish Script',
    category: 'decorative',
    description: 'Classic script with traditional floral flourish marks',
    preview: '❧𝓐𝓑𝓒❧',
    transform: t => `❧ ${applyMap(t, MAPS.BOLD_SCRIPT)} ❧`,
  },
  {
    id: 'double-struck-caps',
    name: 'Outlined Capitals',
    category: 'decorative',
    description: 'Double-struck in full capitals — bold and geometric',
    preview: '𝔸𝔹ℂ𝔻',
    transform: t => applyMap(t.toUpperCase(), MAPS.DOUBLE_STRUCK),
  },
]

const CATEGORIES = [
  { id: 'all',        label: 'All Styles' },
  { id: 'script',     label: '✒️ Script' },
  { id: 'gothic',     label: '🖤 Gothic' },
  { id: 'decorative', label: '✨ Decorative' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function CalligraphyAlphabetTool() {
  const [input,    setInput]    = useState('')
  const [category, setCategory] = useState('all')
  const [copied,   setCopied]   = useState<string | null>(null)
  const [favs,     setFavs]     = useState<string[]>([])
  const [preview,  setPreview]  = useState('')

  // Animated demo when input is empty
  useEffect(() => {
    const DEMOS = ['Calligraphy', 'Beautiful', 'Elegant', 'Artistic', 'Signature']
    let i = 0
    const id = setInterval(() => { setPreview(DEMOS[i % DEMOS.length]); i++ }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('calli-favs') ?? '[]')
      if (Array.isArray(saved)) setFavs(saved)
    } catch { /* ignore */ }
  }, [])

  const toggleFav = useCallback((id: string) => {
    setFavs(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
      localStorage.setItem('calli-favs', JSON.stringify(next))
      return next
    })
  }, [])

  const copyText = useCallback((text: string, id: string) => {
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
    toast({ title: 'Copied!', description: 'Calligraphy text copied to clipboard' })
  }, [])

  const display = input || preview
  const filtered = category === 'all' ? STYLES : STYLES.filter(s => s.category === category)

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Input */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Your Text
        </label>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a name, word, or phrase…"
          className="min-h-24 text-base resize-none"
          autoFocus
        />
        {input && (
          <div className="flex justify-between">
            <span className="text-[11px] text-muted-foreground">{input.length} characters</span>
            <button onClick={() => setInput('')} className="text-[11px] text-muted-foreground hover:text-destructive transition-colors">Clear</button>
          </div>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-1.5">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all touch-manipulation ${
              category === cat.id
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
        {favs.length > 0 && (
          <button
            onClick={() => setCategory('favs')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all touch-manipulation ${
              category === 'favs'
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60'
            }`}
          >
            ❤️ Favourites ({favs.length})
          </button>
        )}
      </div>

      {/* Style cards */}
      <div className="space-y-3">
        {(category === 'favs' ? STYLES.filter(s => favs.includes(s.id)) : filtered).map(style => {
          const result = style.transform(display)
          const isCopied = copied === style.id
          const isFav = favs.includes(style.id)
          return (
            <div
              key={style.id}
              className="group p-4 rounded-xl border bg-gradient-to-br from-muted/20 to-muted/10 hover:border-primary/30 hover:from-primary/5 hover:to-primary/10 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-foreground">{style.name}</span>
                    {style.popular && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{style.description}</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => toggleFav(style.id)}
                    className={`p-1.5 rounded-full transition-all ${isFav ? 'text-rose-500' : 'text-muted-foreground hover:text-rose-400'}`}
                    title={isFav ? 'Remove favourite' : 'Save as favourite'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>
                  <Button
                    size="sm"
                    variant={isCopied ? 'default' : 'outline'}
                    className="h-7 text-xs"
                    onClick={() => copyText(result, style.id)}
                  >
                    {isCopied ? <><Check className="w-3 h-3 mr-1" />Copied</> : <><Copy className="w-3 h-3 mr-1" />Copy</>}
                  </Button>
                </div>
              </div>
              {/* Output */}
              <div
                className="text-2xl sm:text-3xl leading-relaxed break-all cursor-pointer select-all tracking-wide"
                onClick={() => copyText(result, style.id)}
                title="Click to copy"
              >
                {result}
              </div>
            </div>
          )
        })}
      </div>

      {/* Alphabet reference chart */}
      <div className="space-y-4 pt-4 border-t">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Calligraphy Alphabet Charts — A to Z
        </p>
        {[
          { label: 'Bold Script',    map: MAPS.BOLD_SCRIPT },
          { label: 'Elegant Script', map: MAPS.SCRIPT },
          { label: 'Gothic Fraktur', map: MAPS.FRAKTUR },
          { label: 'Bold Gothic',    map: MAPS.BOLD_FRAKTUR },
        ].map(({ label, map }) => (
          <div key={label} className="space-y-1.5">
            <p className="text-xs font-semibold text-foreground/70">{label}</p>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 26 }, (_, i) => {
                const upper = String.fromCharCode(65 + i)
                return (
                  <button
                    key={upper}
                    onClick={() => setInput(p => p + upper)}
                    title={`Insert ${upper}`}
                    className="flex flex-col items-center px-1.5 py-1 rounded-lg border hover:bg-primary/10 hover:border-primary/30 active:scale-95 transition-all touch-manipulation min-w-[2rem]"
                  >
                    <span className="text-base sm:text-lg leading-none">{map[upper] ?? upper}</span>
                    <span className="text-[8px] text-muted-foreground mt-0.5 uppercase">{upper}</span>
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
