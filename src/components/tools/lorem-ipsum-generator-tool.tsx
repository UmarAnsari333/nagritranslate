'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

type Tab = 'classic' | 'funny' | 'characters'
type ClassicMode = 'paragraphs' | 'sentences' | 'words'

// ─── Classic corpus ───────────────────────────────────────────────────────────

const LOREM_SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
  'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
  'Ut labore et dolore magnam aliquam quaerat voluptatem exercitationem.',
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  'Nam libero tempore cum soluta nobis eligendi optio cumque nihil.',
  'Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus.',
  'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis.',
  'Quis nostrum exercitationem ullam corporis suscipit laboriosam.',
  'Praesent commodo cursus magna vel scelerisque nisl consectetur.',
  'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
  'Maecenas sed diam eget risus varius blandit sit amet non magna.',
  'Curabitur pretium tincidunt lacus nulla mauris pharetra elementum.',
  'Nullam varius nulla justo commodo dignissim lorem blandit posuere.',
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  'Aenean lacinia bibendum nulla sed consectetur porta lorem egestas.',
  'Fusce dapibus tellus ac cursus commodo tortor mauris condimentum.',
  'Donec sed odio dui consequat semper feugiat nulla facilisi morbi.',
]

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'eiusmod', 'tempor', 'incididunt', 'labore', 'dolore', 'magna', 'aliqua',
  'enim', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris',
  'aliquip', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'reprehenderit',
  'voluptate', 'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur',
  'sint', 'occaecat', 'cupidatat', 'proident', 'culpa', 'officia', 'deserunt',
  'mollit', 'anim', 'laborum', 'perspiciatis', 'unde', 'omnis', 'iste', 'natus',
  'error', 'voluptatem', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem',
  'aperiam', 'eaque', 'inventore', 'veritatis', 'architecto', 'beatae', 'vitae',
  'explicabo', 'nemo', 'ipsam', 'aspernatur', 'odit', 'fugit', 'consequuntur',
  'dolores', 'ratione', 'sequi', 'nesciunt', 'neque', 'porro', 'quisquam',
  'praesent', 'pellentesque', 'maecenas', 'curabitur', 'vivamus', 'aenean', 'fusce',
]

function generateClassic(mode: ClassicMode, count: number, startWithLorem: boolean): string {
  if (mode === 'words') {
    const words: string[] = []
    if (startWithLorem) {
      words.push('Lorem', 'ipsum', 'dolor', 'sit', 'amet')
      for (let i = 5; i < count; i++) words.push(LOREM_WORDS[i % LOREM_WORDS.length])
    } else {
      for (let i = 0; i < count; i++) words.push(LOREM_WORDS[i % LOREM_WORDS.length])
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    }
    return words.join(' ') + '.'
  }

  if (mode === 'sentences') {
    const out: string[] = []
    for (let i = 0; i < count; i++) {
      if (i === 0 && startWithLorem) {
        out.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      } else {
        out.push(LOREM_SENTENCES[(i + 1) % LOREM_SENTENCES.length])
      }
    }
    return out.join(' ')
  }

  // paragraphs — 4 sentences each
  const SPS = 4
  const paras: string[] = []
  for (let p = 0; p < count; p++) {
    const sentences: string[] = []
    for (let s = 0; s < SPS; s++) {
      const idx = p * SPS + s
      if (idx === 0 && startWithLorem) {
        sentences.push(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        )
      } else {
        sentences.push(LOREM_SENTENCES[(idx + 1) % LOREM_SENTENCES.length])
      }
    }
    paras.push(sentences.join(' '))
  }
  return paras.join('\n\n')
}

// ─── Funny themes ─────────────────────────────────────────────────────────────

