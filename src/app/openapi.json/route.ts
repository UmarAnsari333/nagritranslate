import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

/**
 * Root-level OpenAPI spec for MPP (Machine Payment Protocol) discovery.
 * https://mpp.dev / https://paymentauth.org/draft-payment-discovery-00.txt
 *
 * All Nagri Translate APIs are free; x-payment-info is omitted on public
 * endpoints. x-service-info declares the service category for MPP indexing.
 */
const spec = {
  openapi: '3.1.0',
  info: {
    title: 'Nagri Translate API',
    version: '1.0.0',
    description:
      'Free AI-powered translation API supporting 248+ languages. ' +
      'Translate text, list available languages, and generate text-to-speech audio. ' +
      'No authentication required.',
    contact: { url: SITE_URL },
    license: { name: 'Free to use', url: `${SITE_URL}/terms` },
  },
  'x-service-info': {
    category: 'language-services',
    subcategory: 'translation',
    pricing: 'free',
    provider: 'Nagri Translate',
    homepage: SITE_URL,
  },
  servers: [{ url: SITE_URL, description: 'Production' }],
  paths: {
    '/api/translate': {
      post: {
        operationId: 'translateText',
        summary: 'Translate text between languages',
        description:
          'Translates up to 5,000 characters from one language to another. ' +
          'Pass language names in English (e.g. "Spanish", "Japanese"). Free, no auth.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['text', 'sourceLang', 'targetLang'],
                properties: {
                  text: {
                    type: 'string',
                    maxLength: 5000,
                    description: 'The text to translate.',
                    example: 'Hello, how are you?',
                  },
                  sourceLang: {
                    type: 'string',
                    description: 'Source language name in English.',
                    example: 'English',
                  },
                  targetLang: {
                    type: 'string',
                    description: 'Target language name in English.',
                    example: 'Spanish',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful translation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    translatedText: { type: 'string', example: 'Hola, ¿cómo estás?' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Missing or invalid parameters',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
          '500': {
            description: 'Translation failed',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/api/languages': {
      get: {
        operationId: 'listLanguages',
        summary: 'List supported languages',
        description: 'Returns the full list of 248+ supported languages, optionally filtered.',
        parameters: [
          {
            name: 'q',
            in: 'query',
            description: 'Filter languages by name.',
            schema: { type: 'string', example: 'french' },
          },
          {
            name: 'limit',
            in: 'query',
            description: 'Maximum results to return (default 50).',
            schema: { type: 'integer', default: 50, example: 20 },
          },
        ],
        responses: {
          '200': {
            description: 'List of languages',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    languages: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          value: { type: 'string', example: 'fr' },
                          label: { type: 'string', example: 'French' },
                        },
                      },
                    },
                    meta: {
                      type: 'object',
                      properties: {
                        total: { type: 'integer', example: 248 },
                        returned: { type: 'integer', example: 50 },
                        hasMore: { type: 'boolean', example: true },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/tts': {
      get: {
        operationId: 'textToSpeech',
        summary: 'Convert text to speech audio',
        description: 'Returns an MP3 audio stream. Maximum 200 characters per request.',
        parameters: [
          {
            name: 'text',
            in: 'query',
            required: true,
            description: 'Text to synthesise (max 200 characters).',
            schema: { type: 'string', maxLength: 200, example: 'Hola, ¿cómo estás?' },
          },
        ],
        responses: {
          '200': {
            description: 'MP3 audio stream',
            content: { 'audio/mpeg': { schema: { type: 'string', format: 'binary' } } },
          },
          '400': {
            description: 'No text provided',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
          },
        },
      },
    },
    '/api/translate-premium': {
      post: {
        operationId: 'translateTextPremium',
        summary: 'Translate text (premium, x402)',
        description:
          'Same as /api/translate but payment-gated via the x402 protocol. ' +
          'Returns HTTP 402 with payment requirements when no X-PAYMENT header is provided. ' +
          'AI agents that support x402 can fulfil payment and retry automatically.',
        'x-payment-info': {
          intent: 'charge',
          method: 'tempo',
          amount: '0.001',
          currency: 'USDC',
          description: 'Premium translation — 0.001 USDC per request',
        },
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['text', 'sourceLang', 'targetLang'],
                properties: {
                  text: { type: 'string', maxLength: 5000, example: 'Hello, how are you?' },
                  sourceLang: { type: 'string', example: 'English' },
                  targetLang: { type: 'string', example: 'Spanish' },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful translation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { translatedText: { type: 'string' } },
                },
              },
            },
          },
          '402': {
            description: 'Payment required — x402 payment details in response body',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    version: { type: 'string', example: '0.1' },
                    accepts: { type: 'array', items: { type: 'object' } },
                    error: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/health': {
      get: {
        operationId: 'healthCheck',
        summary: 'Service health check',
        responses: {
          '200': {
            description: 'Service is healthy',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'ok' },
                    service: { type: 'string', example: 'nagritranslate' },
                    timestamp: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Error: {
        type: 'object',
        properties: {
          error: { type: 'string', example: 'No text provided for translation' },
        },
      },
    },
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
  return NextResponse.json(spec, {
    headers: {
      'Content-Type': 'application/openapi+json',
      'Cache-Control': 'public, max-age=86400',
      ...CORS,
    },
  })
}
