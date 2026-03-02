import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration for SEO
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nagritranslate.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl.replace('https://', ''),
  }
}
