'use client'

import { useState } from 'react'
import { Copy, Check, RotateCcw, Type, FileText, Hash, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

type CaseType = 'uppercase' | 'lowercase' | 'titlecase' | 'sentencecase' | 'togglecase' | 'capitalize'

export function CaseConverterTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [selectedCase, setSelectedCase] = useState<CaseType | null>(null)
  const [copied, setCopied] = useState(false)

  const convertToUppercase = (text: string): string => {
    return text.toUpperCase()
  }

  const convertToLowercase = (text: string): string => {
    return text.toLowerCase()
  }

  const convertToTitleCase = (text: string): string => {
    return text.toLowerCase().split(' ').map(word => {
      // Don't capitalize certain small words unless they're the first word
      const smallWords = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by']
      return smallWords.includes(word.toLowerCase()) ? word : word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  }

  const convertToSentenceCase = (text: string): string => {
    return text.toLowerCase().split(/(?<=[.!?])\s+/).map((sentence, index) => {
      const trimmed = sentence.trim()
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
    }).join(' ')
  }

  const convertToToggleCase = (text: string): string => {
    return text.split('').map((char, index) => {
      return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    }).join('')
  }

  const convertToCapitalize = (text: string): string => {
    return text.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
  }

  const handleConvert = (caseType: CaseType) => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to convert')
      return
    }

    let result = ''
    switch (caseType) {
      case 'uppercase':
        result = convertToUppercase(inputText)
        break
      case 'lowercase':
        result = convertToLowercase(inputText)
        break
      case 'titlecase':
        result = convertToTitleCase(inputText)
        break
      case 'sentencecase':
        result = convertToSentenceCase(inputText)
        break
      case 'togglecase':
        result = convertToToggleCase(inputText)
        break
      case 'capitalize':
        result = convertToCapitalize(inputText)
        break
    }

    setOutputText(result)
    setSelectedCase(caseType)
    toast.success('Text converted successfully!')
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
    setSelectedCase(null)
    toast.success('Cleared all fields')
  }

  const caseTypes = [
    { id: 'uppercase' as CaseType, name: 'UPPERCASE', icon: Type, description: 'Convert all letters to uppercase' },
    { id: 'lowercase' as CaseType, name: 'lowercase', icon: Type, description: 'Convert all letters to lowercase' },
    { id: 'titlecase' as CaseType, name: 'Title Case', icon: FileText, description: 'Capitalize first letter of each word' },
    { id: 'sentencecase' as CaseType, name: 'Sentence case', icon: Quote, description: 'Capitalize first letter of each sentence' },
    { id: 'togglecase' as CaseType, name: 'tOgGlE cAsE', icon: Hash, description: 'Alternate between upper and lowercase' },
    { id: 'capitalize' as CaseType, name: 'Capitalize Word', icon: Type, description: 'Capitalize first letter of each word' },
  ]

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text to Convert</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[120px] rounded-xl border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
        />
      </div>

      {/* Case Type Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">Select Case Type</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {caseTypes.map((caseType) => (
            <button
              key={caseType.id}
              type="button"
              onClick={() => handleConvert(caseType.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                selectedCase === caseType.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                <caseType.icon className="w-4 h-4" />
                {caseType.name}
              </div>
              <div className="text-xs text-muted-foreground">{caseType.description}</div>
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
            <label className="block text-sm font-medium">Converted Text</label>
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
          <Type className="w-4 h-4 text-primary" />
          Tips
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Use UPPERCASE for emphasis and headings</li>
          <li>Use lowercase for consistency and readability</li>
          <li>Use Title Case for headlines and titles</li>
          <li>Use Sentence case for normal paragraphs and documents</li>
          <li>Works with all languages and special characters</li>
        </ul>
      </div>
    </div>
  )
}
