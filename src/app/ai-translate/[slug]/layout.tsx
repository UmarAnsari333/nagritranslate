import { Metadata } from 'next'
import { languages, slugifyLanguage } from '@/lib/languages'

const SITE_URL = 'https://nagritranslate.com'

// ── Helpers ─────────────────────────────────────────────────────────────────

function parseSlug(slug: string): { source: string; target: string } | null {
  const match = slug.match(/^(.+)-to-(.+)$/)
  if (!match) return null

  const sourceLang = languages.find(l => slugifyLanguage(l.label) === match[1])
  const targetLang = languages.find(l => slugifyLanguage(l.label) === match[2])

  if (!sourceLang || !targetLang) return null

  return { source: sourceLang.label, target: targetLang.label }
}

// ── Static generation — top 55 language pairs by search volume ───────────────

const TOP_PAIRS = [
  // English → Others (highest global search volume)
  'english-to-spanish', 'english-to-french', 'english-to-german',
  'english-to-chinese', 'english-to-japanese', 'english-to-hindi',
  'english-to-arabic', 'english-to-portuguese', 'english-to-russian',
  'english-to-korean', 'english-to-italian', 'english-to-dutch',
  'english-to-turkish', 'english-to-polish', 'english-to-swedish',
  'english-to-greek', 'english-to-hebrew', 'english-to-thai',
  'english-to-vietnamese', 'english-to-indonesian', 'english-to-urdu',
  'english-to-bengali', 'english-to-persian', 'english-to-ukrainian',
  'english-to-romanian', 'english-to-czech', 'english-to-hungarian',
  'english-to-norwegian', 'english-to-danish', 'english-to-finnish',
  'english-to-malay', 'english-to-swahili', 'english-to-tagalog',
  // Others → English (second-highest volume)
  'spanish-to-english', 'french-to-english', 'german-to-english',
  'chinese-to-english', 'japanese-to-english', 'hindi-to-english',
  'arabic-to-english', 'portuguese-to-english', 'russian-to-english',
  'korean-to-english', 'italian-to-english', 'dutch-to-english',
  'turkish-to-english', 'polish-to-english', 'urdu-to-english',
  'bengali-to-english', 'vietnamese-to-english', 'thai-to-english',
  'persian-to-english', 'ukrainian-to-english', 'malay-to-english',
  'swahili-to-english', 'tagalog-to-english',
]

export async function generateStaticParams() {
  return TOP_PAIRS.map(slug => ({ slug }))
}

// Revalidate ISR pages (non-statically-generated) every 24 hours
export const revalidate = 86400

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (!parsed) {
    return {
      title: 'AI Language Translator — Free Online Translation | Nagri Translate',
      description: 'Free AI-powered translator supporting 248+ languages. Instant, accurate, no sign-up required. Voice input, document upload, and text-to-speech included.',
      robots: { index: false },
    }
  }

  const { source, target } = parsed
  const sl = source.toLowerCase()
  const tl = target.toLowerCase()

  return {
    title: `${source} to ${target} Translator — Free AI Translation Online`,
    description: `Instantly translate ${source} to ${target} — free, no sign-up required. AI-powered accuracy for text, documents & voice. 5,000 characters per translation, 248+ languages supported.`,
    keywords: [
      `${sl} to ${tl} translator`,
      `translate ${sl} to ${tl}`,
      `${sl} to ${tl} translation`,
      `free ${sl} to ${tl} translator`,
      `online ${sl} to ${tl} translator`,
      `${sl} to ${tl} translation online`,
      `${sl} ${tl} translator`,
      `${sl} to ${tl} converter`,
      `${tl} from ${sl}`,
      `${sl} translator`,
      `${tl} translator`,
      `ai ${sl} to ${tl}`,
      `${sl} to ${tl} online free`,
      `best ${sl} to ${tl} translator`,
      `accurate ${sl} to ${tl} translation`,
      `instant ${sl} to ${tl}`,
      `${sl} to ${tl} document translation`,
      `${sl} to ${tl} voice translation`,
      `${sl} to ${tl} text`,
    ],
    alternates: {
      canonical: `${SITE_URL}/ai-translate/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${source} to ${target} Translator — Free AI Translation`,
      description: `Translate ${source} to ${target} instantly. AI-powered, free, no sign-up. Voice input, document upload, text-to-speech. 248+ languages.`,
      type: 'website',
      url: `${SITE_URL}/ai-translate/${slug}`,
      siteName: 'Nagri Translate',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${source} to ${target} Translator — Free & AI-Powered`,
      description: `Free ${source} to ${target} translation online. Instant AI accuracy, voice input, document upload. No sign-up needed.`,
    },
  }
}

// ── Layout — server-renders JSON-LD schemas ───────────────────────────────────

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const parsed = parseSlug(slug)
  const source = parsed?.source ?? 'Source Language'
  const target = parsed?.target ?? 'Target Language'

  // BreadcrumbList — helps Google display richer search snippets
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'AI Translate', item: `${SITE_URL}/ai-translate` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${source} to ${target} Translator`,
        item: `${SITE_URL}/ai-translate/${slug}`,
      },
    ],
  }

  // FAQPage — eligible for rich results (accordion in Google Search = higher CTR)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${source} to ${target} translation free?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! Our ${source} to ${target} translator is completely free with no registration required. You can translate unlimited text from ${source} to ${target} at no cost.`,
        },
      },
      {
        '@type': 'Question',
        name: `How accurate is the AI ${source} to ${target} translation?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our AI delivers high accuracy for everyday ${source} to ${target} translation including conversations, emails, articles, and web content. For specialised domains like legal contracts or medical reports, we recommend professional review after translation.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I translate ${source} documents to ${target}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Click the Upload button in the translator to upload a DOCX or TXT file. The text is extracted and automatically translated from ${source} to ${target}. PDF support is coming soon.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the text limit for ${source} to ${target} translation?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can translate up to 5,000 characters at once from ${source} to ${target}. For longer content, split the text into sections or use the document upload feature.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I speak ${source} and get the ${target} translation?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! Click the microphone button to use voice input. Speak in ${source} and the tool will transcribe your speech and translate it to ${target} in real time. Voice input works best in Chrome or Edge browsers.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I hear the ${target} translation spoken aloud?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Click the speaker icon next to the ${target} output to listen to a text-to-speech reading of the translation. This helps with learning correct ${target} pronunciation.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is my ${source} to ${target} translation data private?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Your privacy is protected. Translations are processed securely and not stored on our servers. Translation history is saved only in your browser's local storage and never shared.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I swap and translate ${target} back to ${source}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, click the swap button (⇄) between the language selectors to instantly reverse the direction — translating from ${target} back to ${source}. You can also manually change to any of the 248+ supported languages.`,
        },
      },
    ],
  }

  // WebApplication — helps Google understand the tool's purpose
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${source} to ${target} Translator — Nagri Translate`,
    url: `${SITE_URL}/ai-translate/${slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Works in Chrome, Firefox, Safari, and Edge.',
    description: `Free AI-powered ${source} to ${target} translator. Translate text, documents, and speech instantly. No sign-up required.`,
    featureList: [
      `${source} to ${target} text translation`,
      `${source} document to ${target} translation`,
      `${source} voice input with ${target} translation`,
      `${target} text-to-speech pronunciation`,
      '248+ languages supported',
      'Local translation history',
      'No registration required',
      'Free and unlimited',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: 'Nagri Translate',
      url: SITE_URL,
    },
    isAccessibleForFree: true,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {children}
    </>
  )
}
