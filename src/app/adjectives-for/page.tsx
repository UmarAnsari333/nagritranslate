import type { Metadata } from 'next'
import Link from 'next/link'
import { PenLine, ArrowRight, ChevronRight, Home, BookOpen, Feather, GraduationCap, Gamepad2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ADJECTIVE_NOUNS } from '@/data/adjective-nouns'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { AdjectivesForSearch } from '@/components/adjectives/adjectives-for-search'

export const metadata: Metadata = {
  title: 'Adjectives For Any Word — Words to Describe Nouns',
  description:
    'Find adjectives to describe any noun instantly. Adjectives for people, animals, places, nature, emotions & objects. Free tool for writers, students & bloggers.',
  keywords: [
    'adjectives for',
    'words to describe',
    'adjectives list',
    'describing words',
    'adjective finder',
    'adjectives for a person',
    'adjectives for animals',
    'adjectives for nature',
    'adjectives for places',
    'positive adjectives',
    'descriptive words for writing',
    'words that describe',
    'adjectives dictionary',
    'adjectives for kids',
    'adjectives for creative writing',
  ],
  alternates: { canonical: 'https://nagritranslate.com/adjectives-for' },
  openGraph: {
    title: 'Adjectives For Any Word — Words to Describe Nouns',
    description: 'Find the best adjectives for any noun. Free adjective finder for writers, students & bloggers.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What is an adjective?',
    answer:
      'An adjective is a word that describes or modifies a noun or pronoun. It answers questions like "What kind?", "How many?", or "Which one?". Examples: a tall building, three dogs, the red car. Adjectives make writing more specific and vivid.',
  },
  {
    question: 'What are good adjectives to describe a person?',
    answer:
      'Great adjectives for a person include: kind, brave, intelligent, compassionate, ambitious, cheerful, loyal, creative, confident, and empathetic. The best choice depends on whether you are describing physical appearance, personality, or emotions.',
  },
  {
    question: 'What are adjectives for animals?',
    answer:
      'Common adjectives for animals include: fierce, gentle, wild, playful, majestic, loyal, swift, cunning, timid, and graceful. For specific animals like dogs try: friendly, obedient, energetic. For wolves: fierce, cunning, solitary.',
  },
  {
    question: 'What are adjectives for nature and the environment?',
    answer:
      'Powerful adjectives for nature include: vast, serene, majestic, untamed, lush, rugged, tranquil, breathtaking, vibrant, and ancient. For the ocean: deep, boundless, roaring. For forests: dense, misty, towering.',
  },
  {
    question: 'What are positive adjectives I can use in writing?',
    answer:
      'Popular positive adjectives include: brilliant, radiant, magnificent, extraordinary, graceful, vibrant, inspiring, resilient, luminous, and splendid. These work across descriptions of people, places, and things to create an uplifting tone.',
  },
  {
    question: 'What are the most common adjectives in English?',
    answer:
      'The most frequently used adjectives in English are: good, new, first, last, long, great, little, own, other, old, right, big, high, different, small, large, next, early, young, important, few, public, and bad. These are the building blocks of everyday description.',
  },
  {
    question: 'What are strong adjectives for creative writing?',
    answer:
      'Strong adjectives that add impact to creative writing include: colossal, desolate, ferocious, haunting, immaculate, savage, ethereal, relentless, smoldering, and thunderous. Precise, unexpected adjectives are far more powerful than common ones like "big" or "nice".',
  },
  {
    question: 'How do adjectives improve creative writing?',
    answer:
      'Adjectives give writing sensory detail and emotional texture. Instead of "the house was old", try "the crumbling, moss-covered house". Use 1–2 precise adjectives rather than stacking many — each word should earn its place.',
  },
  {
    question: 'What are adjectives suitable for kids and students?',
    answer:
      'Simple adjectives great for kids and school essays include: big, small, happy, sad, fast, slow, bright, dark, loud, quiet, soft, hard, friendly, silly, and beautiful. These are easy to learn and use correctly in sentences.',
  },
  {
    question: 'What is the difference between descriptive and limiting adjectives?',
    answer:
      'Descriptive adjectives describe a quality of a noun — "the blue sky", "a fierce lion". Limiting adjectives specify or restrict a noun — "three apples", "my book", "that house". Both types modify nouns but serve different purposes in a sentence.',
  },
]

const POSITIVE_ADJECTIVES = [
  'brilliant', 'radiant', 'magnificent', 'graceful', 'vibrant', 'inspiring',
  'resilient', 'luminous', 'courageous', 'joyful', 'compassionate', 'serene',
  'majestic', 'extraordinary', 'devoted', 'lively', 'glorious', 'charming',
  'splendid', 'noble', 'peaceful', 'warm', 'faithful', 'fearless',
]

const NEGATIVE_ADJECTIVES = [
  'desolate', 'ferocious', 'treacherous', 'grim', 'merciless', 'haunting',
  'sinister', 'savage', 'relentless', 'bitter', 'wretched', 'ominous',
  'cruel', 'bleak', 'vile', 'menacing', 'dreadful', 'oppressive',
  'ruthless', 'foreboding',
]

