import { NextResponse } from 'next/server'

export const SKILL_CONTENT = `# mcp-server

Connect to Nagri Translate via the Model Context Protocol (MCP) over Streamable HTTP transport.

## Type

mcp

## Transport

- Protocol: Streamable HTTP (MCP 2025-03-26)
- Endpoint: POST https://nagritranslate.com/api/mcp

## Tools Exposed

| Tool              | Description                                              |
|-------------------|----------------------------------------------------------|
| translate         | Translate text between 248+ languages (up to 5,000 chars) |
| list_languages    | List supported languages, optionally filtered by name    |
| text_to_speech    | Get a TTS audio URL for text (max 200 chars)             |

## Server Card

https://nagritranslate.com/.well-known/mcp/server-card.json

## Authentication

None. Free to use with no account required.
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
