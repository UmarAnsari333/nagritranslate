import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

/**
 * OpenID Connect Discovery 1.0
 * https://openid.net/specs/openid-connect-discovery-1_0.html
 *
 * All Nagri Translate APIs are publicly accessible without authentication.
 * This document allows OIDC-aware AI agents to programmatically discover
 * that no credentials are required.
 */
const configuration = {
  issuer: SITE_URL,

  // No authorization or token endpoint — APIs are fully public.
  // Per spec these fields are required for a full OIDC provider; we omit them
  // intentionally to signal that no OAuth flow exists.

  jwks_uri: `${SITE_URL}/.well-known/jwks.json`,

  scopes_supported: ['openid'],
  response_types_supported: [],
  grant_types_supported: [],
  subject_types_supported: ['public'],
  id_token_signing_alg_values_supported: ['RS256'],
  token_endpoint_auth_methods_supported: ['none'],
  claims_supported: ['sub', 'iss'],

  // Service discovery links
  service_documentation: SITE_URL,
  api_catalog: `${SITE_URL}/.well-known/api-catalog`,
  op_policy_uri: `${SITE_URL}/terms`,

  // Indicate public API access (non-standard extension fields)
  'x-public-apis': [
    `${SITE_URL}/api/translate`,
    `${SITE_URL}/api/languages`,
    `${SITE_URL}/api/tts`,
    `${SITE_URL}/api/health`,
  ],
  'x-auth-required': false,
}

export async function GET() {
  return NextResponse.json(configuration, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
