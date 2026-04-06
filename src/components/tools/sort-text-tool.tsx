'use client'

import { useState } from 'react'
import { ArrowDownAZ, ArrowUpAZ, Hash, RotateCcw, Shuffle, Copy, Check, Trash2, ArrowUpDown, SortAsc, SortDesc } from 'lucide-react'
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

interface SortOption {
  value: string
  label: string
  icon: React.ReactNode
}

const sortOptions: SortOption[] = [
  { value: 'alphabetical-asc', label: 'Alphabetical (A-Z)', icon: <SortAsc className="w-4 h-4" /> },
  { value: 'alphabetical-desc', label: 'Alphabetical (Z-A)', icon: <SortDesc className="w-4 h-4" /> },
  { value: 'natural-asc', label: 'Natural (A-Z)', icon: <ArrowDownAZ className="w-4 h-4" /> },
  { value: 'natural-desc', label: 'Natural (Z-A)', icon: <ArrowUpAZ className="w-4 h-4" /> },
  { value: 'character-length', label: 'Character Length', icon: <Hash className="w-4 h-4" /> },
  { value: 'reverse', label: 'Reverse', icon: <RotateCcw className="w-4 h-4" /> },
  { value: 'shuffle', label: 'Shuffle', icon: <Shuffle className="w-4 h-4" /> },
]

export function SortTextTool() {
  const [inputText, setInputText] = useState(`Zucchini
Date
Orange
Apple
Grape
Fig
Pear
Banana
Cherry`)
  const [outputText, setOutputText] = useState('')
  const [sortBy, setSortBy] = useState('alphabetical-asc')
  const [copied, setCopied] = useState(false)
  const [trimWhitespace, setTrimWhitespace] = useState(false)
  const [removeEmptyLines, setRemoveEmptyLines] = useState(false)
  const [caseSensitive, setCaseSensitive] = useState(false)

  const naturalCompare = (a: string, b: string): number => {
    const regex = /(\d+)/g
    const aParts = a.split(regex)
    const bParts = b.split(regex)

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aPart = aParts[i] || ''
      const bPart = bParts[i] || ''

      const aNum = parseInt(aPart, 10)
      const bNum = parseInt(bPart, 10)

      if (!isNaN(aNum) && !isNaN(bNum)) {
        if (aNum !== bNum) return aNum - bNum
      } else if (aPart !== bPart) {
        return aPart.localeCompare(bPart)
      }
    }

    return 0
  }

  const handleSort = () => {
    if (!inputText.trim()) {
      setOutputText('')
      return
    }

    let lines = inputText.split('\n')

    // Remove empty lines if option is checked
    if (removeEmptyLines) {
      lines = lines.filter(line => line.trim() !== '')
    }

    // Trim whitespace if option is checked
    if (trimWhitespace) {
      lines = lines.map(line => line.trim())
    }

    // Sort based on selected option
    switch (sortBy) {
      case 'alphabetical-asc':
        lines.sort((a, b) => {
          if (caseSensitive) return a.localeCompare(b)
          return a.localeCompare(b, undefined, { sensitivity: 'base' })
        })
        break

      case 'alphabetical-desc':
        lines.sort((a, b) => {
          if (caseSensitive) return b.localeCompare(a)
          return b.localeCompare(a, undefined, { sensitivity: 'base' })
        })
        break

      case 'natural-asc':
        lines.sort((a, b) => {
          const result = naturalCompare(a, b)
          return caseSensitive ? result : naturalCompare(a.toLowerCase(), b.toLowerCase())
        })
        break

      case 'natural-desc':
        lines.sort((a, b) => {
          const result = naturalCompare(a, b)
          return caseSensitive ? -result : -naturalCompare(a.toLowerCase(), b.toLowerCase())
        })
        break

      case 'character-length':
        lines.sort((a, b) => b.length - a.length)
        break

      case 'reverse':
        lines.reverse()
        break

      case 'shuffle':
        for (let i = lines.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [lines[i], lines[j]] = [lines[j], lines[i]]
        }
        break
    }

    setOutputText(lines.join('\n'))
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
  }

  const handleCopy = async () => {
    if (!outputText) return
    await navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const selectedOption = sortOptions.find(opt => opt.value === sortBy)

  return (
    <div className="space-y-6">
      {/* Sort Options */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <ArrowUpDown className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Sort Options</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sort-by">Sort by:</Label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger id="sort-by" className="w-full">
                <div className="flex items-center gap-2">
                  {selectedOption?.icon}
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      {option.icon}
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="trim-whitespace"
                checked={trimWhitespace}
                onChange={(e) => setTrimWhitespace(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="trim-whitespace" className="text-sm">Trim whitespace</Label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remove-empty-lines"
                checked={removeEmptyLines}
                onChange={(e) => setRemoveEmptyLines(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="remove-empty-lines" className="text-sm">Remove empty lines</Label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="case-sensitive"
                checked={caseSensitive}
                onChange={(e) => setCaseSensitive(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="case-sensitive" className="text-sm">Case sensitive</Label>
            </div>
          </div>

          <Button onClick={handleSort} className="w-full">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort Text
          </Button>
        </div>
      </Card>

      {/* Input/Output */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="input-text">Input Text</Label>
            <span className="text-xs text-muted-foreground">
              {inputText.split('\n').length} lines
            </span>
          </div>
          <Textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to sort (one item per line)..."
            className="min-h-[300px] font-mono"
          />
          <p className="text-xs text-muted-foreground mt-2">
            💡 Tip: Replace this example with your own text - one item per line
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="output-text">Output</Label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {outputText.split('\n').filter(l => l.trim()).length} lines
              </span>
              {outputText && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-7"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
          <Textarea
            id="output-text"
            value={outputText}
            readOnly
            placeholder="Sorted text will appear here..."
            className="min-h-[300px] font-mono bg-muted/50"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button onClick={handleSort} variant="outline" className="flex-1">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort Again
        </Button>
        <Button onClick={handleClear} variant="outline" className="flex-1">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Sort Options Explanation */}
      <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <ArrowUpDown className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900 dark:text-blue-100">
            <p className="font-semibold mb-2">Sort Options Explained:</p>
            <ul className="space-y-1 text-blue-800 dark:text-blue-200">
              <li><strong>Alphabetical:</strong> Standard dictionary order (A-Z or Z-A)</li>
              <li><strong>Natural:</strong> Smart sorting that understands numbers (e.g., "item2" comes before "item10")</li>
              <li><strong>Character Length:</strong> Sorts by text length (longest to shortest)</li>
              <li><strong>Reverse:</strong> Reverses the current order</li>
              <li><strong>Shuffle:</strong> Randomizes the order</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}