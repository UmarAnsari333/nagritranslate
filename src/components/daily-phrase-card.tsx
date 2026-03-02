'use client'

import { motion } from 'framer-motion'
import { Sparkles, Volume2, Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { getDailyPhrase, getPhrasesForLearning } from '@/lib/daily-phrase'
import { getLanguageByValue } from '@/lib/languages'

interface DailyPhraseCardProps {
  targetLang: string
  onPhraseSelect?: (phrase: any) => void
  compact?: boolean
}

export function DailyPhraseCard({ targetLang, onPhraseSelect, compact = false }: DailyPhraseCardProps) {
  const [currentPhrase, setCurrentPhrase] = useState(() => getDailyPhrase(targetLang))
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleSpeak = () => {
    if (!currentPhrase) return

    const utterance = new SpeechSynthesisUtterance(currentPhrase.translation)
    utterance.lang = getSpeechLangCode(targetLang)
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const handleNewPhrase = () => {
    const phrases = getPhrasesForLearning(targetLang, 10)
    if (phrases.length > 0) {
      const randomIndex = Math.floor(Math.random() * phrases.length)
      setCurrentPhrase(phrases[randomIndex])
    }
  }

  const handleUsePhrase = () => {
    if (currentPhrase && onPhraseSelect) {
      onPhraseSelect({
        text: currentPhrase.word,
        translatedText: currentPhrase.translation,
      })
    }
  }

  if (!currentPhrase) {
    return null
  }

  const targetLanguage = getLanguageByValue(targetLang)
  const difficultyColor = {
    easy: 'bg-green-500/20 text-green-600',
    medium: 'bg-yellow-500/20 text-yellow-600',
    hard: 'bg-red-500/20 text-red-600',
  }

  const difficultyBadge = {
    easy: 'Beginner',
    medium: 'Intermediate',
    hard: 'Advanced',
  }

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-lg border bg-card/50 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-muted-foreground line-clamp-1">
              <span className="font-semibold text-primary">{currentPhrase.word}</span>
              {' '}
              → {currentPhrase.translation}
            </p>
          </div>
          <Volume2
            className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary transition-colors flex-shrink-0"
            onClick={handleSpeak}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="rounded-xl border bg-gradient-to-br from-card/50 to-card/20 overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="font-bold text-foreground">Phrase of the Day</h3>
              {targetLanguage && (
                <p className="text-xs text-muted-foreground">{targetLanguage.label}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${difficultyColor[currentPhrase.difficulty]}`}
            >
              {difficultyBadge[currentPhrase.difficulty]}
            </span>
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
              {currentPhrase.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Main Word */}
        <div className="text-center space-y-2">
          <h4 className="text-3xl font-bold text-foreground tracking-tight">
            {currentPhrase.word}
          </h4>
          <p className="text-lg text-primary">{currentPhrase.translation}</p>

          {/* Pronunciation */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">{typeof currentPhrase.pronunciation === 'string' ? currentPhrase.pronunciation : 'N/A'}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSpeak}
              disabled={isSpeaking}
              className="h-8 w-8 touch-manipulation"
            >
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Example */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <p className="text-sm text-muted-foreground font-medium">Example:</p>
          <p className="text-sm text-foreground italic">"{currentPhrase.example}"</p>
          <p className="text-sm text-muted-foreground">"{currentPhrase.exampleTranslation}"</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleNewPhrase}
            className="flex-1 touch-manipulation"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            New Phrase
          </Button>
          {onPhraseSelect && (
            <Button
              size="sm"
              onClick={handleUsePhrase}
              className="flex-1 touch-manipulation"
            >
              Use This Phrase
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Helper function to get speech language code
function getSpeechLangCode(langCode: string): string {
  const speechLangMap: Record<string, string> = {
    'es': 'es-ES',
    'fr': 'fr-FR',
    'de': 'de-DE',
    'it': 'it-IT',
    'pt': 'pt-BR',
    'zh': 'zh-CN',
    'ja': 'ja-JP',
    'ko': 'ko-KR',
    'ar': 'ar-SA',
    'hi': 'hi-IN',
    'ru': 'ru-RU',
    'nl': 'nl-NL',
    'pl': 'pl-PL',
  }
  return speechLangMap[langCode] || 'en-US'
}
