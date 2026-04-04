'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeftRight,
  Copy,
  Check,
  X,
  Loader2,
  Globe,
  Volume2,
  StopCircle,
  Upload,
  ChevronRight,
  Sparkles,
  Zap,
  Mic,
  MicOff,
  Wand2,
  Home,
  FileText,
  Shield,
  Clock,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { languages, getLanguageByValue, getLanguageBySlug, slugifyLanguage } from '@/lib/languages'
import { useTranslationHistory, HistoryItem } from '@/hooks/use-translation-history'
import { HistorySidebar } from '@/components/history-sidebar'
import { DocumentUploadModal } from '@/components/document-upload-modal'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

const MAX_CHARS = 5000

// Map language codes to speech synthesis language codes
const getSpeechLangCode = (langCode: string): string => {
  const speechLangMap: Record<string, string> = {
    'en': 'en-US',
    'es': 'es-ES',
    'fr': 'fr-FR',
    'de': 'de-DE',
    'it': 'it-IT',
    'pt': 'pt-PT',
    'ru': 'ru-RU',
    'ja': 'ja-JP',
    'ko': 'ko-KR',
    'zh-CN': 'zh-CN',
    'zh-TW': 'zh-TW',
    'ar': 'ar-SA',
    'hi': 'hi-IN',
    'ur': 'ur-PK',
    'tr': 'tr-TR',
    'nl': 'nl-NL',
    'pl': 'pl-PL',
    'vi': 'vi-VN',
    'th': 'th-TH',
    'id': 'id-ID',
  }

  return speechLangMap[langCode] || langCode
}

function parseSlugToLangs(slug: string): { source: string; target: string } {
  const match = slug.match(/^(.+)-to-(.+)$/)
  if (!match) return { source: 'auto', target: 'en' }
  const sourceLang = getLanguageBySlug(match[1])
  const targetLang = getLanguageBySlug(match[2])
  return {
    source: sourceLang?.value ?? 'auto',
    target: targetLang?.value ?? 'en',
  }
}

