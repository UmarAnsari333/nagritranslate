import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, FileText, Feather, GraduationCap, BookOpen, Languages } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { VocabularyGraderTool } from '@/components/tools/vocabulary-grader-tool'
import { LEGEND } from '@/lib/vocabulary-rarity'

export const metadata: Metadata = {
  title: 'Vocabulary Grader — Check Word Difficulty & Rarity in Any Text',
  description:
    'Paste any text and instantly see how common or rare each word is. Uncommon, Rare, and Very Rare words are color-highlighted so you can analyze vocabulary difficulty, improve your writing, and study advanced words. Free vocabulary checker.',
  keywords: [
    'vocabulary grader',
    'vocabulary checker',
    'text vocabulary analyzer',
    'word difficulty checker',
    'check vocabulary level',
    'rare words in text',
    'uncommon words checker',
    'text complexity checker',
    'vocabulary level checker',
    'word frequency checker',
    'writing vocabulary analyzer',
    'ESL vocabulary checker',
    'advanced vocabulary finder',
    'vocabulary difficulty tool',
    'check reading level vocabulary',
    'word rarity checker',
  ],
  alternates: { canonical: 'https://nagritranslate.com/vocabulary-grader' },
  openGraph: {
    title: 'Vocabulary Grader — Check Word Difficulty & Rarity in Any Text',
    description: 'Color-code any text by word rarity — from Very Common to Very Rare. Free vocabulary difficulty checker for writers, students, and ESL learners.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    q: 'What is a Vocabulary Grader?',
    a: 'A Vocabulary Grader analyzes a piece of text and classifies each word by how common or rare it is in the English language. Words are labeled from Very Common to Very Rare based on how frequently they appear per million words in a large corpus of books and articles. Uncommon, Rare, and Very Rare words are color-highlighted so they stand out immediately.',
  },
  {
    q: 'How does the vocabulary grader work?',
    a: 'Each unique word in your text is looked up in a frequency database built from millions of English texts (Google Books Ngrams via the Datamuse API). The word is assigned a frequency score — the number of times it appears per million words. That score maps to one of six rarity levels: Very Common (≥100), Common (≥10), Everyday (≥1), Uncommon (≥0.1), Rare (≥0.01), and Very Rare (<0.01).',
  },
  {
    q: 'What do the rarity levels mean?',
    a: 'Very Common words (≥100 per million) include words like "the", "is", "have". Common words (≥10) include everyday words most people use daily. Everyday words (≥1) appear regularly in writing but are not the most basic. Uncommon words (≥0.1) are known by educated speakers but not used constantly. Rare words (≥0.01) appear occasionally in literary or technical writing. Very Rare words (<0.01) are archaic, highly technical, or extremely literary.',
  },
  {
    q: 'What percentage of uncommon words is normal for good writing?',
    a: 'For everyday writing such as news articles and blog posts, fewer than 10% of unique words are typically Uncommon or rarer. Literary fiction and academic writing often sit between 15–30%. Poetry and highly stylized prose can reach 30–50%. If your text scores above 30% uncommon, it may be harder to read for a general audience.',
  },
  {
    q: 'How can I use this tool to improve my writing?',
    a: 'Use the Vocabulary Grader to identify words that might confuse a general audience (Rare and Very Rare). Click any highlighted word to see its frequency data and find simpler synonyms. For academic or creative writing, use it to ensure you have enough advanced vocabulary — aim for 10–25% uncommon words depending on your audience.',
  },
  {
    q: 'Can I use this to check the reading level of my text?',
    a: 'Yes. Vocabulary difficulty is a major component of readability. A high proportion of Uncommon and Rare words generally indicates a higher reading level. Pair the vocabulary score with sentence length to get a good sense of overall text complexity.',
  },
  {
    q: 'Is this useful for ESL learners?',
    a: 'Absolutely. ESL learners can paste passages they are studying and instantly see which words are common everyday words versus advanced vocabulary. Click any highlighted word to see its definition and frequency rank. This helps prioritize which new words are most worth learning.',
  },
  {
    q: 'What is word frequency?',
    a: 'Word frequency is the number of times a word appears per million words in a large reference corpus. "The" appears roughly 60,000 times per million words. A word like "ephemeral" appears only about 2 times per million — making it Rare. Frequency data is drawn from Google Books Ngrams, one of the largest corpora of written English.',
  },
]

