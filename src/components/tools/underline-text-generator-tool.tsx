'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, Check, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'all' | 'simple' | 'bold' | 'stylized' | 'combo'

interface UStyle {
  name: string
  id: string
  category: Exclude<Category, 'all'>
  description: string
  popular?: boolean
  transform: (text: string) => string
}

// ─── Unicode combining characters ─────────────────────────────────────────────
// Applied per character so the underline travels with the text when copy-pasted

const UL  = '\u0332' // COMBINING LOW LINE          — single underline
const DUL = '\u0333' // COMBINING DOUBLE LOW LINE   — double underline
const MBL = '\u0331' // COMBINING MACRON BELOW      — thick/heavy underline
const TBL = '\u0330' // COMBINING TILDE BELOW       — wavy-ish underline
const OL  = '\u0305' // COMBINING OVERLINE          — overline (for combos)
const COL = '\u035F' // COMBINING DOUBLE MACRON BELOW — connected continuous line

// ─── Character maps ───────────────────────────────────────────────────────────

const cm = (text: string, map: Record<string, string>) =>
  text.split('').map(c => map[c] ?? c).join('')

const SERIF_BOLD: Record<string, string> = {
  a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',
  n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',
  A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',
  N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙',
  '0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗',
}
const SANS_BOLD: Record<string, string> = {
  a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',
  n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',
  A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',K:'𝗞',L:'𝗟',M:'𝗠',
  N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭',
  '0':'𝟬','1':'𝟭','2':'𝟮','3':'𝟯','4':'𝟰','5':'𝟱','6':'𝟲','7':'𝟳','8':'𝟴','9':'𝟵',
}
const BOLD_ITALIC: Record<string, string> = {
  a:'𝒂',b:'𝒃',c:'𝒄',d:'𝒅',e:'𝒆',f:'𝒇',g:'𝒈',h:'𝒉',i:'𝒊',j:'𝒋',k:'𝒌',l:'𝒍',m:'𝒎',
  n:'𝒏',o:'𝒐',p:'𝒑',q:'𝒒',r:'𝒓',s:'𝒔',t:'𝒕',u:'𝒖',v:'𝒗',w:'𝒘',x:'𝒙',y:'𝒚',z:'𝒛',
  A:'𝑨',B:'𝑩',C:'𝑪',D:'𝑫',E:'𝑬',F:'𝑭',G:'𝑮',H:'𝑯',I:'𝑰',J:'𝑱',K:'𝑲',L:'𝑳',M:'𝑴',
  N:'𝑵',O:'𝑶',P:'𝑷',Q:'𝑸',R:'𝑹',S:'𝑺',T:'𝑻',U:'𝑼',V:'𝑽',W:'𝑾',X:'𝑿',Y:'𝒀',Z:'𝒁',
}
const SCRIPT: Record<string, string> = {
  a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',k:'𝓀',l:'𝓁',m:'𝓂',
  n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',
  A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',K:'𝒦',L:'ℒ',M:'ℳ',
  N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
}
const BOLD_SCRIPT: Record<string, string> = {
  a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',
  n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
  A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',
  N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
}
const FRAKTUR: Record<string, string> = {
  a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',
  n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
  A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',
  N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
}
const SMALL_CAPS: Record<string, string> = {
  a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',
  n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'ꜱ',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
  A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',
  N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'ꜱ',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ',
}
const MONOSPACE: Record<string, string> = {
  a:'𝚊',b:'𝚋',c:'𝚌',d:'𝚍',e:'𝚎',f:'𝚏',g:'𝚐',h:'𝚑',i:'𝚒',j:'𝚓',k:'𝚔',l:'𝚕',m:'𝚖',
  n:'𝚗',o:'𝚘',p:'𝚙',q:'𝚚',r:'𝚛',s:'𝚜',t:'𝚝',u:'𝚞',v:'𝚟',w:'𝚠',x:'𝚡',y:'𝚢',z:'𝚣',
  A:'𝙰',B:'𝙱',C:'𝙲',D:'𝙳',E:'𝙴',F:'𝙵',G:'𝙶',H:'𝙷',I:'𝙸',J:'𝙹',K:'𝙺',L:'𝙻',M:'𝙼',
  N:'𝙽',O:'𝙾',P:'𝙿',Q:'𝚀',R:'𝚁',S:'𝚂',T:'𝚃',U:'𝚄',V:'𝚅',W:'𝚆',X:'𝚇',Y:'𝚈',Z:'𝚉',
}
const DOUBLE_STRUCK: Record<string, string> = {
  a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',
  n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
  A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',
  N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
}

