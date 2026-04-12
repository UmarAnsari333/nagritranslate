import { Metadata } from 'next'
import { LoremIpsumGeneratorTool } from '@/components/tools/lorem-ipsum-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator — Classic, Funny & By Characters | Free',
  description:
    'Free lorem ipsum generator with 3 modes: classic paragraphs, sentences & words; 6 funny themes (Bacon, Zombie, Pirate, Corporate, Cat, Hipster); and exact character count. Copy instantly. No sign-up.',
  keywords: [
    'lorem ipsum generator',
    'generate lorem ipsum',
    'lorem ipsum generator funny',
    'lorem ipsum generator characters',
    'lorem ipsum text',
    'placeholder text generator',
    'dummy text generator',
    'bacon ipsum generator',
    'zombie ipsum',
    'pirate ipsum',
    'corporate ipsum',
    'cat ipsum',
    'hipster ipsum',
    'lorem ipsum by characters',
    'lorem ipsum paragraph generator',
    'random text generator',
    'filler text generator',
    'lorem ipsum copy paste',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/lorem-ipsum-generator',
  },
  openGraph: {
    title: 'Lorem Ipsum Generator — Classic, Funny & By Characters',
    description:
      'Generate classic lorem ipsum, funny themed placeholder text (Bacon, Zombie, Pirate, Corporate, Cat, Hipster), or text by exact character count. Free, instant.',
    url: 'https://nagritranslate.com/tools/lorem-ipsum-generator',
    type: 'website',
  },
}

const MODES = [
  {
    name: 'Classic',
    emoji: '📄',
    desc: 'The original lorem ipsum. Generate by paragraphs, sentences, or exact word count. Toggle whether to start with the traditional "Lorem ipsum…" opener.',
  },
  {
    name: 'Funny Themes',
    emoji: '😄',
    desc: '6 themed variations — Bacon, Zombie, Pirate, Corporate, Cat, and Hipster. Same structure as classic but with absurd, themed vocabulary that makes mockups fun.',
  },
  {
    name: 'By Characters',
    emoji: '🔢',
    desc: 'Enter an exact character count (50–10,000) and get lorem ipsum trimmed precisely to that length. Choose whether to break at a word boundary or allow mid-word cuts.',
  },
]

const FUNNY_THEMES = [
  { name: 'Bacon Ipsum', emoji: '🥓', desc: 'Meat cuts and cooking terms replace lorem ipsum' },
  { name: 'Zombie Ipsum', emoji: '🧟', desc: 'Undead apocalypse vocabulary for horror mockups' },
  { name: 'Pirate Ipsum', emoji: '🏴‍☠️', desc: 'Nautical pirate speak for swashbuckling designs' },
  { name: 'Corporate Ipsum', emoji: '💼', desc: 'Business buzzwords for enterprise UI mockups' },
  { name: 'Cat Ipsum', emoji: '🐱', desc: 'Feline behavior descriptions for pet-themed projects' },
  { name: 'Hipster Ipsum', emoji: '🧔', desc: 'Artisan craft culture vocabulary for indie brands' },
]

const FAQ = [
  {
    q: 'What is Lorem Ipsum and why do designers use it?',
    a: "Lorem ipsum is placeholder text used in design, publishing, and web development to fill space in mockups and wireframes before real content is available. It's derived from \"de Finibus Bonorum et Malorum\" by Cicero (45 BC), scrambled to be unintelligible so readers focus on layout, not meaning. It's been the industry standard filler text since the 1500s when Aldus Manutus first used it in typesetting.",
  },
  {
    q: 'What is the difference between paragraphs, sentences, and words mode?',
    a: 'Paragraphs mode generates full blocks of text separated by line breaks — ideal for body copy mockups. Sentences mode generates individual sentences run together — useful for short description fields. Words mode generates a single run-on string of lorem ipsum words — useful for testing specific word count requirements.',
  },
  {
    q: 'What are the funny lorem ipsum themes for?',
    a: "Funny themes serve two purposes: (1) they make long mockup review sessions more entertaining — a deck full of Bacon Ipsum is harder to ignore than standard lorem ipsum; (2) themed placeholder text helps stakeholders understand the tone of a design. Corporate Ipsum in a presentation template signals a professional context; Cat Ipsum signals playfulness.",
  },
  {
    q: 'How does the By Characters mode work exactly?',
    a: 'The tool builds a long lorem ipsum string by repeating sentences, then trims it to the exact character count you specify. With "Break at word boundary" enabled, it trims to the nearest space before the limit (so you never get a cut-off word like "adipis"). With it disabled, it cuts exactly at the character limit — useful when a database field has a strict VARCHAR limit.',
  },
  {
    q: 'Can I use the generated text in commercial projects?',
    a: 'Yes — lorem ipsum has no copyright. It is free to use in any project, commercial or personal. The funny themes (Bacon, Zombie, etc.) are also original to this generator and may be used freely.',
  },
]

