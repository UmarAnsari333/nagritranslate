'use client'

import { useState, useMemo } from 'react'
import { Copy, Check } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

// ─── Unicode block transform ──────────────────────────────────────────────────

function block(text: string, upBase: number, loBase: number): string {
  return [...text].map(c => {
    const cp = c.codePointAt(0)!
    if (cp >= 65 && cp <= 90) return String.fromCodePoint(upBase + cp - 65)
    if (cp >= 97 && cp <= 122) return String.fromCodePoint(loBase + cp - 97)
    if (cp >= 48 && cp <= 57) return c // keep digits as-is
    return c
  }).join('')
}

// ─── Character maps ───────────────────────────────────────────────────────────

const SCRIPT_MAP: Record<string, string> = {
  A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',
  K:'𝒦',L:'ℒ',M:'ℳ',N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',
  U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
  a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',
  k:'𝓀',l:'𝓁',m:'𝓂',n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',
  u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏',
}

const FRAKTUR_MAP: Record<string, string> = {
  A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',
  K:'𝔎',L:'𝔏',M:'𝔐',N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',
  U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
  a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',
  k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',
  u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
}

const DOUBLE_STRUCK_MAP: Record<string, string> = {
  A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',
  K:'𝕂',L:'𝕃',M:'𝕄',N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',
  U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
  a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',
  k:'𝕜',l:'𝕝',m:'𝕞',n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',
  u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
}

const SMALL_CAPS_MAP: Record<string, string> = {
  a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ꜰ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',
  k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'Q',r:'ʀ',s:'ꜱ',t:'ᴛ',
  u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ',
  A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ꜰ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',
  K:'ᴋ',L:'ʟ',M:'ᴍ',N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'Q',R:'ʀ',S:'ꜱ',T:'ᴛ',
  U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ',
}

const SUPERSCRIPT_MAP: Record<string, string> = {
  a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',j:'ʲ',
  k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'q',r:'ʳ',s:'ˢ',t:'ᵗ',
  u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ',
  A:'ᴬ',B:'ᴮ',C:'ᶜ',D:'ᴰ',E:'ᴱ',F:'ᶠ',G:'ᴳ',H:'ᴴ',I:'ᴵ',J:'ᴶ',
  K:'ᴷ',L:'ᴸ',M:'ᴹ',N:'ᴺ',O:'ᴼ',P:'ᴾ',Q:'Q',R:'ᴿ',S:'ˢ',T:'ᵀ',
  U:'ᵁ',V:'ᵛ',W:'ᵂ',X:'ˣ',Y:'ʸ',Z:'ᶻ',
}

const SUBSCRIPT_MAP: Record<string, string> = {
  a:'ₐ',b:'b',c:'c',d:'d',e:'ₑ',f:'f',g:'g',h:'ₕ',i:'ᵢ',j:'ⱼ',
  k:'ₖ',l:'ₗ',m:'ₘ',n:'ₙ',o:'ₒ',p:'ₚ',q:'q',r:'ᵣ',s:'ₛ',t:'ₜ',
  u:'ᵤ',v:'ᵥ',w:'w',x:'ₓ',y:'y',z:'z',
  A:'ₐ',B:'B',C:'C',D:'D',E:'ₑ',F:'F',G:'G',H:'ₕ',I:'ᵢ',J:'ⱼ',
  K:'ₖ',L:'ₗ',M:'ₘ',N:'ₙ',O:'ₒ',P:'ₚ',Q:'Q',R:'ᵣ',S:'ₛ',T:'ₜ',
  U:'ᵤ',V:'ᵥ',W:'W',X:'ₓ',Y:'Y',Z:'Z',
}

const FLIP_MAP: Record<string, string> = {
  a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',
  k:'ʞ',l:'l',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',
  u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',
  A:'∀',B:'ᗺ',C:'Ɔ',D:'ᗡ',E:'Ǝ',F:'Ⅎ',G:'⅁',H:'H',I:'I',J:'ſ',
  K:'ʞ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ɹ',S:'S',T:'┴',
  U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',
}

