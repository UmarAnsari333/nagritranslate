'use client'

import { useState, useEffect, useRef } from 'react'
import { Copy, Check, Search, ChevronDown, ExternalLink, Eye, Type, Download } from 'lucide-react'

// ─── Google Fonts helpers ────────────────────────────────────────────────────

function googleFontsUrl(fontName: string) {
  return `https://fonts.google.com/specimen/${fontName.replace(/\s+/g, '+')}`
}

const loadedFonts = new Set<string>()
function loadGoogleFont(fontName: string) {
  if (loadedFonts.has(fontName)) return
  loadedFonts.add(fontName)
  const id = `gf-${fontName.replace(/\s+/g, '-').toLowerCase()}`
  if (document.getElementById(id)) return
  const link = document.createElement('link')
  link.id = id
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;700&display=swap`
  document.head.appendChild(link)
}

// ─── Font data ───────────────────────────────────────────────────────────────

interface FontEntry { name: string; category: string }

const FONTS: FontEntry[] = [
  { name: 'Inter', category: 'Sans Serif' },
  { name: 'Roboto', category: 'Sans Serif' },
  { name: 'Open Sans', category: 'Sans Serif' },
  { name: 'Lato', category: 'Sans Serif' },
  { name: 'Montserrat', category: 'Sans Serif' },
  { name: 'Poppins', category: 'Sans Serif' },
  { name: 'Nunito', category: 'Sans Serif' },
  { name: 'Raleway', category: 'Sans Serif' },
  { name: 'Oswald', category: 'Sans Serif' },
  { name: 'Ubuntu', category: 'Sans Serif' },
  { name: 'Source Sans 3', category: 'Sans Serif' },
  { name: 'PT Sans', category: 'Sans Serif' },
  { name: 'Noto Sans', category: 'Sans Serif' },
  { name: 'Fira Sans', category: 'Sans Serif' },
  { name: 'Barlow', category: 'Sans Serif' },
  { name: 'Cabin', category: 'Sans Serif' },
  { name: 'Karla', category: 'Sans Serif' },
  { name: 'DM Sans', category: 'Sans Serif' },
  { name: 'Jost', category: 'Sans Serif' },
  { name: 'Quicksand', category: 'Sans Serif' },
  { name: 'Rubik', category: 'Sans Serif' },
  { name: 'Work Sans', category: 'Sans Serif' },
  { name: 'Mulish', category: 'Sans Serif' },
  { name: 'Manrope', category: 'Sans Serif' },
  { name: 'Exo 2', category: 'Sans Serif' },
  { name: 'Titillium Web', category: 'Sans Serif' },
  { name: 'Oxygen', category: 'Sans Serif' },
  { name: 'Assistant', category: 'Sans Serif' },
  { name: 'Hind', category: 'Sans Serif' },
  { name: 'Nanum Gothic', category: 'Sans Serif' },
  { name: 'Playfair Display', category: 'Serif' },
  { name: 'Merriweather', category: 'Serif' },
  { name: 'Lora', category: 'Serif' },
  { name: 'PT Serif', category: 'Serif' },
  { name: 'Libre Baskerville', category: 'Serif' },
  { name: 'Crimson Text', category: 'Serif' },
  { name: 'EB Garamond', category: 'Serif' },
  { name: 'Cormorant Garamond', category: 'Serif' },
  { name: 'Spectral', category: 'Serif' },
  { name: 'Bitter', category: 'Serif' },
  { name: 'Zilla Slab', category: 'Serif' },
  { name: 'Roboto Slab', category: 'Serif' },
  { name: 'Noto Serif', category: 'Serif' },
  { name: 'Cardo', category: 'Serif' },
  { name: 'Gelasio', category: 'Serif' },
  { name: 'Frank Ruhl Libre', category: 'Serif' },
  { name: 'Tinos', category: 'Serif' },
  { name: 'Domine', category: 'Serif' },
  { name: 'Bebas Neue', category: 'Display' },
  { name: 'Anton', category: 'Display' },
  { name: 'Righteous', category: 'Display' },
  { name: 'Fredoka One', category: 'Display' },
  { name: 'Lobster', category: 'Display' },
  { name: 'Bangers', category: 'Display' },
  { name: 'Boogaloo', category: 'Display' },
  { name: 'Chewy', category: 'Display' },
  { name: 'Lilita One', category: 'Display' },
  { name: 'Alfa Slab One', category: 'Display' },
  { name: 'Abril Fatface', category: 'Display' },
  { name: 'Sigmar One', category: 'Display' },
  { name: 'Ultra', category: 'Display' },
  { name: 'Black Han Sans', category: 'Display' },
  { name: 'Titan One', category: 'Display' },
  { name: 'Bree Serif', category: 'Display' },
  { name: 'Arvo', category: 'Display' },
  { name: 'Dancing Script', category: 'Handwriting' },
  { name: 'Pacifico', category: 'Handwriting' },
  { name: 'Caveat', category: 'Handwriting' },
  { name: 'Kalam', category: 'Handwriting' },
  { name: 'Patrick Hand', category: 'Handwriting' },
  { name: 'Shadows Into Light', category: 'Handwriting' },
  { name: 'Indie Flower', category: 'Handwriting' },
  { name: 'Satisfy', category: 'Handwriting' },
  { name: 'Permanent Marker', category: 'Handwriting' },
  { name: 'Amatic SC', category: 'Handwriting' },
  { name: 'Great Vibes', category: 'Handwriting' },
  { name: 'Sacramento', category: 'Handwriting' },
  { name: 'Allura', category: 'Handwriting' },
  { name: 'Alex Brush', category: 'Handwriting' },
  { name: 'Pinyon Script', category: 'Handwriting' },
  { name: 'Italianno', category: 'Handwriting' },
  { name: 'Niconne', category: 'Handwriting' },
  { name: 'Courgette', category: 'Handwriting' },
  { name: 'Roboto Mono', category: 'Monospace' },
  { name: 'Source Code Pro', category: 'Monospace' },
  { name: 'Fira Code', category: 'Monospace' },
  { name: 'JetBrains Mono', category: 'Monospace' },
  { name: 'Space Mono', category: 'Monospace' },
  { name: 'Courier Prime', category: 'Monospace' },
  { name: 'Inconsolata', category: 'Monospace' },
  { name: 'IBM Plex Mono', category: 'Monospace' },
  { name: 'Cutive Mono', category: 'Monospace' },
  { name: 'Share Tech Mono', category: 'Monospace' },
  { name: 'Press Start 2P', category: 'Special' },
  { name: 'Special Elite', category: 'Special' },
  { name: 'Creepster', category: 'Special' },
  { name: 'Nosifer', category: 'Special' },
  { name: 'Faster One', category: 'Special' },
  { name: 'Monoton', category: 'Special' },
  { name: 'Megrim', category: 'Special' },
  { name: 'Orbitron', category: 'Special' },
  { name: 'VT323', category: 'Special' },
  { name: 'Silkscreen', category: 'Special' },
]

const CAT_COLORS: Record<string, string> = {
  'Sans Serif': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'Serif': 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  'Display': 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  'Handwriting': 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  'Monospace': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'Special': 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
}

const FONT_CATEGORIES = ['All', 'Sans Serif', 'Serif', 'Display', 'Handwriting', 'Monospace', 'Special']

// ─── Unicode transform helpers ───────────────────────────────────────────────

type Transform = (t: string) => string

const ch = (map: Record<string, string>) => (t: string) =>
  t.split('').map(c => map[c] ?? c).join('')

const UNICODE_STYLES: { name: string; category: string; transform: Transform; sample: string }[] = [
  {
    name: 'Serif Bold', category: 'Bold & Italic', sample: '𝐇𝐞𝐥𝐥𝐨',
    transform: ch({ a:'𝐚',b:'𝐛',c:'𝐜',d:'𝐝',e:'𝐞',f:'𝐟',g:'𝐠',h:'𝐡',i:'𝐢',j:'𝐣',k:'𝐤',l:'𝐥',m:'𝐦',n:'𝐧',o:'𝐨',p:'𝐩',q:'𝐪',r:'𝐫',s:'𝐬',t:'𝐭',u:'𝐮',v:'𝐯',w:'𝐰',x:'𝐱',y:'𝐲',z:'𝐳',A:'𝐀',B:'𝐁',C:'𝐂',D:'𝐃',E:'𝐄',F:'𝐅',G:'𝐆',H:'𝐇',I:'𝐈',J:'𝐉',K:'𝐊',L:'𝐋',M:'𝐌',N:'𝐍',O:'𝐎',P:'𝐏',Q:'𝐐',R:'𝐑',S:'𝐒',T:'𝐓',U:'𝐔',V:'𝐕',W:'𝐖',X:'𝐗',Y:'𝐘',Z:'𝐙','0':'𝟎','1':'𝟏','2':'𝟐','3':'𝟑','4':'𝟒','5':'𝟓','6':'𝟔','7':'𝟕','8':'𝟖','9':'𝟗' }),
  },
  {
    name: 'Serif Bold Italic', category: 'Bold & Italic', sample: '𝑯𝒆𝒍𝒍𝒐',
    transform: ch({ a:'𝒂',b:'𝒃',c:'𝒄',d:'𝒅',e:'𝒆',f:'𝒇',g:'𝒈',h:'𝒉',i:'𝒊',j:'𝒋',k:'𝒌',l:'𝒍',m:'𝒎',n:'𝒏',o:'𝒐',p:'𝒑',q:'𝒒',r:'𝒓',s:'𝒔',t:'𝒕',u:'𝒖',v:'𝒗',w:'𝒘',x:'𝒙',y:'𝒚',z:'𝒛',A:'𝑨',B:'𝑩',C:'𝑪',D:'𝑫',E:'𝑬',F:'𝑭',G:'𝑮',H:'𝑯',I:'𝑰',J:'𝑱',K:'𝑲',L:'𝑳',M:'𝑴',N:'𝑵',O:'𝑶',P:'𝑷',Q:'𝑸',R:'𝑹',S:'𝑺',T:'𝑻',U:'𝑼',V:'𝑽',W:'𝑾',X:'𝑿',Y:'𝒀',Z:'𝒁' }),
  },
  {
    name: 'Sans Bold', category: 'Bold & Italic', sample: '𝗛𝗲𝗹𝗹𝗼',
    transform: ch({ a:'𝗮',b:'𝗯',c:'𝗰',d:'𝗱',e:'𝗲',f:'𝗳',g:'𝗴',h:'𝗵',i:'𝗶',j:'𝗷',k:'𝗸',l:'𝗹',m:'𝗺',n:'𝗻',o:'𝗼',p:'𝗽',q:'𝗾',r:'𝗿',s:'𝘀',t:'𝘁',u:'𝘂',v:'𝘃',w:'𝘄',x:'𝘅',y:'𝘆',z:'𝘇',A:'𝗔',B:'𝗕',C:'𝗖',D:'𝗗',E:'𝗘',F:'𝗙',G:'𝗚',H:'𝗛',I:'𝗜',J:'𝗝',K:'𝗞',L:'𝗟',M:'𝗠',N:'𝗡',O:'𝗢',P:'𝗣',Q:'𝗤',R:'𝗥',S:'𝗦',T:'𝗧',U:'𝗨',V:'𝗩',W:'𝗪',X:'𝗫',Y:'𝗬',Z:'𝗭','0':'𝟬','1':'𝟭','2':'𝟮','3':'𝟯','4':'𝟰','5':'𝟱','6':'𝟲','7':'𝟳','8':'𝟴','9':'𝟵' }),
  },
  {
    name: 'Bold Script', category: 'Script', sample: '𝓗𝓮𝓵𝓵𝓸',
    transform: ch({ a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩' }),
  },
  {
    name: 'Script', category: 'Script', sample: '𝒽𝑒𝓁𝓁𝑜',
    transform: ch({ a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',k:'𝓀',l:'𝓁',m:'𝓂',n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',K:'𝒦',L:'ℒ',M:'ℳ',N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵' }),
  },
  {
    name: 'Fraktur / Gothic', category: 'Script', sample: 'ℌ𝔢𝔩𝔩𝔬',
    transform: ch({ a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ' }),
  },
  {
    name: 'Double Struck', category: 'Symbols', sample: '𝕳𝖊𝖑𝖑𝖔',
    transform: ch({ a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',k:'𝕜',l:'𝕝',m:'𝕞',n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',K:'𝕂',L:'𝕃',M:'𝕄',N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ','0':'𝟘','1':'𝟙','2':'𝟚','3':'𝟛','4':'𝟜','5':'𝟝','6':'𝟞','7':'𝟟','8':'𝟠','9':'𝟡' }),
  },
  {
    name: 'Circled', category: 'Symbols', sample: 'Ⓗⓔⓛⓛⓞ',
    transform: ch({ a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ','0':'⓪','1':'①','2':'②','3':'③','4':'④','5':'⑤','6':'⑥','7':'⑦','8':'⑧','9':'⑨' }),
  },
  {
    name: 'Fullwidth', category: 'Symbols', sample: 'Ｈｅｌｌｏ',
    transform: (t: string) => t.split('').map(c => { const code = c.charCodeAt(0); if (code >= 33 && code <= 126) return String.fromCharCode(code + 0xFEE0); if (c === ' ') return '\u3000'; return c }).join(''),
  },
  {
    name: 'Small Caps', category: 'Transform', sample: 'ʜᴇʟʟᴏ',
    transform: ch({ a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ꜰ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'Q',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ꜰ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'Q',R:'ʀ',S:'s',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ' }),
  },
  {
    name: 'Upside Down', category: 'Transform', sample: 'ollǝH',
    transform: (t: string) => t.split('').map(c => ({ a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',k:'ʞ',l:'l',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',A:'∀',B:'ꓭ',C:'Ɔ',D:'ꓷ',E:'Ǝ',F:'Ⅎ',G:'פ',H:'H',I:'I',J:'ſ',K:'ꓘ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ꓤ',S:'S',T:'┴',U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',' ':' ','!':'¡','?':'¿' }[c] ?? c)).reverse().join(''),
  },
  {
    name: 'Strikethrough', category: 'Transform', sample: 'H̶e̶l̶l̶o̶',
    transform: (t: string) => t.split('').map(c => c === ' ' ? ' ' : c + '\u0336').join(''),
  },
  {
    name: 'Underline', category: 'Transform', sample: 'H̲e̲l̲l̲o̲',
    transform: (t: string) => t.split('').map(c => c === ' ' ? ' ' : c + '\u0332').join(''),
  },
  {
    name: 'Superscript', category: 'Transform', sample: 'ᴴᵉˡˡᵒ',
    transform: ch({ a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'q',r:'ʳ',s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ',A:'ᴬ',B:'ᴮ',C:'ᶜ',D:'ᴰ',E:'ᴱ',F:'ᶠ',G:'ᴳ',H:'ᴴ',I:'ᴵ',J:'ᴶ',K:'ᴷ',L:'ᴸ',M:'ᴹ',N:'ᴺ',O:'ᴼ',P:'ᴾ',Q:'Q',R:'ᴿ',S:'ˢ',T:'ᵀ',U:'ᵁ',V:'ⱽ',W:'ᵂ',X:'ˣ',Y:'ʸ',Z:'ᶻ','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' }),
  },
  {
    name: 'Star Frame', category: 'Decorative', sample: '✦ Hello ✦',
    transform: (t: string) => `✦ ${t} ✦`,
  },
  {
    name: 'Flower Frame', category: 'Decorative', sample: '✿ Hello ✿',
    transform: (t: string) => `✿ ${t} ✿`,
  },
  {
    name: 'Japanese Brackets', category: 'Decorative', sample: '『Hello』',
    transform: (t: string) => `『${t}』`,
  },
  {
    name: 'Double Brackets', category: 'Decorative', sample: '【Hello】',
    transform: (t: string) => `【${t}】`,
  },
  {
    name: 'Sparkle', category: 'Decorative', sample: '✨Hello✨',
    transform: (t: string) => `✨ ${t} ✨`,
  },
  {
    name: 'Wave Frame', category: 'Decorative', sample: '〰Hello〰',
    transform: (t: string) => `〰 ${t} 〰`,
  },
]

const UNICODE_CATEGORIES = ['All', 'Bold & Italic', 'Script', 'Symbols', 'Transform', 'Decorative']

// ─── Main Component ──────────────────────────────────────────────────────────

export function FontluTool() {
  const [tab, setTab] = useState<'preview' | 'unicode'>('preview')

  // ── Tab 1: Google Fonts Previewer state ──
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog')
  const [selectedFont, setSelectedFont] = useState('Inter')
  const [fontSize, setFontSize] = useState(36)
  const [fontWeight, setFontWeight] = useState<'400' | '700'>('400')
  const [fontStyle, setFontStyle] = useState<'normal' | 'italic'>('normal')
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center')
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [lineHeight, setLineHeight] = useState(1.4)
  const [textColor, setTextColor] = useState('#1a1a1a')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [fontSearch, setFontSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [showFontPicker, setShowFontPicker] = useState(false)
  const [copiedPreview, setCopiedPreview] = useState(false)
  const [copiedCSS, setCopiedCSS] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  // ── Tab 2: Unicode Fancy Text state ──
  const [unicodeText, setUnicodeText] = useState('Hello World')
  const [unicodeCat, setUnicodeCat] = useState('All')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Load selected font
  useEffect(() => { loadGoogleFont(selectedFont) }, [selectedFont])

  // Pre-load first 20 fonts
  useEffect(() => { FONTS.slice(0, 20).forEach(f => loadGoogleFont(f.name)) }, [])

  // Close picker on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setShowFontPicker(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filteredFonts = FONTS.filter(f =>
    (activeCategory === 'All' || f.category === activeCategory) &&
    f.name.toLowerCase().includes(fontSearch.toLowerCase())
  )

  const filteredUnicode = UNICODE_STYLES.filter(s =>
    unicodeCat === 'All' || s.category === unicodeCat
  )

  const selectedFontEntry = FONTS.find(f => f.name === selectedFont)

  function copyPreview() {
    navigator.clipboard.writeText(previewText).then(() => {
      setCopiedPreview(true); setTimeout(() => setCopiedPreview(false), 2000)
    })
  }

  function copyCSS() {
    const css = `font-family: '${selectedFont}', sans-serif;\nfont-size: ${fontSize}px;\nfont-weight: ${fontWeight};\nfont-style: ${fontStyle};\nletter-spacing: ${letterSpacing}px;\nline-height: ${lineHeight};`
    navigator.clipboard.writeText(css).then(() => {
      setCopiedCSS(true); setTimeout(() => setCopiedCSS(false), 2000)
    })
  }

  async function downloadPng() {
    setDownloading(true)
    try {
      const padding = 56
      const canvasWidth = 1200
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!

      // Wait for the Google Font to be ready in the browser
      await document.fonts.load(`${fontStyle} ${fontWeight} ${fontSize}px '${selectedFont}'`)

      const fontDecl = `${fontStyle} ${fontWeight} ${fontSize}px '${selectedFont}', sans-serif`
      ctx.font = fontDecl

      // Word-wrap the text to fit canvas width
      const rawLines = previewText.split('\n')
      const wrappedLines: string[] = []
      for (const rawLine of rawLines) {
        if (rawLine === '') { wrappedLines.push(''); continue }
        const words = rawLine.split(' ')
        let current = ''
        for (const word of words) {
          const test = current ? `${current} ${word}` : word
          if (ctx.measureText(test).width > canvasWidth - padding * 2) {
            if (current) wrappedLines.push(current)
            current = word
          } else {
            current = test
          }
        }
        if (current) wrappedLines.push(current)
      }

      const lineH = Math.round(fontSize * lineHeight)
      canvas.width = canvasWidth
      canvas.height = wrappedLines.length * lineH + padding * 2

      // Re-apply font after canvas resize (resize resets the context)
      ctx.font = fontDecl

      // Background
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Text
      ctx.fillStyle = textColor
      ctx.textBaseline = 'top'
      ctx.textAlign = textAlign as CanvasTextAlign

      const xMap = { left: padding, center: canvas.width / 2, right: canvas.width - padding }
      const x = xMap[textAlign] ?? padding

      wrappedLines.forEach((line, i) => {
        ctx.fillText(line, x, padding + i * lineH)
      })

      // Download
      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${selectedFont.replace(/\s+/g, '-').toLowerCase()}-text.png`
        a.click()
        URL.revokeObjectURL(url)
      }, 'image/png')
    } finally {
      setDownloading(false)
    }
  }

  function copyUnicode(id: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id); setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* ── Tab Switcher ── */}
      <div className="flex gap-2 p-1 bg-muted/20 rounded-xl border">
        <button
          onClick={() => setTab('preview')}
          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 px-2 sm:px-4 rounded-lg text-sm font-semibold transition-all ${
            tab === 'preview' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Eye className="w-4 h-4 shrink-0" />
          <span className="text-center leading-tight">
            Font Previewer
            <span className="block sm:inline sm:ml-1 text-xs font-normal opacity-70">100+ Google Fonts</span>
          </span>
        </button>
        <button
          onClick={() => setTab('unicode')}
          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 px-2 sm:px-4 rounded-lg text-sm font-semibold transition-all ${
            tab === 'unicode' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Type className="w-4 h-4 shrink-0" />
          <span className="text-center leading-tight">
            Copy &amp; Paste
            <span className="block sm:inline sm:ml-1 text-xs font-normal opacity-70">Works everywhere</span>
          </span>
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TAB 1 — GOOGLE FONTS PREVIEWER
      ══════════════════════════════════════════════════════════════════════ */}
      {tab === 'preview' && (
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-blue-500/5 border border-blue-500/20 rounded-lg px-3 py-2">
            <span>ℹ️</span>
            <span>This tab previews real Google Fonts. Use <strong>Copy & Paste Fonts</strong> tab if you want styled text that works in Instagram, Discord etc.</span>
          </div>

          {/* Text input */}
          <div>
            <label className="block text-sm font-semibold mb-2">Your Text</label>
            <textarea
              value={previewText}
              onChange={e => setPreviewText(e.target.value)}
              rows={2}
              placeholder="Type your text here..."
              className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>

          {/* Font picker */}
          <div ref={pickerRef} className="relative">
            <div className="flex items-center justify-between flex-wrap gap-1 mb-2">
              <label className="text-sm font-semibold">
                Font Family <span className="text-muted-foreground font-normal">({FONTS.length} Google Fonts)</span>
              </label>
              <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-0.5 shrink-0">
                Browse all <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <button
              onClick={() => setShowFontPicker(v => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border bg-background hover:border-primary/40 transition text-left"
            >
              <span style={{ fontFamily: `'${selectedFont}', sans-serif` }} className="text-base font-medium">{selectedFont}</span>
              <div className="flex items-center gap-2">
                {selectedFontEntry && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${CAT_COLORS[selectedFontEntry.category] ?? ''}`}>{selectedFontEntry.category}</span>
                )}
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showFontPicker ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {showFontPicker && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="p-3 border-b space-y-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input type="text" placeholder="Search fonts..." value={fontSearch} onChange={e => setFontSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-muted/20 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/30" autoFocus />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {FONT_CATEGORIES.map(cat => (
                      <button key={cat} onClick={() => setActiveCategory(cat)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition ${activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/20 text-muted-foreground hover:text-foreground border-muted/40'}`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-y-auto max-h-64 p-2">
                  {filteredFonts.length === 0
                    ? <p className="text-sm text-muted-foreground text-center py-4">No fonts found</p>
                    : <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {filteredFonts.map(f => (
                          <div key={f.name} onMouseEnter={() => loadGoogleFont(f.name)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-muted/40 transition-colors group ${selectedFont === f.name ? 'bg-primary/10 border border-primary/30' : ''}`}>
                            <button onClick={() => { setSelectedFont(f.name); loadGoogleFont(f.name); setShowFontPicker(false) }}
                              className="flex-1 flex items-center justify-between text-left min-w-0">
                              <span style={{ fontFamily: `'${f.name}', sans-serif` }} className="text-sm font-medium truncate">{f.name}</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ml-2 ${CAT_COLORS[f.category] ?? ''}`}>{f.category}</span>
                            </button>
                            <a href={googleFontsUrl(f.name)} target="_blank" rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()} title={`View ${f.name} on Google Fonts`}
                              className="ml-2 shrink-0 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-all">
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        ))}
                      </div>
                  }
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
            <div>
              <label className="block text-sm font-semibold mb-2">Font Size: <span className="text-primary">{fontSize}px</span></label>
              <input type="range" min={12} max={120} value={fontSize} onChange={e => setFontSize(Number(e.target.value))} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>12px</span><span>120px</span></div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Letter Spacing: <span className="text-primary">{letterSpacing}px</span></label>
              <input type="range" min={-2} max={20} step={0.5} value={letterSpacing} onChange={e => setLetterSpacing(Number(e.target.value))} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>-2px</span><span>20px</span></div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Line Height: <span className="text-primary">{lineHeight}</span></label>
              <input type="range" min={1} max={3} step={0.1} value={lineHeight} onChange={e => setLineHeight(Number(e.target.value))} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1.0</span><span>3.0</span></div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold mb-2">Style</label>
                <div className="flex gap-2 flex-wrap">
                  {(['400', '700'] as const).map(w => (
                    <button key={w} onClick={() => setFontWeight(w)}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-bold transition ${fontWeight === w ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/20 hover:bg-muted/40 border-muted/40'}`}>
                      {w === '400' ? 'Regular' : 'Bold'}
                    </button>
                  ))}
                  <button onClick={() => setFontStyle(s => s === 'italic' ? 'normal' : 'italic')}
                    className={`px-3 py-1.5 rounded-lg border text-sm italic transition ${fontStyle === 'italic' ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/20 hover:bg-muted/40 border-muted/40'}`}>
                    Italic
                  </button>
                  {(['left', 'center', 'right'] as const).map(a => (
                    <button key={a} onClick={() => setTextAlign(a)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition ${textAlign === a ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/20 hover:bg-muted/40 border-muted/40'}`}>
                      {a === 'left' ? '⬅' : a === 'center' ? '↔' : '➡'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Text Color</label>
                  <div className="flex items-center gap-2">
                    <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-9 h-9 rounded-lg border cursor-pointer p-0.5 bg-background" />
                    <span className="text-xs font-mono text-muted-foreground">{textColor}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Background</label>
                  <div className="flex items-center gap-2">
                    <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-9 h-9 rounded-lg border cursor-pointer p-0.5 bg-background" />
                    <span className="text-xs font-mono text-muted-foreground">{bgColor}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <label className="text-sm font-semibold">Live Preview</label>
              <a href={googleFontsUrl(selectedFont)} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium">
                <ExternalLink className="w-3 h-3" /> View <strong>{selectedFont}</strong> on Google Fonts
              </a>
            </div>
            <div className="w-full min-h-[140px] rounded-xl border-2 border-dashed border-muted/40 p-6 flex items-center justify-center overflow-hidden" style={{ backgroundColor: bgColor }}>
              <p style={{ fontFamily: `'${selectedFont}', sans-serif`, fontSize: `${fontSize}px`, fontWeight, fontStyle, textAlign, letterSpacing: `${letterSpacing}px`, lineHeight, color: textColor, width: '100%', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {previewText || 'Start typing above…'}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={copyPreview} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
              {copiedPreview ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedPreview ? 'Copied!' : 'Copy Text'}
            </button>
            <button onClick={downloadPng} disabled={downloading || !previewText.trim()}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 font-semibold text-sm transition disabled:opacity-50 disabled:cursor-not-allowed">
              <Download className="w-4 h-4" />
              {downloading ? 'Rendering…' : 'Download PNG'}
            </button>
            <button onClick={copyCSS} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border bg-muted/20 hover:bg-muted/40 font-medium text-sm transition">
              {copiedCSS ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedCSS ? 'CSS Copied!' : 'Copy CSS'}
            </button>
            <button onClick={() => { setFontSize(36); setLetterSpacing(0); setLineHeight(1.4); setFontWeight('400'); setFontStyle('normal'); setTextAlign('center'); setTextColor('#1a1a1a'); setBgColor('#ffffff') }}
              className="px-5 py-3 rounded-xl border bg-muted/10 hover:bg-muted/30 text-sm font-medium transition">
              Reset
            </button>
          </div>

          {/* Font info bar */}
          <div className="p-3 bg-muted/10 rounded-xl border text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-2">
            <span>🔤 Font: <a href={googleFontsUrl(selectedFont)} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline inline-flex items-center gap-0.5">{selectedFont} <ExternalLink className="w-2.5 h-2.5" /></a></span>
            <span>📏 Size: <strong className="text-foreground">{fontSize}px</strong></span>
            <span>⚖️ Weight: <strong className="text-foreground">{fontWeight === '700' ? 'Bold' : 'Regular'}</strong></span>
            <span>↔ Spacing: <strong className="text-foreground">{letterSpacing}px</strong></span>
            <span>📂 Category: <strong className="text-foreground">{selectedFontEntry?.category}</strong></span>
            <span>🌐 Source: <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline inline-flex items-center gap-0.5">Google Fonts <ExternalLink className="w-2.5 h-2.5" /></a></span>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          TAB 2 — UNICODE COPY & PASTE FONTS
      ══════════════════════════════════════════════════════════════════════ */}
      {tab === 'unicode' && (
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-green-500/5 border border-green-500/20 rounded-lg px-3 py-2">
            <span>✅</span>
            <span>These styles use Unicode characters — they <strong>paste with the styling intact</strong> into Instagram, TikTok, Discord, WhatsApp, Twitter, and anywhere else.</span>
          </div>

          {/* Text input */}
          <div>
            <label className="block text-sm font-semibold mb-2">Your Text</label>
            <textarea
              value={unicodeText}
              onChange={e => setUnicodeText(e.target.value)}
              rows={2}
              placeholder="Type your text here..."
              className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {UNICODE_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setUnicodeCat(cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${unicodeCat === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/20 text-muted-foreground hover:text-foreground border-muted/40'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Styles grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {filteredUnicode.map(style => {
              const output = unicodeText ? style.transform(unicodeText) : style.sample
              const isCopied = copiedId === style.name
              return (
                <div key={style.name} className="group p-4 bg-muted/10 rounded-xl border border-muted/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold">{style.name}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{style.category}</span>
                    </div>
                    <button
                      onClick={() => copyUnicode(style.name, output)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition ${isCopied ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                    >
                      {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-base break-all leading-relaxed">{output}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
