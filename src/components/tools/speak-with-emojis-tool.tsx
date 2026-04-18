'use client'

import { useState, useCallback, useRef } from 'react'
import { Copy, Check, Trash2, Delete } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Word → Emoji map (pure emoji output, no text retained) ──────────────────

const WORD_MAP: Record<string, string> = {
  // Greetings
  hello: '👋', hi: '👋', hey: '👋', howdy: '👋', greet: '👋',
  bye: '👋', goodbye: '👋', farewell: '✌️', later: '✌️', ciao: '🤌',
  welcome: '🤗', good: '👍', morning: '🌅', night: '🌙', evening: '🌆',
  afternoon: '☀️',

  // Feelings
  love: '❤️', like: '👍', hate: '😡', miss: '💔', hug: '🫂',
  kiss: '😘', heart: '❤️', happy: '😊', sad: '😢', cry: '😭',
  laugh: '😂', smile: '😊', angry: '😠', mad: '😡', scared: '😨',
  tired: '😴', bored: '😑', confused: '😕', shocked: '😲', surprised: '😲',
  excited: '🤩', nervous: '😬', worried: '😟', jealous: '😒',
  proud: '😤', embarrassed: '😳', shy: '🙈', disgusted: '🤢',
  amazing: '🤩', awesome: '😎', cool: '😎', great: '🙌', perfect: '✨',
  horrible: '😱', terrible: '😰', bad: '👎', wrong: '❌', right: '✅',
  ok: '👌', okay: '👌', yes: '✅', no: '❌', maybe: '🤷',
  please: '🙏', sorry: '😔', thanks: '🙏', thank: '🙏', congrats: '🎉',

  // People
  me: '🙋', i: '👆', you: '👉', we: '👥', they: '👤',
  man: '👨', woman: '👩', boy: '👦', girl: '👧', baby: '👶',
  family: '👨‍👩‍👧‍👦', mom: '👩', dad: '👨', friend: '👫',
  king: '🤴', queen: '👸', hero: '🦸', villain: '🦹',

  // Animals
  dog: '🐶', cat: '🐱', fish: '🐟', bird: '🐦', rabbit: '🐰',
  bear: '🐻', lion: '🦁', tiger: '🐯', monkey: '🐒', snake: '🐍',
  horse: '🐴', cow: '🐄', pig: '🐷', chicken: '🐔', duck: '🦆',
  elephant: '🐘', dolphin: '🐬', shark: '🦈', whale: '🐳', fox: '🦊',
  wolf: '🐺', deer: '🦌', panda: '🐼', koala: '🐨', penguin: '🐧',
  frog: '🐸', turtle: '🐢', octopus: '🐙', butterfly: '🦋', bee: '🐝',

  // Food & drink
  eat: '🍽️', food: '🍔', drink: '🥤', hungry: '😋', thirsty: '🥤',
  pizza: '🍕', burger: '🍔', sushi: '🍣', taco: '🌮', pasta: '🍝',
  bread: '🍞', rice: '🍚', soup: '🍜', salad: '🥗', cake: '🎂',
  cookie: '🍪', chocolate: '🍫', candy: '🍬', icecream: '🍦',
  coffee: '☕', tea: '🍵', beer: '🍺', wine: '🍷', water: '💧',
  juice: '🍹', milk: '🥛', egg: '🥚', cheese: '🧀', fruit: '🍎',
  apple: '🍎', banana: '🍌', strawberry: '🍓', lemon: '🍋', grapes: '🍇',
  watermelon: '🍉', pineapple: '🍍', avocado: '🥑', broccoli: '🥦',
  carrot: '🥕',

  // Nature
  sun: '☀️', moon: '🌙', star: '⭐', cloud: '☁️', rain: '🌧️',
  snow: '❄️', wind: '💨', fire: '🔥', earth: '🌍',
  mountain: '⛰️', tree: '🌳', flower: '🌸', leaf: '🍃', grass: '🌿',
  ocean: '🌊', beach: '🏖️', desert: '🏜️', forest: '🌲', island: '🏝️',
  sky: '🌤️', storm: '⛈️', rainbow: '🌈', lightning: '⚡', fog: '🌫️',
  hot: '🥵', cold: '🥶', warm: '☀️', freezing: '🥶', sunny: '☀️',
  rainy: '🌧️', snowy: '❄️', windy: '💨',

  // Travel & places
  home: '🏠', house: '🏡', school: '🏫', work: '💼', office: '🏢',
  hospital: '🏥', park: '🌳', market: '🏪', restaurant: '🍽️', hotel: '🏨',
  city: '🏙️', country: '🌍', travel: '✈️', trip: '🧳', vacation: '🏖️',
  car: '🚗', bus: '🚌', train: '🚂', plane: '✈️', boat: '⛵',
  bike: '🚲', taxi: '🚕', road: '🛣️', map: '🗺️', location: '📍',

  // Activities
  sleep: '😴', wake: '⏰', walk: '🚶', run: '🏃', dance: '💃',
  swim: '🏊', play: '🎮', read: '📚', write: '✍️', draw: '🎨',
  sing: '🎤', music: '🎵', cook: '👨‍🍳', clean: '🧹', shop: '🛍️',
  exercise: '💪', gym: '🏋️', yoga: '🧘', game: '🎮', sport: '⚽',
  football: '🏈', soccer: '⚽', basketball: '🏀', tennis: '🎾',
  baseball: '⚾', golf: '⛳', hike: '🥾',
  climb: '🧗', fishing: '🎣', hunt: '🏹', camp: '⛺', party: '🎉',
  movie: '🎬', show: '📺', concert: '🎤', festival: '🎪', wedding: '💒',
  birthday: '🎂', celebrate: '🎉',

  // Objects
  phone: '📱', computer: '💻', camera: '📷', book: '📖', pen: '✏️',
  key: '🔑', money: '💰', gift: '🎁', bag: '👜', clothes: '👗',
  hat: '🧢', shoes: '👟', glasses: '👓', watch: '⌚', ring: '💍',
  umbrella: '☂️', scissors: '✂️', hammer: '🔨', lock: '🔒',
  light: '💡', candle: '🕯️', clock: '🕐', calendar: '📅',

  // Time
  now: '⏰', today: '📅', tomorrow: '🌅', yesterday: '📅',
  soon: '⏳', late: '⌛', early: '⏰', time: '⏱️', wait: '⌛',
  fast: '⚡', slow: '🐢', always: '♾️', never: '🚫', forever: '♾️',

  // Health
  sick: '🤒', healthy: '💪', medicine: '💊', doctor: '👨‍⚕️', pain: '😣',
  headache: '🤕', fever: '🤒', cough: '😷', rest: '🛌',
  strong: '💪', weak: '😔', fit: '💪', hurt: '🤕',

  // Money & work
  rich: '💰', poor: '😢', job: '💼', boss: '👔', meeting: '🤝',
  deal: '🤝', buy: '🛒', sell: '💵', pay: '💳', free: '🆓',
  price: '🏷️', bank: '🏦', save: '💰', spend: '💸',

  // Misc
  idea: '💡', secret: '🤫', lie: '🤥', true: '✅', false: '❌',
  question: '❓', answer: '💬', talk: '🗣️', listen: '👂', see: '👀',
  look: '👀', find: '🔍', lost: '😕', help: '🆘', win: '🏆',
  lose: '😢', try: '💪', stop: '🛑', go: '🏃', start: '🚀',
  finish: '🏁', change: '🔄', new: '✨', old: '👴', big: '🐘',
  small: '🐜', beautiful: '😍', ugly: '😬', dirty: '🤢',
  easy: '😊', hard: '😤', simple: '👍', difficult: '😤',
  magic: '✨', dream: '💭', hope: '🌈', wish: '⭐', pray: '🙏',
  god: '✝️', luck: '🍀', peace: '☮️', war: '⚔️', fight: '🥊',
  danger: '⚠️', safe: '🛡️', power: '⚡', dark: '🌑',
  high: '⬆️', low: '⬇️', up: '⬆️', down: '⬇️', left: '⬅️',
  back: '🔙', next: '➡️', world: '🌍', life: '🌱', death: '💀',
  birth: '👶', grow: '🌱', young: '👶',
}