const BUBBLE_MAP: Record<string, string> = {
  a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',
  k:'ⓚ',l:'ⓛ',m:'ⓜ',n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',
  u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ',
  A:'Ⓐ',B:'Ⓑ',C:'Ⓒ',D:'Ⓓ',E:'Ⓔ',F:'Ⓕ',G:'Ⓖ',H:'Ⓗ',I:'Ⓘ',J:'Ⓙ',
  K:'Ⓚ',L:'Ⓛ',M:'Ⓜ',N:'Ⓝ',O:'Ⓞ',P:'Ⓟ',Q:'Ⓠ',R:'Ⓡ',S:'Ⓢ',T:'Ⓣ',
  U:'Ⓤ',V:'Ⓥ',W:'Ⓦ',X:'Ⓧ',Y:'Ⓨ',Z:'Ⓩ',
}

const PARENTHESIZED_MAP: Record<string, string> = {
  a:'⒜',b:'⒝',c:'⒞',d:'⒟',e:'⒠',f:'⒡',g:'⒢',h:'⒣',i:'⒤',j:'⒥',
  k:'⒦',l:'⒧',m:'⒨',n:'⒩',o:'⒪',p:'⒫',q:'⒬',r:'⒭',s:'⒮',t:'⒯',
  u:'⒰',v:'⒱',w:'⒲',x:'⒳',y:'⒴',z:'⒵',
  A:'⒜',B:'⒝',C:'⒞',D:'⒟',E:'⒠',F:'⒡',G:'⒢',H:'⒣',I:'⒤',J:'⒥',
  K:'⒦',L:'⒧',M:'⒨',N:'⒩',O:'⒪',P:'⒫',Q:'⒬',R:'⒭',S:'⒮',T:'⒯',
  U:'⒰',V:'⒱',W:'⒲',X:'⒳',Y:'⒴',Z:'⒵',
}

const SQUARED_MAP: Record<string, string> = {
  a:'🄰',b:'🄱',c:'🄲',d:'🄳',e:'🄴',f:'🄵',g:'🄶',h:'🄷',i:'🄸',j:'🄹',
  k:'🄺',l:'🄻',m:'🄼',n:'🄽',o:'🄾',p:'🄿',q:'🅀',r:'🅁',s:'🅂',t:'🅃',
  u:'🅄',v:'🅅',w:'🅆',x:'🅇',y:'🅈',z:'🅉',
  A:'🄰',B:'🄱',C:'🄲',D:'🄳',E:'🄴',F:'🄵',G:'🄶',H:'🄷',I:'🄸',J:'🄹',
  K:'🄺',L:'🄻',M:'🄼',N:'🄽',O:'🄾',P:'🄿',Q:'🅀',R:'🅁',S:'🅂',T:'🅃',
  U:'🅄',V:'🅅',W:'🅆',X:'🅇',Y:'🅈',Z:'🅉',
}

const REGIONAL_MAP: Record<string, string> = {
  a:'🇦',b:'🇧',c:'🇨',d:'🇩',e:'🇪',f:'🇫',g:'🇬',h:'🇭',i:'🇮',j:'🇯',
  k:'🇰',l:'🇱',m:'🇲',n:'🇳',o:'🇴',p:'🇵',q:'🇶',r:'🇷',s:'🇸',t:'🇹',
  u:'🇺',v:'🇻',w:'🇼',x:'🇽',y:'🇾',z:'🇿',
  A:'🇦',B:'🇧',C:'🇨',D:'🇩',E:'🇪',F:'🇫',G:'🇬',H:'🇭',I:'🇮',J:'🇯',
  K:'🇰',L:'🇱',M:'🇲',N:'🇳',O:'🇴',P:'🇵',Q:'🇶',R:'🇷',S:'🇸',T:'🇹',
  U:'🇺',V:'🇻',W:'🇼',X:'🇽',Y:'🇾',Z:'🇿',
}

const WIDE_MAP: Record<string, string> = {
  a:'ａ',b:'ｂ',c:'ｃ',d:'ｄ',e:'ｅ',f:'ｆ',g:'ｇ',h:'ｈ',i:'ｉ',j:'ｊ',
  k:'ｋ',l:'ｌ',m:'ｍ',n:'ｎ',o:'ｏ',p:'ｐ',q:'ｑ',r:'ｒ',s:'ｓ',t:'ｔ',
  u:'ｕ',v:'ｖ',w:'ｗ',x:'ｘ',y:'ｙ',z:'ｚ',
  A:'Ａ',B:'Ｂ',C:'Ｃ',D:'Ｄ',E:'Ｅ',F:'Ｆ',G:'Ｇ',H:'Ｈ',I:'Ｉ',J:'Ｊ',
  K:'Ｋ',L:'Ｌ',M:'Ｍ',N:'Ｎ',O:'Ｏ',P:'Ｐ',Q:'Ｑ',R:'Ｒ',S:'Ｓ',T:'Ｔ',
  U:'Ｕ',V:'Ｖ',W:'Ｗ',X:'Ｘ',Y:'Ｙ',Z:'Ｚ',
}