// Core underlining helpers
// IMPORTANT: use spread [...t] not split('') — spread iterates by Unicode code point,
// so 4-byte SMP characters (bold, script, fraktur, etc.) stay intact as one unit.
// split('') splits by UTF-16 code unit, which tears surrogate pairs apart and
// applies combining marks to broken halves → question-mark rendering.
const underline   = (t: string) => [...t].map(c => c + UL).join('')
const dUnderline  = (t: string) => [...t].map(c => c + DUL).join('')
const thickUL     = (t: string) => [...t].map(c => c + MBL).join('')
const wavyUL      = (t: string) => [...t].map(c => c + TBL).join('')
const connected   = (t: string) => [...t].map(c => c + COL).join('')
const ulAndOver   = (t: string) => [...t].map(c => c + UL + OL).join('')
const dUlAndOver  = (t: string) => [...t].map(c => c + DUL + OL).join('')

// ─── All styles ───────────────────────────────────────────────────────────────

const STYLES: UStyle[] = [
  // ── Simple ────────────────────────────────────────────────────────────────
  {
    name: 'Simple Underline', id: 'simple', category: 'simple', popular: true,
    description: 'Clean single underline — the classic underlined text',
    transform: underline,
  },
  {
    name: 'Double Underline', id: 'double', category: 'simple', popular: true,
    description: 'Two parallel underlines beneath every character',
    transform: dUnderline,
  },
  {
    name: 'Thick Underline', id: 'thick', category: 'simple',
    description: 'Heavier macron-below underline — bolder look',
    transform: thickUL,
  },
  {
    name: 'Wavy Underline', id: 'wavy', category: 'simple',
    description: 'Tilde-below combining — playful wavy style',
    transform: wavyUL,
  },
  {
    name: 'Connected Underline', id: 'connected', category: 'simple', popular: true,
    description: 'Double macron below — continuous flowing line',
    transform: connected,
  },
  {
    name: 'Spaced Underline', id: 'spaced', category: 'simple',
    description: 'Single underline with extra spacing between letters',
    transform: (t) => underline([...t].join(' ')),
  },

  // ── Bold ──────────────────────────────────────────────────────────────────
  {
    name: 'Bold Underline', id: 'bold-ul', category: 'bold', popular: true,
    description: 'Serif bold characters with single underline',
    transform: (t) => underline(cm(t, SERIF_BOLD)),
  },
  {
    name: 'Bold Double Underline', id: 'bold-dul', category: 'bold', popular: true,
    description: 'Bold text + double underline — strong emphasis',
    transform: (t) => dUnderline(cm(t, SERIF_BOLD)),
  },
  {
    name: 'Sans Bold Underline', id: 'sans-bold-ul', category: 'bold',
    description: 'Sans-serif bold + underline — clean & modern',
    transform: (t) => underline(cm(t, SANS_BOLD)),
  },
  {
    name: 'Sans Bold Double Underline', id: 'sans-bold-dul', category: 'bold',
    description: 'Sans bold + double underline — maximum weight',
    transform: (t) => dUnderline(cm(t, SANS_BOLD)),
  },
  {
    name: 'Bold Italic Underline', id: 'bold-italic-ul', category: 'bold', popular: true,
    description: 'Bold italic + underline — dynamic & expressive',
    transform: (t) => underline(cm(t, BOLD_ITALIC)),
  },
  {
    name: 'Bold Thick Underline', id: 'bold-thick-ul', category: 'bold',
    description: 'Bold text + heavy macron underline — pronounced',
    transform: (t) => thickUL(cm(t, SERIF_BOLD)),
  },

  // ── Stylized ──────────────────────────────────────────────────────────────
  {
    name: 'Script Underline', id: 'script-ul', category: 'stylized', popular: true,
    description: 'Elegant cursive script with single underline',
    transform: (t) => underline(cm(t, SCRIPT)),
  },
  {
    name: 'Bold Script Underline', id: 'bold-script-ul', category: 'stylized', popular: true,
    description: 'Bold cursive + underline — lovely & stylish',
    transform: (t) => underline(cm(t, BOLD_SCRIPT)),
  },
  {
    name: 'Script Double Underline', id: 'script-dul', category: 'stylized',
    description: 'Cursive script + double underline — ornate',
    transform: (t) => dUnderline(cm(t, SCRIPT)),
  },
  {
    name: 'Fraktur Underline', id: 'fraktur-ul', category: 'stylized',
    description: 'Gothic blackletter + underline — dark & dramatic',
    transform: (t) => underline(cm(t, FRAKTUR)),
  },
  {
    name: 'Small Caps Underline', id: 'small-caps-ul', category: 'stylized', popular: true,
    description: 'Small caps + underline — refined & classical',
    transform: (t) => underline(cm(t, SMALL_CAPS)),
  },
  {
    name: 'Small Caps Double Underline', id: 'small-caps-dul', category: 'stylized',
    description: 'Small caps + double underline — editorial style',
    transform: (t) => dUnderline(cm(t, SMALL_CAPS)),
  },
  {
    name: 'Monospace Underline', id: 'mono-ul', category: 'stylized',
    description: 'Typewriter mono + underline — code & retro feel',
    transform: (t) => underline(cm(t, MONOSPACE)),
  },
  {
    name: 'Double Struck Underline', id: 'ds-ul', category: 'stylized',
    description: 'Blackboard bold + underline — mathematical flair',
    transform: (t) => underline(cm(t, DOUBLE_STRUCK)),
  },
  {
    name: 'Fullwidth Underline', id: 'fw-ul', category: 'stylized',
    description: 'Wide aesthetic characters + underline — vaporwave',
    transform: (t) => underline(
      [...t].map(c => {
        const code = c.codePointAt(0) ?? 0
        if (code >= 33 && code <= 126) return String.fromCodePoint(code + 0xFEE0)
        if (c === ' ') return '\u3000'
        return c
      }).join('')
    ),
  },

  // ── Combo ─────────────────────────────────────────────────────────────────
  {
    name: 'Underline + Overline', id: 'ul-ol', category: 'combo', popular: true,
    description: 'Bar above and below every character — framed text',
    transform: ulAndOver,
  },
  {
    name: 'Double Underline + Overline', id: 'dul-ol', category: 'combo',
    description: 'Double underline and overline — triple-emphasis',
    transform: dUlAndOver,
  },
  {
    name: 'Bold Underline + Overline', id: 'bold-ul-ol', category: 'combo',
    description: 'Bold framed between two lines — heavy emphasis',
    transform: (t) => ulAndOver(cm(t, SERIF_BOLD)),
  },
  {
    name: 'Script Underline + Overline', id: 'script-ul-ol', category: 'combo',
    description: 'Cursive framed between two lines — elegant',
    transform: (t) => ulAndOver(cm(t, SCRIPT)),
  },
  {
    name: 'Bold Script + Double Underline', id: 'bold-script-dul', category: 'combo',
    description: 'Bold cursive + double underline — maximum style',
    transform: (t) => dUnderline(cm(t, BOLD_SCRIPT)),
  },
  {
    name: 'Wavy + Overline', id: 'wavy-ol', category: 'combo',
    description: 'Wavy below + line above — quirky & distinctive',
    transform: (t) => [...t].map(c => c + TBL + OL).join(''),
  },
  {
    name: 'Thick + Overline', id: 'thick-ol', category: 'combo',
    description: 'Heavy underline + overline — sandwiched emphasis',
    transform: (t) => [...t].map(c => c + MBL + OL).join(''),
  },
  {
    name: 'Bold Italic + Double Underline', id: 'bold-italic-dul', category: 'combo',
    description: 'Bold italic + double underline — all-in emphasis',
    transform: (t) => dUnderline(cm(t, BOLD_ITALIC)),
  },
]

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORIES: { id: Category; label: string; desc: string }[] = [
  { id: 'all',      label: 'All Styles',  desc: 'All underline styles' },
  { id: 'simple',   label: 'Simple',      desc: 'Plain underline variations' },
  { id: 'bold',     label: 'Bold',        desc: 'Bold + underline' },
  { id: 'stylized', label: 'Stylized',    desc: 'Script, gothic & more' },
  { id: 'combo',    label: 'Combo',       desc: 'Underline + other effects' },
]

