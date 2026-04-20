'use client'

import { useEffect } from 'react'

const SITE_URL = 'https://nagritranslate.com'

/**
 * WebMCP — navigator.modelContext.provideContext()
 * https://webmachinelearning.github.io/webmcp/
 * https://developer.chrome.com/blog/webmcp-epp
 *
 * Registers in-browser tool definitions so AI agents running inside the
 * browser (via the WebMCP extension/built-in) can call translation,
 * language-listing, and TTS without leaving the page.
 */
export function WebMCPProvider() {
  useEffect(() => {
    const nav = navigator as Navigator & {
      modelContext?: {
        provideContext: (ctx: unknown) => void
      }
    }

    if (!nav.modelContext?.provideContext) return

    nav.modelContext.provideContext({
      name: 'Nagri Translate',
      description:
        'Free AI-powered translation service. Translate text between 248+ languages, ' +
        'list available languages, and convert text to speech.',

      tools: [
        // ── translate ──────────────────────────────────────────────────────
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
          execute: async (args: { text: string; sourceLang: string; targetLang: string }) => {
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

        // ── list_languages ─────────────────────────────────────────────────
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
          execute: async (args: { q?: string; limit?: number }) => {
            const params = new URLSearchParams()
            if (args.q) params.set('q', args.q)
            if (args.limit != null) params.set('limit', String(args.limit))
            const res = await fetch(`${SITE_URL}/api/languages?${params}`)
            return res.json()
          },
        },

        // ── text_to_speech ─────────────────────────────────────────────────
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
          execute: async (args: { text: string }) => {
            const url = `${SITE_URL}/api/tts?text=${encodeURIComponent(args.text)}`
            // Return the URL so the agent can fetch or present the audio
            return { audioUrl: url }
          },
        },
      ],
    })
  }, [])

  return null
}
