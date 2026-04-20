import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

/**
 * MCP Server Card — SEP-1649
 * https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 *
 * Describes the Nagri Translate MCP-compatible HTTP transport so AI agents
 * can discover available tools, authentication requirements, and how to connect.
 */
const serverCard = {
  schema_version: '1.0',

  server_info: {
    name: 'Nagri Translate',
    version: '1.0.0',
    description:
      'Free AI-powered translation service supporting 248+ languages. ' +
      'Provides translation, language listing, and text-to-speech tools.',
    homepage: SITE_URL,
    contact: SITE_URL,
    license: 'Free to use',
  },

  // Streamable HTTP transport (MCP 2025-03-26 spec)
  transport: {
    type: 'http',
    url: `${SITE_URL}/api/mcp`,
  },

  // MCP capability flags
  capabilities: {
    tools: true,
    resources: false,
    prompts: false,
    logging: false,
    experimental: {},
  },

  // Tools exposed over MCP
  tools: [
    {
      name: 'translate',
      description:
        'Translate text from one language to another. Supports 248+ languages, up to 5,000 characters.',
      input_schema: {
        type: 'object',
        required: ['text', 'sourceLang', 'targetLang'],
        properties: {
          text: { type: 'string', maxLength: 5000, description: 'Text to translate.' },
          sourceLang: { type: 'string', description: 'Source language name in English (e.g. "English").' },
          targetLang: { type: 'string', description: 'Target language name in English (e.g. "Spanish").' },
        },
      },
    },
    {
      name: 'list_languages',
      description: 'Return the full list of 248+ supported languages, optionally filtered by name.',
      input_schema: {
        type: 'object',
        properties: {
          q: { type: 'string', description: 'Filter languages by name.' },
          limit: { type: 'integer', default: 50, description: 'Maximum number of results to return.' },
        },
      },
    },
    {
      name: 'text_to_speech',
      description: 'Convert text to speech and return an MP3 audio stream. Maximum 200 characters.',
      input_schema: {
        type: 'object',
        required: ['text'],
        properties: {
          text: { type: 'string', maxLength: 200, description: 'Text to synthesise.' },
        },
      },
    },
  ],

  // Authentication — all tools are publicly accessible
  authentication: {
    required: false,
    schemes: [],
  },

  // Related discovery documents
  links: {
    openapi_spec: `${SITE_URL}/api/openapi`,
    api_catalog: `${SITE_URL}/.well-known/api-catalog`,
    oauth_protected_resource: `${SITE_URL}/.well-known/oauth-protected-resource`,
    health: `${SITE_URL}/api/health`,
  },
}

export async function GET() {
  return NextResponse.json(serverCard, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
