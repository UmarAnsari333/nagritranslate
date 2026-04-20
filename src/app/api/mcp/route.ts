import { NextRequest, NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

// ── MCP JSON-RPC helpers ────────────────────────────────────────────────────

function rpcResult(id: unknown, result: unknown) {
  return { jsonrpc: '2.0', id, result }
}

function rpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: '2.0', id, error: { code, message } }
}

// ── Tool implementations ────────────────────────────────────────────────────

async function toolTranslate(args: Record<string, string>) {
  const { text, sourceLang, targetLang } = args
  if (!text || !sourceLang || !targetLang) {
    throw new Error('text, sourceLang, and targetLang are required')
  }
  const res = await fetch(`${SITE_URL}/api/translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, sourceLang, targetLang }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error ?? 'Translation failed')
  return [{ type: 'text', text: data.translatedText ?? data.translation }]
}

async function toolListLanguages(args: Record<string, string>) {
  const params = new URLSearchParams()
  if (args.q) params.set('q', args.q)
  if (args.limit) params.set('limit', args.limit)
  const res = await fetch(`${SITE_URL}/api/languages?${params}`)
  const data = await res.json()
  return [{ type: 'text', text: JSON.stringify(data, null, 2) }]
}

async function toolTextToSpeech(args: Record<string, string>) {
  if (!args.text) throw new Error('text is required')
  const url = `${SITE_URL}/api/tts?text=${encodeURIComponent(args.text)}`
  return [{ type: 'text', text: `Audio available at: ${url}` }]
}

// ── MCP method dispatch ─────────────────────────────────────────────────────

async function handleMethod(method: string, params: Record<string, unknown>, id: unknown) {
  switch (method) {
    case 'initialize':
      return rpcResult(id, {
        protocolVersion: '2025-03-26',
        serverInfo: { name: 'Nagri Translate', version: '1.0.0' },
        capabilities: { tools: {} },
      })

    case 'tools/list':
      return rpcResult(id, {
        tools: [
          {
            name: 'translate',
            description: 'Translate text between 248+ languages (up to 5,000 characters).',
            inputSchema: {
              type: 'object',
              required: ['text', 'sourceLang', 'targetLang'],
              properties: {
                text: { type: 'string', maxLength: 5000 },
                sourceLang: { type: 'string' },
                targetLang: { type: 'string' },
              },
            },
          },
          {
            name: 'list_languages',
            description: 'List supported languages, optionally filtered by name.',
            inputSchema: {
              type: 'object',
              properties: {
                q: { type: 'string' },
                limit: { type: 'integer', default: 50 },
              },
            },
          },
          {
            name: 'text_to_speech',
            description: 'Get a TTS audio URL for text (max 200 characters).',
            inputSchema: {
              type: 'object',
              required: ['text'],
              properties: {
                text: { type: 'string', maxLength: 200 },
              },
            },
          },
        ],
      })

    case 'tools/call': {
      const name = params.name as string
      const args = (params.arguments ?? {}) as Record<string, string>
      let content: unknown[]
      if (name === 'translate') content = await toolTranslate(args)
      else if (name === 'list_languages') content = await toolListLanguages(args)
      else if (name === 'text_to_speech') content = await toolTextToSpeech(args)
      else return rpcError(id, -32601, `Unknown tool: ${name}`)
      return rpcResult(id, { content })
    }

    case 'ping':
      return rpcResult(id, {})

    default:
      return rpcError(id, -32601, `Method not found: ${method}`)
  }
}

// ── Route handler ───────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(rpcError(null, -32700, 'Parse error'), { status: 400 })
  }

  const { method, params = {}, id } = body as {
    method: string
    params?: Record<string, unknown>
    id: unknown
  }

  try {
    const result = await handleMethod(method, params, id)
    return NextResponse.json(result, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Internal error'
    return NextResponse.json(rpcError(id, -32603, msg), { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
