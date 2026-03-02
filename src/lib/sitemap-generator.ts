import { languages } from './languages'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Generate sitemap for translation pages
export function generateSitemap(baseUrl: string): string {
  const urls: SitemapUrl[] = []

  // Homepage
  urls.push({
    loc: baseUrl,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 1,
  })

  // Main translation page
  urls.push({
    loc: `${baseUrl}/ai-translate`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.9,
  })

  // About, Contact, Languages pages
  urls.push({
    loc: `${baseUrl}/about`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  })
  urls.push({
    loc: `${baseUrl}/contact`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  })
  urls.push({
    loc: `${baseUrl}/languages`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  })

  // Language translation pages (popular pairs)
  const popularPairs = [
    { from: 'english', to: 'spanish' },
    { from: 'english', to: 'french' },
    { from: 'english', to: 'german' },
    { from: 'english', to: 'chinese' },
    { from: 'english', to: 'japanese' },
    { from: 'english', to: 'korean' },
    { from: 'english', to: 'arabic' },
    { from: 'english', to: 'hindi' },
    { from: 'english', to: 'portuguese' },
    { from: 'english', to: 'russian' },
    { from: 'english', to: 'italian' },
    { from: 'english', to: 'dutch' },
    { from: 'english', to: 'turkish' },
    { from: 'english', to: 'urdu' },
    { from: 'english', to: 'vietnamese' },
    { from: 'english', to: 'thai' },
    { from: 'english', to: 'indonesian' },
    { from: 'spanish', to: 'english' },
    { from: 'french', to: 'english' },
    { from: 'german', to: 'english' },
    { from: 'chinese', to: 'english' },
    { from: 'japanese', to: 'english' },
    { from: 'korean', to: 'english' },
    { from: 'arabic', to: 'english' },
    { from: 'hindi', to: 'english' },
    { from: 'portuguese', to: 'english' },
    { from: 'russian', to: 'english' },
    { from: 'italian', to: 'english' },
    { from: 'dutch', to: 'english' },
    { from: 'turkish', to: 'english' },
    { from: 'urdu', to: 'english' },
    { from: 'vietnamese', to: 'english' },
    { from: 'thai', to: 'english' },
    { from: 'indonesian', to: 'english' },
  ]

  popularPairs.forEach((pair) => {
    urls.push({
      loc: `${baseUrl}/ai-translate/${pair.from}-to-${pair.to}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    })
  })

  // Individual language to English pages
  languages.forEach((lang) => {
    const slug = lang.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    urls.push({
      loc: `${baseUrl}/ai-translate/${slug}-to-english`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.6,
    })
  })

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

  return xml
}

// Generate sitemap index
export function generateSitemapIndex(baseUrl: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`
}
