'use client'

import { useState, useCallback, useEffect } from 'react'
import { Copy, Check, Heart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'all' | 'classic' | 'coastal' | 'collegiate' | 'garden' | 'oldmoney' | 'coquette' | 'stargirl'

interface PrepStyle {
  name: string
  id: string
  category: Exclude<Category, 'all'>
  description: string
  popular?: boolean
  transform: (text: string) => string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const between = (text: string, sep: string) =>
  text.split(' ').map(w => w.split('').join(sep)).join(' ')

const wrap = (text: string, l: string, r: string) => `${l}${text}${r}`

const charMap = (text: string, map: Record<string, string>) =>
  text.split('').map(c => map[c] ?? c).join('')

// ─── Character Maps ───────────────────────────────────────────────────────────

const BOLD_SCRIPT: Record<string, string> = {
  a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',
  n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
  A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',
  N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
}

const SCRIPT: Record<string, string> = {
  a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',k:'𝓀',l:'𝓁',m:'𝓂',
  n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',
  A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',K:'𝒦',L:'ℒ',M:'ℳ',
  N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
}

const SMALL_CAPS: Record<string, string> = {
  a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',
  n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'ꜱ',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
  A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',
  N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'ꜱ',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ',
}

const DOUBLE_STRUCK: Record<string, string> = {
  a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',
  n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
  A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',
  N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
}

const SERIF_ITALIC: Record<string, string> = {
  a:'𝑎',b:'𝑏',c:'𝑐',d:'𝑑',e:'𝑒',f:'𝑓',g:'𝑔',h:'ℎ',i:'𝑖',j:'𝑗',k:'𝑘',l:'𝑙',m:'𝑚',
  n:'𝑛',o:'𝑜',p:'𝑝',q:'𝑞',r:'𝑟',s:'𝑠',t:'𝑡',u:'𝑢',v:'𝑣',w:'𝑤',x:'𝑥',y:'𝑦',z:'𝑧',
  A:'𝐴',B:'𝐵',C:'𝐶',D:'𝐷',E:'𝐸',F:'𝐹',G:'𝐺',H:'𝐻',I:'𝐼',J:'𝐽',K:'𝐾',L:'𝐿',M:'𝑀',
  N:'𝑁',O:'𝑂',P:'𝑃',Q:'𝑄',R:'𝑅',S:'𝑆',T:'𝑇',U:'𝑈',V:'𝑉',W:'𝑊',X:'𝑋',Y:'𝑌',Z:'𝑍',
}

const BOLD_SERIF: Record<string, string> = {
  a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',
  n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',
  A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',
  N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙',
}

const CIRCLED: Record<string, string> = {
  a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',
  n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',
  A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',
  N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ',
}

const BOLD_ITALIC: Record<string, string> = {
  a:'𝒂',b:'𝒃',c:'𝒄',d:'𝒅',e:'𝒆',f:'𝒇',g:'𝒈',h:'𝒉',i:'𝒊',j:'𝒋',k:'𝒌',l:'𝒍',m:'𝒎',
  n:'𝒏',o:'𝒐',p:'𝒑',q:'𝒒',r:'𝒓',s:'𝒔',t:'𝒕',u:'𝒖',v:'𝒗',w:'𝒘',x:'𝒙',y:'𝒚',z:'𝒛',
  A:'𝑨',B:'𝑩',C:'𝑪',D:'𝑫',E:'𝑬',F:'𝑭',G:'𝑮',H:'𝑯',I:'𝑰',J:'𝑱',K:'𝑲',L:'𝑳',M:'𝑴',
  N:'𝑵',O:'𝑶',P:'𝑷',Q:'𝑸',R:'𝑹',S:'𝑺',T:'𝑻',U:'𝑼',V:'𝑽',W:'𝑾',X:'𝑿',Y:'𝒀',Z:'𝒁',
}

const SANS_BOLD: Record<string, string> = {
  a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',
  n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',
  A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',K:'𝗞',L:'𝗟',M:'𝗠',
  N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭',
}

const SANS_ITALIC: Record<string, string> = {
  a:'𝘢',b:'𝘣',c:'𝘤',d:'𝘥',e:'𝘦',f:'𝘧',g:'𝘨',h:'𝘩',i:'𝘪',j:'𝘫',k:'𝘬',l:'𝘭',m:'𝘮',
  n:'𝘯',o:'𝘰',p:'𝘱',q:'𝘲',r:'𝘳',s:'𝘴',t:'𝘵',u:'𝘶',v:'𝘷',w:'𝘸',x:'𝘹',y:'𝘺',z:'𝘻',
  A:'𝘈',B:'𝘉',C:'𝘊',D:'𝘋',E:'𝘌',F:'𝘍',G:'𝘎',H:'𝘏',I:'𝘐',J:'𝘑',K:'𝘒',L:'𝘓',M:'𝘔',
  N:'𝘕',O:'𝘖',P:'𝘗',Q:'𝘘',R:'𝘙',S:'𝘚',T:'𝘛',U:'𝘜',V:'𝘝',W:'𝘞',X:'𝘟',Y:'𝘠',Z:'𝘡',
}

const SANS_BOLD_ITALIC: Record<string, string> = {
  a:'𝙖',b:'𝙗',c:'𝙘',d:'𝙙',e:'𝙚',f:'𝙛',g:'𝙜',h:'𝙝',i:'𝙞',j:'𝙟',k:'𝙠',l:'𝙡',m:'𝙢',
  n:'𝙣',o:'𝙤',p:'𝙥',q:'𝙦',r:'𝙧',s:'𝙨',t:'𝙩',u:'𝙪',v:'𝙫',w:'𝙬',x:'𝙭',y:'𝙮',z:'𝙯',
  A:'𝘼',B:'𝘽',C:'𝘾',D:'𝘿',E:'𝙀',F:'𝙁',G:'𝙂',H:'𝙃',I:'𝙄',J:'𝙅',K:'𝙆',L:'𝙇',M:'𝙈',
  N:'𝙉',O:'𝙊',P:'𝙋',Q:'𝙌',R:'𝙍',S:'𝙎',T:'𝙏',U:'𝙐',V:'𝙑',W:'𝙒',X:'𝙓',Y:'𝙔',Z:'𝙕',
}

// ─── Preppy Styles ────────────────────────────────────────────────────────────

const PREPPY_STYLES: PrepStyle[] = [
  // ── Classic Prep ──────────────────────────────────────────────────────────
  {
    name: 'Preppy Script', id: 'preppy-script', category: 'classic', popular: true,
    description: 'Bold cursive — the signature preppy font',
    transform: t => charMap(t, BOLD_SCRIPT),
  },
  {
    name: 'Pink Bow', id: 'bow-wrap', category: 'classic', popular: true,
    description: '🎀 ribbon bow frame — quintessential preppy',
    transform: t => wrap(t, '🎀 ', ' 🎀'),
  },
  {
    name: 'Pearl Dots', id: 'pearl-sep', category: 'classic', popular: true,
    description: '· pearl dot between letters — classic prep',
    transform: t => between(t, '·'),
  },
  {
    name: 'Seersucker', id: 'seersucker', category: 'classic',
    description: '≈ wavy seersucker stripe between letters',
    transform: t => between(t, '≈'),
  },
  {
    name: 'Pink Heart', id: 'pink-heart', category: 'classic',
    description: '🩷 pink heart frame — girly preppy',
    transform: t => wrap(t, '🩷 ', ' 🩷'),
  },
  {
    name: 'Ribbon Wrap', id: 'ribbon', category: 'classic',
    description: '🎗️ satin ribbon border — preppy chic',
    transform: t => wrap(t, '🎗️ ', ' 🎗️'),
  },
  {
    name: 'Lucky Clover', id: 'clover', category: 'classic',
    description: '🍀 clover wrap — lucky preppy green',
    transform: t => wrap(t, '🍀 ', ' 🍀'),
  },
  {
    name: 'Sparkle Script', id: 'sparkle-script', category: 'classic', popular: true,
    description: '✧ bold script with sparkle frame — magical prep',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '✧ ', ' ✧'),
  },
  {
    name: 'Star Border', id: 'star-border', category: 'classic',
    description: '★ star frame — confident preppy energy',
    transform: t => wrap(t, '★ ', ' ★'),
  },
  {
    name: 'Italic Dots', id: 'italic-dots', category: 'classic',
    description: '· italic letters with pearl dots — refined classic',
    transform: t => between(charMap(t, SERIF_ITALIC), '·'),
  },
  {
    name: 'Ornament Wrap', id: 'ornament', category: 'classic',
    description: '꧁ ꧂ ornamental border — decorative preppy',
    transform: t => wrap(t, '꧁ ', ' ꧂'),
  },

  // ── Coastal / Nautical ────────────────────────────────────────────────────
  {
    name: 'Anchor Drop', id: 'anchor', category: 'coastal', popular: true,
    description: '⚓ anchor frame — classic nautical prep',
    transform: t => wrap(t, '⚓ ', ' ⚓'),
  },
  {
    name: 'Sailboat', id: 'sailboat', category: 'coastal', popular: true,
    description: '⛵ sailboat wrap — regatta ready',
    transform: t => wrap(t, '⛵ ', ' ⛵'),
  },
  {
    name: 'Whale Watch', id: 'whale', category: 'coastal', popular: true,
    description: '🐋 whale wrap — Vineyard Vines vibes',
    transform: t => wrap(t, '🐋 ', ' 🐋'),
  },
  {
    name: 'Lobster Roll', id: 'lobster', category: 'coastal',
    description: '🦞 lobster frame — New England preppy',
    transform: t => wrap(t, '🦞 ', ' 🦞'),
  },
  {
    name: 'Seashell Dots', id: 'seashell', category: 'coastal',
    description: '🐚 seashell between letters — beachy prep',
    transform: t => between(t, '🐚'),
  },
  {
    name: 'Starfish Shore', id: 'starfish', category: 'coastal',
    description: '⭐ starfish frame — coastal vacation',
    transform: t => wrap(t, '⭐ ', ' ⭐'),
  },
  {
    name: 'Wave Script', id: 'wave-script', category: 'coastal',
    description: '🌊 ocean wave frame — summer on the coast',
    transform: t => wrap(charMap(t, SCRIPT), '🌊 ', ' 🌊'),
  },
  {
    name: 'Palm Tree', id: 'palm-tree', category: 'coastal',
    description: '🌴 palm tree wrap — tropical coastal prep',
    transform: t => wrap(t, '🌴 ', ' 🌴'),
  },
  {
    name: 'Coral Reef', id: 'coral-reef', category: 'coastal',
    description: '🪸 coral wrap — reef-side coastal vibes',
    transform: t => wrap(t, '🪸 ', ' 🪸'),
  },
  {
    name: 'Pelican Prep', id: 'pelican', category: 'coastal',
    description: '🐦 seabird wrap — breezy coastal summer',
    transform: t => wrap(t, '🐦 ', ' 🐦'),
  },

  // ── Collegiate ────────────────────────────────────────────────────────────
  {
    name: 'Collegiate Bold', id: 'collegiate', category: 'collegiate', popular: true,
    description: 'Double-struck bold — campus & varsity style',
    transform: t => charMap(t, DOUBLE_STRUCK),
  },
  {
    name: 'Sorority Script', id: 'sorority', category: 'collegiate', popular: true,
    description: '💜 bold script with heart frame — sorority style',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '💜 ', ' 💜'),
  },
  {
    name: 'Tennis Club', id: 'tennis', category: 'collegiate', popular: true,
    description: '🎾 tennis wrap — country club classic',
    transform: t => wrap(t, '🎾 ', ' 🎾'),
  },
  {
    name: 'Circled Letters', id: 'circled', category: 'collegiate',
    description: 'Circled bubble letters — Greek life aesthetic',
    transform: t => charMap(t, CIRCLED),
  },
  {
    name: 'Lacrosse Prep', id: 'lacrosse', category: 'collegiate',
    description: '🥍 lacrosse wrap — prep school sport',
    transform: t => wrap(t, '🥍 ', ' 🥍'),
  },
  {
    name: 'Equestrian', id: 'equestrian', category: 'collegiate',
    description: '🏇 equestrian frame — horseback & polo',
    transform: t => wrap(t, '🏇 ', ' 🏇'),
  },
  {
    name: 'Gameday', id: 'gameday', category: 'collegiate',
    description: '🏈 football game day frame — team spirit',
    transform: t => wrap(t, '🏈 ', ' 🏈'),
  },
  {
    name: 'Varsity Bold', id: 'varsity', category: 'collegiate', popular: true,
    description: 'Bold italic sans — varsity letter jacket energy',
    transform: t => charMap(t, SANS_BOLD_ITALIC),
  },
  {
    name: 'Study Aesthetic', id: 'study', category: 'collegiate',
    description: 'Sans italic — clean girl study account style',
    transform: t => charMap(t, SANS_ITALIC),
  },

  // ── Garden Party ──────────────────────────────────────────────────────────
  {
    name: 'Magnolia Script', id: 'magnolia', category: 'garden', popular: true,
    description: '🌸 floral bold script — Southern garden party',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '🌸 ', ' 🌸'),
  },
  {
    name: 'Hydrangea', id: 'hydrangea', category: 'garden', popular: true,
    description: '💐 flower bouquet frame — garden party prep',
    transform: t => wrap(t, '💐 ', ' 💐'),
  },
  {
    name: 'Honey Bee', id: 'honey-bee', category: 'garden',
    description: '🐝 honeybee between letters — Southern prep',
    transform: t => between(t, '🐝'),
  },
  {
    name: 'Daisy Chain', id: 'daisy', category: 'garden',
    description: '🌼 daisy between letters — meadow preppy',
    transform: t => between(t, '🌼'),
  },
  {
    name: 'Lemon Fresh', id: 'lemon', category: 'garden',
    description: '🍋 lemon wrap — bright preppy summer',
    transform: t => wrap(t, '🍋 ', ' 🍋'),
  },
  {
    name: 'Peach Sweet', id: 'peach', category: 'garden',
    description: '🍑 peach frame — sweet Southern prep',
    transform: t => wrap(t, '🍑 ', ' 🍑'),
  },
  {
    name: 'Garden Italic', id: 'garden-italic', category: 'garden',
    description: 'Serif italic — refined garden party elegance',
    transform: t => charMap(t, SERIF_ITALIC),
  },
  {
    name: 'Strawberry Fields', id: 'strawberry', category: 'garden',
    description: '🍓 strawberry frame — sweet garden summer',
    transform: t => wrap(t, '🍓 ', ' 🍓'),
  },
  {
    name: 'Butterfly Garden', id: 'butterfly', category: 'garden',
    description: '🦋 butterfly wrap — whimsical preppy garden',
    transform: t => wrap(t, '🦋 ', ' 🦋'),
  },
  {
    name: 'Tulip Script', id: 'tulip', category: 'garden',
    description: '🌷 tulip frame with bold script — spring garden',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '🌷 ', ' 🌷'),
  },

  // ── Old Money ─────────────────────────────────────────────────────────────
  {
    name: 'Old Money Serif', id: 'old-money', category: 'oldmoney', popular: true,
    description: 'Italic serif — quiet luxury & old money',
    transform: t => charMap(t, SERIF_ITALIC),
  },
  {
    name: 'Estate Caps', id: 'estate-caps', category: 'oldmoney', popular: true,
    description: 'Small caps — country estate elegance',
    transform: t => charMap(t, SMALL_CAPS),
  },
  {
    name: 'Country Club Bold', id: 'country-club', category: 'oldmoney', popular: true,
    description: 'Bold serif — golf course & country club',
    transform: t => charMap(t, BOLD_SERIF),
  },
  {
    name: 'Monogram', id: 'monogram', category: 'oldmoney',
    description: 'Uppercase bold serif — monogram preppy style',
    transform: t => charMap(t.toUpperCase(), BOLD_SERIF),
  },
  {
    name: 'Champagne Toast', id: 'champagne', category: 'oldmoney',
    description: '🥂 champagne frame — celebratory old money',
    transform: t => wrap(t, '🥂 ', ' 🥂'),
  },
  {
    name: 'Golf & Greens', id: 'golf', category: 'oldmoney',
    description: '⛳ golf frame — old money leisure',
    transform: t => wrap(t, '⛳ ', ' ⛳'),
  },
  {
    name: 'Regatta Trophy', id: 'regatta', category: 'oldmoney',
    description: '🏆 trophy frame — winning old money',
    transform: t => wrap(t, '🏆 ', ' 🏆'),
  },
  {
    name: 'Gatsby Bold Italic', id: 'gatsby', category: 'oldmoney', popular: true,
    description: 'Bold italic — Gatsby glamour & 1920s old money',
    transform: t => charMap(t, BOLD_ITALIC),
  },
  {
    name: 'Bracket Elegance', id: 'bracket', category: 'oldmoney',
    description: '〔 〕 bracket frame — understated editorial luxury',
    transform: t => wrap(t, '〔 ', ' 〕'),
  },
  {
    name: 'Quiet Luxury', id: 'quiet-luxury', category: 'oldmoney',
    description: 'Uppercase bold serif — the definition of quiet luxury',
    transform: t => charMap(t.toUpperCase(), BOLD_SERIF),
  },

  // ── Coquette ─────────────────────────────────────────────────────────────
  {
    name: 'Coquette Script', id: 'coquette-script', category: 'coquette', popular: true,
    description: '🩰 ballet flat with bold script — signature coquette',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '🩰 ', ' 🩰'),
  },
  {
    name: 'Ballet Bow', id: 'ballet-bow', category: 'coquette', popular: true,
    description: '🎀 bow with elegant script — soft feminine coquette',
    transform: t => wrap(charMap(t, SCRIPT), '🎀 ', ' 🎀'),
  },
  {
    name: 'Diary Girl', id: 'diary-girl', category: 'coquette', popular: true,
    description: 'Lowercase italic serif — romantic diary aesthetic',
    transform: t => charMap(t.toLowerCase(), SERIF_ITALIC),
  },
  {
    name: 'Dainty Hearts', id: 'dainty-hearts', category: 'coquette',
    description: '♡ open heart frame — delicate & tender',
    transform: t => wrap(charMap(t, SERIF_ITALIC), '♡ ', ' ♡'),
  },
  {
    name: 'Soft Sparkle', id: 'soft-sparkle', category: 'coquette',
    description: '✧ sparkle with bold script — ethereal coquette',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '✧ ', ' ✧'),
  },
  {
    name: 'Blush Script', id: 'blush-script', category: 'coquette',
    description: '🩷 blush pink heart script — girly soft girl',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '🩷 ', ' 🩷'),
  },
  {
    name: 'Lace Dots', id: 'lace-dots', category: 'coquette',
    description: '♡ heart dots between letters — lace-like delicate',
    transform: t => between(t, '♡'),
  },
  {
    name: 'Bubble Coquette', id: 'bubble-coquette', category: 'coquette',
    description: '🫧 bubble wrap — airy soft girl aesthetic',
    transform: t => wrap(t, '🫧 ', ' 🫧'),
  },

  // ── Star Girl / Clean Girl ────────────────────────────────────────────────
  {
    name: 'Star Girl Bold', id: 'star-girl-bold', category: 'stargirl', popular: true,
    description: 'Sans bold — clean girl confident star girl energy',
    transform: t => charMap(t, SANS_BOLD),
  },
  {
    name: 'Lightning Strike', id: 'lightning', category: 'stargirl', popular: true,
    description: '⚡ lightning bolt frame — bold star girl vibes',
    transform: t => wrap(charMap(t, SANS_BOLD), '⚡ ', ' ⚡'),
  },
  {
    name: 'Slay Script', id: 'slay-script', category: 'stargirl', popular: true,
    description: '💅 nail polish frame — slay & confident prep',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '💅 ', ' 💅'),
  },
  {
    name: 'Clean Girl Italic', id: 'clean-girl', category: 'stargirl',
    description: 'Bold italic — polished clean girl aesthetic',
    transform: t => charMap(t, BOLD_ITALIC),
  },
  {
    name: 'Leopard Print', id: 'leopard', category: 'stargirl',
    description: '🐆 leopard wrap — bold pattern star girl',
    transform: t => wrap(charMap(t, SANS_BOLD), '🐆 ', ' 🐆'),
  },
  {
    name: 'Glitter Bold', id: 'glitter-bold', category: 'stargirl',
    description: '✨ sparkle with sans bold — glitter star girl',
    transform: t => wrap(charMap(t, SANS_BOLD), '✨ ', ' ✨'),
  },
  {
    name: 'Star Power', id: 'star-power', category: 'stargirl',
    description: '★ star frame — main character energy',
    transform: t => wrap(charMap(t, SANS_BOLD), '★ ', ' ★'),
  },
]

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: 'all',        label: 'All',           emoji: '🎀' },
  { id: 'classic',   label: 'Classic Prep',   emoji: '🩷' },
  { id: 'coastal',   label: 'Coastal',        emoji: '⚓' },
  { id: 'collegiate',label: 'Collegiate',     emoji: '🎓' },
  { id: 'garden',    label: 'Garden Party',   emoji: '🌸' },
  { id: 'oldmoney',  label: 'Old Money',      emoji: '🥂' },
  { id: 'coquette',  label: 'Coquette',       emoji: '🩰' },
  { id: 'stargirl',  label: 'Star Girl',      emoji: '⚡' },
]

