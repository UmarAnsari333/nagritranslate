import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://nagritranslate.com'

function getMarkdown(path: string): { body: string; title: string } {
  // ── ai-translate/[slug] pages ──────────────────────────────────────────
  const translateMatch = path.match(/^\/ai-translate\/(.+)$/)
  if (translateMatch) {
    const slug = translateMatch[1]
    // "english-to-spanish" → ["english", "to", "spanish"]
    const parts = slug.replace(/-to-/, ' to ').split(' ')
    const source = parts[0] ?? ''
    const target = parts[2] ?? ''
    const sourceLabel = source.charAt(0).toUpperCase() + source.slice(1)
    const targetLabel = target
      ? target.charAt(0).toUpperCase() + target.slice(1)
      : 'Target'
    const title = `${sourceLabel} to ${targetLabel} Translator — Nagri Translate`
    const body = `# ${title}

Free AI-powered ${sourceLabel} to ${targetLabel} translation. No sign-up required.

## Features

- Instant AI translation (up to 5,000 characters)
- Voice input (speak ${sourceLabel}, get ${targetLabel})
- Document upload (DOCX, TXT)
- Text-to-speech for ${targetLabel} output
- 248+ languages supported
- Translation history saved locally

## Use this translator

Visit: ${SITE_URL}/ai-translate/${slug}

## API

POST ${SITE_URL}/api/translate

\`\`\`json
{
  "text": "Hello, world!",
  "sourceLang": "${sourceLabel}",
  "targetLang": "${targetLabel}"
}
\`\`\`

## About

Nagri Translate provides free, accurate AI translation powered by large language models.
All translations are processed securely. No account required.

[← Back to homepage](${SITE_URL})
`
    return { title, body }
  }

  // ── tools pages ────────────────────────────────────────────────────────
  const toolMatch = path.match(/^\/tools\/(.+)$/)
  if (toolMatch) {
    const toolSlug = toolMatch[1]
    const toolName = toolSlug
      .split('-')
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    const title = `${toolName} — Nagri Translate`
    const body = `# ${title}

Free online ${toolName.toLowerCase()} tool. No sign-up required.

Visit: ${SITE_URL}/tools/${toolSlug}

[← Back to homepage](${SITE_URL})
`
    return { title, body }
  }

  // ── Homepage (default) ─────────────────────────────────────────────────
  const title = 'Nagri Translate — Free AI Language Translator'
  const body = `# Nagri Translate

Free AI-powered translator supporting 248+ languages. Instant, accurate, no sign-up required.

## What We Offer

- **AI Translation** — Translate text between 248+ languages instantly
- **Voice Input** — Speak and get real-time translation
- **Document Upload** — Translate DOCX and TXT files
- **Text-to-Speech** — Hear the translated text aloud
- **Text Tools** — Fancy text, font generators, and Unicode tools
- **Privacy First** — History saved locally, never on our servers

## Popular Translation Pairs

- [English to Spanish](${SITE_URL}/ai-translate/english-to-spanish)
- [English to French](${SITE_URL}/ai-translate/english-to-french)
- [English to German](${SITE_URL}/ai-translate/english-to-german)
- [English to Chinese](${SITE_URL}/ai-translate/english-to-chinese)
- [English to Japanese](${SITE_URL}/ai-translate/english-to-japanese)
- [English to Arabic](${SITE_URL}/ai-translate/english-to-arabic)
- [Spanish to English](${SITE_URL}/ai-translate/spanish-to-english)
- [French to English](${SITE_URL}/ai-translate/french-to-english)

## Translation API

**Endpoint:** POST \`${SITE_URL}/api/translate\`

**Request:**
\`\`\`json
{
  "text": "Hello, how are you?",
  "sourceLang": "English",
  "targetLang": "Spanish"
}
\`\`\`

**Response:**
\`\`\`json
{
  "translatedText": "Hola, ¿cómo estás?"
}
\`\`\`

## Resources

- [Sitemap](${SITE_URL}/sitemap.xml)
- [All Languages](${SITE_URL}/ai-translate)
- [Text Tools](${SITE_URL}/tools)
- [API Catalog](${SITE_URL}/.well-known/api-catalog)
- [OpenAPI Spec](${SITE_URL}/api/openapi)
`
  return { title, body }
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

export async function GET(request: NextRequest) {
  try {
    const path = request.nextUrl.searchParams.get('path') ?? '/'
    const { body, title } = getMarkdown(path)
    const tokenEstimate = Math.ceil(body.split(/\s+/).length * 1.3)

    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'X-Markdown-Tokens': String(tokenEstimate),
        'X-Content-Title': encodeURIComponent(title),
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=3600',
        ...CORS_HEADERS,
      },
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Internal error'
    return new NextResponse(`# Error\n\n${msg}\n`, {
      status: 500,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        ...CORS_HEADERS,
      },
    })
  }
}
