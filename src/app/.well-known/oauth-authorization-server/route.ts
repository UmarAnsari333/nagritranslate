import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

/**
 * RFC 8414 — OAuth 2.0 Authorization Server Metadata
 * https://www.rfc-editor.org/rfc/rfc8414
 *
 * All Nagri Translate APIs are publicly accessible without authentication.
 * This document allows AI agents to programmatically discover that no
 * credentials are required.
 */
const metadata = {
  issuer: SITE_URL,

  // No authorization or token endpoint — APIs are fully public.
  // Agents that discover this document should infer anonymous access is allowed.

  jwks_uri: `${SITE_URL}/.well-known/jwks.json`,

  // Scopes / grant types — empty because no OAuth flow is needed
  scopes_supported: ['openid'],
  response_types_supported: [],
  grant_types_supported: [],
  token_endpoint_auth_methods_supported: ['none'],

  // Service discovery links
  service_documentation: SITE_URL,
  api_catalog: `${SITE_URL}/.well-known/api-catalog`,

  // Indicate public API access
  'x-public-apis': [
    `${SITE_URL}/api/translate`,
    `${SITE_URL}/api/languages`,
    `${SITE_URL}/api/tts`,
    `${SITE_URL}/api/health`,
  ],
  'x-auth-required': false,
}

export async function GET() {
  return NextResponse.json(metadata, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
