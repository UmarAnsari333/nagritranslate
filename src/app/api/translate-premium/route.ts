import { NextRequest, NextResponse } from 'next/server'

/**
 * x402 payment-gated premium translate endpoint.
 * https://x402.org / https://github.com/coinbase/x402
 *
 * Returns HTTP 402 with x402 payment requirements when no valid
 * X-PAYMENT header is present. AI agents that support x402 can
 * fulfil the payment and retry automatically.
 *
 * Network: Base (EVM chain)
 * Asset:   USDC (ERC-20, 6 decimals)
 * Amount:  0.001 USDC per request (1000 units at 6 decimals)
 * Wallet:  set PREMIUM_WALLET_ADDRESS env var (falls back to zero address)
 */

const WALLET =
  process.env.PREMIUM_WALLET_ADDRESS ?? '0x0000000000000000000000000000000000000000'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Accept, Content-Type, X-PAYMENT',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function POST(request: NextRequest) {
  const payment = request.headers.get('X-PAYMENT')

  // Without a valid payment token, return 402 with x402 requirements.
  if (!payment) {
    const paymentRequired = {
      version: '0.1',
      accepts: [
        {
          scheme: 'exact',
          network: 'base',
          maxAmountRequired: '1000',
          asset: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
          extra: {
            name: 'USDC',
            decimals: 6,
            payTo: WALLET,
            description: 'Premium translation — 0.001 USDC per request',
          },
        },
      ],
      error: 'X-PAYMENT header required. Include a valid x402 payment token.',
    }

    return NextResponse.json(paymentRequired, {
      status: 402,
      headers: {
        'Content-Type': 'application/json',
        'X-Payment-Required': 'x402',
        ...CORS,
      },
    })
  }

  // Payment header present — perform the translation.
  try {
    const body = await request.json()
    const { sourceLang, targetLang, text } = body

    if (!text?.trim() || !sourceLang || !targetLang) {
      return NextResponse.json(
        { error: 'text, sourceLang, and targetLang are required' },
        { status: 400, headers: CORS },
      )
    }

    const url =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
      encodeURIComponent(sourceLang) +
      '&tl=' +
      encodeURIComponent(targetLang) +
      '&dt=t&q=' +
      encodeURIComponent(text)

    const res = await fetch(url)
    const data = await res.json()
    const chunks: string[] = []
    for (const row of data[0] ?? []) {
      if (row[0]) chunks.push(row[0])
    }

    return NextResponse.json(
      { translatedText: chunks.join('') },
      { headers: { 'Content-Type': 'application/json', ...CORS } },
    )
  } catch {
    return NextResponse.json(
      { error: 'Translation failed' },
      { status: 500, headers: CORS },
    )
  }
}
