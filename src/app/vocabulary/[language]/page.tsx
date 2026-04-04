import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, Globe, BookOpen, BookMarked, Volume2, Calendar } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getVocabularyBySlug, vocabularyIndex } from '@/lib/vocabulary-data'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

interface PageProps {
  params: Promise<{ language: string }>
}

export async function generateStaticParams() {
  return vocabularyIndex.map((lang) => ({ language: lang.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language } = await params
  const data = getVocabularyBySlug(language)
  if (!data) return {}

  const title = `${data.language} Vocabulary — Numbers, Colors, Animals & More`
  const description = `Learn essential ${data.language} vocabulary words with pronunciation. Numbers 1–1000, colors, days of the week, months, animals, family members, body parts, and food in ${data.language} (${data.nativeName}).`

  return {
    title,
    description,
    keywords: [
      `${data.language.toLowerCase()} vocabulary`,
      `${data.language.toLowerCase()} words`,
      `numbers in ${data.language.toLowerCase()}`,
      `colors in ${data.language.toLowerCase()}`,
      `days of the week in ${data.language.toLowerCase()}`,
      `${data.language.toLowerCase()} animals vocabulary`,
      `${data.language.toLowerCase()} family words`,
      `${data.language.toLowerCase()} body parts`,
      `${data.language.toLowerCase()} food vocabulary`,
      `learn ${data.language.toLowerCase()} words`,
      `${data.language.toLowerCase()} word list`,
      `basic ${data.language.toLowerCase()} vocabulary`,
    ],
    alternates: {
      canonical: `https://nagritranslate.com/vocabulary/${language}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nagritranslate.com/vocabulary/${language}`,
    },
  }
}

export default async function VocabularyPage({ params }: PageProps) {
  const { language } = await params
  const data = getVocabularyBySlug(language)
  if (!data) notFound()

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Vocabulary', path: '/vocabulary' },
        { name: data.language, path: `/vocabulary/${data.slug}` },
      ]} />
      <WebPageSchema
        path={`/vocabulary/${data.slug}`}
        name={`${data.language} Vocabulary — Numbers, Colors, Animals & More`}
        description={`Learn essential ${data.language} vocabulary words with pronunciation. Numbers, colors, days of the week, months, animals, family members, body parts, and food in ${data.language}.`}
        type="ItemPage"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/vocabulary" className="hover:text-foreground transition-colors">Vocabulary</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{data.language}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{data.flag}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {data.language} Vocabulary
              </h1>
              <p className="text-muted-foreground mt-1">
                {data.nativeName} · {data.family} family · {data.speakers} speakers
              </p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
                <Calendar className="w-3 h-3" />
                Last updated: <time dateTime="2026-04-02">April 2, 2026</time>
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Essential {data.language} vocabulary for beginners and language learners. Every word includes
            a pronunciation guide so you can say it correctly from day one.
          </p>
        </div>

        {/* Quick jump links */}
        <div className="flex flex-wrap gap-2 mb-10">
          {data.categories.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-1.5 bg-muted/50 border rounded-lg text-sm hover:bg-muted hover:border-violet-500/30 transition-all"
            >
              {cat.icon} {cat.category}
            </a>
          ))}
        </div>

        {/* Quick Links to Translator */}
        <div className="p-4 bg-violet-500/5 border border-violet-500/20 rounded-xl mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-violet-500 shrink-0" />
            <span className="text-sm font-medium">
              Want to translate any {data.language} word or text? Use our free AI translator.
            </span>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link
              href={data.translatorLink}
              className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors whitespace-nowrap"
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

        {/* Vocabulary Categories */}
        <div className="space-y-12">
          {data.categories.map((cat, catIndex) => (
            <section key={cat.category} id={cat.category.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold">{cat.category}</h2>
                <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                  {cat.words.length} words
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
                    {cat.words.map((word, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{word.english}</td>
                        <td className="px-4 py-3 text-violet-600 dark:text-violet-400 font-medium">{word.translated}</td>
                        <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{word.pronunciation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Inline CTA after Numbers and Colors sections */}
              {(catIndex === 0 || catIndex === 2) && (
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                  <span>Practice these {data.language} words with our free</span>
                  <Link href={data.translatorLink} className="text-violet-600 dark:text-violet-400 hover:underline">
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
            Dive deeper with our complete {data.language} learning guide — language facts, grammar basics,
            script overview, and why it&apos;s worth learning.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={data.learnLink}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {data.language} Language Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href={data.phrasesLink}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Common {data.language} Phrases
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Translator CTA */}
        <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">Translate Any {data.language} Word</h2>
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
                  href={`/vocabulary/${rel.slug}`}
                  className="p-4 bg-muted/30 rounded-xl border hover:border-violet-500/30 hover:shadow-sm transition-all group"
                >
                  <p className="font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-1">
                    {rel.name} Vocabulary
                  </p>
                  <p className="text-xs text-muted-foreground">Words and pronunciation in {rel.name}</p>
                  <div className="flex items-center text-xs text-violet-600 dark:text-violet-400 mt-2">
                    View vocabulary <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
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
              <p className="font-medium text-foreground mb-1">More Vocabulary Guides</p>
              <div className="flex flex-wrap gap-3">
                {vocabularyIndex
                  .filter((v) => v.slug !== data.slug)
                  .slice(0, 5)
                  .map((v) => (
                    <Link key={v.slug} href={`/vocabulary/${v.slug}`} className="text-primary hover:underline">
                      {v.language}
                    </Link>
                  ))}
                <Link href="/vocabulary" className="text-primary hover:underline">All languages →</Link>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Also explore</p>
              <div className="flex flex-wrap gap-3">
                <Link href={data.phrasesLink} className="text-primary hover:underline">
                  {data.language} Phrases
                </Link>
                <Link href={data.learnLink} className="text-primary hover:underline">
                  Learn {data.language}
                </Link>
                <Link href={data.translatorLink} className="text-primary hover:underline">
                  {data.language} Translator
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
