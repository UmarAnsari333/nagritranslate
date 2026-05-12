import type { Metadata } from 'next'
import Link from 'next/link'
import { Volume2, ArrowRight, ChevronRight, Home, BookOpen, Feather, GraduationCap, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HOMOPHONE_WORDS } from '@/data/homophone-words'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { HomophonesSearch } from '@/components/homophones/homophones-search'

export const metadata: Metadata = {
  title: 'Homophones — Words That Sound the Same but Mean Different Things',
  description:
    'Find homophones for any English word — words that sound the same but have different spellings and meanings. there/their/they\'re, to/too/two, bear/bare and hundreds more.',
  keywords: [
    'homophones',
    'words that sound the same',
    'homophones list',
    'english homophones',
    'there their they\'re',
    'to too two',
    'homophone finder',
    'sound alike words',
    'homophones for kids',
    'homophones examples',
    'common homophones',
    'homophones in english',
  ],
  alternates: { canonical: 'https://nagritranslate.com/homophones' },
  openGraph: {
    title: 'Homophones — Words That Sound the Same but Mean Different Things',
    description: 'Find homophones for any English word. Free homophone finder with definitions.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What is a homophone?',
    answer:
      'A homophone is a word that sounds the same as another word when spoken aloud but has a different spelling and a different meaning. Examples: "there", "their", and "they\'re" all sound identical but mean completely different things. The word comes from Greek: "homo" (same) + "phone" (sound).',
  },
  {
    question: 'What are the most commonly confused homophones?',
    answer:
      'The most commonly confused homophones in English are: there/their/they\'re, to/too/two, your/you\'re, its/it\'s, affect/effect, accept/except, hear/here, and bear/bare. These trip up native speakers and ESL learners alike because they sound completely identical.',
  },
  {
    question: 'What is the difference between there, their, and they\'re?',
    answer:
      '"There" refers to a place ("put it over there") or introduces a sentence ("there is a dog"). "Their" is a possessive pronoun meaning belonging to them ("their house"). "They\'re" is a contraction of "they are" ("they\'re coming to the party").',
  },
  {
    question: 'What is the difference between to, too, and two?',
    answer:
      '"To" is a preposition used with verbs and directions ("go to school", "talk to me"). "Too" means also or excessively ("me too", "too hot"). "Two" is the number 2. A quick trick: "too" has an extra "o" — use it when there\'s something extra.',
  },
  {
    question: 'What is the difference between bear and bare?',
    answer:
      '"Bear" is the animal, or a verb meaning to carry or endure ("bear the weight", "bear with me"). "Bare" means uncovered, naked, or minimal ("bare feet", "bare minimum", "bare walls"). If you can swap it with "naked", use bare.',
  },
  {
    question: 'How many homophones does English have?',
    answer:
      'English has hundreds of homophone pairs and groups. Some estimates count over 400 homophone sets. English is particularly rich in homophones because it borrows words from so many languages — French, Norse, Latin, Greek — which often converge on the same sounds despite different spellings.',
  },
  {
    question: 'What is the difference between homophones, homonyms, and homographs?',
    answer:
      'Homophones sound the same but differ in spelling and meaning (there/their). Homonyms are words that share both spelling and sound but have different meanings — like "bat" (flying animal) and "bat" (cricket bat). Homographs share spelling but differ in pronunciation and meaning — like "lead" (the metal, rhymes with "bed") and "lead" (to guide, rhymes with "bead").',
  },
  {
    question: 'Are homophones the same in all accents?',
    answer:
      'No — homophones can differ by accent. In most American and British accents, "court" and "caught" are homophones, but in some accents they sound different. Similarly, "pin" and "pen" are homophones in some Southern American accents but not in others. This tool uses General American English as its reference.',
  },
]

