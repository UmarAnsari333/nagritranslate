'use client'

import { useState } from 'react'
import { Copy, Check, RotateCcw, Sparkles, Trash2, Eraser } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

type CleanupOption = {
  id: string
  name: string
  description: string
  icon: any
  process: (text: string) => string
}

export function RemoveWhitespaceTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const cleanupOptions: CleanupOption[] = [
    {
      id: 'extra-spaces',
      name: 'Remove Extra Spaces',
      description: 'Replace multiple spaces with single space',
      icon: Sparkles,
      process: (text: string) => text.replace(/\s+/g, ' ').trim()
    },
    {
      id: 'all-spaces',
      name: 'Remove All Spaces',
      description: 'Remove all space characters',
      icon: Trash2,
      process: (text: string) => text.replace(/ /g, '')
    },
    {
      id: 'line-breaks',
      name: 'Remove Line Breaks',
      description: 'Remove all line breaks',
      icon: Eraser,
      process: (text: string) => text.replace(/[\r\n]+/g, ' ')
    },
    {
      id: 'tabs',
      name: 'Remove Tabs',
      description: 'Remove all tab characters',
      icon: Sparkles,
      process: (text: string) => text.replace(/\t/g, ' ')
    },
    {
      id: 'trim',
      name: 'Trim Text',
      description: 'Remove spaces from beginning and end',
      icon: Eraser,
      process: (text: string) => text.trim()
    },
    {
      id: 'clean-all',
      name: 'Clean All Whitespace',
      description: 'Remove all whitespace except single spaces between words',
      icon: Trash2,
      process: (text: string) => text.replace(/\s+/g, ' ').trim()
    }
  ]

  const handleCleanup = (optionId: string) => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to clean')
      return
    }

    const option = cleanupOptions.find(opt => opt.id === optionId)
    if (option) {
      const result = option.process(inputText)
      setOutputText(result)
      setSelectedOption(optionId)
      toast.success('Text cleaned successfully!')
    }
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
    setSelectedOption(null)
    toast.success('Cleared all fields')
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text to Clean</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[120px] rounded-xl border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
        />
      </div>

      {/* Cleanup Options */}
      <div>
        <label className="block text-sm font-medium mb-3">Select Cleanup Option</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cleanupOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleCleanup(option.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                selectedOption === option.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                <option.icon className="w-4 h-4" />
                {option.name}
              </div>
              <div className="text-xs text-muted-foreground">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleClear}
          className="gap-2 h-12 rounded-xl flex-1"
        >
          <RotateCcw className="w-5 h-5" />
          Clear All
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
            <label className="block text-sm font-medium">Cleaned Text</label>
            <span className="text-xs text-muted-foreground">
              {outputText.length} characters
              {inputText.length > 0 && ` (removed ${inputText.length - outputText.length} characters)`}
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
          <Sparkles className="w-4 h-4 text-primary" />
          Tips
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Use "Remove Extra Spaces" to clean up multiple spaces between words</li>
          <li>Use "Remove Line Breaks" to combine text from multiple lines</li>
          <li>Use "Clean All Whitespace" for complete text cleanup</li>
          <li>Works with all languages and special characters</li>
          <li>See how many characters were removed after cleaning</li>
        </ul>
      </div>
    </div>
  )
}
