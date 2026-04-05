'use client'

import { useState, useEffect } from 'react'
import { FileText, Hash, Type, MessageSquare, List, Clock, Volume2, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
  readingTime: number
  speakingTime: number
  uniqueWords: number
  averageWordLength: number
}

export function WordCounterTool() {
  const [inputText, setInputText] = useState('')
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
    speakingTime: 0,
    uniqueWords: 0,
    averageWordLength: 0,
  })

  const calculateStats = (text: string): TextStats => {
    // Count characters
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length

    // Count words (handles multiple spaces and line breaks)
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

    // Count sentences - improved algorithm to handle both paragraphs and lists
    let sentences = 0
    if (text.trim() !== '') {
      const lines = text.split(/\n+/).filter(line => line.trim().length > 0)

      // Check if text looks like list content (multiple lines, short, no punctuation)
      const looksLikeList = lines.length > 1 && lines.every(line => {
        const trimmed = line.trim()
        // Lines are short (< 15 words) and don't end with punctuation
        const wordCount = trimmed.split(/\s+/).length
        const hasEndingPunctuation = /[.!?]$/.test(trimmed)
        return wordCount < 15 && !hasEndingPunctuation
      })

      if (looksLikeList) {
        // Count each line as a sentence for list content
        sentences = lines.length
      } else {
        // Use punctuation-based counting for normal paragraphs
        sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
      }
    }

    // Count paragraphs (non-empty lines)
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\n+/).filter(p => p.trim().length > 0).length

    // Count unique words (case-insensitive)
    const wordList = text.trim() === '' ? [] : text.trim().split(/\s+/)
    const uniqueWords = new Set(wordList.map(w => w.toLowerCase())).size

    // Calculate average word length
    const averageWordLength = words > 0
      ? Math.round(wordList.reduce((sum, word) => sum + word.length, 0) / words)
      : 0

    // Calculate reading time (200 words per minute average)
    const readingTime = words > 0 ? Math.ceil(words / 200) : 0

    // Calculate speaking time (150 words per minute average)
    const speakingTime = words > 0 ? Math.ceil(words / 150) : 0

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
      speakingTime,
      uniqueWords,
      averageWordLength,
    }
  }

  useEffect(() => {
    setStats(calculateStats(inputText))
  }, [inputText])

  const handleClear = () => {
    setInputText('')
    toast.success('Text cleared')
  }

  const StatCard = ({ icon: Icon, label, value, unit = '' }: { icon: any, label: string, value: number, unit?: string }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="text-2xl font-bold">
        {value.toLocaleString()}<span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text to Count</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[200px] rounded-xl border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleClear}
          className="gap-2 h-12 rounded-xl"
        >
          <RotateCcw className="w-5 h-5" />
          Clear Text
        </Button>
      </div>

      {/* Statistics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Primary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={Hash} label="Words" value={stats.words} />
          <StatCard icon={Type} label="Characters" value={stats.characters} />
          <StatCard icon={Type} label="No Spaces" value={stats.charactersNoSpaces} />
          <StatCard icon={MessageSquare} label="Sentences" value={stats.sentences} />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={List} label="Paragraphs" value={stats.paragraphs} />
          <StatCard icon={Hash} label="Unique Words" value={stats.uniqueWords} />
          <StatCard icon={Clock} label="Reading Time" value={stats.readingTime} unit="min" />
          <StatCard icon={Volume2} label="Speaking Time" value={stats.speakingTime} unit="min" />
        </div>

        {/* Detailed Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border shadow-sm">
          <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            Detailed Analysis
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Average Word Length:</span>
              <span className="font-medium ml-2">{stats.averageWordLength} chars</span>
            </div>
            <div>
              <span className="text-muted-foreground">Sentences/Paragraph:</span>
              <span className="font-medium ml-2">{stats.paragraphs > 0 ? (stats.sentences / stats.paragraphs).toFixed(1) : 0}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Words/Sentence:</span>
              <span className="font-medium ml-2">{stats.sentences > 0 ? (stats.words / stats.sentences).toFixed(1) : 0}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tips Section */}
      <div className="p-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl border">
        <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          Tips
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Real-time analysis updates as you type or paste</li>
          <li>Reading time based on 200 words per minute average</li>
          <li>Speaking time based on 150 words per minute average</li>
          <li>Works with all languages and special characters</li>
          <li>No limit on text length - analyze any amount of content</li>
        </ul>
      </div>
    </div>
  )
}