const FUNNY_THEMES = {
  bacon: {
    name: 'Bacon Ipsum',
    emoji: '🥓',
    desc: 'Meat-themed placeholder text',
    sentences: [
      'Bacon ipsum dolor amet ham hock strip steak frankfurter short loin biltong andouille.',
      'Picanha pork belly landjaeger turducken shoulder t-bone spare ribs beef ribs bresaola.',
      'Pastrami jerky chuck jowl meatball, bacon pancetta tail hamburger tri-tip ribeye.',
      'Tongue fatback bresaola chicken meatloaf kielbasa shankle andouille sirloin drumstick.',
      'Swine short ribs venison corned beef brisket sausage pig filet mignon capicola.',
      'Kevin ground round pork chop burgdoggen short loin buffalo spare ribs chicken jowl.',
      'Flank drumstick beef ribs t-bone tenderloin sirloin ham shank kevin pastrami.',
      'Chislic chicken turducken shankle cupim boudin beef ribs short ribs strip steak.',
      'Prosciutto strip steak spare ribs burgdoggen pork belly sirloin alcatra tail chuck.',
      'Ball tip alcatra salami meatball buffalo andouille turkey pork belly ground round.',
    ],
  },
  zombie: {
    name: 'Zombie Ipsum',
    emoji: '🧟',
    desc: 'Undead apocalypse placeholder text',
    sentences: [
      'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.',
      'De carne lumbering animata corpora quaeritis seminecs mortuis soulless creaturas.',
      'Atterriss hackensack undead brains brains brains devouring the living.',
      'Animated corpse cricket bat maximus brain in zombie apocalypse reprehenderit.',
      'Pestilentia monstra sumus ferociter cerebro in aeternum moaning through the streets.',
      'Lurching horde of undead shamblers descended on the shopping mall at midnight.',
      'Groaning masses stumbled forward eyes glazed hunger unending and eternal.',
      'Rotting flesh shambling gait relentless pursuit of the last survivors.',
      'Dead walk again streets empty sirens silent only moaning remains of civilization.',
      'Outbreak spread faster than anyone predicted cities fell overnight chaos reigned.',
    ],
  },
  pirate: {
    name: 'Pirate Ipsum',
    emoji: '🏴‍☠️',
    desc: 'High seas nautical placeholder text',
    sentences: [
      "Ahoy matey, scallywag jolly roger davy jones locker blimey landlubber ye pirates.",
      'Shiver me timbers ye scurvy dog walk the plank dead men tell no tales arrr.',
      'Hornswaggle the buccaneers hoisted the Jolly Roger and made for open seas tonight.',
      'Avast ye hearties weigh anchor hoist the mizzen yo-ho-ho a bottle of rum.',
      'Plunder the Spanish Main doubloons pieces of eight rum rations sea dogs ahoy.',
      'Starboard port bow stern crow\'s nest quarterdeck forecastle bilge rat gangplank.',
      'Keelhaul that lily-livered lubber fire the cannons and board her at sunrise.',
      'Privateer corsair brigantine galleon frigate sloop man-o-war broadside cannon.',
      'Thar she blows set sail for the horizon and follow the trade winds to Tortuga.',
      'Buried treasure X marks the spot on the ancient map stolen from the captain.',
    ],
  },
  corporate: {
    name: 'Corporate Ipsum',
    emoji: '💼',
    desc: 'Business buzzword placeholder text',
    sentences: [
      'Synergize disruptive innovation leverage core competencies going forward strategically.',
      "Let's circle back to ideate actionable frameworks with all key stakeholders today.",
      'Pivot the paradigm shift and take this offline to blue-sky the deliverables asap.',
      'Boil the ocean with best-in-class solutions that move the needle on KPIs.',
      'Bandwidth permitting we\'ll socialize the deck and align on next steps by EOD.',
      'Touch base on the low-hanging fruit to accelerate our value proposition growth.',
      'Optimize the scalable agile workflow synergies to empower cross-functional teams.',
      'Proactively empower teams to streamline the pipeline and crush Q3 targets.',
      'Deep dive into the pain points and holistically disrupt the entire ecosystem.',
      'At the end of the day let\'s think outside the box and own this space together.',
    ],
  },
  cat: {
    name: 'Cat Ipsum',
    emoji: '🐱',
    desc: 'Feline behavior placeholder text',
    sentences: [
      'Meow purr hiss chase the laser pointer then knock everything off the table.',
      'Stare at wall scratch the sofa ignore human entirely then knead on lap at 3am.',
      'Leave dead mouse as gift sleep all day be extremely active at 3am yowl loudly.',
      'Swat at dog run from vacuum cleaner demand food loudly then completely ignore it.',
      'Hairball on white carpet stare blankly at owner until fed premium wet food.',
      'Push glass off table slowly maintaining eye contact make muffins on human lap.',
      'Groom for three hours judge everything with contempt squeeze into impossibly small box.',
      'Zoom through house at midnight chirp at birds through window then fall asleep.',
      'Headbutt human leg demand pets then immediately scratch the hand that feeds you.',
      'Sit on keyboard while human is working because laptop is warm and important.',
    ],
  },
  hipster: {
    name: 'Hipster Ipsum',
    emoji: '🧔',
    desc: 'Artisan craft culture placeholder text',
    sentences: [
      'Artisan craft beer beard farm-to-table kale chips fixie bicycle vinyl records.',
      'Letterpress vinyl cold-pressed sriracha tattooed irony chambray flannel aesthetic.',
      'Kombucha small batch single-origin coffee pork belly distillery normcore ennui.',
      'Tumblr asymmetrical jean shorts gluten-free quinoa normcore put a bird on it.',
      'Sustainable chia slow-carb humblebrag Brooklyn williamsburg typewriter 8-bit.',
      'Thundercats williamsburg typewriter 8-bit chicharrones bitters vaporware mixtape.',
      'Poutine twee lumbersexual mlkshk intelligentsia YOLO crucifix microdosing.',
      'Meggings put a bird on it man bun tofu narwhal ethical plaid scenester lo-fi.',
      'Scenester lo-fi mixtape banjo pickled truffaut bespoke aesthetic deep v freegan.',
      'Microdosing bespoke aesthetic deep v normcore occupy freegan artisanal cold brew.',
    ],
  },
} as const

