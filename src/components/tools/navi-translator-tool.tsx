'use client'

import { useState } from 'react'
import { Copy, Check, BookOpen, Languages } from 'lucide-react'

// ─── Na'vi Dictionary (English → Na'vi) ──────────────────────────────────────
// Source: learnnavi.org community dictionary & Avatar films

const NAVI_DICT: Record<string, string> = {
  // Greetings & basics
  hello: 'kaltxì',
  hi: 'kaltxì',
  goodbye: 'kìyevame',
  bye: 'kìyevame',
  yes: 'srane',
  no: 'kehe',
  ok: 'srane',
  please: 'rutxe',
  thanks: 'irayo',
  'thank you': 'irayo',
  sorry: 'rutxe ko',
  welcome: 'zola\'u nìprrte\'',
  'you\'re welcome': 'nìprrte\'',

  // Pronouns
  i: 'oe',
  me: 'oeru',
  my: 'oeyä',
  mine: 'oeyä',
  we: 'ayoe',
  our: 'ayoeyä',
  you: 'nga',
  your: 'ngeyä',
  he: 'po',
  she: 'po',
  it: 'tsaw',
  his: 'peyä',
  her: 'peyä',
  they: 'aypo',
  their: 'aypeyä',
  this: 'tsaw',
  that: 'tsaw',

  // Common verbs
  see: 'kame',   // spiritual seeing (kame); physical sight = tse'a
  saw: 'kame',
  look: 'tse\'a',
  hear: 'tìng mikyun',
  speak: 'plltxe',
  talk: 'plltxe',
  say: 'plltxe',
  go: 'kä',
  went: 'kä',
  come: 'za\'u',
  came: 'za\'u',
  run: 'tìhawnu',
  fly: 'tswayon',
  fight: 'tìkan',
  hunt: 'taron',
  eat: 'yom',
  drink: 'new',
  sleep: 'new txon',
  live: 'livu',
  die: 'tìpängkxo',
  kill: 'tìpängkxo',
  love: 'yawne',
  like: 'yawne',
  want: 'new',
  need: 'new',
  know: 'omum',
  think: 'kxìm',
  feel: 'tìran',
  give: 'tìng',
  take: 'kem si',
  make: 'kem si',
  do: 'kem si',
  help: 'tìhawnu si',
  protect: 'tìhawnu si',
  follow: 'hìkram',
  learn: 'tìkangkem si',
  teach: 'tìkangkem si',
  choose: 'tìran si',
  trust: 'tìnong si',
  believe: 'tìnong si',
  wait: 'tstew si',
  stay: 'livu',
  leave: 'kä',
  find: 'kem si',
  call: 'syaw',
  be: 'lu',
  is: 'lu',
  am: 'lu',
  are: 'lu',
  was: 'lu',
  were: 'lu',
  become: 'slu',
  sit: 'heyn',
  stand: 'tìtstew',
  walk: 'tìran',

  // Nature
  tree: 'utral',
  forest: 'na\'rìng',
  river: 'kilvan',
  water: 'pay',
  fire: 'rina\'',
  earth: 'taw',
  ground: 'taw',
  sky: 'taw',
  air: 'txon',
  night: 'txon',
  day: 'trr',
  sun: 'tsawke',
  moon: 'trray',
  star: '\'ewll',
  stars: 'ay\'ewll',
  mountain: 'tìftia',
  rock: 'tsko',
  land: 'taw',
  world: 'taw',
  planet: 'taw',
  light: '\'ì\'awn',
  dark: 'txon',
  darkness: 'txon',
  life: 'tìsraw',
  death: 'tìpängkxo',
  spirit: 'tirea',
  soul: 'tirea',
  energy: 'tirea',
  nature: 'Eywa',
  seed: '\'ewll',
  flower: '\'ewll',
  plant: '\'ewll',
  path: 'tìran',
  way: 'tìran',
  home: 'kelutral',
  hometree: 'kelutral',

  // Creatures & Avatar world
  ikran: 'ikran',
  dragon: 'ikran',
  horse: 'pa\'li',
  direhorse: 'pa\'li',
  thanator: 'palulukan',
  viperwolf: 'nantang',
  leonopteryx: 'toruk',
  banshee: 'ikran',
  avatar: 'uniltìrantokx',
  human: 'tawtute',
  humans: 'aytawtute',
  skyperson: 'tawtute',
  'sky person': 'tawtute',
  alien: 'tawtute',
  creature: 'tsawke',
  animal: 'yerik',

  // People & society
  person: 'tute',
  people: 'aytutem',
  man: 'tute',
  woman: 'tute',
  child: '\'eveng',
  children: 'ay\'eveng',
  mother: 'sa\'nu',
  father: '\'itan',
  family: 'ayoe',
  friend: 'meyp',
  enemy: 'tsamsiyu',
  warrior: 'tsamsiyu',
  hunter: 'taronyu',
  leader: 'olo\'eyktan',
  chief: 'olo\'eyktan',
  clan: 'olo\'',
  tribe: 'olo\'',
  brother: '\'itan',
  sister: '\'ipu',
  name: 'tìkangkem',
  heart: 'tìyawntu',
  mind: '\'uo',
  body: 'ontu',
  eye: 'nari',
  eyes: 'nari',
  hand: 'kxetse',
  hands: 'kxetse',
  foot: 'sìn',
  feet: 'sìn',
  tail: 'kxetse',
  wing: 'zoplo',
  wings: 'zoplo',
  blood: 'tìyawn',
  breath: 'txep',
  voice: 'plltxe',

  // Emotions & states
  happy: 'nitram',
  happiness: 'tìnitram',
  sad: 'sìltsana',
  angry: 'tsawl',
  fear: 'tìkxey',
  afraid: 'tìkxey',
  brave: 'tstew',
  strong: 'tstew',
  strength: 'tìtstew',
  weak: 'meyp',
  free: 'tìngay',
  freedom: 'tìngay',
  peace: 'tìfpom',
  war: 'txewm',
  hope: 'tìngay',
  faith: 'tìnong',
  truth: 'ngay',
  true: 'ngay',
  real: 'ngay',
  beautiful: 'lor',
  beauty: 'tìlor',
  good: 'lefpom',
  great: 'tsawl',
  bad: 'kxanì',
  big: 'tsawl',
  large: 'tsawl',
  small: 'hìm',
  little: 'hìm',
  fast: 'win',
  slow: 'hìm',
  new: 'mipa',
  old: 'ngian',
  young: 'hìm',
  safe: 'tìhawnu',
  danger: 'tìkxey',
  lost: 'tìkxey',
  found: 'kem si',
  alive: 'livu',
  dead: 'tìpängkxo',
  ready: 'tstew si',
  together: 'hu',
  alone: 'tìkxey',

  // Spiritual / Eywa
  eywa: 'Eywa',
  goddess: 'Eywa',
  god: 'Eywa',
  prayer: 'tìfyawìnthu',
  pray: 'tìfyawìnthu si',
  connection: 'tìnong',
  connect: 'tìnong si',
  bond: 'tìnong',
  balance: 'tìtxen',
  circle: 'tìtxen',
  network: 'tirea',
  consciousness: 'tirea',
  ancestor: 'olo\' palulukan',
  ancestors: 'ayolo\' palulukan',
  remember: '\'ì\'awn',
  memory: '\'ì\'awn',
  dream: 'uniltìrantokx',
  vision: 'nari',

  // Actions & concepts
  fight: 'tìkan',
  battle: 'txewm',
  attack: 'tìkan',
  defend: 'tìhawnu si',
  escape: 'kä',
  return: 'za\'u',
  begin: 'tìkan si',
  start: 'tìkan si',
  end: 'tìpängkxo',
  finish: 'tìpängkxo',
  open: 'tìkan',
  close: 'tìpängkxo',
  take: 'kem si',
  bring: 'za\'u',
  carry: 'za\'u',
  move: 'tìran',
  fly: 'tswayon',
  fall: 'taw',
  rise: 'tìtstew',
  jump: 'tìran',
  climb: 'tìran',
  swim: 'tìran',
  ride: 'tìran',
  lead: 'olo\'eyktan',
  follow: 'hìkram',
  win: 'nitram',
  lose: 'tìkxey',
  die: 'tìpängkxo',
  kill: 'tìpängkxo',
  save: 'tìhawnu si',
  destroy: 'tìpängkxo',

  // Numbers
  one: '\'aw',
  two: 'mune',
  three: 'pxey',
  four: 'tsìng',
  five: 'mrr',
  six: 'pukap',
  seven: 'kinä',
  eight: 'vol',
  many: 'pxay',
  few: 'hìm',
  all: 'pxay',
  none: 'kehe',
  first: '\'aw',
  last: 'kxeyey',

  // Question words
  what: 'pelun',
  who: 'tupe',
  where: 'peseng',
  when: 'pefya',
  why: 'pelun',
  how: 'pefya',
  which: 'pelun',

  // Conjunctions & prepositions
  and: 'sì',
  or: 'sì',
  but: 'slä',
  with: 'hu',
  without: 'ke hu',
  in: 'mì',
  on: 'mì',
  at: 'mì',
  to: 'fa',
  from: 'fa',
  for: 'fa',
  of: 'yä',
  here: 'tsenge',
  there: 'tsenge',
  now: 'set',
  then: 'set',
  always: 'ìlä',
  never: 'ke',
  not: 'ke',
  very: 'nìtxan',
  more: 'nìtxan',

  // Avatar-specific
  pandora: 'Pandora',
  hallelujah: 'Pandora',
  unobtanium: 'unobtanium',
  rda: 'Sawtute',
  omaticaya: 'Omatikaya',
  metkayina: 'Metkayina',
  toruk: 'Toruk Makto',
  makto: 'Makto',
  tsaheylu: 'tsaheylu',
  bond: 'tsaheylu',
}

