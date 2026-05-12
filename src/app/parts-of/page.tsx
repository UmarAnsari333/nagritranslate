import type { Metadata } from 'next'
import Link from 'next/link'
import { Puzzle, ArrowRight, ChevronRight, Home, BookOpen, Feather, GraduationCap, Wrench } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PARTS_WORDS } from '@/data/parts-words'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { PartsSearch } from '@/components/parts/parts-search'

export const metadata: Metadata = {
  title: 'Parts Of — Find All Components & Sections of Any Word',
  description:
    'Explore parts and components of any object. Parts of a car, human body, guitar, tree, house, and hundreds more. Free anatomy and structure explorer for students and writers.',
  keywords: [
    'parts of',
    'components of',
    'parts of a car',
    'parts of the body',
    'parts of a tree',
    'parts of a guitar',
    'parts of a house',
    'anatomy',
    'structure of',
    'what makes up',
    'parts list',
    'components list',
  ],
  alternates: { canonical: 'https://nagritranslate.com/parts-of' },
  openGraph: {
    title: 'Parts Of — Find All Components & Sections of Any Word',
    description: 'Explore parts and components of any object. Free structure explorer.',
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What are the main parts of a car?',
    answer:
      'The main parts of a car include: engine, transmission, chassis, axle, brake, steering wheel, dashboard, fuel tank, radiator, exhaust, suspension, wheel, tire, headlight, windshield, hood, trunk, door, seat, and battery. Cars are divided into the powertrain, body, chassis, and electrical systems.',
  },
  {
    question: 'What are the parts of the human body?',
    answer:
      'The human body is divided into: head (brain, skull, face, eye, ear, nose, mouth), torso (chest, heart, lung, stomach, liver, kidney, spine), arms (shoulder, elbow, wrist, hand, finger), and legs (hip, knee, ankle, foot, toe). The body systems include skeletal, muscular, circulatory, respiratory, and nervous.',
  },
  {
    question: 'What are the parts of a tree?',
    answer:
      'The parts of a tree include: root (absorbs water and nutrients), trunk (supports the tree), bark (outer protective layer), branch (extends from trunk), twig (small branches), leaf (photosynthesis), bud (new growth), flower (reproduction), fruit (contains seeds), and seed (new tree generation).',
  },
  {
    question: 'What are the parts of a guitar?',
    answer:
      'The parts of a guitar include: body (resonating chamber), neck (long wooden piece), headstock (top of neck), tuning peg (adjusts string pitch), nut (string guide at top), fret (metal bars on neck), fretboard (playing surface), string (six strings), bridge (anchors strings at body), soundhole (projects sound), and pickguard (protects body).',
  },
  {
    question: 'What are the parts of a house?',
    answer:
      'The main parts of a house include: foundation, frame/structure, roof, wall, floor, ceiling, door, window, staircase, chimney, attic, basement, and rooms (kitchen, bedroom, bathroom, living room, dining room). Key systems include plumbing, electrical, heating, and ventilation.',
  },
  {
    question: 'What is the difference between "parts of" and "types of"?',
    answer:
      '"Parts of" refers to the components that make up a whole — the engine is a part of a car. "Types of" refers to specific categories within a group — a sedan is a type of car. Both help you understand vocabulary, but parts describe structure while types describe classification.',
  },
  {
    question: 'What are the parts of a sentence?',
    answer:
      'The main parts of a sentence are: subject (who or what the sentence is about), verb (the action or state), object (what receives the action), complement (describes the subject or object), and modifier (adds detail). Sentences can also include a clause (group of words with subject and verb) or phrase (group of words without both).',
  },
  {
    question: 'What are the parts of a flower?',
    answer:
      'The parts of a flower include: petal (attracts pollinators), sepal (protects the bud), stamen (male part — anther + filament), pistil (female part — stigma + style + ovary), receptacle (connects flower to stem), and peduncle (flower stem). The pollen is produced in the anther and travels to the stigma during pollination.',
  },
]

const CATEGORIES = [
  {
    label: 'Human Body',
    color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900',
    badge: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    words: ['body', 'head', 'face', 'brain', 'hand', 'arm', 'leg', 'eye', 'heart', 'spine'],
  },
  {
    label: 'Vehicles',
    color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    words: ['car', 'airplane', 'ship', 'bicycle', 'train', 'motorcycle', 'truck', 'helicopter', 'submarine', 'rocket'],
  },
  {
    label: 'Nature',
    color: 'bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900',
    badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    words: ['tree', 'flower', 'leaf', 'plant', 'mountain', 'river', 'ocean', 'forest', 'volcano', 'cave'],
  },
  {
    label: 'Buildings',
    color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900',
    badge: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    words: ['house', 'castle', 'church', 'bridge', 'tower', 'school', 'hospital', 'stadium', 'prison', 'palace'],
  },
  {
    label: 'Technology',
    color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900',
    badge: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    words: ['computer', 'phone', 'camera', 'engine', 'robot', 'telescope', 'clock', 'television', 'battery', 'microscope'],
  },
  {
    label: 'Music & Arts',
    color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900',
    badge: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    words: ['guitar', 'piano', 'violin', 'drum', 'orchestra', 'song', 'opera', 'book', 'film', 'play'],
  },
]

