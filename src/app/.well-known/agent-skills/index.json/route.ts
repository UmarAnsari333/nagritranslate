import { createHash } from 'crypto'
import { NextResponse } from 'next/server'

import { SKILL_CONTENT as TRANSLATE_SKILL } from '../translate/SKILL.md/route'
import { SKILL_CONTENT as LIST_LANGUAGES_SKILL } from '../list-languages/SKILL.md/route'
import { SKILL_CONTENT as TTS_SKILL } from '../text-to-speech/SKILL.md/route'
import { SKILL_CONTENT as MCP_SKILL } from '../mcp-server/SKILL.md/route'

const SITE_URL = 'https://nagritranslate.com'

function sha256hex(content: string): string {
  return createHash('sha256').update(content, 'utf8').digest('hex')
}

/**
 * Agent Skills Discovery RFC v0.2.0
 * https://github.com/cloudflare/agent-skills-discovery-rfc
 */
export async function GET() {
  const index = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: 'translate',
        type: 'skill-md',
        description: 'Translate text between 248+ languages using AI (up to 5,000 characters).',
        url: `${SITE_URL}/.well-known/agent-skills/translate/SKILL.md`,
        digest: `sha256:${sha256hex(TRANSLATE_SKILL)}`,
      },
      {
        name: 'list-languages',
        type: 'skill-md',
        description: 'List all 248+ supported languages, optionally filtered by name.',
        url: `${SITE_URL}/.well-known/agent-skills/list-languages/SKILL.md`,
        digest: `sha256:${sha256hex(LIST_LANGUAGES_SKILL)}`,
      },
      {
        name: 'text-to-speech',
        type: 'skill-md',
        description: 'Convert text to MP3 speech audio (up to 200 characters).',
        url: `${SITE_URL}/.well-known/agent-skills/text-to-speech/SKILL.md`,
        digest: `sha256:${sha256hex(TTS_SKILL)}`,
      },
      {
        name: 'mcp-server',
        type: 'skill-md',
        description:
          'Full MCP server over Streamable HTTP exposing translate, list_languages, and text_to_speech tools.',
        url: `${SITE_URL}/.well-known/agent-skills/mcp-server/SKILL.md`,
        digest: `sha256:${sha256hex(MCP_SKILL)}`,
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
