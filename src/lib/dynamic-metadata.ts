import { languages } from '@/lib/languages'

/**
 * Generate dynamic metadata for translation pages
 */
export interface DynamicMetadata {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogTitle: string
  ogDescription: string
  ogImage?: string
  alternateLanguages?: string[]
}

/**
 * Parse slug to get source and target languages
 */
export function parseSlug(slug: string): { sourceLang: string; targetLang: string } {
  const parts = slug.split('-to-')

  if (parts.length !== 2) {
    return { sourceLang: 'english', targetLang: 'english' }
  }

  const sourceName = parts[0]
    const targetName = parts[1]

  // Handle "detect" or "detect language" as auto-detect
  let sourceLang = languages.find(l => l.label.toLowerCase() === sourceName)
  if (sourceName === 'detect' || sourceName === 'detect language') {
    sourceLang = languages.find(l => l.value === 'auto')
  }

  const targetLang = languages.find(l => l.label.toLowerCase() === targetName)

  return { sourceLang, targetLang }
}

/**
 * Generate metadata for a specific translation page
 */
export function generateMetadata(slug: string): DynamicMetadata {
  const { sourceLang, targetLang } = parseSlug(slug)
  const baseUrl = 'https://ai-translate.app'

  if (!sourceLang || !targetLang) {
    return {
      title: 'Translation - Free Online Translator',
      description: 'Free online translation service supporting 248+ languages. Translate text, documents (DOCX, TXT), and use voice input.',
      keywords: [
        'translate',
        'translation',
        'translator',
        'free translation',
        'online translator',
        'language translation',
      ],
      canonicalUrl: `${baseUrl}/translation/${slug}`,
      ogTitle: 'Translation - Free Online Translator',
      ogDescription: 'Free online translation service supporting 248+ languages. Translate text, documents (DOCX, TXT), and use voice input.',
    }
  }

  const sourceName = sourceLang?.label || 'English'
  const targetName = targetLang?.label || 'English'

  // Generate descriptive title
  const title = `${sourceName} to ${targetName} Translation - Free Online Translator`

  // Generate keywords
  const keywords = [
    `translate ${sourceName.toLowerCase()} to ${targetName.toLowerCase()}`,
    `${sourceName.toLowerCase()} to ${targetName.toLowerCase()} translator`,
    `${sourceName.toLowerCase()} ${targetName.toLowerCase()} translation`,
    'free online translation',
    `translate from ${sourceName.toLowerCase()}`,
    `${sourceName.toLowerCase()} to english translator`,
  ]

  // Generate description
  const description = `Translate ${sourceName} to ${targetName} instantly. Free, accurate translations with text-to-speech, document upload (DOCX, TXT), and voice input support. No registration required. Trusted by millions of users worldwide.`

  // Generate OG description
  const ogDescription = `Free ${sourceName} to ${targetName} translation. Translate text, upload documents, or use voice input. Powered by AI with instant results.`

  return {
    title,
    description,
    keywords,
    canonicalUrl: `${baseUrl}/translation/${slug}`,
    ogTitle,
    ogDescription,
  }
}

/**
 * Generate alternate language links for hreflang tags
 */
export function generateAlternateLanguages(slug: string): { code: string; name: string }[] {
  const { sourceLang, targetLang } = parseSlug(slug)

  if (!sourceLang || !targetLang) {
    return []
  }

  const alternates: { code: string; name: string }[] = []

  // Add source language alternate
  if (sourceLang) {
    alternates.push({
      code: sourceLang.value,
      name: sourceLang.label,
    })
  }

  // Add target language alternate
  if (targetLang) {
    alternates.push({
      code: targetLang.value,
      name: targetLang.label,
    })
  }

  // Add common alternates (English, Spanish, French, German, etc.)
  const commonLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh-CN', 'ar', 'hi']
  commonLanguages.forEach(code => {
    if (!alternates.some(a => a.code === code)) {
      const lang = languages.find(l => l.value === code)
      if (lang) {
        alternates.push({ code, name: lang.label })
      }
    }
  })

  return alternates
}
