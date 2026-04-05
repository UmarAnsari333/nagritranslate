'use client'

import { useState } from 'react'
import { Copy, Check, RotateCcw, Wand2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function TextRepeaterTool() {
  const [inputText, setInputText] = useState('')
  const [repeatCount, setRepeatCount] = useState(5)
  const [separator, setSeparator] = useState(' ')
  const [outputText, setOutputText] = useState('')
  const [copied, setCopied] = useState(false)

  const handleRepeat = () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to repeat')
      return
    }

    // Convert the separator value to actual newline if needed
    const actualSeparator = separator === 'NEWLINE' ? '\n' : separator
    const repeated = Array(repeatCount).fill(inputText).join(actualSeparator)
    setOutputText(repeated)
    toast.success(`Text repeated ${repeatCount} times!`)
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
    setRepeatCount(5)
    setSeparator(' ')
    toast.success('Cleared all fields')
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">Enter Text to Repeat</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[120px] rounded-xl border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
        />
      </div>

      {/* Options Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Number of Repetitions</label>
          <Input
            type="number"
            value={repeatCount}
            onChange={(e) => setRepeatCount(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            max="1000"
            className="h-11 rounded-xl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Separator</label>
          <select
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            className="w-full h-11 rounded-xl border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <option value=" ">Space</option>
            <option value=", ">, (Comma + Space)</option>
            <option value=" | ">| (Pipe)</option>
            <option value=" || ">|| (Double Pipe)</option>
            <option value="NEWLINE">New Line</option>
            <option value="">No Separator</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleRepeat}
          className="flex-1 gap-2 h-12 rounded-xl"
        >
          <Wand2 className="w-5 h-5" />
          Repeat Text
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
            <label className="block text-sm font-medium">Repeated Text</label>
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
          <Wand2 className="w-4 h-4 text-primary" />
          Tips
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Use "New Line" separator for vertical lists</li>
          <li>Set separator to "No Separator" for continuous text</li>
          <li>Maximum 1000 repetitions supported</li>
        </ul>
      </div>
    </div>
  )
}
