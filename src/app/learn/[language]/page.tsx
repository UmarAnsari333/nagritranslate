import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, Globe, ArrowRight, CheckCircle, Lightbulb, Users } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getLearnBySlug, learnIndex } from '@/lib/learn-data'

interface PageProps {
  params: Promise<{ language: string }>
}

export async function generateStaticParams() {
  return learnIndex.map((lang) => ({ language: lang.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language } = await params
  const data = getLearnBySlug(language)
  if (!data) return {}

  const title = `Learn ${data.language} — Beginner's Complete Guide to ${data.language}`
  const description = `Complete guide to learning ${data.language}. Language facts, grammar basics, writing system (${data.script}), difficulty rating, common phrases, and why ${data.speakers} people speak ${data.language}.`

  return {
    title,
    description,
    keywords: [
      `learn ${data.language.toLowerCase()}`,
      `${data.language.toLowerCase()} for beginners`,
      `${data.language.toLowerCase()} language guide`,
      `${data.language.toLowerCase()} grammar basics`,
      `${data.language.toLowerCase()} writing system`,
      `${data.language.toLowerCase()} language facts`,
      `how to learn ${data.language.toLowerCase()}`,
      `${data.language.toLowerCase()} difficulty`,
      `${data.language.toLowerCase()} alphabet`,
      `is ${data.language.toLowerCase()} hard to learn`,
    ],
    alternates: {
      canonical: `https://nagritranslate.com/learn/${language}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nagritranslate.com/learn/${language}`,
    },
  }
}

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  Hard: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Very Hard': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
}

function DifficultyBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`h-2 w-6 rounded-full ${i <= score ? 'bg-primary' : 'bg-muted'}`} />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">{score}/5</span>
    </div>
  )
}

export default async function LearnPage({ params }: PageProps) {
  const { language } = await params
  const data = getLearnBySlug(language)
  if (!data) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/learn" className="hover:text-foreground transition-colors">Learn</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{data.language}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{data.flag}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Learn {data.language}</h1>
              <p className="text-muted-foreground mt-1">
                {data.nativeName} · {data.branch} · {data.speakers} total speakers
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{data.description}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-4 bg-muted/30 rounded-xl border text-center">
            <p className="text-2xl font-bold text-primary">{data.speakers}</p>
            <p className="text-xs text-muted-foreground mt-1">Total speakers</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-xl border text-center">
            <p className="text-2xl font-bold text-primary">{data.nativeSpeakers}</p>
            <p className="text-xs text-muted-foreground mt-1">Native speakers</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-xl border text-center">
            <p className="text-xl font-bold text-primary">{data.officialIn.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Countries (official)</p>
          </div>
          <div className={`p-4 rounded-xl border text-center ${difficultyColors[data.difficulty]}`}>
            <p className="text-xl font-bold">{data.difficulty}</p>
            <p className="text-xs mt-1 opacity-80">Difficulty level</p>
          </div>
        </div>

        {/* Translator Banner — primary internal link */}
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium">
              Practice {data.language} right now with our free AI translator.
            </span>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link href={data.translatorLink} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
              English → {data.language}
            </Link>
            <Link href={data.reverseLink} className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors whitespace-nowrap">
              {data.language} → English
            </Link>
          </div>
        </div>

        {/* Difficulty */}
        <section className="mb-10 p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>📊</span> How Hard Is {data.language} to Learn?
          </h2>
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full border text-sm font-medium ${difficultyColors[data.difficulty]}`}>
              {data.difficulty}
            </span>
            <DifficultyBar score={data.difficultyScore} />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{data.difficultyNote}</p>
        </section>

        {/* Writing System */}
        <section className="mb-10 p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span>✍️</span> {data.language} Writing System
          </h2>
          <p className="text-sm font-medium mb-1">{data.script}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{data.scriptNote}</p>
        </section>

        {/* Grammar Basics */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            {data.language} Grammar Basics
          </h2>
          <div className="space-y-3">
            {data.grammarPoints.map((point, i) => (
              <div key={i} className="p-4 bg-muted/20 rounded-xl border">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{point.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Phrases */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span>🗣️</span> Essential {data.language} Phrases
            </h2>
            <Link
              href={data.phrasesLink}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              See all phrases <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">English</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">{data.language}</th>
                  <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Pronunciation</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.quickPhrases.map((phrase, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium">{phrase.english}</td>
                    <td className="px-4 py-3 text-primary font-medium">{phrase.translated}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{phrase.pronunciation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-center">
            <Link
              href={data.phrasesLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted border rounded-xl text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Full {data.language} Phrase Guide (Greetings, Travel, Numbers, Food, Emergency)
            </Link>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            {data.language} Language Facts
          </h2>
          <div className="space-y-2">
            {data.funFacts.map((fact, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-lg">
                <span className="text-yellow-500 shrink-0 mt-0.5">💡</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Learn */}
        <section className="mb-10 p-6 bg-gradient-to-br from-green-500/5 to-emerald-500/10 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-500" />
            Why Learn {data.language}?
          </h2>
          <ul className="space-y-2">
            {data.whyLearn.map((reason, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Official Countries */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Where Is {data.language} Spoken?</h2>
          <p className="text-sm text-muted-foreground mb-3">
            {data.language} is an official language in the following countries:
          </p>
          <div className="flex flex-wrap gap-2">
            {data.officialIn.map((country) => (
              <span key={country} className="px-3 py-1 bg-muted/50 rounded-full border text-sm">
                {country}
              </span>
            ))}
          </div>
        </section>

        {/* Translator CTA */}
        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border text-center mb-10">
          <h2 className="text-xl font-bold mb-2">Start Translating {data.language} Now</h2>
          <p className="text-sm text-muted-foreground mb-5">
            The fastest way to start using {data.language} is to translate real sentences. Our AI translator is free, fast, and supports 248+ languages.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={data.translatorLink}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              English to {data.language} Translator
            </Link>
            <Link
              href={data.reverseLink}
              className="px-6 py-3 bg-muted border rounded-xl text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              {data.language} to English Translator
            </Link>
          </div>
        </div>

        {/* Related Languages */}
        {data.relatedLanguages.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Languages Related to {data.language}</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {data.relatedLanguages.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/learn/${rel.slug}`}
                  className="p-4 bg-muted/30 rounded-xl border hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <p className="font-semibold group-hover:text-primary transition-colors mb-1">
                    Learn {rel.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{rel.similarity}</p>
                  <div className="flex items-center text-xs text-primary mt-2">
                    View guide <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom nav */}
        <div className="pt-8 border-t">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-between">
            <div>
              <p className="font-medium text-foreground mb-1">More Language Guides</p>
              <div className="flex flex-wrap gap-3">
                {learnIndex
                  .filter((l) => l.slug !== data.slug)
                  .slice(0, 5)
                  .map((l) => (
                    <Link key={l.slug} href={`/learn/${l.slug}`} className="text-primary hover:underline">
                      {l.language}
                    </Link>
                  ))}
                <Link href="/learn" className="text-primary hover:underline">All guides →</Link>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Translate</p>
              <div className="flex flex-wrap gap-3">
                <Link href={data.translatorLink} className="text-primary hover:underline">
                  English to {data.language}
                </Link>
                <Link href={data.reverseLink} className="text-primary hover:underline">
                  {data.language} to English
                </Link>
                <Link href={data.phrasesLink} className="text-primary hover:underline">
                  {data.language} Phrases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
