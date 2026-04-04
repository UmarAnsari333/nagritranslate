import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight, Globe, Star } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { learnIndex } from '@/lib/learn-data'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Language Learning Guides — Learn Spanish, French, Japanese & More',
  description:
    'Free language learning guides for Spanish, French, German, Japanese, Arabic, Hindi, and more. Language facts, grammar basics, script overview, difficulty rating, and essential phrases.',
  keywords: [
    'language learning guide',
    'learn spanish',
    'learn french',
    'learn japanese',
    'learn arabic',
    'learn hindi',
    'learn german',
    'learn chinese',
    'language guide',
    'beginner language guide',
    'how to learn a language',
    'language difficulty',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/learn',
  },
  openGraph: {
    title: 'Language Learning Guides | Nagri Translate',
    description:
      'Beginner guides for 10 major world languages. Facts, grammar, scripts, difficulty ratings, and quick phrases.',
    url: 'https://nagritranslate.com/learn',
  },
}

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  Hard: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Very Hard': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
}

function DifficultyBar({ score }: { score: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-1.5 w-4 rounded-full ${i <= score ? 'bg-primary' : 'bg-muted'}`}
        />
      ))}
    </div>
  )
}

export default function LearnIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Learn', path: '/learn' },
      ]} />
      <WebPageSchema
        path="/learn"
        name="Language Learning Guides — Learn Spanish, French, Japanese & More"
        description="Free language learning guides for Spanish, French, German, Japanese, Arabic, Hindi, and more."
        type="CollectionPage"
      />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Language Guides</span>
        </nav>

        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Language Learning Guides</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our beginner guides for 10 major world languages. Each guide covers language facts,
            grammar basics, writing system, difficulty level, and essential phrases — plus links to our free translator.
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {learnIndex.map((lang) => (
            <Link
              key={lang.slug}
              href={`/learn/${lang.slug}`}
              className="group p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{lang.flag}</span>
                <div>
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{lang.language}</h2>
                  <p className="text-sm text-muted-foreground">{lang.nativeName}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{lang.family}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColors[lang.difficulty]}`}>
                  {lang.difficulty}
                </span>
              </div>

              <DifficultyBar score={lang.difficultyScore} />
              <p className="text-xs text-muted-foreground mt-1.5 mb-4">{lang.speakers} speakers · {lang.script} script</p>

              <div className="flex items-center text-sm text-primary font-medium">
                Learn {lang.language}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Difficulty Legend */}
        <div className="mb-16 p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-lg font-bold mb-4 text-center">Language Difficulty for English Speakers</h2>
          <p className="text-sm text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
            Difficulty ratings are based on FSI (Foreign Service Institute) data — the US government&apos;s language training program, which has studied language learning for decades.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { level: 'Easy', hours: '600–750 hrs', example: 'Spanish, Italian, Portuguese, French', color: 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' },
              { level: 'Medium', hours: '900 hrs', example: 'German, Indonesian, Swahili', color: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400' },
              { level: 'Hard', hours: '1,100 hrs', example: 'Russian, Hindi, Thai, Vietnamese', color: 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400' },
              { level: 'Very Hard', hours: '2,200 hrs', example: 'Chinese, Japanese, Korean, Arabic', color: 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400' },
            ].map((d) => (
              <div key={d.level} className={`p-4 rounded-xl border ${d.color}`}>
                <p className="font-bold text-base mb-1">{d.level}</p>
                <p className="text-xs font-medium mb-1">~{d.hours} to fluency</p>
                <p className="text-xs opacity-80">e.g. {d.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Practice with Our Free Translator</h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            The best way to learn a language is to use it. Try translating real sentences — our AI translator supports 248+ languages.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ai-translate/english-to-spanish" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Spanish Translator
            </Link>
            <Link href="/ai-translate/english-to-french" className="px-5 py-2.5 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              French Translator
            </Link>
            <Link href="/ai-translate/english-to-japanese" className="px-5 py-2.5 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Japanese Translator
            </Link>
            <Link href="/ai-translate/english-to-arabic" className="px-5 py-2.5 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
              Arabic Translator
            </Link>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-10 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground mb-3">Also explore</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/phrases" className="text-primary hover:underline">Common Phrases Guide</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/languages" className="text-primary hover:underline">All 248+ Languages</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/ai-translate/english-to-spanish" className="text-primary hover:underline">Spanish Translator</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/ai-translate/hindi-to-english" className="text-primary hover:underline">Hindi to English</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
