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

const FLIP_MAP: Record<string, string> = {
  a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',
  k:'ʞ',l:'l',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',
  u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',
  A:'∀',B:'ᗺ',C:'Ɔ',D:'ᗡ',E:'Ǝ',F:'Ⅎ',G:'⅁',H:'H',I:'I',J:'ſ',
  K:'ʞ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ɹ',S:'S',T:'┴',
  U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',
}

// ─── Transform functions ──────────────────────────────────────────────────────

const toBold         = (t: string) => block(t, 0x1D400, 0x1D41A)
const toBoldItalic   = (t: string) => block(t, 0x1D468, 0x1D482)
const toBoldScript   = (t: string) => block(t, 0x1D4D0, 0x1D4EA)
const toBoldFraktur  = (t: string) => block(t, 0x1D56C, 0x1D586)
const toSansBold     = (t: string) => block(t, 0x1D5D4, 0x1D5EE)
const toSansItalic   = (t: string) => block(t, 0x1D608, 0x1D622)
const toSansBoldItalic = (t: string) => block(t, 0x1D63C, 0x1D656)
const toMonospace    = (t: string) => block(t, 0x1D670, 0x1D68A)
const toCircled      = (t: string) => block(t, 0x24B6, 0x24D0)
const toFullwidth    = (t: string) => block(t, 0xFF21, 0xFF41)
const toScript       = (t: string) => [...t].map(c => SCRIPT_MAP[c] ?? c).join('')
const toFraktur      = (t: string) => [...t].map(c => FRAKTUR_MAP[c] ?? c).join('')
const toDoubleStruck = (t: string) => [...t].map(c => DOUBLE_STRUCK_MAP[c] ?? c).join('')
const toSmallCaps    = (t: string) => [...t].map(c => SMALL_CAPS_MAP[c] ?? c).join('')
const toSuperscript  = (t: string) => [...t].map(c => SUPERSCRIPT_MAP[c] ?? c).join('')
const toStrikethrough = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0336').join('')
const toUnderline    = (t: string) => [...t].map(c => c === ' ' ? c : c + '\u0332').join('')
const toUpsideDown   = (t: string) => [...t].map(c => FLIP_MAP[c] ?? c).reverse().join('')
const toUppercase    = (t: string) => t.toUpperCase()

// ─── Style definitions ────────────────────────────────────────────────────────

type Category = 'all' | 'text' | 'frames' | 'symbols' | 'combined'

interface NameStyle {
  id: string
  label: string
  category: Exclude<Category, 'all'>
  generate: (name: string) => string
}

