'use client'

import { useState, useMemo } from 'react'
import { Copy, Check, ArrowLeftRight, X } from 'lucide-react'

// ─── Translation Engine ───────────────────────────────────────────────────────
// Uses placeholder technique: phrases are replaced first and MARKED so the
// word-level pass cannot touch them — prevents "ngl i lowkey think" bugs.

const MARK_S = '\x01'
const MARK_E = '\x02'

function esc(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Phrases — longest first so "did an amazing job" beats "amazing"
// Format: [lowercasedPattern, replacement]
const PHRASES: [string, string][] = [
  // Performance
  ['did an amazing job',    'literally ate that'],
  ['did a great job',       'absolutely ate'],
  ['did a good job',        'slayed that'],
  ['you did amazing',       'u ate fr'],
  ['you did great',         'u literally ate'],
  ['well done',             'u ate and left no crumbs'],
  ['great job',             'u slayed bestie'],
  ['good job',              'u ate'],
  // Openers / hedges (keep these SHORT — they replace the whole phrase)
  ['to be honest',          'ngl'],
  ['in my opinion',         'ngl'],
  ['i feel like',           'lowkey'],
  ['i think',               'ngl'],
  ['i believe',             'ngl'],
  ["i don't know",          'idk fr'],
  ["i dont know",           'idk fr'],
  ["i don't care",          'not my prob bestie'],
  ["i dont care",           'not my prob bestie'],
  // Emotions
  ["i'm so excited",        "i'm highkey hyped rn"],
  ["i'm excited",           "highkey hyped fr"],
  ["i am excited",          "so hyped rn"],
  ["i'm so happy",          "i'm thriving fr"],
  ["i'm happy",             "living my best life"],
  ["i am happy",            "in my happy era"],
  ["i'm so tired",          "i'm dead fr"],
  ["i'm tired",             "i'm cooked fr"],
  ["i am tired",            "cooked fr"],
  ["i'm bored",             "this is so mid"],
  ["i am bored",            "this is mid fr"],
  ["i'm sad",               "in my flop era ngl"],
  ["i am sad",              "not okay fr"],
  ["i'm angry",             "big mad rn"],
  // Agreement
  ['i agree',               'facts, bet'],
  ['i disagree',            'nah fr'],
  ["you're right",          'facts no cap'],
  ['you are right',         'no cap, facts'],
  ["that's true",           'no cap'],
  ['that is true',          'facts'],
  // Reactions
  ['oh my god',             'omg bestie 😭'],
  ["that's funny",          'sending me 💀'],
  ['that is funny',         "i'm dead 💀"],
  ["that's amazing",        'that literally ate fr'],
  ['that is amazing',       "that's bussin no cap"],
  ["that's bad",            "that's an L ngl"],
  ['that is bad',           'L behavior fr'],
  ["that's weird",          'lowkey sus'],
  ['that is weird',         'giving NPC energy'],
  ['are you serious',       'wait fr?? no way'],
  ['what do you mean',      'wait huh 😭'],
  // Greetings
  ['good morning',          'gm bestie'],
  ['good night',            'gn bestie, slay in ur sleep'],
  ['how are you',           'u good?'],
  ["what's up",             "what's the vibe"],
  ['see you later',         'later bestie'],
  ['goodbye',               'bye bestie'],
  ['thank you',             'tysm 🙏'],
  ['you\'re welcome',       'no worries bestie'],
  // Misc
  ["i don't like",          'i get the ick from'],
  ['i love',                "i'm obsessed with"],
  ['i hate',                'the ick fr with'],
  ['i need help',           'bestie i need backup fr'],
  ['go outside',            'touch grass bestie'],
  ["i'm obsessed",          "i'm so delulu about this"],
  ['i am obsessed',         'living rent free in my head'],
  ['working hard',          'grinding fr'],
  ['do your best',          'understood the assignment'],
  ['no problem',            'no worries bestie'],
  ['not a problem',         'bet, no cap'],
  ['very good',             'bussin fr'],
  ['so good',               'bussin'],
  ['really good',           'lowkey fire'],
  ['really bad',            'mid fr'],
  ['very bad',              'big L fr'],
]

// Word replacements — [word, genZ, minVibeLevel (1=Lowkey 2=Highkey 3=NoCapChaos)]
type WE = [string, string, number]
const WORDS: WE[] = [
  // ── Vibe 1: Lowkey ──
  ['amazing',     'fire',                      1],
  ['awesome',     'bussin',                    1],
  ['incredible',  'bussin fr',                 1],
  ['fantastic',   'fire',                      1],
  ['wonderful',   'bussin',                    1],
  ['excellent',   'ate',                       1],
  ['perfect',     'understood the assignment', 1],
  ['great',       'goated',                    1],
  ['cool',        'slay',                      1],
  ['good',        'W',                         1],
  ['nice',        'fire',                      1],
  ['bad',         'L',                         1],
  ['terrible',    'mid',                       1],
  ['awful',       'big L',                     1],
  ['horrible',    'absolute L',                1],
  ['mediocre',    'mid',                       1],
  ['okay',        'bet',                       1],
  ['yes',         'bet',                       1],
  ['no',          'nah',                       1],
  ['friend',      'bestie',                    1],
  ['friends',     'besties',                   1],
  ['beautiful',   'snatched',                  1],
  ['pretty',      'snatched',                  1],
  ['attractive',  'snatched',                  1],
  ['ugly',        'not it',                    1],
  ['funny',       'sending me',                1],
  ['hilarious',   "i'm dead 💀",              1],
  ['serious',     'fr',                        1],
  ['honestly',    'ngl',                       1],
  ['seriously',   'fr fr',                     1],
  ['definitely',  'periodt',                   1],
  ['absolutely',  'no cap',                    1],
  ['obviously',   'clearly bestie',            1],
  ['lie',         'cap',                       1],
  ['lying',       'capping',                   1],
  ['liar',        'capper',                    1],
  ['suspicious',  'sus',                       1],
  ['weird',       'sus',                       1],
  ['strange',     'lowkey sus',                1],
  ['obsessed',    'delulu',                    1],
  ['delusional',  'delulu',                    1],
  ['exhausted',   'cooked',                    1],
  ['tired',       'cooked',                    1],
  ['bored',       'mid',                       1],
  ['happy',       'thriving',                  1],
  ['excited',     'hyped',                     1],
  ['sad',         'in my flop era',            1],
  ['upset',       'not okay fr',               1],
  ['angry',       'big mad',                   1],
  ['shocked',     'shook',                     1],
  ['surprised',   'shook',                     1],
  ['confident',   'main character',            1],
  ['embarrassed', 'cooked',                    1],
  ['awkward',     'giving cringe',             1],
  ['popular',     'main character',            1],
  ['boring',      'mid',                       1],
  ['interesting', 'a vibe',                    1],
  ['important',   'hits different',            1],
  ['outdated',    'cheugy',                    1],
  ['trendy',      'slay',                      1],
  ['successful',  'ate',                       1],
  ['failed',      'flopped',                   1],
  ['money',       'bag',                       1],
  ['charisma',    'rizz',                      1],
  ['charm',       'rizz',                      1],
  ['literally',   'literally',                 1], // keep — Gen Z uses this naturally
  // ── Vibe 2: Highkey ──
  ['you',         'u',                         2],
  ['your',        'ur',                        2],
  ['really',      'lowkey',                    2],
  ['very',        'so',                        2],
  ['actually',    'lowkey',                    2],
  ['stupid',      'NPC',                       2],
  ['smart',       'ate',                       2],
  ['clever',      'based',                     2],
  ['work',        'grind',                     2],
  ['working',     'grinding',                  2],
  ['guy',         'king',                      2],
  ['guys',        'kings',                     2],
  ['girl',        'queen',                     2],
  ['girls',       'queens',                    2],
  ['person',      'bestie',                    2],
  ['people',      'besties',                   2],
  ['everyone',    'all the besties',           2],
  ['problem',     'situation bestie',          2],
  ['food',        'eats',                      2],
  ['love',        'ate',                       2],
  ['hate',        'get the ick from',          2],
  ['agree',       'bet',                       2],
  ['understand',  'get it fr',                 2],
]

const SENTENCE_ENDERS = ['fr 🔥', 'no cap', 'ngl', 'bestie 💀', 'fr fr', 'periodt ✨']

function encodeToGenZ(text: string, vibe: number): string {
  if (!text.trim()) return ''
  const saved: string[] = []
  let result = text

  // ── Pass 1: replace phrases, protect with markers ──
  const sortedPhrases = [...PHRASES].sort((a, b) => b[0].length - a[0].length)
  for (const [phrase, rep] of sortedPhrases) {
    const rx = new RegExp(`\\b${esc(phrase)}\\b`, 'gi')
    result = result.replace(rx, () => {
      const idx = saved.push(rep) - 1
      return `${MARK_S}${idx}${MARK_E}`
    })
  }

  // ── Pass 2: word-level replacements in UNPROTECTED regions only ──
  const eligible = WORDS.filter(([, , lvl]) => lvl <= vibe)
  const segments = result.split(/([\x01]\d+[\x02])/)
  result = segments.map((seg) => {
    if (/^[\x01]\d+[\x02]$/.test(seg)) return seg // skip protected
    return seg.replace(/\b([a-zA-Z'-]+)\b/g, (word) => {
      const lower = word.toLowerCase()
      const entry = eligible.find(([w]) => w === lower)
      if (!entry) return word
      const rep = entry[1]
      return word[0] >= 'A' && word[0] <= 'Z'
        ? rep.charAt(0).toUpperCase() + rep.slice(1)
        : rep
    })
  }).join('')

  // ── Pass 3: restore protected phrases ──
  result = result.replace(/[\x01](\d+)[\x02]/g, (_, i) => saved[Number(i)])

  // ── Pass 4: add sentence enders ──
  if (vibe >= 2) {
    let ei = 0
    result = result.replace(/([.!?])(\s|$)/g, (_, p, trail) => {
      const e = SENTENCE_ENDERS[ei++ % SENTENCE_ENDERS.length]
      return ` ${e}${p}${trail}`
    })
  }

  // ── Pass 5: vibe 3 — lowercase everything ──
  if (vibe >= 3) {
    result = result.toLowerCase()
  }

  return result.trim()
}

// Gen Z → Plain English decode
const DECODE: [string, string][] = [
  ['understood the assignment', 'completed the task perfectly'],
  ['ate and left no crumbs',    'did something perfectly'],
  ['no cap',                    'no lie / seriously'],
  ['fr fr',                     'for real for real'],
  ['it\'s giving',              'it resembles / feels like'],
  ['sending me',                'making me laugh'],
  ['rent free',                 'constantly on my mind'],
  ['touch grass',               'go outside'],
  ['the ick',                   'sudden feeling of disgust'],
  ['main character',            'acting like the star of the show'],
  ['vibe check',                'assessing the mood'],
  ['hits different',            'feels uniquely special'],
  ['ate',                       'did something perfectly'],
  ['slay',                      'do something excellently'],
  ['slayed',                    'did something excellently'],
  ['bussin',                    'amazing / delicious'],
  ['rizz',                      'natural charm / charisma'],
  ['npc',                       'someone acting robotic'],
  ['based',                     'having a confident opinion'],
  ['lowkey',                    'somewhat / secretly'],
  ['highkey',                   'very much / openly'],
  ['sus',                       'suspicious'],
  ['mid',                       'mediocre / average'],
  ['bet',                       'okay / agreed'],
  ['periodt',                   'period — final word'],
  ['fr',                        'for real'],
  ['snatched',                  'looking very attractive'],
  ['shook',                     'shocked'],
  ['cheugy',                    'outdated / try-hard'],
  ['delulu',                    'delusional in a fun way'],
  ['cooked',                    'exhausted / in trouble'],
  ['flopped',                   'failed badly'],
  ['goated',                    'greatest of all time'],
  ['ngl',                       'not gonna lie'],
  ['bestie',                    'best friend'],
  ['bag',                       'money'],
  ['hyped',                     'very excited'],
  ['thriving',                  'doing very well'],
  ['cap',                       'a lie'],
  ['capping',                   'lying'],
  ['idk',                       "I don't know"],
  ['tysm',                      'thank you so much'],
  ['gm',                        'good morning'],
  ['gn',                        'good night'],
]

function decodeFromGenZ(text: string): string {
  let result = text
  const sorted = [...DECODE].sort((a, b) => b[0].length - a[0].length)
  for (const [slang, plain] of sorted) {
    const rx = new RegExp(`\\b${esc(slang)}\\b`, 'gi')
    result = result.replace(rx, `[${plain}]`)
  }
  return result
}

// ─── Constants ────────────────────────────────────────────────────────────────

const VIBE_LEVELS = [
  { level: 1, label: 'Lowkey',  badge: '😌', desc: 'A sprinkle of Gen Z' },
  { level: 2, label: 'Highkey', badge: '🔥', desc: 'Proper Gen Z speak' },
  { level: 3, label: 'No Cap',  badge: '💀', desc: 'Full chaos mode fr fr' },
]

const EXAMPLES = [
  'I think you did an amazing job today.',
  'My friend is really cool and funny.',
  'I am so tired, I need help.',
  'Honestly, this food is so good.',
  'That is a really bad idea.',
]

// ─── Component ────────────────────────────────────────────────────────────────

export function GenZTranslatorTool() {
  const [input, setInput]     = useState('I think you did an amazing job today.')
  const [mode, setMode]       = useState<'encode' | 'decode'>('encode')
  const [vibe, setVibe]       = useState(2)
  const [copied, setCopied]   = useState(false)

  const output = useMemo(() => {
    if (!input.trim()) return ''
    return mode === 'encode' ? encodeToGenZ(input, vibe) : decodeFromGenZ(input)
  }, [input, mode, vibe])

  function copy() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000)
    })
  }

  function swap() {
    setInput(output)
    setMode((m) => (m === 'encode' ? 'decode' : 'encode'))
  }

  const inputLabel  = mode === 'encode' ? 'Plain English' : 'Gen Z Text'
  const outputLabel = mode === 'encode' ? 'Gen Z Talk'    : 'Plain English'

  return (
    <div className="space-y-5">

      {/* ── Controls ── */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        {/* Mode */}
        <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border">
          <button onClick={() => setMode('encode')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${mode === 'encode' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            ✨ English → Gen Z
          </button>
          <button onClick={() => setMode('decode')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${mode === 'decode' ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
            🔍 Decode Gen Z
          </button>
        </div>

        {/* Vibe level */}
        {mode === 'encode' && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-muted-foreground">Vibe:</span>
            <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border">
              {VIBE_LEVELS.map(({ level, label, badge }) => (
                <button key={level} onClick={() => setVibe(level)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1 ${vibe === level ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  <span>{badge}</span> {label}
                </button>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {VIBE_LEVELS.find(v => v.level === vibe)?.desc}
            </span>
          </div>
        )}
      </div>

      {/* ── Translator panels ── */}
      <div className="grid sm:grid-cols-[1fr_auto_1fr] rounded-2xl border overflow-hidden shadow-sm">

        {/* Input */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-muted/10 border-b">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{inputLabel}</span>
            {input && (
              <button onClick={() => setInput('')} className="text-muted-foreground hover:text-foreground transition">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={7}
            placeholder={mode === 'encode' ? 'Type plain English here…' : 'Paste Gen Z slang here to decode…'}
            className="flex-1 w-full px-4 py-3 bg-background text-sm resize-none focus:outline-none placeholder:text-muted-foreground/50 leading-relaxed"
          />
          <div className="px-4 py-2 border-t bg-muted/5">
            <span className="text-[11px] text-muted-foreground">{input.length} chars · {input.split(/\s+/).filter(Boolean).length} words</span>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex items-center justify-center border-x bg-muted/5 px-1">
          <button onClick={swap} title="Swap"
            className="p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary transition text-muted-foreground group">
            <ArrowLeftRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 bg-muted/10 border-b">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{outputLabel}</span>
            <button onClick={copy} className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition">
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            rows={7}
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            className="flex-1 w-full px-4 py-3 bg-muted/5 text-sm resize-none focus:outline-none cursor-pointer leading-relaxed"
          />
          <div className="px-4 py-2 border-t bg-muted/5 flex justify-between">
            <span className="text-[11px] text-muted-foreground">{output.split(/\s+/).filter(Boolean).length} words</span>
            <span className="text-[11px] text-muted-foreground">Click to select all</span>
          </div>
        </div>
      </div>

      {/* ── Example sentences ── */}
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="text-xs font-medium text-muted-foreground shrink-0">Try:</span>
        {EXAMPLES.map((ex) => (
          <button key={ex} onClick={() => { setInput(ex); setMode('encode') }}
            className="text-xs px-2.5 py-1 rounded-full border bg-muted/20 hover:bg-muted/40 transition text-muted-foreground hover:text-foreground">
            {ex.length > 32 ? ex.slice(0, 30) + '…' : ex}
          </button>
        ))}
      </div>

      {/* ── Gen Z Slang Glossary ── */}
      <div className="rounded-2xl border overflow-hidden">
        <div className="px-4 py-3 bg-muted/10 border-b">
          <h3 className="text-sm font-bold">Quick Gen Z Dictionary</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Click any term to decode it instantly</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y">
          {DECODE.slice(0, 16).map(([slang, meaning]) => (
            <button key={slang} onClick={() => { setInput(slang); setMode('decode') }}
              className="flex items-start gap-3 px-4 py-3 hover:bg-muted/10 transition text-left group border-b last:border-b-0 sm:odd:border-r">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-primary">{slang}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{meaning}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
