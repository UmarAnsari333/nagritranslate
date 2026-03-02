'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

export interface HistoryItem {
  id: string
  sourceLang: string
  sourceLangName: string
  targetLang: string
  targetLangName: string
  inputText: string
  translatedText: string
  timestamp: number
}

const STORAGE_KEY = 'translation_history'
const MAX_HISTORY_ITEMS = 100
const MAX_AGE_DAYS = 30 // Auto-cleanup after 30 days

function getStoredHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed)) {
        // Auto-cleanup: remove items older than MAX_AGE_DAYS
        const cutoffTime = Date.now() - (MAX_AGE_DAYS * 24 * 60 * 60 * 1000)
        return parsed.filter(item => item.timestamp > cutoffTime)
      }
    }
  } catch (error) {
    console.error('Failed to load history:', error)
  }
  return []
}

export function useTranslationHistory() {
  // Initialize state lazily from localStorage
  const [history, setHistory] = useState<HistoryItem[]>(() => getStoredHistory())
  const isInitialized = useRef(false)

  // Mark as initialized after mount
  useEffect(() => {
    isInitialized.current = true
  }, [])

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized.current && typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
      } catch (error) {
        console.error('Failed to save history:', error)
      }
    }
  }, [history])

  // Add a new translation to history
  const addToHistory = useCallback((
    sourceLang: string,
    sourceLangName: string,
    targetLang: string,
    targetLangName: string,
    inputText: string,
    translatedText: string
  ) => {
    if (!inputText.trim() || !translatedText.trim()) return

    const newItem: HistoryItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      sourceLang,
      sourceLangName,
      targetLang,
      targetLangName,
      inputText: inputText.trim(),
      translatedText: translatedText.trim(),
      timestamp: Date.now(),
    }

    setHistory(prev => {
      // Check if similar translation already exists
      const exists = prev.some(
        item => 
          item.inputText === newItem.inputText && 
          item.sourceLang === newItem.sourceLang &&
          item.targetLang === newItem.targetLang
      )
      
      if (exists) return prev

      // Add new item at the beginning and limit to MAX_HISTORY_ITEMS
      const newHistory = [newItem, ...prev].slice(0, MAX_HISTORY_ITEMS)
      return newHistory
    })
  }, [])

  // Remove a specific item from history
  const removeFromHistory = useCallback((id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id))
  }, [])

  // Clear all history
  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  // Get recent history (last N items)
  const getRecentHistory = useCallback((count: number = 10) => {
    return history.slice(0, count)
  }, [history])

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    getRecentHistory,
  }
}
