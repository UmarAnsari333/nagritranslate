import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, Globe, ArrowRight, BookOpen, Hash, AlignLeft, MessageSquareQuote } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { languagePillarIndex } from '@/lib/language-pillar-data'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Language Guides — Alphabet, Grammar, Numbers, Idioms for 17 Languages',
  description:
    'Comprehensive language guides for Spanish, French, Japanese, Arabic, Hindi, German, Portuguese, Korean, Russian, Italian, Chinese, Turkish, Vietnamese, Indonesian, Urdu, Dutch and more. Learn the alphabet, numbers, grammar rules, and native idioms.',
  keywords: [
    'language guide',
    'learn spanish alphabet',
    'japanese hiragana chart',
    'arabic alphabet',
    'language grammar guide',
    'language idioms',
    'language numbers',
    'learn french grammar',
    'korean hangul',
    'chinese pinyin',
    'language learning',
    'free language guide',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/language',
  },
  openGraph: {
    title: 'Language Guides | Nagri Translate',
    description:
      'Complete guides for 17 world languages — alphabet, numbers, grammar, and idioms in one place.',
    url: 'https://nagritranslate.com/language',
  },
}

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  Hard: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Very Hard': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
}

const difficultyOrder: Record<string, number> = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
  'Very Hard': 4,
}

const TAB_FEATURES = [
  { icon: Globe, label: 'Overview', desc: 'Facts & why learn' },
  { icon: AlignLeft, label: 'Alphabet', desc: 'Script & characters' },
  { icon: Hash, label: 'Numbers', desc: 'Numbers & dates' },
  { icon: BookOpen, label: 'Grammar', desc: 'Rules & conjugation' },
  { icon: MessageSquareQuote, label: 'Idioms', desc: 'Expressions & proverbs' },
]

const sorted = [...languagePillarIndex].sort(
  (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
)

export default function LanguageIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Language Guides', path: '/language' },
      ]} />
      <WebPageSchema
        path="/language"
        name="Language Guides — Alphabet, Grammar, Numbers, Idioms"
        description="Comprehensive language guides for Spanish, French, Japanese, Arabic, Hindi, German and more. Learn the alphabet, numbers, grammar rules, and native idioms."
        type="CollectionPage"
      />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Language Guides</span>
        </nav>

        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            {languagePillarIndex.length} Languages Available
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Language Guides
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Every guide covers alphabet, numbers, grammar rules with conjugation tables, and native idioms — all in one page.
          </p>
        </div>

        {/* What's inside each guide */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {TAB_FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.label} className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-xl border text-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Language Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {sorted.map((lang) => (
            <Link
              key={lang.slug}
              href={`/language/${lang.slug}`}
              className="group p-5 bg-muted/20 rounded-2xl border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{lang.flag}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold group-hover:text-primary transition-colors truncate">
                    {lang.language}
                  </h2>
                  <p className="text-sm text-muted-foreground truncate">{lang.nativeName}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                  {lang.script}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColors[lang.difficulty]}`}>
                  {lang.difficulty}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mb-4">{lang.speakers} speakers</p>

              <div className="flex items-center text-sm text-primary font-medium">
                Open full guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Difficulty Legend */}
        <div className="mb-12 p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-lg font-bold mb-2 text-center">Difficulty for English Speakers</h2>
          <p className="text-sm text-muted-foreground text-center mb-6 max-w-xl mx-auto">
            Based on FSI (Foreign Service Institute) data — the US government agency that trains diplomats in foreign languages.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { level: 'Easy', hours: '600–750 hrs', langs: 'Spanish, Italian, Portuguese, French, Indonesian', color: 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' },
              { level: 'Medium', hours: '900 hrs', langs: 'German, Dutch, Hindi, Vietnamese', color: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400' },
              { level: 'Hard', hours: '1,100 hrs', langs: 'Russian, Turkish, Korean, Urdu', color: 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400' },
              { level: 'Very Hard', hours: '2,200 hrs', langs: 'Chinese, Japanese, Korean, Arabic', color: 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400' },
            ].map((d) => (
              <div key={d.level} className={`p-4 rounded-xl border ${d.color}`}>
                <p className="font-bold text-base mb-1">{d.level}</p>
                <p className="text-xs font-medium mb-1">~{d.hours} to fluency</p>
                <p className="text-xs opacity-80">{d.langs}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-primary/5 border border-primary/15 rounded-2xl text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Ready to translate?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use our free AI translator to practice any of these languages — supports 248+ languages with voice input, document upload, and history.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ai-translate" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Open Translator
            </Link>
            <Link href="/phrases" className="px-5 py-2.5 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Browse Phrases
            </Link>
            <Link href="/vocabulary" className="px-5 py-2.5 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Vocabulary
            </Link>
          </div>
        </div>

        {/* Bottom links */}
        <div className="pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground mb-3">Also explore</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/languages" className="text-primary hover:underline">All 248+ Languages</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/learn" className="text-primary hover:underline">Beginner Guides</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/phrases" className="text-primary hover:underline">Common Phrases</Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/vocabulary" className="text-primary hover:underline">Vocabulary Lists</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
