'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// Unicode styles – actually transform characters so text works when pasted anywhere
const unicodeStyles = [
  {
    name: 'Unicode Script',
    id: 'unicode-script',
    description: 'Works anywhere when copy-pasted',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ',
        'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃',
        'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊',
        'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢',
        'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩',
        'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
        'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
      }
      return map[char] ?? char
    }).join('')
  },
  {
    name: 'Unicode Bold',
    id: 'unicode-bold',
    description: 'Bold cursive – works anywhere when copy-pasted',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰',
        'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷',
        'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾',
        'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖',
        'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝',
        'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤',
        'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
      }
      return map[char] ?? char
    }).join('')
  },
]

// Google Font styles – visual preview, copy copies plain text
const googleFontStyles = [
  { name: 'Dancing Script',       id: 'dancing-script',        family: 'Dancing Script' },
  { name: 'Pacifico',             id: 'pacifico',              family: 'Pacifico' },
  { name: 'Style Script',         id: 'style-script',          family: 'Style Script' },
  { name: 'WindSong',             id: 'windsong',              family: 'WindSong' },
  { name: 'Satisfy',              id: 'satisfy',               family: 'Satisfy' },
  { name: 'Sacramento',           id: 'sacramento',            family: 'Sacramento' },
  { name: 'Parisienne',           id: 'parisienne',            family: 'Parisienne' },
  { name: 'Damion',               id: 'damion',                family: 'Damion' },
  { name: 'Yellowtail',           id: 'yellowtail',            family: 'Yellowtail' },
  { name: 'Allura',               id: 'allura',                family: 'Allura' },
  { name: 'Great Vibes',          id: 'great-vibes',           family: 'Great Vibes' },
  { name: 'Pinyon Script',        id: 'pinyon-script',         family: 'Pinyon Script' },
  { name: 'Alex Brush',           id: 'alex-brush',            family: 'Alex Brush' },
  { name: 'Kaushan Script',       id: 'kaushan-script',        family: 'Kaushan Script' },
  { name: 'Mr Dafoe',             id: 'mr-dafoe',              family: 'Mr Dafoe' },
  { name: 'Cedarville Cursive',   id: 'cedarville-cursive',    family: 'Cedarville Cursive' },
  { name: 'Homemade Apple',       id: 'homemade-apple',        family: 'Homemade Apple' },
  { name: 'Calligraffiti',        id: 'calligraffiti',         family: 'Calligraffiti' },
  { name: 'Dawning of a New Day', id: 'dawning-of-a-new-day',  family: 'Dawning of a New Day' },
  { name: 'Beth Ellen',           id: 'beth-ellen',            family: 'Beth Ellen' },
  { name: 'Lovers Quarrel',       id: 'lovers-quarrel',        family: 'Lovers Quarrel' },
  { name: 'Ruthie',               id: 'ruthie',                family: 'Ruthie' },
  { name: 'Zeyada',               id: 'zeyada',                family: 'Zeyada' },
  { name: 'Lobster',              id: 'lobster',               family: 'Lobster' },
  { name: 'Fuggles',              id: 'fuggles',               family: 'Fuggles' },
  { name: 'Caveat',               id: 'caveat',                family: 'Caveat' },
  { name: 'Courgette',            id: 'courgette',             family: 'Courgette' },
  { name: 'Marck Script',         id: 'marck-script',          family: 'Marck Script' },
  { name: 'Tangerine',            id: 'tangerine',             family: 'Tangerine' },
]

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=' +
  googleFontStyles
    .map(f => f.family.replace(/ /g, '+'))
    .join('&family=') +
  '&display=swap'

