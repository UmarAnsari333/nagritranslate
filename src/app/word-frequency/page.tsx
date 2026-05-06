import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart2, ArrowRight, ChevronRight, Home } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { FrequencySearch } from '@/components/frequency/frequency-search'
import { FREQUENCY_WORDS } from '@/data/frequency-words'

export const metadata: Metadata = {
  title: 'Word Frequency Checker — How Common or Rare Is Any Word?',
  description:
    'Check how common or rare any English word is. See frequency scores, rarity levels, and compare words side by side. Powered by Google Books Ngrams data.',
  keywords: [
    'word frequency',
    'word frequency checker',
    'how common is a word',
    'how rare is a word',
    'word rarity',
    'word frequency tool',
    'common words english',
    'rare english words',
    'word usage frequency',
    'word occurrence rate',
  ],
  alternates: { canonical: 'https://nagritranslate.com/word-frequency' },
  openGraph: {
    title: 'Word Frequency Checker — How Common or Rare Is Any Word?',
    description: 'Check how common or rare any English word is. Free word frequency tool.',
    type: 'website',
  },
}

const FREQUENCY_TIERS = [
  {
    label: 'Very Common',
    range: '≥ 100 per million',
    color: 'bg-green-100 dark:bg-green-950/40',
    textColor: 'text-green-700 dark:text-green-400',
    dotColor: 'bg-green-500',
    examples: ['time', 'year', 'know', 'work', 'life'],
    desc: 'Core vocabulary used in every conversation and text.',
  },
  {
    label: 'Common',
    range: '10–100 per million',
    color: 'bg-emerald-100 dark:bg-emerald-950/40',
    textColor: 'text-emerald-700 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
    examples: ['happy', 'music', 'friend', 'dream', 'voice'],
    desc: 'Well-known words encountered regularly in everyday reading.',
  },
  {
    label: 'Everyday',
    range: '1–10 per million',
    color: 'bg-sky-100 dark:bg-sky-950/40',
    textColor: 'text-sky-700 dark:text-sky-400',
    dotColor: 'bg-sky-500',
    examples: ['journey', 'curious', 'laughter', 'courage', 'serene'],
    desc: 'Familiar words that appear regularly but not constantly.',
  },
  {
    label: 'Uncommon',
    range: '0.1–1 per million',
    color: 'bg-amber-100 dark:bg-amber-950/40',
    textColor: 'text-amber-700 dark:text-amber-400',
    dotColor: 'bg-amber-500',
    examples: ['eloquent', 'ephemeral', 'luminous', 'sagacious', 'austere'],
    desc: 'Words known by educated speakers but rarely used in casual speech.',
  },
  {
    label: 'Rare',
    range: '0.01–0.1 per million',
    color: 'bg-orange-100 dark:bg-orange-950/40',
    textColor: 'text-orange-700 dark:text-orange-400',
    dotColor: 'bg-orange-500',
    examples: ['quixotic', 'incandescent', 'mellifluous', 'perspicacious'],
    desc: 'Specialised or literary words seldom appearing in everyday text.',
  },
  {
    label: 'Very Rare',
    range: '< 0.01 per million',
    color: 'bg-red-100 dark:bg-red-950/40',
    textColor: 'text-red-700 dark:text-red-400',
    dotColor: 'bg-red-500',
    examples: ['petrichor', 'sonder', 'hiraeth', 'vellichor'],
    desc: 'Archaic, highly specialised, or newly coined words.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is word frequency?',
    answer:
      'Word frequency measures how often a word appears in a large body of text. The score shown here is occurrences per million words, derived from the Google Books Ngrams corpus — billions of words across centuries of published books.',
  },
  {
    question: 'What does "per million words" mean?',
    answer:
      'If a word has a frequency of 25, it appears roughly 25 times in every million words of text — or about once every 40,000 words. A frequency of 0.1 means it appears only once in every 10 million words.',
  },
  {
    question: 'Why would I care about word frequency?',
    answer:
      'Writers use frequency to gauge vocabulary level and audience appropriateness. Teachers use it to identify which words to prioritise for learners. Editors use it to spot words that may confuse readers. Poets and songwriters use it to find rare or euphonic alternatives.',
  },
  {
    question: 'Why do some words show no frequency data?',
    answer:
      'Proper nouns, brand names, very newly coined words, and extremely rare terms may not appear in the corpus. These are not assigned a frequency score by the API.',
  },
  {
    question: 'What is the source of the frequency data?',
    answer:
      'Frequency scores come from the Datamuse API, which sources its data from the Google Books Ngrams dataset — a corpus of over 500 billion words taken from books published between 1800 and 2019.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const grouped = FREQUENCY_WORDS.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

const FEATURED = [
  'happy', 'ephemeral', 'bold', 'curious', 'melancholy',
  'brave', 'eloquent', 'serene', 'radiant', 'quixotic',
  'kind', 'luminous',
]

export default function WordFrequencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Word Frequency', path: '/word-frequency' },
        ]}
      />
      <WebPageSchema
        path="/word-frequency"
        name="Word Frequency Checker — How Common or Rare Is Any Word?"
        description="Check how common or rare any English word is. Free word frequency tool."
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
          <span className="text-foreground font-medium">Word Frequency</span>
        </nav>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <BarChart2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Word Frequency Checker</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find out how common or rare any English word is. Get a frequency score, rarity level,
            and see how it compares to similar words.
          </p>
          <FrequencySearch />
        </div>

        {/* Featured */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">
            Popular searches
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {FEATURED.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/word-frequency/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequency scale */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Frequency scale</h2>
        <p className="text-sm text-muted-foreground mb-5">
          English words span many orders of magnitude — from words used thousands of times per
          million to those barely seen once in a billion.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FREQUENCY_TIERS.map((tier) => (
            <div key={tier.label} className={`p-4 rounded-2xl border ${tier.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2.5 h-2.5 rounded-full ${tier.dotColor}`} />
                <span className={`text-sm font-bold ${tier.textColor}`}>{tier.label}</span>
                <span className="text-xs text-muted-foreground ml-auto">{tier.range}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{tier.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tier.examples.map((ex) => (
                  <Link
                    key={ex}
                    href={`/word-frequency/${ex}`}
                    className="text-xs px-2 py-1 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {ex}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A–Z nav */}
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

      {/* Word grid */}
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
                  href={`/word-frequency/${word}`}
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

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group border rounded-2xl bg-muted/10 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm list-none select-none hover:bg-muted/30 transition-colors">
                {item.question}
                <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground rotate-90 group-open:rotate-270 transition-transform" />
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">Check any word</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Enter any English word to see its frequency score and rarity level.
          </p>
          <FrequencySearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