// ─── Phrase book ──────────────────────────────────────────────────────────────

const PHRASEBOOK: { category: string; emoji: string; phrases: { en: string; navi: string; pronunciation: string }[] }[] = [
  {
    category: 'Greetings',
    emoji: '👋',
    phrases: [
      { en: 'Hello', navi: 'Kaltxì', pronunciation: 'kal-TXI' },
      { en: 'I see you (deep greeting)', navi: 'Oel ngati kameie', pronunciation: 'O-el nga-ti ka-MEY-e' },
      { en: 'Until we meet again', navi: 'Kìyevame', pronunciation: 'kì-ye-VA-me' },
      { en: 'May Eywa be with you', navi: 'Eywa ngahu', pronunciation: 'EY-wa nga-hu' },
      { en: 'Are you well?', navi: 'Ngaru lu fpom srak?', pronunciation: 'nga-RU lu fpom srak?' },
      { en: 'I am well', navi: 'Oeru lu fpom', pronunciation: 'o-E-ru lu fpom' },
      { en: 'Welcome', navi: 'Zola\'u nìprrte\'', pronunciation: 'zo-LA-u nì-PRR-te' },
    ],
  },
  {
    category: 'Love & Emotion',
    emoji: '💙',
    phrases: [
      { en: 'You are loved by me', navi: 'Nga yawne lu oer', pronunciation: 'nga YAW-ne lu O-er' },
      { en: 'I love you', navi: 'Oel ngati kameie', pronunciation: 'O-el nga-ti ka-MEY-e' },
      { en: 'You are beautiful', navi: 'Nga lor lu', pronunciation: 'nga lor lu' },
      { en: 'I am happy', navi: 'Nitram livu', pronunciation: 'NI-tram LI-vu' },
      { en: 'You make me happy', navi: 'Ngaru seiyi irayo', pronunciation: 'nga-RU sei-yi i-RA-yo' },
      { en: 'My heart is yours', navi: 'Tìyawntu ngeyä', pronunciation: 'tì-YAWN-tu NGE-yä' },
    ],
  },
  {
    category: 'Spirituality & Eywa',
    emoji: '🌿',
    phrases: [
      { en: 'Eywa has heard you', navi: 'Eywa ngahu', pronunciation: 'EY-wa nga-hu' },
      { en: 'She is with all of them', navi: 'Eywa ayngahu', pronunciation: 'EY-wa ayng-a-HU' },
      { en: 'I see you (I truly see you)', navi: 'Oel ngati kameie', pronunciation: 'O-el nga-ti ka-MEY-e' },
      { en: 'The Great Mother', navi: 'Eywa Ma\'em', pronunciation: 'EY-wa MA-em' },
      { en: 'I am Na\'vi', navi: 'Oe Na\'viru slu', pronunciation: 'O-e NA-vi-ru slu' },
      { en: 'Everything is connected', navi: 'Tìnong lu pxay', pronunciation: 'tì-NONG lu pxay' },
    ],
  },
  {
    category: 'Warrior & Clan',
    emoji: '⚔️',
    phrases: [
      { en: 'The sky is yours', navi: 'Taw ngeyä', pronunciation: 'taw NGE-yä' },
      { en: 'I am a warrior', navi: 'Oe tsamsiyu', pronunciation: 'O-e TSAM-si-yu' },
      { en: 'This is our land', navi: 'Taw ayoeyä', pronunciation: 'taw ay-O-e-yä' },
      { en: 'We will fight', navi: 'Ayoe tìkan si', pronunciation: 'ay-O-e tì-KAN si' },
      { en: 'Together we are strong', navi: 'Hu ayoe tstew', pronunciation: 'hu ay-O-e tstew' },
      { en: 'The people live', navi: 'Olo\' livu', pronunciation: 'o-LO livu' },
    ],
  },
  {
    category: 'Survival & Nature',
    emoji: '🌿',
    phrases: [
      { en: 'The forest speaks', navi: 'Na\'rìng plltxe', pronunciation: 'na-RÌNG PLLT-xe' },
      { en: 'Follow me', navi: 'Fìtsenge hu oe', pronunciation: 'fì-TSENG-e hu O-e' },
      { en: 'We go home', navi: 'Ayoe kä kelutral', pronunciation: 'ay-O-e KÄ ke-LUT-ral' },
      { en: 'The river is safe', navi: 'Kilvan tìhawnu lu', pronunciation: 'KIL-van tì-HAW-nu lu' },
      { en: 'Come with me', navi: 'Za\'u hu oe', pronunciation: 'za-U hu O-e' },
      { en: 'Be silent', navi: 'Ke plltxe', pronunciation: 'ke PLLT-xe' },
    ],
  },
  {
    category: 'Questions',
    emoji: '❓',
    phrases: [
      { en: 'What is your name?', navi: 'Tupe nga lu?', pronunciation: 'TU-pe nga lu?' },
      { en: 'Where are you going?', navi: 'Peseng nga kä?', pronunciation: 'PE-seng nga kä?' },
      { en: 'Who are you?', navi: 'Tupe nga lu srak?', pronunciation: 'TU-pe nga lu srak?' },
      { en: 'Why are you here?', navi: 'Pelun nga lu fìtseng?', pronunciation: 'PE-lun nga lu fì-TSENG?' },
      { en: 'Do you understand?', navi: 'Nga omum srak?', pronunciation: 'nga O-mum srak?' },
      { en: 'Can you help me?', navi: 'Nga tìhawnu si oeru srak?', pronunciation: 'nga tì-HAW-nu si o-E-ru srak?' },
    ],
  },
]

