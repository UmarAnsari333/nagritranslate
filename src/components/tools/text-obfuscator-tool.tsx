'use client'

import { useState } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'

// ─── Obfuscation methods ─────────────────────────────────────────────────────

function rot13(t: string) {
  return t.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base)
  })
}

function rot47(t: string) {
  return t.replace(/[!-~]/g, c => String.fromCharCode(33 + ((c.charCodeAt(0) - 33 + 47) % 94)))
}

function caesar(t: string, shift: number) {
  return t.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base)
  })
}

function leetspeak(t: string) {
  const map: Record<string, string> = { a:'4',e:'3',i:'1',o:'0',s:'5',t:'7',b:'8',g:'9',l:'1' }
  return t.split('').map(c => map[c.toLowerCase()] ?? c).join('')
}

function reverseText(t: string) {
  return t.split('').reverse().join('')
}

function reverseWords(t: string) {
  return t.split(' ').reverse().join(' ')
}

function base64Encode(t: string) {
  try { return btoa(unescape(encodeURIComponent(t))) } catch { return btoa(t) }
}

function toBinary(t: string) {
  return t.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ')
}

function toHex(t: string) {
  return t.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ')
}

function toMorse(t: string) {
  const map: Record<string, string> = {
    a:'.-',b:'-...',c:'-.-.',d:'-..',e:'.',f:'..-.',g:'--.',h:'....',i:'..',j:'.---',
    k:'-.-',l:'.-..',m:'--',n:'-.',o:'---',p:'.--.',q:'--.-',r:'.-.',s:'...',t:'-',
    u:'..-',v:'...-',w:'.--',x:'-..-',y:'-.--',z:'--..',
    '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....',
    '6':'-....','7':'--...','8':'---..','9':'----.','.':'.-.-.-',',':'--..--',
    '?':'..--..','!':'-.-.--',' ':'/'
  }
  return t.toLowerCase().split('').map(c => map[c] ?? c).join(' ')
}

function homoglyph(t: string) {
  const map: Record<string, string> = {
    a:'а',e:'е',i:'і',o:'о',p:'р',c:'с',x:'х',y:'у',
    A:'А',E:'Е',I:'І',O:'О',P:'Р',C:'С',X:'Х',B:'В',H:'Н',M:'М',T:'Т',
  }
  return t.split('').map(c => map[c] ?? c).join('')
}

function charSub(t: string) {
  const map: Record<string, string> = {
    a:'@',b:'|3',c:'(',d:'|)',e:'3',f:'|=',g:'9',h:'|-|',i:'!',j:'_|',k:'|<',
    l:'|',m:'|v|',n:'|\\|',o:'0',p:'|°',q:'(,)',r:'|2',s:'$',t:'+',u:'|_|',
    v:'\\/',w:'\\/\\/',x:'><',y:'`/',z:'2',
    A:'@',B:'|3',C:'(',E:'3',G:'9',I:'!',L:'|',O:'0',S:'$',T:'+',X:'><',Z:'2'
  }
  return t.split('').map(c => map[c] ?? c).join('')
}

function upsideDown(t: string) {
  const map: Record<string, string> = {
    a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',k:'ʞ',l:'l',
    m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',u:'n',v:'ʌ',w:'ʍ',x:'x',
    y:'ʎ',z:'z',A:'∀',B:'ꓭ',C:'Ɔ',D:'ꓷ',E:'Ǝ',F:'Ⅎ',G:'פ',H:'H',I:'I',J:'ſ',
    K:'ꓘ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ꓤ',S:'S',T:'┴',U:'∩',V:'Λ',
    W:'M',X:'X',Y:'⅄',Z:'Z',' ':' ','!':'¡','?':'¿','.':'˙',',':'\'',
  }
  return t.split('').map(c => map[c] ?? c).reverse().join('')
}

function zalgoLight(t: string) {
  const above = ['\u0300','\u0301','\u0302','\u0303','\u0308','\u030a','\u030b','\u030c']
  const below = ['\u0316','\u0317','\u0318','\u0319','\u031c','\u031d','\u031e','\u031f']
  return t.split('').map(c => {
    if (c === ' ') return c
    return c + above[Math.floor(Math.random() * above.length)] + below[Math.floor(Math.random() * below.length)]
  }).join('')
}

