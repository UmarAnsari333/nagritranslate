import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

/**
 * Agentic Commerce Protocol (ACP) discovery document.
 * https://agenticcommerce.dev
 * https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/blob/main/rfcs/rfc.discovery.md
 */
const acpDoc = {
  protocol: {
    name: 'acp',
    version: '1.0.0',
  },
  api_base_url: `${SITE_URL}/api`,
  transports: ['https'],
  capabilities: {
    services: [
      {
        id: 'translate',
        name: 'AI Translation',
        description:
          'Translate text between 248+ languages using AI. ' +
          'Free, no authentication required. Up to 5,000 characters per request.',
        endpoint: `${SITE_URL}/api/translate`,
        method: 'POST',
      },
      {
        id: 'text-to-speech',
        name: 'Text to Speech',
        description: 'Convert text to MP3 audio. Free, no authentication required.',
        endpoint: `${SITE_URL}/api/tts`,
        method: 'GET',
      },
      {
        id: 'list-languages',
        name: 'Language List',
        description: 'List all 248+ supported languages with optional filtering.',
        endpoint: `${SITE_URL}/api/languages`,
        method: 'GET',
      },
    ],
  },
  discovery: {
    openapi: `${SITE_URL}/openapi.json`,
    api_catalog: `${SITE_URL}/.well-known/api-catalog`,
    health: `${SITE_URL}/api/health`,
  },
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept, Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function GET() {
  return NextResponse.json(acpDoc, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      ...CORS,
    },
  })
}
