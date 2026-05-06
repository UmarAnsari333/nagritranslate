import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Puzzle, ExternalLink, ChevronUp } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { PARTS_WORDS } from '@/data/parts-words'
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
    title: `Parts of a ${cap} — Components & Structure of ${cap}`,
    description: `Explore all the parts, components, and sections of a ${decoded}. Learn what makes up a ${decoded} and what a ${decoded} is part of.`,
    keywords: [
      `parts of a ${decoded}`,
      `parts of ${decoded}`,
      `components of ${decoded}`,
      `${decoded} parts`,
      `${decoded} components`,
      `${decoded} structure`,
      `what makes up a ${decoded}`,
      `${decoded} anatomy`,
    ],
    alternates: { canonical: `https://nagritranslate.com/parts-of/${decoded}` },
    openGraph: {
      title: `Parts of a ${cap} — Components & Structure`,
      description: `All parts and components of a ${decoded}. Free vocabulary explorer.`,
      type: 'website',
    },
  }
}

export default async function PartsOfWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [parts, wholeOf] = await Promise.all([
    fetchWords('rel_com', decoded, 50),  // parts/components of this word
    fetchWords('rel_par', decoded, 20),  // what this word is a part of
  ])

  const wordIndex = PARTS_WORDS.indexOf(decoded)
  const nearby = wordIndex >= 0
    ? [
        ...PARTS_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
        ...PARTS_WORDS.slice(wordIndex + 1, wordIndex + 5),
      ]
    : PARTS_WORDS.slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Parts Of', path: '/parts-of' },
        { name: cap, path: `/parts-of/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/parts-of/${decoded}`}
        name={`Parts of a ${cap} — Components & Structure`}
        description={`All parts and components of a ${decoded}. Free vocabulary explorer.`}
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
          <Link href="/parts-of" className="hover:text-foreground transition-colors">Parts Of</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Puzzle className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Parts of a &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {parts.length > 0
              ? `${parts.length} component${parts.length !== 1 ? 's' : ''} that make up a ${decoded}`
              : `No components found for "${decoded}" — try a physical object like "car", "tree", or "guitar".`}
          </p>
        </div>

        {/* Whole-of — "is part of" */}
        {wholeOf.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <ChevronUp className="w-4 h-4" />
              {cap} is a part of…
            </h2>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {wholeOf.map((w, i) => (
                  <Link
                    key={w.word}
                    href={`/parts-of/${w.word}`}
                    className="inline-flex items-baseline gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {w.word}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Parts — primary content */}
        {parts.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Parts of a &ldquo;{decoded}&rdquo;{' '}
              <span className="text-sm text-muted-foreground font-normal">(components)</span>
            </h2>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900">
              <div className="flex flex-wrap gap-2">
                {parts.map((w, i) => {
                  const pos = posLabel(w.tags)
                  return (
                    <Link
                      key={w.word}
                      href={`/parts-of/${w.word}`}
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
            <p className="mb-2">No parts found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try a physical object — &ldquo;car&rdquo;, &ldquo;guitar&rdquo;, &ldquo;tree&rdquo;, &ldquo;body&rdquo;, or &ldquo;house&rdquo;.</p>
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
              <p className="text-sm font-medium">Types Of</p>
              <p className="text-xs text-muted-foreground">Kinds & varieties</p>
            </div>
            <Link
              href={`/types-of/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
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
        </div>

        {/* Explore more */}
        {nearby.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Explore more words</h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((w, i) => (
                <Link
                  key={`${i}-${w}`}
                  href={`/parts-of/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/parts-of"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
              >
                All words <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
