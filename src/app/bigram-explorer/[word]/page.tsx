import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BarChart2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { BigramExplorerTool } from '@/components/tools/bigram-explorer-tool'
import { BIGRAM_WORDS_UNIQUE } from '@/lib/bigram-words'

export const revalidate = 86400

export function generateStaticParams() {
  return BIGRAM_WORDS_UNIQUE.map(word => ({ word }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ word: string }> }
): Promise<Metadata> {
  const { word } = await params
  const w = decodeURIComponent(word).toLowerCase()

  return {
    title: `Words Before & After "${w}" — Bigram Explorer`,
    description: `See which words most commonly appear directly before and after "${w}" in real English text. Corpus-based bigram frequency data for writers, students, and ESL learners.`,
    keywords: [
      `words before ${w}`,
      `words after ${w}`,
      `${w} word pairs`,
      `bigrams for ${w}`,
      `common phrases with ${w}`,
      `${w} collocations`,
      `what comes before ${w}`,
      `what comes after ${w}`,
      `${w} bigram`,
    ],
    alternates: { canonical: `https://nagritranslate.com/bigram-explorer/${encodeURIComponent(w)}` },
    openGraph: {
      title: `Words Before & After "${w}" — Bigram Explorer`,
      description: `Discover the most natural word pairs for "${w}" — corpus-ranked before and after bigrams.`,
      type: 'website',
    },
  }
}

export default async function BigramWordPage(
  { params }: { params: Promise<{ word: string }> }
) {
  const { word } = await params
  const w = decodeURIComponent(word).toLowerCase()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nagritranslate.com' },
      { '@type': 'ListItem', position: 2, name: 'Bigram Explorer', item: 'https://nagritranslate.com/bigram-explorer' },
      { '@type': 'ListItem', position: 3, name: `"${w}" bigrams`, item: `https://nagritranslate.com/bigram-explorer/${encodeURIComponent(w)}` },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Bigram Explorer', path: '/bigram-explorer' },
        { name: `"${w}"`, path: `/bigram-explorer/${encodeURIComponent(w)}` },
      ]} />
      <WebPageSchema
        path={`/bigram-explorer/${encodeURIComponent(w)}`}
        name={`Words Before & After "${w}" — Bigram Explorer`}
        description={`See which words most commonly appear before and after "${w}" in real English text.`}
        type="WebPage"
      />
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 pt-8 pb-4 md:pt-14">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/bigram-explorer" className="hover:text-foreground transition-colors">Bigram Explorer</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">&ldquo;{w}&rdquo;</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BarChart2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bigrams for &ldquo;{w}&rdquo;
            </h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Words that most commonly appear directly <strong>before</strong> and <strong>after</strong> &ldquo;{w}&rdquo; in real English text, ranked by corpus frequency.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <BigramExplorerTool initialWord={w} />
      </section>

      <Footer />
    </div>
  )
}
