'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, Check, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'all' | 'soft' | 'darkacademia' | 'vaporwave' | 'cottagecore' | 'minimalist' | 'lovely'

interface AStyle {
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

// ─── Shared character maps ────────────────────────────────────────────────────

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

const FRAKTUR: Record<string, string> = {
  a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',
  n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
  A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',
  N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
}

const BOLD_FRAKTUR: Record<string, string> = {
  a:'𝖆',b:'𝖇',c:'𝖈',d:'𝖉',e:'𝖊',f:'𝖋',g:'𝖌',h:'𝖍',i:'𝖎',j:'𝖏',k:'𝖐',l:'𝖑',m:'𝖒',
  n:'𝖓',o:'𝖔',p:'𝖕',q:'𝖖',r:'𝖗',s:'𝖘',t:'𝖙',u:'𝖚',v:'𝖛',w:'𝖜',x:'𝖝',y:'𝖞',z:'𝖟',
  A:'𝕬',B:'𝕭',C:'𝕮',D:'𝕯',E:'𝕰',F:'𝕱',G:'𝕲',H:'𝕳',I:'𝕴',J:'𝕵',K:'𝕶',L:'𝕷',M:'𝕸',
  N:'𝕹',O:'𝕺',P:'𝕻',Q:'𝕼',R:'𝕽',S:'𝕾',T:'𝕿',U:'𝖀',V:'𝖁',W:'𝖂',X:'𝖃',Y:'𝖄',Z:'𝖅',
}

const DOUBLE_STRUCK: Record<string, string> = {
  a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',
  n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
  A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',
  N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
}

const SMALL_CAPS: Record<string, string> = {
  a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',
  n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'ꜱ',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
  A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ғ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',
  N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'ꜱ',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ',
}

const CIRCLED: Record<string, string> = {
  a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',
  n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',
  A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',
  N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ',
}

const SUPERSCRIPT: Record<string, string> = {
  a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',
  n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'ᑫ',r:'ʳ',s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ',
  A:'ᴬ',B:'ᴮ',C:'ᶜ',D:'ᴰ',E:'ᴱ',F:'ᶠ',G:'ᴳ',H:'ᴴ',I:'ᴵ',J:'ᴶ',K:'ᴷ',L:'ᴸ',M:'ᴹ',
  N:'ᴺ',O:'ᴼ',P:'ᴾ',Q:'Q',R:'ᴿ',S:'ˢ',T:'ᵀ',U:'ᵁ',V:'ᵛ',W:'ᵂ',X:'ˣ',Y:'ʸ',Z:'ᶻ',
}

const SERIF_ITALIC: Record<string, string> = {
  a:'𝑎',b:'𝑏',c:'𝑐',d:'𝑑',e:'𝑒',f:'𝑓',g:'𝑔',h:'ℎ',i:'𝑖',j:'𝑗',k:'𝑘',l:'𝑙',m:'𝑚',
  n:'𝑛',o:'𝑜',p:'𝑝',q:'𝑞',r:'𝑟',s:'𝑠',t:'𝑡',u:'𝑢',v:'𝑣',w:'𝑤',x:'𝑥',y:'𝑦',z:'𝑧',
  A:'𝐴',B:'𝐵',C:'𝐶',D:'𝐷',E:'𝐸',F:'𝐹',G:'𝐺',H:'𝐻',I:'𝐼',J:'𝐽',K:'𝐾',L:'𝐿',M:'𝑀',
  N:'𝑁',O:'𝑂',P:'𝑃',Q:'𝑄',R:'𝑅',S:'𝑆',T:'𝑇',U:'𝑈',V:'𝑉',W:'𝑊',X:'𝑋',Y:'𝑌',Z:'𝑍',
}

const SANS_ITALIC: Record<string, string> = {
  a:'𝘢',b:'𝘣',c:'𝘤',d:'𝘥',e:'𝘦',f:'𝘧',g:'𝘨',h:'𝘩',i:'𝘪',j:'𝘫',k:'𝘬',l:'𝘭',m:'𝘮',
  n:'𝘯',o:'𝘰',p:'𝘱',q:'𝘲',r:'𝘳',s:'𝘴',t:'𝘵',u:'𝘶',v:'𝘷',w:'𝘸',x:'𝘹',y:'𝘺',z:'𝘻',
  A:'𝘈',B:'𝘉',C:'𝘊',D:'𝘋',E:'𝘌',F:'𝘍',G:'𝘎',H:'𝘏',I:'𝘐',J:'𝘑',K:'𝘒',L:'𝘓',M:'𝘔',
  N:'𝘕',O:'𝘖',P:'𝘗',Q:'𝘘',R:'𝘙',S:'𝘚',T:'𝘛',U:'𝘜',V:'𝘝',W:'𝘞',X:'𝘟',Y:'𝘠',Z:'𝘡',
}

const MONOSPACE: Record<string, string> = {
  a:'𝚊',b:'𝚋',c:'𝚌',d:'𝚍',e:'𝚎',f:'𝚏',g:'𝚐',h:'𝚑',i:'𝚒',j:'𝚓',k:'𝚔',l:'𝚕',m:'𝚖',
  n:'𝚗',o:'𝚘',p:'𝚙',q:'𝚚',r:'𝚛',s:'𝚜',t:'𝚝',u:'𝚞',v:'𝚟',w:'𝚠',x:'𝚡',y:'𝚢',z:'𝚣',
  A:'𝙰',B:'𝙱',C:'𝙲',D:'𝙳',E:'𝙴',F:'𝙵',G:'𝙶',H:'𝙷',I:'𝙸',J:'𝙹',K:'𝙺',L:'𝙻',M:'𝙼',
  N:'𝙽',O:'𝙾',P:'𝙿',Q:'𝚀',R:'𝚁',S:'𝚂',T:'𝚃',U:'𝚄',V:'𝚅',W:'𝚆',X:'𝚇',Y:'𝚈',Z:'𝚉',
}

const fullwidth = (t: string) =>
  t.split('').map(c => {
    const code = c.charCodeAt(0)
    if (code >= 33 && code <= 126) return String.fromCharCode(code + 0xFEE0)
    if (c === ' ') return '\u3000'
    return c
  }).join('')

// ─── Aesthetic Styles ─────────────────────────────────────────────────────────

const AESTHETIC_STYLES: AStyle[] = [
  // ── Soft / Kawaii ──────────────────────────────────────────────────────────
  {
    name: 'Lovely Script', id: 'lovely-script', category: 'soft', popular: true,
    description: 'Soft bold cursive — the classic lovely font',
    transform: t => charMap(t, BOLD_SCRIPT),
  },
  {
    name: 'Soft Italic', id: 'soft-italic', category: 'soft', popular: true,
    description: 'Gentle serif italic for soft aesthetics',
    transform: t => charMap(t, SERIF_ITALIC),
  },
  {
    name: 'Bubble Soft', id: 'bubble-soft', category: 'soft', popular: true,
    description: 'Circled bubble letters — cute & playful',
    transform: t => charMap(t, CIRCLED),
  },
  {
    name: 'Tiny Cute', id: 'tiny-cute', category: 'soft',
    description: 'Tiny superscript letters — precious & delicate',
    transform: t => charMap(t, SUPERSCRIPT),
  },
  {
    name: 'Cherry Blossom', id: 'cherry-blossom', category: 'soft', popular: true,
    description: '🌸 between every letter — soft girl aesthetic',
    transform: t => between(t, '🌸'),
  },
  {
    name: 'Sparkle Soft', id: 'sparkle-soft', category: 'soft',
    description: '✨ between every letter — magical & dreamy',
    transform: t => between(t, '✨'),
  },
  {
    name: 'Heart Wrap', id: 'heart-wrap', category: 'soft', popular: true,
    description: '💕 heart border — lovely & sweet',
    transform: t => wrap(t, '💕 ', ' 💕'),
  },
  {
    name: 'Butterfly Wrap', id: 'butterfly-wrap', category: 'soft',
    description: '🦋 butterfly frame — ethereal & free',
    transform: t => wrap(t, '🦋 ', ' 🦋'),
  },
  {
    name: 'Pastel Star', id: 'pastel-star', category: 'soft',
    description: '⭐ star frame — kawaii shimmer',
    transform: t => wrap(t, '⭐ ', ' ⭐'),
  },
  {
    name: 'Cloud Dream', id: 'cloud-dream', category: 'soft',
    description: '☁️ cloud frame — soft & floaty',
    transform: t => wrap(t, '☁️ ', ' ☁️'),
  },
  {
    name: 'Petal Between', id: 'petal-between', category: 'soft',
    description: '✿ flower petal between letters',
    transform: t => between(t, '✿'),
  },
  {
    name: 'Moon & Stars', id: 'moon-stars', category: 'soft',
    description: '🌙✨ moon and stars border',
    transform: t => wrap(t, '🌙✨ ', ' ✨🌙'),
  },

  // ── Dark Academia ──────────────────────────────────────────────────────────
  {
    name: 'Gothic Fraktur', id: 'gothic-fraktur', category: 'darkacademia', popular: true,
    description: 'Classic blackletter — dark academia staple',
    transform: t => charMap(t, FRAKTUR),
  },
  {
    name: 'Bold Gothic', id: 'bold-gothic', category: 'darkacademia', popular: true,
    description: 'Bold blackletter — intense & scholarly',
    transform: t => charMap(t, BOLD_FRAKTUR),
  },
  {
    name: 'Old Script', id: 'old-script', category: 'darkacademia',
    description: 'Mathematical script — antique & literary',
    transform: t => charMap(t, SCRIPT),
  },
  {
    name: 'Double Struck', id: 'double-struck', category: 'darkacademia',
    description: 'Blackboard bold — intellectual & academic',
    transform: t => charMap(t, DOUBLE_STRUCK),
  },
  {
    name: 'Elegant Caps', id: 'elegant-caps', category: 'darkacademia', popular: true,
    description: 'Small caps — refined & classical',
    transform: t => charMap(t, SMALL_CAPS),
  },
  {
    name: 'Overlined Scholar', id: 'overlined', category: 'darkacademia',
    description: 'Overline accent — manuscript style',
    transform: t => t.split('').map(c => c === ' ' ? c : c + '\u0305').join(''),
  },
  {
    name: 'Crossed Out', id: 'crossed-out', category: 'darkacademia',
    description: 'Strikethrough — redacted & mysterious',
    transform: t => t.split('').map(c => c === ' ' ? c : c + '\u0336').join(''),
  },
  {
    name: 'Ink Underline', id: 'ink-underline', category: 'darkacademia',
    description: 'Underlined — annotated like a manuscript',
    transform: t => t.split('').map(c => c === ' ' ? c : c + '\u0332').join(''),
  },

  // ── Vaporwave / Y2K ───────────────────────────────────────────────────────
  {
    name: 'Vaporwave Wide', id: 'vaporwave-wide', category: 'vaporwave', popular: true,
    description: 'Fullwidth aesthetic — retro Y2K vaporwave',
    transform: fullwidth,
  },
  {
    name: 'Spaced Out', id: 'spaced-out', category: 'vaporwave', popular: true,
    description: 'Extra spaced letters — dreamy & lo-fi',
    transform: t => t.split('').join(' '),
  },
  {
    name: 'Retro Slant', id: 'retro-slant', category: 'vaporwave',
    description: 'Sans italic — smooth retro lean',
    transform: t => charMap(t, SANS_ITALIC),
  },
  {
    name: 'Neon Mono', id: 'neon-mono', category: 'vaporwave',
    description: 'Typewriter monospace — terminal & digital',
    transform: t => charMap(t, MONOSPACE),
  },
  {
    name: 'Bullet Aesthetic', id: 'bullet-aesthetic', category: 'vaporwave',
    description: '· dot separator — clean y2k style',
    transform: t => between(t, '·'),
  },
  {
    name: 'Dash Wave', id: 'dash-wave', category: 'vaporwave',
    description: '— en-dash separator — retro cool',
    transform: t => between(t, '–'),
  },
  {
    name: 'Sunglasses Wrap', id: 'sunglasses-wrap', category: 'vaporwave',
    description: '😎 y2k sunglasses frame — iconic',
    transform: t => wrap(t, '😎 ', ' 😎'),
  },
  {
    name: 'Glitter Wrap', id: 'glitter-wrap', category: 'vaporwave', popular: true,
    description: '💫 shimmer frame — glittery & pop',
    transform: t => wrap(t, '💫 ', ' 💫'),
  },

  // ── Cottagecore / Ethereal ────────────────────────────────────────────────
  {
    name: 'Flower Script', id: 'flower-script', category: 'cottagecore', popular: true,
    description: '🌿 floral script — cottagecore lovely font',
    transform: t => wrap(charMap(t, SCRIPT), '🌿 ', ' 🌿'),
  },
  {
    name: 'Rose Wrap', id: 'rose-wrap', category: 'cottagecore', popular: true,
    description: '🌹 rose frame — romantic & cottagecore',
    transform: t => wrap(t, '🌹 ', ' 🌹'),
  },
  {
    name: 'Herb Between', id: 'herb-between', category: 'cottagecore',
    description: '🌱 tiny herb between letters — earthy',
    transform: t => between(t, '🌱'),
  },
  {
    name: 'Mushroom Wrap', id: 'mushroom-wrap', category: 'cottagecore',
    description: '🍄 mushroom frame — whimsical forest',
    transform: t => wrap(t, '🍄 ', ' 🍄'),
  },
  {
    name: 'Honey Bee', id: 'honey-bee', category: 'cottagecore',
    description: '🍯🐝 honey & bee frame — sweet cottagecore',
    transform: t => wrap(t, '🍯🐝 ', ' 🐝🍯'),
  },
  {
    name: 'Lavender Dream', id: 'lavender-dream', category: 'cottagecore',
    description: '💜 lavender script — soft & fragrant',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '💜 ', ' 💜'),
  },
  {
    name: 'Sunflower Wrap', id: 'sunflower-wrap', category: 'cottagecore',
    description: '🌻 sunflower frame — warm & golden',
    transform: t => wrap(t, '🌻 ', ' 🌻'),
  },

