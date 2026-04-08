'use client'

import { useState, useEffect } from 'react'
import { Copy, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ones: { [key: number]: string } = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

const tens: { [key: number]: string } = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

const scales: { [key: number]: string } = {
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
}

function convertChunk(num: number): string {
  let words: string[] = []

  if (num >= 100) {
    words.push(ones[Math.floor(num / 100)])
    words.push(scales[100])
    num %= 100
  }

  if (num >= 20) {
    const tensDigit = Math.floor(num / 10) * 10
    words.push(tens[tensDigit])
    const remainder = num % 10
    if (remainder > 0) {
      words.push(ones[remainder])
    }
  } else if (num > 0) {
    words.push(ones[num])
  }

  return words.join(' ')
}

function numberToWords(num: number): string {
  if (num === 0) {
    return ones[0]
  }

  const isNegative = num < 0
  num = Math.abs(num)

  const integerPart = Math.floor(num)
  const decimalPart = Math.round((num - integerPart) * 100)

  let words: string[] = []

  // Handle integer part
  let remaining = integerPart

  // Process each scale from largest to smallest
  const scalesList = [
    { value: 1000000000000000000, name: 'quintillion' },
    { value: 1000000000000000, name: 'quadrillion' },
    { value: 1000000000000, name: 'trillion' },
    { value: 1000000000, name: 'billion' },
    { value: 1000000, name: 'million' },
    { value: 1000, name: 'thousand' },
    { value: 100, name: 'hundred' },
  ]

  for (const scale of scalesList) {
    if (remaining >= scale.value) {
      const chunk = Math.floor(remaining / scale.value)
      const chunkWords = convertChunk(chunk)
      if (chunkWords) {
        words.push(chunkWords)
        words.push(scale.name)
      }
      remaining %= scale.value
    }
  }

  // Handle remaining (ones and tens)
  if (remaining > 0) {
    const chunkWords = convertChunk(remaining)
    if (chunkWords) {
      words.push(chunkWords)
    }
  }

  // Handle decimal part
  if (decimalPart > 0) {
    words.push('point')
    const decimalOnes = Math.floor(decimalPart / 10)
    const decimalTens = decimalPart % 10

    if (decimalOnes > 0) {
      words.push(ones[decimalOnes])
    }
    if (decimalTens > 0) {
      words.push(ones[decimalTens])
    }
  }

  let result = words.join(' ')

  if (isNegative) {
    result = 'negative ' + result
  }

  return result.trim()
}

function numberToWordsTitleCase(num: number): string {
  const words = numberToWords(num)
  return words.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}

function numberToWordsUpperCase(num: number): string {
  return numberToWords(num).toUpperCase()
}

function numberToWordsSentenceCase(num: number): string {
  const words = numberToWords(num)
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export function NumbersToWordsTool() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    if (input.trim()) {
      const num = parseFloat(input)
      if (!isNaN(num)) {
        setResult(numberToWords(num))
      } else {
        setResult('')
      }
    } else {
      setResult('')
    }
  }, [input])

  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: 'Copied!',
      description: `${format} copied to clipboard`,
    })
  }

  const clearAll = () => {
    setInput('')
    setResult('')
  }

  const handleExample = (num: number) => {
    setInput(num.toString())
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Numbers To Words</h2>
        <p className="text-sm text-muted-foreground">
          Convert any number to its word representation instantly
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Enter a Number
          </label>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a number (e.g., 12345.67)"
            className="text-lg font-mono"
          />
        </div>

        <div className="flex gap-3">
          <Button onClick={clearAll} variant="outline" className="flex-1">
            Clear
          </Button>
        </div>

        {/* Quick Examples */}
        <div>
          <p className="text-sm font-medium mb-3">Quick Examples:</p>
          <div className="flex flex-wrap gap-2">
            {[0, 42, 123, 1000, 15000, 1000000, -500, 99.99, 1234567.89].map((num, i) => (
              <Button
                key={i}
                onClick={() => handleExample(num)}
                variant="outline"
                size="sm"
                className="font-mono"
              >
                {num}
              </Button>
            ))}
          </div>
        </div>

        {result && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Results</h3>

            <Tabs defaultValue="lowercase" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="lowercase">Lowercase</TabsTrigger>
                <TabsTrigger value="titlecase">Title Case</TabsTrigger>
                <TabsTrigger value="uppercase">UPPERCASE</TabsTrigger>
                <TabsTrigger value="sentence">Sentence</TabsTrigger>
              </TabsList>

              <TabsContent value="lowercase">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Lowercase</CardTitle>
                      <Button
                        onClick={() => copyToClipboard(result, 'Lowercase')}
                        size="sm"
                        variant="outline"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted/50 rounded-lg font-mono text-lg">
                      {result}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="titlecase">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Title Case</CardTitle>
                      <Button
                        onClick={() => copyToClipboard(numberToWordsTitleCase(parseFloat(input)), 'Title Case')}
                        size="sm"
                        variant="outline"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted/50 rounded-lg font-mono text-lg">
                      {numberToWordsTitleCase(parseFloat(input))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="uppercase">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">UPPERCASE</CardTitle>
                      <Button
                        onClick={() => copyToClipboard(numberToWordsUpperCase(parseFloat(input)), 'UPPERCASE')}
                        size="sm"
                        variant="outline"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted/50 rounded-lg font-mono text-lg">
                      {numberToWordsUpperCase(parseFloat(input))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sentence">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Sentence Case</CardTitle>
                      <Button
                        onClick={() => copyToClipboard(numberToWordsSentenceCase(parseFloat(input)), 'Sentence Case')}
                        size="sm"
                        variant="outline"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted/50 rounded-lg font-mono text-lg">
                      {numberToWordsSentenceCase(parseFloat(input))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Number Info */}
            <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Number Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {input.includes('.') ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Integer Part:</span>
                        <span className="font-medium font-mono">{Math.floor(parseFloat(input))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Decimal Part:</span>
                        <span className="font-medium font-mono">{(parseFloat(input) % 1).toFixed(2).substring(2)}</span>
                      </div>
                    </>
                  ) : null}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Number:</span>
                    <span className="font-medium font-mono">{parseFloat(input).toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Digits:</span>
                    <span className="font-medium">{input.replace(/[^0-9]/g, '').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Word Count:</span>
                    <span className="font-medium">{result.split(' ').length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
