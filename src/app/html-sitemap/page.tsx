import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { languages, slugifyLanguage } from '@/lib/languages'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Sitemap — All Languages | Nagri Translate',
  description:
    'Complete sitemap of Nagri Translate. Browse translation pages for all 248+ supported languages including Spanish, French, Arabic, Hindi, Chinese, and more.',
  alternates: {
    canonical: 'https://nagritranslate.com/html-sitemap',
  },
}

// Deduplicate by label (some languages share the same value/code)
const allLanguages = languages
  .filter((l) => l.value !== 'auto')
  .filter((l, i, arr) => arr.findIndex((x) => x.label === l.label) === i)

// Group by first letter
const grouped = allLanguages.reduce<Record<string, typeof allLanguages>>((acc, lang) => {
  const letter = lang.label[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(lang)
  return acc
}, {})

const letters = Object.keys(grouped).sort()

export default function HtmlSitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Sitemap', path: '/html-sitemap' },
      ]} />
      <WebPageSchema
        path="/html-sitemap"
        name="Sitemap — All Languages | Nagri Translate"
        description="Complete sitemap of Nagri Translate. Browse translation pages for all 248+ supported languages."
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
          <span className="text-foreground font-medium">Sitemap</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Translation Sitemap</h1>
          <p className="text-muted-foreground">
            Browse all {allLanguages.length} languages supported by Nagri Translate. Select a language to see all available translation pairs.
          </p>
        </div>

        {/* A-Z Jump Nav */}
        <div className="flex flex-wrap gap-1 mb-8 p-3 bg-muted/20 rounded-xl border">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Language Groups */}
        <div className="space-y-8">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="text-xl font-bold mb-3 pb-2 border-b flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm">
                  {letter}
                </span>
                {letter}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                {grouped[letter].map((lang) => (
                  <li key={lang.label}>
                    <Link
                      href={`/html-sitemap/${slugifyLanguage(lang.label)}`}
                      className="block px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                    >
                      {lang.label} translations
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
