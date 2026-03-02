import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supported Languages - AI Translation for 248+ Languages',
  description: 'Explore our comprehensive list of 248+ supported languages for AI-powered online translation. Translate between any languages including regional and minority languages.',
  keywords: [
    'all languages',
    'supported languages',
    'translate languages',
    'language list',
    'ai translation languages',
    'ai translator languages',
    '248 languages',
    'multilingual translator',
    'ai powered translation',
  ],
  openGraph: {
    title: 'Supported Languages - AI Translation for 248+ Languages',
    description: 'Explore our comprehensive list of 248+ supported languages for AI-powered online translation.',
    url: 'https://ai-translate.app/languages',
    type: 'website',
    siteName: 'AI Translate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '248+ Supported Languages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supported Languages - AI Translation for 248+ Languages',
    description: 'Explore our comprehensive list of 248+ supported languages for AI-powered online translation.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://ai-translate.app/languages',
  },
}

export default function LanguagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
