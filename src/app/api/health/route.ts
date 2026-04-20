import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'nagritranslate',
      timestamp: new Date().toISOString(),
      apis: ['/api/translate', '/api/languages', '/api/tts'],
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  )
}
