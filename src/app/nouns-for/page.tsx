import type { Metadata } from 'next'
import Link from 'next/link'
import { Tag, ArrowRight, ChevronRight, Home, BookOpen, Feather, GraduationCap, Gamepad2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { NOUN_ADJECTIVES } from '@/data/noun-adjectives'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { NounsForSearch } from '@/components/nouns/nouns-for-search'

export const metadata: Metadata = {
  title: 'Nouns For Any Adjective — Things Described by a Word',
  description:
    'Find nouns that are commonly described by any adjective. Discover what things, people, and places are brave, dark, golden, ancient, and more. Free tool for writers and students.',
  keywords: [
    'nouns for',
    'things that are',
    'nouns described by adjective',
    'noun finder',
    'words described by adjective',
    'what is brave',
    'what is dark',
    'adjective to noun',
    'nouns for writers',
    'descriptive nouns',
  ],
  alternates: { canonical: 'https://nagritranslate.com/nouns-for' },
  openGraph: {
    title: 'Nouns For Any Adjective — Things Described by a Word',
    description: 'Find nouns described by any adjective. Free noun finder for writers, students & bloggers.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What does "nouns for an adjective" mean?',
    answer:
      'It means finding the nouns that are most commonly described by a given adjective. For example, for "brave" you might find: hero, warrior, soldier, knight. For "ancient" you might find: ruin, temple, forest, scroll. These are the nouns that naturally pair with that adjective in everyday English.',
  },
  {
    question: 'How is this different from "adjectives for a noun"?',
    answer:
      'They are opposite directions of the same relationship. "Adjectives for dog" asks what words describe a dog (loyal, playful, fierce). "Nouns for loyal" asks what things are described as loyal (dog, friend, soldier, knight). Both use the same adjective–noun pairing from language data.',
  },
  {
    question: 'What are nouns for the adjective "brave"?',
    answer:
      'Common nouns for "brave" include: hero, warrior, soldier, knight, heart, soul, act, deed, and spirit. These are the people, qualities, and things most frequently described as brave in English writing.',
  },
  {
    question: 'What are nouns for the adjective "dark"?',
    answer:
      'Common nouns for "dark" include: night, forest, shadow, cave, secret, sky, alley, corner, abyss, and soul. "Dark" is one of the most versatile adjectives and pairs with a huge range of nouns in creative writing.',
  },
  {
    question: 'What are nouns for the adjective "ancient"?',
    answer:
      'Common nouns for "ancient" include: ruin, temple, forest, scroll, civilization, mystery, god, tome, artifact, and legend. Ancient pairs naturally with historical and mythological concepts.',
  },
  {
    question: 'How can I use this tool for creative writing?',
    answer:
      'Search the adjective that fits the mood or tone you want — then pick from the nouns to find the perfect subject for your sentence. For example, if you want something "ethereal", the nouns might give you: light, beauty, voice, being, glow. This helps you avoid clichés and find fresher pairings.',
  },
  {
    question: 'What adjectives have the most nouns?',
    answer:
      'High-frequency adjectives like "dark", "old", "golden", "wild", "small", and "broken" pair with an enormous range of nouns. More specific adjectives like "crimson" or "hollow" tend to have fewer but more vivid noun matches.',
  },
]

const CATEGORIES = [
  {
    label: 'Size',
    color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    words: ['big', 'small', 'huge', 'tiny', 'vast', 'giant', 'tall', 'deep', 'narrow', 'colossal'],
  },
  {
    label: 'Color & Light',
    color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900',
    badge: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    words: ['golden', 'crimson', 'pale', 'dark', 'bright', 'silver', 'black', 'white', 'scarlet', 'violet'],
  },
  {
    label: 'Personality',
    color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900',
    badge: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    words: ['brave', 'fierce', 'noble', 'cunning', 'wise', 'loyal', 'cruel', 'gentle', 'bold', 'ruthless'],
  },
  {
    label: 'Emotion',
    color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900',
    badge: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    words: ['lonely', 'joyful', 'angry', 'hopeful', 'mournful', 'serene', 'desperate', 'fearful', 'bitter', 'radiant'],
  },
  {
    label: 'Appearance',
    color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900',
    badge: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    words: ['ancient', 'beautiful', 'ruined', 'hidden', 'sacred', 'forbidden', 'wild', 'worn', 'shining', 'crumbling'],
  },
  {
    label: 'Physical',
    color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    words: ['hot', 'cold', 'heavy', 'sharp', 'soft', 'frozen', 'broken', 'hollow', 'rough', 'burning'],
  },
]

const POPULAR_SEARCHES = [
  'brave', 'dark', 'golden', 'ancient', 'wild', 'silent',
  'lost', 'fierce', 'beautiful', 'cold', 'hollow', 'sacred',
]

const RELATED_TOOLS = [
  { label: 'Adjectives For', desc: 'Words to describe nouns', href: '/adjectives-for' },
  { label: 'Synonyms', desc: 'Similar words', href: '/synonyms' },
  { label: 'Antonyms', desc: 'Opposite words', href: '/antonyms' },
  { label: 'Collocations', desc: 'Words that go together', href: '/collocations' },
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
]

const USE_CASES = [
  { icon: Feather, label: 'Creative Writing', desc: 'Find the perfect noun for any mood or tone.' },
  { icon: GraduationCap, label: 'Essays & School', desc: 'Build vivid, precise descriptions.' },
  { icon: BookOpen, label: 'Content & Blogs', desc: 'Richer language that engages readers.' },
  { icon: Gamepad2, label: 'Word Games', desc: 'Crosswords, Scrabble & writing prompts.' },
]

const grouped = NOUN_ADJECTIVES.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function NounsForPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Nouns For', path: '/nouns-for' },
      ]} />
      <WebPageSchema
        path="/nouns-for"
        name="Nouns For Any Adjective — Things Described by a Word"
        description="Find nouns described by any adjective. Free noun finder for writers, students & bloggers."
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
          <span className="text-foreground font-medium">Nouns For</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Tag className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Nouns For Any Adjective</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover what things, people, and places are commonly described by any adjective.
            Type an adjective and instantly find the nouns that naturally go with it.
          </p>
          <NounsForSearch />
        </div>

        {/* Popular searches */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/nouns-for/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                nouns for {word}
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
        <h2 className="text-xl font-bold mb-1">Browse by category</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Jump to the adjective type you need — each category targets common descriptive patterns.
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
                {cat.words.map((word, i) => (
                  <Link
                    key={`${i}-${word}`}
                    href={`/nouns-for/${word}`}
                    className="group inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {word}
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
              <span className="text-xs text-muted-foreground">{grouped[letter].length} adjectives</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {grouped[letter].map((word, i) => (
                <Link
                  key={`${i}-${word}`}
                  href={`/nouns-for/${word}`}
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
          <h2 className="text-xl font-bold mb-2">Search any adjective</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Any English adjective works — just type it in.
          </p>
          <NounsForSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
