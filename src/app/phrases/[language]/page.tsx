import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, Globe, Volume2, BookOpen } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getPhrasesBySlug, phrasesIndex } from '@/lib/phrases-data'

interface PageProps {
  params: Promise<{ language: string }>
}

export async function generateStaticParams() {
  return phrasesIndex.map((lang) => ({ language: lang.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language } = await params
  const data = getPhrasesBySlug(language)
  if (!data) return {}

  const title = `Common ${data.language} Phrases — Essential ${data.language} for Beginners`
  const description = `Learn ${data.language} phrases with pronunciation. Greetings, travel, food, numbers, and emergency phrases in ${data.language} (${data.nativeName}). ${data.speakers} speakers worldwide.`

  return {
    title,
    description,
    keywords: [
      `common ${data.language.toLowerCase()} phrases`,
      `basic ${data.language.toLowerCase()} phrases`,
      `${data.language.toLowerCase()} phrases for beginners`,
      `${data.language.toLowerCase()} travel phrases`,
      `${data.language.toLowerCase()} greetings`,
      `learn ${data.language.toLowerCase()}`,
      `${data.language.toLowerCase()} pronunciation`,
      `essential ${data.language.toLowerCase()} phrases`,
      `${data.language.toLowerCase()} phrases with pronunciation`,
      `everyday ${data.language.toLowerCase()} phrases`,
    ],
    alternates: {
      canonical: `https://nagritranslate.com/phrases/${language}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nagritranslate.com/phrases/${language}`,
    },
  }
}

export default async function PhrasesPage({ params }: PageProps) {
  const { language } = await params
  const data = getPhrasesBySlug(language)
  if (!data) notFound()

  const difficultyStars = (score: number) => '★'.repeat(score) + '☆'.repeat(5 - score)

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
          <Link href="/phrases" className="hover:text-foreground transition-colors">Phrases</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{data.language}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{data.flag}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Common {data.language} Phrases
              </h1>
              <p className="text-muted-foreground mt-1">
                {data.nativeName} · {data.family} family · {data.speakers} speakers
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Essential {data.language} phrases for travelers, students, and language learners. Every phrase
            includes pronunciation written in plain English so you can start speaking immediately.
          </p>
        </div>

        {/* Quick Links to Translator — prominent internal link */}
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium">
              Want to translate any {data.language} text or phrase? Use our free AI translator.
            </span>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link
              href={data.translatorLink}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              English → {data.language}
            </Link>
            <Link
              href={data.reverseLink}
              className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors whitespace-nowrap"
            >
              {data.language} → English
            </Link>
          </div>
        </div>

        {/* Phrase Categories */}
        <div className="space-y-10">
          {data.categories.map((cat) => (
            <section key={cat.category}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold">{cat.category}</h2>
                <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                  {cat.phrases.length} phrases
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground">English</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground">{data.language}</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Volume2 className="w-3.5 h-3.5" />
                          Pronunciation
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {cat.phrases.map((phrase, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{phrase.english}</td>
                        <td className="px-4 py-3 text-primary font-medium">{phrase.translated}</td>
                        <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{phrase.pronunciation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Inline CTA after Greetings and Numbers sections */}
              {(cat.category === 'Greetings' || cat.category === 'Numbers') && (
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                  <span>Practice these {data.language} phrases with our free</span>
                  <Link href={data.translatorLink} className="text-primary hover:underline">
                    {data.language} translator
                  </Link>
                  <span>→</span>
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Learn More Section */}
        <div className="mt-14 p-6 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 rounded-2xl border">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-bold">Want to Learn {data.language}?</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Dive deeper with our complete {data.language} learning guide — language facts, grammar basics, script overview, and why it&apos;s worth learning.
          </p>
          <Link
            href={`/learn/${data.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {data.language} Language Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Translator CTA */}
        <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">Translate Any {data.language} Text</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Type, paste, upload a document, or use voice input. Our free AI translator handles all {data.language} content instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={data.translatorLink}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              Translate English to {data.language}
            </Link>
            <Link
              href={data.reverseLink}
              className="px-6 py-3 bg-muted border rounded-xl text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              Translate {data.language} to English
            </Link>
          </div>
        </div>

        {/* Related Languages */}
        {data.relatedLanguages.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold mb-4">Related Languages</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {data.relatedLanguages.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/phrases/${rel.slug}`}
                  className="p-4 bg-muted/30 rounded-xl border hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <p className="font-semibold group-hover:text-primary transition-colors mb-1">
                    {rel.name} Phrases
                  </p>
                  <p className="text-xs text-muted-foreground">Common phrases in {rel.name}</p>
                  <div className="flex items-center text-xs text-primary mt-2">
                    View phrases <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="mt-10 pt-8 border-t">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-between">
            <div>
              <p className="font-medium text-foreground mb-1">More Phrase Guides</p>
              <div className="flex flex-wrap gap-3">
                {phrasesIndex
                  .filter((p) => p.slug !== data.slug)
                  .slice(0, 5)
                  .map((p) => (
                    <Link key={p.slug} href={`/phrases/${p.slug}`} className="text-primary hover:underline">
                      {p.language}
                    </Link>
                  ))}
                <Link href="/phrases" className="text-primary hover:underline">All languages →</Link>
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
                <Link href="/languages" className="text-primary hover:underline">All languages</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
