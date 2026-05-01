import { NextResponse } from 'next/server'
import { slugifyLanguage } from '@/lib/languages'
import { PER_LANGUAGE_SITEMAPS } from '@/lib/lang-sitemaps'

const BASE_URL = 'https://nagritranslate.com'

// ── Sitemap Index ─────────────────────────────────────────────────────────────
// Submit ONLY this URL to Google Search Console:
//   https://nagritranslate.com/sitemap-index.xml
//
// To add a new language: add it to src/lib/lang-sitemaps.ts
// It will auto-appear here on next deploy — no GSC resubmission needed.

export async function GET() {
  const sitemaps: { loc: string }[] = [
    // Main sitemap (static pages, tools, educational content)
    { loc: `${BASE_URL}/sitemap.xml` },

    // Dictionary sitemap (~1,200 high-volume / low-difficulty English words)
    { loc: `${BASE_URL}/dictionary-sitemap.xml` },

    // Rhymes sitemap (1,900+ family-safe words with /rhymes/[word] pages)
    { loc: `${BASE_URL}/rhymes-sitemap.xml` },

    // Synonyms sitemap (1,900+ words with /synonyms/[word] pages)
    { loc: `${BASE_URL}/synonyms-sitemap.xml` },

    // Antonyms sitemap (1,900+ words with /antonyms/[word] pages)
    { loc: `${BASE_URL}/antonyms-sitemap.xml` },

    // One sitemap per language in PER_LANGUAGE_SITEMAPS
    ...PER_LANGUAGE_SITEMAPS.map((lang) => ({
      loc: `${BASE_URL}/lang-sitemap/${slugifyLanguage(lang)}.xml`,
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (s) => `  <sitemap>
    <loc>${s.loc}</loc>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
