const SITE_URL = 'https://nagritranslate.com'
const DATE_PUBLISHED = '2025-10-01'
const DATE_MODIFIED = '2026-04-02'

interface WebPageSchemaProps {
  path: string
  name: string
  description?: string
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ItemPage'
  datePublished?: string
  dateModified?: string
}

export function WebPageSchema({
  path,
  name,
  description,
  type = 'WebPage',
  datePublished = DATE_PUBLISHED,
  dateModified = DATE_MODIFIED,
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    url: `${SITE_URL}${path}`,
    name,
    ...(description ? { description } : {}),
    datePublished,
    dateModified,
    publisher: {
      '@type': 'Organization',
      name: 'Nagri Translate',
      url: SITE_URL,
    },
    inLanguage: 'en',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
