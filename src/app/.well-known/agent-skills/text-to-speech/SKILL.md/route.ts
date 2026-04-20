import { NextResponse } from 'next/server'

export const SKILL_CONTENT = `# text-to-speech

Convert text into spoken MP3 audio in any supported language.

## Type

openapi

## Endpoint

GET https://nagritranslate.com/api/tts

## Query Parameters

| Parameter | Type   | Required | Description                     |
|-----------|--------|----------|---------------------------------|
| text      | string | Yes      | Text to synthesise (max 200 chars) |

## Output

Returns an \`audio/mpeg\` binary stream (MP3).

## Constraints

- Maximum 200 characters per request

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
