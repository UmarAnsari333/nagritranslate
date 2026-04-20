import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? ''

  // If the agent explicitly prefers text/markdown, serve the markdown variant
  if (accept.includes('text/markdown')) {
    const url = request.nextUrl.clone()
    const originalPath = url.pathname

    // Rewrite to the markdown route handler, passing the original path
    url.pathname = '/api/markdown'
    url.searchParams.set('path', originalPath)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  // Run on the homepage and any future paths that need markdown negotiation
  matcher: ['/', '/ai-translate/:path*', '/tools/:path*'],
}