// ─── Emoji keyboard categories ────────────────────────────────────────────────

const KEYBOARD: { label: string; icon: string; emojis: string[] }[] = [
  {
    label: 'Smileys',
    icon: '😊',
    emojis: ['😀','😂','🤣','😊','😍','🥰','😘','😎','🤩','😏','😌','😔','😢','😭','😤','😠','😡','🤯','😱','😨','😰','🤔','🤭','🫢','🤫','🙄','😑','🙃','😶','🫡','🤐','😬','😪','🤤','😴','🥴','🤒','🤕','🤢','🤧','🥵','🥶','🤮','😵','🥸','😇','🥳','🤠','🤡','🤖','😺','😸','😹','😻','🙈','🙉','🙊'],
  },
  {
    label: 'Hearts',
    icon: '❤️',
    emojis: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✌️','🫶','🤝','🙏','👏','🫂','💏','💑'],
  },
  {
    label: 'People',
    icon: '👋',
    emojis: ['👋','🤚','✋','🖖','🫱','🫲','🫳','🫴','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','🫵','👍','👎','✊','👊','🤛','🤜','👐','🙌','👏','🤲','🫶','🙏','💅','🤳','💪','🦵','🦶','👃','👂','🫦','👶','🧒','👦','👧','🧑','👱','👨','🧔','👩','🧓','👴','👵','🧙','🧚','🧛','🧜','🧝','🦸','🦹'],
  },
  {
    label: 'Animals',
    icon: '🐶',
    emojis: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🪲','🐢','🐍','🦎','🦕','🦖','🦈','🐬','🐳','🐋','🦭','🐊','🦁','🐆','🦓','🦍','🦧','🦣','🐘','🦛','🦏','🐪','🐫','🦒'],
  },
  {
    label: 'Food',
    icon: '🍕',
    emojis: ['🍕','🍔','🌮','🌯','🥗','🍝','🍜','🍣','🍱','🍛','🍚','🍙','🥘','🍲','🥣','🥫','🧆','🥚','🍳','🧇','🥞','🧈','🍞','🥐','🥖','🫓','🥨','🧀','🥓','🍗','🍖','🌭','🍟','🥩','🥦','🥕','🌽','🥑','🧄','🧅','🍎','🍊','🍋','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥝','🍅','🍫','🍬','🍭','🧁','🎂','🍰','🍩','🍪','☕','🍵','🥤','🧃','🍺','🍷','🥂','🍾','🧉'],
  },
  {
    label: 'Travel',
    icon: '✈️',
    emojis: ['✈️','🚀','🛸','🚁','🛶','⛵','🚢','🚂','🚃','🚄','🚅','🚌','🚎','🚐','🚑','🚒','🚓','🚕','🛻','🚗','🚙','🛵','🏍️','🚲','🛴','🛺','🚦','🚧','⛽','🛞','🗺️','🧭','🏔️','⛰️','🌋','🗾','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🏘️','🏚️','🏠','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪','🕌','🛕','🕍'],
  },
  {
    label: 'Activities',
    icon: '⚽',
    emojis: ['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎱','🏓','🏸','🏒','🥅','⛳','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','⛸️','🥌','🎿','⛷️','🏂','🪂','🏋️','🤼','🤸','⛹️','🤺','🏇','🧘','🧗','🏄','🚣','🧜','🤾','🏌️','🏊','🤽','🚴','🏆','🥇','🥈','🥉','🏅','🎖️','🎪','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🎸','🎺','🎻','🥁','🎮','🎲','🎯','🎳','🎰','🧩','🪄'],
  },
  {
    label: 'Objects',
    icon: '💡',
    emojis: ['💡','🔦','🕯️','🔋','💻','📱','⌨️','🖥️','🖨️','🖱️','📷','📸','📹','🎥','📽️','📺','📻','📞','☎️','📟','📠','🔭','🔬','💊','💉','🩺','🩹','🩻','🧬','🔑','🗝️','🔐','🔒','🔓','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','🛡️','🔧','🔩','⚙️','🗜️','🔗','⛓️','🪝','🧲','🔮','🪬','💎','💰','💵','💳','📈','📉','📊','📦','📫','📮','📬','📭','📪','📝','✏️','🖊️','📖','📚','📰'],
  },
  {
    label: 'Nature',
    icon: '🌸',
    emojis: ['🌸','🌺','🌻','🌹','🪷','🌷','🌱','🌿','☘️','🍀','🎋','🎍','🍃','🍂','🍁','🍄','🪸','🌾','💐','🌵','🪴','🌲','🌳','🌴','🪨','🌊','💧','💦','🌬️','🌀','🌈','⚡','❄️','⭐','🌟','✨','💫','☀️','🌤️','⛅','🌦️','🌧️','⛈️','🌩️','🌨️','🌪️','🌫️','🌙','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌝','🌞','🪐','⛄','🌍','🌎','🌏'],
  },
  {
    label: 'Symbols',
    icon: '✅',
    emojis: ['✅','❌','⭕','🚫','💯','❓','❗','‼️','⁉️','🔴','🟠','🟡','🟢','🔵','🟣','⚫','⚪','🔶','🔷','🔸','🔹','🔺','🔻','♦️','🔘','🔲','🔳','🔱','⚜️','🏁','🚩','🎌','🏴','🏳️','🔇','🔈','🔉','🔊','📢','📣','🔔','🔕','🎵','🎶','💤','🔅','🔆','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🆗','🆕','🆙','🆓','🆒','🆖','📵','🔞','🔃','♻️','✔️','☑️','🔘','🔲'],
  },
]

