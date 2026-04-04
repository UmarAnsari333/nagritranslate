'use client'

import { motion } from 'framer-motion'
import { Flame, Award, TrendingUp } from 'lucide-react'
import { useStreak, getNextMilestone, getMilestoneProgress } from '@/hooks/use-streak'

interface StreakBadgeProps {
  compact?: boolean
}

export function StreakBadge({ compact = false }: StreakBadgeProps) {
  const { streak, getStreakMessage, getStreakColor, isStreakStartedToday } = useStreak()
  const nextMilestone = getNextMilestone(streak.currentStreak)
  const progressToMilestone = getMilestoneProgress(streak.currentStreak)

  if (compact) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex items-center gap-1.5"
      >
        {streak.currentStreak > 0 && (
          <div className="flex items-center gap-1 text-muted-foreground">
            <Flame
              className={`w-4 h-4 ${
                streak.currentStreak >= 7 ? 'text-orange-500 fill-orange-500/20' : ''
              }`}
            />
            <span className={`text-xs font-semibold ${getStreakColor()}`}>
              {streak.currentStreak}
            </span>
          </div>
        )}
      </motion.div>
    )
  }

  if (streak.currentStreak === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-dashed p-4 text-center bg-muted/30"
      >
        <Flame className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground">Start translating daily to build a streak!</p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          Consecutive days of use unlock achievements
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="rounded-xl border bg-gradient-to-br from-orange-500/10 to-red-500/10 overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 px-4 py-2 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame
              className={`w-5 h-5 ${
                streak.currentStreak >= 7 ? 'text-orange-500' : 'text-muted-foreground'
              }`}
            />
            <div>
              <h3 className="font-bold text-foreground">Your Streak</h3>
              {isStreakStartedToday() && (
                <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full ml-2">
                  Today!
                </span>
              )}
            </div>
          </div>
          {streak.longestStreak > 0 && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Award className="w-4 h-4" />
              <span>Best: {streak.longestStreak}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Main Streak Number */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 300,
              delay: 0.1,
            }}
          >
            <span
              className={`text-6xl font-black ${getStreakColor()}`}
            >
              {streak.currentStreak}
            </span>
          </motion.div>
          <p className="text-sm text-muted-foreground mt-1">
            {streak.currentStreak === 1 ? 'day' : 'days in a row'}
          </p>
        </div>

        {/* Message */}
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-sm text-foreground">{getStreakMessage()}</p>
        </div>

        {/* Milestone Progress */}
        {nextMilestone && streak.currentStreak < nextMilestone && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Progress to {nextMilestone}-day milestone</span>
              <span>{progressToMilestone}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressToMilestone}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Milestone Achieved */}
        {nextMilestone && streak.currentStreak >= nextMilestone && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-lg p-3 text-center border border-amber-500/30"
          >
            <Award className="w-8 h-8 mx-auto text-amber-500 mb-2" />
            <p className="font-semibold text-foreground">
              {nextMilestone}-Day Milestone Reached!
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {streak.longestStreak === streak.currentStreak
                ? 'New personal best!'
                : `${streak.longestStreak} days is your best`}
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-muted/30 rounded-lg p-3">
            <TrendingUp className="w-4 h-4 mx-auto text-blue-500 mb-1" />
            <p className="text-xs text-muted-foreground">Total Days</p>
            <p className="text-lg font-semibold text-foreground">
              {streak.totalDaysActive}
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3">
            <Award className="w-4 h-4 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground">Best Streak</p>
            <p className="text-lg font-semibold text-foreground">
              {streak.longestStreak}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