const STYLES: NameStyle[] = [
  // ── Text Styles ────────────────────────────────────────────────────────────
  { id: 'bold',             label: '𝐁𝐨𝐥𝐝',              category: 'text', generate: toBold },
  { id: 'bold-italic',      label: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄',       category: 'text', generate: toBoldItalic },
  { id: 'script',           label: '𝒮𝒸𝓇𝒾𝓅𝓉',             category: 'text', generate: toScript },
  { id: 'bold-script',      label: '𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽',       category: 'text', generate: toBoldScript },
  { id: 'fraktur',          label: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',             category: 'text', generate: toFraktur },
  { id: 'bold-fraktur',     label: '𝕭𝖔𝖑𝖉 𝕲𝖔𝖙𝖍𝖎𝖈',        category: 'text', generate: toBoldFraktur },
  { id: 'double-struck',    label: '𝔻𝕠𝕦𝕓𝕝𝕖',              category: 'text', generate: toDoubleStruck },
  { id: 'small-caps',       label: 'ꜱᴍᴀʟʟ ᴄᴀᴘꜱ',         category: 'text', generate: toSmallCaps },
  { id: 'sans-bold',        label: '𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱',           category: 'text', generate: toSansBold },
  { id: 'sans-italic',      label: '𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤',         category: 'text', generate: toSansItalic },
  { id: 'sans-bold-italic', label: '𝙎𝙖𝙣𝙨 𝘽𝙤𝙡𝙙',           category: 'text', generate: toSansBoldItalic },
  { id: 'monospace',        label: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',           category: 'text', generate: toMonospace },
  { id: 'fullwidth',        label: 'Ｆｕｌｌｗｉｄｔｈ',        category: 'text', generate: toFullwidth },
  { id: 'circled',          label: 'Ⓒⓘⓡⓒⓛⓔⓓ',            category: 'text', generate: toCircled },
  { id: 'superscript',      label: 'ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ',         category: 'text', generate: toSuperscript },
  { id: 'upside-down',      label: 'uʍop ǝpᴉsdn',          category: 'text', generate: toUpsideDown },
  { id: 'strikethrough',    label: 'S̶t̶r̶i̶k̶e̶',             category: 'text', generate: toStrikethrough },
  { id: 'underline',        label: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲',           category: 'text', generate: toUnderline },
  { id: 'uppercase',        label: 'UPPERCASE',             category: 'text', generate: toUppercase },

  // ── Decorative Frames ──────────────────────────────────────────────────────
  { id: 'f-dragon',     label: '꧁༺ ༻꧂',       category: 'frames', generate: n => `꧁༺${n}༻꧂` },
  { id: 'f-jp',         label: '『 』',          category: 'frames', generate: n => `『${n}』` },
  { id: 'f-wide',       label: '【 】',          category: 'frames', generate: n => `【${n}】` },
  { id: 'f-bracket',    label: '〖 〗',          category: 'frames', generate: n => `〖${n}〗` },
  { id: 'f-angle',      label: '「 」',          category: 'frames', generate: n => `「${n}」` },
  { id: 'f-french',     label: '« »',            category: 'frames', generate: n => `«${n}»` },
  { id: 'f-chevron',    label: '‹ ›',            category: 'frames', generate: n => `‹${n}›` },
  { id: 'f-guillemet',  label: '❮ ❯',            category: 'frames', generate: n => `❮${n}❯` },
  { id: 'f-block',      label: '░▒▓ ▓▒░',        category: 'frames', generate: n => `░▒▓${n}▓▒░` },
  { id: 'f-star',       label: '꧁✦ ✦꧂',         category: 'frames', generate: n => `꧁✦${n}✦꧂` },
  { id: 'f-starburst',  label: '★彡 彡★',         category: 'frames', generate: n => `★彡${n}彡★` },
  { id: 'f-double',     label: '⟦ ⟧',            category: 'frames', generate: n => `⟦${n}⟧` },
  { id: 'f-infinity',   label: '∞ ∞',            category: 'frames', generate: n => `∞${n}∞` },
  { id: 'f-cross',      label: '乂 乂',           category: 'frames', generate: n => `乂${n}乂` },
  { id: 'f-tilde',      label: '~~ ~~',           category: 'frames', generate: n => `~~${n}~~` },
  { id: 'f-curly',      label: '{ }',             category: 'frames', generate: n => `{${n}}` },
  { id: 'f-pipes',      label: '| |',             category: 'frames', generate: n => `|${n}|` },
  { id: 'f-sparkle',    label: '✨ ✨',            category: 'frames', generate: n => `✨${n}✨` },
  { id: 'f-tsu',        label: 'ツ ツ',           category: 'frames', generate: n => `ツ${n}ツ` },
  { id: 'f-dharma',     label: '༒ ༒',             category: 'frames', generate: n => `༒${n}༒` },
  { id: 'f-dotdot',     label: '··· ···',         category: 'frames', generate: n => `···${n}···` },
  { id: 'f-dash',       label: '— —',             category: 'frames', generate: n => `—${n}—` },
  { id: 'f-wave',       label: '〰 〰',            category: 'frames', generate: n => `〰${n}〰` },
  { id: 'f-round',      label: '〔 〕',           category: 'frames', generate: n => `〔${n}〕` },
  { id: 'f-vip',        label: '『ᴠɪᴘ』',         category: 'frames', generate: n => `『ᴠɪᴘ』${n}` },
  { id: 'f-fire-d',     label: '꧁꧂',             category: 'frames', generate: n => `꧁${n}꧂` },
  { id: 'f-sparkle2',   label: '・゜゜・ ・゜゜・', category: 'frames', generate: n => `・゜゜・${n}・゜゜・` },

  // ── Symbol Decorated ───────────────────────────────────────────────────────
  { id: 's-lightning',  label: '⚡ ⚡',    category: 'symbols', generate: n => `⚡${n}⚡` },
  { id: 's-fire',       label: '🔥 🔥',    category: 'symbols', generate: n => `🔥${n}🔥` },
  { id: 's-skull',      label: '☠ ☠',     category: 'symbols', generate: n => `☠${n}☠` },
  { id: 's-crown',      label: '👑 👑',    category: 'symbols', generate: n => `👑${n}👑` },
  { id: 's-star',       label: '★ ★',     category: 'symbols', generate: n => `★${n}★` },
  { id: 's-sword',      label: '⚔ ⚔',    category: 'symbols', generate: n => `⚔${n}⚔` },
  { id: 's-diamond',    label: '♦ ♦',     category: 'symbols', generate: n => `♦${n}♦` },
  { id: 's-king',       label: '♔ ♔',     category: 'symbols', generate: n => `♔${n}♔` },
  { id: 's-shield',     label: '🛡 🛡',    category: 'symbols', generate: n => `🛡${n}🛡` },
  { id: 's-globe',      label: '🌍 🌍',    category: 'symbols', generate: n => `🌍${n}🌍` },
  { id: 's-rose',       label: '🌹 🌹',    category: 'symbols', generate: n => `🌹${n}🌹` },
  { id: 's-moon',       label: '🌙 🌙',    category: 'symbols', generate: n => `🌙${n}🌙` },
  { id: 's-target',     label: '🎯 🎯',    category: 'symbols', generate: n => `🎯${n}🎯` },
  { id: 's-ghost',      label: '👻 👻',    category: 'symbols', generate: n => `👻${n}👻` },
  { id: 's-yin',        label: '☯ ☯',     category: 'symbols', generate: n => `☯${n}☯` },
  { id: 's-fleur',      label: '⚜ ⚜',    category: 'symbols', generate: n => `⚜${n}⚜` },
  { id: 's-spade',      label: '♠ ♠',     category: 'symbols', generate: n => `♠${n}♠` },
  { id: 's-flower',     label: '✿ ✿',     category: 'symbols', generate: n => `✿${n}✿` },
  { id: 's-star2',      label: '✦ ✦',     category: 'symbols', generate: n => `✦${n}✦` },
  { id: 's-check',      label: '✪ ✪',     category: 'symbols', generate: n => `✪${n}✪` },
  { id: 's-alien',      label: '👽 👽',    category: 'symbols', generate: n => `👽${n}👽` },
  { id: 's-demon',      label: '😈 😈',    category: 'symbols', generate: n => `😈${n}😈` },
  { id: 's-blood',      label: '🩸 🩸',    category: 'symbols', generate: n => `🩸${n}🩸` },
  { id: 's-vip-pre',    label: '「VIP」',   category: 'symbols', generate: n => `「VIP」${n}` },
  { id: 's-pro-pre',    label: '「PRO」',   category: 'symbols', generate: n => `「PRO」${n}` },
  { id: 's-god-pre',    label: '「GOD」',   category: 'symbols', generate: n => `「GOD」${n}` },
  { id: 's-yt-pre',     label: 'ⓨⓣ',      category: 'symbols', generate: n => `ⓨⓣ ${n}` },
  { id: 's-swag',       label: '$ $',      category: 'symbols', generate: n => `$${n}$` },
  { id: 's-omega',      label: 'Ω Ω',      category: 'symbols', generate: n => `Ω${n}Ω` },

  // ── Combined (text style + frame) ──────────────────────────────────────────
  { id: 'c-dragon-script',    label: '꧁𝓝𝓪𝓶𝓮꧂',    category: 'combined', generate: n => `꧁${toBoldScript(n)}꧂` },
  { id: 'c-dragon-fraktur',   label: '꧁༺𝕯𝖆𝖗𝖐༻꧂',  category: 'combined', generate: n => `꧁༺${toBoldFraktur(n)}༻꧂` },
  { id: 'c-jp-bold',          label: '『𝗡𝗮𝗺𝗲』',     category: 'combined', generate: n => `『${toSansBold(n)}』` },
  { id: 'c-jp-script',        label: '『𝒩𝒶𝓂𝑒』',     category: 'combined', generate: n => `『${toScript(n)}』` },
  { id: 'c-star-gothic',      label: '★𝔑𝔞𝔪𝔢★',     category: 'combined', generate: n => `★${toFraktur(n)}★` },
  { id: 'c-fire-bold',        label: '🔥𝐍𝐚𝐦𝐞🔥',     category: 'combined', generate: n => `🔥${toBold(n)}🔥` },
  { id: 'c-lightning-bold',   label: '⚡𝗡𝗮𝗺𝗲⚡',     category: 'combined', generate: n => `⚡${toSansBold(n)}⚡` },
  { id: 'c-crown-script',     label: '👑𝒩𝒶𝓂𝑒👑',     category: 'combined', generate: n => `👑${toScript(n)}👑` },
  { id: 'c-skull-fraktur',    label: '☠𝔑𝔞𝔪𝔢☠',     category: 'combined', generate: n => `☠${toFraktur(n)}☠` },
  { id: 'c-block-caps',       label: '░▒▓𝕹𝖆𝖒𝖊▓▒░',  category: 'combined', generate: n => `░▒▓${toBoldFraktur(n)}▓▒░` },
  { id: 'c-starburst-bold',   label: '★彡𝗡𝗮𝗺𝗲彡★',  category: 'combined', generate: n => `★彡${toSansBold(n)}彡★` },
  { id: 'c-wide-double',      label: '【𝔸𝕓𝕔】',       category: 'combined', generate: n => `【${toDoubleStruck(n)}】` },
  { id: 'c-vip-bold',         label: '『ᴠɪᴘ』𝗡𝗮𝗺𝗲',  category: 'combined', generate: n => `『ᴠɪᴘ』${toSansBold(n)}` },
  { id: 'c-god-script',       label: '「GOD」𝒩𝒶𝓂𝑒',  category: 'combined', generate: n => `「GOD」${toBoldScript(n)}` },
  { id: 'c-sword-bold-it',    label: '⚔𝑵𝒂𝒎𝒆⚔',      category: 'combined', generate: n => `⚔${toBoldItalic(n)}⚔` },
  { id: 'c-yin-small',        label: '☯ꜱᴍᴀʟʟ☯',      category: 'combined', generate: n => `☯${toSmallCaps(n)}☯` },
  { id: 'c-fleur-mono',       label: '⚜𝙽𝚊𝚖𝚎⚜',       category: 'combined', generate: n => `⚜${toMonospace(n)}⚜` },
  { id: 'c-dharma-script',    label: '༒𝒩𝒶𝓂𝑒༒',       category: 'combined', generate: n => `༒${toScript(n)}༒` },
  { id: 'c-sparkle-bold',     label: '✨𝐍𝐚𝐦𝐞✨',       category: 'combined', generate: n => `✨${toBold(n)}✨` },
  { id: 'c-moon-script',      label: '🌙𝒩𝒶𝓂𝑒🌙',       category: 'combined', generate: n => `🌙${toScript(n)}🌙` },
]

// ─── Component ────────────────────────────────────────────────────────────────

const CATEGORIES: { id: Category; label: string; count?: number }[] = [
  { id: 'all', label: 'All' },
  { id: 'text', label: 'Text Styles' },
  { id: 'frames', label: 'Frames' },
  { id: 'symbols', label: 'Symbols' },
  { id: 'combined', label: 'Combined' },
]

const EXAMPLES = ['King', 'Shadow', 'Dragon', 'Ghost', 'Viper', 'Zeus']
const AGAR_LIMIT = 15

export function AgarioNamesTool() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<Category>('all')
  const [copied, setCopied] = useState<string | null>(null)

  const displayName = name.trim() || 'YourName'

  const visibleStyles = useMemo(() =>
    STYLES.filter(s => category === 'all' || s.category === category),
    [category]
  )

  const generated = useMemo(() =>
    visibleStyles.map(s => ({
      ...s,
      output: s.generate(displayName),
    })),
    [visibleStyles, displayName]
  )

  const charCount = [...name].length
  const isOverLimit = charCount > AGAR_LIMIT

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
      toast({ title: 'Copied!', description: 'Name copied — paste it into Agar.io.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Quick examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Quick examples:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex}
              onClick={() => setName(ex)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Name input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Name / Text</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={40}
            className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 pr-20"
          />
          <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono px-2 py-0.5 rounded-full ${
            isOverLimit
              ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
              : 'bg-muted text-muted-foreground'
          }`}>
            {charCount}/{AGAR_LIMIT}
          </span>
        </div>
        {isOverLimit && (
          <p className="text-xs text-red-500">⚠ Agar.io has a ~15 character limit. Some styles may be cut off in-game.</p>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              category === cat.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            {cat.label}
            <span className="ml-1.5 opacity-60">
              {cat.id === 'all'
                ? STYLES.length
                : STYLES.filter(s => s.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Results grid */}
      <div className="grid sm:grid-cols-2 gap-3">
        {generated.map(style => (
          <div
            key={style.id}
            className="group p-4 rounded-xl border bg-gradient-to-br from-muted/20 to-muted/5 hover:border-primary/30 hover:from-primary/5 hover:to-primary/10 transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                {style.label}
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
                  : <><Copy className="w-2.5 h-2.5" /> Copy</>
                }
              </button>
            </div>
            <p
              className="text-base font-mono break-all leading-relaxed cursor-pointer select-all"
              onClick={() => copy(style.output, style.id)}
              title="Click to copy"
            >
              {style.output}
            </p>
          </div>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-xs text-muted-foreground">
        Showing {generated.length} styles — click any name to copy it
      </p>
    </div>
  )
}