// ─── Preset "emoji phrases" ───────────────────────────────────────────────────

const PRESETS: { label: string; msg: string }[] = [
  { label: 'Good morning!',   msg: '🌅☀️👋😊' },
  { label: 'I love you',      msg: '❤️😍🫶💕' },
  { label: 'Happy birthday!', msg: '🎂🎉🎁🥳🎈' },
  { label: "Let's eat!",      msg: '🍽️😋🍕🤤' },
  { label: 'LOL so funny',    msg: '😂🤣💀😭' },
  { label: 'Miss you',        msg: '💔😢👉❤️' },
  { label: 'Good night',      msg: '🌙😴💤⭐' },
  { label: "Let's go!",       msg: '🚀💪🏃⚡' },
  { label: 'Thank you',       msg: '🙏😊❤️✨' },
  { label: "I'm hungry",      msg: '🤤🍔😋🍕' },
  { label: 'So tired',        msg: '😴💤🥱😩' },
  { label: 'Feeling great',   msg: '💪😎🌟✨' },
  { label: 'Party time!',     msg: '🎉🥳🎈🍾' },
  { label: 'On my way',       msg: '🏃💨🚗💨' },
  { label: 'So cute',         msg: '🥹😍🫶✨' },
  { label: 'Bored',           msg: '😑📱🛋️💤' },
]