const CATEGORY_COLORS: Record<Exclude<Category, 'all'>, string> = {
  classic:    'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  coastal:    'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  collegiate: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  garden:     'bg-green-600/10 text-green-700 dark:text-green-400',
  oldmoney:   'bg-amber-600/10 text-amber-700 dark:text-amber-500',
  coquette:   'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  stargirl:   'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
}

const SAMPLE_TEXTS = [
  'preppy', 'slay', 'xoxo', 'bestie', 'your name', 'summer', 'coastal', 'coquette',
]

// ─── Component ────────────────────────────────────────────────────────────────

export function PreppyFontGeneratorTool() {
  const [input,     setInput]     = useState('')
  const [category,  setCategory]  = useState<Category>('all')
  const [copiedId,  setCopiedId]  = useState<string | null>(null)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [previewIdx,setPreviewIdx]= useState(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('preppy-fonts-favorites')
      if (saved) setFavorites(new Set(JSON.parse(saved)))
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (input) return
    const id = setInterval(() => setPreviewIdx(i => (i + 1) % PREPPY_STYLES.length), 2000)
    return () => clearInterval(id)
  }, [input])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      try { localStorage.setItem('preppy-fonts-favorites', JSON.stringify([...next])) } catch { /* ignore */ }
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
    CATEGORIES.slice(1).map(cat => [cat.id, PREPPY_STYLES.filter(s => s.category === cat.id).length])
  )

  const filtered = category === 'all'
    ? PREPPY_STYLES
    : PREPPY_STYLES.filter(s => s.category === category)

  const popularStyles   = PREPPY_STYLES.filter(s => s.popular)
  const favoritedStyles = PREPPY_STYLES.filter(s => favorites.has(s.id))

  const copyAll = () => {
    const all = filtered.map(s => `【${s.name}】\n${s.transform(input || 'preppy')}`).join('\n\n')
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
          placeholder="Type your name, a caption, a vibe…"
          className="min-h-24 text-base resize-none"
          autoFocus
        />
        <div className="flex flex-wrap gap-1.5">
          {SAMPLE_TEXTS.map(s => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="text-xs px-2.5 py-1 rounded-full border hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
        {hasInput && (
          <div className="flex gap-2">
            <Button onClick={copyAll} size="sm" className="flex-1">
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              Copy All ({filtered.length})
            </Button>
            <Button onClick={() => setInput('')} size="sm" variant="outline">
              <X className="w-3.5 h-3.5" />
            </Button>
          </div>
        )}
      </div>

      {/* Category filter */}
      <div className="flex gap-1.5 flex-wrap">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors border flex items-center gap-1 ${
              category === cat.id
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <span>{cat.emoji}</span>
            {cat.label}
            {cat.id !== 'all' && (
              <span className="ml-0.5 opacity-60">{categoryCounts[cat.id]}</span>
            )}
          </button>
        ))}
      </div>

      {/* Animated empty state */}
      {!hasInput && (
        <div className="py-10 text-center space-y-3">
          <div className="text-3xl font-bold tracking-wide transition-all duration-500 min-h-10">
            {PREPPY_STYLES[previewIdx].transform('preppy font')}
          </div>
          <p className="text-xs text-muted-foreground">
            {PREPPY_STYLES[previewIdx].name} — type above to generate
          </p>
          <div className="flex justify-center gap-1 pt-1 flex-wrap max-w-xs mx-auto">
            {PREPPY_STYLES.map((_, i) => (
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
                  <PrepCard
                    key={style.id + '-fav'}
                    style={style}
                    output={style.transform(input)}
                    isCopied={copiedId === style.id + '-fav'}
                    isFavorite
                    onCopy={() => copy(style.transform(input), style.id + '-fav', style.name)}
                    onFavorite={() => toggleFavorite(style.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {category === 'all' && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">🎀 Most Popular</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {popularStyles.map(style => (
                  <PrepCard
                    key={style.id + '-pop'}
                    style={style}
                    output={style.transform(input)}
                    isCopied={copiedId === style.id + '-pop'}
                    isFavorite={favorites.has(style.id)}
                    onCopy={() => copy(style.transform(input), style.id + '-pop', style.name)}
                    onFavorite={() => toggleFavorite(style.id)}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            {category === 'all' && (
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                All {PREPPY_STYLES.length} Preppy Styles
              </p>
            )}
            <div className="grid sm:grid-cols-2 gap-2">
              {filtered.map(style => (
                <PrepCard
                  key={style.id}
                  style={style}
                  output={style.transform(input)}
                  isCopied={copiedId === style.id}
                  isFavorite={favorites.has(style.id)}
                  onCopy={() => copy(style.transform(input), style.id, style.name)}
                  onFavorite={() => toggleFavorite(style.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PrepCard({
  style, output, isCopied, isFavorite, onCopy, onFavorite,
}: {
  style: PrepStyle; output: string; isCopied: boolean; isFavorite: boolean
  onCopy: () => void; onFavorite: () => void
}) {
  return (
    <div className="group p-3.5 rounded-xl border bg-card hover:border-primary/40 transition-all hover:shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-xs font-semibold truncate">{style.name}</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${CATEGORY_COLORS[style.category]}`}>
            {{ oldmoney: 'old money', collegiate: 'collegiate', stargirl: 'star girl', coquette: 'coquette', classic: 'classic', coastal: 'coastal', garden: 'garden' }[style.category]}
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onFavorite}
            className={`p-1 rounded-md transition-colors ${isFavorite ? 'text-rose-500' : 'text-muted-foreground/40 hover:text-rose-400 opacity-0 group-hover:opacity-100'}`}
            title={isFavorite ? 'Remove from favorites' : 'Save as favorite'}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500' : ''}`} />
          </button>
          <Button onClick={onCopy} size="sm" variant={isCopied ? 'default' : 'outline'} className="h-6 px-2 text-[11px]">
            {isCopied ? <><Check className="w-3 h-3 mr-0.5" />Copied</> : <><Copy className="w-3 h-3 mr-0.5" />Copy</>}
          </Button>
        </div>
      </div>
      <div
        className="text-lg leading-relaxed break-all cursor-text select-all py-1"
        onClick={onCopy}
        title={style.description}
      >
        {output}
      </div>
    </div>
  )
}