function strikethrough(t: string) {
  return t.split('').map(c => c === ' ' ? ' ' : c + '\u0336').join('')
}

function underline(t: string) {
  return t.split('').map(c => c === ' ' ? ' ' : c + '\u0332').join('')
}

function pigLatin(t: string) {
  const vowels = 'aeiouAEIOU'
  return t.split(' ').map(word => {
    if (!word.match(/[a-zA-Z]/)) return word
    if (vowels.includes(word[0])) return word + 'yay'
    const match = word.match(/^[^aeiouAEIOU]+/)
    if (!match) return word
    const consonants = match[0]
    return word.slice(consonants.length) + consonants + 'ay'
  }).join(' ')
}

function invisibleText(t: string) {
  return t.split('').join('\u200b')
}

function scrambleWords(t: string) {
  return t.split(' ').map(word => {
    if (word.length <= 3) return word
    const mid = word.slice(1, -1).split('')
    for (let i = mid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mid[i], mid[j]] = [mid[j], mid[i]]
    }
    return word[0] + mid.join('') + word[word.length - 1]
  }).join(' ')
}

function atbash(t: string) {
  return t.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97
    return String.fromCharCode(base + (25 - (c.charCodeAt(0) - base)))
  })
}

function nato(t: string) {
  const map: Record<string, string> = {
    a:'Alpha',b:'Bravo',c:'Charlie',d:'Delta',e:'Echo',f:'Foxtrot',g:'Golf',
    h:'Hotel',i:'India',j:'Juliet',k:'Kilo',l:'Lima',m:'Mike',n:'November',
    o:'Oscar',p:'Papa',q:'Quebec',r:'Romeo',s:'Sierra',t:'Tango',u:'Uniform',
    v:'Victor',w:'Whiskey',x:'X-ray',y:'Yankee',z:'Zulu',' ':'/'
  }
  return t.toLowerCase().split('').map(c => map[c] ?? c.toUpperCase()).join(' ')
}

// ─── Method definitions ───────────────────────────────────────────────────────

interface Method {
  id: string
  name: string
  category: string
  desc: string
  transform: (t: string) => string
  reversible?: boolean
  note?: string
}

const METHODS: Method[] = [
  // Ciphers
  { id: 'rot13',     name: 'ROT13',           category: 'Cipher',    desc: 'Shifts letters by 13 — apply twice to decode', reversible: true, transform: rot13 },
  { id: 'rot47',     name: 'ROT47',           category: 'Cipher',    desc: 'Shifts all printable ASCII chars by 47', reversible: true, transform: rot47 },
  { id: 'caesar3',   name: 'Caesar Cipher',   category: 'Cipher',    desc: 'Classic shift-3 cipher (A→D, B→E…)', reversible: true, transform: t => caesar(t, 3) },
  { id: 'atbash',    name: 'Atbash Cipher',   category: 'Cipher',    desc: 'Reverses the alphabet (A↔Z, B↔Y…)', reversible: true, transform: atbash },
  // Encoding
  { id: 'base64',    name: 'Base64',          category: 'Encoding',  desc: 'Standard Base64 encoding', transform: base64Encode },
  { id: 'binary',    name: 'Binary',          category: 'Encoding',  desc: '8-bit binary for each character', transform: toBinary },
  { id: 'hex',       name: 'Hexadecimal',     category: 'Encoding',  desc: 'Hex value for each character', transform: toHex },
  { id: 'morse',     name: 'Morse Code',      category: 'Encoding',  desc: 'International Morse code', transform: toMorse },
  { id: 'nato',      name: 'NATO Alphabet',   category: 'Encoding',  desc: 'Spells out each letter with NATO words', transform: nato },
  // Style
  { id: 'leet',      name: 'Leetspeak',       category: 'Style',     desc: 'Replaces letters with numbers/symbols (3→e, 4→a…)', transform: leetspeak },
  { id: 'charsub',   name: 'Char Substitution', category: 'Style',   desc: 'Replaces letters with ASCII art symbols', transform: charSub },
  { id: 'homoglyph', name: 'Homoglyphs',      category: 'Style',     desc: 'Replaces letters with Cyrillic lookalikes', note: 'Looks identical but uses different Unicode chars', transform: homoglyph },
  { id: 'upside',    name: 'Upside Down',     category: 'Style',     desc: 'Flips text upside down and reverses it', transform: upsideDown },
  { id: 'strike',    name: 'Strikethrough',   category: 'Style',     desc: 'Adds strikethrough to each character', transform: strikethrough },
  { id: 'under',     name: 'Underline',       category: 'Style',     desc: 'Adds underline to each character', transform: underline },
  // Transform
  { id: 'reverse',   name: 'Reverse Text',    category: 'Transform', desc: 'Reverses all characters', reversible: true, transform: reverseText },
  { id: 'revwords',  name: 'Reverse Words',   category: 'Transform', desc: 'Reverses word order', reversible: true, transform: reverseWords },
  { id: 'piglatin',  name: 'Pig Latin',       category: 'Transform', desc: 'Moves consonants to end and adds -ay/-yay', transform: pigLatin },
  { id: 'scramble',  name: 'Word Scramble',   category: 'Transform', desc: 'Scrambles middle letters, keeps first & last', note: 'Humans can still read scrambled text!', transform: scrambleWords },
  { id: 'zalgo',     name: 'Zalgo (Light)',   category: 'Transform', desc: 'Adds creepy diacritic marks above/below', transform: zalgoLight },
  { id: 'invisible', name: 'Invisible Spaces', category: 'Transform', desc: 'Inserts zero-width spaces between each character', note: 'Text looks normal but has hidden chars', transform: invisibleText },
]

