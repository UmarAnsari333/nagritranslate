import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { WebMCPProvider } from "@/components/webmcp-provider";
import { siteConfig } from "@/lib/seo";
import { 
  organizationSchema, 
  webApplicationSchema, 
  faqSchema, 
  howToSchema, 
  speakableSchema,
  softwareAppSchema,
  comparisonSchema,
  qaSchema,
  languageDatasetSchema
} from "@/lib/geo-schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Translate with AI - Free Online Translation for 248+ Languages`,
    template: `%s | Nagri Translate`,
  },
  description: siteConfig.description,
  keywords: [
    'ai translator',
    'translate with ai',
    'ai translation',
    'free ai translator',
    'online ai translator',
    'translate',
    'translation',
    'translator',
    'free translation',
    'online translator',
    'language translation',
    'translate english to spanish',
    'translate english to french',
    'translate english to german',
    'translate english to chinese',
    'translate english to japanese',
    'translate english to urdu',
    'translate english to arabic',
    'translate english to hindi',
    'ai powered translator',
    'machine translation',
    'neural translation',
    'document translation',
    'voice translation',
    'speech to text',
    'text to speech',
    'multilingual translator',
    'language converter',
    'Google Translate alternative',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - Free Online Translation for 248+ Languages`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Free Translation Service`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Free Online Translation`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@translate',
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
  icons: {
    icon: "/nagritranslate-logo.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'translation',
};

// All GEO-optimized JSON-LD Structured Data schemas are imported from geo-schemas.ts

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://translate.googleapis.com" />
        <link rel="dns-prefetch" href="https://translate.googleapis.com" />
        {/* GEO-Optimized Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        {/* Comparison Schema for AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
        />
        {/* Q&A Schema for Direct Answers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
        />
        {/* Language Dataset Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(languageDatasetSchema) }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/translation/{search_term_string}-to-english`,
              },
              'query-input': 'required name=search_term_string',
            },
          }) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WebMCPProvider />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