const COMMON_ADJECTIVES = [
  'good', 'new', 'old', 'great', 'long', 'little', 'own', 'right', 'big',
  'high', 'small', 'large', 'next', 'early', 'young', 'important', 'few',
  'different', 'public', 'bad', 'same', 'able', 'real', 'best', 'free',
  'strong', 'true', 'hard', 'dark', 'clear',
]

const RELATED_TOOLS = [
  { label: 'Synonyms', desc: 'Similar words', href: '/synonyms' },
  { label: 'Antonyms', desc: 'Opposite words', href: '/antonyms' },
  { label: 'Collocations', desc: 'Words that go together', href: '/collocations' },
  { label: 'Rhymes', desc: 'Rhyming words', href: '/rhymes' },
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
]

const CATEGORIES = [
  {
    label: 'Animals',
    slug: 'animals',
    color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900',
    badge: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    words: ['dog', 'cat', 'horse', 'lion', 'wolf', 'eagle', 'bear', 'fox', 'dolphin', 'tiger'],
  },
  {
    label: 'People',
    slug: 'people',
    color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    words: ['person', 'child', 'woman', 'hero', 'warrior', 'teacher', 'leader', 'friend', 'king', 'stranger'],
  },
  {
    label: 'Places',
    slug: 'places',
    color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    words: ['city', 'forest', 'ocean', 'mountain', 'castle', 'island', 'garden', 'desert', 'village', 'cave'],
  },
  {
    label: 'Nature',
    slug: 'nature',
    color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900',
    badge: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    words: ['sky', 'storm', 'river', 'fire', 'snow', 'wind', 'flower', 'moon', 'star', 'wave'],
  },
  {
    label: 'Emotions',
    slug: 'emotions',
    color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900',
    badge: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    words: ['love', 'hope', 'fear', 'joy', 'pain', 'peace', 'dream', 'anger', 'grief', 'courage'],
  },
  {
    label: 'Objects',
    slug: 'objects',
    color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900',
    badge: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    words: ['book', 'sword', 'crown', 'ship', 'ring', 'candle', 'painting', 'music', 'blade', 'key'],
  },
]

const USE_CASES = [
  { icon: Feather, label: 'Creative Writing', desc: 'Vivid adjectives for stories, poetry, and fiction.' },
  { icon: GraduationCap, label: 'Essays & School', desc: 'Impress teachers with precise descriptive language.' },
  { icon: BookOpen, label: 'Content & Blogs', desc: 'Richer copy that keeps readers engaged.' },
  { icon: Gamepad2, label: 'Word Games', desc: 'Scrabble, Wordle & crossword puzzle help.' },
]

const grouped = ADJECTIVE_NOUNS.reduce<Record<string, string[]>>((acc, word) => {
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

export default function AdjectivesForPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Adjectives For', path: '/adjectives-for' },
      ]} />
      <WebPageSchema
        path="/adjectives-for"
        name="Adjectives For Any Word — Words to Describe Nouns"
        description="Find adjectives to describe any noun. Free adjective finder for writers, students & bloggers."
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
          <span className="text-foreground font-medium">Adjectives For</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <PenLine className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Adjectives For Any Word</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find the best adjectives to describe any noun — people, animals, places, nature, emotions, and objects.
            Perfect for writers, students, bloggers, and word game players.
          </p>
          <AdjectivesForSearch />
        </div>

        {/* Popular searches */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['person', 'dog', 'city', 'love', 'ocean', 'night', 'hero', 'storm', 'child', 'forest', 'fire', 'sky'].map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/adjectives-for/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                adjectives for {word}
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
          Jump straight to the nouns you need — each category targets the most common search patterns.
        </p>
        <div className="space-y-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={`p-4 rounded-2xl border ${cat.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cat.badge}`}>
                  {cat.label}
                </span>
                <span className="text-xs text-muted-foreground">adjectives for {cat.label.toLowerCase()}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.words.map((word, i) => (
                  <Link
                    key={`${i}-${word}`}
                    href={`/adjectives-for/${word}`}
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
              <span className="text-xs text-muted-foreground">{grouped[letter].length} words</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {grouped[letter].map((word, i) => (
                <Link
                  key={`${i}-${word}`}
                  href={`/adjectives-for/${word}`}
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

      {/* Positive adjectives */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Positive adjectives</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Uplifting, inspiring words that add warmth and energy to any description.
        </p>
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900">
          <div className="flex flex-wrap gap-2">
            {POSITIVE_ADJECTIVES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/synonyms/${word}`}
                className="inline-flex text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Negative adjectives */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Negative adjectives</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Dark, dramatic, and intense words — essential for conflict, tension, and villains.
        </p>
        <div className="p-4 bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap gap-2">
            {NEGATIVE_ADJECTIVES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/synonyms/${word}`}
                className="inline-flex text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most common adjectives */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Most common adjectives in English</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The everyday adjectives that appear most frequently in English writing and speech.
        </p>
        <div className="p-4 bg-muted/20 rounded-2xl border">
          <div className="flex flex-wrap gap-2">
            {COMMON_ADJECTIVES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/synonyms/${word}`}
                className="inline-flex text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {word}
              </Link>
            ))}
          </div>
        </div>
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
            Not seeing your word? Any English noun works — just type it in.
          </p>
          <AdjectivesForSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
