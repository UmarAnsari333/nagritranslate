import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { TOPIC_WORDS } from '@/data/topic-words'
import { TranslateWordSection } from '@/components/translate-word-section'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ topic: string }>
}

interface DatamuseWord {
  word: string
  score: number
  tags?: string[]
}

async function fetchRelated(topic: string): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?topics=${encodeURIComponent(topic)}&md=p&max=100`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function fetchMeansLike(topic: string): Promise<DatamuseWord[]> {
  try {
    const res = await fetch(
      `https://api.datamuse.com/words?ml=${encodeURIComponent(topic)}&md=p&max=20`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

function getPos(tags?: string[]): string {
  if (!tags) return 'other'
  if (tags.includes('n')) return 'noun'
  if (tags.includes('adj')) return 'adjective'
  if (tags.includes('v')) return 'verb'
  if (tags.includes('adv')) return 'adverb'
  return 'other'
}

const POS_ORDER = ['noun', 'adjective', 'verb', 'adverb', 'other']
const POS_COLORS: Record<string, string> = {
  noun:      'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900',
  adjective: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900',
  verb:      'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900',
  adverb:    'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900',
  other:     'bg-muted/20',
}
const POS_BADGE: Record<string, string> = {
  noun:      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  adjective: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
  verb:      'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  adverb:    'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
  other:     'bg-muted text-muted-foreground',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params
  const decoded = decodeURIComponent(topic).toLowerCase()
  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  return {
    title: `Words Related to "${cap}" — Vocabulary for ${cap}`,
    description: `Explore words related to "${decoded}" — nouns, adjectives, verbs, and more. A complete word list for the topic of ${decoded}, perfect for writers, poets, and students.`,
    keywords: [
      `words related to ${decoded}`,
      `${decoded} vocabulary`,
      `words about ${decoded}`,
      `${decoded} words`,
      `${decoded} word list`,
      `${decoded} related words`,
      `words for ${decoded}`,
      `${decoded} synonyms`,
    ],
    alternates: { canonical: `https://nagritranslate.com/related-words/${decoded}` },
    openGraph: {
      title: `Words Related to "${cap}" — Vocabulary for ${cap}`,
      description: `Complete word list for the topic "${decoded}" — nouns, adjectives, verbs and more.`,
      type: 'website',
    },
  }
}

export default async function RelatedWordsTopicPage({ params }: PageProps) {
  const { topic } = await params
  const decoded = decodeURIComponent(topic).toLowerCase()
  if (!decoded || decoded.length > 60) notFound()

  const cap = decoded.charAt(0).toUpperCase() + decoded.slice(1)

  const [related, meansLike] = await Promise.all([
    fetchRelated(decoded),
    fetchMeansLike(decoded),
  ])

  // Group by POS
  const grouped: Record<string, DatamuseWord[]> = {}
  for (const w of related) {
    const pos = getPos(w.tags)
    if (!grouped[pos]) grouped[pos] = []
    grouped[pos].push(w)
  }

  // Deduplicate meansLike from related
  const relatedSet = new Set(related.map((w, i) => w.word))
  const filteredMeansLike = meansLike.filter((w) => !relatedSet.has(w.word))

  const topicIndex = TOPIC_WORDS.indexOf(decoded)
  const nearby = [
    ...TOPIC_WORDS.slice(Math.max(0, topicIndex - 4), topicIndex),
    ...TOPIC_WORDS.slice(topicIndex + 1, topicIndex + 5),
  ].filter(Boolean)

  const posGroups = POS_ORDER.filter((pos) => grouped[pos]?.length > 0)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Related Words', path: '/related-words' },
        { name: cap, path: `/related-words/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/related-words/${decoded}`}
        name={`Words Related to "${cap}" — Vocabulary for ${cap}`}
        description={`Complete word list for the topic "${decoded}".`}
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
          <Link href="/related-words" className="hover:text-foreground transition-colors">Related Words</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{cap}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Words related to &ldquo;{decoded}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground">
            {related.length > 0
              ? `${related.length} word${related.length !== 1 ? 's' : ''} associated with the topic of ${decoded}`
              : `No related words found for "${decoded}".`}
          </p>
        </div>

        {/* Words grouped by POS */}
        {posGroups.length > 0 ? (
          <div className="space-y-6 mb-8">
            {posGroups.map((pos) => (
              <section key={pos}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${POS_BADGE[pos]}`}>
                    {pos}s
                  </span>
                  <span className="text-xs text-muted-foreground">{grouped[pos].length} words</span>
                </div>
                <div className={`p-4 rounded-2xl border ${POS_COLORS[pos]}`}>
                  <div className="flex flex-wrap gap-2">
                    {grouped[pos].map((w, i) => (
                      <Link
                        key={w.word}
                        href={`/related-words/${w.word}`}
                        className="group inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                      >
                        {w.word}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-muted-foreground mb-8">
            <p className="mb-2">No related words found for &ldquo;{decoded}&rdquo;.</p>
            <p className="text-sm">Try topics like &ldquo;ocean&rdquo;, &ldquo;love&rdquo;, &ldquo;war&rdquo;, or &ldquo;forest&rdquo;.</p>
          </div>
        )}

        {/* Means-like — secondary */}
        {filteredMeansLike.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">
              Words that mean &ldquo;{decoded}&rdquo;{' '}
              <span className="text-sm text-muted-foreground font-normal">(synonyms)</span>
            </h2>
            <div className="p-4 bg-muted/20 rounded-2xl border">
              <div className="flex flex-wrap gap-2">
                {filteredMeansLike.map((w, i) => (
                  <Link
                    key={w.word}
                    href={`/related-words/${w.word}`}
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

        {/* Explore nearby topics */}
        {nearby.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Explore more topics</h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((w, i) => (
                <Link
                  key={`${i}-${w}`}
                  href={`/related-words/${w}`}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {w} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
              <Link
                href="/related-words"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
              >
                All topics <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
