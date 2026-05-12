import type { Metadata } from 'next'
import Link from 'next/link'
import { Puzzle, ChevronRight, Home, ArrowRight, PenLine, GraduationCap, Feather, BookOpen } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { FillInBlankSearch } from '@/components/fill-in-blank/fill-in-blank-search'
import { FILL_IN_BLANK_PAIRS, FEATURED_PAIRS } from '@/data/fill-in-blank-pairs'

export const metadata: Metadata = {
  title: 'Fill in the Blank — Find the Word That Fits',
  description:
    'Enter the words before and after a blank, and find what fits between them. Great for writers, crossword solvers, ESL learners, and anyone stuck on a phrase.',
  keywords: [
    'fill in the blank',
    'word that fits between',
    'word in context',
    'crossword helper',
    'word context finder',
    'words that go together',
    'word gap filler',
    'phrase completion',
    'sentence completion tool',
    'word between two words',
  ],
  alternates: { canonical: 'https://nagritranslate.com/fill-in-the-blank' },
  openGraph: {
    title: 'Fill in the Blank — Find the Word That Fits',
    description: 'Enter words before and after a blank — find what fits. Free phrase completion tool.',
    type: 'website',
  },
}

const USE_CASES = [
  { icon: BookOpen,    label: 'Crossword Solver',  desc: 'Find the word between two crossing hints.' },
  { icon: PenLine,     label: 'Writers',            desc: 'Discover natural phrasing for any gap.' },
  { icon: GraduationCap, label: 'ESL Learners',    desc: 'Learn what words naturally go together.' },
  { icon: Feather,     label: 'Poets',              desc: 'Find words that flow between two others.' },
]

const FAQ_ITEMS = [
  {
    question: 'How does fill-in-the-blank work?',
    answer:
      'You enter the word before the blank, the word after, or both. The tool searches a corpus of billions of English words to find what naturally fits between them — based on how real writers use words together.',
  },
  {
    question: 'Do I need to fill in both sides?',
    answer:
      'No. You can enter just the left word (to find words that naturally follow it) or just the right word (to find words that naturally precede it). Filling in both narrows the results to words that fit that specific context.',
  },
  {
    question: 'What is the source of the data?',
    answer:
      'Results come from the Datamuse API, which uses Google Books Ngrams — a dataset of over 500 billion words from published books. Words that appear together frequently across this corpus are surfaced as matches.',
  },
  {
    question: 'Why do common words like "a", "the", "of" appear?',
    answer:
      'Function words are extremely frequent in real English usage. They often naturally fit between content words — like "make a decision" or "out of control". They are valid results, especially for phrase completion.',
  },
  {
    question: 'What kinds of phrases work best?',
    answer:
      'Fixed phrases, common collocations, and everyday expressions give the best results. Examples: "make ___ decision", "out ___ control", "pay ___ attention", "word ___ mouth". Abstract or unusual combinations may return fewer results.',
  },
]

export default function FillInBlankPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Fill in the Blank', path: '/fill-in-the-blank' },
        ]}
      />
      <WebPageSchema
        path="/fill-in-the-blank"
        name="Fill in the Blank — Find the Word That Fits"
        description="Enter words before and after a blank — find what fits. Free phrase completion tool."
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
          <span className="text-foreground font-medium">Fill in the Blank</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Puzzle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Fill in the Blank</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Enter the words before and after a gap — find the word that naturally fits between them.
          </p>
          <FillInBlankSearch />
        </div>

        {/* Use cases */}
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

      {/* Featured examples */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Example phrases</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Click any phrase to see what word fits in the blank.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {FEATURED_PAIRS.map((pair, i) => (
            <Link
              key={i}
              href={`/fill-in-the-blank/${pair.before}/${pair.after}`}
              className="group p-4 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <p className="text-sm font-mono font-bold text-primary mb-2 group-hover:text-inherit">
                {pair.hint}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-inherit">
                Find the word <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All pairs */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-1">Browse phrase gaps</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Common English phrases with a blank — click to discover what fits.
        </p>
        <div className="flex flex-wrap gap-2">
          {FILL_IN_BLANK_PAIRS.map((pair, i) => (
            <Link
              key={i}
              href={`/fill-in-the-blank/${pair.before}/${pair.after}`}
              className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-sm font-mono"
            >
              {pair.hint}
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Enter the surrounding words',
              desc: 'Type the word that comes before the blank, the word that comes after, or both. Leave one empty to search one-sided.',
            },
            {
              step: '2',
              title: 'We search real usage',
              desc: 'The tool searches billions of words from published books to find which words commonly appear in that context.',
            },
            {
              step: '3',
              title: 'See the phrase assembled',
              desc: 'Each result shows the word placed into the phrase — so you can instantly see how it reads in context.',
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 p-4 border rounded-2xl bg-muted/10">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                {step}
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
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
          <h2 className="text-xl font-bold mb-2">Try any phrase gap</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Enter the words on either side of a blank and find what fits.
          </p>
          <FillInBlankSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
