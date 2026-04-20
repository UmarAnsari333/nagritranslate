import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? ''

  // If the client explicitly prefers text/markdown, serve the markdown variant
  if (accept.includes('text/markdown')) {
    try {
      // Build a clean URL for the internal markdown handler.
      // Use new URL() instead of cloning nextUrl to avoid carrying
      // existing search params or triggering mutation edge cases.
      const markdownUrl = new URL('/api/markdown', request.url)
      markdownUrl.searchParams.set('path', request.nextUrl.pathname)
      return NextResponse.rewrite(markdownUrl)
    } catch {
      // On any URL construction error, fall through to normal rendering
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/ai-translate/:path*', '/tools/:path*'],
}
