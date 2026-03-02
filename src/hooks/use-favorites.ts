'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { toast } from 'sonner'

export interface FavoriteItem {
  id: string
  sourceLang: string
  sourceLangName: string
  targetLang: string
  targetLangName: string
  inputText: string
  translatedText: string
  phrase?: string // Optional phrase/description for this translation
  timestamp: number
}

const STORAGE_KEY = 'translation_favorites'
const MAX_FAVORITES = 50

/**
 * Get stored favorites from localStorage
 */
function getStoredFavorites(): FavoriteItem[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed)) {
        // Sort by timestamp (newest first)
        return parsed.sort((a, b) => b.timestamp - a.timestamp)
      }
    }
  } catch (error) {
    console.error('Failed to load favorites:', error)
  }
  return []
}

/**
 * Hook for managing favorite translations
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => getStoredFavorites())
  const isInitialized = useRef(false)

  // Mark as initialized after mount
  useEffect(() => {
    isInitialized.current = true
  }, [])

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized.current && typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error('Failed to save favorites:', error)
      }
    }
  }, [favorites])

  /**
   * Add a translation to favorites
   */
  const addToFavorites = useCallback((
    sourceLang: string,
    sourceLangName: string,
    targetLang: string,
    targetLangName: string,
    inputText: string,
    translatedText: string,
    phrase?: string
  ) => {
    if (!inputText.trim() || !translatedText.trim()) return

    const newItem: FavoriteItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      sourceLang,
      sourceLangName,
      targetLang,
      targetLangName,
      inputText: inputText.trim().substring(0, 200), // Store first 200 chars
      translatedText: translatedText.trim().substring(0, 200),
      phrase,
      timestamp: Date.now(),
    }

    // Check if similar favorite already exists
    const exists = favorites.some(
      item =>
        item.inputText === newItem.inputText &&
        item.sourceLang === newItem.sourceLang &&
        item.targetLang === newItem.targetLang
    )

    if (exists) {
      toast.info('This translation is already in your favorites')
      return
    }

    // Add new item at the beginning and limit to MAX_FAVORITES
    const newFavorites = [newItem, ...favorites].slice(0, MAX_FAVORITES)
    setFavorites(newFavorites)

    toast.success('Added to favorites')
  }, [favorites])

  /**
   * Remove a specific item from favorites
   */
  const removeFromFavorites = useCallback((id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id))
    toast.success('Removed from favorites')
  }, [])

  /**
   * Clear all favorites
   */
  const clearFavorites = useCallback(() => {
    setFavorites([])
    toast.info('All favorites cleared')
  }, [])

  /**
   * Check if a translation is favorited
   */
  const isFavorited = useCallback((
    sourceLang: string,
    targetLang: string,
    inputText: string
  ) => {
    return favorites.some(
      item =>
        item.sourceLang === sourceLang &&
        item.targetLang === targetLang &&
        item.inputText === inputText
    )
  }, [favorites])

  /**
   * Get recent favorites (last N items)
   */
  const getRecentFavorites = useCallback((count: number = 10) => {
    return favorites.slice(0, count)
  }, [favorites])

  /**
   * Get favorites by language pair
   */
  const getFavoritesByPair = useCallback((sourceLang: string, targetLang: string) => {
    return favorites.filter(
      item => item.sourceLang === sourceLang && item.targetLang === targetLang
    )
  }, [favorites])

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    isFavorited,
    getRecentFavorites,
    getFavoritesByPair,
  }
}
