import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Layers, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { ANTONYM_WORDS } from '@/data/antonym-words'
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

async function fetchWords(param: string, value: string, max = 30): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?${param}=${encodeURIComponent(value)}&max=${max}`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  return {
    title: `Collocations for "${cap}" — Words With ${cap}`,
    description: `Common collocations for "${decoded}". Words that naturally go before and after "${decoded}" in English. Great for writing and ESL.`,
    keywords: [
      `collocations for ${decoded}`,
      `words that go with ${decoded}`,
      `${decoded} collocations`,
      `words before ${decoded}`,
      `words after ${decoded}`,
      `${decoded} word combinations`,
      `common phrases with ${decoded}`,
    ],
    alternates: { canonical: `https://nagritranslate.com/collocations/${decoded}` },
    openGraph: {
      title: `Collocations for "${cap}" — Words With ${cap}`,
      description: `Words that naturally go before and after "${decoded}". Free collocation dictionary.`,
      type: 'website',
    },
  }
}

export default async function CollocationWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  // rel_bga = words that frequently PRECEDE the target ("___ [word]")
  // rel_bgb = words that frequently FOLLOW the target ("[word] ___")
  // rel_trg = associated/triggered words (bonus context)
  const [precede, follow, associated] = await Promise.all([
    fetchWords('rel_bga', decoded, 30),
    fetchWords('rel_bgb', decoded, 30),
    fetchWords('rel_trg', decoded, 20),
  ])

  // Remove associated words already shown in precede/follow
  const shownSet = new Set([...precede, ...follow].map((w) => w.word))
  const uniqueAssociated = associated.filter((w) => !shownSet.has(w.word) && w.word !== decoded)

  const wordIndex = ANTONYM_WORDS.indexOf(decoded)
  const nearby = [
    ...ANTONYM_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
    ...ANTONYM_WORDS.slice(wordIndex + 1, wordIndex + 5),
  ].filter(Boolean)

  const hasContent = precede.length > 0 || follow.length > 0

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Collocations', path: '/collocations' },
        { name: cap, path: `/collocations/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/collocations/${decoded}`}
        name={`Collocations for "${cap}" — Words With ${cap}`}
        description={`Words that naturally go before and after "${decoded}". Free collocation dictionary.`}
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
          <Link href="/collocations" className="hover:text-foreground transition-colors">Collocations</Link>
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
              &ldquo;{decoded}&rdquo; collocations
            </h1>
          </div>
          <p className="text-muted-foreground">
            {hasContent
              ? `${precede.length} words before · ${follow.length} words after · ${uniqueAssociated.length} associations`
              : 'Looking up collocations…'}
          </p>
        </div>

        {/* Words that PRECEDE: "___ [word]" */}
        {precede.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-1">
              ___ {decoded}
            </h2>
            <p className="text-sm text-muted-foreground mb-3">Words that naturally come <strong>before</strong> &ldquo;{decoded}&rdquo;</p>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900">
              <div className="flex flex-wrap gap-2">
                {precede.map((w) => (
                  <Link
                    key={w.word}
                    href={`/collocations/${w.word}`}
                    className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                  >
                    <span className="text-muted-foreground text-xs">{w.word}</span>
                    <span className="text-primary font-semibold">{decoded}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Words that FOLLOW: "[word] ___" */}
        {follow.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-1">
              {decoded} ___
            </h2>
            <p className="text-sm text-muted-foreground mb-3">Words that naturally come <strong>after</strong> &ldquo;{decoded}&rdquo;</p>
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-100 dark:border-green-900">
              <div className="flex flex-wrap gap-2">
                {follow.map((w) => (
                  <Link
                    key={w.word}
                    href={`/collocations/${w.word}`}
                    className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                  >
                    <span className="text-primary font-semibold">{decoded}</span>
                    <span className="text-muted-foreground text-xs">{w.word}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {!hasContent && (
          <div className="py-10 text-center text-muted-foreground mb-8">
            <p className="mb-2">No collocations found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try searching a common adjective or verb for the best results.</p>
          </div>
        )}

        {/* Associated words */}
        {uniqueAssociated.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-1">Associated words</h2>
            <p className="text-sm text-muted-foreground mb-3">Words strongly connected to &ldquo;{decoded}&rdquo;</p>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {uniqueAssociated.map((w) => (
                  <Link
                    key={w.word}
                    href={`/collocations/${w.word}`}
                    className="text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
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
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Antonyms</p>
              <p className="text-xs text-muted-foreground">Opposite words</p>
            </div>
            <Link
              href={`/antonyms/${decoded}`}
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
              {nearby.map((w) => (
                <Link
                  key={w}
                  href={`/collocations/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/collocations"
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