// ─── Multi-word phrase map (checked before word-by-word) ─────────────────────
// These exact English phrases translate to a single Na'vi expression

const PHRASE_MAP: Record<string, string> = {
  'i see you':            "Oel ngati kameie",   // spiritual greeting — NOT literal sight
  'i love you':           "Nga yawne lu oer",
  'thank you':            "Irayo",
  "you're welcome":       "Nìprrte'",
  'may eywa be with you': "Eywa ngahu",
  'i am well':            "Oeru lu fpom",
  'are you well':         "Ngaru lu fpom srak?",
  'until we meet again':  "Kìyevame",
  'come with me':         "Za'u hu oe",
  'follow me':            "Fìtsenge hu oe",
  'we go home':           "Ayoe kä kelutral",
  'i am navi':            "Oe Na'viru slu",
  'i am a warrior':       "Oe tsamsiyu",
  'this is our land':     "Taw ayoeyä",
  'i am happy':           "Nitram livu",
  'who are you':          "Tupe nga lu srak?",
  'what is your name':    "Tupe nga lu?",
}

// ─── Translator logic ─────────────────────────────────────────────────────────

function translateToNavi(text: string): { words: { original: string; navi: string; found: boolean }[] } {
  // First pass: replace known multi-word phrases (case-insensitive)
  let processed = text
  const phraseMatches: { placeholder: string; navi: string }[] = []

  let idx = 0
  for (const [en, navi] of Object.entries(PHRASE_MAP)) {
    const regex = new RegExp(en.replace(/['']/g, "[''']"), 'gi')
    processed = processed.replace(regex, match => {
      const placeholder = `__PHRASE_${idx}__`
      phraseMatches.push({ placeholder, navi })
      idx++
      return placeholder
    })
  }

  // Second pass: word-by-word on remaining tokens
  const tokens = processed.split(/(\s+)/)
  const result: { original: string; navi: string; found: boolean }[] = []

  for (const token of tokens) {
    if (/^\s+$/.test(token)) {
      result.push({ original: token, navi: token, found: true })
      continue
    }

    // Check if token is a phrase placeholder
    const phraseMatch = phraseMatches.find(p => token.includes(p.placeholder))
    if (phraseMatch) {
      result.push({ original: token, navi: phraseMatch.navi, found: true })
      continue
    }

    // Word-by-word
    const punct = token.match(/^([^\w']*)([\w']+)([^\w']*)$/)
    if (!punct) {
      result.push({ original: token, navi: token, found: true })
      continue
    }
    const [, pre, word, post] = punct
    const lower = word.toLowerCase()
    const navi = NAVI_DICT[lower]
    if (navi) {
      result.push({ original: token, navi: pre + navi + post, found: true })
    } else {
      result.push({ original: token, navi: token, found: false })
    }
  }

  return { words: result }
}

// ─── Component ────────────────────────────────────────────────────────────────

type Tab = 'translate' | 'phrasebook' | 'dictionary'

export function NaviTranslatorTool() {
  const [tab, setTab] = useState<Tab>('translate')
  const [input, setInput] = useState('I see you, my friend. Eywa is with us.')
  const [phraseCategory, setPhraseCategory] = useState('Greetings')
  const [dictSearch, setDictSearch] = useState('')
  const [copied, setCopied] = useState(false)
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null)

  const { words } = translateToNavi(input)
  const naviOutput = words.map(w => w.navi).join('')
  const foundCount = words.filter(w => w.found && w.original.trim()).length
  const totalWords = words.filter(w => w.original.trim() && !/^\s+$/.test(w.original)).length

  function copyOutput() {
    navigator.clipboard.writeText(naviOutput).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function copyPhrase(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedPhrase(text)
      setTimeout(() => setCopiedPhrase(null), 2000)
    })
  }

  const dictEntries = Object.entries(NAVI_DICT)
    .filter(([en]) => dictSearch === '' || en.includes(dictSearch.toLowerCase()))
    .sort(([a], [b]) => a.localeCompare(b))

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Tab switcher */}
      <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border overflow-x-auto">
        {([
          { id: 'translate',   label: 'Translator',  icon: <Languages className="w-4 h-4" /> },
          { id: 'phrasebook', label: 'Phrasebook',  icon: <BookOpen className="w-4 h-4" /> },
          { id: 'dictionary', label: 'Dictionary',  icon: <BookOpen className="w-4 h-4" /> },
        ] as { id: Tab; label: string; icon: React.ReactNode }[]).map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
              tab === t.id ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── Translator Tab ── */}
      {tab === 'translate' && (
        <div className="space-y-4">
          <div className="flex items-start gap-2 text-xs text-muted-foreground bg-blue-500/5 border border-blue-500/20 rounded-lg px-3 py-2">
            <span>🪬</span>
            <div>
              <span>Word-by-word translation from English to Na&apos;vi. Common phrases (like <strong>&quot;I see you&quot;</strong>) are matched as a whole before word-by-word processing. <strong>Unknown words</strong> appear highlighted.</span>
              <p className="mt-1 text-[11px] opacity-80">💡 &quot;I see you&quot; → <strong>Oel ngati kameie</strong> (spiritual, uses <em>kame</em>) · physical sight uses <em>tse&apos;a</em></p>
            </div>
          </div>

          {/* Input */}
          <div>
            <label className="block text-sm font-semibold mb-2">English Text</label>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={3}
              placeholder="Type English text to translate to Na'vi…"
              className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>

          {/* Output */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold">Na&apos;vi Translation</label>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{foundCount}/{totalWords} words translated</span>
                <button onClick={copyOutput}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    copied ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}>
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
            {/* Highlighted word-by-word output */}
            <div className="min-h-[80px] p-4 rounded-xl border bg-muted/5 text-base leading-relaxed flex flex-wrap gap-x-1 items-center">
              {input.trim() ? words.map((w, i) => {
                if (/^\s+$/.test(w.original)) return <span key={i}>&nbsp;</span>
                if (w.found) return <span key={i} className="text-foreground">{w.navi}</span>
                return (
                  <span key={i} className="inline-flex items-center px-1 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-sm">
                    {w.navi}
                  </span>
                )
              }) : (
                <span className="text-muted-foreground/50 text-sm italic">Na&apos;vi translation will appear here…</span>
              )}
            </div>
            {words.some(w => !w.found && w.original.trim() && !/^\s+$/.test(w.original)) && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 flex items-center gap-1">
                <span>⚠</span> Highlighted words have no Na&apos;vi equivalent — try the Phrasebook tab for common phrases.
              </p>
            )}
          </div>

          {/* Quick try examples */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Try an example:</p>
            <div className="flex flex-wrap gap-2">
              {[
                'I see you',
                'Thank you Eywa',
                'We are warriors',
                'The forest is our home',
                'I love you',
                'Goodbye my friend',
              ].map(ex => (
                <button key={ex} onClick={() => setInput(ex)}
                  className="text-xs px-3 py-1.5 rounded-full border bg-muted/10 hover:bg-muted/30 hover:border-primary/30 transition-colors">
                  {ex}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Phrasebook Tab ── */}
      {tab === 'phrasebook' && (
        <div className="space-y-4">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {PHRASEBOOK.map(cat => (
              <button key={cat.category} onClick={() => setPhraseCategory(cat.category)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  phraseCategory === cat.category
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-muted/20 text-muted-foreground hover:text-foreground border-muted/40'
                }`}>
                {cat.emoji} {cat.category}
              </button>
            ))}
          </div>

          {/* Phrases */}
          {PHRASEBOOK.filter(cat => cat.category === phraseCategory).map(cat => (
            <div key={cat.category} className="space-y-2">
              {cat.phrases.map(phrase => {
                const isCopied = copiedPhrase === phrase.navi
                return (
                  <div key={phrase.en} className="group p-4 rounded-xl border bg-muted/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground mb-0.5">{phrase.en}</p>
                        <p className="text-base font-semibold text-primary">{phrase.navi}</p>
                        <p className="text-xs text-muted-foreground mt-1 font-mono italic">/{phrase.pronunciation}/</p>
                      </div>
                      <button onClick={() => copyPhrase(phrase.navi)}
                        className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                          isCopied ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-primary/10 text-primary hover:bg-primary/20'
                        }`}>
                        {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      )}

      {/* ── Dictionary Tab ── */}
      {tab === 'dictionary' && (
        <div className="space-y-4">
          <input
            type="text"
            value={dictSearch}
            onChange={e => setDictSearch(e.target.value)}
            placeholder="Search English words…"
            className="w-full px-4 py-2.5 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />
          <p className="text-xs text-muted-foreground">{dictEntries.length} words</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[480px] overflow-y-auto pr-1">
            {dictEntries.map(([en, navi]) => (
              <div key={en} className="flex flex-col px-3 py-2 rounded-lg border bg-muted/10 hover:bg-muted/20 transition-colors">
                <span className="text-xs text-muted-foreground capitalize">{en}</span>
                <span className="text-sm font-semibold text-primary">{navi}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer note */}
      <div className="p-3 bg-muted/10 rounded-xl border text-xs text-muted-foreground">
        <p>Na&apos;vi is a constructed language created by <strong className="text-foreground">Paul Frommer</strong> for James Cameron&apos;s <em>Avatar</em> franchise. Vocabulary sourced from the Avatar films and the learnnavi.org community dictionary.</p>
      </div>
    </div>
  )
}
