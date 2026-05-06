import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Layers, ExternalLink, ChevronUp } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { HYPONYM_WORDS } from '@/data/hyponym-words'
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
    title: `Types of ${cap} — Complete List of ${cap} Kinds & Examples`,
    description: `Explore all types of ${decoded} with examples. A complete list of ${decoded} kinds, varieties, and categories — perfect for students, writers, and curious minds.`,
    keywords: [
      `types of ${decoded}`,
      `kinds of ${decoded}`,
      `${decoded} types`,
      `${decoded} examples`,
      `${decoded} varieties`,
      `${decoded} categories`,
      `list of ${decoded}`,
      `different types of ${decoded}`,
    ],
    alternates: { canonical: `https://nagritranslate.com/types-of/${decoded}` },
    openGraph: {
      title: `Types of ${cap} — Complete List`,
      description: `All types, kinds, and varieties of ${decoded}. Free vocabulary explorer.`,
      type: 'website',
    },
  }
}

export default async function TypesOfWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [hyponyms, hypernyms] = await Promise.all([
    fetchWords('rel_spc', decoded, 50),  // more specific (types of)
    fetchWords('rel_gen', decoded, 20),  // more general (is a type of)
  ])

  // rel_spc doesn't support multi-word phrases — fall back to ml (means like)
  const related = hyponyms.length === 0
    ? await fetchWords('ml', decoded, 40)
    : []

  const wordIndex = HYPONYM_WORDS.indexOf(decoded)
  const nearby = wordIndex >= 0
    ? [
        ...HYPONYM_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
        ...HYPONYM_WORDS.slice(wordIndex + 1, wordIndex + 5),
      ]
    : HYPONYM_WORDS.slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Types Of', path: '/types-of' },
        { name: cap, path: `/types-of/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/types-of/${decoded}`}
        name={`Types of ${cap} — Complete List`}
        description={`All types, kinds, and varieties of ${decoded}. Free vocabulary explorer.`}
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
          <Link href="/types-of" className="hover:text-foreground transition-colors">Types Of</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Types of &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {hyponyms.length > 0
              ? `${hyponyms.length} specific kind${hyponyms.length !== 1 ? 's' : ''} of ${decoded}`
              : related.length > 0
              ? `${related.length} related type${related.length !== 1 ? 's' : ''} of ${decoded}`
              : `No specific types found for "${decoded}".`}
          </p>
        </div>

        {/* Hypernyms — "is a type of" */}
        {hypernyms.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <ChevronUp className="w-4 h-4" />
              {cap} is a type of…
            </h2>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {hypernyms.map((w, i) => (
                  <Link
                    key={w.word}
                    href={`/types-of/${w.word}`}
                    className="inline-flex items-baseline gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {w.word}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hyponyms — primary content */}
        {hyponyms.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Types of &ldquo;{decoded}&rdquo;{' '}
              <span className="text-sm text-muted-foreground font-normal">(specific kinds)</span>
            </h2>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900">
              <div className="flex flex-wrap gap-2">
                {hyponyms.map((w, i) => {
                  const pos = posLabel(w.tags)
                  return (
                    <Link
                      key={w.word}
                      href={`/types-of/${w.word}`}
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
        ) : related.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Related types of &ldquo;{decoded}&rdquo;{' '}
              <span className="text-sm text-muted-foreground font-normal">(semantically related)</span>
            </h2>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900">
              <div className="flex flex-wrap gap-2">
                {related.map((w) => {
                  const pos = posLabel(w.tags)
                  return (
                    <Link
                      key={w.word}
                      href={`/types-of/${encodeURIComponent(w.word)}`}
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
            <p className="mb-2">No specific types found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try a broader category like &ldquo;dog&rdquo;, &ldquo;fruit&rdquo;, &ldquo;vehicle&rdquo;, or &ldquo;sport&rdquo;.</p>
          </div>
        )}

        {/* Translate word */}
        <TranslateWordSection word={decoded} />

        {/* Cross-links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Dictionary</p>
              <p className="text-xs text-muted-foreground">Definition & examples</p>
            </div>
            <Link
              href={`/dictionary/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors shrink-0"
            >
              Open <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Adjectives For</p>
              <p className="text-xs text-muted-foreground">Words that describe it</p>
            </div>
            <Link
              href={`/adjectives-for/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Synonyms</p>
              <p className="text-xs text-muted-foreground">Similar words</p>
            </div>
            <Link
              href={`/synonyms/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Explore more */}
        {nearby.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Explore more categories</h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((w, i) => (
                <Link
                  key={`${i}-${w}`}
                  href={`/types-of/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/types-of"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
              >
                All categories <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
