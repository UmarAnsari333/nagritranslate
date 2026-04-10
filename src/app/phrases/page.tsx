import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { phrasesIndex } from '@/lib/phrases-data'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Common Phrases in 10 Languages | Free Language Phrase Guide',
  description:
    'Learn essential common phrases in Spanish, French, German, Japanese, Arabic, Hindi, and more. Greetings, travel phrases, numbers, and emergency phrases with pronunciation guide.',
  keywords: [
    'common phrases',
    'language phrases',
    'basic phrases',
    'travel phrases',
    'common Spanish phrases',
    'common French phrases',
    'common Japanese phrases',
    'language learning phrases',
    'essential phrases',
    'phrase guide',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/phrases',
  },
  openGraph: {
    title: 'Common Phrases in 10 Languages | Nagri Translate',
    description:
      'Essential phrases for travelers and language learners. Greetings, dining, travel, numbers and more — with pronunciation guides.',
    url: 'https://nagritranslate.com/phrases',
  },
}

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-500/10 text-green-600 dark:text-green-400',
  Medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  Hard: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  'Very Hard': 'bg-red-500/10 text-red-600 dark:text-red-400',
}

export default function PhrasesIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
      ]} />
      <WebPageSchema
        path="/phrases"
        name="Common Phrases in 10 Languages | Free Language Phrase Guide"
        description="Learn essential common phrases in Spanish, French, German, Japanese, Arabic, Hindi, and more."
        type="CollectionPage"
      />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Common Phrases</span>
        </nav>

        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Common Phrases by Language</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Essential phrases for travelers and language learners. Pick a language to explore
            greetings, travel phrases, numbers, food vocabulary, and more — all with pronunciation guides.
          </p>
        </div>

        {/* Special English Phrase Collections */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-7 h-7 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center text-sm">📜</span>
            English Word Collections
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: '/phrases/old-timey-words',
                emoji: '🎩',
                title: 'Old Timey Words',
                subtitle: 'Old-fashioned English',
                tag: 'Historical',
                count: '150+ words',
                desc: 'Victorian slang, Shakespearean expressions, Jazz Age sayings, and Old West phrases.',
                cta: 'Browse old-fashioned words',
              },
              {
                href: '/phrases/funny-weird-words',
                emoji: '🤪',
                title: 'Funny & Weird Words',
                subtitle: 'Delightfully bizarre English',
                tag: 'Humour',
                count: '35+ words',
                desc: 'Real dictionary words that sound absolutely made up — from bumfuzzle to snollygoster.',
                cta: 'Explore weird words',
              },
              {
                href: '/phrases/british-vs-american-english',
                emoji: '🇬🇧',
                title: 'British vs American English',
                subtitle: 'Two nations, one language',
                tag: 'Comparison',
                count: '100+ pairs',
                desc: 'Biscuit vs cookie, boot vs trunk, lift vs elevator — all the differences explained.',
                cta: 'Compare the differences',
              },
              {
                href: '/phrases/english-idioms',
                emoji: '💬',
                title: 'Common English Idioms',
                subtitle: 'Phrases that mean something else',
                tag: 'Idioms',
                count: '50+ idioms',
                desc: 'Break a leg, bite the bullet, hit the nail on the head — what idioms really mean.',
                cta: 'Learn the idioms',
              },
              {
                href: '/phrases/collective-nouns',
                emoji: '🦅',
                title: 'Collective Nouns',
                subtitle: 'A murder of crows & more',
                tag: 'Grammar',
                count: '80+ nouns',
                desc: 'A parliament of owls, a flamboyance of flamingos, a bloat of hippos — the best collective nouns.',
                cta: 'Discover collective nouns',
              },
              {
                href: '/phrases/words-borrowed-from-other-languages',
                emoji: '🌍',
                title: 'Words Borrowed from Other Languages',
                subtitle: 'English is a linguistic magpie',
                tag: 'Etymology',
                count: '50+ words',
                desc: 'Coffee from Arabic, shampoo from Hindi, kindergarten from German — English borrowed from everyone.',
                cta: 'Explore borrowed words',
              },
              {
                href: '/phrases/gen-z-slang',
                emoji: '📱',
                title: 'Gen Z & Internet Slang',
                subtitle: 'Modern internet language',
                tag: 'Modern',
                count: '40+ terms',
                desc: "No cap, rizz, bussin, slay — decode the internet's ever-changing vocabulary.",
                cta: 'Decode the slang',
              },
              {
                href: '/phrases/untranslatable-words',
                emoji: '🌐',
                title: 'Untranslatable Words',
                subtitle: "Concepts English can't name",
                tag: 'Global',
                count: '40+ words',
                desc: "Hygge, saudade, schadenfreude, ikigai — beautiful words English doesn't have a word for.",
                cta: 'Explore untranslatable words',
              },
              {
                href: '/phrases/cockney-rhyming-slang',
                emoji: '🎭',
                title: 'Cockney Rhyming Slang',
                subtitle: "East London's secret language",
                tag: 'British',
                count: '40+ phrases',
                desc: "Dog and bone (phone), plates of meat (feet), china plate (mate) — East London's rhyming code.",
                cta: 'Learn Cockney slang',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-5 bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h2 className="text-base font-bold group-hover:text-primary transition-colors">{item.title}</h2>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full">{item.tag}</span>
                  <span className="text-xs text-muted-foreground">{item.count}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>
                <div className="flex items-center text-xs text-primary font-medium">
                  {item.cta}
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Language Grid */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-7 h-7 bg-blue-500/10 text-blue-600 rounded-lg flex items-center justify-center text-sm">🌍</span>
            Phrases by Language
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {phrasesIndex.map((lang) => (
            <Link
              key={lang.slug}
              href={`/phrases/${lang.slug}`}
              className="group p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{lang.flag}</span>
                <div>
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {lang.language}
                  </h2>
                  <p className="text-sm text-muted-foreground">{lang.nativeName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{lang.family}</span>
                <span className="text-xs text-muted-foreground">{lang.speakers} speakers</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Learn greetings, travel phrases, numbers, food vocabulary, and emergency phrases in {lang.language}.
              </p>
              <div className="flex items-center text-sm text-primary font-medium">
                View {lang.language} phrases
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Category Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What You&apos;ll Learn</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '👋', title: 'Greetings', desc: 'Hello, goodbye, good morning, how are you, and more everyday greetings.' },
              { icon: '✈️', title: 'Travel', desc: 'Directions, airport phrases, "where is?", taxi, and getting around.' },
              { icon: '🍽️', title: 'Food & Dining', desc: 'Restaurant phrases, ordering food, dietary needs, and asking for the bill.' },
              { icon: '🔢', title: 'Numbers', desc: 'Count from 1 to 10 in any language — essential for shopping and travel.' },
              { icon: '🙏', title: 'Politeness', desc: 'Please, thank you, sorry, and basic courtesy phrases for every situation.' },
              { icon: '❓', title: 'Questions', desc: 'Ask for names, directions, prices, and request help.' },
              { icon: '🆘', title: 'Emergency', desc: 'Critical phrases for help, police, ambulance, and doctors.' },
              { icon: '🗣️', title: 'Pronunciation', desc: 'Every phrase includes a pronunciation guide in plain English.' },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-muted/20 rounded-xl border text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Translator */}
        <div className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Need to Translate More?</h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our AI translator handles 248+ languages instantly. Type, speak, or upload a document — translate anything for free.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ai-translate/english-to-spanish"
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              English → Spanish
            </Link>
            <Link
              href="/ai-translate/english-to-french"
              className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 border transition-colors"
            >
              English → French
            </Link>
            <Link
              href="/ai-translate/english-to-japanese"
              className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 border transition-colors"
            >
              English → Japanese
            </Link>
            <Link
              href="/ai-translate/english-to-arabic"
              className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 border transition-colors"
            >
              English → Arabic
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center mb-4">Related resources</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/learn" className="text-sm text-primary hover:underline">Language Learning Guides</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/languages" className="text-sm text-primary hover:underline">All 248+ Languages</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/ai-translate/english-to-spanish" className="text-sm text-primary hover:underline">Spanish Translator</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/ai-translate/english-to-french" className="text-sm text-primary hover:underline">French Translator</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
