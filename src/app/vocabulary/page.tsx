import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookMarked, ArrowRight, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { vocabularyIndex } from '@/lib/vocabulary-data'

export const metadata: Metadata = {
  title: 'Vocabulary Words in 10 Languages | Numbers, Colors, Animals & More',
  description:
    'Learn vocabulary words in Spanish, French, German, Japanese, Arabic, Hindi, Chinese, and more. Numbers, colors, days of the week, months, animals, family, body parts and food with pronunciation guides.',
  keywords: [
    'vocabulary words',
    'language vocabulary',
    'numbers in Spanish',
    'colors in French',
    'days of the week in German',
    'learn vocabulary',
    'vocabulary with pronunciation',
    'common words in different languages',
    'beginner vocabulary',
    'vocabulary list',
    'words in Japanese',
    'Arabic vocabulary',
    'Hindi words',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/vocabulary',
  },
  openGraph: {
    title: 'Vocabulary Words in 10 Languages | Nagri Translate',
    description:
      'Numbers, colors, animals, family words and more — vocabulary lists for 10 major languages with pronunciation guides.',
    url: 'https://nagritranslate.com/vocabulary',
  },
}

const categoryIcons = [
  { icon: '🔢', title: 'Numbers', desc: 'Count from 1 to 1,000 in any language — essential for shopping, dates, and travel.' },
  { icon: '🎨', title: 'Colors', desc: 'Red, blue, green and all the colors — with native pronunciation guides.' },
  { icon: '📅', title: 'Days & Months', desc: 'Days of the week and months of the year in every language.' },
  { icon: '🐾', title: 'Animals', desc: 'Common animals from dogs and cats to elephants and lions.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family', desc: 'Mother, father, brother, sister and all family members.' },
  { icon: '🫀', title: 'Body Parts', desc: 'Head, eye, nose, hand and essential body vocabulary.' },
  { icon: '🍽️', title: 'Food & Drink', desc: 'Bread, water, meat, coffee and everyday food vocabulary.' },
]

export default function VocabularyIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Vocabulary</span>
        </nav>

        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <BookMarked className="w-6 h-6 text-violet-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Vocabulary by Language</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Build your vocabulary fast. Pick a language to explore numbers, colors, animals, family words,
            body parts, and food — all with pronunciation guides so you can say them correctly from day one.
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {vocabularyIndex.map((lang) => (
            <Link
              key={lang.slug}
              href={`/vocabulary/${lang.slug}`}
              className="group p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border hover:border-violet-500/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{lang.flag}</span>
                <div>
                  <h2 className="text-xl font-bold group-hover:text-violet-500 transition-colors">
                    {lang.language}
                  </h2>
                  <p className="text-sm text-muted-foreground">{lang.nativeName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full">{lang.family}</span>
                <span className="text-xs text-muted-foreground">{lang.speakers} speakers</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Numbers, colors, animals, family, body parts, food and more in {lang.language} with pronunciation.
              </p>
              <div className="flex items-center text-sm text-violet-600 dark:text-violet-400 font-medium">
                View {lang.language} vocabulary
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Category Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Vocabulary Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categoryIcons.map((item) => (
              <div key={item.title} className="p-4 bg-muted/20 rounded-xl border text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Vocabulary Searches */}
        <div className="mb-16 p-8 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-6 text-center">Popular Vocabulary Topics</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'Numbers in Spanish', href: '/vocabulary/spanish' },
              { label: 'Colors in French', href: '/vocabulary/french' },
              { label: 'Days in German', href: '/vocabulary/german' },
              { label: 'Animals in Japanese', href: '/vocabulary/japanese' },
              { label: 'Family words in Arabic', href: '/vocabulary/arabic' },
              { label: 'Food words in Italian', href: '/vocabulary/italian' },
              { label: 'Body parts in Hindi', href: '/vocabulary/hindi' },
              { label: 'Months in Portuguese', href: '/vocabulary/portuguese' },
              { label: 'Numbers in Russian', href: '/vocabulary/russian' },
              { label: 'Colors in Chinese', href: '/vocabulary/chinese' },
              { label: 'Animals in Spanish', href: '/vocabulary/spanish' },
              { label: 'Family in French', href: '/vocabulary/french' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-violet-500/30 hover:shadow-sm transition-all group text-sm"
              >
                <ArrowRight className="w-3.5 h-3.5 text-violet-500 group-hover:translate-x-1 transition-transform shrink-0" />
                <span className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA to Translator */}
        <div className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Need to Translate a Word?</h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our free AI translator handles 248+ languages instantly. Type any word or sentence and get an accurate translation in seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ai-translate/english-to-spanish"
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              English → Spanish
            </Link>
            <Link
              href="/ai-translate/english-to-french"
              className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 border transition-colors"
            >
              English → French
            </Link>
            <Link
              href="/ai-translate/english-to-japanese"
              className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 border transition-colors"
            >
              English → Japanese
            </Link>
            <Link
              href="/ai-translate/english-to-arabic"
              className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 border transition-colors"
            >
              English → Arabic
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center mb-4">Related resources</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/phrases" className="text-sm text-primary hover:underline">Common Phrases</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/learn" className="text-sm text-primary hover:underline">Language Learning Guides</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/languages" className="text-sm text-primary hover:underline">All 248+ Languages</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/ai-translate" className="text-sm text-primary hover:underline">Free AI Translator</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