const USE_CASES = [
  { icon: Feather,      label: 'Writers',          desc: 'Spot overused simple words and find stronger alternatives.' },
  { icon: GraduationCap,label: 'Students & Essays', desc: 'Check vocabulary range before submitting academic work.' },
  { icon: BookOpen,     label: 'ESL Learners',      desc: 'Identify which words in a passage are advanced vocabulary.' },
  { icon: Languages,    label: 'Editors',           desc: 'Quickly flag rare words that may confuse a general audience.' },
]

const RELATED_TOOLS = [
  { label: 'Word Frequency', desc: 'Deep-dive any single word',   href: '/word-frequency' },
  { label: 'Synonyms',       desc: 'Find simpler alternatives',   href: '/synonyms' },
  { label: 'Dictionary',     desc: 'Full definitions & examples', href: '/dictionary' },
  { label: 'Adjectives For', desc: 'Descriptive words for nouns', href: '/adjectives-for' },
  { label: 'Collocations',   desc: 'Words that go together',      href: '/collocations' },
]

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vocabulary Grader',
  url: 'https://nagritranslate.com/vocabulary-grader',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Paste any text and instantly see how common or rare each word is, with color-coded rarity levels from Very Common to Very Rare.',
}

export default function VocabularyGraderPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Vocabulary Grader', path: '/vocabulary-grader' },
      ]} />
      <WebPageSchema
        path="/vocabulary-grader"
        name="Vocabulary Grader — Check Word Difficulty & Rarity in Any Text"
        description="Color-code any text by word rarity. Free vocabulary difficulty checker for writers, students, and ESL learners."
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
          <span className="text-foreground font-medium">Vocabulary Grader</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Vocabulary Grader</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Paste any text and instantly see how common or rare each word is.
            Uncommon, Rare, and Very Rare words are color-highlighted — click any to explore its full frequency data.
          </p>
        </div>
      </section>

      {/* Interactive tool */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <VocabularyGraderTool />
      </section>

      {/* Rarity scale — always visible for crawlers */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-2">Rarity scale</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Every word is classified into one of six levels based on how often it appears per million words of English text.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: 'Very Common', threshold: '≥ 100 per million', example: 'the, is, have, said', lg: LEGEND[0] },
            { label: 'Common',      threshold: '≥ 10 per million',  example: 'walk, happy, strong',   lg: LEGEND[1] },
            { label: 'Everyday',    threshold: '≥ 1 per million',   example: 'radiant, gentle, swift', lg: LEGEND[2] },
            { label: 'Uncommon',    threshold: '≥ 0.1 per million', example: 'verdant, somber, fervent', lg: LEGEND[3] },
            { label: 'Rare',        threshold: '≥ 0.01 per million',example: 'ephemeral, melancholy', lg: LEGEND[4] },
            { label: 'Very Rare',   threshold: '< 0.01 per million',example: 'ineffable, bittersweet', lg: LEGEND[5] },
          ].map(({ label, threshold, example, lg }) => (
            <div key={label} className={`p-4 rounded-2xl border ${lg.bg}`}>
              <span className={`text-sm font-bold ${lg.text}`}>{label}</span>
              <p className="text-xs text-muted-foreground mt-1">{threshold}</p>
              <p className="text-xs text-muted-foreground mt-0.5 italic">{example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: '1', title: 'Paste your text', body: 'Any paragraph, essay, story, or article — the tool handles up to 200 unique words per analysis.' },
            { n: '2', title: 'Words are looked up', body: 'Each unique word is checked against a frequency database built from millions of English books and articles.' },
            { n: '3', title: 'Rare words are highlighted', body: 'Everyday, Uncommon, Rare, and Very Rare words appear in color. Click any highlighted word for full frequency details.' },
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
        <h2 className="text-xl font-bold mb-5">Who uses the Vocabulary Grader?</h2>
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

      {/* About the data */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-base font-bold mb-2">About the frequency data</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Word frequency scores come from the <strong>Datamuse API</strong>, which is based on Google Books Ngrams — a corpus of billions of words from books published in English. Scores represent how many times a word appears per million words of text. Very common words like <em>&ldquo;the&rdquo;</em> score around 60,000 per million; rare literary words like <em>&ldquo;ephemeral&rdquo;</em> score around 2 per million. Proper nouns, brand names, and very new coinages may not appear in the database and will be left ungraded.
          </p>
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
