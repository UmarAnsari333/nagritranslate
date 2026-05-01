import type { Metadata } from 'next'
import Link from 'next/link'
import { FlipHorizontal2, ArrowRight, ChevronRight, Home } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ANTONYM_WORDS } from '@/data/antonym-words'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { AntonymsSearch } from '@/components/antonyms/antonyms-search'

export const metadata: Metadata = {
  title: 'Antonyms Dictionary — Opposite Words for Any Word',
  description:
    'Free antonyms dictionary. Find opposite words for 3,000+ English words. Great for writing, essays & vocabulary building.',
  keywords: [
    'antonyms',
    'antonym finder',
    'opposite of',
    'opposite words',
    'antonyms dictionary',
    'word opposites',
    'contrary words',
    'reverse meaning',
    'vocabulary builder',
  ],
  alternates: { canonical: 'https://nagritranslate.com/antonyms' },
  openGraph: {
    title: 'Antonyms Dictionary — Opposite Words for Any Word',
    description: 'Free antonyms dictionary. Find opposite words for 3,000+ English words.',
    type: 'website',
  },
}

const grouped = ANTONYM_WORDS.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

const FEATURED = [
  'happy', 'love', 'brave', 'smart', 'fast', 'kind',
  'strong', 'bright', 'calm', 'free', 'bold', 'warm',
]

export default function AntonymsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Antonyms', path: '/antonyms' },
      ]} />
      <WebPageSchema
        path="/antonyms"
        name="Antonyms Dictionary — Opposite Words for Any Word"
        description="Free antonyms dictionary. Find opposite words for 1,900+ English words."
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
          <span className="text-foreground font-medium">Antonyms</span>
        </nav>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <FlipHorizontal2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Antonyms Dictionary</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find opposite words and antonyms for any English word. Perfect for writing, essays, and expanding your vocabulary.
          </p>
          <AntonymsSearch />
        </div>

        {/* Featured */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {FEATURED.map((word) => (
              <Link
                key={word}
                href={`/antonyms/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                🔄 {word}
              </Link>
            ))}
          </div>
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
              {grouped[letter].map((word) => (
                <Link
                  key={word}
                  href={`/antonyms/${word}`}
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

      {/* Bottom search */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">Search any word</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Not seeing your word? Search above — antonyms work for any English word.
          </p>
          <AntonymsSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