export function CursiveTextGeneratorTool() {
  const [input, setInput] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'unicode' | 'fonts'>('fonts')
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    if (document.getElementById('cursive-google-fonts')) {
      setFontsLoaded(true)
      return
    }
    const link = document.createElement('link')
    link.id = 'cursive-google-fonts'
    link.rel = 'stylesheet'
    link.href = GOOGLE_FONTS_URL
    link.onload = () => setFontsLoaded(true)
    document.head.appendChild(link)
  }, [])

  const copy = (text: string, id: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
    toast({ title: 'Copied!', description: `${label} copied to clipboard` })
  }

  const copyAll = () => {
    if (activeTab === 'unicode') {
      const all = unicodeStyles.map(s => `${s.name}:\n${s.transform(input)}`).join('\n\n')
      navigator.clipboard.writeText(all)
    } else {
      navigator.clipboard.writeText(input)
    }
    toast({ title: 'Copied!' })
  }

  const charCount = input.length
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0
  const hasInput = input.trim().length > 0

  return (
    <div className="space-y-5">
      {/* Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold">Your Text</label>
          <span className="text-xs text-muted-foreground">{charCount} chars · {wordCount} words</span>
        </div>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your text here..."
          className="min-h-24 text-base resize-none"
          autoFocus
        />
        {hasInput && (
          <div className="flex gap-2">
            <Button onClick={copyAll} size="sm" className="flex-1">
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              Copy All
            </Button>
            <Button onClick={() => setInput('')} size="sm" variant="outline">
              <X className="w-3.5 h-3.5 mr-1" />
              Clear
            </Button>
          </div>
        )}
      </div>

      {/* Tab toggle */}
      <div className="flex rounded-lg border p-1 gap-1 bg-muted/30">
        <button
          onClick={() => setActiveTab('fonts')}
          className={`flex-1 text-sm py-1.5 rounded-md font-medium transition-colors ${
            activeTab === 'fonts'
              ? 'bg-background shadow-sm text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Font Styles ({googleFontStyles.length})
        </button>
        <button
          onClick={() => setActiveTab('unicode')}
          className={`flex-1 text-sm py-1.5 rounded-md font-medium transition-colors ${
            activeTab === 'unicode'
              ? 'bg-background shadow-sm text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Unicode Styles (2)
        </button>
      </div>

      {/* Placeholder when no input */}
      {!hasInput && (
        <div className="text-center py-10 text-muted-foreground">
          <p
            className="text-4xl mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Cursive Text
          </p>
          <p className="text-sm">
            Type above to preview{' '}
            {activeTab === 'fonts' ? `${googleFontStyles.length} font styles` : '2 unicode styles'}
          </p>
        </div>
      )}

      {/* Font Styles Grid */}
      {hasInput && activeTab === 'fonts' && (
        <div className="grid gap-3">
          {googleFontStyles.map(style => {
            const isCopied = copiedId === style.id
            return (
              <div
                key={style.id}
                className="group p-4 rounded-xl border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {style.name}
                  </span>
                  <Button
                    onClick={() => copy(input, style.id, style.name)}
                    size="sm"
                    variant={isCopied ? 'default' : 'outline'}
                    className="h-7 px-2.5 text-xs"
                  >
                    {isCopied ? (
                      <><Check className="w-3 h-3 mr-1" />Copied</>
                    ) : (
                      <><Copy className="w-3 h-3 mr-1" />Copy</>
                    )}
                  </Button>
                </div>
                <div
                  className="text-2xl leading-relaxed wrap-break-word cursor-text select-all"
                  style={{
                    fontFamily: `'${style.family}', cursive`,
                    opacity: fontsLoaded ? 1 : 0.5,
                  }}
                  onClick={() => copy(input, style.id, style.name)}
                  title="Click to copy"
                >
                  {input}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Unicode Styles Grid */}
      {hasInput && activeTab === 'unicode' && (
        <div className="space-y-2 text-xs text-muted-foreground mb-1">
          <p className="px-1">Unicode styles transform characters so cursive text works when pasted into social media, messages, and any plain-text field.</p>
          <div className="grid gap-3 mt-3">
            {unicodeStyles.map(style => {
              const output = style.transform(input)
              const isCopied = copiedId === style.id
              return (
                <div
                  key={style.id}
                  className="group p-4 rounded-xl border bg-card hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold">{style.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{style.description}</p>
                    </div>
                    <Button
                      onClick={() => copy(output, style.id, style.name)}
                      size="sm"
                      variant={isCopied ? 'default' : 'outline'}
                      className="h-7 px-2.5 text-xs shrink-0"
                    >
                      {isCopied ? (
                        <><Check className="w-3 h-3 mr-1" />Copied</>
                      ) : (
                        <><Copy className="w-3 h-3 mr-1" />Copy</>
                      )}
                    </Button>
                  </div>
                  <div
                    className="text-xl leading-relaxed break-all cursor-text select-all"
                    onClick={() => copy(output, style.id, style.name)}
                    title="Click to copy"
                  >
                    {output}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