const CATEGORY_COLORS: Record<Exclude<Category, 'all'>, string> = {
  simple:   'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  bold:     'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  stylized: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  combo:    'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
}

const SAMPLES = [
  'Hello World', 'underline text', 'Your Name', 'Important', 'Bold Underline', 'Copy & Paste'
]

// ─── Component ────────────────────────────────────────────────────────────────

export function UnderlineTextGeneratorTool() {
  const [input, setInput]         = useState('')
  const [category, setCategory]   = useState<Category>('all')
  const [copiedId, setCopiedId]   = useState<string | null>(null)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [previewIdx, setPreviewIdx] = useState(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('underline-text-favorites')
      if (saved) setFavorites(new Set(JSON.parse(saved)))
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (input) return
    const id = setInterval(() => setPreviewIdx(i => (i + 1) % STYLES.length), 2000)
    return () => clearInterval(id)
  }, [input])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      try { localStorage.setItem('underline-text-favorites', JSON.stringify([...next])) } catch { /* ignore */ }
      return next
    })
  }, [])

  const copy = useCallback((text: string, id: string, name: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
    toast({ title: 'Copied!', description: `${name} copied to clipboard` })
  }, [])

  const categoryCounts = Object.fromEntries(
    CATEGORIES.slice(1).map(cat => [cat.id, STYLES.filter(s => s.category === cat.id).length])
  )

  const filtered = category === 'all' ? STYLES : STYLES.filter(s => s.category === category)
  const popularStyles   = STYLES.filter(s => s.popular)
  const favoritedStyles = STYLES.filter(s => favorites.has(s.id))

  const copyAll = () => {
    const all = filtered.map(s => `【${s.name}】\n${s.transform(input)}`).join('\n\n')
    navigator.clipboard.writeText(all)
    toast({ title: 'All styles copied!' })
  }

  const hasInput  = input.trim().length > 0
  const charCount = input.length
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0

  return (
    <div className="space-y-5">
      {/* Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold">Your Text</label>
          <span className="text-xs text-muted-foreground">{charCount} chars · {wordCount} words</span>
        </div>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type or paste your text here…"
          className="min-h-24 text-base resize-none"
          autoFocus
        />
        {/* Horizontally scrollable chips on mobile, wrap on desktop */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 scrollbar-none">
          {SAMPLES.map(s => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="shrink-0 text-xs px-2.5 py-1 rounded-full border hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
        {hasInput && (
          <div className="flex gap-2">
            <Button onClick={copyAll} size="sm" className="flex-1 h-9 sm:h-8 touch-manipulation">
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              Copy All ({filtered.length})
            </Button>
            <Button onClick={() => setInput('')} size="sm" variant="outline" className="h-9 sm:h-8 px-3 touch-manipulation">
              <X className="w-3.5 h-3.5" />
            </Button>
          </div>
        )}
      </div>

      {/* Category tabs — scroll on mobile */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            title={cat.desc}
            className={`shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors border ${
              category === cat.id
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {cat.label}
            {cat.id !== 'all' && (
              <span className="ml-1 opacity-60">{categoryCounts[cat.id]}</span>
            )}
          </button>
        ))}
      </div>

      {/* Animated empty state */}
      {!hasInput && (
        <div className="py-10 text-center space-y-3">
          <div className="text-3xl font-bold tracking-wide transition-all duration-500 min-h-10">
            {STYLES[previewIdx].transform('Underline Text')}
          </div>
          <p className="text-xs text-muted-foreground">
            {STYLES[previewIdx].name} — type above to generate all {STYLES.length} styles
          </p>
          <div className="flex justify-center gap-1 pt-1 flex-wrap max-w-xs mx-auto">
            {STYLES.map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full transition-colors ${i === previewIdx ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {hasInput && (
        <div className="space-y-4">
          {favoritedStyles.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> Favorites
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {favoritedStyles.map(style => (
                  <StyleCard key={style.id + '-fav'} style={style} output={style.transform(input)}
                    isCopied={copiedId === style.id + '-fav'} isFavorite
                    onCopy={() => copy(style.transform(input), style.id + '-fav', style.name)}
                    onFavorite={() => toggleFavorite(style.id)} />
                ))}
              </div>
            </div>
          )}

          {category === 'all' && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">⭐ Most Popular</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {popularStyles.map(style => (
                  <StyleCard key={style.id + '-pop'} style={style} output={style.transform(input)}
                    isCopied={copiedId === style.id + '-pop'} isFavorite={favorites.has(style.id)}
                    onCopy={() => copy(style.transform(input), style.id + '-pop', style.name)}
                    onFavorite={() => toggleFavorite(style.id)} />
                ))}
              </div>
            </div>
          )}

          <div>
            {category === 'all' && (
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                All {STYLES.length} Underline Styles
              </p>
            )}
            <div className="grid sm:grid-cols-2 gap-2">
              {filtered.map(style => (
                <StyleCard key={style.id} style={style} output={style.transform(input)}
                  isCopied={copiedId === style.id} isFavorite={favorites.has(style.id)}
                  onCopy={() => copy(style.transform(input), style.id, style.name)}
                  onFavorite={() => toggleFavorite(style.id)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StyleCard({
  style, output, isCopied, isFavorite, onCopy, onFavorite,
}: {
  style: UStyle; output: string; isCopied: boolean; isFavorite: boolean
  onCopy: () => void; onFavorite: () => void
}) {
  return (
    <div className="group p-3 sm:p-3.5 rounded-xl border bg-card hover:border-primary/40 transition-all hover:shadow-sm">
      <div className="flex items-center justify-between mb-2 gap-1">
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span className="text-xs font-semibold truncate">{style.name}</span>
          <span className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full font-medium shrink-0 hidden xs:inline-block sm:inline-block ${CATEGORY_COLORS[style.category]}`}>
            {style.category}
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onFavorite}
            className={`p-1.5 sm:p-1 rounded-md transition-colors touch-manipulation ${isFavorite ? 'text-rose-500' : 'text-muted-foreground/40 hover:text-rose-400 sm:opacity-0 sm:group-hover:opacity-100 opacity-100'}`}
            title={isFavorite ? 'Remove from favorites' : 'Save as favorite'}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500' : ''}`} />
          </button>
          <Button
            onClick={onCopy}
            size="sm"
            variant={isCopied ? 'default' : 'outline'}
            className="h-7 sm:h-6 px-2 sm:px-2 text-[11px] touch-manipulation"
          >
            {isCopied
              ? <><Check className="w-3 h-3 mr-0.5" /><span className="hidden xs:inline sm:inline">Copied</span></>
              : <><Copy className="w-3 h-3 mr-0.5" /><span className="hidden xs:inline sm:inline">Copy</span></>
            }
          </Button>
        </div>
      </div>
      <div
        className="text-base sm:text-lg leading-relaxed sm:leading-loose break-all cursor-text select-all py-1 tracking-wide"
        onClick={onCopy}
        title="Click to copy"
      >
        {output}
      </div>
      <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{style.description}</p>
    </div>
  )
}
