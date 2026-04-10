'use client'

import { useState, useEffect } from 'react'
import { Copy, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function textToBinary(text: string): string {
  return text
    .split('')
    .map(char => {
      const binary = char.charCodeAt(0).toString(2).padStart(8, '0')
      return binary
    })
    .join(' ')
}

function binaryToText(binary: string): string {
  try {
    return binary
      .trim()
      .split(/\s+/)
      .filter(byte => byte.length > 0)
      .map(byte => {
        const charCode = parseInt(byte, 2)
        return String.fromCharCode(charCode)
      })
      .join('')
  } catch (error) {
    return 'Error: Invalid binary input'
  }
}

function textToHex(text: string): string {
  return text
    .split('')
    .map(char => {
      const hex = char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
      return hex
    })
    .join(' ')
}

function hexToText(hex: string): string {
  try {
    return hex
      .trim()
      .split(/\s+/)
      .filter(byte => byte.length > 0)
      .map(byte => {
        const charCode = parseInt(byte, 16)
        return String.fromCharCode(charCode)
      })
      .join('')
  } catch (error) {
    return 'Error: Invalid hex input'
  }
}

function textToDecimal(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString())
    .join(' ')
}

function decimalToText(decimal: string): string {
  try {
    return decimal
      .trim()
      .split(/\s+/)
      .filter(code => code.length > 0)
      .map(code => {
        const charCode = parseInt(code, 10)
        return String.fromCharCode(charCode)
      })
      .join('')
  } catch (error) {
    return 'Error: Invalid decimal input'
  }
}

function textToOctal(text: string): string {
  return text
    .split('')
    .map(char => {
      const octal = char.charCodeAt(0).toString(8).padStart(3, '0')
      return octal
    })
    .join(' ')
}

function octalToText(octal: string): string {
  try {
    return octal
      .trim()
      .split(/\s+/)
      .filter(byte => byte.length > 0)
      .map(byte => {
        const charCode = parseInt(byte, 8)
        return String.fromCharCode(charCode)
      })
      .join('')
  } catch (error) {
    return 'Error: Invalid octal input'
  }
}

export function EnglishToBinaryTool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'text-to-binary' | 'binary-to-text'>('text-to-binary')

  useEffect(() => {
    if (input.trim()) {
      if (mode === 'text-to-binary') {
        setOutput(textToBinary(input))
      } else {
        setOutput(binaryToText(input))
      }
    } else {
      setOutput('')
    }
  }, [input, mode])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: 'Copied!',
      description: 'Text copied to clipboard',
    })
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
  }

  const swapMode = () => {
    const newMode = mode === 'text-to-binary' ? 'binary-to-text' : 'text-to-binary'
    setMode(newMode)
    // Swap input and output
    setInput(output)
    setOutput(input)
  }

  const handleExample = () => {
    if (mode === 'text-to-binary') {
      setInput('Hello World')
    } else {
      setInput('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100')
    }
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      <div>
        <h2 className="text-2xl font-bold mb-2">English to Binary Converter</h2>
        <p className="text-sm text-muted-foreground">
          Convert text to binary and vice versa. Also supports hex, decimal, and octal conversions.
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text-to-binary">Text to Binary</TabsTrigger>
          <TabsTrigger value="binary-to-text">Binary to Text</TabsTrigger>
        </TabsList>

        <TabsContent value="text-to-binary" className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Enter Text
            </label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to convert to binary (e.g., Hello World)"
              className="min-h-[120px] font-mono"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={swapMode} variant="outline" className="flex-1">
              <RefreshCw className="w-4 h-4 mr-2" />
              Switch to Binary to Text
            </Button>
            <Button onClick={clearAll} variant="outline">
              Clear
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="binary-to-text" className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Enter Binary
            </label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter binary code (e.g., 01001000 01100101 01101100 01101100 01101111)"
              className="min-h-[120px] font-mono"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={swapMode} variant="outline" className="flex-1">
              <RefreshCw className="w-4 h-4 mr-2" />
              Switch to Text to Binary
            </Button>
            <Button onClick={clearAll} variant="outline">
              Clear
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Examples */}
      <div>
        <p className="text-sm font-medium mb-3">Quick Examples:</p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleExample} variant="outline" size="sm">
            {mode === 'text-to-binary' ? 'Hello World' : 'Hello World (binary)'}
          </Button>
          <Button onClick={() => setInput(mode === 'text-to-binary' ? 'ABC' : '01000001 01000010 01000011')} variant="outline" size="sm">
            ABC
          </Button>
          <Button onClick={() => setInput(mode === 'text-to-binary' ? '123' : '00110001 00110010 00110011')} variant="outline" size="sm">
            123
          </Button>
        </div>
      </div>

      {output && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Output</h3>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  {mode === 'text-to-binary' ? 'Binary Code' : 'Text'}
                </CardTitle>
                <Button
                  onClick={() => copyToClipboard(output)}
                  size="sm"
                  variant="outline"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted/50 rounded-lg font-mono text-lg break-all min-h-[60px]">
                {output}
              </div>
            </CardContent>
          </Card>

          {/* Additional Conversions */}
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-base">Other Number Systems</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Hexadecimal</label>
                  <Button
                    onClick={() => copyToClipboard(textToHex(input))}
                    size="sm"
                    variant="ghost"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm break-all">
                  {textToHex(input)}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Decimal</label>
                  <Button
                    onClick={() => copyToClipboard(textToDecimal(input))}
                    size="sm"
                    variant="ghost"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm break-all">
                  {textToDecimal(input)}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Octal</label>
                  <Button
                    onClick={() => copyToClipboard(textToOctal(input))}
                    size="sm"
                    variant="ghost"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg font-mono text-sm break-all">
                  {textToOctal(input)}
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Each character in your text is converted to its ASCII value and represented in different number systems.
              </p>
            </CardContent>
          </Card>

          {/* Character Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Character Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {input.split('').slice(0, 12).map((char, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded text-center">
                    <div className="font-bold text-lg">{char === ' ' ? 'Space' : char}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {char.charCodeAt(0).toString(2).padStart(8, '0')}
                    </div>
                  </div>
                ))}
                {input.length > 12 && (
                  <div className="p-2 bg-muted/50 rounded text-center">
                    <div className="font-bold text-lg">...</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      +{input.length - 12} more
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
