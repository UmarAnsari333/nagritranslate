'use client'

import { useState, useRef, useEffect } from 'react'
import { FileText, Book, Globe, Newspaper, GraduationCap, Copy, Check, Sparkles, Trash2, Plus, X, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CitationSource {
  id: string
  sourceType: string
  citationData: {
    author?: string
    title?: string
    year?: string
    publisher?: string
    url?: string
    dateAccessed?: string
    journal?: string
    volume?: string
    issue?: string
    pages?: string
    newspaper?: string
    edition?: string
  }
  selectedText: string
}

export function CitationGeneratorTool() {
  const [text, setText] = useState('')
  const [selectedText, setSelectedText] = useState('')
  const [copied, setCopied] = useState(false)
  const [currentStep, setCurrentStep] = useState<'input' | 'select' | 'questions'>('input')
  const [currentSourceType, setCurrentSourceType] = useState('')
  const [citationForm, setCitationForm] = useState<Record<string, string>>({})
  const [citationFormat, setCitationFormat] = useState('apa')
  const [citations, setCitations] = useState<CitationSource[]>([])
  const [currentCitation, setCurrentCitation] = useState<CitationSource | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [showCitationFormatDropdown, setShowCitationFormatDropdown] = useState(true)

  const sourceTypes = [
    { value: 'book', label: 'Book', icon: Book, color: 'from-blue-500/5 to-blue-500/10' },
    { value: 'webpage', label: 'Webpage', icon: Globe, color: 'from-green-500/5 to-green-500/10' },
    { value: 'newspaper', label: 'Newspaper', icon: Newspaper, color: 'from-orange-500/5 to-orange-500/10' },
    { value: 'academic', label: 'Academic Article', icon: GraduationCap, color: 'from-purple-500/5 to-purple-500/10' },
  ]

  const citationFormats = [
    { value: 'apa', label: 'APA 7th Edition' },
    { value: 'mla', label: 'MLA 9th Edition' },
    { value: 'chicago', label: 'Chicago 17th Edition' },
    { value: 'harvard', label: 'Harvard Style' },
  ]

  const handleTextSelection = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = text.substring(start, end)

    if (selected.trim()) {
      setSelectedText(selected)
      setCurrentStep('select')
      // Scroll to the source type selection
      setTimeout(() => {
        const element = document.getElementById('source-type-selection')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    // Clear selected text if the textarea content changes
    if (selectedText && !e.target.value.includes(selectedText)) {
      setSelectedText('')
      setCurrentStep('input')
    }
  }

  const handleSourceTypeSelect = (type: string) => {
    setCurrentSourceType(type)
    setCurrentStep('questions')
    setCitationForm({})
  }

  const handleCitationFormSubmit = () => {
    const newCitation: CitationSource = {
      id: Date.now().toString(),
      sourceType: currentSourceType,
      citationData: citationForm,
      selectedText,
    }

    setCitations([...citations, newCitation])
    setCurrentCitation(newCitation)
    setCurrentStep('input')
    setSelectedText('')
    setCurrentSourceType('')
    setCitationForm({})
  }

  const generateCitation = (source: CitationSource, format: string) => {
    const data = source.citationData
    let citation = ''

    switch (format) {
      case 'apa':
        if (source.sourceType === 'book') {
          citation = `${data.author} (${data.year}). ${data.title}. ${data.publisher}.`
        } else if (source.sourceType === 'webpage') {
          citation = `${data.author || 'Author'}. (${data.year || 'n.d.'}). ${data.title}. ${data.url}.`
        } else if (source.sourceType === 'newspaper') {
          citation = `${data.author} (${data.year}). ${data.title}. ${data.newspaper}${data.edition ? `, ${data.edition} ed.` : ''}.`
        } else if (source.sourceType === 'academic') {
          citation = `${data.author} (${data.year}). ${data.title}. ${data.journal}, ${data.volume}(${data.issue}), ${data.pages}.`
        }
        break

      case 'mla':
        if (source.sourceType === 'book') {
          citation = `${data.author}. ${data.title}. ${data.publisher}, ${data.year}.`
        } else if (source.sourceType === 'webpage') {
          citation = `${data.author || 'Author'}. "${data.title}." ${data.url}. ${data.dateAccessed || 'Accessed'}.`
        } else if (source.sourceType === 'newspaper') {
          citation = `${data.author}. "${data.title}." ${data.newspaper}, ${data.year}.`
        } else if (source.sourceType === 'academic') {
          citation = `${data.author}. "${data.title}." ${data.journal}, vol. ${data.volume}, no. ${data.issue}, ${data.year}, pp. ${data.pages}.`
        }
        break

      case 'chicago':
        if (source.sourceType === 'book') {
          citation = `${data.author}. ${data.title}. ${data.publisher}, ${data.year}.`
        } else if (source.sourceType === 'webpage') {
          citation = `${data.author || 'Author'}. "${data.title}." ${data.url} (accessed ${data.dateAccessed || 'date'}).`
        } else if (source.sourceType === 'newspaper') {
          citation = `${data.author}. "${data.title}." ${data.newspaper}, ${data.year}.`
        } else if (source.sourceType === 'academic') {
          citation = `${data.author}. "${data.title}." ${data.journal} ${data.volume}, no. ${data.issue} (${data.year}): ${data.pages}.`
        }
        break

      case 'harvard':
        if (source.sourceType === 'book') {
          citation = `${data.author} (${data.year}) ${data.title}. ${data.publisher}.`
        } else if (source.sourceType === 'webpage') {
          citation = `${data.author || 'Author'} (${data.year || 'n.d.'}) ${data.title}. [Online]. ${data.url}.`
        } else if (source.sourceType === 'newspaper') {
          citation = `${data.author} (${data.year}) '${data.title}', ${data.newspaper}.`
        } else if (source.sourceType === 'academic') {
          citation = `${data.author} (${data.year}) '${data.title}', ${data.journal}, ${data.volume}(${data.issue}), pp. ${data.pages}.`
        }
        break
    }

    return citation
  }

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClear = () => {
    setText('')
    setSelectedText('')
    setCurrentStep('input')
    setCitations([])
  }

  const handleDeleteCitation = (id: string) => {
    setCitations(citations.filter(c => c.id !== id))
  }

  const renderSourceQuestions = () => {
    switch (currentSourceType) {
      case 'book':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="author">Author (Format: Last, First)</Label>
              <Input
                id="author"
                placeholder="Smith, John"
                value={citationForm.author || ''}
                onChange={(e) => setCitationForm({...citationForm, author: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Book Title"
                value={citationForm.title || ''}
                onChange={(e) => setCitationForm({...citationForm, title: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                placeholder="2024"
                type="number"
                value={citationForm.year || ''}
                onChange={(e) => setCitationForm({...citationForm, year: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="publisher">Publisher</Label>
              <Input
                id="publisher"
                placeholder="Publisher Name"
                value={citationForm.publisher || ''}
                onChange={(e) => setCitationForm({...citationForm, publisher: e.target.value})}
              />
            </div>
          </div>
        )

      case 'webpage':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="author">Author (if available)</Label>
              <Input
                id="author"
                placeholder="Author Name"
                value={citationForm.author || ''}
                onChange={(e) => setCitationForm({...citationForm, author: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="title">Page Title</Label>
              <Input
                id="title"
                placeholder="Page Title"
                value={citationForm.title || ''}
                onChange={(e) => setCitationForm({...citationForm, title: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={citationForm.url || ''}
                onChange={(e) => setCitationForm({...citationForm, url: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="year">Year (if available)</Label>
              <Input
                id="year"
                placeholder="2024"
                type="number"
                value={citationForm.year || ''}
                onChange={(e) => setCitationForm({...citationForm, year: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="dateAccessed">Date Accessed</Label>
              <Input
                id="dateAccessed"
                placeholder="April 5, 2024"
                value={citationForm.dateAccessed || ''}
                onChange={(e) => setCitationForm({...citationForm, dateAccessed: e.target.value})}
              />
            </div>
          </div>
        )

      case 'newspaper':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                placeholder="Smith, John"
                value={citationForm.author || ''}
                onChange={(e) => setCitationForm({...citationForm, author: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="title">Article Title</Label>
              <Input
                id="title"
                placeholder="Article Title"
                value={citationForm.title || ''}
                onChange={(e) => setCitationForm({...citationForm, title: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="newspaper">Newspaper Name</Label>
              <Input
                id="newspaper"
                placeholder="The New York Times"
                value={citationForm.newspaper || ''}
                onChange={(e) => setCitationForm({...citationForm, newspaper: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                placeholder="2024"
                type="number"
                value={citationForm.year || ''}
                onChange={(e) => setCitationForm({...citationForm, year: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="edition">Edition (if applicable)</Label>
              <Input
                id="edition"
                placeholder="First edition"
                value={citationForm.edition || ''}
                onChange={(e) => setCitationForm({...citationForm, edition: e.target.value})}
              />
            </div>
          </div>
        )

      case 'academic':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="author">Author (Format: Last, First)</Label>
              <Input
                id="author"
                placeholder="Smith, John"
                value={citationForm.author || ''}
                onChange={(e) => setCitationForm({...citationForm, author: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="title">Article Title</Label>
              <Input
                id="title"
                placeholder="Article Title"
                value={citationForm.title || ''}
                onChange={(e) => setCitationForm({...citationForm, title: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="journal">Journal Name</Label>
              <Input
                id="journal"
                placeholder="Journal Name"
                value={citationForm.journal || ''}
                onChange={(e) => setCitationForm({...citationForm, journal: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                placeholder="2024"
                type="number"
                value={citationForm.year || ''}
                onChange={(e) => setCitationForm({...citationForm, year: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="volume">Volume</Label>
              <Input
                id="volume"
                placeholder="15"
                value={citationForm.volume || ''}
                onChange={(e) => setCitationForm({...citationForm, volume: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="issue">Issue</Label>
              <Input
                id="issue"
                placeholder="3"
                value={citationForm.issue || ''}
                onChange={(e) => setCitationForm({...citationForm, issue: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="pages">Pages</Label>
              <Input
                id="pages"
                placeholder="123-145"
                value={citationForm.pages || ''}
                onChange={(e) => setCitationForm({...citationForm, pages: e.target.value})}
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Citation Format Selection - Always visible at top */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <Label htmlFor="citation-format-top" className="font-semibold">Citation Format:</Label>
          </div>
          <Select value={citationFormat} onValueChange={setCitationFormat}>
            <SelectTrigger id="citation-format-top" className="w-[220px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {citationFormats.map((format) => (
                <SelectItem key={format.value} value={format.value}>
                  {format.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Text Input Section */}
      {currentStep === 'input' && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Text Input</h3>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text-input">Paste or type your text here:</Label>
            <Textarea
              id="text-input"
              ref={textareaRef}
              value={text}
              onChange={handleTextareaInput}
              onMouseUp={handleTextSelection}
              onKeyUp={handleTextSelection}
              placeholder="Paste or type the text you want to cite here. Then select the portion you want to cite..."
              className="min-h-[200px] font-sans"
            />
          </div>

          <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  Select/highlight text you want to cite, then choose the source type below
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Simply click and drag to select text, or use keyboard shortcuts. Your selection will automatically trigger the next step.
                </p>
              </div>
            </div>
          </Card>

          {selectedText && (
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-2">Selected Text:</p>
                  <p className="text-sm text-muted-foreground italic">"{selectedText}"</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedText('')}
                  className="h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          )}

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleClear}
              disabled={!text && citations.length === 0}
              className="flex-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
            <Button
              variant="outline"
              onClick={() => handleCopy(citations.map(c => generateCitation(c, citationFormat)).join('\n\n'))}
              disabled={citations.length === 0}
              className="flex-1"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy All Citations
                </>
              )}
            </Button>
          </div>
        </Card>
      )}

      {/* Source Type Selection */}
      {currentStep === 'select' && selectedText && (
        <Card id="source-type-selection" className="p-6 space-y-4 border-2 border-primary/30 bg-primary/5">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">What type of source is this?</h3>
          </div>

          <Card className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Selected Text:</p>
                <p className="text-sm text-blue-800 dark:text-blue-200 italic">"{selectedText}"</p>
              </div>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            {sourceTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.value}
                  onClick={() => handleSourceTypeSelect(type.value)}
                  className={`p-6 rounded-xl border-2 border-transparent hover:border-primary/50 transition-all bg-gradient-to-br ${type.color} hover:shadow-md`}
                >
                  <Icon className="w-8 h-8 mb-3 text-primary" />
                  <h4 className="font-semibold text-left">{type.label}</h4>
                </button>
              )
            })}
          </div>

          <Button
            variant="outline"
            onClick={() => {
              setCurrentStep('input')
              setSelectedText('')
            }}
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
        </Card>
      )}

      {/* Citation Form */}
      {currentStep === 'questions' && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">
              Please provide the following information for your {currentSourceType}:
            </h3>
          </div>

          {renderSourceQuestions()}

          <div className="flex gap-2 pt-4">
            <Button
              onClick={handleCitationFormSubmit}
              className="flex-1"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Citation
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentStep('select')}
              className="flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </Card>
      )}

      {/* Citation Format Selection */}
      {citations.length > 0 && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Citations ({citations.length})</h3>
            <span className="text-sm text-muted-foreground">
              - Format: {citationFormats.find(f => f.value === citationFormat)?.label}
            </span>
          </div>

          <div className="space-y-4">
            {citations.map((citation) => (
              <Card key={citation.id} className="p-4 bg-muted/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 rounded-full">
                        {sourceTypes.find(t => t.value === citation.sourceType)?.label}
                      </span>
                      {citation.selectedText && (
                        <span className="text-xs text-muted-foreground italic">
                          "{citation.selectedText.substring(0, 50)}{citation.selectedText.length > 50 ? '...' : ''}"
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-mono bg-background p-3 rounded-lg">
                      {generateCitation(citation, citationFormat)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(generateCitation(citation, citationFormat))}
                      className="h-8"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteCitation(citation.id)}
                      className="h-8 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      )}

      {/* Info Box */}
      <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900 dark:text-blue-100">
            <p className="font-semibold mb-1">About Citation Generator</p>
            <p className="text-blue-800 dark:text-blue-200">
              Create citations in APA, MLA, Chicago, and Harvard styles. Simply paste your text, select the portion to cite, answer questions about the source, and generate properly formatted citations instantly.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}