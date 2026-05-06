import type { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, ArrowRight, ChevronRight, Home } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { ScrabbleFinderTool } from '@/components/tools/scrabble-finder-tool'

export const metadata: Metadata = {
  title: 'Scrabble Word Finder — Find Valid Scrabble Words by Pattern',
  description:
    'Find valid Scrabble words by pattern with instant point scores. Use wildcards to search — Q words, Z words, X words, 7-letter bingos, and more. Free Scrabble helper.',
  keywords: [
    'scrabble word finder',
    'scrabble helper',
    'scrabble word generator',
    'valid scrabble words',
    'scrabble pattern finder',
    'q words scrabble',
    'z words scrabble',
    'x words scrabble',
    'j words scrabble',
    'two letter scrabble words',
    'scrabble cheat',
    'scrabble dictionary',
    'high scoring scrabble words',
    'scrabble bingo words',
  ],
  alternates: { canonical: 'https://nagritranslate.com/scrabble-word-finder' },
  openGraph: {
    title: 'Scrabble Word Finder — Valid Words with Point Scores',
    description: 'Find valid Scrabble words by pattern. See point scores instantly. Free Scrabble helper.',
    type: 'website',
  },
}

// All valid 2-letter Scrabble words (TWL/OSPD)
const TWO_LETTER_WORDS = [
  'AA','AB','AD','AE','AG','AH','AI','AL','AM','AN','AR','AS','AT','AW','AX','AY',
  'BA','BE','BI','BO','BY',
  'DA','DE','DO',
  'ED','EF','EH','EL','EM','EN','ER','ES','ET','EW','EX',
  'FA','FE',
  'GI','GO',
  'HA','HE','HI','HM','HO',
  'ID','IF','IN','IS','IT',
  'JO',
  'KA','KI',
  'LA','LI','LO',
  'MA','ME','MI','MM','MO','MU','MY',
  'NA','NE','NO','NU',
  'OD','OE','OF','OH','OI','OM','ON','OP','OR','OS','OW','OX','OY',
  'PA','PE','PI',
  'QI',
  'RE',
  'SH','SI','SO',
  'TA','TE','TI','TO',
  'UH','UM','UN','UP','US','UT',
  'WE','WO',
  'XI','XU',
  'YA','YE','YO',
  'ZA',
]

const LETTER_SCORES: Record<string, number> = {
  A:1,E:1,I:1,O:1,U:1,L:1,N:1,S:1,T:1,R:1,
  D:2,G:2,
  B:3,C:3,M:3,P:3,
  F:4,H:4,V:4,W:4,Y:4,
  K:5,
  J:8,X:8,
  Q:10,Z:10,
}

function wordScore(word: string) {
  return word.split('').reduce((s, c) => s + (LETTER_SCORES[c] ?? 0), 0)
}

const HIGH_VALUE_PATTERNS = [
  { letter: 'Q', pattern: 'q?', label: 'Q words (2L)', example: 'QI' },
  { letter: 'Z', pattern: 'z??', label: 'Z words (3L)', example: 'ZAP, ZAG, ZIT' },
  { letter: 'X', pattern: '??x', label: 'X words (3L)', example: 'AXE, OXO, VOX' },
  { letter: 'J', pattern: 'j???', label: 'J words (4L)', example: 'JAZZ, JIBE, JAKE' },
]

const LETTER_VALUES = [
  { pts: 10, letters: ['Q','Z'] },
  { pts: 8, letters: ['J','X'] },
  { pts: 5, letters: ['K'] },
  { pts: 4, letters: ['F','H','V','W','Y'] },
  { pts: 3, letters: ['B','C','M','P'] },
  { pts: 2, letters: ['D','G'] },
  { pts: 1, letters: ['A','E','I','O','U','L','N','S','T','R'] },
]

