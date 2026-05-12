import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, Shuffle, PenLine, BookOpen, GraduationCap, Trophy } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { WordUnscramblerTool } from '@/components/tools/word-unscrambler-tool'

export const metadata: Metadata = {
  title: 'Word Unscrambler — Unscramble Letters Into Words',
  description:
    'Unscramble any set of letters instantly and find all valid English words you can make. Free word unscrambler for Scrabble, Wordle, crosswords, and word games. Enter up to 12 letters.',
  keywords: [
    'word unscrambler',
    'unscramble words',
    'unscramble letters',
    'anagram solver',
    'word descrambler',
    'letters to words',
    'find words from letters',
    'word finder from letters',
    'make words from letters',
    'scrabble word finder',
    'wordle helper',
    'word game solver',
    'unscramble word game',
    'jumble solver',
    'scrambled word solver',
    'word scramble solver',
  ],
  alternates: { canonical: 'https://nagritranslate.com/word-unscrambler' },
  openGraph: {
    title: 'Word Unscrambler — Find All Words From Scrambled Letters',
    description: 'Enter scrambled letters and instantly find every word you can make. Free, fast, no sign-up. Great for Scrabble, Wordle, and crosswords.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    q: 'How does the word unscrambler work?',
    a: 'Enter your scrambled letters and the tool finds all valid English words that can be formed using only those letters (each letter used at most as many times as it appears in your input). Results are grouped by word length and sorted by how common each word is in English, so the most useful words appear first.',
  },
  {
    q: 'Can I use this for Wordle?',
    a: 'Yes. If you have a set of possible letters for a Wordle puzzle, enter them here to see all words of that length you could make. Then use the pattern finder (? for unknown letters) to narrow down further. The word unscrambler shows you all valid options from your letters.',
  },
  {
    q: 'Does it work for Scrabble?',
    a: 'Yes. Enter your 7 Scrabble tiles and the tool finds all words you can play, grouped by length. Longer words score higher in Scrabble, so look at the longer-word groups first for your best plays. Note that very rare Scrabble-specific words (like QI or ZA) may not always appear since results are ranked by common usage.',
  },
  {
    q: 'What is the maximum number of letters I can enter?',
    a: 'The tool accepts up to 12 letters. Beyond that, the number of possible words becomes very large and results may take longer to load. For Scrabble (7 tiles) and Wordle (5 letters) the tool works especially well.',
  },
  {
    q: 'Why are some words missing from the results?',
    a: 'Results are drawn from a corpus of common English words. Very rare, archaic, or highly technical words may not appear. The tool prioritizes the most useful and recognizable words. If you\'re looking for obscure Scrabble words specifically, try the Scrabble Word Finder tool.',
  },
  {
    q: 'What is an anagram?',
    a: 'An anagram is a word or phrase formed by rearranging all the letters of another word or phrase. For example, "listen" and "silent" are anagrams of each other — they use exactly the same letters. The word unscrambler finds all shorter words (sub-anagrams) you can make from a set of letters, not just full anagrams.',
  },
]

const USE_CASES = [
  { icon: Trophy,       label: 'Scrabble & Games', desc: 'Find highest-scoring plays from your tiles.' },
  { icon: PenLine,      label: 'Wordle Players',   desc: 'See all words possible from known letters.' },
  { icon: BookOpen,     label: 'Crosswords',        desc: 'Solve jumbled clues and fill tricky squares.' },
  { icon: GraduationCap,label: 'Word Puzzles',      desc: 'Beat jumble and anagram puzzles instantly.' },
]

const COMMON_EXAMPLES = [
  { letters: 'listen', words: ['listen', 'silent', 'tinsel', 'enlist', 'inlets'] },
  { letters: 'planet', words: ['planet', 'platen', 'plant', 'panel', 'plane'] },
  { letters: 'master', words: ['master', 'stream', 'tamers', 'maters', 'steam'] },
  { letters: 'garden', words: ['garden', 'danger', 'ranged', 'gander', 'grand'] },
]

