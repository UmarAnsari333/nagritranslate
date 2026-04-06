'use client'

import { useState } from 'react'
import { Plus, Copy, Check, Trash2, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function AddPrefixSuffixTool() {
  const [inputText, setInputText] = useState(`Apple
Banana
Cherry
Date
Fig
Grape`)
  const [outputText, setOutputText] = useState('')
  const [prefix, setPrefix] = useState('')
  const [suffix, setSuffix] = useState('')
  const [lineBreaksAfter, setLineBreaksAfter] = useState(false)
  const [lineBreaksBefore, setLineBreaksBefore] = useState(false)
  const [spaceAfterPrefix, setSpaceAfterPrefix] = useState(false)
  const [spaceBeforeSuffix, setSpaceBeforeSuffix] = useState(false)
  const [copied, setCopied] = useState(false)
  const [addBoth, setAddBoth] = useState(false)
  const hasContent = prefix || suffix || spaceAfterPrefix || spaceBeforeSuffix || lineBreaksAfter || lineBreaksBefore

  const handleProcess = () => {
    if (!inputText.trim()) {
      setOutputText('')
      return
    }

    const lines = inputText.split('\n')
    const processed = lines.map(line => {
      let result = line.trim()
      if (addBoth) {
        result = prefix + (spaceAfterPrefix ? ' ' : '') + result + (spaceBeforeSuffix ? ' ' : '') + suffix
        if (lineBreaksAfter) {
          result = result + '\n'
        }
      } else if (prefix && suffix) {
        result = prefix + (spaceAfterPrefix ? ' ' : '') + result + (spaceBeforeSuffix ? ' ' : '') + suffix
        if (lineBreaksAfter) {
          result = result + '\n'
        }
      } else if (prefix) {
        result = prefix + (spaceAfterPrefix ? ' ' : '') + result
        if (lineBreaksAfter) {
          result = result + '\n'
        }
      } else if (suffix) {
        result = result + (spaceBeforeSuffix ? ' ' : '') + suffix
        if (lineBreaksAfter) {
          result = result + '\n'
        }
      }
      return result
    })

    setOutputText(processed.join('\n'))
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
    setPrefix('')
    setSuffix('')
    setSpaceAfterPrefix(false)
    setSpaceBeforeSuffix(false)
    setAddBoth(false)
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
          <Plus className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Add Prefix and/or Suffix</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="prefix">Prefix (add to beginning)</Label>
            <Input
              id="prefix"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="Enter prefix..."
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">Example: &quot;Item&quot; becomes &quot;PrefixItem&quot;</p>
            <p className="text-xs text-muted-foreground italic mt-1">Or with space: &quot;Item&quot; becomes &quot;Prefix Item&quot;</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="suffix">Suffix (add to end)</Label>
            <Input
              id="suffix"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder="Enter suffix..."
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">Example: &quot;Item&quot; becomes &quot;ItemSuffix&quot;</p>
            <p className="text-xs text-muted-foreground italic mt-1">Or with space: &quot;Item&quot; becomes &quot;Item Suffix&quot;</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="add-both"
              checked={addBoth}
              onChange={(e) => setAddBoth(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="add-both" className="text-sm font-medium">
              Add both prefix and suffix to each line
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="space-after-prefix"
              checked={spaceAfterPrefix}
              onChange={(e) => setSpaceAfterPrefix(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              disabled={!prefix}
            />
            <Label htmlFor="space-after-prefix" className="text-sm font-medium">
              Space after prefix
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="space-before-suffix"
              checked={spaceBeforeSuffix}
              onChange={(e) => setSpaceBeforeSuffix(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              disabled={!suffix}
            />
            <Label htmlFor="space-before-suffix" className="text-sm font-medium">
              Space before suffix
            </Label>
          </div>
        </div>

        <Button onClick={handleProcess} className="w-full" disabled={!hasContent}>
          <Plus className="w-4 h-4 mr-2" />
          Add Prefix/Suffix
        </Button>
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
            placeholder="Enter text to modify (one item per line)..."
            className="min-h-[250px] font-mono"
          />
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
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground italic">
                {outputText && `Prefix: "${prefix || 'none'}", Suffix: "${suffix || 'none'}", Space after: ${spaceAfterPrefix ? 'Yes' : 'No'}, Space before: ${spaceBeforeSuffix ? 'Yes' : 'No'}`}
              </div>
            </div>
          </div>
          <Textarea
            id="output-text"
            value={outputText}
            readOnly
            placeholder="Result will appear here..."
            className="min-h-[250px] font-mono bg-muted/50"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button onClick={handleProcess} variant="outline" className="flex-1" disabled={!hasContent}>
          <Plus className="w-4 h-4 mr-2" />
          Process Again
        </Button>
        <Button onClick={handleClear} variant="outline" className="flex-1">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Info Box */}
      <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900 dark:text-blue-100">
            <p className="font-semibold mb-1">About Add Prefix/Suffix Tool</p>
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              Add prefix to beginning, suffix to end, or both to each line of text. Perfect for numbering lists, adding URLs to items, formatting filenames, or applying common text patterns.
            </p>
            <p className="font-semibold mb-2">New: Space & Line Break Options</p>
            <p className="text-blue-800 dark:text-blue-200 mb-2">
              Now includes options to add space after prefix, space before suffix, and line breaks after or before content for better formatting control.
            </p>
            <div className="text-blue-800 dark:text-blue-200">
              <strong>Examples:</strong>
            </div>
            <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <div>
                <p className="font-medium">Prefix &quot;1.&quot; + Space = &quot;1. Apple&quot;</p>
                <p className="text-xs italic">Perfect for numbered lists</p>
              </div>
              <div>
                <p className="font-medium">Text + Space + Suffix &quot; .&quot; = &quot;Apple .&quot;</p>
                <p className="text-xs italic">Add file extensions or periods</p>
              </div>
              <div>
                <p className="font-medium">Prefix + Space + Text = &quot;Prefix Apple&quot;</p>
                <p className="text-xs italic">Add spacing between prefix and content</p>
              </div>
              <div>
                <p className="font-medium">Text + Space + Suffix = &quot;Text .&quot; + Suffix</p>
                <p className="text-xs italic">Add both separator and suffix</p>
              </div>
              <div>
                <p className="font-medium">Line Breaks After: &quot;1. Apple&quot; + &quot;\n&quot; + &quot;2. Banana&quot;</p>
                <p className="text-xs italic">Add line breaks after each item</p>
              </div>
              <div>
                <p className="font-medium">Line Breaks Before: &quot;\n&quot; + &quot;1. Apple&quot; + &quot;\n&quot; + &quot;2. Banana&quot;</p>
                <p className="text-xs italic">Add line breaks before each item</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
