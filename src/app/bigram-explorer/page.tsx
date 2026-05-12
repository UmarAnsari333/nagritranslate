import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, BarChart2, PenLine, BookOpen, GraduationCap, Layers } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { BigramExplorerTool } from '@/components/tools/bigram-explorer-tool'

export const metadata: Metadata = {
  title: 'Bigram Explorer — Words That Come Before & After Any Word',
  description:
    'See which words most commonly appear before or after any word in real English text. Corpus-based bigram data for writers, editors, and language learners. Free word pair finder.',
  keywords: [
    'bigram explorer',
    'words before and after',
    'word pairs',
    'bigram finder',
    'common word combinations',
    'words that go with',
    'natural word pairs',
    'collocation finder',
    'words after word',
    'words before word',
    'corpus linguistics tool',
    'word co-occurrence',
    'word pair frequency',
    'English word pairs',
    'writing word pairs',
    'bigram frequency',
  ],
  alternates: { canonical: 'https://nagritranslate.com/bigram-explorer' },
  openGraph: {
    title: 'Bigram Explorer — Words That Come Before & After Any Word',
    description: 'Discover which words most commonly appear before or after any word in English. Corpus-based, free, instant results.',
    type: 'website',
  },
}

const USE_CASES = [
  { icon: PenLine,       label: 'Writers',        desc: 'Choose natural word pairings that sound fluent.' },
  { icon: BookOpen,      label: 'ESL Learners',   desc: 'Learn which words naturally go together in English.' },
  { icon: GraduationCap, label: 'Students',       desc: 'Study collocations for exams like IELTS and TOEFL.' },
  { icon: Layers,        label: 'Editors',        desc: 'Spot unnatural word combinations in manuscripts.' },
]

const EXAMPLES_TABLE = [
  { word: 'coffee',   before: ['black, iced, hot'],     after: ['shop, cup, table'] },
  { word: 'dark',     before: ['after, pitch, in the'], after: ['night, side, room'] },
  { word: 'free',     before: ['set, break, duty'],     after: ['time, trade, agent'] },
  { word: 'run',      before: ['long, dry, home'],      after: ['away, down, out'] },
]

const RELATED_TOOLS = [
  { label: 'Collocations',    desc: 'Words that go together',     href: '/collocations' },
  { label: 'Related Words',   desc: 'Topically associated words', href: '/related-words' },
  { label: 'Synonyms',        desc: 'Similar-meaning words',      href: '/synonyms' },
  { label: 'Find the Word',   desc: 'Describe it, we\'ll name it',href: '/find-the-word' },
  { label: 'Word Frequency',  desc: 'How common is a word?',      href: '/word-frequency' },
]

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Bigram Explorer — Words Before & After',
  url: 'https://nagritranslate.com/bigram-explorer',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Enter any word and see which words most commonly appear directly before or after it in English corpus data.',
}

const FAQ_ITEMS = [
  {
    q: 'What is a bigram?',
    a: 'A bigram is a pair of consecutive words in a text. "Coffee shop" and "black coffee" are both bigrams. Bigram frequency data tells you how often two specific words appear next to each other across millions of real English texts. High-frequency bigrams feel natural; low-frequency pairs can sound awkward or unnatural.',
  },
  {
    q: 'How is this different from collocations?',
    a: 'Collocations is a fill-in-the-blank tool — you give a word and it fills the gap with words that fit that position. Bigram Explorer is directional — it shows you the ranked list of words that appear directly before AND after a specific word across a large English corpus. It\'s better for exploring the full word-pair landscape around a term.',
  },
  {
    q: 'Where does the data come from?',
    a: 'The data comes from the Datamuse API, which is built on Google Books Ngrams and other large English corpora. The bigram frequency scores reflect how often each word pair appears per million words in real published English text — books, articles, and web content.',
  },
  {
    q: 'How can writers use this tool?',
    a: 'When you\'re stuck choosing between two phrasings, look up both words in Bigram Explorer to see which combinations appear most naturally in published English. For example, is it "dark night" or "dark evening"? Enter "dark" and see which words most commonly follow it. The top results reflect fluent, natural English usage.',
  },
  {
    q: 'How can ESL learners use this?',
    a: 'ESL learners often know a word but don\'t know which words naturally surround it. Enter any English word to see what typically comes before and after it. This builds intuition for natural English phrasing — the same kind of knowledge native speakers develop from years of reading and listening.',
  },
  {
    q: 'Why do some words return no results?',
    a: 'Very rare words, proper nouns, newly coined terms, and highly technical vocabulary may not appear in the bigram corpus. Try a more common base form of the word — for example, search "run" instead of "sprinted", or "dark" instead of "darkening".',
  },
]

export default function BigramExplorerPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Bigram Explorer', path: '/bigram-explorer' },
      ]} />
      <WebPageSchema
        path="/bigram-explorer"
        name="Bigram Explorer — Words That Come Before & After Any Word"
        description="See which words most commonly appear before or after any word in real English text. Corpus-based bigram data for writers and learners."
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
          <span className="text-foreground font-medium">Bigram Explorer</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BarChart2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Bigram Explorer</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Enter any word and see which words most commonly appear directly
            <strong> before</strong> and <strong>after</strong> it in real English text.
            Ranked by corpus frequency — so the most natural pairs come first.
          </p>
        </div>
      </section>

      {/* Interactive tool */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <BigramExplorerTool />
      </section>

      {/* Example table — server-rendered for crawlers */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-2">Example bigrams</h2>
        <p className="text-sm text-muted-foreground mb-5">
          A sample of common words and the words that most naturally precede or follow them.
        </p>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left px-5 py-3 font-semibold">Word</th>
                <th className="text-left px-5 py-3 font-semibold">Common words before</th>
                <th className="text-left px-5 py-3 font-semibold">Common words after</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLES_TABLE.map(({ word, before, after }, i) => (
                <tr key={word} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}>
                  <td className="px-5 py-3">
                    <Link href={`/bigram-explorer/${encodeURIComponent(word)}`} className="font-semibold text-primary hover:underline">
                      {word}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{before[0]}</td>
                  <td className="px-5 py-3 text-muted-foreground">{after[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: '1', title: 'Enter a word', body: 'Type any common English word. Base forms work best — use "run" not "sprinting", "dark" not "darkness".' },
            { n: '2', title: 'Corpus lookup', body: 'Two Datamuse API calls fire simultaneously — one for words that appear before, one for words that appear after, across millions of real English texts.' },
            { n: '3', title: 'Ranked results', body: 'Results are sorted by bigram frequency. Top results are the most natural-sounding pairings in published English. Click any word to explore its own bigrams.' },
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
        <h2 className="text-xl font-bold mb-5">Who uses Bigram Explorer?</h2>
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
