'use client'

import { motion } from 'framer-motion'
import { Star, StarOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FavoriteButtonProps {
  sourceLang: string
  targetLang: string
  inputText: string
  translatedText: string
  isFavorited: boolean
  onAddToFavorites: () => void
  onRemoveFromFavorites: () => void
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function FavoriteButton({
  sourceLang,
  targetLang,
  inputText,
  translatedText,
  isFavorited,
  onAddToFavorites,
  onRemoveFromFavorites,
  size = 'sm',
  showLabel = false,
}: FavoriteButtonProps) {
  const handleToggle = () => {
    if (isFavorited) {
      onRemoveFromFavorites()
    } else {
      onAddToFavorites()
    }
  }

  const buttonSize = size === 'sm' ? 'h-8 w-8' : size === 'md' ? 'h-9 w-9' : 'h-10 w-10'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className={`${buttonSize} touch-manipulation ${isFavorited ? 'text-yellow-500' : 'text-muted-foreground'}`}
      title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorited ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <Star className="fill='currentColor'" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: -90 }}
        >
          <StarOff />
        </motion.div>
      )}
      {showLabel && <span className="sr-only">{isFavorited ? 'Remove from favorites' : 'Add to favorites'}</span>}
    </Button>
  )
}