const POPULAR_SEARCHES = [
  'car', 'body', 'tree', 'guitar', 'house', 'flower',
  'eye', 'airplane', 'computer', 'heart', 'castle', 'atom',
]

const RELATED_TOOLS = [
  { label: 'Types Of', desc: 'Kinds & varieties', href: '/types-of' },
  { label: 'Dictionary', desc: 'Definitions & examples', href: '/dictionary' },
  { label: 'Adjectives For', desc: 'Words that describe nouns', href: '/adjectives-for' },
  { label: 'Synonyms', desc: 'Similar words', href: '/synonyms' },
  { label: 'Collocations', desc: 'Words that go together', href: '/collocations' },
]

const USE_CASES = [
  { icon: GraduationCap, label: 'Students', desc: 'Learn anatomy and structure vocabulary.' },
  { icon: Feather, label: 'Writers', desc: 'Describe things with precise component names.' },
  { icon: BookOpen, label: 'Teachers', desc: 'Build topic word lists for any subject.' },
  { icon: Wrench, label: 'Technical', desc: 'Find correct terminology for parts and systems.' },
]

const grouped = PARTS_WORDS.reduce<Record<string, string[]>>((acc, word) => {
  const letter = word[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(word)
  return acc
}, {})
const letters = Object.keys(grouped).sort()

export default function PartsOfPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Parts Of', path: '/parts-of' },
      ]} />
      <WebPageSchema
        path="/parts-of"
        name="Parts Of — Find All Components & Sections of Any Word"
        description="Explore parts and components of any object. Free structure explorer."
        type="CollectionPage"
      />
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-6 md:pt-14">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Parts Of</span>
        </nav>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Puzzle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Parts Of Any Word</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover all the components, sections, and anatomy of any object or concept.
            From parts of the human body to parts of a guitar — explore structure and vocabulary.
          </p>
          <PartsSearch />
        </div>

        {/* Popular searches */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-3">Popular searches</p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.map((word, i) => (
              <Link
                key={`${i}-${word}`}
                href={`/parts-of/${word}`}
                className="px-4 py-2 rounded-full border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
              >
                parts of {word}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
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

      {/* Browse by category */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-1">Browse by category</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Pick a category and drill into the components of any object or system.
        </p>
        <div className="space-y-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={`p-4 rounded-2xl border ${cat.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cat.badge}`}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.words.map((word, i) => (
                  <Link
                    key={`${i}-${word}`}
                    href={`/parts-of/${word}`}
                    className="group inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    parts of {word}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A–Z jump nav */}
      <section className="max-w-5xl mx-auto px-4 pb-4">
        <div className="p-4 bg-muted/30 rounded-2xl border">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Browse by letter</p>
          <div className="flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg border text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Word grid per letter */}
      <section className="max-w-5xl mx-auto px-4 pb-12 space-y-8">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-bold w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
                {letter}
              </span>
              <span className="text-xs text-muted-foreground">{grouped[letter].length} words</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {grouped[letter].map((word, i) => (
                <Link
                  key={`${i}-${word}`}
                  href={`/parts-of/${word}`}
                  className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-full border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-sm"
                >
                  {word}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Related tools */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Related tools</h2>
        <div className="flex flex-wrap gap-3">
          {RELATED_TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex flex-col px-4 py-3 border rounded-2xl bg-muted/10 hover:bg-accent hover:text-accent-foreground transition-colors min-w-[120px]"
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
            <details
              key={item.question}
              className="group border rounded-2xl bg-muted/10 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm list-none select-none hover:bg-muted/30 transition-colors">
                {item.question}
                <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground rotate-90 group-open:rotate-270 transition-transform" />
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom search CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="p-6 md:p-8 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl border text-center">
          <h2 className="text-xl font-bold mb-2">Search any word</h2>
          <p className="text-muted-foreground text-sm mb-5">
            Any physical object or concept works — just type it to find all its parts.
          </p>
          <PartsSearch />
        </div>
      </section>

      <Footer />
    </div>
  )
}