const YI_MAP: Record<string, string> = {
  a:'ꍏ',b:'ꃃ',c:'ꉔ',d:'ꁸ',e:'ꍟ',f:'ꎇ',g:'ꁅ',h:'ꃅ',i:'ꀤ',j:'ꀭ',
  k:'ꀸ',l:'꒒',m:'ꂵ',n:'ꁚ',o:'ꂦ',p:'ꉣ',q:'ꁴ',r:'ꋪ',s:'ꌗ',t:'ꀷ',
  u:'ꀎ',v:'ꀰ',w:'ꅐ',x:'ꊼ',y:'ꌩ',z:'ꁴ',
  A:'ꍏ',B:'ꃃ',C:'ꉔ',D:'ꁸ',E:'ꍟ',F:'ꎇ',G:'ꁅ',H:'ꃅ',I:'ꀤ',J:'ꀭ',
  K:'ꀸ',L:'꒒',M:'ꂵ',N:'ꁚ',O:'ꂦ',P:'ꉣ',Q:'ꁴ',R:'ꋪ',S:'ꌗ',T:'ꀷ',
  U:'ꀎ',V:'ꀰ',W:'ꅐ',X:'ꊼ',Y:'ꌩ',Z:'ꁴ',
}

const CHEROKEE_MAP: Record<string, string> = {
  a:'Ꭺ',b:'Ᏼ',c:'Ꮯ',d:'Ꭰ',e:'Ꭼ',f:'Ꮂ',g:'Ꮆ',h:'Ꮒ',i:'Ꭵ',j:'Ꮰ',
  k:'Ꮶ',l:'Ꮮ',m:'Ꮇ',n:'Ꮑ',o:'Ꮎ',p:'Ꭾ',q:'Ꮙ',r:'Ꮢ',s:'Ꮝ',t:'Ꮦ',
  u:'Ꮜ',v:'Ꮩ',w:'Ꮃ',x:'Ꮙ',y:'Ꭹ',z:'Ꮓ',
  A:'Ꭺ',B:'Ᏼ',C:'Ꮯ',D:'Ꭰ',E:'Ꭼ',F:'Ꮂ',G:'Ꮆ',H:'Ꮒ',I:'Ꭵ',J:'Ꮰ',
  K:'Ꮶ',L:'Ꮮ',M:'Ꮇ',N:'Ꮑ',O:'Ꮎ',P:'Ꭾ',Q:'Ꮙ',R:'Ꮢ',S:'Ꮝ',T:'Ꮦ',
  U:'Ꮜ',V:'Ꮩ',W:'Ꮃ',X:'Ꮙ',Y:'Ꭹ',Z:'Ꮓ',
}

const CANADIAN_MAP: Record<string, string> = {
  a:'ᗩ',b:'ᗷ',c:'ᑕ',d:'ᗞ',e:'ᗴ',f:'ᖴ',g:'ᘜ',h:'ᕼ',i:'ᓰ',j:'ᒍ',
  k:'ᘿ',l:'ᒪ',m:'ᗰ',n:'ᑎ',o:'ᗝ',p:'ᑭ',q:'ᕴ',r:'ᖇ',s:'ᔕ',t:'ᕋ',
  u:'ᑌ',v:'ᐯ',w:'ᗯ',x:'᙭',y:'ᖻ',z:'ᗢ',
  A:'ᗩ',B:'ᗷ',C:'ᑕ',D:'ᗞ',E:'ᗴ',F:'ᖴ',G:'ᘜ',H:'ᕼ',I:'ᓰ',J:'ᒍ',
  K:'ᘿ',L:'ᒪ',M:'ᗰ',N:'ᑎ',O:'ᗝ',P:'ᑭ',Q:'ᕴ',R:'ᖇ',S:'ᔕ',T:'ᕋ',
  U:'ᑌ',V:'ᐯ',W:'ᗯ',X:'᙭',Y:'ᖻ',Z:'ᗢ',
}