const CATEGORIES = ['All', 'Cipher', 'Encoding', 'Style', 'Transform']

// ─── Component ───────────────────────────────────────────────────────────────

export function TextObfuscatorTool() {
  const [input, setInput] = useState('Hello World')
  const [category, setCategory] = useState('All')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filtered = METHODS.filter(m => category === 'All' || m.category === category)

  function copy(id: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  const catColors: Record<string, string> = {
    Cipher:    'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    Encoding:  'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    Style:     'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    Transform: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  }

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Input */}
      <div>
        <label className="block text-sm font-semibold mb-2">Your Text</label>
        <div className="relative">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            rows={3}
            placeholder="Type or paste your text here…"
            className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition pr-12"
          />
          <button
            onClick={() => setInput('')}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition"
            title="Clear"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{input.length} characters · {input.trim() ? input.trim().split(/\s+/).length : 0} words</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              category === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-muted/20 text-muted-foreground hover:text-foreground border-muted/40'
            }`}
          >
            {cat}
            {cat !== 'All' && (
              <span className="ml-1 opacity-60">({METHODS.filter(m => m.category === cat).length})</span>
            )}
          </button>
        ))}
      </div>

      {/* Results grid */}
      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map(method => {
          const output = input ? method.transform(input) : '—'
          const isCopied = copiedId === method.id
          return (
            <div key={method.id} className="group p-4 bg-muted/10 rounded-xl border border-muted/30 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold">{method.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${catColors[method.category]}`}>
                      {method.category}
                    </span>
                    {method.reversible && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 shrink-0">reversible</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{method.desc}</p>
                </div>
                <button
                  onClick={() => copy(method.id, output)}
                  disabled={!input}
                  className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                    isCopied
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40 disabled:cursor-not-allowed'
                  }`}
                >
                  {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="mt-2 px-3 py-2 bg-background rounded-lg border text-sm break-all leading-relaxed font-mono min-h-[2.5rem] flex items-center">
                {input ? (
                  <span>{output}</span>
                ) : (
                  <span className="text-muted-foreground/50 italic text-xs">type something above…</span>
                )}
              </div>

              {method.note && (
                <p className="text-[10px] text-muted-foreground mt-1.5 flex items-center gap-1">
                  <span>💡</span> {method.note}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Info */}
      <div className="p-3 bg-muted/10 rounded-xl border text-xs text-muted-foreground space-y-1">
        <p className="font-semibold text-foreground">How it works</p>
        <p>Each method transforms your text differently. <strong>Ciphers</strong> shift characters by a pattern. <strong>Encoding</strong> converts text to another format (Binary, Hex, Morse). <strong>Style</strong> swaps characters for lookalikes or decorators. <strong>Transform</strong> restructures the text itself.</p>
        <p className="text-[11px]">Reversible methods (marked in green) can decode back to the original using the same tool.</p>
      </div>
    </div>
  )
}
