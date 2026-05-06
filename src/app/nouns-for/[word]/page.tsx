import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Tag, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { NOUN_ADJECTIVES } from '@/data/noun-adjectives'
import { TranslateWordSection } from '@/components/translate-word-section'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ word: string }>
}

interface DatamuseWord {
  word: string
  score: number
  tags?: string[]
}

async function fetchWords(param: string, value: string, max = 50): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?${param}=${encodeURIComponent(value)}&md=p&max=${max}`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

function posLabel(tags?: string[]): string {
  if (!tags) return ''
  const map: Record<string, string> = { n: 'noun', v: 'verb', adj: 'adj', adv: 'adv' }
  const pos = tags.find((t) => Object.keys(map).includes(t))
  return pos ? map[pos] : ''
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  return {
    title: `Nouns for "${cap}" — Things That Are ${cap}`,
    description: `Find nouns commonly described as "${decoded}". A complete list of things, people, places, and concepts that are ${decoded} — perfect for writers, essays, and creative projects.`,
    keywords: [
      `nouns for ${decoded}`,
      `things that are ${decoded}`,
      `${decoded} nouns`,
      `${decoded} things`,
      `what is ${decoded}`,
      `${decoded} objects`,
      `${decoded} words`,
    ],
    alternates: { canonical: `https://nagritranslate.com/nouns-for/${decoded}` },
    openGraph: {
      title: `Nouns for "${cap}" — Things That Are ${cap}`,
      description: `Words and things described as "${decoded}". Free noun finder for writers.`,
      type: 'website',
    },
  }
}

export default async function NounsForWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [nouns, associated] = await Promise.all([
    fetchWords('rel_jja', decoded, 50),
    fetchWords('rel_trg', decoded, 20),
  ])

  const nounSet = new Set(nouns.map((w, i) => w.word))
  const filteredAssociated = associated.filter((w) => !nounSet.has(w.word))

  const wordIndex = NOUN_ADJECTIVES.indexOf(decoded)
  const nearby = wordIndex >= 0
    ? [
        ...NOUN_ADJECTIVES.slice(Math.max(0, wordIndex - 4), wordIndex),
        ...NOUN_ADJECTIVES.slice(wordIndex + 1, wordIndex + 5),
      ]
    : NOUN_ADJECTIVES.slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Nouns For', path: '/nouns-for' },
        { name: cap, path: `/nouns-for/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/nouns-for/${decoded}`}
        name={`Nouns for "${cap}" — Things That Are ${cap}`}
        description={`Words and things described as "${decoded}". Free noun finder for writers.`}
        type="ItemPage"
      />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/nouns-for" className="hover:text-foreground transition-colors">Nouns For</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Tag className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Nouns for &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {nouns.length > 0
              ? `${nouns.length} thing${nouns.length !== 1 ? 's' : ''} commonly described as ${decoded}`
              : `Looking up nouns for ${decoded}…`}
          </p>
        </div>

        {/* Nouns — primary content */}
        {nouns.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Things that are &ldquo;{decoded}&rdquo;{' '}
              <span className="text-sm text-muted-foreground font-normal">(nouns)</span>
            </h2>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-100 dark:border-amber-900">
              <div className="flex flex-wrap gap-2">
                {nouns.map((w, i) => {
                  const pos = posLabel(w.tags)
                  return (
                    <Link
                      key={w.word}
                      href={`/adjectives-for/${w.word}`}
                      className="group inline-flex items-baseline gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                    >
                      {w.word}
                      {pos && <span className="text-[10px] text-muted-foreground group-hover:text-inherit">{pos}</span>}
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        ) : (
          <div className="py-10 text-center text-muted-foreground mb-8">
            <p className="mb-2">No nouns found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try searching for a common adjective like &ldquo;brave&rdquo;, &ldquo;dark&rdquo;, or &ldquo;golden&rdquo;.</p>
          </div>
        )}

        {/* Associated words — secondary */}
        {filteredAssociated.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">
              Associated words{' '}
              <span className="text-sm text-muted-foreground font-normal">(related concepts)</span>
            </h2>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {filteredAssociated.map((w, i) => (
                  <Link
                    key={w.word}
                    href={`/nouns-for/${w.word}`}
                    className="inline-flex items-baseline gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {w.word}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Translate word */}
        <TranslateWordSection word={decoded} />

        {/* Cross-links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Synonyms</p>
              <p className="text-xs text-muted-foreground">Similar adjectives</p>
            </div>
            <Link
              href={`/synonyms/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors shrink-0"
            >
              Open <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Antonyms</p>
              <p className="text-xs text-muted-foreground">Opposite adjectives</p>
            </div>
            <Link
              href={`/antonyms/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Dictionary</p>
              <p className="text-xs text-muted-foreground">Definition & examples</p>
            </div>
            <Link
              href={`/dictionary/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Explore more */}
        {nearby.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Explore more adjectives</h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((w, i) => (
                <Link
                  key={`${i}-${w}`}
                  href={`/nouns-for/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/nouns-for"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
              >
                All adjectives <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
