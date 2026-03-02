'use client'

import { useState, useEffect, useCallback } from 'react'
import { toast } from 'sonner'

// Country-to-languages mapping for geolocation-based recommendations
export interface CountryLanguages {
  countryCode: string
  countryName: string
  primaryLang: string
  secondaryLangs: string[]
  region: 'Americas' | 'Europe' | 'Asia' | 'Africa' | 'Oceania'
}

export interface GeoLocation {
  country: string
  countryCode: string
  city?: string
  detected: boolean
  recommendedLanguages?: string[]  // Languages recommended for this location
  sourceLang?: string  // The primary language for this location
}

// Country language data
const countryLanguages: CountryLanguages[] = [
  // Americas
  { countryCode: 'US', countryName: 'United States', primaryLang: 'en', secondaryLangs: ['es', 'zh-CN', 'vi', 'ko', 'fr', 'de', 'it', 'pt', 'pl', 'ru', 'ar', 'hi'], region: 'Americas' },
  { countryCode: 'MX', countryName: 'Mexico', primaryLang: 'es', secondaryLangs: ['en'], region: 'Americas' },
  { countryCode: 'CA', countryName: 'Canada', primaryLang: 'en', secondaryLangs: ['fr'], region: 'Americas' },
  { countryCode: 'BR', countryName: 'Brazil', primaryLang: 'pt', secondaryLangs: ['es', 'en'], region: 'Americas' },
  { countryCode: 'AR', countryName: 'Argentina', primaryLang: 'es', secondaryLangs: ['en'], region: 'Americas' },
  { countryCode: 'CO', countryName: 'Colombia', primaryLang: 'es', secondaryLangs: ['en'], region: 'Americas' },
  { countryCode: 'PE', countryName: 'Peru', primaryLang: 'es', secondaryLangs: ['en'], region: 'Americas' },

  // Europe
  { countryCode: 'GB', countryName: 'United Kingdom', primaryLang: 'en', secondaryLangs: ['fr', 'de', 'es', 'pl', 'ru', 'ar', 'hi'], region: 'Europe' },
  { countryCode: 'DE', countryName: 'Germany', primaryLang: 'de', secondaryLangs: ['en', 'tr', 'fr', 'ru'], region: 'Europe' },
  { countryCode: 'FR', countryName: 'France', primaryLang: 'fr', secondaryLangs: ['en', 'es', 'de', 'ar'], region: 'Europe' },
  { countryCode: 'ES', countryName: 'Spain', primaryLang: 'es', secondaryLangs: ['en', 'fr', 'de', 'pt'], region: 'Europe' },
  { countryCode: 'IT', countryName: 'Italy', primaryLang: 'it', secondaryLangs: ['en', 'fr', 'de'], region: 'Europe' },
  { countryCode: 'RU', countryName: 'Russia', primaryLang: 'ru', secondaryLangs: ['en', 'de', 'fr', 'es'], region: 'Europe' },
  { countryCode: 'NL', countryName: 'Netherlands', primaryLang: 'nl', secondaryLangs: ['en'], region: 'Europe' },
  { countryCode: 'PL', countryName: 'Poland', primaryLang: 'pl', secondaryLangs: ['en', 'de'], region: 'Europe' },
  { countryCode: 'UA', countryName: 'Ukraine', primaryLang: 'uk', secondaryLangs: ['en'], region: 'Europe' },
  { countryCode: 'TR', countryName: 'Turkey', primaryLang: 'tr', secondaryLangs: ['en', 'de'], region: 'Europe' },

  // Asia
  { countryCode: 'CN', countryName: 'China', primaryLang: 'zh-CN', secondaryLangs: ['en', 'ja', 'ko'], region: 'Asia' },
  { countryCode: 'JP', countryName: 'Japan', primaryLang: 'ja', secondaryLangs: ['en', 'zh-CN', 'ko'], region: 'Asia' },
  { countryCode: 'KR', countryName: 'South Korea', primaryLang: 'ko', secondaryLangs: ['en', 'ja', 'zh-CN'], region: 'Asia' },
  { countryCode: 'IN', countryName: 'India', primaryLang: 'hi', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'ID', countryName: 'Indonesia', primaryLang: 'id', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'TH', countryName: 'Thailand', primaryLang: 'th', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'VN', countryName: 'Vietnam', primaryLang: 'vi', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'MY', countryName: 'Malaysia', primaryLang: 'ms', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'PH', countryName: 'Philippines', primaryLang: 'tl', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'SG', countryName: 'Singapore', primaryLang: 'en', secondaryLangs: ['zh-CN', 'ms', 'ta'], region: 'Asia' },
  { countryCode: 'PK', countryName: 'Pakistan', primaryLang: 'ur', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'BD', countryName: 'Bangladesh', primaryLang: 'bn', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'LK', countryName: 'Sri Lanka', primaryLang: 'si', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'NP', countryName: 'Nepal', primaryLang: 'ne', secondaryLangs: ['en'], region: 'Asia' },

  // Middle East
  { countryCode: 'SA', countryName: 'Saudi Arabia', primaryLang: 'ar', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'AE', countryName: 'United Arab Emirates', primaryLang: 'ar', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'IQ', countryName: 'Iraq', primaryLang: 'ar', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'IR', countryName: 'Iran', primaryLang: 'fa', secondaryLangs: ['en'], region: 'Asia' },
  { countryCode: 'IL', countryName: 'Israel', primaryLang: 'he', secondaryLangs: ['en'], region: 'Asia' },

  // Africa
  { countryCode: 'ZA', countryName: 'South Africa', primaryLang: 'en', secondaryLangs: ['af', 'zu', 'xh'], region: 'Africa' },
  { countryCode: 'EG', countryName: 'Egypt', primaryLang: 'ar', secondaryLangs: ['en'], region: 'Africa' },
  { countryCode: 'NG', countryName: 'Nigeria', primaryLang: 'en', secondaryLangs: ['yo', 'ha', 'ig'], region: 'Africa' },
  { countryCode: 'KE', countryName: 'Kenya', primaryLang: 'sw', secondaryLangs: ['en'], region: 'Africa' },

  // Oceania
  { countryCode: 'AU', countryName: 'Australia', primaryLang: 'en', secondaryLangs: ['zh-CN', 'vi'], region: 'Oceania' },
  { countryCode: 'NZ', countryName: 'New Zealand', primaryLang: 'en', secondaryLangs: ['mi'], region: 'Oceania' },
]

