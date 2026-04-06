'use client'

import { useState } from 'react'
import { Code, Copy, Check, Trash2, ArrowRightLeft, ArrowRight, RefreshCw } from 'lucide-react'
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

export function UrlEncoderDecoderTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [copied, setCopied] = useState(false)

  const handleEncodeDecode = () => {
    if (!inputText) {
      setOutputText('')
      return
    }

    try {
      if (mode === 'encode') {
        // URL encode
        setOutputText(encodeURIComponent(inputText))
      } else {
        // URL decode
        setOutputText(decodeURIComponent(inputText))
      }
    } catch (error) {
      setOutputText('Error: Invalid URL encoding. Please check your input.')
    }
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

  const handleSwap = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode')
  }

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <RefreshCw className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Encoding Mode</h3>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Label>Operation:</Label>
            <Select value={mode} onValueChange={(value: any) => setMode(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="encode">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>URL Encode</span>
                  </div>
                </SelectItem>
                <SelectItem value="decode">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="w-4 h-4" />
                    <span>URL Decode</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSwap}
            variant="outline"
            className="h-10 mt-6"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Swap
          </Button>
        </div>

        <Button onClick={handleEncodeDecode} className="w-full mt-4">
          <Code className="w-4 h-4 mr-2" />
          {mode === 'encode' ? 'Encode URL' : 'Decode URL'}
        </Button>
      </Card>

      {/* Input and Output */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="input-text">
            {mode === 'encode' ? 'Original URL/text to encode:' : 'Encoded URL to decode:'}
          </Label>
          <Textarea
            id="input-text"
            placeholder={mode === 'encode' ? 'Enter your URL or text to encode...' : 'Enter your encoded URL to decode...'}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[150px] font-mono"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="output-text">
              {mode === 'encode' ? 'Encoded URL:' : 'Decoded URL:'}
            </Label>
            {outputText && !outputText.startsWith('Error') && (
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
            placeholder={mode === 'encode' ? 'Your encoded URL will appear here...' : 'Your decoded URL will appear here...'}
            className={`min-h-[150px] font-mono ${outputText?.startsWith('Error') ? 'bg-destructive/10' : 'bg-muted/50'}`}
          />
        </div>

        <Button onClick={handleClear} variant="outline" className="w-full">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Info Box */}
      <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900 dark:text-blue-100">
            <p className="font-semibold mb-1">About URL Encoding</p>
            <p className="text-blue-800 dark:text-blue-200">
              URL encoding converts special characters into a format that can be safely transmitted over the internet. It replaces unsafe characters with % followed by hexadecimal digits. Common uses include encoding query parameters, form data, and special characters in URLs.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
