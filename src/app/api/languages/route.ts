import { NextResponse } from 'next/server'
import { languages } from '@/lib/languages'

/**
 * GET /api/languages
 * Returns all available languages for the translation app
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('q')
  const limit = Number(searchParams.get('limit')) || 50

  try {
    // Filter by search if provided
    let filteredLanguages = languages

    if (search) {
      const searchLower = search.toLowerCase()
      filteredLanguages = languages.filter(lang =>
        lang.label.toLowerCase().includes(searchLower) ||
        lang.value.toLowerCase().includes(searchLower)
      )
    }

    // Limit results
    const limitedLanguages = filteredLanguages.slice(0, limit)

    // Group by region/family
    const grouped = {
      popular: limitedLanguages.slice(0, 10),
      european: limitedLanguages.filter(l =>
        ['de', 'fr', 'es', 'it', 'pt', 'nl', 'pl'].includes(l.value)
      ),
      asian: limitedLanguages.filter(l =>
        ['zh', 'ja', 'ko', 'hi', 'ar', 'th', 'vi'].includes(l.value)
      ),
      other: limitedLanguages.filter(l =>
        !['de', 'fr', 'es', 'it', 'pt', 'nl', 'pl', 'zh', 'ja', 'ko', 'hi', 'ar', 'th', 'vi', 'en'].includes(l.value)
      ),
    }

    return NextResponse.json({
      languages: limitedLanguages,
      grouped,
      meta: {
        total: languages.length,
        returned: limitedLanguages.length,
        hasMore: filteredLanguages.length > limit,
      },
    }, {
      headers: {
        'Cache-Control': 'public, s-max-age=86400', // Cache for 1 day
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch languages' },
      { status: 500 }
    )
  }
}

/**
 * Language data structure for type safety
 */
export interface LanguageResponse {
  languages: Array<{
    value: string
    label: string
  }>
  grouped: {
    popular: Array<{ value: string; label: string }>
    european: Array<{ value: string; label: string }>
    asian: Array<{ value: string; label: string }>
    other: Array<{ value: string; label: string }>
  }
  meta: {
    total: number
    returned: number
    hasMore: boolean
  }
}
