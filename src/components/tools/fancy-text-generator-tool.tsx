'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, Check, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

type Category = 'all' | 'bold' | 'script' | 'symbols' | 'emoji' | 'transform'

interface Style {
  name: string
  id: string
  category: Exclude<Category, 'all'>
  description: string
  popular?: boolean
  transform: (text: string) => string
}

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all',       label: 'All Styles' },
  { id: 'bold',      label: 'Bold & Italic' },
  { id: 'script',    label: 'Script' },
  { id: 'symbols',   label: 'Symbols' },
  { id: 'emoji',     label: '✨ Emoji' },
  { id: 'transform', label: 'Transform' },
]

const CATEGORY_COLORS: Record<Exclude<Category, 'all'>, string> = {
  bold:      'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  script:    'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  symbols:   'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  emoji:     'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  transform: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
}

const SAMPLE_TEXTS = ['Hello World', 'Your Name', 'Happy Birthday 🎂', 'Good Vibes ✨', 'Follow Me', 'I Love You']

// helper – join word-by-word with an emoji between each letter
const emojiJoin = (text: string, sep: string) =>
  text.split(' ').map(w => w.split('').join(sep)).join(' ')

const fancyStyles: Style[] = [
  // ── Bold & Italic ──────────────────────────────────────────────────────────
  {
    name: 'Serif Bold', id: 'serif-bold', category: 'bold', popular: true,
    description: 'Classic bold serif characters',
    transform: t => t.split('').map(c => ({
      a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',
      n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',
      A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',
      N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙',
      '0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗',
    }[c] ?? c)).join('')
  },
  {
    name: 'Serif Bold Italic', id: 'serif-bold-italic', category: 'bold',
    description: 'Bold italic serif characters',
    transform: t => t.split('').map(c => ({
      a:'𝒂',b:'𝒃',c:'𝒄',d:'𝒅',e:'𝒆',f:'𝒇',g:'𝒈',h:'𝒉',i:'𝒊',j:'𝒋',k:'𝒌',l:'𝒍',m:'𝒎',
      n:'𝒏',o:'𝒐',p:'𝒑',q:'𝒒',r:'𝒓',s:'𝒔',t:'𝒕',u:'𝒖',v:'𝒗',w:'𝒘',x:'𝒙',y:'𝒚',z:'𝒛',
      A:'𝑨',B:'𝑩',C:'𝑪',D:'𝑫',E:'𝑬',F:'𝑭',G:'𝑮',H:'𝑯',I:'𝑰',J:'𝑱',K:'𝑲',L:'𝑳',M:'𝑴',
      N:'𝑵',O:'𝑶',P:'𝑷',Q:'𝑸',R:'𝑹',S:'𝑺',T:'𝑻',U:'𝑼',V:'𝑽',W:'𝑾',X:'𝑿',Y:'𝒀',Z:'𝒁',
    }[c] ?? c)).join('')
  },
  {
    name: 'Sans Bold', id: 'sans-bold', category: 'bold', popular: true,
    description: 'Bold sans-serif characters',
    transform: t => t.split('').map(c => ({
      a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',
      n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',
      A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',K:'𝗞',L:'𝗟',M:'𝗠',
      N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭',
      '0':'𝟬','1':'𝟭','2':'𝟮','3':'𝟯','4':'𝟰','5':'𝟱','6':'𝟲','7':'𝟳','8':'𝟴','9':'𝟵',
    }[c] ?? c)).join('')
  },
  {
    name: 'Sans Bold Italic', id: 'sans-bold-italic', category: 'bold',
    description: 'Bold italic sans-serif characters',
    transform: t => t.split('').map(c => ({
      a:'𝙖',b:'𝙗',c:'𝙘',d:'𝙙',e:'𝙚',f:'𝙛',g:'𝙜',h:'𝙝',i:'𝙞',j:'𝙟',k:'𝙠',l:'𝙡',m:'𝙢',
      n:'𝙣',o:'𝙤',p:'𝙥',q:'𝙦',r:'𝙧',s:'𝙨',t:'𝙩',u:'𝙪',v:'𝙫',w:'𝙬',x:'𝙭',y:'𝙮',z:'𝙯',
      A:'𝘼',B:'𝘽',C:'𝘾',D:'𝘿',E:'𝙀',F:'𝙁',G:'𝙂',H:'𝙃',I:'𝙄',J:'𝙅',K:'𝙆',L:'𝙇',M:'𝙈',
      N:'𝙉',O:'𝙊',P:'𝙋',Q:'𝙌',R:'𝙍',S:'𝙎',T:'𝙏',U:'𝙐',V:'𝙑',W:'𝙒',X:'𝙓',Y:'𝙔',Z:'𝙕',
    }[c] ?? c)).join('')
  },
  {
    name: 'Serif Italic', id: 'serif-italic', category: 'bold',
    description: 'Elegant serif italic characters',
    transform: t => t.split('').map(c => ({
      a:'𝑎',b:'𝑏',c:'𝑐',d:'𝑑',e:'𝑒',f:'𝑓',g:'𝑔',h:'ℎ',i:'𝑖',j:'𝑗',k:'𝑘',l:'𝑙',m:'𝑚',
      n:'𝑛',o:'𝑜',p:'𝑝',q:'𝑞',r:'𝑟',s:'𝑠',t:'𝑡',u:'𝑢',v:'𝑣',w:'𝑤',x:'𝑥',y:'𝑦',z:'𝑧',
      A:'𝐴',B:'𝐵',C:'𝐶',D:'𝐷',E:'𝐸',F:'𝐹',G:'𝐺',H:'𝐻',I:'𝐼',J:'𝐽',K:'𝐾',L:'𝐿',M:'𝑀',
      N:'𝑁',O:'𝑂',P:'𝑃',Q:'𝑄',R:'𝑅',S:'𝑆',T:'𝑇',U:'𝑈',V:'𝑉',W:'𝑊',X:'𝑋',Y:'𝑌',Z:'𝑍',
    }[c] ?? c)).join('')
  },
  {
    name: 'Sans Italic', id: 'sans-italic', category: 'bold',
    description: 'Clean sans-serif italic characters',
    transform: t => t.split('').map(c => ({
      a:'𝘢',b:'𝘣',c:'𝘤',d:'𝘥',e:'𝘦',f:'𝘧',g:'𝘨',h:'𝘩',i:'𝘪',j:'𝘫',k:'𝘬',l:'𝘭',m:'𝘮',
      n:'𝘯',o:'𝘰',p:'𝘱',q:'𝘲',r:'𝘳',s:'𝘴',t:'𝘵',u:'𝘶',v:'𝘷',w:'𝘸',x:'𝘹',y:'𝘺',z:'𝘻',
      A:'𝘈',B:'𝘉',C:'𝘊',D:'𝘋',E:'𝘌',F:'𝘍',G:'𝘎',H:'𝘏',I:'𝘐',J:'𝘑',K:'𝘒',L:'𝘓',M:'𝘔',
      N:'𝘕',O:'𝘖',P:'𝘗',Q:'𝘘',R:'𝘙',S:'𝘚',T:'𝘛',U:'𝘜',V:'𝘝',W:'𝘞',X:'𝘟',Y:'𝘠',Z:'𝘡',
    }[c] ?? c)).join('')
  },
  // ── Script & Gothic ────────────────────────────────────────────────────────
  {
    name: 'Script', id: 'script', category: 'script', popular: true,
    description: 'Elegant mathematical script',
    transform: t => t.split('').map(c => ({
      a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',k:'𝓀',l:'𝓁',m:'𝓂',
      n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',
      A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',K:'𝒦',L:'ℒ',M:'ℳ',
      N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
      '-':'‐',',':',','.':'.',
    }[c] ?? c)).join('')
  },
  {
    name: 'Bold Script', id: 'bold-script', category: 'script', popular: true,
    description: 'Bold cursive script',
    transform: t => t.split('').map(c => ({
      a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',
      n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
      A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',
      N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
    }[c] ?? c)).join('')
  },
  {
    name: 'Fraktur', id: 'fraktur', category: 'script',
    description: 'Gothic blackletter style',
    transform: t => t.split('').map(c => ({
      a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',
      n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
      A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',
      N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
    }[c] ?? c)).join('')
  },
  {
    name: 'Bold Fraktur', id: 'bold-fraktur', category: 'script',
    description: 'Bold gothic blackletter',
    transform: t => t.split('').map(c => ({
      a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',k:'𝖐',l:'𝖑',m:'𝖒',
      n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟',
      A:'𝕬',B:'𝕭',C:'𝕮',D:'𝕯',E:'𝕰',F:'𝕱',G:'𝕲',H:'𝕳',I:'𝕴',J:'𝕵',K:'𝕶',L:'𝕷',M:'𝕸',
      N:'𝕹',O:'𝕺',P:'𝕻',Q:'𝕼',R:'𝕽',S:'𝕾',T:'𝕿',U:'𝖀',V:'𝖁',W:'𝖂',X:'𝖃',Y:'𝖄',Z:'𝖅',
    }[c] ?? c)).join('')
  },
  // ── Symbols ────────────────────────────────────────────────────────────────
  {
    name: 'Double-Struck', id: 'double-struck', category: 'symbols', popular: true,
    description: 'Blackboard bold style',
    transform: t => t.split('').map(c => ({
      a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',
      n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
      A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',
      N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
      '0':'𝟘','1':'𝟙','2':'𝟚','3':'𝟛','4':'𝟜','5':'𝟝','6':'𝟞','7':'𝟟','8':'𝟠','9':'𝟡',
    }[c] ?? c)).join('')
  },
  {
    name: 'Circled', id: 'circled', category: 'symbols', popular: true,
    description: 'Characters in circles',
    transform: t => t.split('').map(c => ({
      a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',
      n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',
      A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',
      N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ',
      '0':'⓪','1':'①','2':'②','3':'③','4':'④','5':'⑤','6':'⑥','7':'⑦','8':'⑧','9':'⑨',
    }[c] ?? c)).join('')
  },
  {
    name: 'Squared', id: 'squared', category: 'symbols',
    description: 'Characters in square boxes',
    transform: t => t.split('').map(c => ({
      a:'🄰',b:'🄱',c:'🄲',d:'🄳',e:'🄴',f:'🄵',g:'🄶',h:'🄷',i:'🄸',j:'🄹',k:'🄺',l:'🄻',m:'🄼',
      n:'🄽',o:'🄾',p:'🄿',q:'🅀',r:'🅁',s:'🅂',t:'🅃',u:'🅄',v:'🅅',w:'🅆',x:'🅇',y:'🅈',z:'🅉',
      A:'🄰',B:'🄱',C:'🄲',D:'🄳',E:'🄴',F:'🄵',G:'🄶',H:'🄷',I:'🄸',J:'🄹',K:'🄺',L:'🄻',M:'🄼',
      N:'🄽',O:'🄾',P:'🄿',Q:'🅀',R:'🅁',S:'🅂',T:'🅃',U:'🅄',V:'🅅',W:'🅆',X:'🅇',Y:'🅈',Z:'🅉',
    }[c] ?? c)).join('')
  },
  {
    name: 'Negative Circled', id: 'neg-circled', category: 'symbols',
    description: 'Filled dark circles with letters',
    transform: t => t.split('').map(c => ({
      a:'🅐',b:'🅑',c:'🅒',d:'🅓',e:'🅔',f:'🅕',g:'🅖',h:'🅗',i:'🅘',j:'🅙',k:'🅚',l:'🅛',m:'🅜',
      n:'🅝',o:'🅞',p:'🅟',q:'🅠',r:'🅡',s:'🅢',t:'🅣',u:'🅤',v:'🅥',w:'🅦',x:'🅧',y:'🅨',z:'🅩',
      A:'🅐',B:'🅑',C:'🅒',D:'🅓',E:'🅔',F:'🅕',G:'🅖',H:'🅗',I:'🅘',J:'🅙',K:'🅚',L:'🅛',M:'🅜',
      N:'🅝',O:'🅞',P:'🅟',Q:'🅠',R:'🅡',S:'🅢',T:'🅣',U:'🅤',V:'🅥',W:'🅦',X:'🅧',Y:'🅨',Z:'🅩',
    }[c] ?? c)).join('')
  },
  {
    name: 'Fullwidth', id: 'fullwidth', category: 'symbols',
    description: 'Wide aesthetic characters — works great with -, , and punctuation',
    transform: t => t.split('').map(c => {
      const code = c.charCodeAt(0)
      if (code >= 33 && code <= 126) return String.fromCharCode(code + 0xFEE0)
      if (c === ' ') return '\u3000'
      return c
    }).join('')
  },
  {
    name: 'Japanese Brackets', id: 'jp-brackets', category: 'symbols',
    description: 'Elegant East Asian style framing',
    transform: t => `『${t}』`
  },
  {
    name: 'Fancy Quotes', id: 'fancy-quotes', category: 'symbols',
    description: 'Decorative curly quote marks',
    transform: t => `❝${t}❞`
  },
  {
    name: 'Double Bracket', id: 'double-bracket', category: 'symbols',
    description: 'Bold double-bracket framing',
    transform: t => `【${t}】`
  },
  {
    name: 'Angle Brackets', id: 'angle-brackets', category: 'symbols',
    description: 'Book-style angle bracket framing',
    transform: t => `《${t}》`
  },
  {
    name: 'Star Frame', id: 'star-frame', category: 'symbols',
    description: 'Four-pointed star border',
    transform: t => `✦ ${t} ✦`
  },
  {
    name: 'Ornament Frame', id: 'ornament-frame', category: 'symbols',
    description: 'Floral ornament border',
    transform: t => `✿ ${t} ✿`
  },
  // ── Emoji Styles ───────────────────────────────────────────────────────────
  {
    name: 'Sparkle Between', id: 'sparkle-between', category: 'emoji', popular: true,
    description: '✨ between every letter',
    transform: t => emojiJoin(t, '✨')
  },
  {
    name: 'Star Between', id: 'star-between', category: 'emoji',
    description: '⭐ between every letter',
    transform: t => emojiJoin(t, '⭐')
  },
  {
    name: 'Flower Between', id: 'flower-between', category: 'emoji',
    description: '🌸 between every letter',
    transform: t => emojiJoin(t, '🌸')
  },
  {
    name: 'Diamond Between', id: 'diamond-between', category: 'emoji',
    description: '💎 between every letter',
    transform: t => emojiJoin(t, '💎')
  },
  {
    name: 'Heart Wrap', id: 'heart-wrap', category: 'emoji', popular: true,
    description: 'Heart emoji border',
    transform: t => `💕 ${t} 💕`
  },
  {
    name: 'Fire Wrap', id: 'fire-wrap', category: 'emoji',
    description: 'Fire emoji border',
    transform: t => `🔥 ${t} 🔥`
  },
  {
    name: 'Crown Wrap', id: 'crown-wrap', category: 'emoji',
    description: 'Crown emoji border',
    transform: t => `👑 ${t} 👑`
  },
  {
    name: 'Galaxy Wrap', id: 'galaxy-wrap', category: 'emoji',
    description: 'Star galaxy emoji border',
    transform: t => `🌟 ${t} 🌟`
  },
  {
    name: 'Rainbow Wrap', id: 'rainbow-wrap', category: 'emoji',
    description: 'Rainbow emoji border',
    transform: t => `🌈 ${t} 🌈`
  },
  {
    name: 'Music Wrap', id: 'music-wrap', category: 'emoji',
    description: 'Music note emoji border',
    transform: t => `🎵 ${t} 🎵`
  },
  {
    name: 'Butterfly Wrap', id: 'butterfly-wrap', category: 'emoji',
    description: 'Butterfly emoji border',
    transform: t => `🦋 ${t} 🦋`
  },
  {
    name: 'Flower Wrap', id: 'flower-wrap', category: 'emoji',
    description: 'Cherry blossom border',
    transform: t => `🌸 ${t} 🌸`
  },
  {
    name: 'Magic Wrap', id: 'magic-wrap', category: 'emoji',
    description: 'Sparkles & stars combo',
    transform: t => `✨🌟 ${t} 🌟✨`
  },
  {
    name: 'Love Sandwich', id: 'love-sandwich', category: 'emoji',
    description: 'Double heart wrap',
    transform: t => `💖 ${t} 💖`
  },
  // ── Transform ──────────────────────────────────────────────────────────────
  {
    name: 'Small Caps', id: 'small-caps', category: 'transform', popular: true,
    description: 'Uppercase letters in small size',
    transform: t => t.split('').map(c => ({
      a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',
      n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'ꜱ',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
      A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',
      N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'ꜱ',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ',
    }[c] ?? c)).join('')
  },
  {
    name: 'Superscript', id: 'superscript', category: 'transform',
    description: 'Tiny raised characters',
    transform: t => t.split('').map(c => ({
      a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',
      n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'ᑫ',r:'ʳ',s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ',
      A:'ᴬ',B:'ᴮ',C:'ᶜ',D:'ᴰ',E:'ᴱ',F:'ᶠ',G:'ᴳ',H:'ᴴ',I:'ᴵ',J:'ᴶ',K:'ᴷ',L:'ᴸ',M:'ᴹ',
      N:'ᴺ',O:'ᴼ',P:'ᴾ',Q:'Q',R:'ᴿ',S:'ˢ',T:'ᵀ',U:'ᵁ',V:'ᵛ',W:'ᵂ',X:'ˣ',Y:'ʸ',Z:'ᶻ',
      '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹',
      '-':'⁻','+':'⁺','=':'⁼','(':'⁽',')':'⁾',
    }[c] ?? c)).join('')
  },
  {
    name: 'Monospace', id: 'monospace', category: 'transform',
    description: 'Typewriter monospace style',
    transform: t => t.split('').map(c => ({
      a:'𝚊',b:'𝚋',c:'𝚌',d:'𝚍',e:'𝚎',f:'𝚏',g:'𝚐',h:'𝚑',i:'𝚒',j:'𝚓',k:'𝚔',l:'𝚕',m:'𝚖',
      n:'𝚗',o:'𝚘',p:'𝚙',q:'𝚚',r:'𝚛',s:'𝚜',t:'𝚝',u:'𝚞',v:'𝚟',w:'𝚠',x:'𝚡',y:'𝚢',z:'𝚣',
      A:'𝙰',B:'𝙱',C:'𝙲',D:'𝙳',E:'𝙴',F:'𝙵',G:'𝙶',H:'𝙷',I:'𝙸',J:'𝙹',K:'𝙺',L:'𝙻',M:'𝙼',
      N:'𝙽',O:'𝙾',P:'𝙿',Q:'𝚀',R:'𝚁',S:'𝚂',T:'𝚃',U:'𝚄',V:'𝚅',W:'𝚆',X:'𝚇',Y:'𝚈',Z:'𝚉',
      '0':'𝟶','1':'𝟷','2':'𝟸','3':'𝟹','4':'𝟺','5':'𝟻','6':'𝟼','7':'𝟽','8':'𝟾','9':'𝟿',
      '-':'－',',':'，','.':'．','!':'！','?':'？','(':'（',')':'）',':':'：',';':'；',
    }[c] ?? c)).join('')
  },
  {
    name: 'Upside Down', id: 'upside-down', category: 'transform',
    description: 'Flipped upside down text',
    transform: t => t.split('').reverse().map(c => ({
      a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',k:'ʞ',l:'l',m:'ɯ',
      n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',
      A:'∀',B:'ᗺ',C:'Ↄ',D:'ᗡ',E:'Ǝ',F:'Ⅎ',G:'⅁',H:'H',I:'I',J:'ſ',K:'ꓘ',L:'˥',M:'W',
      N:'N',O:'O',P:'Ԁ',Q:'Ò',R:'ᴚ',S:'S',T:'┴',U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',
      '1':'Ɩ','2':'ᄅ','3':'Ɛ','4':'ᔭ','5':'ϛ','6':'9','7':'L','8':'8','9':'6','0':'0',
      '.':'˙',',':'\'','?':'¿','!':'¡','(':')',')':'(','{':'}','}':'{','[':']',']':'[','-':'‐',
    }[c] ?? c)).join('')
  },
  {
    name: 'Mirror', id: 'mirror', category: 'transform',
    description: 'Text reversed left-to-right',
    transform: t => t.split('').reverse().join('')
  },
  {
    name: 'Alternating Case', id: 'alt-case', category: 'transform',
    description: 'aLtErNaTiNg CaSe StYlE',
    transform: t => {
      let upper = false
      return t.split('').map(c => {
        if (!/[a-zA-Z]/.test(c)) return c
        const out = upper ? c.toUpperCase() : c.toLowerCase()
        upper = !upper
        return out
      }).join('')
    }
  },
  {
    name: 'Strikethrough', id: 'strikethrough', category: 'transform',
    description: 'Line through every character',
    transform: t => t.split('').map(c => c === ' ' ? ' ' : c + '\u0336').join('')
  },
  {
    name: 'Underline', id: 'underline', category: 'transform',
    description: 'Underlined characters',
    transform: t => t.split('').map(c => c === ' ' ? ' ' : c + '\u0332').join('')
  },
  {
    name: 'Double Underline', id: 'double-underline', category: 'transform',
    description: 'Double underlined characters',
    transform: t => t.split('').map(c => c === ' ' ? ' ' : c + '\u0333').join('')
  },
  {
    name: 'Overline', id: 'overline', category: 'transform',
    description: 'Line above every character',
    transform: t => t.split('').map(c => c === ' ' ? ' ' : c + '\u0305').join('')
  },
  {
    name: 'Bullet Separator', id: 'bullet-sep', category: 'transform',
    description: 'Middle dot between letters',
    transform: t => emojiJoin(t, '·')
  },
  {
    name: 'Dash Separator', id: 'dash-sep', category: 'transform',
    description: 'En-dash between letters, great for usernames',
    transform: t => emojiJoin(t, '–')
  },
  {
    name: 'Spaced Out', id: 'spaced', category: 'transform',
    description: 'Extra space between every character',
    transform: t => t.split('').join(' ')
  },
  {
    name: 'Sans Regular', id: 'sans-regular', category: 'transform',
    description: 'Clean geometric sans-serif',
    transform: t => t.split('').map(c => ({
      a:'𝖺',b:'𝖻',c:'𝖼',d:'𝖽',e:'𝖾',f:'𝖿',g:'𝗀',h:'𝗁',i:'𝗂',j:'𝗃',k:'𝗄',l:'𝗅',m:'𝗆',
      n:'𝗇',o:'𝗈',p:'𝗉',q:'𝗊',r:'𝗋',s:'𝗌',t:'𝗍',u:'𝗎',v:'𝗏',w:'𝗐',x:'𝗑',y:'𝗒',z:'𝗓',
      A:'𝖠',B:'𝖡',C:'𝖢',D:'𝖣',E:'𝖤',F:'𝖥',G:'𝖦',H:'𝖧',I:'𝖨',J:'𝖩',K:'𝖪',L:'𝖫',M:'𝖬',
      N:'𝖭',O:'𝖮',P:'𝖯',Q:'𝖰',R:'𝖱',S:'𝖲',T:'𝖳',U:'𝖴',V:'𝖵',W:'𝖶',X:'𝖷',Y:'𝖸',Z:'𝖹',
    }[c] ?? c)).join('')
  },
]

