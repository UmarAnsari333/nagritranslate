import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Ear, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { SOUNDS_LIKE_WORDS } from '@/data/sounds-like-words'
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

async function fetchSoundsLike(word: string): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?sl=${encodeURIComponent(word)}&md=pd&max=30`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

function posLabel(tag: string): string {
  const map: Record<string, string> = { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb' }
  return map[tag] ?? tag
}

function parseDef(def: string): { pos: string; meaning: string } {
  const tab = def.indexOf('\t')
  if (tab === -1) return { pos: '', meaning: def }
  return { pos: posLabel(def.slice(0, tab)), meaning: def.slice(tab + 1) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  return {
    title: `Words That Sound Like "${cap}" — Sounds Like ${cap}`,
    description: `Find English words that sound like "${decoded}". Phonetic word finder — type how it sounds, discover how it's spelled.`,
    keywords: [
      `words that sound like ${decoded}`,
      `sounds like ${decoded}`,
      `${decoded} sounds like`,
      `phonetic spelling ${decoded}`,
      `${decoded} pronunciation`,
      `${decoded} similar sound`,
    ],
    alternates: { canonical: `https://nagritranslate.com/sounds-like/${decoded}` },
    openGraph: {
      title: `Words That Sound Like "${cap}"`,
      description: `Find English words that sound like "${decoded}". Free phonetic word finder.`,
      type: 'website',
    },
  }
}

export default async function SoundsLikeWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const results = await fetchSoundsLike(decoded)

  const wordIndex = SOUNDS_LIKE_WORDS.indexOf(decoded)
  const nearby = wordIndex >= 0
    ? [
        ...SOUNDS_LIKE_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
        ...SOUNDS_LIKE_WORDS.slice(wordIndex + 1, wordIndex + 5),
      ]
    : SOUNDS_LIKE_WORDS.slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Sounds Like', path: '/sounds-like' },
        { name: cap, path: `/sounds-like/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/sounds-like/${decoded}`}
        name={`Words That Sound Like "${cap}"`}
        description={`Find English words that sound like "${decoded}". Phonetic word finder.`}
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
          <Link href="/sounds-like" className="hover:text-foreground transition-colors">Sounds Like</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Ear className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sounds like &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {results.length > 0
              ? `${results.length} word${results.length !== 1 ? 's' : ''} with a similar pronunciation to "${decoded}"`
              : `No similar-sounding words found for "${decoded}". Try a different phonetic spelling.`}
          </p>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Similar-sounding words{' '}
              <span className="text-sm text-muted-foreground font-normal">sorted by closest match</span>
            </h2>
            <div className="space-y-3">
              {results.map(({ word: w, defs }, i) => {
                const parsedDefs = (defs ?? []).slice(0, 3).map(parseDef)
                return (
                  <div key={`${i}-${w}`} className="p-4 rounded-2xl border bg-muted/10">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xl font-bold">{w}</span>
                      <Link
                        href={`/dictionary/${w}`}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      >
                        dictionary <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    {parsedDefs.length > 0 ? (
                      <ul className="space-y-1">
                        {parsedDefs.map((d, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            {d.pos && (
                              <span className="shrink-0 text-[11px] font-medium text-primary/70 uppercase tracking-wide mt-0.5">
                                {d.pos}
                              </span>
                            )}
                            <span>{d.meaning}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">See dictionary for definition.</p>
                    )}
                    <div className="flex gap-2 mt-3">
                      <Link
                        href={`/synonyms/${w}`}
                        className="text-xs px-2.5 py-1 rounded-lg border hover:bg-muted transition-colors"
                      >
                        Synonyms
                      </Link>
                      <Link
                        href={`/homophones/${w}`}
                        className="text-xs px-2.5 py-1 rounded-lg border hover:bg-muted transition-colors"
                      >
                        Homophones
                      </Link>
                      <Link
                        href={`/rhymes/${w}`}
                        className="text-xs px-2.5 py-1 rounded-lg border hover:bg-muted transition-colors"
                      >
                        Rhymes
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {results.length === 0 && (
          <div className="py-10 text-center text-muted-foreground mb-8">
            <p className="mb-2">No similar-sounding words found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try phonetic variations like &ldquo;nite&rdquo;, &ldquo;fone&rdquo;, or &ldquo;kat&rdquo;.</p>
          </div>
        )}

        {/* Translate word */}
        <TranslateWordSection word={decoded} />

        {/* Cross-links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Homophones</p>
              <p className="text-xs text-muted-foreground">Exact same sound</p>
            </div>
            <Link
              href={`/homophones/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Rhymes</p>
              <p className="text-xs text-muted-foreground">Same ending sound</p>
            </div>
            <Link
              href={`/rhymes/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              View <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Dictionary</p>
              <p className="text-xs text-muted-foreground">Full definition</p>
            </div>
            <Link
              href={`/dictionary/${decoded}`}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-muted transition-colors shrink-0"
            >
              Open <ExternalLink className="w-3 h-3" />
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
                  href={`/sounds-like/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/sounds-like"
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
