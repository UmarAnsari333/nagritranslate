'use client'

import { useState } from 'react'
import { Copy, Check, RotateCcw, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

type ReversalMode = 'text' | 'words' | 'both'

export function TextReverserTool() {
  const [inputText, setInputText] = useState('')
  const [mode, setMode] = useState<ReversalMode>('text')
  const [outputText, setOutputText] = useState('')
  const [copied, setCopied] = useState(false)

  const reverseText = (text: string): string => {
    return text.split('').reverse().join('')
  }

  const reverseWords = (text: string): string => {
    return text.split(' ').reverse().join(' ')
  }

  const reverseBoth = (text: string): string => {
    return text.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  }

  const handleReverse = () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to reverse')
      return
    }

    let result = ''
    switch (mode) {
      case 'text':
        result = reverseText(inputText)
        break
      case 'words':
        result = reverseWords(inputText)
        break
      case 'both':
        result = reverseBoth(inputText)
        break
    }

    setOutputText(result)
    toast.success('Text reversed successfully!')
  }

  const handleCopy = async () => {
    if (!outputText) {
      toast.error('No text to copy')
      return
    }

    try {
      await navigator.clipboard.writeText(outputText)
      setCopied(true)
      toast.success('Copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
    toast.success('Cleared all fields')
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text to Reverse</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[120px] rounded-xl border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
        />
      </div>

      {/* Mode Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">Reversal Mode</label>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setMode('text')}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              mode === 'text'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <div className="font-semibold text-sm mb-1">Reverse Text</div>
            <div className="text-xs text-muted-foreground">Flip each character</div>
          </button>
          <button
            type="button"
            onClick={() => setMode('words')}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              mode === 'words'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <div className="font-semibold text-sm mb-1">Reverse Words</div>
            <div className="text-xs text-muted-foreground">Reverse word order</div>
          </button>
          <button
            type="button"
            onClick={() => setMode('both')}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              mode === 'both'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <div className="font-semibold text-sm mb-1">Reverse Both</div>
            <div className="text-xs text-muted-foreground">Both transformations</div>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleReverse}
          className="flex-1 gap-2 h-12 rounded-xl"
        >
          <RefreshCw className="w-5 h-5" />
          Reverse Text
        </Button>
        <Button
          variant="outline"
          onClick={handleClear}
          className="gap-2 h-12 rounded-xl"
        >
          <RotateCcw className="w-5 h-5" />
          Clear
        </Button>
      </div>

      {/* Output Section */}
      {outputText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">Reversed Text</label>
            <span className="text-xs text-muted-foreground">
              {outputText.length} characters
            </span>
          </div>
          <div className="relative">
            <textarea
              value={outputText}
              readOnly
              className="w-full min-h-[200px] rounded-xl border bg-muted/30 px-4 py-3 text-sm resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="absolute top-3 right-3 bg-background border rounded-lg p-2 shadow-md hover:bg-muted transition-colors"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Tips Section */}
      <div className="p-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl border">
        <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-primary" />
          Tips
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Use "Reverse Text" to flip each character backwards</li>
          <li>Use "Reverse Words" to change the order of words</li>
          <li>Use "Reverse Both" for complete text transformation</li>
          <li>Works with all languages, special characters, and emojis</li>
        </ul>
      </div>
    </div>
  )
}