  // ── Minimalist Aesthetic ──────────────────────────────────────────────────
  {
    name: 'Clean Small Caps', id: 'clean-small-caps', category: 'minimalist', popular: true,
    description: 'Small caps — minimal & sophisticated',
    transform: t => charMap(t, SMALL_CAPS),
  },
  {
    name: 'Lowercase Italic', id: 'lowercase-italic', category: 'minimalist', popular: true,
    description: 'Italic in lowercase — understated beauty',
    transform: t => charMap(t.toLowerCase(), SERIF_ITALIC),
  },
  {
    name: 'Airy Spaced', id: 'airy-spaced', category: 'minimalist',
    description: 'Double-spaced — light & breathing',
    transform: t => t.split('').join('  '),
  },
  {
    name: 'Angle Frame', id: 'angle-frame', category: 'minimalist',
    description: '《 》 angle brackets — editorial minimalism',
    transform: t => wrap(t, '《', '》'),
  },
  {
    name: 'Japanese Frame', id: 'japanese-frame', category: 'minimalist',
    description: '「 」 Japanese angle quotes',
    transform: t => wrap(t, '「', '」'),
  },
  {
    name: 'Dot Dot Dot', id: 'dot-dot', category: 'minimalist',
    description: '··· ellipsis frame — poetic & minimal',
    transform: t => wrap(t, '··· ', ' ···'),
  },
  {
    name: 'Em Dash Frame', id: 'em-dash', category: 'minimalist',
    description: '— em dash wrap — editorial style',
    transform: t => wrap(t, '— ', ' —'),
  },

