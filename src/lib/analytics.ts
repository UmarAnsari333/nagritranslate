/**
 * Simple Analytics Utility
 * Track user events for engagement measurement
 * Can be extended with Google Analytics, Plausible, or custom analytics
 */

export type AnalyticsEvent =
  | 'translation'
  | 'favorite_add'
  | 'favorite_remove'
  | 'copy_text'
  | 'copy_translation'
  | 'voice_input_start'
  | 'voice_input_complete'
  | 'text_to_speech'
  | 'document_upload'
  | 'language_pair_change'
  | 'daily_phrase_view'
  | 'share_click'
  | 'streak_update'

interface AnalyticsEventPayload {
  event: AnalyticsEvent
  properties?: Record<string, string | number | boolean>
}

/**
 * Track an analytics event
 * Uses console.log in development, can be extended with real analytics
 */
export function trackEvent(event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) {
  const payload: AnalyticsEventPayload = {
    event,
    properties: {
      timestamp: Date.now(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      ...properties,
    },
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', payload)
  }

  // Send to analytics endpoint if configured
  if (typeof window !== 'undefined') {
    sendToAnalytics(payload)
  }

  // Store events locally for offline-first approach
  storeEventLocally(payload)
}

/**
 * Send event to analytics API
 * Replace with your analytics provider (GA, Plausible, etc.)
 */
function sendToAnalytics(payload: AnalyticsEventPayload) {
  // Example: Send to your analytics API
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // }).catch(err => console.error('Analytics error:', err))
}

/**
 * Store events locally for offline-first approach
 */
function storeEventLocally(payload: AnalyticsEventPayload) {
  try {
    const STORAGE_KEY = 'analytics_events'
    const MAX_EVENTS = 100

    // Get existing events
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

    // Add new event
    const events = [...existing, payload]

    // Keep only recent events
    const trimmed = events.slice(-MAX_EVENTS)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))

    // Try to flush events
    flushEventsToServer(trimmed)
  } catch (err) {
    // Silent fail - don't break UX
  }
}

/**
 * Flush stored events to server
 */
async function flushEventsToServer(events: AnalyticsEventPayload[]) {
  // Send stored events in batch
  // This is a placeholder - implement your analytics endpoint
  try {
    // await fetch('/api/analytics/batch', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ events }),
    // })

    // Clear sent events
    // localStorage.setItem('analytics_events', '[]')
  } catch (err) {
    // Keep events for next retry
  }
}

/**
 * Track translation event
 */
export function trackTranslation(sourceLang: string, targetLang: string, charCount: number) {
  trackEvent('translation', {
    source_language: sourceLang,
    target_language: targetLang,
    character_count: charCount,
  })
}

/**
 * Track favorite add/remove
 */
export function trackFavorite(action: 'add' | 'remove', sourceLang: string, targetLang: string) {
  trackEvent(action === 'add' ? 'favorite_add' : 'favorite_remove', {
    source_language: sourceLang,
    target_language: targetLang,
  })
}

/**
 * Track copy event
 */
export function trackCopy(type: 'text' | 'translation', length: number) {
  trackEvent(type === 'text' ? 'copy_text' : 'copy_translation', {
    character_count: length,
  })
}

/**
 * Track voice input event
 */
export function trackVoiceInput(action: 'start' | 'complete', duration?: number) {
  trackEvent(
    action === 'start' ? 'voice_input_start' : 'voice_input_complete',
    {
      duration_ms: duration,
    }
  )
}

/**
 * Track TTS event
 */
export function trackTextToSpeech(language: string) {
  trackEvent('text_to_speech', {
    language,
  })
}

/**
 * Track document upload
 */
export function trackDocumentUpload(fileType: string, fileSize: number) {
  trackEvent('document_upload', {
    file_type: fileType,
    file_size: fileSize,
  })
}

/**
 * Get local analytics stats
 */
export function getLocalAnalyticsStats() {
  try {
    const STORAGE_KEY = 'analytics_events'
    const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

    // Calculate stats
    const stats = {
      totalTranslations: events.filter(e => e.event === 'translation').length,
      totalFavoritesAdded: events.filter(e => e.event === 'favorite_add').length,
      totalCopies: events.filter(
        e => e.event === 'copy_text' || e.event === 'copy_translation'
      ).length,
      totalVoiceInputs: events.filter(
        e => e.event === 'voice_input_start'
      ).length,
      totalShares: events.filter(e => e.event === 'share_click').length,
    }

    return stats
  } catch (err) {
    return {
      totalTranslations: 0,
      totalFavoritesAdded: 0,
      totalCopies: 0,
      totalVoiceInputs: 0,
      totalShares: 0,
    }
  }
}

/**
 * Clear local analytics data
 */
export function clearAnalyticsData() {
  try {
    localStorage.removeItem('analytics_events')
  } catch (err) {
    // Silent fail
  }
}
