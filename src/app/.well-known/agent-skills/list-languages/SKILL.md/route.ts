import { NextResponse } from 'next/server'

export const SKILL_CONTENT = `# list-languages

Return the full list of supported translation languages, optionally filtered by name.

## Type

openapi

## Endpoint

GET https://nagritranslate.com/api/languages

## Query Parameters

| Parameter | Type    | Required | Default | Description                          |
|-----------|---------|----------|---------|--------------------------------------|
| q         | string  | No       | —       | Filter languages by name substring   |
| limit     | integer | No       | 50      | Maximum number of results to return  |

## Output Schema

\`\`\`json
{
  "languages": [
    { "value": "fr", "label": "French" },
    { "value": "es", "label": "Spanish" }
  ],
  "meta": {
    "total": 248,
    "returned": 2,
    "hasMore": true
  }
}
\`\`\`

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
