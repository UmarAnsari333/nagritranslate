import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

const spec = {
  openapi: '3.1.0',
  info: {
    title: 'Nagri Translate API',
    version: '1.0.0',
    description:
      'Free AI-powered translation API supporting 248+ languages. ' +
      'Translate text, list available languages, and generate text-to-speech audio.',
    contact: {
      url: SITE_URL,
    },
    license: {
      name: 'Free to use',
      url: `${SITE_URL}/terms`,
    },
  },
  servers: [{ url: SITE_URL, description: 'Production' }],
  paths: {
    '/api/translate': {
      post: {
        operationId: 'translateText',
        summary: 'Translate text between languages',
        description:
          'Translates up to 5,000 characters of text from one language to another. ' +
          'Pass language names in English (e.g. "Spanish", "Japanese").',
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
                    translatedText: {
                      type: 'string',
                      example: 'Hola, ¿cómo estás?',
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Missing or invalid parameters',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Translation failed',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/api/languages': {
      get: {
        operationId: 'listLanguages',
        summary: 'List supported languages',
        description: 'Returns the full list of 248+ supported languages, optionally filtered by search query.',
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
            description: 'Maximum number of results to return (default 50).',
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
        description:
          'Returns an MP3 audio stream of the provided text spoken aloud. ' +
          'Maximum 200 characters per request.',
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
          '502': {
            description: 'TTS upstream error',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
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

export async function GET() {
  return NextResponse.json(spec, {
    headers: {
      'Content-Type': 'application/openapi+json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
