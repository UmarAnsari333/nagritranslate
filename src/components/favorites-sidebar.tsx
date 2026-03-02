'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, StarOff, Trash2, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FavoriteItem } from '@/hooks/use-favorites'

interface FavoritesSidebarProps {
  isOpen: boolean
  onClose: () => void
  favorites: FavoriteItem[]
  onRemoveItem: (id: string) => void
  onClearFavorites: () => void
  onSelectItem: (item: FavoriteItem) => void
}

export function FavoritesSidebar({
  isOpen,
  onClose,
  favorites,
  onRemoveItem,
  onClearFavorites,
  onSelectItem,
}: FavoritesSidebarProps) {
  const handleSelect = (item: FavoriteItem) => {
    onSelectItem(item)
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-2xl z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill='currentColor'" />
            <h2 className="text-lg font-semibold">Favorites</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-9 w-9 touch-manipulation"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Favorites List */}
        <div className="flex-1 overflow-y-auto p-3">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <StarOff className="w-12 h-12 mb-3 opacity-50" />
              <p className="text-sm">No favorites yet</p>
              <p className="text-xs mt-1">
                Star translations to save them for quick access
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {favorites.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <button
                    onClick={() => handleSelect(item)}
                    className="w-full text-left p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Language badges */}
                        <div className="flex items-center gap-1.5 mb-1.5 text-xs text-muted-foreground">
                          <Globe className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{item.sourceLangName} → {item.targetLangName}</span>
                        </div>

                        {/* Input text */}
                        <p className="text-sm font-medium truncate">
                          {item.inputText}
                        </p>

                        {/* Translation */}
                        <p className="text-sm text-muted-foreground truncate">
                          {item.translatedText}
                        </p>

                        {/* Phrase if exists */}
                        {item.phrase && (
                          <p className="text-xs text-primary/70 italic mt-1">
                            {item.phrase}
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.id)}
                          className="h-7 w-7 touch-manipulation text-destructive/70 hover:text-destructive"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="p-4 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFavorites}
              className="w-full text-destructive/70 hover:text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All Favorites
            </Button>
          </div>
        )}
      </motion.div>
    </>
  )
}
