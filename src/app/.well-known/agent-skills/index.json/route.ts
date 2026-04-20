import { createHash } from 'crypto'
import { NextResponse } from 'next/server'

import { SKILL_CONTENT as TRANSLATE_SKILL } from '../translate/SKILL.md/route'
import { SKILL_CONTENT as LIST_LANGUAGES_SKILL } from '../list-languages/SKILL.md/route'
import { SKILL_CONTENT as TTS_SKILL } from '../text-to-speech/SKILL.md/route'
import { SKILL_CONTENT as MCP_SKILL } from '../mcp-server/SKILL.md/route'

const SITE_URL = 'https://nagritranslate.com'

function sha256(content: string): string {
  return createHash('sha256').update(content, 'utf8').digest('hex')
}

/**
 * Agent Skills Discovery RFC v0.2.0
 * https://github.com/cloudflare/agent-skills-discovery-rfc
 */
export async function GET() {
  const index = {
    $schema: 'https://agentskills.io/schemas/index/v0.2.0.json',
    skills: [
      {
        name: 'translate',
        type: 'openapi',
        description: 'Translate text between 248+ languages using AI (up to 5,000 characters).',
        url: `${SITE_URL}/.well-known/agent-skills/translate/SKILL.md`,
        sha256: sha256(TRANSLATE_SKILL),
      },
      {
        name: 'list-languages',
        type: 'openapi',
        description: 'List all 248+ supported languages, optionally filtered by name.',
        url: `${SITE_URL}/.well-known/agent-skills/list-languages/SKILL.md`,
        sha256: sha256(LIST_LANGUAGES_SKILL),
      },
      {
        name: 'text-to-speech',
        type: 'openapi',
        description: 'Convert text to MP3 speech audio (up to 200 characters).',
        url: `${SITE_URL}/.well-known/agent-skills/text-to-speech/SKILL.md`,
        sha256: sha256(TTS_SKILL),
      },
      {
        name: 'mcp-server',
        type: 'mcp',
        description:
          'Full MCP server over Streamable HTTP exposing translate, list_languages, and text_to_speech tools.',
        url: `${SITE_URL}/.well-known/agent-skills/mcp-server/SKILL.md`,
        sha256: sha256(MCP_SKILL),
      },
    ],
  }

  return NextResponse.json(index, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
