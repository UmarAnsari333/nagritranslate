import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, ArrowRight, Wand2, PenLine, BookOpen, GraduationCap, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { FindTheWordTool } from '@/components/tools/find-the-word-tool'

export const metadata: Metadata = {
  title: 'Find the Word — Describe It, We\'ll Name It | Nagri Translate',
  description:
    'Describe what you mean in plain English and instantly find the exact word. Type "the smell of rain on dry earth" and discover words like petrichor. Free word-finder for writers, students, and word lovers.',
  keywords: [
    'find the word',
    'word finder by description',
    'describe a word find it',
    'what is the word for',
    'word from description',
    'find the right word',
    'word search by meaning',
    'find a word by its meaning',
    'word that means',
    'vocabulary finder',
    'perfect word finder',
    'word lookup by definition',
    'what word means',
    'find word from meaning',
    'describe word search',
    'word discovery tool',
  ],
  alternates: { canonical: 'https://nagritranslate.com/find-the-word' },
  openGraph: {
    title: 'Find the Word — Describe It, We\'ll Name It',
    description: 'Type a description, find the exact word. Free AI-powered word-finder for writers, students, and word enthusiasts.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    q: 'How does the "Find the Word" tool work?',
    a: 'You type a description of the concept, feeling, or thing you have in mind — in plain English. The tool uses the Datamuse "means like" API, which searches a large corpus of English text for words semantically related to your description. Results are ranked by how closely they match, and definitions are shown so you can confirm the right fit.',
  },
  {
    q: 'What if I can\'t remember the exact word?',
    a: 'That\'s exactly what this tool is for. Describe the concept as vividly as you can — even using analogies or feelings. For example, type "the bittersweet feeling of a moment you know will end soon" to find words like "poignant", "fleeting", or "ephemeral". The more descriptive your phrase, the better the results.',
  },
  {
    q: 'What kind of descriptions work best?',
    a: 'Concrete sensory descriptions, emotional states, and action-based phrases tend to work best. For example: "walking quietly so others can\'t hear you" → tiptoeing, creeping. Abstract philosophical ideas can sometimes produce fewer results. Try different phrasings if your first attempt doesn\'t return the perfect word.',
  },
  {
    q: 'Can I use this to find obscure or rare words?',
    a: 'Yes. The tool draws from a comprehensive English corpus that includes literary, academic, and technical vocabulary. Searching for "the smell of old books" returns "petrichor", "mustiness", "bibliophilia" — words you\'d be unlikely to recall from memory alone.',
  },
  {
    q: 'How is this different from a thesaurus?',
    a: 'A thesaurus requires you to already know a synonym to look up. "Find the Word" lets you start from scratch — describe a concept you have no word for and discover the word that fits. It\'s ideal for tip-of-the-tongue moments and for finding precise vocabulary during writing.',
  },
  {
    q: 'Is this tool free to use?',
    a: 'Yes, completely free with no sign-up or account required. Searches run directly against the Datamuse API, which is a free public word-relationship API built for writers and developers.',
  },
]

const USE_CASES = [
  { icon: PenLine,      label: 'Writers',       desc: 'Find the precise word that fits your scene or emotion.' },
  { icon: BookOpen,     label: 'Word Lovers',   desc: 'Discover rare and beautiful vocabulary.' },
  { icon: GraduationCap,label: 'Students',      desc: 'Expand vocabulary when you know the meaning but not the word.' },
  { icon: Globe,        label: 'ESL Learners',  desc: 'Learn the English word for concepts you know in your language.' },
]

const EXAMPLES = [
  { phrase: 'the smell of rain on dry earth', words: ['petrichor', 'earthiness'] },
  { phrase: 'walking quietly so others can\'t hear', words: ['tiptoeing', 'sneaking', 'creeping'] },
  { phrase: 'the fear of open spaces', words: ['agoraphobia', 'claustrophobia'] },
  { phrase: 'a small narrow stream', words: ['rivulet', 'brook', 'rill', 'creek'] },
  { phrase: 'copying someone else\'s behavior', words: ['mimicry', 'imitation', 'emulation'] },
]

const RELATED_TOOLS = [
  { label: 'Synonyms',       desc: 'Words with similar meanings',    href: '/synonyms' },
  { label: 'Dictionary',     desc: 'Full definitions & examples',    href: '/dictionary' },
  { label: 'Word Frequency', desc: 'How common is a word?',          href: '/word-frequency' },
  { label: 'Related Words',  desc: 'Topically associated words',     href: '/related-words' },
  { label: 'Vocabulary Grader', desc: 'Grade text by word rarity',   href: '/vocabulary-grader' },
]

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Find the Word — Describe It, We\'ll Name It',
  url: 'https://nagritranslate.com/find-the-word',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Type a description of any concept, feeling, or thing and instantly find the matching English word. Free word-finder powered by the Datamuse API.',
}

export default function FindTheWordPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Find the Word', path: '/find-the-word' },
      ]} />
      <WebPageSchema
        path="/find-the-word"
        name="Find the Word — Describe It, We'll Name It"
        description="Describe a concept in plain English and instantly discover the exact word. Free vocabulary finder for writers, students, and word enthusiasts."
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
          <span className="text-foreground font-medium">Find the Word</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Wand2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Find the Word</h1>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Describe what you mean in plain English — we&apos;ll find the exact word.
            Perfect for tip-of-the-tongue moments, creative writing, and vocabulary discovery.
          </p>
        </div>
      </section>

      {/* Interactive tool */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <FindTheWordTool />
      </section>

      {/* Examples — always visible for crawlers */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-2">Example searches</h2>
        <p className="text-sm text-muted-foreground mb-5">
          These phrases show the kind of descriptions that work well and the words they uncover.
        </p>
        <div className="grid gap-3">
          {EXAMPLES.map(({ phrase, words }) => (
            <div key={phrase} className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 border rounded-xl bg-muted/10">
              <p className="flex-1 text-sm text-muted-foreground italic">&ldquo;{phrase}&rdquo;</p>
              <div className="flex flex-wrap gap-1.5">
                {words.map(w => (
                  <Link
                    key={w}
                    href={`/dictionary/${encodeURIComponent(w)}`}
                    className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {w}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-5">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: '1', title: 'Describe your concept', body: 'Type any description — a feeling, a sensory experience, an action, an idea. No need to know the word already.' },
            { n: '2', title: 'Semantic matching', body: 'The Datamuse "means like" engine searches a large English corpus for words semantically related to your phrase.' },
            { n: '3', title: 'See matching words', body: 'Results appear ranked by relevance, with definitions and parts of speech so you can confirm the perfect fit.' },
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
        <h2 className="text-xl font-bold mb-5">Who uses Find the Word?</h2>
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

      {/* Tips for best results */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-base font-bold mb-3">Tips for better results</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Be specific:</strong> &ldquo;walking quietly to avoid waking someone&rdquo; works better than &ldquo;quiet walk&rdquo;.</span></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Use sensory language:</strong> Describe what you see, hear, smell, or feel — these map well to concrete vocabulary.</span></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Try rephrasing:</strong> If the first attempt misses, try a synonym for the core idea or a different angle on the description.</span></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong>Check definitions:</strong> Click any result word to see its full definition and confirm it truly fits your intent.</span></li>
          </ul>
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
