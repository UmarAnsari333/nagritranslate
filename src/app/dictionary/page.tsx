import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { DictionarySearch } from '@/components/dictionary/dictionary-search'

export const metadata: Metadata = {
  title: 'English Dictionary — Definitions, Synonyms & Pronunciation',
  description:
    'Free English dictionary with definitions, pronunciation, synonyms, antonyms, and usage examples. Look up any word instantly.',
  keywords: [
    'english dictionary',
    'word definitions',
    'word meaning',
    'synonyms',
    'antonyms',
    'pronunciation',
    'define a word',
    'online dictionary',
    'free dictionary',
    'vocabulary',
    'word lookup',
  ],
  alternates: { canonical: 'https://nagritranslate.com/dictionary' },
  openGraph: {
    title: 'English Dictionary — Definitions, Synonyms & Pronunciation | Nagri Translate',
    description:
      'Free English dictionary. Look up any word for definitions, pronunciation, synonyms, antonyms, and example sentences.',
    url: 'https://nagritranslate.com/dictionary',
  },
}

const POPULAR_WORDS = [
  'serendipity', 'ephemeral', 'melancholy', 'eloquent', 'resilience',
  'ambiguous', 'tenacious', 'ubiquitous', 'pragmatic', 'eclectic',
  'paradigm', 'profound', 'eloquence', 'benevolent', 'clandestine',
  'diligent', 'fortitude', 'gregarious', 'intrinsic', 'lucid',
  'meticulous', 'nostalgia', 'oblivion', 'persevere', 'quandary',
  'reverie', 'solace', 'tranquil', 'verbose', 'wanderlust',
]

const WORD_CATEGORIES = [
  { label: 'Emotions', words: ['melancholy', 'euphoria', 'nostalgia', 'reverie', 'solace'] },
  { label: 'Character', words: ['tenacious', 'resilience', 'diligent', 'fortitude', 'benevolent'] },
  { label: 'Describing', words: ['ephemeral', 'ubiquitous', 'ambiguous', 'intrinsic', 'verbose'] },
  { label: 'Thinking', words: ['paradigm', 'pragmatic', 'lucid', 'profound', 'quandary'] },
]

export default function DictionaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Dictionary', path: '/dictionary' },
      ]} />
      <WebPageSchema
        path="/dictionary"
        name="English Dictionary — Definitions, Synonyms & Pronunciation"
        description="Free English dictionary with definitions, pronunciation, synonyms, antonyms, and usage examples."
        type="CollectionPage"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Dictionary</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2.5 bg-muted rounded-xl border">
              <BookOpen className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">English Dictionary</h1>
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Definitions, pronunciation, synonyms, antonyms, and example sentences — for any English word.
          </p>
          <DictionarySearch autoFocus />
        </div>

        {/* Popular words */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Popular Words</h2>
          <div className="flex flex-wrap gap-2">
            {POPULAR_WORDS.map((w) => (
              <Link
                key={w}
                href={`/dictionary/${w}`}
                className="px-3 py-1.5 bg-muted/50 border rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-all"
              >
                {w}
              </Link>
            ))}
          </div>
        </section>

        {/* Word categories */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-5">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {WORD_CATEGORIES.map((cat) => (
              <div key={cat.label} className="p-5 bg-muted/20 rounded-2xl border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.words.map((w) => (
                    <Link
                      key={w}
                      href={`/dictionary/${w}`}
                      className="flex items-center gap-1 text-sm hover:underline"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {w}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature summary */}
        <section className="mb-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: '📖', title: 'Full Definitions', desc: 'Every part of speech — noun, verb, adjective, adverb — with clear definitions.' },
            { icon: '🔊', title: 'Audio Pronunciation', desc: 'Hear how the word is pronounced in British and American English.' },
            { icon: '🔗', title: 'Synonyms & Antonyms', desc: 'Discover related words and opposites, all clickable for instant lookup.' },
          ].map((f) => (
            <div key={f.title} className="p-5 bg-muted/20 rounded-2xl border text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-semibold mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Translate CTA */}
        <div className="p-6 rounded-2xl border bg-muted/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Globe className="w-5 h-5" />
            <h2 className="text-xl font-bold">Need to Translate a Word?</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
            Our free AI translator handles 248+ languages — translate any English word into Spanish, French,
            Japanese, Arabic, and more in seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ai-translate/english-to-spanish" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              English → Spanish
            </Link>
            <Link href="/ai-translate/english-to-french" className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
              English → French
            </Link>
            <Link href="/ai-translate/english-to-japanese" className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
              English → Japanese
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="mt-10 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center mb-3">Related resources</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/vocabulary" className="text-sm hover:underline">Vocabulary Lists</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/phrases" className="text-sm hover:underline">Common Phrases</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/ai-translate" className="text-sm hover:underline">AI Translator</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/learn" className="text-sm hover:underline">Language Learning</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
