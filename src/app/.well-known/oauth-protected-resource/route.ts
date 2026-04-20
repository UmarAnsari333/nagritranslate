import { NextResponse } from 'next/server'

const SITE_URL = 'https://nagritranslate.com'

/**
 * RFC 9728 — OAuth 2.0 Protected Resource Metadata
 * https://www.rfc-editor.org/rfc/rfc9728
 *
 * All Nagri Translate APIs are publicly accessible without authentication.
 * This document allows AI agents to programmatically discover auth requirements
 * for this resource server and find the issuer if tokens are ever needed.
 */
const metadata = {
  // REQUIRED — canonical identifier for this resource server
  resource: SITE_URL,

  // Authorization server(s) that can issue tokens for this resource.
  // We point to our own issuer; it advertises grant_types_supported: []
  // which signals to agents that no token is actually required.
  authorization_servers: [`${SITE_URL}/.well-known/oauth-authorization-server`],

  // JWKS for verifying tokens issued to this resource (empty — no tokens used)
  jwks_uri: `${SITE_URL}/.well-known/jwks.json`,

  // Scopes this resource recognises — none, because APIs are public
  scopes_supported: [],

  // Bearer token methods supported
  bearer_methods_supported: ['none'],

  // Resource documentation
  resource_documentation: SITE_URL,
  resource_policy_uri: `${SITE_URL}/terms`,

  // Service discovery
  api_catalog: `${SITE_URL}/.well-known/api-catalog`,

  // Non-standard extension fields to make public-API intent explicit
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
