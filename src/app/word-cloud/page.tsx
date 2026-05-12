import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, Cloud, PenLine, GraduationCap, BookOpen, BarChart2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { WordCloudTool } from '@/components/tools/word-cloud-tool'

export const metadata: Metadata = {
  title: 'Word Cloud Generator — Create Visual Word Clouds Free',
  description:
    'Paste any text and instantly generate a beautiful word cloud. Words sized by frequency, color-coded by theme, and downloadable as SVG. Free word cloud maker — no sign-up required.',
  keywords: [
    'word cloud generator',
    'word cloud maker',
    'free word cloud',
    'create word cloud',
    'word cloud from text',
    'word frequency cloud',
    'text word cloud',
    'word cloud online',
    'visual word cloud',
    'tag cloud generator',
    'word cloud creator',
    'wordle word cloud',
    'text visualization',
    'word frequency visualizer',
    'paste text word cloud',
  ],
  alternates: { canonical: 'https://nagritranslate.com/word-cloud' },
  openGraph: {
    title: 'Word Cloud Generator — Paste Text, Get a Visual Word Cloud',
    description: 'Turn any text into a beautiful word cloud in seconds. Words sized by frequency. Free, no sign-up, downloadable.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    q: 'How does the word cloud generator work?',
    a: 'Paste any text and click Generate. The tool counts how often each meaningful word appears, removes common stop words (like "the", "and", "is"), then renders the remaining words sized proportionally — the more frequent a word, the larger it appears. Results are instant and run entirely in your browser.',
  },
  {
    q: 'What are stop words and why are they removed?',
    a: 'Stop words are extremely common function words — "the", "a", "and", "is", "in" — that appear in almost every text and carry little meaning on their own. Removing them reveals the words that actually characterize your text. The generator uses a built-in list of 150+ English stop words.',
  },
  {
    q: 'Can I download the word cloud?',
    a: 'Yes. Click the SVG button to download a scalable vector file you can open in any browser, Figma, Illustrator, or print at any size without losing quality. The SVG preserves the exact layout, colors, and typography of the on-screen cloud.',
  },
  {
    q: 'What color themes are available?',
    a: 'Five themes: Violet (default purple tones), Ocean (blues and teals), Forest (greens), Sunset (warm reds and oranges), and Slate (dark monochrome). Switch themes instantly after generating — the layout stays the same, only colors change.',
  },
  {
    q: 'How many words can I include?',
    a: 'Choose 30, 60, or 100 words. 30 gives a clean cloud focused on the most prominent terms. 60 is the default and balances clarity with detail. 100 includes more nuance but works best with longer texts (500+ words).',
  },
  {
    q: 'What can I use a word cloud for?',
    a: 'Word clouds are used to visualize survey responses, summarize articles or speeches, analyze book chapters, study for exams by highlighting key terms, create visual summaries for presentations, and explore the vocabulary of any text at a glance.',
  },
]

const USE_CASES = [
  { icon: PenLine,       label: 'Writers',       desc: 'See which words dominate your draft.' },
  { icon: GraduationCap, label: 'Students',      desc: 'Visualize key terms from study material.' },
  { icon: BookOpen,      label: 'Educators',     desc: 'Create visual summaries for lessons.' },
  { icon: BarChart2,     label: 'Researchers',   desc: 'Analyze frequency patterns in text.' },
]

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Word Cloud Generator',
  url: 'https://nagritranslate.com/word-cloud',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Paste any text and instantly generate a beautiful word cloud sized by word frequency. Free, browser-based, downloadable as SVG.',
}

const RELATED_TOOLS = [
  { label: 'Vocabulary Grader', desc: 'Grade text by word rarity',     href: '/vocabulary-grader' },
  { label: 'Word Frequency',    desc: 'How common is a word?',          href: '/word-frequency' },
  { label: 'Find the Word',     desc: 'Describe it, we\'ll name it',    href: '/find-the-word' },
  { label: 'Synonyms',          desc: 'Find similar words',             href: '/synonyms' },
  { label: 'Related Words',     desc: 'Words by topic',                 href: '/related-words' },
]

export default function WordCloudPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Word Cloud Generator', path: '/word-cloud' },
      ]} />
      <WebPageSchema
        path="/word-cloud"
        name="Word Cloud Generator — Create Visual Word Clouds Free"
        description="Paste any text and instantly generate a beautiful word cloud sized by frequency. Free, browser-based, downloadable."
        type="WebPage"
      />
      <Navbar />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-4 md:pt-14">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Word Cloud Generator</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Cloud className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Word Cloud Generator</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Paste any text and instantly see its most frequent words as a visual cloud.
            Words sized by frequency, color-coded by theme, downloadable as SVG.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <WordCloudTool />
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: '1', title: 'Paste your text', body: 'Any text works — an article, essay, speech, book chapter, survey results, or social media post. The longer the text, the richer the cloud.' },
            { n: '2', title: 'Frequency analysis', body: 'Stop words are removed and every remaining word is counted. Words appearing more often get a larger size in the cloud.' },
            { n: '3', title: 'Visual cloud', body: 'Words appear sized by frequency with slight rotations for visual variety. Click any word to see its definition. Download as SVG anytime.' },
          ].map(({ n, title, body }) => (
            <div key={n} className="p-5 border rounded-2xl bg-muted/10">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mb-3">{n}</div>
              <p className="font-semibold text-sm mb-1">{title}</p>
              <p className="text-xs text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">Who uses the Word Cloud Generator?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {USE_CASES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="p-4 border rounded-2xl bg-muted/20 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related tools */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Related tools</h2>
        <div className="flex flex-wrap gap-3">
          {RELATED_TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex flex-col px-4 py-3 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors min-w-[130px]"
            >
              <span className="text-sm font-medium">{tool.label}</span>
              <span className="text-xs text-muted-foreground">{tool.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group border rounded-2xl bg-muted/10 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm list-none select-none hover:bg-muted/30 transition-colors">
                {item.q}
                <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground rotate-90 group-open:rotate-270 transition-transform" />
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
