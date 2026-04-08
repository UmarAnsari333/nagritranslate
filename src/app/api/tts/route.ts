import { NextRequest, NextResponse } from 'next/server'

// Proxy Google Translate TTS so the client can get audio bytes without CORS issues.
// Max ~200 chars per request — callers must chunk longer text themselves.
export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('text') ?? ''
  if (!text.trim()) {
    return NextResponse.json({ error: 'No text provided' }, { status: 400 })
  }

  const url = new URL('https://translate.google.com/translate_tts')
  url.searchParams.set('ie', 'UTF-8')
  url.searchParams.set('q', text.slice(0, 200))
  url.searchParams.set('tl', 'en')
  url.searchParams.set('client', 'tw-ob')
  url.searchParams.set('ttsspeed', '0.9')

  try {
    const res = await fetch(url.toString(), {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Referer: 'https://translate.google.com/',
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'TTS upstream error' }, { status: 502 })
    }

    const buffer = await res.arrayBuffer()
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=60',
      },
    })
  } catch {
    return NextResponse.json({ error: 'TTS service unavailable' }, { status: 502 })
  }
}