const CATEGORIES = [
  {
    label: 'Most Confused',
    color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900',
    badge: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    pairs: [
      { words: 'there / their / they\'re', search: 'there' },
      { words: 'to / too / two', search: 'to' },
      { words: 'your / you\'re', search: 'your' },
      { words: 'its / it\'s', search: 'its' },
      { words: 'affect / effect', search: 'affect' },
      { words: 'accept / except', search: 'accept' },
    ],
  },
  {
    label: 'Nature',
    color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900',
    badge: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    pairs: [
      { words: 'sea / see', search: 'sea' },
      { words: 'sun / son', search: 'sun' },
      { words: 'flower / flour', search: 'flower' },
      { words: 'rain / reign / rein', search: 'rain' },
      { words: 'morning / mourning', search: 'morning' },
      { words: 'blew / blue', search: 'blew' },
    ],
  },
  {
    label: 'Animals',
    color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900',
    badge: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    pairs: [
      { words: 'bear / bare', search: 'bear' },
      { words: 'deer / dear', search: 'deer' },
      { words: 'hare / hair', search: 'hare' },
      { words: 'ewe / yew / you', search: 'ewe' },
      { words: 'fawn / faun', search: 'fawn' },
      { words: 'mussel / muscle', search: 'mussel' },
    ],
  },
  {
    label: 'Actions & Verbs',
    color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900',
    badge: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    pairs: [
      { words: 'write / right / rite', search: 'write' },
      { words: 'brake / break', search: 'brake' },
      { words: 'hear / here', search: 'hear' },
      { words: 'buy / by / bye', search: 'buy' },
      { words: 'know / no', search: 'know' },
      { words: 'wear / where / ware', search: 'wear' },
    ],
  },
]

const POPULAR_SEARCHES = [
  'there', 'bear', 'right', 'sea', 'hear', 'flower',
  'night', 'peace', 'sail', 'meet', 'role', 'steel',
]

const RELATED_TOOLS = [
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
  { label: 'Synonyms', desc: 'Similar words', href: '/synonyms' },
  { label: 'Antonyms', desc: 'Opposite words', href: '/antonyms' },
  { label: 'Adjectives For', desc: 'Words to describe nouns', href: '/adjectives-for' },
  { label: 'Collocations', desc: 'Words that go together', href: '/collocations' },
]

const USE_CASES = [
  { icon: GraduationCap, label: 'ESL Learners', desc: 'Master confusing sound-alike words.' },
  { icon: Feather, label: 'Writers', desc: 'Avoid embarrassing spelling mistakes.' },
  { icon: BookOpen, label: 'Students', desc: 'Ace spelling tests and grammar exams.' },
  { icon: Globe, label: 'Translators', desc: 'Understand nuance when translating.' },
]

const grouped = HOMOPHONE_WORDS.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

export default function HomophonesPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Homophones', path: '/homophones' },
      ]} />
      <WebPageSchema
        path="/homophones"
        name="Homophones — Words That Sound the Same but Mean Different Things"
        description="Find homophones for any English word. Free homophone finder with definitions."
        type="CollectionPage"
      />
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-6 md:pt-14">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Homophones</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Volume2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">English Homophones</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find words that sound exactly the same but have different spellings and meanings.
            Perfect for ESL learners, writers, and anyone who wants to use English correctly.
          </p>
          <HomophonesSearch />
        </div>

        {/* Popular searches */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/homophones/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                homophones of {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
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

      {/* Browse by category */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Common homophone pairs</h2>
        <p className="text-sm text-muted-foreground mb-5">
          The most searched and most confused homophones in English, grouped by theme.
        </p>
        <div className="space-y-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={`p-4 rounded-2xl border ${cat.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cat.badge}`}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.pairs.map((pair) => (
                  <Link
                    key={pair.search}
                    href={`/homophones/${pair.search}`}
                    className="group inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Volume2 className="w-3 h-3 text-muted-foreground group-hover:text-inherit shrink-0" />
                    {pair.words}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A–Z jump nav */}
      <section className="max-w-5xl mx-auto px-4 pb-4">
        <div className="p-4 bg-muted/30 rounded-2xl border">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Browse by letter</p>
          <div className="flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg border text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Word grid per letter */}
      <section className="max-w-5xl mx-auto px-4 pb-12 space-y-8">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-bold w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
                {letter}
              </span>
              <span className="text-xs text-muted-foreground">{grouped[letter].length} words</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {grouped[letter].map((word, i) => (
                <Link
                  key={`${i}-${word}`}
                  href={`/homophones/${word}`}
                  className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-sm"
                >
                  {word}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Related tools */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Related tools</h2>
        <div className="flex flex-wrap gap-3">
          {RELATED_TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex flex-col px-4 py-3 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors min-w-[120px]"
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
            <details
              key={item.question}
              className="group border rounded-2xl bg-muted/10 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm list-none select-none hover:bg-muted/30 transition-colors">
                {item.question}
                <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground rotate-90 group-open:rotate-270 transition-transform" />
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom search CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="p-6 md:p-8 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">Search any word</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Any English word works — just type it in to find its homophones.
          </p>
          <HomophonesSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
