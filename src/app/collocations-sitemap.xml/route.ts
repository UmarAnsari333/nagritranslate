import { NextResponse } from 'next/server'
import { ANTONYM_WORDS } from '@/data/antonym-words'

const BASE_URL = 'https://nagritranslate.com'

export async function GET() {
  const landingUrl = `  <url>
    <loc>${BASE_URL}/collocations</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`

  const wordUrls = ANTONYM_WORDS.map(
    (word) =>
      `  <url>
    <loc>${BASE_URL}/collocations/${encodeURIComponent(word)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  ).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${landingUrl}
${wordUrls}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