  // ── Lovely / Romantic ────────────────────────────────────────────────────
  {
    name: 'Romantic Cursive', id: 'romantic-cursive', category: 'lovely', popular: true,
    description: '💗 bold script with hearts — the loveliest font',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '💗 ', ' 💗'),
  },
  {
    name: 'Love Letter', id: 'love-letter', category: 'lovely', popular: true,
    description: '💌 letter wrap with script — romantic vibes',
    transform: t => wrap(charMap(t, SCRIPT), '💌 ', ' 💌'),
  },
  {
    name: 'Petal Script', id: 'petal-script', category: 'lovely',
    description: '🌸 cherry blossom with bold script',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '🌸 ', ' 🌸'),
  },
  {
    name: 'Twin Hearts', id: 'twin-hearts', category: 'lovely', popular: true,
    description: '💖 double heart frame — sweet & tender',
    transform: t => wrap(t, '💖 ', ' 💖'),
  },
  {
    name: 'Stardust', id: 'stardust', category: 'lovely',
    description: '🌟 star frame with italic — dreamy romance',
    transform: t => wrap(charMap(t, SERIF_ITALIC), '🌟 ', ' 🌟'),
  },
  {
    name: 'Angel Script', id: 'angel-script', category: 'lovely',
    description: '👼 angel wrap — pure & celestial',
    transform: t => wrap(charMap(t, SCRIPT), '👼 ', ' 👼'),
  },
  {
    name: 'Rainbow Lovely', id: 'rainbow-lovely', category: 'lovely',
    description: '🌈 rainbow frame — joyful & vibrant',
    transform: t => wrap(t, '🌈 ', ' 🌈'),
  },
  {
    name: 'Rose Gold Script', id: 'rose-gold', category: 'lovely', popular: true,
    description: '🌹 rose script — elegant & passionate',
    transform: t => wrap(charMap(t, BOLD_SCRIPT), '🌹 ', ' 🌹'),
  },
]

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: 'all',          label: 'All',          emoji: '✨' },
  { id: 'soft',         label: 'Soft / Kawaii', emoji: '🌸' },
  { id: 'darkacademia', label: 'Dark Academia', emoji: '📚' },
  { id: 'vaporwave',    label: 'Vaporwave',     emoji: '🌊' },
  { id: 'cottagecore',  label: 'Cottagecore',   emoji: '🍄' },
  { id: 'minimalist',   label: 'Minimalist',    emoji: '🤍' },
  { id: 'lovely',       label: 'Lovely',        emoji: '💗' },
]

