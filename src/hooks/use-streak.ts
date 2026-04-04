'use client'

import { useState, useEffect, useCallback } from 'react'

export interface StreakData {
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null
  totalDaysActive: number
}

const STORAGE_KEY = 'translation_streak'
const STREAK_EXPIRY_HOURS = 48 // 48 hours without activity breaks the streak

/**
 * Get stored streak data
 */
function getStoredStreak(): StreakData {
  if (typeof window === 'undefined') {
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      totalDaysActive: 0,
    }
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (err) {
    console.error('Failed to load streak:', err)
  }

  return {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    totalDaysActive: 0,
  }
}

/**
 * Save streak data to localStorage
 */
function saveStreak(data: StreakData) {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (err) {
    console.error('Failed to save streak:', err)
  }
}

/**
 * Calculate if streak should continue or reset
 */
function calculateNewStreak(current: StreakData): StreakData {
  const now = new Date()
  const lastActive = current.lastActiveDate ? new Date(current.lastActiveDate) : null

  if (!lastActive) {
    // First time - start streak
    return {
      ...current,
      currentStreak: 1,
      longestStreak: Math.max(current.longestStreak, 1),
      lastActiveDate: now.toISOString(),
      totalDaysActive: current.totalDaysActive + 1,
    }
  }

  const hoursSinceLastActive = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60)

  // Check if last activity was today (within 48 hours)
  const wasToday = hoursSinceLastActive < STREAK_EXPIRY_HOURS

  if (wasToday) {
    // Same day - increment streak
    const newStreak = current.currentStreak + 1
    return {
      ...current,
      currentStreak: newStreak,
      longestStreak: Math.max(current.longestStreak, newStreak),
      lastActiveDate: now.toISOString(),
      totalDaysActive: current.totalDaysActive + 1,
    }
  }

  // Different day - check if streak is broken
  const daysSinceLastActive = Math.floor(hoursSinceLastActive / 24)

  if (daysSinceLastActive > 1) {
    // Streak broken - start fresh
    return {
      ...current,
      currentStreak: 1,
      longestStreak: current.longestStreak,
      lastActiveDate: now.toISOString(),
      totalDaysActive: current.totalDaysActive + 1,
    }
  }

  // Same day but >48 hours ago - probably timezone issue, increment
  return {
    ...current,
    currentStreak: current.currentStreak + 1,
    longestStreak: Math.max(current.longestStreak, current.currentStreak + 1),
    lastActiveDate: now.toISOString(),
    totalDaysActive: current.totalDaysActive + 1,
  }
}

/**
 * Hook for managing user activity streaks
 */
export function useStreak() {
  const [streak, setStreak] = useState<StreakData>(() => getStoredStreak())
  const [activityToday, setActivityToday] = useState(false)

  /**
   * Record user activity (call when user translates)
   */
  const recordActivity = useCallback(() => {
    const updated = calculateNewStreak(streak)
    setStreak(updated)
    saveStreak(updated)
    setActivityToday(true)
  }, [streak])

  /**
   * Reset streak (for testing/debug)
   */
  const resetStreak = useCallback(() => {
    const empty: StreakData = {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      totalDaysActive: 0,
    }
    setStreak(empty)
    saveStreak(empty)
    setActivityToday(false)
  }, [])

  /**
   * Get streak message based on current streak
   */
  const getStreakMessage = (): string => {
    if (streak.currentStreak === 0) {
      return 'Start translating to build your streak!'
    }

    const messages: Record<number, string> = {
      1: 'You\'re on fire! Keep it up!',
      3: 'Great consistency! 3 days in a row!',
      5: 'Amazing! 5-day streak!',
      7: 'You\'re unstoppable! A week of learning!',
      10: 'Incredible! 10-day streak!',
      14: 'Two weeks of dedication!',
      21: 'Three weeks! You\'re a language master!',
      30: 'A whole month! Amazing dedication!',
    }

    // Check for milestone messages
    for (const [days, msg] of Object.entries(messages).sort(
      (a, b) => parseInt(b[0]) - parseInt(a[0])
    )) {
      if (streak.currentStreak >= parseInt(days)) {
        return msg
      }
    }

    // Dynamic message
    const ordinal = getOrdinal(streak.currentStreak)
    return `${ordinal} day streak! Keep it going!`
  }

  /**
   * Get streak color for UI
   */
  const getStreakColor = (): string => {
    if (streak.currentStreak >= 21) return 'text-primary'
    if (streak.currentStreak >= 14) return 'text-blue-600'
    if (streak.currentStreak >= 7) return 'text-green-600'
    if (streak.currentStreak >= 3) return 'text-yellow-600'
    return 'text-orange-600'
  }

  /**
   * Check if streak is new (just started today)
   */
  const isStreakStartedToday = useCallback((): boolean => {
    return streak.currentStreak > 0 && activityToday
  }, [streak.currentStreak, activityToday])

  return {
    streak,
    recordActivity,
    resetStreak,
    getStreakMessage,
    getStreakColor,
    isStreakStartedToday,
    activityToday,
  }
}

/**
 * Get ordinal number (1st, 2nd, 3rd, etc.)
 */
function getOrdinal(n: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const value = n % 100
  const suffix = suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]
  return `${n}${suffix}`
}

/**
 * Get milestone for progress tracking
 */
export function getNextMilestone(currentStreak: number): number | null {
  const milestones = [3, 7, 14, 21, 30]
  for (const milestone of milestones) {
    if (currentStreak < milestone) {
      return milestone
    }
  }
  return null
}

/**
 * Get progress percentage to next milestone
 */
export function getMilestoneProgress(currentStreak: number): number {
  const nextMilestone = getNextMilestone(currentStreak)
  if (!nextMilestone) return 100

  // Calculate progress from previous milestone
  const milestones = [0, 3, 7, 14, 21, 30]
  const currentIndex = milestones.findIndex(m => m > currentStreak) || milestones.length - 1
  const currentMilestone = milestones[Math.max(0, currentIndex - 1)]
  const prevMilestone = milestones[Math.max(0, currentIndex - 2)]

  if (currentMilestone === nextMilestone) return 100

  const progress = ((currentStreak - prevMilestone) / (nextMilestone - prevMilestone)) * 100
  return Math.round(progress)
}
