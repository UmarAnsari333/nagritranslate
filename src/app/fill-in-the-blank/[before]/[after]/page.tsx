import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Puzzle, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { FillInBlankSearch } from '@/components/fill-in-blank/fill-in-blank-search'
import { TranslateWordSection } from '@/components/translate-word-section'
import { FILL_IN_BLANK_PAIRS } from '@/data/fill-in-blank-pairs'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ before: string; after: string }>
}

interface DatamuseWord {
  word: string
  score: number
  tags?: string[]
  defs?: string[]
}

function posLabel(tags?: string[]): string {
  if (!tags) return ''
  const map: Record<string, string> = { n: 'noun', v: 'verb', adj: 'adj', adv: 'adv' }
  const pos = tags.find((t) => Object.keys(map).includes(t))
  return pos ? map[pos] : ''
}

function firstDef(defs?: string[]): string {
  if (!defs || defs.length === 0) return ''
  return defs[0].replace(/^\S+\s/, '').split(';')[0].trim()
}

async function fetchBga(word: string): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?rel_bga=${encodeURIComponent(word)}&md=pd&max=100`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function fetchBgb(word: string): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?rel_bgb=${encodeURIComponent(word)}&md=pd&max=100`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function fetchCandidates(before: string, after: string): Promise<DatamuseWord[]> {
  const isBefore = before !== 'any'
  const isAfter = after !== 'any'

  if (!isBefore && !isAfter) return []

  // Single-sided: just return that direction's results
  if (!isBefore) return (await fetchBgb(after)).filter(w => /^[a-z'-]+$/.test(w.word)).slice(0, 30)
  if (!isAfter) return (await fetchBga(before)).filter(w => /^[a-z'-]+$/.test(w.word)).slice(0, 30)

  // Both sides: fetch in parallel then intersect
  const [bgaResults, bgbResults] = await Promise.all([fetchBga(before), fetchBgb(after)])

  const bgbMap = new Map(bgbResults.map((w) => [w.word, w]))

  const intersection = bgaResults
    .filter((w) => /^[a-z'-]+$/.test(w.word) && bgbMap.has(w.word))
    .map((w) => {
      const bgbWord = bgbMap.get(w.word)!
      return {
        ...bgbWord, // prefer bgb defs/tags (words before "after" context)
        score: w.score + bgbWord.score,
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)

  return intersection
}

function buildTitle(before: string, after: string): string {
  if (before === 'any') return `Words that come before "${after}"`
  if (after === 'any') return `Words that follow "${before}"`
  return `"${before} ___ ${after}" — Fill in the Blank`
}

function buildDescription(before: string, after: string): string {
  if (before === 'any') return `Find words that naturally come before "${after}" in English text.`
  if (after === 'any') return `Find words that naturally follow "${before}" in English text.`
  return `Find words that fit between "${before}" and "${after}". Discover what naturally goes in the blank — great for writers, crossword solvers, and ESL learners.`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { before: rawBefore, after: rawAfter } = await params
  const before = decodeURIComponent(rawBefore).toLowerCase()
  const after = decodeURIComponent(rawAfter).toLowerCase()

  const title = buildTitle(before, after)
  const description = buildDescription(before, after)
  const canonical =
    before === 'any'
      ? `https://nagritranslate.com/fill-in-the-blank/any/${after}`
      : after === 'any'
      ? `https://nagritranslate.com/fill-in-the-blank/${before}/any`
      : `https://nagritranslate.com/fill-in-the-blank/${before}/${after}`

  return {
    title,
    description,
    keywords: [
      before !== 'any' ? `words after ${before}` : '',
      after !== 'any' ? `words before ${after}` : '',
      before !== 'any' && after !== 'any' ? `${before} blank ${after}` : '',
      'fill in the blank',
      'word that fits between',
      'word context finder',
      'crossword helper',
    ].filter(Boolean),
    alternates: { canonical },
    openGraph: { title, description, type: 'website' },
  }
}

export default async function FillInBlankResultPage({ params }: PageProps) {
  const { before: rawBefore, after: rawAfter } = await params
  const before = decodeURIComponent(rawBefore).toLowerCase()
  const after = decodeURIComponent(rawAfter).toLowerCase()

  if (
    (!before || before.length > 60) ||
    (!after || after.length > 60) ||
    (before === 'any' && after === 'any')
  )
    notFound()

  const candidates = await fetchCandidates(before, after)

  // Suggested pairs nearby in the curated list
  const pairIndex = FILL_IN_BLANK_PAIRS.findIndex(
    (p) => p.before === before && p.after === after,
  )
  const nearbyPairs =
    pairIndex >= 0
      ? [
          ...FILL_IN_BLANK_PAIRS.slice(Math.max(0, pairIndex - 3), pairIndex),
          ...FILL_IN_BLANK_PAIRS.slice(pairIndex + 1, pairIndex + 4),
        ]
      : FILL_IN_BLANK_PAIRS.slice(0, 6)

  // Mode labels
  const isLeftOnly = before === 'any'
  const isRightOnly = after === 'any'
  const isBoth = !isLeftOnly && !isRightOnly

  const phraseLabel = isLeftOnly
    ? `___ ${after}`
    : isRightOnly
    ? `${before} ___`
    : `${before} ___ ${after}`

  const breadcrumbLabel = isLeftOnly
    ? `___ ${after}`
    : isRightOnly
    ? `${before} ___`
    : `${before} / ${after}`

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Fill in the Blank', path: '/fill-in-the-blank' },
          { name: breadcrumbLabel, path: `/fill-in-the-blank/${before}/${after}` },
        ]}
      />
      <WebPageSchema
        path={`/fill-in-the-blank/${before}/${after}`}
        name={buildTitle(before, after)}
        description={buildDescription(before, after)}
        type="ItemPage"
      />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/fill-in-the-blank" className="hover:text-foreground transition-colors">
            Fill in the Blank
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium font-mono">{phraseLabel}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Puzzle className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
              {isLeftOnly ? (
                <><span className="text-muted-foreground">___</span> {after}</>
              ) : isRightOnly ? (
                <>{before} <span className="text-muted-foreground">___</span></>
              ) : (
                <>{before} <span className="text-muted-foreground">___</span> {after}</>
              )}
            </h1>
          </div>
          <p className="text-muted-foreground ml-12">
            {candidates.length > 0
              ? `${candidates.length} word${candidates.length !== 1 ? 's' : ''} found that fit${candidates.length === 1 ? 's' : ''} in the blank`
              : 'No matching words found'}
            {isBoth && (
              <span className="ml-2 text-xs">
                · {before} <span className="font-bold text-foreground">[word]</span> {after}
              </span>
            )}
          </p>
        </div>

        {/* Search form (pre-filled) */}
        <div className="mb-8">
          <FillInBlankSearch
            initialBefore={before}
            initialAfter={after}
          />
        </div>

        {/* Results */}
        {candidates.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              {isBoth ? 'Words that fit in the blank' : isRightOnly ? `Words that follow "${before}"` : `Words that come before "${after}"`}
            </h2>
            <div className="space-y-2">
              {candidates.map((w) => {
                const pos = posLabel(w.tags)
                const def = firstDef(w.defs)
                return (
                  <div
                    key={w.word}
                    className="group flex items-start gap-4 p-4 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {/* Assembled phrase preview */}
                    <div className="shrink-0 min-w-[160px]">
                      <p className="text-sm font-mono text-muted-foreground group-hover:text-inherit">
                        {isLeftOnly ? (
                          <><span className="font-bold text-foreground group-hover:text-inherit">{w.word}</span> {after}</>
                        ) : isRightOnly ? (
                          <>{before} <span className="font-bold text-foreground group-hover:text-inherit">{w.word}</span></>
                        ) : (
                          <>{before} <span className="font-bold text-foreground group-hover:text-inherit">{w.word}</span> {after}</>
                        )}
                      </p>
                    </div>

                    {/* Word info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <Link
                          href={`/dictionary/${w.word}`}
                          className="font-semibold text-base hover:text-primary transition-colors"
                        >
                          {w.word}
                        </Link>
                        {pos && (
                          <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5 group-hover:border-current">
                            {pos}
                          </span>
                        )}
                      </div>
                      {def && (
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                          {def}
                        </p>
                      )}
                    </div>

                    {/* Quick links */}
                    <div className="flex gap-1.5 shrink-0">
                      <Link
                        href={`/synonyms/${w.word}`}
                        className="text-[10px] px-2 py-1 rounded-lg border hover:bg-background transition-colors text-muted-foreground group-hover:text-inherit group-hover:border-current"
                      >
                        synonyms
                      </Link>
                      <Link
                        href={`/word-frequency/${w.word}`}
                        className="text-[10px] px-2 py-1 rounded-lg border hover:bg-background transition-colors text-muted-foreground group-hover:text-inherit group-hover:border-current"
                      >
                        frequency
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ) : (
          <section className="mb-8">
            <div className="py-10 text-center text-muted-foreground border rounded-2xl bg-muted/10">
              <p className="mb-2">No words found for <span className="font-mono font-medium">{phraseLabel}</span>.</p>
              <p className="text-sm">Try different words — common, everyday words work best.</p>
            </div>
          </section>
        )}

        {/* Translate */}
        {!isLeftOnly && !isRightOnly && <TranslateWordSection word={before} />}

        {/* Cross-links */}
        {isBoth && (
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: `"${before}" →`, desc: 'Synonyms', href: `/synonyms/${before}`, primary: false },
              { label: `"${after}" →`, desc: 'Synonyms', href: `/synonyms/${after}`, primary: false },
              { label: 'Dictionary', desc: `Define "${before}"`, href: `/dictionary/${before}`, primary: true },
            ].map(({ label, desc, href, primary }) => (
              <div key={href} className="p-4 border rounded-2xl flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <Link
                  href={href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                    primary
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border hover:bg-muted'
                  }`}
                >
                  Open <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* More pairs */}
        {nearbyPairs.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Try more phrases
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyPairs.map((pair, i) => (
                <Link
                  key={i}
                  href={`/fill-in-the-blank/${pair.before}/${pair.after}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors font-mono"
                >
                  {pair.hint} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/fill-in-the-blank"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
              >
                All phrases <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
