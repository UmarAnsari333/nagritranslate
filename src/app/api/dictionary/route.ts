import { NextRequest, NextResponse } from 'next/server'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept, Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function GET(request: NextRequest) {
  const word = request.nextUrl.searchParams.get('word')?.toLowerCase().trim()

  if (!word) {
    return NextResponse.json({ error: 'word query parameter is required' }, { status: 400, headers: CORS })
  }

  const upstream = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
    { next: { revalidate: 86400 } },
  )

  if (upstream.status === 404) {
    return NextResponse.json(
      { error: `No definition found for "${word}"` },
      { status: 404, headers: CORS },
    )
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: 'Dictionary service unavailable' },
      { status: 502, headers: CORS },
    )
  }

  const data = await upstream.json()

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      ...CORS,
    },
  })
}