const RELATED_TOOLS = [
  { label: 'Scrabble Finder',  desc: 'High-scoring Scrabble words',  href: '/scrabble-word-finder' },
  { label: 'Word Pattern',     desc: 'Match words by letter pattern', href: '/tools/word-pattern' },
  { label: 'Dictionary',       desc: 'Full definitions & examples',   href: '/dictionary' },
  { label: 'Rhymes',           desc: 'Perfect & near rhymes',         href: '/rhymes' },
  { label: 'Find the Word',    desc: 'Describe it, we\'ll name it',   href: '/find-the-word' },
]

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Word Unscrambler',
  url: 'https://nagritranslate.com/word-unscrambler',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Enter scrambled letters and instantly find all valid English words you can make. Free word unscrambler for Scrabble, Wordle, crosswords, and word games.',
}

export default function WordUnscramblerPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Word Unscrambler', path: '/word-unscrambler' },
      ]} />
      <WebPageSchema
        path="/word-unscrambler"
        name="Word Unscrambler — Unscramble Letters Into Words"
        description="Enter scrambled letters and instantly find all valid English words you can make. Free for Scrabble, Wordle, and word games."
        type="WebPage"
      />
      <Navbar />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-4 md:pt-14">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Word Unscrambler</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Shuffle className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Word Unscrambler</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Enter scrambled letters and instantly find every valid English word you can make.
            Results grouped by length — perfect for Scrabble, Wordle, crosswords, and word puzzles.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <WordUnscramblerTool />
      </section>

      {/* Example unscrambles — server-rendered for crawlers */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-2">Example unscrambles</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Some popular scrambled letter sets and the words they contain.
        </p>
        <div className="grid gap-3">
          {COMMON_EXAMPLES.map(({ letters, words }) => (
            <div key={letters} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border rounded-xl bg-muted/10">
              <span className="font-mono font-bold text-primary text-sm uppercase tracking-widest shrink-0 w-20">
                {letters}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {words.map(w => (
                  <Link
                    key={w}
                    href={`/dictionary/${encodeURIComponent(w)}`}
                    className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {w}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: '1', title: 'Enter your letters', body: 'Type the scrambled letters — up to 12. Letters only, no spaces. Works for Scrabble tiles, Wordle guesses, and jumble clues.' },
            { n: '2', title: 'All lengths checked', body: 'The tool searches for words of every length from 2 letters up to the full length of your input, finding every possible word.' },
            { n: '3', title: 'Grouped results', body: 'Words appear grouped by length, longest first. Use the min-length filter to focus on longer, higher-scoring words.' },
          ].map(({ n, title, body }) => (
            <div key={n} className="p-5 border rounded-2xl bg-muted/10">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mb-3">{n}</div>
              <p className="font-semibold text-sm mb-1">{title}</p>
              <p className="text-xs text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">Who uses the Word Unscrambler?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {USE_CASES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="p-4 border rounded-2xl bg-muted/20 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-base font-bold mb-3">Tips for best results</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Longer words score more in Scrabble</strong> — look at the longest word group first for your best play.</span></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Filter by minimum length</strong> — use the 4+ or 5+ filter to hide common short words and focus on useful ones.</span></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Click any word</strong> to see its full definition and check it fits your context before playing it.</span></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>For Wordle</strong> — enter the letters you know are in the word to see what 5-letter words they could make.</span></li>
          </ul>
        </div>
      </section>

      {/* Related tools */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Related tools</h2>
        <div className="flex flex-wrap gap-3">
          {RELATED_TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex flex-col px-4 py-3 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors min-w-[130px]"
            >
              <span className="text-sm font-medium">{tool.label}</span>
              <span className="text-xs text-muted-foreground">{tool.desc}</span>
            </Link>
          ))}
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
