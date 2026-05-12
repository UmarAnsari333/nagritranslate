import type { Metadata } from 'next'
import Link from 'next/link'
import { Ear, ArrowRight, ChevronRight, Home, GraduationCap, Feather, BookOpen, PenLine } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { SoundsLikeSearch } from '@/components/sounds-like/sounds-like-search'
import { SOUNDS_LIKE_WORDS } from '@/data/sounds-like-words'

export const metadata: Metadata = {
  title: 'Sounds Like — Find Words by Pronunciation',
  description:
    'Find English words that sound like what you type. Great for ESL learners, phonetic spellers, and anyone who knows how a word sounds but not how to spell it.',
  keywords: [
    'sounds like',
    'words that sound like',
    'phonetic word finder',
    'find word by sound',
    'word pronunciation finder',
    'sounds like word search',
    'phonetic spelling finder',
    'ESL word finder',
    'word sounds like tool',
    'similar sounding words',
    'words by pronunciation',
  ],
  alternates: { canonical: 'https://nagritranslate.com/sounds-like' },
  openGraph: {
    title: 'Sounds Like — Find Words by Pronunciation',
    description: 'Find English words that sound like what you type. Free phonetic word finder.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What does "sounds like" mean?',
    answer:
      '"Sounds like" finds words that have a similar pronunciation to what you type. Unlike homophones (which sound exactly the same), "sounds like" also finds near-matches — useful when you know roughly how a word sounds but aren\'t sure of the exact spelling.',
  },
  {
    question: 'How is this different from homophones?',
    answer:
      'Homophones are words with identical pronunciation (like "there" and "their"). "Sounds like" is broader — it returns words with similar but not necessarily identical sounds. For example, "nite" sounds like "night", "fone" sounds like "phone", "kat" sounds like "cat".',
  },
  {
    question: 'Can I use phonetic spellings?',
    answer:
      'Yes! That\'s the main use case. If you know how a word sounds but not how to spell it, type the phonetic version. For example: type "nolij" to find "knowledge", "sykology" for "psychology", or "riting" for "writing".',
  },
  {
    question: 'Who benefits most from this tool?',
    answer:
      'ESL learners who hear a word but don\'t know its spelling, students learning English phonics, writers checking pronunciation-based word choices, and anyone who wants to explore words that share a similar sound.',
  },
  {
    question: 'What is the difference between sounds like and rhymes?',
    answer:
      '"Sounds like" finds words with a similar overall pronunciation (matching the whole word). "Rhymes" finds words that share the same ending sound. For example, "bear" rhymes with "care" and "stare" — but "sounds like bear" would return "bare", "beer", "boar".',
  },
  {
    question: 'Why do some words return no results?',
    answer:
      'If no similar-sounding words exist in the dictionary, or the phonetic distance is too large, no results appear. Try a slightly different spelling of the phonetic form, or use a simpler approximation of the sound.',
  },
]

const EXAMPLE_SEARCHES = [
  { phonetic: 'nite', finds: 'night' },
  { phonetic: 'fone', finds: 'phone' },
  { phonetic: 'kat', finds: 'cat' },
  { phonetic: 'skool', finds: 'school' },
  { phonetic: 'nolij', finds: 'knowledge' },
  { phonetic: 'sykology', finds: 'psychology' },
  { phonetic: 'riting', finds: 'writing' },
  { phonetic: 'nee', finds: 'knee / need / nee' },
]

const USE_CASES = [
  { icon: GraduationCap, label: 'ESL Learners', desc: 'Find words when you only know the sound.' },
  { icon: Feather, label: 'Writers', desc: 'Explore phonetically similar alternatives.' },
  { icon: BookOpen, label: 'Students', desc: 'Bridge the gap between sound and spelling.' },
  { icon: PenLine, label: 'Phonics Practice', desc: 'Reinforce sound–spelling connections.' },
]

const RELATED_TOOLS = [
  { label: 'Homophones', desc: 'Exact same-sound words', href: '/homophones' },
  { label: 'Rhymes', desc: 'Same ending sound', href: '/rhymes' },
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
  { label: 'Synonyms', desc: 'Similar meaning words', href: '/synonyms' },
  { label: 'Collocations', desc: 'Words that go together', href: '/collocations' },
]

const POPULAR_SEARCHES = [
  'night', 'phone', 'write', 'know', 'knight', 'wrap', 'wrong', 'gnome',
  'psych', 'knee', 'knife', 'wrist', 'scene', 'science', 'queue', 'debt',
]

const grouped = SOUNDS_LIKE_WORDS.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

export default function SoundsLikePage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Sounds Like', path: '/sounds-like' },
      ]} />
      <WebPageSchema
        path="/sounds-like"
        name="Sounds Like — Find Words by Pronunciation"
        description="Find English words that sound like what you type. Free phonetic word finder."
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
          <span className="text-foreground font-medium">Sounds Like</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Ear className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Sounds Like</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find English words that sound like what you type. Type the phonetic spelling of a word
            and discover how it&apos;s really written.
          </p>
          <SoundsLikeSearch />
        </div>

        {/* Popular searches */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/sounds-like/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                sounds like {word}
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

      {/* Example searches */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">How it works — examples</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Type phonetically and find the real spelling. Works great for tricky English words with silent letters.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {EXAMPLE_SEARCHES.map(({ phonetic, finds }) => (
            <Link
              key={phonetic}
              href={`/sounds-like/${phonetic}`}
              className="group p-4 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <p className="text-sm font-mono font-bold text-primary mb-1">{phonetic}</p>
              <p className="text-xs text-muted-foreground">finds → <span className="font-medium text-foreground">{finds}</span></p>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground group-hover:text-inherit">
                Try it <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
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
                  href={`/sounds-like/${word}`}
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
          <h2 className="text-xl font-bold mb-2">Try any word</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Type how a word sounds — we&apos;ll find how it&apos;s spelled.
          </p>
          <SoundsLikeSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