export function FancyTextGeneratorTool() {
  const [input, setInput] = useState('')
  const [category, setCategory] = useState<Category>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [previewIdx, setPreviewIdx] = useState(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fancy-text-favorites')
      if (saved) setFavorites(new Set(JSON.parse(saved)))
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (input) return
    const id = setInterval(() => setPreviewIdx(i => (i + 1) % fancyStyles.length), 2000)
    return () => clearInterval(id)
  }, [input])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      try { localStorage.setItem('fancy-text-favorites', JSON.stringify([...next])) } catch { /* ignore */ }
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
    CATEGORIES.slice(1).map(cat => [cat.id, fancyStyles.filter(s => s.category === cat.id).length])
  )

  const filtered = category === 'all'
    ? fancyStyles
    : fancyStyles.filter(s => s.category === category)

  const popularStyles = fancyStyles.filter(s => s.popular)
  const favoritedStyles = fancyStyles.filter(s => favorites.has(s.id))

  const copyAll = () => {
    const all = filtered.map(s => `【${s.name}】\n${s.transform(input)}`).join('\n\n')
    navigator.clipboard.writeText(all)
    toast({ title: 'All styles copied!' })
  }

  const charCount = input.length
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0
  const hasInput = input.trim().length > 0

  return (
    <div className="space-y-5">
      {/* ── Input ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold">Your Text</label>
          <span className="text-xs text-muted-foreground">{charCount} chars · {wordCount} words</span>
        </div>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Type anything — letters, numbers, -, , and emoji all work...`}
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

      {/* ── Category filter ── */}
      <div className="flex gap-1.5 flex-wrap">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors border ${
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

      {/* ── Empty state ── */}
      {!hasInput && (
        <div className="py-10 text-center space-y-3">
          <div className="text-3xl font-bold tracking-wide transition-all duration-500 min-h-10">
            {fancyStyles[previewIdx].transform('Fancy Text')}
          </div>
          <p className="text-xs text-muted-foreground">
            {fancyStyles[previewIdx].name} — type above to generate
          </p>
          <div className="flex justify-center gap-1 pt-1 flex-wrap max-w-xs mx-auto">
            {fancyStyles.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-colors ${i === previewIdx ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
            ))}
          </div>
        </div>
      )}

      {/* ── Results ── */}
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
                All {fancyStyles.length} Styles
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
  style: Style; output: string; isCopied: boolean; isFavorite: boolean
  onCopy: () => void; onFavorite: () => void
}) {
  return (
    <div className="group p-3.5 rounded-xl border bg-card hover:border-primary/40 transition-all hover:shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-xs font-semibold truncate">{style.name}</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${CATEGORY_COLORS[style.category]}`}>
            {style.category}
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
        title="Click to copy"
      >
        {output}
      </div>
    </div>
  )
}