const CJK_MAP: Record<string, string> = {
  a:'卂',b:'乃',c:'匚',d:'刀',e:'乇',f:'千',g:'Ꮆ',h:'卄',i:'丨',j:'丿',
  k:'长',l:'ㄥ',m:'爪',n:'几',o:'口',p:'尸',q:'ㄑ',r:'尺',s:'丂',t:'丅',
  u:'凵',v:'ᐯ',w:'山',x:'乂',y:'ㄚ',z:'乙',
  A:'卂',B:'乃',C:'匚',D:'刀',E:'乇',F:'千',G:'Ꮆ',H:'卄',I:'丨',J:'丿',
  K:'长',L:'ㄥ',M:'爪',N:'几',O:'口',P:'尸',Q:'ㄑ',R:'尺',S:'丂',T:'丅',
  U:'凵',V:'ᐯ',W:'山',X:'乂',Y:'ㄚ',Z:'乙',
}

const CYRILLIC_GREEK_MAP: Record<string, string> = {
  a:'α',b:'ϐ',c:'ς',d:'ԁ',e:'є',f:'ϝ',g:'ɡ',h:'н',i:'ι',j:'ʝ',
  k:'κ',l:'ℓ',m:'м',n:'η',o:'σ',p:'ρ',q:'φ',r:'г',s:'ѕ',t:'τ',
  u:'υ',v:'ν',w:'ω',x:'χ',y:'γ',z:'ζ',
  A:'Α',B:'Β',C:'С',D:'D',E:'Ε',F:'Ϝ',G:'G',H:'Η',I:'Ι',J:'J',
  K:'Κ',L:'Λ',M:'М',N:'Ν',O:'Ο',P:'Ρ',Q:'Q',R:'Г',S:'Ѕ',T:'Τ',
  U:'Υ',V:'V',W:'W',X:'Χ',Y:'Υ',Z:'Ζ',
}

// ─── Transforms ───────────────────────────────────────────────────────────────

const applyMap   = (map: Record<string, string>) => (t: string) => [...t].map(c => map[c] ?? c).join('')
const toBold     = (t: string) => block(t, 0x1D400, 0x1D41A)
const toItalic   = (t: string) => block(t, 0x1D434, 0x1D44E)
const toBoldItalic   = (t: string) => block(t, 0x1D468, 0x1D482)
const toBoldScript   = (t: string) => block(t, 0x1D4D0, 0x1D4EA)
const toBoldFraktur  = (t: string) => block(t, 0x1D56C, 0x1D586)
const toSans         = (t: string) => block(t, 0x1D5A0, 0x1D5BA)
const toSansBold     = (t: string) => block(t, 0x1D5D4, 0x1D5EE)
const toSansItalic   = (t: string) => block(t, 0x1D608, 0x1D622)
const toSansBoldItalic = (t: string) => block(t, 0x1D63C, 0x1D656)
const toMonospace    = (t: string) => block(t, 0x1D670, 0x1D68A)
const toScript       = applyMap(SCRIPT_MAP)
const toFraktur      = applyMap(FRAKTUR_MAP)
const toDoubleStruck = applyMap(DOUBLE_STRUCK_MAP)
const toSmallCaps    = applyMap(SMALL_CAPS_MAP)
const toSuperscript  = applyMap(SUPERSCRIPT_MAP)
const toSubscript    = applyMap(SUBSCRIPT_MAP)
const toFullwidth    = applyMap(WIDE_MAP)
const toBubble       = applyMap(BUBBLE_MAP)
const toParenthesized = applyMap(PARENTHESIZED_MAP)
const toSquared      = applyMap(SQUARED_MAP)
const toRegional     = (t: string) => [...t].map(c => REGIONAL_MAP[c] ? REGIONAL_MAP[c] + '\u200D' : c).join('')
const toUpsideDown   = (t: string) => [...t].map(c => FLIP_MAP[c] ?? c).reverse().join('')
const toStrikethrough = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0336').join('')
const toUnderline    = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0332').join('')
const toDoubleUnderline = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0333').join('')
const toOverline     = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0305').join('')
const toCrossed      = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0335').join('')
const toDotAbove     = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0307').join('')
const toUpperBold    = (t: string) => toBold(t.toUpperCase())

// Negative enclosed (no distinct lowercase forms — both map to uppercase block)
const toNegativeCircled = (t: string) => block(t, 0x1F150, 0x1F150)
const toNegativeSquared = (t: string) => block(t, 0x1F170, 0x1F170)

// Lookalike script maps
const toYi         = applyMap(YI_MAP)
const toCherokee   = applyMap(CHEROKEE_MAP)
const toCanadian   = applyMap(CANADIAN_MAP)
const toCJK        = applyMap(CJK_MAP)
const toCyrGrk     = applyMap(CYRILLIC_GREEK_MAP)

