'use client'

import { useState } from 'react'
import { Search, Replace, Copy, Check, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function FindReplaceTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [isCaseSensitive, setIsCaseSensitive] = useState(false)
  const [useRegex, setUseRegex] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleFindReplace = () => {
    if (!inputText || !findText) {
      setOutputText(inputText)
      return
    }

    let result = inputText
    let pattern = findText

    if (!useRegex) {
      // Escape special regex characters for literal search
      pattern = findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }

    const flags = isCaseSensitive ? 'g' : 'gi'
    const regex = new RegExp(pattern, flags)
    result = inputText.replace(regex, replaceText)

    setOutputText(result)
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
    setFindText('')
    setReplaceText('')
    setIsCaseSensitive(false)
    setUseRegex(false)
  }

  const handleCopy = async () => {
    if (!outputText) return
    await navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Find and Replace Options */}
      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="find-text">Find text:</Label>
          <Input
            id="find-text"
            placeholder="Enter text to find..."
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            className="font-mono"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="replace-text">Replace with:</Label>
          <Input
            id="replace-text"
            placeholder="Enter replacement text..."
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            className="font-mono"
          />
        </div>

        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isCaseSensitive}
              onChange={(e) => setIsCaseSensitive(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Case sensitive</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={useRegex}
              onChange={(e) => setUseRegex(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Use regex</span>
          </label>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleFindReplace} className="flex-1">
            <Replace className="w-4 h-4 mr-2" />
            Replace All
          </Button>
          <Button onClick={handleClear} variant="outline">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Input and Output */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="input-text">Input text:</Label>
          <Textarea
            id="input-text"
            placeholder="Enter or paste your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] font-mono"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="output-text">Result:</Label>
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
            placeholder="Result will appear here..."
            className="min-h-[200px] font-mono bg-muted/50"
          />
        </div>
      </div>
    </div>
  )
}
