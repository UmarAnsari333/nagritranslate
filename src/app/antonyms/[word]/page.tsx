import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, FlipHorizontal2, ExternalLink } from 'lucide-react'
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
  defs?: string[]
}

async function fetchWords(param: string, value: string, max = 30): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?${param}=${encodeURIComponent(value)}&md=pd&max=${max}`,
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

export async function generateStaticParams() {
  return ANTONYM_WORDS.map((word) => ({ word }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  return {
    title: `Antonyms for "${cap}" — Opposite of ${cap}`,
    description: `Find antonyms and opposite words for "${decoded}" with definitions. Free antonyms dictionary — synonyms included.`,
    keywords: [
      `antonyms for ${decoded}`,
      `opposite of ${decoded}`,
      `${decoded} antonyms`,
      `opposite words for ${decoded}`,
      `contrary of ${decoded}`,
      `${decoded} opposite`,
    ],
    alternates: { canonical: `https://nagritranslate.com/antonyms/${decoded}` },
    openGraph: {
      title: `Antonyms for "${cap}" — Opposite of ${cap}`,
      description: `Antonyms & opposite words for "${decoded}". Free antonyms dictionary.`,
      type: 'website',
    },
  }
}

export default async function AntonymWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [antonyms, synonyms] = await Promise.all([
    fetchWords('rel_ant', decoded, 40),
    fetchWords('rel_syn', decoded, 20),
  ])

  const wordIndex = ANTONYM_WORDS.indexOf(decoded)
  const nearby = [
    ...ANTONYM_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
    ...ANTONYM_WORDS.slice(wordIndex + 1, wordIndex + 5),
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Antonyms', path: '/antonyms' },
        { name: cap, path: `/antonyms/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/antonyms/${decoded}`}
        name={`Antonyms for "${cap}" — Opposite of ${cap}`}
        description={`Antonyms & opposite words for "${decoded}". Free antonyms dictionary.`}
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
          <Link href="/antonyms" className="hover:text-foreground transition-colors">Antonyms</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <FlipHorizontal2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Opposite of &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {antonyms.length > 0
              ? `${antonyms.length} antonym${antonyms.length !== 1 ? 's' : ''} · ${synonyms.length} synonyms`
              : 'Looking up antonyms…'}
          </p>
        </div>

        {/* Antonyms — primary content */}
        {antonyms.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Antonyms <span className="text-sm text-muted-foreground font-normal">(opposite meaning)</span>
            </h2>
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-2xl border border-orange-100 dark:border-orange-900">
              <div className="flex flex-wrap gap-2">
                {antonyms.map((w) => {
                  const pos = posLabel(w.tags)
                  return (
                    <Link
                      key={w.word}
                      href={`/antonyms/${w.word}`}
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
            <p className="mb-2">No antonyms found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try the synonyms dictionary for related words.</p>
          </div>
        )}

        {/* Synonyms — secondary */}
        {synonyms.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">
              Synonyms <span className="text-sm text-muted-foreground font-normal">(similar meaning)</span>
            </h2>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {synonyms.map((w) => {
                  const pos = posLabel(w.tags)
                  return (
                    <Link
                      key={w.word}
                      href={`/synonyms/${w.word}`}
                      className="group inline-flex items-baseline gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {w.word}
                      {pos && <span className="text-[10px] group-hover:text-inherit">{pos}</span>}
                    </Link>
                  )
                })}
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
              <p className="text-sm font-medium">Rhymes</p>
              <p className="text-xs text-muted-foreground">Perfect & near rhymes</p>
            </div>
            <Link
              href={`/rhymes/${decoded}`}
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
                  href={`/antonyms/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/antonyms"
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
