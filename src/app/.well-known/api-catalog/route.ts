import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

const catalog = {
  linkset: [
    {
      anchor: `${SITE_URL}/api/translate`,
      'service-desc': [
        { href: `${SITE_URL}/api/openapi`, type: 'application/openapi+json' },
      ],
      'service-doc': [{ href: `${SITE_URL}` }],
      status: [{ href: `${SITE_URL}/api/health` }],
    },
    {
      anchor: `${SITE_URL}/api/languages`,
      'service-desc': [
        { href: `${SITE_URL}/api/openapi`, type: 'application/openapi+json' },
      ],
      'service-doc': [{ href: `${SITE_URL}` }],
      status: [{ href: `${SITE_URL}/api/health` }],
    },
    {
      anchor: `${SITE_URL}/api/tts`,
      'service-desc': [
        { href: `${SITE_URL}/api/openapi`, type: 'application/openapi+json' },
      ],
      'service-doc': [{ href: `${SITE_URL}` }],
      status: [{ href: `${SITE_URL}/api/health` }],
    },
  ],
}

export async function GET() {
  return NextResponse.json(catalog, {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
