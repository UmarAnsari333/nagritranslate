'use client'

import { useState } from 'react'
import { ArrowUpZA, Copy, Check, Trash2, ArrowUp, ArrowDown, Filter } from 'lucide-react'
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

export function SortDeduplicateTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [copied, setCopied] = useState(false)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [sortBy, setSortBy] = useState<'alphabetical' | 'length' | 'numeric'>('alphabetical')
  const [removeDuplicates, setRemoveDuplicates] = useState(true)
  const [removeEmpty, setRemoveEmpty] = useState(true)
  const [trimLines, setTrimLines] = useState(true)

  const handleSortDeduplicate = () => {
    if (!inputText) {
      setOutputText('')
      return
    }

    let lines = inputText.split('\n')

    // Trim lines if enabled
    if (trimLines) {
      lines = lines.map(line => line.trim())
    }

    // Remove empty lines if enabled
    if (removeEmpty) {
      lines = lines.filter(line => line.trim() !== '')
    }

    // Sort lines based on selected criteria
    const sortedLines = lines.sort((a, b) => {
      const comparisonMultiplier = sortOrder === 'asc' ? 1 : -1

      if (sortBy === 'alphabetical') {
        return a.localeCompare(b) * comparisonMultiplier
      } else if (sortBy === 'length') {
        return (a.length - b.length) * comparisonMultiplier
      } else if (sortBy === 'numeric') {
        const numA = parseFloat(a) || 0
        const numB = parseFloat(b) || 0
        return (numA - numB) * comparisonMultiplier
      }

      return 0
    })

    // Remove duplicates if enabled
    const finalLines = removeDuplicates ? [...new Set(sortedLines)] : sortedLines

    setOutputText(finalLines.join('\n'))
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

  return (
    <div className="space-y-6">
      {/* Options */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <ArrowUpZA className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Sort & Filter Options</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Sort by:</Label>
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alphabetical">Alphabetical (A-Z)</SelectItem>
                <SelectItem value="length">Length (shortest first)</SelectItem>
                <SelectItem value="numeric">Numeric (1-10)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sort order:</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={sortOrder === 'asc' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortOrder('asc')}
                className="flex-1"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Ascending
              </Button>
              <Button
                type="button"
                variant={sortOrder === 'desc' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortOrder('desc')}
                className="flex-1"
              >
                <ArrowDown className="w-4 h-4 mr-1" />
                Descending
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeDuplicates}
              onChange={(e) => setRemoveDuplicates(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Remove duplicates</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeEmpty}
              onChange={(e) => setRemoveEmpty(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Remove empty lines</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trimLines}
              onChange={(e) => setTrimLines(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Trim whitespace</span>
          </label>
        </div>

        <Button onClick={handleSortDeduplicate} className="w-full">
          <ArrowUpZA className="w-4 h-4 mr-2" />
          Sort & Deduplicate
        </Button>
      </Card>

      {/* Input and Output */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="input-text">Input text (one item per line):</Label>
          <Textarea
            id="input-text"
            placeholder="Enter your list here (one item per line)..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] font-mono"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="output-text">Sorted result:</Label>
            {outputText && (
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
            id="output-text"
            value={outputText}
            readOnly
            placeholder="Your sorted and deduplicated list will appear here..."
            className="min-h-[200px] font-mono bg-muted/50"
          />
        </div>

        <Button onClick={handleClear} variant="outline" className="w-full">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>
    </div>
  )
}