// Combining-mark effects
const toKeycap         = (t: string) => [...t].map(c => /\s/.test(c) ? c : c + '\u20E3').join('')
const toWaveOverlay    = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0334').join('')
const toSolidusOverlay = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0337').join('')
const toCancellation   = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0489').join('')
const toBoxedLetter    = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u20DE').join('')

// Frame helper
const frame = (pre: string, suf: string) => (t: string) => `${pre}${t}${suf}`

// ─── Style definitions ────────────────────────────────────────────────────────

interface FancyStyle {
  id: string
  name: string
  preview: string
  transform: (t: string) => string
  category: 'font' | 'effect' | 'symbol' | 'frame'
}

const FANCY_STYLES: FancyStyle[] = [
  // ── Font Styles ────────────────────────────────────────────────────────────
  { id: 'bold',            name: 'Bold',                  preview: '𝐅𝐚𝐧𝐜𝐲',         category: 'font',   transform: toBold },
  { id: 'italic',          name: 'Italic',                preview: '𝐹𝑎𝑛𝑐𝑦',         category: 'font',   transform: toItalic },
  { id: 'bold-italic',     name: 'Bold Italic',           preview: '𝑭𝒂𝒏𝒄𝒚',         category: 'font',   transform: toBoldItalic },
  { id: 'script',          name: 'Script / Calligraphy',  preview: '𝒻𝒶𝓃𝒸𝓎',         category: 'font',   transform: toScript },
  { id: 'bold-script',     name: 'Bold Script',           preview: '𝓕𝓪𝓷𝓬𝔂',         category: 'font',   transform: toBoldScript },
  { id: 'fraktur',         name: 'Gothic / Fraktur',      preview: '𝔉𝔞𝔫𝔠𝔶',         category: 'font',   transform: toFraktur },
  { id: 'bold-fraktur',    name: 'Bold Gothic',           preview: '𝕱𝖆𝖓𝖈𝖞',         category: 'font',   transform: toBoldFraktur },
  { id: 'double-struck',   name: 'Double Struck',         preview: '𝔽𝕒𝕟𝕔𝕪',         category: 'font',   transform: toDoubleStruck },
  { id: 'sans',            name: 'Sans Serif',            preview: '𝖥𝖺𝗇𝖼𝗒',         category: 'font',   transform: toSans },
  { id: 'sans-bold',       name: 'Sans Bold',             preview: '𝗙𝗮𝗻𝗰𝘆',         category: 'font',   transform: toSansBold },
  { id: 'sans-italic',     name: 'Sans Italic',           preview: '𝘍𝘢𝘯𝘤𝘺',         category: 'font',   transform: toSansItalic },
  { id: 'sans-bold-italic',name: 'Sans Bold Italic',      preview: '𝙁𝙖𝙣𝙘𝙮',         category: 'font',   transform: toSansBoldItalic },
  { id: 'monospace',       name: 'Monospace',             preview: '𝙵𝚊𝚗𝚌𝚢',         category: 'font',   transform: toMonospace },
  { id: 'small-caps',      name: 'Small Caps',            preview: 'ꜰᴀɴᴄʏ',         category: 'font',   transform: toSmallCaps },
  { id: 'fullwidth',       name: 'Full Width',            preview: 'Ｆａｎｃｙ',      category: 'font',   transform: toFullwidth },
  { id: 'superscript',     name: 'Superscript',           preview: 'ᶠᵃⁿᶜʸ',         category: 'font',   transform: toSuperscript },
  { id: 'subscript',       name: 'Subscript',             preview: 'ᶠₐₙ꜀ᵧ',         category: 'font',   transform: toSubscript },
  { id: 'upside-down',     name: 'Upside Down',           preview: 'ʎɔuɐɟ',         category: 'font',   transform: toUpsideDown },
  { id: 'upper-bold',      name: 'UPPERCASE BOLD',        preview: '𝐅𝐀𝐍𝐂𝐘',         category: 'font',   transform: toUpperBold },

  // ── Effect Styles ──────────────────────────────────────────────────────────
  { id: 'strikethrough',      name: 'Strikethrough',      preview: 'F̶a̶n̶c̶y̶',         category: 'effect', transform: toStrikethrough },
  { id: 'underline',          name: 'Underline',          preview: 'F̲a̲n̲c̲y̲',         category: 'effect', transform: toUnderline },
  { id: 'double-underline',   name: 'Double Underline',   preview: 'F̳a̳n̳c̳y̳',         category: 'effect', transform: toDoubleUnderline },
  { id: 'overline',           name: 'Overline',           preview: 'F̅a̅n̅c̅y̅',         category: 'effect', transform: toOverline },
  { id: 'crossed',            name: 'Crossed',            preview: 'F̵a̵n̵c̵y̵',         category: 'effect', transform: toCrossed },
  { id: 'dot-above',          name: 'Dot Above',          preview: 'Ḟȧṅċẏ',         category: 'effect', transform: toDotAbove },
  { id: 'bold-underline',     name: 'Bold + Underline',   preview: '𝐅̲𝐚̲𝐧̲𝐜̲𝐲̲',         category: 'effect', transform: t => toUnderline(toBold(t)) },
  { id: 'script-underline',   name: 'Script + Underline', preview: '𝒻̲𝒶̲𝓃̲𝒸̲𝓎̲',         category: 'effect', transform: t => toUnderline(toScript(t)) },
  { id: 'bold-strikethrough', name: 'Bold + Strikethrough', preview: '𝐅̶𝐚̶𝐧̶𝐜̶𝐲̶',     category: 'effect', transform: t => toStrikethrough(toBold(t)) },

  // ── Symbol / Enclosing ─────────────────────────────────────────────────────
  { id: 'bubble',             name: 'Bubble / Circled',      preview: 'Ⓕⓐⓝⓒⓨ',      category: 'symbol', transform: toBubble },
  { id: 'squared',            name: 'Squared',               preview: '🄵🄰🄽🄲🅈',      category: 'symbol', transform: toSquared },
  { id: 'negative-circled',   name: 'Negative Circled',      preview: '🅕🅐🅝🅒🅨',      category: 'symbol', transform: toNegativeCircled },
  { id: 'negative-squared',   name: 'Negative Squared',      preview: '🅵🅰🅽🅲🆈',      category: 'symbol', transform: toNegativeSquared },
  { id: 'parenthesized',      name: 'Parenthesized',         preview: '⒡⒜⒩⒞⒴',      category: 'symbol', transform: toParenthesized },
  { id: 'regional',           name: 'Regional Indicator',    preview: '🇫🇦🇳🇨🇾',      category: 'symbol', transform: toRegional },
  { id: 'keycap',             name: 'Keycap',                preview: 'f⃣a⃣n⃣c⃣y⃣',      category: 'symbol', transform: toKeycap },
  { id: 'boxed-letter',       name: 'Box Each Letter',       preview: 'f⃞a⃞n⃞c⃞y⃞',      category: 'symbol', transform: toBoxedLetter },

  // ── Lookalike Scripts ──────────────────────────────────────────────────────
  { id: 'yi',           name: 'Yi Syllable Style',     preview: 'ꍟꍏꁚꉔꌩ',         category: 'font',   transform: toYi },
  { id: 'cherokee',     name: 'Cherokee Style',        preview: 'ᏩᏂᎢᏣᎩ',         category: 'font',   transform: toCherokee },
  { id: 'canadian',     name: 'Canadian Style',        preview: 'ᖴᗩᑎᑕᖻ',         category: 'font',   transform: toCanadian },
  { id: 'cjk',          name: 'CJK Style',             preview: '千卂几匚ㄚ',        category: 'font',   transform: toCJK },
  { id: 'cyr-grk',      name: 'Cyrillic Mix',          preview: 'ʝαη¢γ',           category: 'font',   transform: toCyrGrk },

  // ── Extra Combining Effects ────────────────────────────────────────────────
  { id: 'wave-overlay',    name: 'Wave Through',        preview: 'F̴a̴n̴c̴y̴',         category: 'effect', transform: toWaveOverlay },
  { id: 'solidus-overlay', name: 'Slash Through',       preview: 'F̷a̷n̷c̷y̷',         category: 'effect', transform: toSolidusOverlay },
  { id: 'cancellation',    name: 'Cancellation Mark',   preview: 'F҉a҉n҉c҉y҉',      category: 'effect', transform: toCancellation },

  // ── Frames ─────────────────────────────────────────────────────────────────
  { id: 'frame-star',      name: '★ Star ★',            preview: '★ Fancy ★',        category: 'frame',  transform: frame('★  ', '  ★') },
  { id: 'frame-music',     name: '♬ Music Notes ♬',     preview: '♬·♩ Fancy ♪·♫',   category: 'frame',  transform: frame('¸¸♬·¯·♩¸¸♪·¯·♫¸¸ ', ' ¸¸♫·¯·♪¸¸♩·¯·♬¸¸') },
  { id: 'frame-curl',      name: '˜"*°• Curl •°*"˜',    preview: '˜"*°• Fancy •°*"˜', category: 'frame', transform: frame('˜"*°•.˜"*°• ', ' •°*"˜.•°*"˜') },
  { id: 'frame-floral',    name: '¸„.-•~ Floral ~•-.„¸', preview: '¸„.-•~ Fancy ~•-.„¸', category: 'frame', transform: frame('¸„.-•~¹°"ˆ˜¨ ', ' ¨˜ˆ"°¹~•-.„¸') },
  { id: 'frame-curve',     name: '(¯´•._.• Curve •._.•´¯)', preview: '(¯´•._.• Fancy •._.•´¯)', category: 'frame', transform: frame('(¯´•._.• ', ' •._.•´¯)') },
  { id: 'frame-wave',      name: '°·.¸.-> Arrow Wave',  preview: '°·.¸.-> Fancy <-.¸.·°', category: 'frame', transform: frame('°·.¸.·°¯°·.¸.-> ', ' <-.¸.·°¯°·.¸.·°') },
  { id: 'frame-japanese',  name: '-漫~舞~ Japan ~舞~漫-', preview: '-漫~舞~ Fancy ~舞~漫-', category: 'frame', transform: frame("-漫~*'¨¯¨'*·舞~ ", " ~舞*'¨¯¨'*·~漫-") },
  { id: 'frame-brace',     name: '•.,¸¸,.•´¯ Brace',   preview: '•.,¸¸,.•´¯ Fancy ¯´•.,¸¸,.•', category: 'frame', transform: frame('•.,¸¸,.•´¯ ', ' ¯´•.,¸¸,.•') },
  { id: 'frame-emote',     name: '(っ◔◡◔)っ Kawaii',    preview: '(っ◔◡◔)っ ♥ Fancy ♥', category: 'frame', transform: frame('(っ◔◡◔)っ ♥ ', ' ♥') },
  { id: 'frame-heart',     name: '♥ Heart ♥',           preview: '♥ Fancy ♥',       category: 'frame',  transform: frame('♥ ', ' ♥') },
  { id: 'frame-arrow',     name: '» Arrow «',            preview: '» Fancy «',        category: 'frame',  transform: frame('» ', ' «') },
  { id: 'frame-rainbow',   name: '•°*"˜ Rainbow',        preview: '•°*"˜ Fancy ˜"*°•', category: 'frame', transform: frame('•°*"˜.•°*"˜ ', ' ˜"*°•.˜"*°•') },
]

