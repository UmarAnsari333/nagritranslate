import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { slugifyLanguage } from '@/lib/languages'
import { Globe, ArrowRight } from 'lucide-react'
import feed from '@/data/translator-feed.json'
import { TranslatorFeedTable } from '@/components/translators/translator-feed-table'

export const metadata: Metadata = {
  title: 'Online Translators — 248+ Language Pairs | Nagri Translate',
  description: 'Browse all online translators by language pair. English to Spanish, French, German, Arabic, Hindi, Urdu, Bosnian, and 240+ more. Free AI-powered translation — no sign-up.',
  keywords: [
    'online translators', 'language translators', 'translator list', 'all language translators',
    'english translator', 'free online translator', 'ai translator list',
    'english to spanish translator', 'english to french translator', 'english to arabic translator',
    'spanish to english translator', 'french to english translator', 'hindi to english translator',
    'language pair translator', 'translation tools', 'language translation list',
  ],
  alternates: { canonical: 'https://nagritranslate.com/translators' },
  openGraph: {
    title: 'Online Translators — 248+ Language Pairs',
    description: 'Browse every language pair translator — English, Spanish, French, Arabic, Hindi, and 244 more. Free, instant, AI-powered.',
    type: 'website',
  },
}

// ─── Static popular pairs grid (always visible) ───────────────────────────────
const POPULAR_PAIRS = [
  { from: 'Spanish',    to: 'English', speakers: '500M+' },
  { from: 'French',     to: 'English', speakers: '280M+' },
  { from: 'German',     to: 'English', speakers: '135M+' },
  { from: 'Arabic',     to: 'English', speakers: '420M+' },
  { from: 'Hindi',      to: 'English', speakers: '600M+' },
  { from: 'Chinese',    to: 'English', speakers: '1.1B+' },
  { from: 'Japanese',   to: 'English', speakers: '125M+' },
  { from: 'Korean',     to: 'English', speakers: '80M+'  },
  { from: 'English',    to: 'Spanish', speakers: '500M+' },
  { from: 'English',    to: 'French',  speakers: '280M+' },
  { from: 'English',    to: 'Arabic',  speakers: '420M+' },
  { from: 'English',    to: 'Hindi',   speakers: '600M+' },
  { from: 'Urdu',       to: 'English', speakers: '230M+' },
  { from: 'English',    to: 'Urdu',    speakers: '230M+' },
  { from: 'Bosnian',    to: 'English', speakers: '3M+'   },
  { from: 'English',    to: 'Bosnian', speakers: '3M+'   },
]

export default function TranslatorsPage() {
  const feedCount = feed.length

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            <Globe className="w-3.5 h-3.5" />
            {feedCount} Translator Pages · Updated Regularly
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Online Translators
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse every language pair translator powered by AI. Pick your pair and translate instantly — no sign-up, no limits.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-14">

        {/* ── Recently Updated (lingojam-style table) ── */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-1">Recently Added Translators</h2>
          <p className="text-sm text-muted-foreground mb-5">
            New language pair pages are added regularly. Showing the latest {Math.min(feedCount, 50)}.
          </p>
          {/* Client component handles relative time so it's always live */}
          <TranslatorFeedTable feed={feed} />
        </div>

        {/* ── Popular pairs grid ── */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-1">Popular Language Pairs</h2>
          <p className="text-sm text-muted-foreground mb-5">
            The most-searched translation directions worldwide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {POPULAR_PAIRS.map(p => {
              const slug = `${slugifyLanguage(p.from)}-to-${slugifyLanguage(p.to)}`
              return (
                <Link
                  key={slug}
                  href={`/ai-translate/${slug}`}
                  className="group flex flex-col gap-2 p-4 rounded-xl border bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all"
                >
                  <span className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                    {p.from} to {p.to} Translator
                  </span>
                  <div className="flex items-center justify-between mt-auto pt-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {p.speakers} speakers
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* ── Browse all CTA ── */}
        <div className="p-6 md:p-10 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border text-center">
          <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Don&apos;t see your language pair?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our translator supports all 248 languages in any combination. Open the full translator and pick any source and target language.
          </p>
          <Link
            href="/ai-translate"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Open Full Translator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── SEO text ── */}
        <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-foreground mb-2">What Is an Online Translator?</h2>
            <p>
              An online translator is a web tool that converts text from one language to another automatically. Unlike human translators, AI-powered translators deliver results in under a second and support hundreds of languages simultaneously.
            </p>
            <p className="mt-3">
              Nagri Translate uses AI-based neural machine translation to produce natural, contextually aware output — not word-for-word substitution. The result is smoother, more readable text across all 248 supported languages.
            </p>
          </div>
          <div>
            <h2 className="text-base font-bold text-foreground mb-2">How to Use These Translators</h2>
            <p>
              Click any language pair to open the dedicated translator. It is pre-configured with your chosen source and target language — just paste or type your text and the translation appears instantly.
            </p>
            <p className="mt-3">
              Every translator also supports voice input, text-to-speech playback, document upload (DOCX/TXT), and translation history. All features are free with no sign-up required.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