export default function LoremIpsumGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Text Tools', path: '/tools' },
          { name: 'Lorem Ipsum Generator', path: '/tools/lorem-ipsum-generator' },
        ]}
      />
      <WebPageSchema
        path="/tools/lorem-ipsum-generator"
        name="Lorem Ipsum Generator — Classic, Funny & By Characters"
        description="Free lorem ipsum generator with classic, funny themed, and by-character modes. Generate placeholder text instantly."
        type="WebApplication"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Lorem Ipsum Generator</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Lorem Ipsum Generator</h1>
          <p className="text-muted-foreground text-lg">
            Classic placeholder text, 6 funny themes (Bacon, Zombie, Pirate, Corporate, Cat, Hipster),
            or generate by exact character count. Copy instantly. Free.
          </p>
        </div>

        {/* Tool */}
        <LoremIpsumGeneratorTool />

        {/* 3 Modes */}
        <section className="mt-14 mb-10">
          <h2 className="text-2xl font-bold mb-4">3 Generation Modes</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {MODES.map((m) => (
              <div key={m.name} className="p-4 rounded-xl border bg-muted/5 space-y-2">
                <div className="text-2xl">{m.emoji}</div>
                <p className="font-semibold text-sm">{m.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Funny themes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">6 Funny Lorem Ipsum Themes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FUNNY_THEMES.map((t) => (
              <div key={t.name} className="flex gap-3 p-4 rounded-xl border bg-muted/10">
                <span className="text-2xl shrink-0">{t.emoji}</span>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is Lorem Ipsum */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is Lorem Ipsum?</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Lorem ipsum is the most widely used placeholder text in design, typesetting, and
              web development. It is derived from{' '}
              <a
                href="https://en.wikipedia.org/wiki/De_finibus_bonorum_et_malorum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Cicero&apos;s &quot;de Finibus Bonorum et Malorum&quot; <ExternalLink className="w-3 h-3" />
              </a>{' '}
              (45 BC), specifically the passage beginning &quot;Neque porro quisquam est qui dolorem ipsum quia
              dolor sit amet…&quot; The text was scrambled to be unreadable so that readers focus on
              layout and typography rather than the content.
            </p>
            <p>
              The standard lorem ipsum passage{' '}
              <strong className="text-foreground">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit…&quot;
              </strong>{' '}
              has been used since the 1500s, when an unknown printer scrambled it for a type
              specimen book. It was popularised in the 1960s with{' '}
              <a
                href="https://en.wikipedia.org/wiki/Letraset"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Letraset <ExternalLink className="w-3 h-3" />
              </a>{' '}
              sheets and again in the 1980s with desktop publishing software like Aldus PageMaker.
            </p>
            <p>
              Today it remains the default filler text for designers, developers, and content
              teams worldwide — universally understood as &quot;real content goes here.&quot; For the full
              history, see the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Lorem_ipsum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Wikipedia article on Lorem ipsum <ExternalLink className="w-3 h-3" />
              </a>
              , or read the original Latin source on{' '}
              <a
                href="https://www.gutenberg.org/ebooks/29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Project Gutenberg <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Translator CTA */}
        <section className="mb-10">
          <Link
            href="/ai-translate"
            className="group flex items-center justify-between gap-4 p-6 rounded-2xl border bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🌍</span>
              <div>
                <p className="font-bold text-base mb-1">Got real content to translate?</p>
                <p className="text-sm text-muted-foreground">
                  Once your design is ready, use our AI Translator to localise your actual copy into
                  248+ languages — Arabic, Spanish, French, Hindi, Chinese and more.
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors shrink-0" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