export default function GeneralTranslatePage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? '')
  const { source: initialSource, target: initialTarget } = parseSlugToLangs(slug)

  const [sourceLang, setSourceLang] = useState(initialSource)
  const [targetLang, setTargetLang] = useState(initialTarget)
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isSourceDropdownOpen, setIsSourceDropdownOpen] = useState(false)
  const [isTargetDropdownOpen, setIsTargetDropdownOpen] = useState(false)

  // TTS states
  const [isSpeakingInput, setIsSpeakingInput] = useState(false)
  const [isSpeakingOutput, setIsSpeakingOutput] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // History states
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const { history, addToHistory, removeFromHistory, clearHistory } = useTranslationHistory()

  // Document upload states
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false)

  // Voice input states
  const [isListening, setIsListening] = useState(false)
  const [isVoiceSupported, setIsVoiceSupported] = useState(true)
  const recognitionRef = useRef<any>(null)

  // Setup speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = true
        recognitionRef.current.interimResults = true

        recognitionRef.current.onresult = (event: any) => {
          let finalTranscript = ''

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
              finalTranscript += transcript
            }
          }

          if (finalTranscript) {
            setInputText(prev => prev + finalTranscript)
          }
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
          if (event.error === 'not-allowed') {
            toast.error('Microphone access denied. Please allow microphone access.')
          }
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      } else {
        setIsVoiceSupported(false)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  // Toggle voice input
  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      toast.error('Speech recognition is not supported in your browser')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.lang = sourceLang === 'auto' ? 'en-US' : getSpeechLangCode(sourceLang)
      recognitionRef.current.start()
      setIsListening(true)
      toast.success('Listening... Speak now')
    }
  }

  // Detect language function
  const detectLanguage = async () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text first')
      return
    }

    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      })

      const data = await response.json()

      if (data.detectedLanguage) {
        setSourceLang(data.detectedLanguage)
        toast.success(`Detected: ${data.detectedLanguageName || data.detectedLanguage}`)
      }
    } catch (error) {
      const text = inputText.toLowerCase()
      const detectedPatterns: Record<string, RegExp> = {
        'hi': /[\u0900-\u097F]/,
        'zh-CN': /[\u4E00-\u9FFF]/,
        'ja': /[\u3040-\u309F\u30A0-\u30FF]/,
        'ko': /[\uAC00-\uD7AF]/,
        'ar': /[\u0600-\u06FF]/,
        'ru': /[\u0400-\u04FF]/,
      }

      for (const [lang, pattern] of Object.entries(detectedPatterns)) {
        if (pattern.test(text)) {
          setSourceLang(lang)
          const langData = getLanguageByValue(lang)
          toast.success(`Detected: ${langData?.label || lang}`)
          return
        }
      }

      toast.error('Could not detect language. Please select manually.')
    }
  }

  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0
  const translatedWordCount = translatedText.trim() ? translatedText.trim().split(/\s+/).length : 0

  const translateText = useCallback(async () => {
    if (!inputText.trim()) {
      setTranslatedText('')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceLang,
          targetLang,
          text: inputText,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Translation failed')
      }

      setTranslatedText(data.translatedText)

      const sourceLanguage = getLanguageByValue(sourceLang)
      const targetLanguage = getLanguageByValue(targetLang)
      if (sourceLanguage && targetLanguage) {
        addToHistory(
          sourceLang,
          sourceLanguage.label,
          targetLang,
          targetLanguage.label,
          inputText,
          data.translatedText
        )
      }
    } catch (error) {
      console.error('Translation error:', error)
      toast.error('Translation failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [inputText, sourceLang, targetLang, addToHistory])

  const handleSwapLanguages = () => {
    if (sourceLang === targetLang) {
      toast.error('Cannot swap - languages are the same')
      return
    }
    const temp = sourceLang
    setSourceLang(targetLang)
    setTargetLang(temp)
    setInputText(translatedText)
    setTranslatedText(inputText)
  }

  const handleCopy = async () => {
    if (!translatedText) return

    try {
      await navigator.clipboard.writeText(translatedText)
      setCopied(true)
      toast.success('Copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy')
    }
  }

  const handleClear = () => {
    setInputText('')
    setTranslatedText('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      translateText()
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) {
        translateText()
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [inputText, sourceLang, targetLang])

  const speakText = (text: string, type: 'input' | 'output', langCode: string) => {
    if (!text.trim()) return

    if (!('speechSynthesis' in window)) {
      toast.error('Text-to-speech is not supported in your browser')
      return
    }

    window.speechSynthesis.cancel()

    if ((type === 'input' && isSpeakingInput) || (type === 'output' && isSpeakingOutput)) {
      setIsSpeakingInput(false)
      setIsSpeakingOutput(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utteranceRef.current = utterance

    const speechLang = getSpeechLangCode(langCode)
    utterance.lang = speechLang

    const voices = window.speechSynthesis.getVoices()
    const voice = voices.find(v => v.lang.startsWith(speechLang.split('-')[0])) ||
                  voices.find(v => v.lang === speechLang)
    if (voice) {
      utterance.voice = voice
    }

    utterance.rate = 1.0
    utterance.pitch = 1.0

    utterance.onstart = () => {
      if (type === 'input') {
        setIsSpeakingInput(true)
      } else {
        setIsSpeakingOutput(true)
      }
    }

    utterance.onend = () => {
      setIsSpeakingInput(false)
      setIsSpeakingOutput(false)
      utteranceRef.current = null
    }

    utterance.onerror = (event) => {
      console.error('Speech error:', event.error)
      setIsSpeakingInput(false)
      setIsSpeakingOutput(false)
      utteranceRef.current = null
      if (event.error !== 'canceled') {
        toast.error('Failed to play speech')
      }
    }

    window.speechSynthesis.speak(utterance)
  }

  const handleSelectHistoryItem = (item: HistoryItem) => {
    setSourceLang(item.sourceLang)
    setTargetLang(item.targetLang)
    setInputText(item.inputText)
    setTranslatedText(item.translatedText)
    setIsHistoryOpen(false)
    toast.success('Translation loaded from history')
  }

  const handleDocumentUpload = (text: string, truncated: boolean, message?: string) => {
    setInputText(text)
    if (truncated && message) {
      toast.warning(message)
    } else {
      toast.success('Document uploaded successfully!')
    }
  }

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices()
      }
    }

    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  const charCount = inputText.length
  const isOverLimit = charCount > MAX_CHARS

  const sourceLanguage = getLanguageByValue(sourceLang)
  const targetLanguage = getLanguageByValue(targetLang)

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Translate', path: '/ai-translate' },
      ]} />
      <WebPageSchema
        path={`/ai-translate/${slug}`}
        name={`${sourceLanguage?.label ?? 'Text'} to ${targetLanguage?.label ?? 'Text'} Translator — Free AI Translation`}
        description={`Free AI-powered ${sourceLanguage?.label ?? ''} to ${targetLanguage?.label ?? ''} translator. Translate text instantly with voice input, document upload, and 248+ languages supported.`}
        type="WebPage"
      />
      {/* Header */}
      <Navbar
        showHistoryButton={true}
        historyCount={history.length}
        onHistoryClick={() => setIsHistoryOpen(true)}
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Translate</span>
        </motion.nav>

        {/* Title Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {sourceLanguage?.label === 'Text' && targetLanguage?.label === 'Text' ? 'Translate' : `Translate ${sourceLanguage?.label || 'Text'} to ${targetLanguage?.label || 'Text'}`}
            </h1>
            <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AI Powered
            </div>
          </div>
          <p className="text-muted-foreground">
            Free instant translation from {sourceLanguage?.label || 'Text'} to {targetLanguage?.label || 'Text'} with advanced AI technology
          </p>
        </motion.div>

        {/* Language Selectors */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6"
        >
          <div className="w-full sm:flex-1 max-w-md">
            <Select
              value={sourceLang}
              onValueChange={setSourceLang}
              open={isSourceDropdownOpen}
              onOpenChange={setIsSourceDropdownOpen}
            >
              <SelectTrigger className="bg-background border-border h-12 rounded-lg w-full">
                <SelectValue placeholder={`Select ${sourceLanguage?.label === 'Text' ? 'source' : 'source'} language`} />
              </SelectTrigger>
              <SelectContent className="rounded-lg max-h-80 overflow-y-auto">
                {languages.map((lang) => (
                  <SelectItem
                    key={lang.id}
                    value={lang.value}
                    className="rounded-md"
                  >
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapLanguages}
              className="h-12 w-12 rounded-full"
              disabled={sourceLang === 'auto'}
              title={`Swap ${sourceLanguage?.label || 'source'} and ${targetLanguage?.label || 'target'} languages`}
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="w-full sm:flex-1 max-w-md">
            <Select
              value={targetLang}
              onValueChange={setTargetLang}
              open={isTargetDropdownOpen}
              onOpenChange={setIsTargetDropdownOpen}
            >
              <SelectTrigger className="bg-background border-border h-12 rounded-lg w-full">
                <SelectValue placeholder={`Select ${targetLanguage?.label === 'Text' ? 'target' : 'target'} language`} />
              </SelectTrigger>
              <SelectContent className="rounded-lg max-h-80 overflow-y-auto">
                {languages.filter(l => l.value !== 'auto').map((lang) => (
                  <SelectItem
                    key={lang.id}
                    value={lang.value}
                    className="rounded-md"
                  >
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Translation Areas */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-3 sm:gap-4"
        >
          {/* Input Area */}
          <div className="relative">
            <div className="bg-background rounded-lg border overflow-hidden transition-all hover:border-gray-400">
              <div className="p-3 sm:p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="truncate max-w-[120px] sm:max-w-none">{sourceLanguage?.label || 'Detect Language'}</span>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {inputText && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => speakText(inputText, 'input', sourceLang === 'auto' ? 'en' : sourceLang)}
                        className="h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full"
                        title={isSpeakingInput ? `Stop speaking in ${sourceLanguage?.label || 'source'}` : `Listen to ${sourceLanguage?.label || 'source'} text`}
                      >
                        {isSpeakingInput ? (
                          <StopCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary animate-pulse" />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        )}
                      </Button>
                    </motion.div>
                  )}
                  {inputText && sourceLang === 'auto' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={detectLanguage}
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full"
                      title="Detect language"
                    >
                      <Wand2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  )}
                  {inputText && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClear}
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full"
                    >
                      <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isListening ? "Listening... Speak now" : `Enter ${sourceLanguage?.label === 'Text' ? 'text' : sourceLanguage?.label?.split(' ')[0] || 'text'} to translate...`}
                className={`w-full h-48 sm:h-64 p-3 sm:p-4 bg-transparent resize-none focus:outline-none placeholder:text-muted-foreground text-sm ${isListening ? 'border-2 border-primary/50 rounded-lg' : ''}`}
                disabled={isLoading}
              />
              <div className="p-3 sm:p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] sm:text-xs ${isOverLimit ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {charCount}/{MAX_CHARS}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">•</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                      {wordCount} words
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {isVoiceSupported && (
                      <Button
                        variant={isListening ? "default" : "ghost"}
                        size="sm"
                        onClick={toggleVoiceInput}
                        className={`h-6 sm:h-7 text-[10px] sm:text-xs gap-1 px-2 ${isListening ? 'animate-pulse' : ''}`}
                      >
                        {isListening ? (
                          <>
                            <MicOff className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden sm:inline">Stop</span>
                          </>
                        ) : (
                          <>
                            <Mic className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="hidden sm:inline">Voice</span>
                          </>
                        )}
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsDocumentModalOpen(true)}
                      className="h-6 sm:h-7 text-[10px] sm:text-xs gap-1 px-2"
                    >
                      <Upload className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="hidden sm:inline">Upload</span>
                    </Button>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={translateText}
                    disabled={!inputText.trim() || isLoading || isOverLimit}
                    className="rounded-lg px-4 sm:px-6 w-full sm:w-auto"
                  >
                    {isLoading ? (
                      <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin mr-2" />
                    ) : null}
                    Translate
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Output Area */}
          <div className="relative">
            <div className="bg-muted/50 rounded-lg border h-full flex flex-col">
              <div className="p-3 sm:p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="truncate max-w-[120px] sm:max-w-none">{targetLanguage?.label || 'English'}</span>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {translatedText && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => speakText(translatedText, 'output', targetLang)}
                          className="h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full"
                          title={isSpeakingOutput ? `Stop speaking in ${targetLanguage?.label || 'target'}` : `Listen to ${targetLanguage?.label || 'target'} translation`}
                        >
                          {isSpeakingOutput ? (
                            <StopCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary animate-pulse" />
                          ) : (
                            <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          )}
                        </Button>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopy}
                          className="h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full"
                        >
                          <AnimatePresence mode="wait">
                            {copied ? (
                              <motion.div
                                key="check"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                              >
                                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="copy"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                              >
                                <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Button>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex-1 p-3 sm:p-4 h-48 sm:h-64 overflow-y-auto text-sm">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex items-center justify-center"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 className="w-8 h-8" />
                        </motion.div>
                        <span className="text-sm text-muted-foreground">Translating...</span>
                      </div>
                    </motion.div>
                  ) : translatedText ? (
                    <motion.p
                      key="translated"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="leading-relaxed whitespace-pre-wrap"
                    >
                      {translatedText}
                    </motion.p>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex items-center justify-center"
                    >
                      <p className="text-muted-foreground text-center">
                        Translation will appear here
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-3 sm:p-4 border-t flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {translatedText ? `${translatedText.length} characters` : ''}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {translatedText ? `${translatedWordCount} words` : ''}
                  </span>
                </div>
                {translatedText && (
                  <span className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    AI Translated
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Popular Translations */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Zap className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Popular Translations</h3>
              <p className="text-sm text-muted-foreground">
                Frequently used language pairs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {[
              { from: 'English', to: 'Spanish' },
              { from: 'English', to: 'French' },
              { from: 'English', to: 'German' },
              { from: 'English', to: 'Chinese' },
              { from: 'English', to: 'Japanese' },
              { from: 'English', to: 'Hindi' },
              { from: 'Spanish', to: 'English' },
              { from: 'Hindi', to: 'English' },
            ].map((item) => (
              <Link
                key={`${item.from}-${item.to}`}
                href={`/ai-translate/${slugifyLanguage(item.from)}-to-${slugifyLanguage(item.to)}`}
                className="p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border hover:border-primary/30 hover:shadow-md transition-all text-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item.from}</span>
                  <ArrowLeftRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  <span className="font-semibold">{item.to}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Powerful Features</h3>
              <p className="text-sm text-muted-foreground">
                Everything you need for seamless translation
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl border">
              <Globe className="w-8 h-8 text-blue-500 mb-3" />
              <h4 className="font-semibold mb-2">248+ Languages</h4>
              <p className="text-sm text-muted-foreground">Translate between any combination of over 248 languages including rare and regional dialects.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl border">
              <FileText className="w-8 h-8 text-green-500 mb-3" />
              <h4 className="font-semibold mb-2">Document Upload</h4>
              <p className="text-sm text-muted-foreground">Upload DOCX and TXT files for instant translation. Perfect for articles, reports, and documents.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border">
              <Mic className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Voice Input</h4>
              <p className="text-sm text-muted-foreground">Speak instead of typing! Use your microphone to dictate text in any supported language.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10 rounded-xl border">
              <Volume2 className="w-8 h-8 text-orange-500 mb-3" />
              <h4 className="font-semibold mb-2">Text-to-Speech</h4>
              <p className="text-sm text-muted-foreground">Listen to pronunciations in both source and target languages for better learning.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 rounded-xl border">
              <Clock className="w-8 h-8 text-cyan-500 mb-3" />
              <h4 className="font-semibold mb-2">Translation History</h4>
              <p className="text-sm text-muted-foreground">Your recent translations are saved locally for quick access. Up to 100 translations stored.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-red-500/5 to-red-500/10 rounded-xl border">
              <Shield className="w-8 h-8 text-red-500 mb-3" />
              <h4 className="font-semibold mb-2">Privacy Focused</h4>
              <p className="text-sm text-muted-foreground">No registration required. Your translations are not stored on our servers.</p>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Users className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">How to Translate</h3>
              <p className="text-sm text-muted-foreground">
                Get started in seconds
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { step: '1', title: 'Choose Languages', description: 'Select source and target languages from 248+ options', color: 'bg-blue-500' },
              { step: '2', title: 'Enter Text', description: 'Type, paste, upload document, or use voice input', color: 'bg-green-500' },
              { step: '3', title: 'Get Translation', description: 'Receive instant AI-powered accurate translation', color: 'bg-primary' },
              { step: '4', title: 'Copy or Listen', description: 'Copy to clipboard or listen to pronunciation', color: 'bg-orange-500' },
            ].map((item) => (
              <div key={item.step} className="text-center p-3 sm:p-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.color} text-white flex items-center justify-center text-base sm:text-lg font-bold mx-auto mb-2 sm:mb-3`}>
                  {item.step}
                </div>
                <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Frequently Asked Questions — {sourceLanguage?.label || 'Source'} to {targetLanguage?.label || 'Target'}
              </h3>
              <p className="text-sm text-muted-foreground">
                Common questions about {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h4 className="font-medium mb-1">
                Is {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation free?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes! Our translation service is completely free with no registration required. Translate unlimited text from {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} without any cost.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h4 className="font-medium mb-1">How accurate are the translations?</h4>
              <p className="text-sm text-muted-foreground">Our AI-powered translations provide high accuracy for general text. For specialized content like legal or medical documents, we recommend professional review.</p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h4 className="font-medium mb-1">
                What file formats are supported for {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation?
              </h4>
              <p className="text-sm text-muted-foreground">
                You can upload DOCX and TXT files for document translation. We're working on adding support for PDF and other formats soon.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h4 className="font-medium mb-1">
                Is my {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation data secure and private?
              </h4>
              <p className="text-sm text-muted-foreground">
                Absolutely. Your translations are processed securely and not stored on our servers. Translation history is saved locally in your browser only.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h4 className="font-medium mb-1">
                Can I use voice input for {sourceLanguage?.label || 'source'} translation?
              </h4>
              <p className="text-sm text-muted-foreground">
                Yes! Click the microphone button to speak instead of typing. Voice input supports all major languages and works best in Chrome and Edge browsers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Need More Languages?</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Explore our complete list of 248+ supported languages and start translating.</p>
            <Link href="/languages">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Globe className="w-5 h-5" />
                Browse All Languages
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* History Sidebar */}
      <HistorySidebar
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectItem={handleSelectHistoryItem}
        onRemoveItem={removeFromHistory}
        onClearHistory={clearHistory}
      />

      {/* Document Upload Modal */}
      <DocumentUploadModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
        onUpload={handleDocumentUpload}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
