import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, BarChart2, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { FREQUENCY_WORDS } from '@/data/frequency-words'
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

function getFreq(tags?: string[]): number | null {
  if (!tags) return null
  const tag = tags.find((t) => t.startsWith('f:'))
  return tag ? parseFloat(tag.slice(2)) : null
}

function getPos(tags?: string[]): string {
  if (!tags) return ''
  const map: Record<string, string> = { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb' }
  const pos = tags.find((t) => Object.keys(map).includes(t))
  return pos ? map[pos] : ''
}

function formatOccurrence(freq: number): string {
  const oneIn = 1_000_000 / freq
  if (oneIn < 1_000) return `1 in ${Math.round(oneIn).toLocaleString()}`
  if (oneIn < 1_000_000) return `1 in ${Math.round(oneIn / 1000).toLocaleString()}K`
  return `1 in ${(oneIn / 1_000_000).toFixed(1)}M`
}

interface Rarity {
  label: string
  bgColor: string
  textColor: string
  barColor: string
  description: string
  percent: number
}

function getRarity(freq: number): Rarity {
  // log scale: 0.001 → 0%, 10000 → 100%
  const percent = Math.min(100, Math.max(0, ((Math.log10(Math.max(freq, 0.001)) + 3) / 7) * 100))

  if (freq >= 100)
    return {
      label: 'Very Common',
      bgColor: 'bg-green-50 dark:bg-green-950/40',
      textColor: 'text-green-700 dark:text-green-400',
      barColor: 'bg-green-500',
      description: 'Used constantly in everyday language',
      percent,
    }
  if (freq >= 10)
    return {
      label: 'Common',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40',
      textColor: 'text-emerald-700 dark:text-emerald-400',
      barColor: 'bg-emerald-500',
      description: 'Frequently used in everyday speech and writing',
      percent,
    }
  if (freq >= 1)
    return {
      label: 'Everyday',
      bgColor: 'bg-sky-50 dark:bg-sky-950/40',
      textColor: 'text-sky-700 dark:text-sky-400',
      barColor: 'bg-sky-500',
      description: 'Appears regularly in text and conversation',
      percent,
    }
  if (freq >= 0.1)
    return {
      label: 'Uncommon',
      bgColor: 'bg-amber-50 dark:bg-amber-950/40',
      textColor: 'text-amber-700 dark:text-amber-400',
      barColor: 'bg-amber-500',
      description: 'Used occasionally, known by most educated speakers',
      percent,
    }
  if (freq >= 0.01)
    return {
      label: 'Rare',
      bgColor: 'bg-orange-50 dark:bg-orange-950/40',
      textColor: 'text-orange-700 dark:text-orange-400',
      barColor: 'bg-orange-500',
      description: 'Seldom used in everyday language',
      percent,
    }
  return {
    label: 'Very Rare',
    bgColor: 'bg-red-50 dark:bg-red-950/40',
    textColor: 'text-red-700 dark:text-red-400',
    barColor: 'bg-red-500',
    description: 'Extremely rare or archaic',
    percent,
  }
}

async function fetchWordData(word: string): Promise<DatamuseWord | null> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?qe=${encodeURIComponent(word)}&md=fpd`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return null
    const data: DatamuseWord[] = await res.json()
    return data[0] ?? null
  } catch {
    return null
  }
}

async function fetchRelated(param: string, word: string, max = 25): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?${param}=${encodeURIComponent(word)}&md=fp&max=${max}`,
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
    title: `Word Frequency of "${cap}" — How Common Is ${cap}?`,
    description: `Check how common or rare "${decoded}" is in English. See its frequency score, rarity level, and compare with similar words.`,
    keywords: [
      `word frequency ${decoded}`,
      `how common is ${decoded}`,
      `how rare is ${decoded}`,
      `${decoded} frequency`,
      `${decoded} rarity`,
      `word frequency checker`,
      `${decoded} occurrences`,
    ],
    alternates: { canonical: `https://nagritranslate.com/word-frequency/${decoded}` },
    openGraph: {
      title: `Word Frequency of "${cap}" — How Common Is ${cap}?`,
      description: `Frequency score, rarity level and usage stats for "${decoded}". Compare with similar words.`,
      type: 'website',
    },
  }
}

