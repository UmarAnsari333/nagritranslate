import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Volume2, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { HOMOPHONE_WORDS } from '@/data/homophone-words'
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

async function fetchHomophones(word: string): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?rel_hom=${encodeURIComponent(word)}&md=pd&max=20`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function fetchDefinition(word: string): Promise<string[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=pd&max=1`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    const data: DatamuseWord[] = await res.json()
    return data[0]?.defs ?? []
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
    title: `Homophones of "${cap}" — Words That Sound Like ${cap}`,
    description: `Find all homophones of "${decoded}" — words that sound the same but have different spellings and meanings. Learn how to use ${decoded} correctly.`,
    keywords: [
      `homophones of ${decoded}`,
      `words that sound like ${decoded}`,
      `${decoded} homophone`,
      `${decoded} sounds like`,
      `${decoded} spelling`,
      `${decoded} vs`,
      `${decoded} meaning`,
    ],
    alternates: { canonical: `https://nagritranslate.com/homophones/${decoded}` },
    openGraph: {
      title: `Homophones of "${cap}" — Words That Sound Like ${cap}`,
      description: `Words that sound the same as "${decoded}" but have different meanings and spellings.`,
      type: 'website',
    },
  }
}

export default async function HomophonesWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [homophones, selfDefs] = await Promise.all([
    fetchHomophones(decoded),
    fetchDefinition(decoded),
  ])

  const wordIndex = HOMOPHONE_WORDS.indexOf(decoded)
  const nearby = wordIndex >= 0
    ? [
        ...HOMOPHONE_WORDS.slice(Math.max(0, wordIndex - 4), wordIndex),
        ...HOMOPHONE_WORDS.slice(wordIndex + 1, wordIndex + 5),
      ]
    : HOMOPHONE_WORDS.slice(0, 8)

  const allWords = [
    { word: decoded, defs: selfDefs, isSelf: true },
    ...homophones.map((h) => ({ ...h, isSelf: false })),
  ]

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Homophones', path: '/homophones' },
        { name: cap, path: `/homophones/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/homophones/${decoded}`}
        name={`Homophones of "${cap}" — Words That Sound Like ${cap}`}
        description={`Words that sound the same as "${decoded}" but have different meanings and spellings.`}
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
          <Link href="/homophones" className="hover:text-foreground transition-colors">Homophones</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Volume2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Homophones of &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {homophones.length > 0
              ? `${homophones.length} word${homophones.length !== 1 ? 's' : ''} that sound${homophones.length === 1 ? 's' : ''} like "${decoded}" but mean something different`
              : `No homophones found for "${decoded}" — it may be unique in pronunciation.`}
          </p>
        </div>

        {/* Word comparison cards */}
        {allWords.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">
              Sound-alike words{' '}
              <span className="text-sm text-muted-foreground font-normal">(same pronunciation, different meaning)</span>
            </h2>
            <div className="space-y-3">
              {allWords.map(({ word: w, defs, isSelf }, i) => {
                const parsedDefs = (defs ?? []).slice(0, 3).map(parseDef)
                return (
                  <div
                    key={`${i}-${w}`}
                    className={`p-4 rounded-2xl border ${isSelf ? 'bg-primary/5 border-primary/20' : 'bg-muted/10'}`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">{w}</span>
                        {isSelf && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                            searched
                          </span>
                        )}
                      </div>
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
                        href={`/adjectives-for/${w}`}
                        className="text-xs px-2.5 py-1 rounded-lg border hover:bg-muted transition-colors"
                      >
                        Adjectives for
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {homophones.length === 0 && (
          <div className="py-10 text-center text-muted-foreground mb-8">
            <p className="mb-2">No homophones found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try words like &ldquo;there&rdquo;, &ldquo;bear&rdquo;, &ldquo;right&rdquo;, or &ldquo;sea&rdquo;.</p>
          </div>
        )}

        {/* Translate word */}
        <TranslateWordSection word={decoded} />

        {/* Cross-links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border rounded-2xl flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Dictionary</p>
              <p className="text-xs text-muted-foreground">Full definition</p>
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
              <p className="text-sm font-medium">Collocations</p>
              <p className="text-xs text-muted-foreground">Words that go with it</p>
            </div>
            <Link
              href={`/collocations/${decoded}`}
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
                  href={`/homophones/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/homophones"
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