const CATEGORY_COLORS: Record<Exclude<Category, 'all'>, string> = {
  soft:         'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  darkacademia: 'bg-amber-800/10 text-amber-800 dark:text-amber-400',
  vaporwave:    'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  cottagecore:  'bg-green-600/10 text-green-700 dark:text-green-400',
  minimalist:   'bg-slate-500/10 text-slate-600 dark:text-slate-400',
  lovely:       'bg-rose-500/10 text-rose-600 dark:text-rose-400',
}

const SAMPLE_TEXTS = [
  'aesthetic', 'lovely', 'soft girl', 'dark academia',
  'cottagecore', 'your name', 'be yourself', 'dream on',
]

// ─── Component ────────────────────────────────────────────────────────────────

export function AestheticFontsGeneratorTool() {
  const [input, setInput]       = useState('')
  const [category, setCategory] = useState<Category>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [previewIdx, setPreviewIdx] = useState(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aesthetic-fonts-favorites')
      if (saved) setFavorites(new Set(JSON.parse(saved)))
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (input) return
    const id = setInterval(() => setPreviewIdx(i => (i + 1) % AESTHETIC_STYLES.length), 2200)
    return () => clearInterval(id)
  }, [input])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      try { localStorage.setItem('aesthetic-fonts-favorites', JSON.stringify([...next])) } catch { /* ignore */ }
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
    CATEGORIES.slice(1).map(cat => [cat.id, AESTHETIC_STYLES.filter(s => s.category === cat.id).length])
  )

  const filtered = category === 'all'
    ? AESTHETIC_STYLES
    : AESTHETIC_STYLES.filter(s => s.category === category)

  const popularStyles  = AESTHETIC_STYLES.filter(s => s.popular)
  const favoritedStyles = AESTHETIC_STYLES.filter(s => favorites.has(s.id))

  const copyAll = () => {
    const all = filtered.map(s => `【${s.name}】\n${s.transform(input || 'aesthetic')}`).join('\n\n')
    navigator.clipboard.writeText(all)
    toast({ title: 'All styles copied!' })
  }

  const hasInput = input.trim().length > 0
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
          placeholder="Type anything — name, quote, vibe…"
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
            {AESTHETIC_STYLES[previewIdx].transform('lovely font')}
          </div>
          <p className="text-xs text-muted-foreground">
            {AESTHETIC_STYLES[previewIdx].name} — type above to generate
          </p>
          <div className="flex justify-center gap-1 pt-1 flex-wrap max-w-xs mx-auto">
            {AESTHETIC_STYLES.map((_, i) => (
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
                  <AestheticCard
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
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">💗 Most Popular</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {popularStyles.map(style => (
                  <AestheticCard
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
                All {AESTHETIC_STYLES.length} Aesthetic Styles
              </p>
            )}
            <div className="grid sm:grid-cols-2 gap-2">
              {filtered.map(style => (
                <AestheticCard
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

function AestheticCard({
  style, output, isCopied, isFavorite, onCopy, onFavorite,
}: {
  style: AStyle; output: string; isCopied: boolean; isFavorite: boolean
  onCopy: () => void; onFavorite: () => void
}) {
  return (
    <div className="group p-3.5 rounded-xl border bg-card hover:border-primary/40 transition-all hover:shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-xs font-semibold truncate">{style.name}</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${CATEGORY_COLORS[style.category]}`}>
            {style.category === 'darkacademia' ? 'academia' : style.category}
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
