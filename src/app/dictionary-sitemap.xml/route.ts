import { NextResponse } from 'next/server'
import { DICTIONARY_WORDS } from '@/data/dictionary-words'

const BASE_URL = 'https://nagritranslate.com'

export async function GET() {
  const urls = DICTIONARY_WORDS.map(
    (word) =>
      `  <url>
    <loc>${BASE_URL}/dictionary/${encodeURIComponent(word)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`,
  ).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
