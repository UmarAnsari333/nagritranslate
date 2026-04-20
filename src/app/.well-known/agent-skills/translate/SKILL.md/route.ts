import { NextResponse } from 'next/server'

export const SKILL_CONTENT = `# translate

Translate text between 248+ languages using AI.

## Type

openapi

## Endpoint

POST https://nagritranslate.com/api/translate

## Input Schema

\`\`\`json
{
  "text": "Hello, world!",
  "sourceLang": "English",
  "targetLang": "Spanish"
}
\`\`\`

## Output Schema

\`\`\`json
{
  "translatedText": "¡Hola, mundo!"
}
\`\`\`

## Constraints

- Maximum 5,000 characters per request
- Language names must be provided in English (e.g. "French", "Japanese")

## Authentication

None. Free to use with no account required.

## OpenAPI Spec

https://nagritranslate.com/api/openapi
`

export async function GET() {
  return new NextResponse(SKILL_CONTENT, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