type FunnyTheme = keyof typeof FUNNY_THEMES

function generateFunny(theme: FunnyTheme, paragraphs: number): string {
  const { sentences } = FUNNY_THEMES[theme]
  const SPS = 3
  const paras: string[] = []
  for (let p = 0; p < paragraphs; p++) {
    const s: string[] = []
    for (let i = 0; i < SPS; i++) s.push(sentences[(p * SPS + i) % sentences.length])
    paras.push(s.join(' '))
  }
  return paras.join('\n\n')
}

function generateByChars(charCount: number, breakAtWord: boolean): string {
  let full = ''
  while (full.length < charCount + 300) full += LOREM_SENTENCES.join(' ') + ' '
  if (full.length <= charCount) return full.trim()
  let trimmed = full.substring(0, charCount)
  if (breakAtWord) {
    const lastSpace = trimmed.lastIndexOf(' ')
    if (lastSpace > charCount * 0.8) trimmed = trimmed.substring(0, lastSpace)
  }
  return trimmed.trim()
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LoremIpsumGeneratorTool() {
  const [tab, setTab] = useState<Tab>('classic')
  const [copied, setCopied] = useState(false)

  // Classic
  const [classicMode, setClassicMode] = useState<ClassicMode>('paragraphs')
  const [classicCount, setClassicCount] = useState(3)
  const [startWithLorem, setStartWithLorem] = useState(true)

  // Funny
  const [funnyTheme, setFunnyTheme] = useState<FunnyTheme>('bacon')
  const [funnyParas, setFunnyParas] = useState(2)

  // Characters
  const [charCount, setCharCount] = useState(500)
  const [breakAtWord, setBreakAtWord] = useState(true)

  const output =
    tab === 'classic'
      ? generateClassic(classicMode, classicCount, startWithLorem)
      : tab === 'funny'
        ? generateFunny(funnyTheme, funnyParas)
        : generateByChars(charCount, breakAtWord)

  const wordCount = output.split(/\s+/).filter(Boolean).length

  function copyText() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const classicLimits = {
    paragraphs: { min: 1, max: 20, defaultCount: 3 },
    sentences: { min: 1, max: 50, defaultCount: 5 },
    words: { min: 10, max: 500, defaultCount: 100 },
  }

  const outputRows =
    tab === 'classic' && classicMode === 'paragraphs'
      ? Math.min(classicCount * 4, 18)
      : tab === 'characters'
        ? Math.max(6, Math.min(Math.ceil(charCount / 100), 18))
        : 8

  return (
    <div className="space-y-6">

      {/* ── Tab Selector ── */}
      <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border w-full sm:w-fit">
        {(
          [
            { id: 'classic', label: 'Classic' },
            { id: 'funny', label: 'Funny Themes' },
            { id: 'characters', label: 'By Characters' },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-semibold transition ${tab === id ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Classic Controls ── */}
      {tab === 'classic' && (
        <div className="p-4 rounded-xl bg-muted/10 border space-y-5">
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">Generate by</label>
            <div className="flex gap-2">
              {(['paragraphs', 'sentences', 'words'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => { setClassicMode(m); setClassicCount(classicLimits[m].defaultCount) }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border capitalize transition ${classicMode === m ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-muted/20'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              Count: <span className="text-foreground font-bold">{classicCount} {classicMode}</span>
            </label>
            <input
              type="range"
              min={classicLimits[classicMode].min}
              max={classicLimits[classicMode].max}
              value={classicCount}
              onChange={(e) => setClassicCount(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
              <span>{classicLimits[classicMode].min}</span>
              <span>{classicLimits[classicMode].max}</span>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={startWithLorem}
              onChange={(e) => setStartWithLorem(e.target.checked)}
              className="w-4 h-4 accent-primary rounded"
            />
            <span className="text-sm">Start with &ldquo;Lorem ipsum…&rdquo;</span>
          </label>
        </div>
      )}

      {/* ── Funny Controls ── */}
      {tab === 'funny' && (
        <div className="p-4 rounded-xl bg-muted/10 border space-y-5">
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">Theme</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(Object.entries(FUNNY_THEMES) as [FunnyTheme, (typeof FUNNY_THEMES)[FunnyTheme]][]).map(
                ([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => setFunnyTheme(key)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition ${funnyTheme === key ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-muted/20'}`}
                  >
                    <span className="text-lg">{theme.emoji}</span>
                    <span className="text-xs font-semibold">{theme.name}</span>
                  </button>
                ),
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">{FUNNY_THEMES[funnyTheme].desc}</p>
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              Paragraphs: <span className="text-foreground font-bold">{funnyParas}</span>
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={funnyParas}
              onChange={(e) => setFunnyParas(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
              <span>1</span>
              <span>5</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Characters Controls ── */}
      {tab === 'characters' && (
        <div className="p-4 rounded-xl bg-muted/10 border space-y-5">
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              Characters: <span className="text-foreground font-bold">{charCount.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={charCount}
              onChange={(e) => setCharCount(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
              <span>50</span>
              <span>5,000</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs text-muted-foreground shrink-0">Or enter exact count:</label>
            <input
              type="number"
              min={50}
              max={10000}
              value={charCount}
              onChange={(e) => setCharCount(Math.max(50, Math.min(10000, Number(e.target.value))))}
              className="w-28 px-3 py-1.5 rounded-lg border bg-background text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={breakAtWord}
              onChange={(e) => setBreakAtWord(e.target.checked)}
              className="w-4 h-4 accent-primary rounded"
            />
            <span className="text-sm">Break at word boundary (no mid-word cut)</span>
          </label>
        </div>
      )}

      {/* ── Output ── */}
      <div>
        <div className="flex items-center justify-between mb-2 gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Generated Text</span>
            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted/30 border">
              {output.length.toLocaleString()} chars · {wordCount.toLocaleString()} words
            </span>
          </div>
          <button
            onClick={copyText}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold border bg-background hover:bg-muted/20 transition"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy All'}
          </button>
        </div>
        <textarea
          readOnly
          value={output}
          rows={outputRows}
          onClick={(e) => (e.target as HTMLTextAreaElement).select()}
          className="w-full px-4 py-3 rounded-xl border bg-muted/5 text-sm resize-y focus:outline-none font-sans leading-relaxed cursor-pointer"
        />
        <p className="text-xs text-muted-foreground mt-1.5">Click the text to select all, or use Copy All above.</p>
      </div>
    </div>
  )
}