const FAQ_ITEMS = [
  {
    q: 'What is a Scrabble Word Finder?',
    a: 'A Scrabble Word Finder is a tool that searches the official Scrabble dictionary (TWL/OSPD) for words matching a given pattern or set of letters. It shows the point value of each valid word, helping you find the highest-scoring plays.',
  },
  {
    q: 'How do I use the pattern search?',
    a: 'Use ? for one unknown letter and * for any number of letters. For example: "q?" finds 2-letter Q words (QI), "z??" finds 3-letter Z words (ZAP, ZAG, ZIT), "??x" finds 3-letter words ending in X, "*tion" finds all words ending in -tion.',
  },
  {
    q: 'What are the most valuable Scrabble letters?',
    a: 'Q and Z are worth 10 points each — the highest in Scrabble. J and X are worth 8 points. K is worth 5 points. The most common letters (A, E, I, O, U, L, N, S, T, R) are worth just 1 point each.',
  },
  {
    q: 'What is a Scrabble bingo?',
    a: 'A bingo is when you use all 7 tiles on your rack in one play, earning a 50-point bonus on top of the word score. To hit bingos, look for common endings like -ING, -TION, -ER, -ED and common prefixes like UN-, RE-, OUT-.',
  },
  {
    q: 'What are the best 2-letter Scrabble words to know?',
    a: 'The most useful 2-letter words include: QI (11pts), ZA (11pts), AX (9pts), OX (9pts), EX (9pts), XI (9pts), KA (5pts), KI (5pts), and JO (9pts). Knowing all 2-letter words lets you hook onto existing words and open up the board.',
  },
  {
    q: 'What are good Q words without U in Scrabble?',
    a: 'Q without U words in Scrabble include: QI (a Chinese life force concept), QOPH (Hebrew letter), QANAT (an irrigation tunnel), QIGONG, QINTAR, and TRANQ. QI is the most commonly played — it scores 11 points and works in almost any 2-letter spot.',
  },
  {
    q: 'What are high-scoring 7-letter Scrabble words?',
    a: 'High-scoring 7-letter bingo words include: MUZJIKS (79pts), QUARTZY (164pts with premium squares), ZYMURGY, WHIZZED, JUKEBOX, QUETZAL. For more achievable bingos, look for words using common letters: STORAGE, PAINTER, AILERON, RETAINS, NASTIER.',
  },
]

const RELATED_TOOLS = [
  { label: 'Word Pattern', desc: 'Any word by pattern', href: '/tools/word-pattern' },
  { label: 'Rhymes', desc: 'Rhyming words', href: '/rhymes' },
  { label: 'Synonyms', desc: 'Similar words', href: '/synonyms' },
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
  { label: 'Anagram tools', desc: 'All text tools', href: '/tools' },
]

export default function ScrabbleWordFinderPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Scrabble Word Finder', path: '/scrabble-word-finder' },
      ]} />
      <WebPageSchema
        path="/scrabble-word-finder"
        name="Scrabble Word Finder — Valid Words with Point Scores"
        description="Find valid Scrabble words by pattern. See point scores instantly."
        type="WebPage"
      />
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-6 md:pt-14">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Scrabble Word Finder</span>
        </nav>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Scrabble Word Finder</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find valid Scrabble words by pattern. Use <code className="font-mono bg-muted px-1 rounded text-sm">?</code> for one letter and <code className="font-mono bg-muted px-1 rounded text-sm">*</code> for any letters.
            Results are filtered to the official Scrabble dictionary with point scores shown.
          </p>
        </div>
      </section>

      {/* Main tool + sidebar */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <ScrabbleFinderTool />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Letter values */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base font-bold mb-3">Letter point values</h3>
              <div className="space-y-2">
                {LETTER_VALUES.map(({ pts, letters }, i) => (
                  <div key={pts} className="flex items-center gap-3">
                    <span className={`text-sm font-bold w-12 shrink-0 ${pts >= 8 ? 'text-amber-600 dark:text-amber-400' : pts >= 5 ? 'text-orange-500' : 'text-muted-foreground'}`}>
                      {pts} pts
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {letters.map((l) => (
                        <span key={l} className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-muted border">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High-value patterns */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-amber-950/20 dark:to-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800">
              <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-600" /> High-value searches
              </h3>
              <div className="space-y-2">
                {HIGH_VALUE_PATTERNS.map(({ pattern, label, example }, i) => (
                  <Link
                    key={pattern}
                    href={`/scrabble-word-finder?q=${pattern}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-background hover:bg-accent transition-colors group border"
                  >
                    <div>
                      <code className="font-mono text-sm font-bold">{pattern}</code>
                      <p className="text-xs text-muted-foreground">{label} — e.g. {example}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related tools */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base font-bold mb-3">Related tools</h3>
              <div className="space-y-2">
                {RELATED_TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="flex items-center justify-between p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-sm">{tool.label}</p>
                      <p className="text-xs text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2-letter words */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-2">All valid 2-letter Scrabble words</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Memorising 2-letter words is the #1 tip for better Scrabble. There are {TWO_LETTER_WORDS.length} valid 2-letter words in the official dictionary.
        </p>
        <div className="p-5 bg-muted/20 rounded-2xl border">
          <div className="flex flex-wrap gap-2">
            {TWO_LETTER_WORDS.map((w, i) => {
              const pts = wordScore(w)
              return (
                <Link
                  key={`${i}-${w}`}
                  href={`/dictionary/${w.toLowerCase()}`}
                  className={`inline-flex flex-col items-center px-2.5 py-1.5 rounded-xl border bg-background hover:bg-accent transition-colors ${pts >= 8 ? 'border-amber-300 dark:border-amber-700' : ''}`}
                >
                  <span className="text-sm font-bold font-mono">{w}</span>
                  <span className={`text-[10px] font-semibold ${pts >= 8 ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground'}`}>
                    {pts}pts
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group border rounded-2xl bg-muted/10 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm list-none select-none hover:bg-muted/30 transition-colors">
                {item.q}
                <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground rotate-90 group-open:rotate-270 transition-transform" />
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
