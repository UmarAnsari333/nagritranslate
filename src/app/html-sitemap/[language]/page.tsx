import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { languages, slugifyLanguage } from '@/lib/languages'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

interface PageProps {
  params: Promise<{ language: string }>
}

// Deduplicate by label (some languages share the same value/code)
const allLanguages = languages
  .filter((l) => l.value !== 'auto')
  .filter((l, i, arr) => arr.findIndex((x) => x.label === l.label) === i)

export async function generateStaticParams() {
  return allLanguages.map((lang) => ({ language: slugifyLanguage(lang.label) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language: slug } = await params
  const lang = allLanguages.find((l) => slugifyLanguage(l.label) === slug)
  if (!lang) return {}

  return {
    title: `${lang.label} Translation Sitemap — All ${lang.label} Translation Pairs | Nagri Translate`,
    description: `Browse all ${lang.label} translation pages. Translate ${lang.label} to and from 248+ languages including English, Spanish, French, Arabic, Hindi, Chinese, and more.`,
    alternates: {
      canonical: `https://nagritranslate.com/html-sitemap/${slug}`,
    },
  }
}

export default async function LanguageSitemapPage({ params }: PageProps) {
  const { language: slug } = await params
  const currentLang = allLanguages.find((l) => slugifyLanguage(l.label) === slug)
  if (!currentLang) notFound()

  const otherLanguages = allLanguages.filter((l) => l.value !== currentLang.value)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Sitemap', path: '/html-sitemap' },
        { name: currentLang.label, path: `/html-sitemap/${slug}` },
      ]} />
      <WebPageSchema
        path={`/html-sitemap/${slug}`}
        name={`${currentLang.label} Translation Sitemap | Nagri Translate`}
        description={`All ${currentLang.label} translation pairs — translate ${currentLang.label} to and from 248+ languages.`}
        type="CollectionPage"
      />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/html-sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{currentLang.label}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{currentLang.label} Translations</h1>
          <p className="text-muted-foreground">
            All {otherLanguages.length * 2} translation pages for {currentLang.label} — translate to and from every supported language.
          </p>
        </div>

        {/* Translation pairs */}
        <div className="space-y-1">
          {otherLanguages.map((other) => {
            const forwardSlug = `${slugifyLanguage(currentLang.label)}-to-${slugifyLanguage(other.label)}`
            const reverseSlug = `${slugifyLanguage(other.label)}-to-${slugifyLanguage(currentLang.label)}`
            return (
              <div key={other.label} className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <Link
                  href={`/ai-translate/${forwardSlug}`}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                >
                  {currentLang.label} to {other.label} translation
                </Link>
                <Link
                  href={`/ai-translate/${reverseSlug}`}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                >
                  {other.label} to {currentLang.label} translation
                </Link>
              </div>
            )
          })}
        </div>

        {/* Back link */}
        <div className="mt-10 pt-6 border-t">
          <Link href="/html-sitemap" className="text-sm text-primary hover:underline">
            ← Back to all languages
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
