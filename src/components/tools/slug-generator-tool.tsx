'use client'

import { useState } from 'react'
import { Link as LinkIcon, Copy, Check, Trash2, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function SlugGeneratorTool() {
  const [inputText, setInputText] = useState('')
  const [slug, setSlug] = useState('')
  const [copied, setCopied] = useState(false)
  const [separateWords, setSeparateWords] = useState(true)
  const [customSeparator, setCustomSeparator] = useState('-')
  const [preserveCase, setPreserveCase] = useState(false)
  const [preserveNumbers, setPreserveNumbers] = useState(true)
  const [removeStopWords, setRemoveStopWords] = useState(false)

  const generateSlug = () => {
    if (!inputText) {
      setSlug('')
      return
    }

    let result = inputText

    // Convert to lowercase unless preserve case is enabled
    if (!preserveCase) {
      result = result.toLowerCase()
    }

    // Replace underscores and spaces with separator
    result = result.replace(/[_\s]+/g, customSeparator)

    // Remove special characters except separator, numbers, and letters
    const pattern = preserveNumbers
      ? new RegExp(`[^a-zA-Z0-9${customSeparator === '-' ? '-' : customSeparator}]`, 'g')
      : new RegExp(`[^a-zA-Z${customSeparator === '-' ? '-' : customSeparator}]`, 'g')
    result = result.replace(pattern, '')

    // Remove stop words if enabled
    if (removeStopWords) {
      const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'down', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those']
      const words = result.split(customSeparator)
      const filteredWords = words.filter(word => word && !stopWords.includes(word.toLowerCase()))
      result = filteredWords.join(customSeparator)
    }

    // Remove multiple consecutive separators
    const separatorPattern = new RegExp(`${customSeparator === '-' ? '\\-' : customSeparator}+`, 'g')
    result = result.replace(separatorPattern, customSeparator)

    // Remove separator from start and end
    result = result.replace(new RegExp(`^${customSeparator === '-' ? '\\-' : customSeparator}+|${customSeparator === '-' ? '\\-' : customSeparator}+$`, 'g'), '')

    setSlug(result)
  }

  const handleClear = () => {
    setInputText('')
    setSlug('')
  }

  const handleCopy = async () => {
    if (!slug) return
    await navigator.clipboard.writeText(slug)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Settings */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Slug Options</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Separator:</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={customSeparator === '-' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCustomSeparator('-')}
              >
                Hyphen (-)
              </Button>
              <Button
                type="button"
                variant={customSeparator === '_' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCustomSeparator('_')}
              >
                Underscore (_)
              </Button>
              <Button
                type="button"
                variant={customSeparator === '.' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCustomSeparator('.')}
              >
                Dot (.)
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Custom separator:</Label>
            <Input
              placeholder="Enter custom separator"
              value={customSeparator === '-' || customSeparator === '_' || customSeparator === '.' ? '' : customSeparator}
              onChange={(e) => setCustomSeparator(e.target.value)}
              maxLength={3}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={preserveCase}
              onChange={(e) => setPreserveCase(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Preserve case</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={preserveNumbers}
              onChange={(e) => setPreserveNumbers(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Preserve numbers</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeStopWords}
              onChange={(e) => setRemoveStopWords(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Remove stop words</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={separateWords}
              onChange={(e) => setSeparateWords(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Separate on spaces</span>
          </label>
        </div>

        <Button onClick={generateSlug} className="w-full">
          <LinkIcon className="w-4 h-4 mr-2" />
          Generate Slug
        </Button>
      </Card>

      {/* Input and Output */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="input-text">Input text:</Label>
          <Textarea
            id="input-text"
            placeholder="Enter your title, sentence, or text to convert to URL-friendly slug..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[150px] font-mono"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="output-slug">Generated slug:</Label>
            {slug && (
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
            id="output-slug"
            value={slug}
            readOnly
            placeholder="Your URL-friendly slug will appear here..."
            className="min-h-[100px] font-mono bg-muted/50"
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