// ─── Text → pure emoji converter ─────────────────────────────────────────────

function textToEmoji(text: string): string {
  return text
    .toLowerCase()
    .split(/[\s,!?.;:'"()\-]+/)
    .filter(Boolean)
    .map(w => WORD_MAP[w] ?? null)
    .filter(Boolean)
    .join(' ')
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SpeakWithEmojisTool() {
  const [tab, setTab] = useState<'compose' | 'convert'>('convert')
  const [composed, setComposed] = useState('')
  const [convertInput, setConvertInput] = useState('')
  const [activeKb, setActiveKb] = useState(0)
  const [copied, setCopied] = useState<'compose' | 'convert' | null>(null)
  const composeRef = useRef<HTMLTextAreaElement>(null)

  const convertOutput = textToEmoji(convertInput)

  const addEmoji = useCallback((emoji: string) => {
    setComposed(prev => prev + emoji)
    composeRef.current?.focus()
  }, [])

  const backspace = useCallback(() => {
    setComposed(prev => {
      const arr = [...prev]
      arr.pop()
      return arr.join('')
    })
  }, [])

  const copy = useCallback((which: 'compose' | 'convert') => {
    const text = which === 'compose' ? composed : convertOutput
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopied(which)
    setTimeout(() => setCopied(null), 2000)
    toast({ title: 'Copied! 🎉', description: 'Emoji message copied to clipboard' })
  }, [composed, convertOutput])

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Mode toggle */}
      <div className="flex gap-1 p-1 rounded-xl bg-muted/40 border w-full">
        {(['convert', 'compose'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all touch-manipulation ${
              tab === t
                ? 'bg-background shadow-sm text-foreground border border-border/50'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t === 'convert' ? '🔄 Text → Emojis' : '⌨️ Emoji Composer'}
          </button>
        ))}
      </div>

      {/* ── COMPOSE TAB ── */}
      {tab === 'compose' && (
        <div className="space-y-4">

          {/* Preset phrases */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Phrases</p>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map(p => (
                <button
                  key={p.label}
                  onClick={() => setComposed(prev => prev + p.msg)}
                  title={p.label}
                  className="flex items-center gap-1 px-2 py-1 rounded-full border text-sm bg-muted/30 hover:bg-primary/10 hover:border-primary/30 transition-all touch-manipulation"
                >
                  <span>{p.msg.slice(0, 4)}</span>
                  <span className="text-[10px] text-muted-foreground hidden sm:inline">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Emoji keyboard — category tabs */}
          <div className="space-y-2">
            <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
              {KEYBOARD.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveKb(i)}
                  className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all touch-manipulation ${
                    activeKb === i
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/40 hover:bg-muted/70 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-1">
              {KEYBOARD[activeKb].emojis.map(e => (
                <button
                  key={e}
                  onClick={() => addEmoji(e)}
                  className="text-xl sm:text-2xl p-1.5 rounded-lg hover:bg-primary/10 active:scale-90 transition-all touch-manipulation"
                  title={e}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Message display */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Your Message</p>
              <div className="flex gap-2">
                {composed && (
                  <>
                    <button
                      onClick={backspace}
                      className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-destructive transition-colors px-2 py-1 rounded border hover:border-destructive/30"
                    >
                      <Delete className="w-3 h-3" />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                    <button
                      onClick={() => setComposed('')}
                      className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-destructive transition-colors px-2 py-1 rounded border hover:border-destructive/30"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Clear</span>
                    </button>
                  </>
                )}
                <Button
                  size="sm"
                  variant={copied === 'compose' ? 'default' : 'outline'}
                  className="h-7 text-xs shrink-0"
                  onClick={() => copy('compose')}
                  disabled={!composed}
                >
                  {copied === 'compose'
                    ? <><Check className="w-3 h-3 mr-1" />Copied</>
                    : <><Copy className="w-3 h-3 mr-1" />Copy</>}
                </Button>
              </div>
            </div>
            <div
              className={`p-4 rounded-xl border min-h-20 text-3xl sm:text-4xl leading-relaxed break-all cursor-pointer select-all tracking-wide transition-colors ${
                composed
                  ? 'bg-muted/30 hover:bg-primary/5'
                  : 'bg-muted/10 border-dashed'
              }`}
              onClick={() => composed && copy('compose')}
              title={composed ? 'Click to copy' : ''}
            >
              {composed
                ? composed
                : <span className="text-muted-foreground/40 text-base">Click emojis above to build your message… 👇</span>
              }
            </div>
            {composed && (
              <p className="text-[11px] text-muted-foreground">
                Click message to copy · {[...composed].length} emoji{[...composed].length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── CONVERT TAB ── */}
      {tab === 'convert' && (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Type Anything
            </label>
            <Textarea
              value={convertInput}
              onChange={e => setConvertInput(e.target.value)}
              placeholder="e.g. I love pizza and coffee with my dog…"
              className="min-h-28 text-base resize-none"
              autoFocus
            />
            {convertInput && (
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-muted-foreground">{convertInput.length} characters</span>
                <button
                  onClick={() => setConvertInput('')}
                  className="text-[11px] text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {convertInput && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide shrink-0">
                  Emoji Output
                </label>
                <Button
                  size="sm"
                  variant={copied === 'convert' ? 'default' : 'outline'}
                  className="h-7 text-xs shrink-0"
                  onClick={() => copy('convert')}
                  disabled={!convertOutput}
                >
                  {copied === 'convert'
                    ? <><Check className="w-3 h-3 mr-1" />Copied</>
                    : <><Copy className="w-3 h-3 mr-1" />Copy</>}
                </Button>
              </div>
              <div
                className={`p-4 rounded-xl border min-h-20 text-3xl sm:text-4xl leading-relaxed break-all tracking-wide cursor-pointer select-all ${
                  convertOutput ? 'bg-muted/30 hover:bg-primary/5' : 'bg-muted/10'
                }`}
                onClick={() => convertOutput && copy('convert')}
              >
                {convertOutput
                  ? convertOutput
                  : <span className="text-muted-foreground/50 text-sm">No matching emojis found — try words like "happy", "pizza", "dog", "love"…</span>
                }
              </div>
              {convertOutput && (
                <p className="text-[11px] text-muted-foreground">
                  Click to copy · {[...convertOutput].filter(c => c !== ' ').length} emojis matched
                </p>
              )}
            </div>
          )}

          {/* Word hints */}
          <div className="p-3 rounded-xl border bg-muted/20 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Example words that work</p>
            <div className="flex flex-wrap gap-1.5">
              {['happy','love','dog','pizza','sun','rain','fire','music','star','home','run','party','moon','coffee','king','dream','win','peace'].map(w => (
                <button
                  key={w}
                  onClick={() => setConvertInput(p => p ? p + ' ' + w : w)}
                  className="px-2 py-0.5 rounded-full bg-primary/5 border border-primary/20 text-xs hover:bg-primary/10 transition-colors"
                >
                  {w} {WORD_MAP[w]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
