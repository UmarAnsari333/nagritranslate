import { languages, slugifyLanguage } from '@/lib/languages'
import { NextResponse } from 'next/server'

const BASE_URL = 'https://nagritranslate.com'

// ── Per-language sitemap route ────────────────────────────────────────────────
// URL pattern: /lang-sitemap/[slug].xml
// e.g. /lang-sitemap/ilocano.xml → all Ilocano ↔ every other language pairs
//
// To add a new language: just link to /lang-sitemap/[slugified-label].xml
// in your sitemap index. No new files needed.

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  // Strip .xml extension if present (URL is /lang-sitemap/ilocano.xml)
  const cleanSlug = slug.replace(/\.xml$/, '')

  // Match slug to a language label (e.g. 'ilocano' → 'Ilocano')
  const langEntry = languages.find(
    (l) => l.value !== 'auto' && slugifyLanguage(l.label) === cleanSlug
  )

  if (!langEntry) {
    return new NextResponse('Language not found', { status: 404 })
  }

  const lang = langEntry.label
  const others = languages.filter((l) => l.value !== 'auto' && l.label !== lang)

  // Only generate outgoing pairs: [lang]-to-[other]
  // The reverse ([other]-to-[lang]) is covered by each other language's own sitemap.
  // This ensures every pair appears in exactly one sitemap — no duplicates.
  const urls: string[] = others.map(
    (other) =>
      `${BASE_URL}/ai-translate/${slugifyLanguage(lang)}-to-${slugifyLanguage(other.label)}`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.65</priority>\n  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
