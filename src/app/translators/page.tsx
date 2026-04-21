import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
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

export default function TranslatorsPage() {
  const feedCount = feed.length

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10 pb-16">
        <h2 className="text-xl md:text-2xl font-bold mb-1">Recently Added Translators</h2>
        <p className="text-sm text-muted-foreground mb-5">
          New language pair pages are added regularly. Showing the latest {Math.min(feedCount, 50)}.
        </p>
        <TranslatorFeedTable feed={feed} />
      </div>

      <Footer />
    </div>
  )
}
