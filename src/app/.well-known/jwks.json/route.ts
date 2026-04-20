import { NextResponse } from 'next/server'

/**
 * RFC 7517 — JSON Web Key Set
 * Empty key set — no tokens are issued because all APIs are public.
 */
export async function GET() {
  return NextResponse.json(
    { keys: [] },
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
}
