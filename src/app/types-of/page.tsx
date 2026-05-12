import type { Metadata } from 'next'
import Link from 'next/link'
import { Layers, ArrowRight, ChevronRight, Home, BookOpen, Feather, GraduationCap, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HYPONYM_WORDS } from '@/data/hyponym-words'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { HyponymsSearch } from '@/components/hyponyms/hyponyms-search'

export const metadata: Metadata = {
  title: 'Types Of — Find All Kinds, Varieties & Categories of Any Word',
  description:
    'Explore types, kinds, and varieties of any word. Types of dogs, fruits, vehicles, sports, buildings, and thousands more. Free vocabulary explorer for students and writers.',
  keywords: [
    'types of',
    'kinds of',
    'varieties of',
    'types of dogs',
    'types of fruit',
    'types of vehicles',
    'types of sports',
    'hyponyms',
    'word categories',
    'vocabulary explorer',
    'types list',
    'kinds list',
  ],
  alternates: { canonical: 'https://nagritranslate.com/types-of' },
  openGraph: {
    title: 'Types Of — Find All Kinds & Varieties of Any Word',
    description: 'Explore types and kinds of any word. Free vocabulary explorer.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What does "types of" a word mean?',
    answer:
      'It means finding all the more specific words that fall under a general category. For example, "types of dog" returns: poodle, labrador, terrier, husky — all specific kinds of dog. In linguistics, these are called hyponyms — words that are more specific members of a broader category.',
  },
  {
    question: 'What is the difference between a hyponym and a hypernym?',
    answer:
      'A hyponym is a more specific word: "poodle" is a hyponym of "dog". A hypernym is a more general word: "animal" is a hypernym of "dog". This tool shows both — "types of dog" (hyponyms) and "dog is a type of..." (hypernyms). Navigating up and down this hierarchy is how you build vocabulary.',
  },
  {
    question: 'What are types of fruit?',
    answer:
      'Types of fruit include: apple, orange, banana, mango, grape, strawberry, peach, pear, plum, cherry, lemon, lime, coconut, pineapple, watermelon, blueberry, raspberry, and kiwi. Botanically, a fruit is any seed-bearing structure that grows from the flower of a plant.',
  },
  {
    question: 'What are types of dog?',
    answer:
      'Types of dog (breeds) include: labrador, poodle, bulldog, beagle, husky, golden retriever, german shepherd, chihuahua, dalmatian, greyhound, dachshund, boxer, rottweiler, and shih tzu. Dogs are also classified by group: herding, hound, sporting, terrier, toy, working, and non-sporting.',
  },
  {
    question: 'What are types of vehicle?',
    answer:
      'Types of vehicle include: car, truck, bus, motorcycle, bicycle, train, tram, boat, ship, submarine, aircraft, helicopter, rocket, and hovercraft. Vehicles are broadly categorised as land vehicles, watercraft, and aircraft.',
  },
  {
    question: 'What are types of sport?',
    answer:
      'Types of sport include: football, basketball, tennis, swimming, cycling, boxing, gymnastics, cricket, rugby, golf, baseball, volleyball, wrestling, skiing, and athletics. Sports are often grouped into team sports, individual sports, water sports, and combat sports.',
  },
  {
    question: 'How is this useful for writing and learning?',
    answer:
      'When you need a more precise word, look up the general category. Instead of writing "a dog", you can look up "types of dog" and pick "greyhound" for speed, "mastiff" for size, or "terrier" for energy. This helps writers be specific and helps language learners expand their vocabulary systematically.',
  },
]

const CATEGORIES = [
  {
    label: 'Animals',
    color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900',
    badge: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    words: ['dog', 'cat', 'bird', 'fish', 'snake', 'shark', 'insect', 'bear', 'monkey', 'eagle'],
  },
  {
    label: 'Food & Drink',
    color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    words: ['fruit', 'vegetable', 'meat', 'bread', 'cheese', 'drink', 'tea', 'wine', 'soup', 'cake'],
  },
  {
    label: 'People & Jobs',
    color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    words: ['doctor', 'artist', 'scientist', 'athlete', 'musician', 'soldier', 'lawyer', 'chef', 'pilot', 'farmer'],
  },
  {
    label: 'Places',
    color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900',
    badge: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    words: ['building', 'city', 'mountain', 'river', 'forest', 'desert', 'island', 'temple', 'bridge', 'cave'],
  },
  {
    label: 'Objects',
    color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900',
    badge: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    words: ['weapon', 'vehicle', 'boat', 'aircraft', 'tool', 'instrument', 'furniture', 'fabric', 'metal', 'container'],
  },
  {
    label: 'Concepts & Activities',
    color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900',
    badge: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    words: ['sport', 'music', 'dance', 'game', 'language', 'religion', 'science', 'art', 'disease', 'color'],
  },
]

const POPULAR_SEARCHES = [
  'dog', 'fruit', 'vehicle', 'sport', 'tree', 'flower',
  'bird', 'doctor', 'building', 'weapon', 'dance', 'gem',
]

const RELATED_TOOLS = [
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
  { label: 'Synonyms', desc: 'Similar words', href: '/synonyms' },
  { label: 'Adjectives For', desc: 'Words to describe nouns', href: '/adjectives-for' },
  { label: 'Collocations', desc: 'Words that go together', href: '/collocations' },
  { label: 'Nouns For', desc: 'Things described by adjective', href: '/nouns-for' },
]

const USE_CASES = [
  { icon: GraduationCap, label: 'Students', desc: 'Build vocabulary systematically by category.' },
  { icon: Feather, label: 'Writers', desc: 'Find the precise word instead of the generic one.' },
  { icon: BookOpen, label: 'Teachers', desc: 'Generate word lists for any topic.' },
  { icon: Globe, label: 'ESL Learners', desc: 'Learn word families and categories.' },
]

const grouped = HYPONYM_WORDS.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

export default function TypesOfPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Types Of', path: '/types-of' },
      ]} />
      <WebPageSchema
        path="/types-of"
        name="Types Of — Find All Kinds & Varieties of Any Word"
        description="Explore types and kinds of any word. Free vocabulary explorer."
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
          <span className="text-foreground font-medium">Types Of</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Layers className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Types Of Any Word</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore all the specific kinds, varieties, and subcategories of any word.
            From types of dogs to types of storms — navigate vocabulary from general to specific.
          </p>
          <HyponymsSearch />
        </div>

        {/* Popular searches */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/types-of/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                types of {word}
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
          Start with a broad category and drill down to the specific words you need.
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
                    href={`/types-of/${word}`}
                    className="group inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    types of {word}
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
                  href={`/types-of/${word}`}
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
            Any English noun works — just type it to see all its types and subcategories.
          </p>
          <HyponymsSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
