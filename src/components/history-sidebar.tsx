'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, Trash2, ArrowRightLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HistoryItem } from '@/hooks/use-translation-history'

interface HistorySidebarProps {
  isOpen: boolean
  onClose: () => void
  history: HistoryItem[]
  onRemoveItem: (id: string) => void
  onClearHistory: () => void
  onSelectItem: (item: HistoryItem) => void
}

export function HistorySidebar({
  isOpen,
  onClose,
  history,
  onRemoveItem,
  onClearHistory,
  onSelectItem,
}: HistorySidebarProps) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  const truncateText = (text: string, maxLength: number = 50) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Translation History</h2>
              </div>
              <div className="flex items-center gap-2">
                {history.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClearHistory}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* History List */}
            <div className="flex-1 overflow-y-auto p-4">
              {history.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                  <Clock className="w-12 h-12 mb-4 opacity-50" />
                  <p className="text-lg font-medium">No history yet</p>
                  <p className="text-sm">Your translations will appear here</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {history.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative bg-muted/50 rounded-lg border p-3 hover:border-foreground/20 transition-colors cursor-pointer"
                      onClick={() => onSelectItem(item)}
                    >
                      {/* Language pair */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span className="font-medium">{item.sourceLangName}</span>
                        <ArrowRightLeft className="w-3 h-3" />
                        <span className="font-medium">{item.targetLangName}</span>
                        <span className="ml-auto">{formatDate(item.timestamp)}</span>
                      </div>

                      {/* Text preview */}
                      <div className="space-y-1">
                        <p className="text-sm line-clamp-2">{truncateText(item.inputText)}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          → {truncateText(item.translatedText)}
                        </p>
                      </div>

                      {/* Delete button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemoveItem(item.id)
                        }}
                        className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {history.length > 0 && (
              <div className="p-4 border-t text-center text-xs text-muted-foreground">
                {history.length} translation{history.length !== 1 ? 's' : ''} saved • Auto-deletes after 30 days
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
