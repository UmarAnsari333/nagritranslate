import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Music2, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { RHYME_WORDS } from '@/data/rhyme-words'
import { TranslateWordSection } from '@/components/translate-word-section'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ word: string }>
}

interface DatamuseWord {
  word: string
  score: number
  numSyllables?: number
  tags?: string[]
}

async function fetchRhymes(
  rel: string,
  word: string,
  max = 50,
): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?${rel}=${encodeURIComponent(word)}&md=sp&max=${max}`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function fetchRelated(word: string): Promise<{ triggers: string[]; follows: string[]; precedes: string[] }> {
  try {
    const [triggerRes, followsRes, precedesRes] = await Promise.all([
      fetch(`https://api.datamuse.com/words?rel_trg=${encodeURIComponent(word)}&max=12`, { next: { revalidate: 86400 } }),
      fetch(`https://api.datamuse.com/words?rel_bga=${encodeURIComponent(word)}&max=8`, { next: { revalidate: 86400 } }),
      fetch(`https://api.datamuse.com/words?rel_bgb=${encodeURIComponent(word)}&max=8`, { next: { revalidate: 86400 } }),
    ])
    const [triggers, follows, precedes] = await Promise.all([
      triggerRes.ok ? triggerRes.json() : [],
      followsRes.ok ? followsRes.json() : [],
      precedesRes.ok ? precedesRes.json() : [],
    ])
    return {
      triggers: (triggers as DatamuseWord[]).map((d) => d.word),
      follows: (follows as DatamuseWord[]).map((d) => d.word),
      precedes: (precedes as DatamuseWord[]).map((d) => d.word),
    }
  } catch {
    return { triggers: [], follows: [], precedes: [] }
  }
}

function groupBySyllable(words: DatamuseWord[]): Map<number, string[]> {
  const map = new Map<number, string[]>()
  for (const w of words) {
    const syl = w.numSyllables ?? 0
    if (!map.has(syl)) map.set(syl, [])
    map.get(syl)!.push(w.word)
  }
  return map
}



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  return {
    title: `Rhymes for "${cap}" — Free Rhyming Dictionary`,
    description: `Find perfect & near rhymes for "${decoded}", grouped by syllable count. Free rhyming dictionary for poetry & songs.`,
    keywords: [
      `rhymes with ${decoded}`,
      `words that rhyme with ${decoded}`,
      `${decoded} rhymes`,
      `what rhymes with ${decoded}`,
      `perfect rhymes for ${decoded}`,
      `near rhymes ${decoded}`,
    ],
    alternates: { canonical: `https://nagritranslate.com/rhymes/${decoded}` },
    openGraph: {
      title: `Words That Rhyme With ${cap}`,
      description: `Perfect and near rhymes for "${decoded}" — free rhyming dictionary.`,
      type: 'website',
    },
  }
}

export default async function RhymeWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()

  // Accept any word (not just from the list) — just 404 on empty/garbage
  if (!decoded || decoded.length > 50) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [perfectRaw, nearRaw, related] = await Promise.all([
    fetchRhymes('rel_rhy', decoded),
    fetchRhymes('rel_nry', decoded, 40),
    fetchRelated(decoded),
  ])

  const perfectGroups = [...groupBySyllable(perfectRaw).entries()].sort(([a], [b]) => a - b)
  const nearWords = nearRaw.map((d) => d.word)
  const totalPerfect = perfectRaw.length

  // Nearby words in the list for "explore more" section
  const wordIndex = RHYME_WORDS.indexOf(decoded)
  const nearby = [
    ...RHYME_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
    ...RHYME_WORDS.slice(wordIndex + 1, wordIndex + 5),
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Rhymes', path: '/rhymes' },
        { name: cap, path: `/rhymes/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/rhymes/${decoded}`}
        name={`Words That Rhyme With ${cap}`}
        description={`Perfect and near rhymes for "${decoded}". Free rhyming dictionary.`}
        type="ItemPage"
      />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/rhymes" className="hover:text-foreground transition-colors">Rhymes</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Word hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Music2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Rhymes with &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {totalPerfect > 0
              ? `${totalPerfect} perfect rhyme${totalPerfect !== 1 ? 's' : ''} · ${nearWords.length} near rhymes`
              : nearWords.length > 0
              ? `${nearWords.length} near rhymes`
              : 'Fetching rhymes…'}
          </p>
        </div>

        {/* Perfect rhymes */}
        {perfectGroups.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Perfect Rhymes</h2>
            <div className="space-y-4">
              {perfectGroups.map(([syl, words]) => (
                <div key={syl} className="p-4 bg-muted/30 rounded-2xl border">
                  {syl > 0 && (
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                      {syl} syllable{syl !== 1 ? 's' : ''}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {words.map((w) => (
                      <Link
                        key={w}
                        href={`/rhymes/${w}`}
                        className="text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                      >
                        {w}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Near rhymes */}
        {nearWords.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">Near Rhymes <span className="text-sm text-muted-foreground font-normal">(slant rhymes)</span></h2>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {nearWords.map((w) => (
                  <Link
                    key={w}
                    href={`/rhymes/${w}`}
                    className="text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {w}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {totalPerfect === 0 && nearWords.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            <p className="mb-2">No rhymes found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">This word may be very rare or have a unique pronunciation.</p>
          </div>
        )}

        {/* Word associations */}
        {(related.triggers.length > 0 || related.follows.length > 0 || related.precedes.length > 0) && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Word Associations</h2>
            <div className="p-5 bg-muted/30 rounded-2xl border space-y-4">
              {related.triggers.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Often associated with</p>
                  <div className="flex flex-wrap gap-2">
                    {related.triggers.map((w) => (
                      <Link key={w} href={`/rhymes/${w}`}
                        className="text-xs px-2.5 py-1 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                        {w}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {related.follows.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Words often after &ldquo;{decoded}&rdquo;</p>
                  <div className="flex flex-wrap gap-2">
                    {related.follows.map((w) => (
                      <Link key={w} href={`/rhymes/${w}`}
                        className="text-xs px-2.5 py-1 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                        {w}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {related.precedes.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Words often before &ldquo;{decoded}&rdquo;</p>
                  <div className="flex flex-wrap gap-2">
                    {related.precedes.map((w) => (
                      <Link key={w} href={`/rhymes/${w}`}
                        className="text-xs px-2.5 py-1 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                        {w}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Translate word */}
        <TranslateWordSection word={decoded} />

        {/* Dictionary link */}
        <div className="p-5 border rounded-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Look up &ldquo;{decoded}&rdquo; in the dictionary</p>
            <p className="text-xs text-muted-foreground">Definitions, pronunciation, synonyms & antonyms</p>
          </div>
          <Link
            href={`/dictionary/${decoded}`}
            className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
          >
            Open dictionary <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Explore more words */}
        {nearby.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Explore more words</h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((w) => (
                <Link
                  key={w}
                  href={`/rhymes/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/rhymes"
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