/**
 * Get country languages by country code
 */
export function getCountryLanguages(countryCode: string): CountryLanguages | undefined {
  return countryLanguages.find(c => c.countryCode === countryCode)
}

/**
 * Get recommended languages based on country
 * Returns source and target suggestions
 */
export function getRecommendedLanguages(countryCode: string): { sourceLang?: string; targetLang?: string; recommendedLanguages?: string[]; sourceLangName?: string; country: CountryLanguages | undefined } {
  const countryData = getCountryLanguages(countryCode)

  if (!countryData) {
    return { country: undefined }
  }

  return {
    sourceLang: countryData.primaryLang,
    sourceLangName: countryData.countryName,
    targetLang: 'en',
    recommendedLanguages: countryData.secondaryLangs,
    country: countryData
  }
}

/**
 * Hook for geolocation detection and language recommendations
 */
export function useGeolocation() {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
    country: '',
    countryCode: '',
    city: '',
    detected: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  // Detect user's location on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if we already have saved location
    const savedCountry = localStorage.getItem('user_country_code')
    const savedTimestamp = localStorage.getItem('user_country_timestamp')
    const MAX_AGE = 24 * 60 * 60 * 1000 // 24 hours

    if (savedCountry && savedTimestamp) {
      const age = Date.now() - parseInt(savedTimestamp)
      if (age < MAX_AGE) {
        const countryData = getCountryLanguages(savedCountry)
        if (countryData) {
          setGeoLocation({
            country: countryData.countryName,
            countryCode: countryData.countryCode,
            detected: true,
          })
          return
        }
      }
    }

    // Try to detect location from browser or API
    detectLocation()
  }, [])

  /**
   * Detect user's location using browser geolocation API
   * Falls back to IP-based geolocation API
   */
  const detectLocation = async () => {
    if (isLoading) return

    setIsLoading(true)

    try {
      // First try browser geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords

            // Reverse geocode using a free API
            fetchCountryFromCoords(latitude, longitude)
          },
          (error) => {
            // Fall back to IP-based detection
            console.log('Geolocation error:', error)
            detectFromIP()
          },
          {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 24 * 60 * 60 * 1000, // 24 hours
          }
        )
      } else {
        // Browser API not available, use IP-based detection
        detectFromIP()
      }
    } catch (error) {
      console.error('Geolocation detection failed:', error)
      setIsLoading(false)
    }
  }

  /**
   * Get country from coordinates using reverse geocoding
   */
  const fetchCountryFromCoords = async (lat: number, lon: number) => {
    try {
      // Using free reverse geocoding API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
      )
      const data = await response.json()

      if (data.address?.country_code) {
        const countryCode = data.address.country_code.toUpperCase()
        const countryData = getCountryLanguages(countryCode)

        if (countryData) {
          // Save to localStorage
          localStorage.setItem('user_country_code', countryCode)
          localStorage.setItem('user_country_timestamp', Date.now().toString())

          setGeoLocation({
            country: countryData.countryName,
            countryCode: countryCode,
            detected: true,
          })
        }
      }
    } catch (error) {
      // Fall back to IP detection
      detectFromIP()
    }
  }

  /**
   * Detect country from IP address
   */
  const detectFromIP = async () => {
    try {
      // Using free IP geolocation API
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()

      if (data.country_code) {
        const countryCode = data.country_code.toUpperCase()
        const countryData = getCountryLanguages(countryCode)

        if (countryData) {
          // Save to localStorage
          localStorage.setItem('user_country_code', countryCode)
          localStorage.setItem('user_country_timestamp', Date.now().toString())

          setGeoLocation({
            country: countryData.countryName,
            countryCode: countryCode,
            city: data.city,
            detected: true,
          })
        }
      }
    } catch (error) {
      console.error('IP geolocation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Manually set country (for testing or user preference)
   */
  const setCountry = useCallback((countryCode: string) => {
    const countryData = getCountryLanguages(countryCode)
    if (countryData) {
      localStorage.setItem('user_country_code', countryCode)
      localStorage.setItem('user_country_timestamp', Date.now().toString())

      setGeoLocation({
        country: countryData.countryName,
        countryCode: countryCode,
        detected: true,
      })

      toast.success(`Language preferences updated for ${countryData.countryName}`)
    }
  }, [])

  /**
   * Clear detected location
   */
  const clearLocation = useCallback(() => {
    localStorage.removeItem('user_country_code')
    localStorage.removeItem('user_country_timestamp')

    setGeoLocation({
      country: '',
      countryCode: '',
      detected: false,
    })

    toast.info('Location preferences cleared')
  }, [])

  return {
    geoLocation,
    isLoading,
    detectLocation,
    setCountry,
    clearLocation,
    getRecommendedLanguages,
    getCountryLanguages,
    countryLanguages,
  }
}