export default async function WordFrequencyWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [wordData, synonyms, similar] = await Promise.all([
    fetchWordData(decoded),
    fetchRelated('rel_syn', decoded, 25),
    fetchRelated('ml', decoded, 15),
  ])

  const freq = wordData ? getFreq(wordData.tags) : null
  const pos = wordData ? getPos(wordData.tags) : ''
  const def = wordData?.defs?.[0]?.replace(/^\S+\s/, '').split(';')[0].trim() ?? ''
  const rarity = freq !== null ? getRarity(freq) : null

  // Deduplicated comparison set with frequency data
  const seen = new Set([decoded])
  const comparisonWords = [...synonyms, ...similar]
    .filter((w) => {
      if (seen.has(w.word)) return false
      seen.add(w.word)
      return getFreq(w.tags) !== null
    })
    .sort((a, b) => (getFreq(b.tags) ?? 0) - (getFreq(a.tags) ?? 0))
    .slice(0, 15)

  const wordIndex = FREQUENCY_WORDS.indexOf(decoded)
  const nearby =
    wordIndex >= 0
      ? [
          ...FREQUENCY_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
          ...FREQUENCY_WORDS.slice(wordIndex + 1, wordIndex + 5),
        ]
      : FREQUENCY_WORDS.slice(0, 8)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Word Frequency', path: '/word-frequency' },
          { name: cap, path: `/word-frequency/${decoded}` },
        ]}
      />
      <WebPageSchema
        path={`/word-frequency/${decoded}`}
        name={`Word Frequency of "${cap}" — How Common Is ${cap}?`}
        description={`Frequency score, rarity level and usage stats for "${decoded}".`}
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
          <Link href="/word-frequency" className="hover:text-foreground transition-colors">
            Word Frequency
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BarChart2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">&ldquo;{decoded}&rdquo;</h1>
            {pos && (
              <span className="text-sm text-muted-foreground border rounded-full px-2.5 py-0.5 shrink-0">
                {pos}
              </span>
            )}
          </div>
          {def && <p className="text-muted-foreground ml-12 text-sm leading-relaxed">{def}</p>}
        </div>

        {/* Frequency meter */}
        {freq !== null && rarity ? (
          <section className="mb-6">
            <div className={`p-6 rounded-2xl border ${rarity.bgColor}`}>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Rarity Level</p>
                  <span className={`text-2xl font-bold ${rarity.textColor}`}>{rarity.label}</span>
                  <p className="text-sm text-muted-foreground mt-1">{rarity.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Score</p>
                  <span className="text-2xl font-bold tabular-nums">
                    {freq < 0.01 ? freq.toFixed(4) : freq < 1 ? freq.toFixed(3) : freq.toFixed(1)}
                  </span>
                  <p className="text-xs text-muted-foreground">per million words</p>
                </div>
              </div>

              {/* Spectrum bar */}
              <div className="relative h-4 rounded-full overflow-hidden mb-2 flex">
                <div className="flex-1 bg-red-200 dark:bg-red-900/60" />
                <div className="flex-1 bg-orange-200 dark:bg-orange-900/60" />
                <div className="flex-1 bg-amber-200 dark:bg-amber-900/60" />
                <div className="flex-1 bg-sky-200 dark:bg-sky-900/60" />
                <div className="flex-1 bg-emerald-200 dark:bg-emerald-900/60" />
                <div className="flex-1 bg-green-200 dark:bg-green-900/60" />
                <div
                  className="absolute top-1/2 w-4 h-4 rounded-full bg-foreground shadow-md border-2 border-background"
                  style={{ left: `${rarity.percent}%`, transform: 'translate(-50%, -50%)' }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Very Rare</span>
                <span>Rare</span>
                <span>Uncommon</span>
                <span>Everyday</span>
                <span>Common</span>
                <span>Very Common</span>
              </div>
            </div>
          </section>
        ) : (
          <section className="mb-6">
            <div className="p-6 rounded-2xl border bg-muted/30 text-center">
              <p className="text-muted-foreground text-sm">
                Frequency data not available for &ldquo;{decoded}&rdquo;. This word may be a proper noun,
                very new coinage, or too rare to appear in the corpus.
              </p>
            </div>
          </section>
        )}

        {/* Stats cards */}
        {freq !== null && rarity && (
          <section className="mb-8">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 border rounded-2xl bg-muted/10 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2">
                  Per million words
                </p>
                <p className="text-xl font-bold tabular-nums">
                  {freq < 0.01
                    ? freq.toFixed(4)
                    : freq < 1
                    ? freq.toFixed(3)
                    : freq.toFixed(1)}
                </p>
              </div>
              <div className="p-4 border rounded-2xl bg-muted/10 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2">
                  Roughly appears
                </p>
                <p className="text-lg font-bold tabular-nums leading-tight">
                  {formatOccurrence(freq)}
                </p>
                <p className="text-[10px] text-muted-foreground">words</p>
              </div>
              <div className="p-4 border rounded-2xl bg-muted/10 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-2">
                  Rarity level
                </p>
                <p className={`text-lg font-bold ${rarity.textColor}`}>{rarity.label}</p>
              </div>
            </div>
          </section>
        )}

        {/* Comparison table */}
        {comparisonWords.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-1">Compare with similar words</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Synonyms and related words ranked from most to least common.
            </p>
            <div className="border rounded-2xl overflow-hidden">
              {/* Searched word row */}
              {freq !== null && rarity && (
                <div className="flex items-center gap-3 px-4 py-3 bg-primary/5 border-b">
                  <div className="w-32 shrink-0">
                    <span className="font-bold text-sm">{decoded}</span>
                    <span className="ml-1.5 text-[10px] text-primary font-medium">← this word</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${rarity.barColor}`}
                        style={{ width: `${rarity.percent}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-28 text-right shrink-0">
                    <span className="text-sm tabular-nums font-semibold">
                      {freq.toFixed(freq < 1 ? 3 : 1)}
                    </span>
                    <span className={`ml-1.5 text-[10px] font-medium ${rarity.textColor}`}>
                      {rarity.label}
                    </span>
                  </div>
                </div>
              )}
              {/* Related words */}
              {comparisonWords.map((w) => {
                const wFreq = getFreq(w.tags)!
                const wRarity = getRarity(wFreq)
                return (
                  <div
                    key={w.word}
                    className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0 hover:bg-muted/30 transition-colors group"
                  >
                    <div className="w-32 shrink-0">
                      <Link
                        href={`/word-frequency/${w.word}`}
                        className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {w.word}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary/50"
                          style={{ width: `${wRarity.percent}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-28 text-right shrink-0">
                      <span className="text-sm tabular-nums">
                        {wFreq.toFixed(wFreq < 1 ? 3 : 1)}
                      </span>
                      <span className={`ml-1.5 text-[10px] font-medium ${wRarity.textColor}`}>
                        {wRarity.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Source: Google Books Ngrams · occurrences per million words
            </p>
          </section>
        )}

        {/* Translate */}
        <TranslateWordSection word={decoded} />

        {/* Cross-links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Dictionary', desc: 'Definition & examples', href: `/dictionary/${decoded}`, primary: true },
            { label: 'Synonyms', desc: 'Similar meaning words', href: `/synonyms/${decoded}` },
            { label: 'Antonyms', desc: 'Opposite words', href: `/antonyms/${decoded}` },
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

        {/* Explore more */}
        {nearby.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Explore more words
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((w, i) => (
                <Link
                  key={`${i}-${w}`}
                  href={`/word-frequency/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/word-frequency"
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
