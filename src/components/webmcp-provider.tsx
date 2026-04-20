'use client'

import { useEffect } from 'react'

const SITE_URL = 'https://nagritranslate.com'

type ModelContextTool = {
  name: string
  description: string
  inputSchema?: object
  execute: (input: Record<string, unknown>) => Promise<unknown>
}

type ModelContextRegisterToolOptions = {
  signal?: AbortSignal
}

type ModelContextAPI = {
  registerTool: (tool: ModelContextTool, options?: ModelContextRegisterToolOptions) => void
}

/**
 * WebMCP — navigator.modelContext.registerTool()
 * https://webmachinelearning.github.io/webmcp/
 * https://developer.chrome.com/blog/webmcp-epp
 *
 * Registers in-browser tool definitions so AI agents running inside the
 * browser (via the WebMCP extension/built-in) can call translation,
 * language-listing, and TTS without leaving the page.
 */
export function WebMCPProvider() {
  useEffect(() => {
    const nav = navigator as Navigator & { modelContext?: ModelContextAPI }

    if (!nav.modelContext?.registerTool) return

    const controller = new AbortController()
    const { signal } = controller

    // ── translate ────────────────────────────────────────────────────────────
    nav.modelContext.registerTool(
      {
        name: 'translate',
        description:
          'Translate up to 5,000 characters of text from one language to another. ' +
          'Pass language names in English (e.g. "Spanish", "Japanese").',
        inputSchema: {
          type: 'object',
          required: ['text', 'sourceLang', 'targetLang'],
          properties: {
            text: {
              type: 'string',
              maxLength: 5000,
              description: 'The text to translate.',
            },
            sourceLang: {
              type: 'string',
              description: 'Source language name in English.',
            },
            targetLang: {
              type: 'string',
              description: 'Target language name in English.',
            },
          },
        },
        execute: async (args) => {
          const res = await fetch(`${SITE_URL}/api/translate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args),
          })
          const data = await res.json()
          if (!res.ok) throw new Error(data.error ?? 'Translation failed')
          return data.translatedText ?? data.translation
        },
      },
      { signal },
    )

    // ── list_languages ───────────────────────────────────────────────────────
    nav.modelContext.registerTool(
      {
        name: 'list_languages',
        description:
          'Return the full list of 248+ supported languages, optionally filtered by name.',
        inputSchema: {
          type: 'object',
          properties: {
            q: {
              type: 'string',
              description: 'Filter languages by name substring.',
            },
            limit: {
              type: 'integer',
              default: 50,
              description: 'Maximum number of results to return.',
            },
          },
        },
        execute: async (args) => {
          const params = new URLSearchParams()
          if (args.q) params.set('q', String(args.q))
          if (args.limit != null) params.set('limit', String(args.limit))
          const res = await fetch(`${SITE_URL}/api/languages?${params}`)
          return res.json()
        },
      },
      { signal },
    )

    // ── text_to_speech ───────────────────────────────────────────────────────
    nav.modelContext.registerTool(
      {
        name: 'text_to_speech',
        description:
          'Get a URL to an MP3 audio stream of the provided text spoken aloud. ' +
          'Maximum 200 characters.',
        inputSchema: {
          type: 'object',
          required: ['text'],
          properties: {
            text: {
              type: 'string',
              maxLength: 200,
              description: 'Text to synthesise.',
            },
          },
        },
        execute: async (args) => {
          const url = `${SITE_URL}/api/tts?text=${encodeURIComponent(String(args.text))}`
          return { audioUrl: url }
        },
      },
      { signal },
    )

    return () => controller.abort()
  }, [])

  return null
}