// ─── Alphabet A–Z ─────────────────────────────────────────────────────────────

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// ─── Component ────────────────────────────────────────────────────────────────

type Tab = 'convert' | 'alphabet'
type CatFilter = 'all' | 'font' | 'effect' | 'symbol' | 'frame'

const EXAMPLES = ['Hello', 'Love', 'Beauty', 'Dream', 'Magic', 'World']

export function FancyLettersTool() {
  const [input, setInput] = useState('')
  const [tab, setTab] = useState<Tab>('convert')
  const [catFilter, setCatFilter] = useState<CatFilter>('all')
  const [copied, setCopied] = useState<string | null>(null)
  const [alphabetStyle, setAlphabetStyle] = useState('bold')

  const displayText = input.trim() || 'Fancy'

  const visibleStyles = useMemo(() =>
    FANCY_STYLES.filter(s => catFilter === 'all' || s.category === catFilter),
    [catFilter]
  )

  const results = useMemo(() =>
    visibleStyles.map(s => ({ ...s, output: s.transform(displayText) })),
    [visibleStyles, displayText]
  )

  const selectedStyle = FANCY_STYLES.find(s => s.id === alphabetStyle) ?? FANCY_STYLES[0]

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
      toast({ title: 'Copied!', description: 'Fancy text copied to clipboard.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Tabs */}
      <div className="flex gap-2 border-b">
        {([
          { id: 'convert', label: '✏️ Convert Text' },
          { id: 'alphabet', label: '🔤 Alphabet Chart' },
        ] as { id: Tab; label: string }[]).map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`pb-2 px-1 text-sm font-semibold border-b-2 transition-all ${
              tab === t.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'convert' && (
        <>
          {/* Examples */}
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                onClick={() => setInput(ex)}
                className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
              >
                {ex}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Text</label>
            <input
              type="text"
              placeholder="Type anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {([
              { id: 'all', label: `All (${FANCY_STYLES.length})` },
              { id: 'font', label: `Font Styles (${FANCY_STYLES.filter(s => s.category === 'font').length})` },
              { id: 'effect', label: `Effects (${FANCY_STYLES.filter(s => s.category === 'effect').length})` },
              { id: 'symbol', label: `Symbols (${FANCY_STYLES.filter(s => s.category === 'symbol').length})` },
              { id: 'frame', label: `Frames (${FANCY_STYLES.filter(s => s.category === 'frame').length})` },
            ] as { id: CatFilter; label: string }[]).map(f => (
              <button
                key={f.id}
                onClick={() => setCatFilter(f.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  catFilter === f.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-2 gap-3">
            {results.map(style => (
              <div
                key={style.id}
                className="group p-4 rounded-xl border bg-gradient-to-br from-muted/20 to-muted/5 hover:border-primary/30 hover:from-primary/5 hover:to-primary/10 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {style.name}
                  </span>
                  <button
                    onClick={() => copy(style.output, style.id)}
                    className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full transition-all flex-shrink-0 ${
                      copied === style.id
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    {copied === style.id
                      ? <><Check className="w-2.5 h-2.5" /> Copied</>
                      : <><Copy className="w-2.5 h-2.5" /> Copy</>}
                  </button>
                </div>
                <p
                  className="text-base font-mono break-all leading-relaxed cursor-pointer select-all"
                  onClick={() => copy(style.output, style.id)}
                >
                  {style.output}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === 'alphabet' && (
        <>
          {/* Style selector */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Style</label>
            <select
              value={alphabetStyle}
              onChange={e => setAlphabetStyle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {FANCY_STYLES.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Alphabet grid — Uppercase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                A–Z Uppercase — {selectedStyle.name}
              </h3>
              <button
                onClick={() => copy(ALPHABET_UPPER.map(c => selectedStyle.transform(c)).join(' '), 'alpha-upper')}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
              >
                <Copy className="w-3 h-3" /> Copy row
              </button>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
              {ALPHABET_UPPER.map(letter => (
                <button
                  key={letter}
                  onClick={() => copy(selectedStyle.transform(letter), `alpha-${letter}`)}
                  className="p-2 rounded-xl border bg-muted/10 hover:bg-primary/10 hover:border-primary/30 transition-all text-center group"
                >
                  <p className="text-[10px] text-muted-foreground">{letter}</p>
                  <p className="text-lg font-mono leading-tight mt-0.5">{selectedStyle.transform(letter)}</p>
                  <p className="text-[9px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">copy</p>
                </button>
              ))}
            </div>
          </div>

          {/* Alphabet grid — Lowercase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                a–z Lowercase
              </h3>
              <button
                onClick={() => copy(ALPHABET.map(c => selectedStyle.transform(c)).join(' '), 'alpha-lower')}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
              >
                <Copy className="w-3 h-3" /> Copy row
              </button>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
              {ALPHABET.map(letter => (
                <button
                  key={letter}
                  onClick={() => copy(selectedStyle.transform(letter), `alpha-lo-${letter}`)}
                  className="p-2 rounded-xl border bg-muted/10 hover:bg-primary/10 hover:border-primary/30 transition-all text-center group"
                >
                  <p className="text-[10px] text-muted-foreground">{letter}</p>
                  <p className="text-lg font-mono leading-tight mt-0.5">{selectedStyle.transform(letter)}</p>
                  <p className="text-[9px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">copy</p>
                </button>
              ))}
            </div>
          </div>

          {/* All styles quick reference */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              All Styles — A to Z Preview
            </h3>
            <div className="space-y-2">
              {FANCY_STYLES.map(s => (
                <div key={s.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
                  <span className="text-[10px] text-muted-foreground w-28 flex-shrink-0 font-medium">{s.name}</span>
                  <span className="font-mono text-sm break-all flex-1">
                    {ALPHABET_UPPER.slice(0, 10).map(c => s.transform(c)).join('')}
                  </span>
                  <button
                    onClick={() => copy(ALPHABET_UPPER.map(c => s.transform(c)).join('') + ALPHABET.map(c => s.transform(c)).join(''), `ref-${s.id}`)}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex-shrink-0 flex items-center gap-1"
                  >
                    {copied === `ref-${s.id}` ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
