'use client'

import { useState } from 'react'
import { Shuffle, Copy, Check, RefreshCw, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const wordCategories = [
  { name: 'All Words', value: 'all' },
  { name: 'English Nouns', value: 'nouns' },
  { name: 'English Verbs', value: 'verbs' },
  { name: 'English Adjectives', value: 'adjectives' },
  { name: 'English Adverbs', value: 'adverbs' },
  { name: 'Technical Words', value: 'technical' },
  { name: 'Business Words', value: 'business' },
  { name: 'Creative Words', value: 'creative' },
]

export function RandomWordGeneratorTool() {
  const [generatedWords, setGeneratedWords] = useState('')
  const [wordCount, setWordCount] = useState(10)
  const [minLength, setMinLength] = useState(3)
  const [maxLength, setMaxLength] = useState(8)
  const [category, setCategory] = useState('all')
  const [copied, setCopied] = useState(false)

  // Sample word database (in a real app, this would be from an API or database)
  const allWords = [
    'adventure', 'breeze', 'cascade', 'delight', 'explore', 'fortune', 'glimpse', 'harmony',
    'inspire', 'journey', 'kinetic', 'luminous', 'marvel', 'nostalgia', 'opulent',
    'quest', 'radiant', 'serene', 'tranquil', 'ubiquitous', 'vibrant', 'wondrous',
    'xylophone', 'yearning', 'zeal', 'acoustic', 'barrage', 'charisma', 'dedication',
    'ephemeral', 'fascination', 'gregarious', 'hypothesis', 'illustration', 'jubilant',
    'kaleidoscope', 'labyrinth', 'melody', 'nocturnal', 'orchestration', 'paradigm',
    'quintessential', 'resilient', 'symphony', 'tapestry', 'unified', 'vanguard',
    'whimsical', 'zenith', 'algorithm', 'bandwidth', 'catalyst', 'dichotomy',
    'emergence', 'framework', 'gigabyte', 'hardware', 'interface', 'javascript',
    'kilobyte', 'latitude', 'megabyte', 'nanosecond', 'operating', 'platform',
    'quantum', 'router', 'software', 'terminal', 'upgrade', 'virtual', 'wireless',
    'architecture', 'blueprint', 'cognitive', 'database', 'encryption', 'firewall',
    'gigahertz', 'heuristic', 'infrastructure', 'javascript', 'kilobyte', 'mainframe',
    'network', 'operating', 'pixel', 'quantum', 'redundancy', 'server', 'terminal',
    'bandwidth', 'capacity', 'database', 'efficiency', 'firewall', 'gigabyte',
    'hardware', 'interface', 'latency', 'mainframe', 'network', 'operating', 'platform',
    'quality', 'redundancy', 'server', 'terminal', 'upload', 'virtual', 'wireless',
    'amazing', 'brilliant', 'charming', 'delightful', 'enchanting', 'fantastic',
    'gorgeous', 'impeccable', 'joyful', 'knowledgeable', 'luminous', 'marvelous',
    'outstanding', 'phenomenal', 'quintessential', 'remarkable', 'sensational', 'tremendous',
    'unbelievable', 'vibrant', 'wonderful', 'extraordinary', 'phenomenal', 'magnificent',
    'spectacular', 'breathtaking', 'captivating', 'dazzling', 'exquisite', 'glorious',
    'innovate', 'create', 'design', 'develop', 'invent', 'construct', 'build',
    'originate', 'conceive', 'initiate', 'launch', 'establish', 'produce', 'formulate',
    'architect', 'engineer', 'fabricate', 'generate', 'originate', 'conceive', 'devise',
    'ascend', 'climb', 'elevate', 'soar', 'mount', 'rise', 'lift', 'boost',
    'propel', 'thrust', 'catapult', 'launch', 'rocket', 'surge', 'skyrocket',
    'brilliant', 'clever', 'intelligent', 'smart', 'wise', 'genius', 'sharp',
    'astute', 'intellectual', 'perceptive', 'insightful', 'cunning', 'inventive',
    'brave', 'courageous', 'fearless', 'bold', 'daring', 'heroic', 'valiant',
    'confident', 'determined', 'resolute', 'steadfast', 'unwavering', 'committed',
    'dedicated', 'devoted', 'passionate', 'enthusiastic', 'eager', 'zealous',
    'tranquil', 'serene', 'peaceful', 'calm', 'harmonious', 'gentle', 'soothing',
    'delightful', 'blissful', 'joyous', 'cheerful', 'pleasant', 'agreeable',
    'enchanting', 'mesmerizing', 'captivating', 'alluring', 'charming', 'fascinating',
    'extraordinary', 'remarkable', 'phenomenal', 'incredible', 'amazing', 'fantastic',
    'spectacular', 'breathtaking', 'stunning', 'dazzling', 'magnificent',
    'mysterious', 'enigmatic', 'cryptic', 'arcane', 'obscure', 'veiled',
    'ethereal', 'celestial', 'mystical', 'supernatural', 'magical', 'enchanting',
    'ephemeral', 'transient', 'fleeting', 'momentary', 'brief', 'evanescent',
    'eternal', 'timeless', 'everlasting', 'infinite', 'boundless', 'unending',
    'quantum', 'stellar', 'cosmic', 'galactic', 'universal', 'infinite',
    'luminescent', 'radiant', 'effulgent', 'shimmering', 'glistening', 'dazzling',
    'crystalline', 'prismatic', 'iridescent', 'chromatic', 'multicolored',
  ]

  const generateRandomWords = () => {
    let filteredWords = allWords

    // Filter by length if specified
    if (minLength > 0 || maxLength > 0) {
      filteredWords = filteredWords.filter(word =>
        word.length >= minLength && word.length <= maxLength
      )
    }

    // Shuffle and select random words
    const shuffled = [...filteredWords].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, wordCount)

    setGeneratedWords(selected.join('\n'))
  }

  const handleClear = () => {
    setGeneratedWords('')
  }

  const handleCopy = async () => {
    if (!generatedWords) return
    await navigator.clipboard.writeText(generatedWords)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Generator Options */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Word Generator Options</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="word-count">Number of words: {wordCount}</Label>
            <Slider
              id="word-count"
              min={1}
              max={100}
              step={1}
              value={[wordCount]}
              onValueChange={(values) => setWordCount(values[0])}
              className="mt-2"
            />
          </div>

          <div className="space-y-2">
            <Label>Word category:</Label>
            <Select value={category} onValueChange={(value: any) => setCategory(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {wordCategories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="min-length">Min length: {minLength} chars</Label>
            <Slider
              id="min-length"
              min={1}
              max={15}
              step={1}
              value={[minLength]}
              onValueChange={(values) => setMinLength(values[0])}
              className="mt-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="max-length">Max length: {maxLength} chars</Label>
            <Slider
              id="max-length"
              min={1}
              max={15}
              step={1}
              value={[maxLength]}
              onValueChange={(values) => setMaxLength(values[0])}
              className="mt-2"
            />
          </div>
        </div>

        <Button onClick={generateRandomWords} className="w-full">
          <Shuffle className="w-4 h-4 mr-2" />
          Generate Random Words
        </Button>
      </Card>

      {/* Output */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="output-words">Generated words ({wordCount}):</Label>
            {generatedWords && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            )}
          </div>
          <Textarea
            id="output-words"
            value={generatedWords}
            readOnly
            placeholder="Your random words will appear here..."
            className="min-h-[200px] font-mono bg-muted/50"
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={generateRandomWords} variant="outline" className="flex-1">
            <RefreshCw className="w-4 h-4 mr-2" />
            Generate Again
          </Button>
          <Button onClick={handleClear} variant="outline" className="flex-1">
            Clear All
          </Button>
        </div>
      </div>

      {/* Info Box */}
      <Card className="p-4 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-purple-900 dark:text-purple-100">
            <p className="font-semibold mb-1">About Random Word Generator</p>
            <p className="text-purple-800 dark:text-purple-200">
              Generate random words for creative writing, brainstorming, password generation, or any project requiring random vocabulary. Customize word count, length, and category to get perfect word lists for your needs.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
