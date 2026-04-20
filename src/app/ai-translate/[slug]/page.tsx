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
import { COMMON_PHRASES } from '@/lib/common-phrases'
import { useTranslationHistory, HistoryItem } from '@/hooks/use-translation-history'
import { HistorySidebar } from '@/components/history-sidebar'
import { DocumentUploadModal } from '@/components/document-upload-modal'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

const MAX_CHARS = 5000

// ── Language facts lookup — gives each page unique, crawlable content ────────
const LANG_FACTS: Record<string, {
  speakers: string
  countries: string
  family: string
  script: string
  fact: string
  fsi?: string
}> = {
  English:    { speakers: '1.5 billion total', countries: '67+ countries', family: 'West Germanic', script: 'Latin alphabet', fact: 'English borrows words from over 350 languages. About 29% of its vocabulary is French-origin, making it unique among Germanic languages.' },
  Spanish:    { speakers: '490 million native', countries: '21 countries', family: 'Romance', script: 'Latin alphabet', fact: 'Spanish is the second most-spoken native language in the world and the official language of the entire United Nations along with 5 others.', fsi: 'Category I — ~24 weeks for English speakers' },
  French:     { speakers: '300 million total', countries: '29 countries', family: 'Romance', script: 'Latin alphabet', fact: 'French is an official language at the UN, EU, NATO, and over 50 other international organisations, making it a key diplomatic language.', fsi: 'Category I — ~24 weeks for English speakers' },
  German:     { speakers: '100 million native', countries: '6 countries', family: 'West Germanic', script: 'Latin alphabet', fact: 'German creates compound words of unlimited length. "Donaudampfschifffahrtsgesellschaft" (Danube Steamship Company) is one widely cited example.', fsi: 'Category II — ~36 weeks for English speakers' },
  Chinese:    { speakers: '920 million native', countries: 'Mainland China, Singapore', family: 'Sino-Tibetan', script: 'Chinese characters (Hanzi)', fact: 'Mandarin has 4 tones — the same syllable means entirely different things depending on pitch. "mā, má, mǎ, mà" are four distinct words.', fsi: 'Category IV — ~88 weeks for English speakers' },
  'Chinese Traditional': { speakers: '25 million native', countries: 'Taiwan, Hong Kong', family: 'Sino-Tibetan', script: 'Traditional Chinese characters', fact: 'Traditional Chinese characters are used in Taiwan and Hong Kong. They retain more strokes and pictographic complexity than Simplified Chinese.' },
  Japanese:   { speakers: '125 million native', countries: 'Japan', family: 'Japonic', script: 'Hiragana, Katakana, Kanji', fact: 'Japanese uses three writing systems simultaneously. A single newspaper sentence can mix all three — Kanji, Hiragana, and Katakana.', fsi: 'Category IV+ — ~88 weeks for English speakers' },
  Arabic:     { speakers: '310 million native', countries: '25+ countries', family: 'Semitic (Afro-Asiatic)', script: 'Arabic script (right to left)', fact: 'Arabic gave the world words like algebra, algorithm, coffee, sugar, and cotton. It is written right-to-left and has no separate upper/lowercase.', fsi: 'Category IV — ~88 weeks for English speakers' },
  Hindi:      { speakers: '600 million total', countries: 'India (official)', family: 'Indo-Aryan', script: 'Devanagari', fact: 'Hindi and English share distant Indo-European roots. English words like jungle, shampoo, bungalow, yoga, and guru all originate from Sanskrit/Hindi.', fsi: 'Category III — ~44 weeks for English speakers' },
  Portuguese: { speakers: '250 million native', countries: '9 countries', family: 'Romance', script: 'Latin alphabet', fact: 'Portuguese is spoken on 5 continents. Brazil alone has more Portuguese speakers than Portugal — over 215 million people.', fsi: 'Category I — ~24 weeks for English speakers' },
  Russian:    { speakers: '150 million native', countries: '4 countries (UN official)', family: 'East Slavic', script: 'Cyrillic alphabet', fact: 'The Cyrillic alphabet used in Russian was designed in the 9th century based on Greek letters. Russian is one of 6 official UN languages.', fsi: 'Category III — ~44 weeks for English speakers' },
  Korean:     { speakers: '80 million native', countries: 'South Korea, North Korea', family: 'Koreanic (isolate)', script: 'Hangul', fact: 'Hangul was scientifically engineered by King Sejong in 1443 and can be learned in hours — a deliberate feature to improve literacy.', fsi: 'Category IV+ — ~88 weeks for English speakers' },
  Italian:    { speakers: '65 million native', countries: '4 countries', family: 'Romance', script: 'Latin alphabet', fact: 'Italian is the closest living language to Latin, retaining roughly 90% of classical Latin vocabulary.', fsi: 'Category I — ~24 weeks for English speakers' },
  Turkish:    { speakers: '88 million native', countries: 'Turkey, Cyprus', family: 'Turkic', script: 'Latin alphabet (since 1928)', fact: 'Turkish is agglutinative — you add suffixes to a root word instead of using separate words. A single Turkish word can express a whole English sentence.', fsi: 'Category III — ~44 weeks for English speakers' },
  Dutch:      { speakers: '25 million native', countries: '3 countries', family: 'West Germanic', script: 'Latin alphabet', fact: 'Dutch is the closest relative of English and gave us words like cookie, boss, yacht, drill, and landscape.', fsi: 'Category I — ~24 weeks for English speakers' },
  Polish:     { speakers: '45 million native', countries: 'Poland (official)', family: 'West Slavic', script: 'Latin alphabet + special chars', fact: 'Polish has 7 grammatical cases and 3 grammatical genders. A single Polish noun can take up to 14 different forms depending on context.', fsi: 'Category III — ~44 weeks for English speakers' },
  Ukrainian:  { speakers: '45 million native', countries: 'Ukraine (official)', family: 'East Slavic', script: 'Cyrillic alphabet', fact: 'Ukrainian is considered one of the most melodic Slavic languages and has a literary tradition stretching back over 1,000 years.', fsi: 'Category III — ~44 weeks for English speakers' },
  Persian:    { speakers: '110 million total', countries: 'Iran, Afghanistan, Tajikistan', family: 'Iranian (Indo-European)', script: 'Persian script (right to left)', fact: 'The poet Rumi wrote in Persian in the 13th century. His works remain some of the best-selling poetry in the world today.', fsi: 'Category III — ~44 weeks for English speakers' },
  Urdu:       { speakers: '70 million native', countries: 'Pakistan, India', family: 'Indo-Aryan', script: 'Nastaliq script (right to left)', fact: 'Urdu and Hindi are mutually intelligible in spoken form — they share the same grammar. The key difference is script and formal vocabulary.', fsi: 'Category III — ~44 weeks for English speakers' },
  Bengali:    { speakers: '230 million native', countries: 'Bangladesh, India', family: 'Indo-Aryan', script: 'Bengali script', fact: 'Bengali is the 7th most spoken language in the world. The Language Movement of 1952 in Dhaka, where students died defending Bengali, is commemorated on International Mother Language Day.', fsi: 'Category III — ~44 weeks for English speakers' },
  Vietnamese: { speakers: '95 million native', countries: 'Vietnam (official)', family: 'Austroasiatic', script: 'Latin alphabet with tone marks', fact: 'Vietnamese has 6 tones and switched from Chinese characters to a Latin-based alphabet in the 17th century — making it rare among Southeast Asian languages.', fsi: 'Category III — ~44 weeks for English speakers' },
  Thai:       { speakers: '61 million native', countries: 'Thailand (official)', family: 'Kra-Dai', script: 'Thai script (abugida)', fact: 'Thai has 5 tones, 44 consonants, and 30+ vowel forms. The script has no spaces between words — spaces indicate the end of a clause.', fsi: 'Category III — ~44 weeks for English speakers' },
  Indonesian: { speakers: '200 million total', countries: 'Indonesia (official)', family: 'Austronesian', script: 'Latin alphabet', fact: 'Indonesian has no grammatical gender, no verb conjugation for tense, and no plural forms — making it one of the easiest Asian languages for English speakers.', fsi: 'Category II — ~36 weeks for English speakers' },
  Malay:      { speakers: '80 million total', countries: 'Malaysia, Brunei, Singapore', family: 'Austronesian', script: 'Latin alphabet (Rumi)', fact: 'Malay and Indonesian are largely mutually intelligible. Standard Malay evolved from a lingua franca used across maritime Southeast Asia for centuries.' },
  Swedish:    { speakers: '10 million native', countries: 'Sweden, Finland', family: 'North Germanic', script: 'Latin alphabet', fact: 'Swedish is a pitch-accent language — "anden" means "the duck" or "the spirit" depending solely on which syllable you stress.', fsi: 'Category I — ~24 weeks for English speakers' },
  Norwegian:  { speakers: '5 million native', countries: 'Norway (official)', family: 'North Germanic', script: 'Latin alphabet', fact: 'Norwegian has two official written standards (Bokmål and Nynorsk) — the only language in the world with two legally equal written forms.', fsi: 'Category I — ~24 weeks for English speakers' },
  Danish:     { speakers: '6 million native', countries: 'Denmark, Faroe Islands, Greenland', family: 'North Germanic', script: 'Latin alphabet', fact: 'Danish famously swallows many of its consonants. Linguists call this "stød" — a distinct creaky voice quality unique to Danish.', fsi: 'Category I — ~24 weeks for English speakers' },
  Finnish:    { speakers: '5 million native', countries: 'Finland (official)', family: 'Uralic (Finno-Ugric)', script: 'Latin alphabet', fact: 'Finnish is unrelated to most European languages. Its 15 grammatical cases and agglutinative structure make it very distinctive.', fsi: 'Category III — ~44 weeks for English speakers' },
  Greek:      { speakers: '13 million native', countries: 'Greece, Cyprus', family: 'Hellenic (Indo-European)', script: 'Greek alphabet', fact: 'Greek has the longest documented history of any living language — written records date back 3,400 years. The Greek alphabet gave rise to Latin, Cyrillic, and Coptic.', fsi: 'Category III — ~44 weeks for English speakers' },
  Hebrew:     { speakers: '9 million native', countries: 'Israel (official)', family: 'Semitic (Afro-Asiatic)', script: 'Hebrew script (right to left)', fact: 'Hebrew is the only language successfully revived as a spoken everyday language after centuries of purely religious use. Modern Hebrew was standardised in the late 19th century.', fsi: 'Category III — ~44 weeks for English speakers' },
  Romanian:   { speakers: '26 million native', countries: '2 countries', family: 'Romance (Eastern)', script: 'Latin alphabet', fact: 'Romanian is the only Eastern Romance language, preserving Latin features that other Romance languages lost, including a neuter grammatical gender.', fsi: 'Category II — ~30 weeks for English speakers' },
  Czech:      { speakers: '10 million native', countries: 'Czech Republic (official)', family: 'West Slavic', script: 'Latin alphabet + háček marks', fact: 'Czech has a unique letter "ř" (a rolled/fricative R blend) that is considered one of the most difficult sounds for non-native speakers to pronounce.', fsi: 'Category III — ~44 weeks for English speakers' },
  Hungarian:  { speakers: '13 million native', countries: '2 countries', family: 'Uralic (Finno-Ugric)', script: 'Latin alphabet', fact: 'Hungarian is unrelated to surrounding European languages. It uses vowel harmony — all vowels in a word must belong to the same harmonic class.', fsi: 'Category III — ~44 weeks for English speakers' },
  Swahili:    { speakers: '200 million total', countries: '4 countries (official)', family: 'Bantu (Niger-Congo)', script: 'Latin alphabet', fact: 'Swahili is the most widely spoken African language and a lingua franca across East Africa. About 80% of its vocabulary comes from Bantu roots, with Arabic loanwords from centuries of trade.', fsi: 'Category II — ~36 weeks for English speakers' },
  Tagalog:    { speakers: '82 million total', countries: 'Philippines (official, as Filipino)', family: 'Austronesian', script: 'Latin alphabet', fact: 'Tagalog has a focus system where verbs change form to indicate what element of the sentence is in focus — unlike most languages, any argument can be the grammatical focus.', fsi: 'Category III — ~44 weeks for English speakers' },
}

// ── Map language names → related pairs for internal linking ─────────────────
const RELATED_FROM: Record<string, string[]> = {
  English:    ['Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Hindi', 'Arabic', 'Portuguese', 'Russian', 'Korean', 'Italian', 'Dutch', 'Turkish', 'Polish', 'Urdu', 'Vietnamese'],
  Spanish:    ['English', 'French', 'Portuguese', 'Italian', 'German', 'Chinese', 'Arabic', 'Hindi'],
  French:     ['English', 'Spanish', 'German', 'Italian', 'Portuguese', 'Arabic', 'Chinese', 'Russian'],
  German:     ['English', 'French', 'Spanish', 'Italian', 'Dutch', 'Polish', 'Russian', 'Turkish'],
  Chinese:    ['English', 'Japanese', 'Korean', 'Spanish', 'French', 'German', 'Russian', 'Arabic'],
  Japanese:   ['English', 'Chinese', 'Korean', 'Spanish', 'French', 'German', 'Portuguese', 'Arabic'],
  Arabic:     ['English', 'French', 'Spanish', 'Turkish', 'Persian', 'Urdu', 'Hindi', 'German'],
  Hindi:      ['English', 'Urdu', 'Bengali', 'Tamil', 'Spanish', 'French', 'German', 'Arabic'],
  Portuguese: ['English', 'Spanish', 'French', 'Italian', 'German', 'Chinese', 'Arabic', 'Japanese'],
  Russian:    ['English', 'German', 'French', 'Ukrainian', 'Spanish', 'Chinese', 'Polish', 'Arabic'],
  Korean:     ['English', 'Japanese', 'Chinese', 'Spanish', 'French', 'German', 'Thai', 'Vietnamese'],
}

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

function parseSlugToLangs(slug: string): { source: string; target: string; sourceLabel: string; targetLabel: string } {
  const match = slug.match(/^(.+)-to-(.+)$/)
  if (!match) return { source: 'auto', target: 'en', sourceLabel: 'Detect Language', targetLabel: 'English' }
  const sourceLang = getLanguageBySlug(match[1])
  const targetLang = getLanguageBySlug(match[2])
  return {
    source: sourceLang?.value ?? 'auto',
    target: targetLang?.value ?? 'en',
    sourceLabel: sourceLang?.label ?? 'Detect Language',
    targetLabel: targetLang?.label ?? 'English',
  }
}

export default function GeneralTranslatePage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? '')
  const { source: initialSource, target: initialTarget, sourceLabel: initialSourceLabel, targetLabel: initialTargetLabel } = parseSlugToLangs(slug)

  const [sourceLang, setSourceLang] = useState(initialSource)
  const [targetLang, setTargetLang] = useState(initialTarget)
  const [sourceLangLabel, setSourceLangLabel] = useState(initialSourceLabel)
  const [targetLangLabel, setTargetLangLabel] = useState(initialTargetLabel)
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

      addToHistory(
        sourceLang,
        sourceLangLabel,
        targetLang,
        targetLangLabel,
        inputText,
        data.translatedText
      )
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
    const tempCode = sourceLang
    const tempLabel = sourceLangLabel
    setSourceLang(targetLang)
    setSourceLangLabel(targetLangLabel)
    setTargetLang(tempCode)
    setTargetLangLabel(tempLabel)
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
    setSourceLangLabel(item.sourceLangName)
    setTargetLang(item.targetLang)
    setTargetLangLabel(item.targetLangName)
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

  const sourceLanguage = { label: sourceLangLabel, value: sourceLang }
  const targetLanguage = { label: targetLangLabel, value: targetLang }

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
              value={sourceLangLabel}
              onValueChange={(label) => {
                const lang = languages.find(l => l.label === label)
                if (lang) {
                  setSourceLang(lang.value)
                  setSourceLangLabel(lang.label)
                }
              }}
              open={isSourceDropdownOpen}
              onOpenChange={setIsSourceDropdownOpen}
            >
              <SelectTrigger className="bg-background border-border h-12 rounded-lg w-full">
                <SelectValue placeholder="Select source language" />
              </SelectTrigger>
              <SelectContent className="rounded-lg max-h-80 overflow-y-auto">
                {languages.map((lang) => (
                  <SelectItem
                    key={lang.id}
                    value={lang.label}
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
              title={`Swap ${sourceLangLabel || 'source'} and ${targetLangLabel || 'target'} languages`}
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <div className="w-full sm:flex-1 max-w-md">
            <Select
              value={targetLangLabel}
              onValueChange={(label) => {
                const lang = languages.find(l => l.label === label)
                if (lang) {
                  setTargetLang(lang.value)
                  setTargetLangLabel(lang.label)
                }
              }}
              open={isTargetDropdownOpen}
              onOpenChange={setIsTargetDropdownOpen}
            >
              <SelectTrigger className="bg-background border-border h-12 rounded-lg w-full">
                <SelectValue placeholder="Select target language" />
              </SelectTrigger>
              <SelectContent className="rounded-lg max-h-80 overflow-y-auto">
                {languages.filter(l => l.value !== 'auto').map((lang) => (
                  <SelectItem
                    key={lang.id}
                    value={lang.label}
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

        {/* ── Language Facts — unique content per language pair ───────────── */}
        {(LANG_FACTS[sourceLangLabel] || LANG_FACTS[targetLangLabel]) && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Globe className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold">About {sourceLangLabel} &amp; {targetLangLabel}</h2>
                <p className="text-sm text-muted-foreground">Language facts to help with your translation</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: sourceLangLabel, info: LANG_FACTS[sourceLangLabel] },
                { label: targetLangLabel, info: LANG_FACTS[targetLangLabel] },
              ].filter(item => !!item.info).map(({ label, info }) => (
                <div key={label} className="p-4 sm:p-5 rounded-xl border bg-gradient-to-br from-muted/30 to-muted/10 space-y-3">
                  <h3 className="font-bold text-sm flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    {label}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-background/60 border">
                      <p className="text-muted-foreground mb-0.5">Native speakers</p>
                      <p className="font-semibold">{info!.speakers}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-background/60 border">
                      <p className="text-muted-foreground mb-0.5">Official in</p>
                      <p className="font-semibold">{info!.countries}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-background/60 border">
                      <p className="text-muted-foreground mb-0.5">Language family</p>
                      <p className="font-semibold">{info!.family}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-background/60 border">
                      <p className="text-muted-foreground mb-0.5">Writing system</p>
                      <p className="font-semibold">{info!.script}</p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-xs text-muted-foreground leading-relaxed">{info!.fact}</p>
                  </div>
                  {info!.fsi && (
                    <p className="text-[11px] text-muted-foreground">
                      <span className="font-semibold">Learning difficulty:</span> {info!.fsi}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Common Phrases — source & target sections ────────────────────── */}
        {(COMMON_PHRASES[sourceLangLabel] || COMMON_PHRASES[targetLangLabel]) && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12"
          >
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-muted rounded-lg">
                <Globe className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Common Phrases</h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  How to say everyday words and sentences in {sourceLangLabel} &amp; {targetLangLabel}
                </p>
              </div>
            </div>

            {/* Two columns only when BOTH languages have phrases, else single full-width column */}
            <div className={`grid grid-cols-1 gap-6 lg:gap-8 w-full ${COMMON_PHRASES[sourceLangLabel] && COMMON_PHRASES[targetLangLabel] ? 'lg:grid-cols-2' : ''}`}>

              {/* ── Source language phrases ── */}
              {COMMON_PHRASES[sourceLangLabel] && (
                <div className="w-full rounded-xl border overflow-hidden">
                  {/* Column header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/40">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      Source
                    </span>
                    <h3 className="text-sm font-bold text-foreground">
                      {sourceLangLabel} Phrases
                    </h3>
                  </div>
                  {/* Phrase card grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                    {COMMON_PHRASES[sourceLangLabel].map((phrase) => (
                      <div
                        key={phrase.english}
                        className="flex flex-col gap-2 px-5 py-4 bg-background hover:bg-muted/30 transition-colors"
                      >
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-none">
                          {phrase.english}
                        </p>
                        <p className="text-lg font-bold text-foreground leading-snug break-words">
                          {phrase.translation}
                        </p>
                        {phrase.phonetic && (
                          <p className="text-sm text-muted-foreground italic leading-snug">
                            {phrase.phonetic}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Target language phrases ── */}
              {COMMON_PHRASES[targetLangLabel] && (
                <div className="w-full rounded-xl border overflow-hidden">
                  {/* Column header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b bg-foreground">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-background bg-background/20 px-2 py-0.5 rounded">
                      Target
                    </span>
                    <h3 className="text-sm font-bold text-background">
                      {targetLangLabel} Phrases
                    </h3>
                  </div>
                  {/* Phrase card grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
                    {COMMON_PHRASES[targetLangLabel].map((phrase) => (
                      <div
                        key={phrase.english}
                        className="flex flex-col gap-1 px-3 py-3 bg-background hover:bg-muted/30 transition-colors"
                      >
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide leading-none">
                          {phrase.english}
                        </p>
                        <p className="text-sm font-bold text-foreground leading-snug break-words">
                          {phrase.translation}
                        </p>
                        {phrase.phonetic && (
                          <p className="text-[11px] text-muted-foreground italic leading-snug">
                            {phrase.phonetic}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}

        {/* Popular Translations */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Zap className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold">
                {RELATED_FROM[sourceLangLabel]
                  ? `More ${sourceLangLabel} Translations`
                  : 'Popular Translations'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {RELATED_FROM[sourceLangLabel]
                  ? `Other languages people translate ${sourceLangLabel} to`
                  : 'Frequently used language pairs'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {/* Reverse of the current pair always first */}
            {sourceLangLabel !== targetLangLabel && (
              <Link
                href={`/ai-translate/${slugifyLanguage(targetLangLabel)}-to-${slugifyLanguage(sourceLangLabel)}`}
                className="p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all text-sm group"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-semibold truncate">{targetLangLabel}</span>
                  <ArrowLeftRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="font-semibold truncate">{sourceLangLabel}</span>
                </div>
                <p className="text-[10px] text-primary mt-1">↩ Reverse</p>
              </Link>
            )}
            {/* Contextual related pairs or default popular pairs */}
            {(RELATED_FROM[sourceLangLabel]
              ? RELATED_FROM[sourceLangLabel].filter(to => to !== targetLangLabel).slice(0, 15)
              : ['Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Hindi', 'Arabic', 'Portuguese', 'Russian', 'Korean', 'Italian', 'Dutch', 'Turkish', 'Polish', 'Urdu'].filter(to => to !== sourceLangLabel && to !== targetLangLabel).slice(0, 15)
            ).map((to) => (
              <Link
                key={`${sourceLangLabel}-${to}`}
                href={`/ai-translate/${slugifyLanguage(sourceLangLabel)}-to-${slugifyLanguage(to)}`}
                className="p-3 sm:p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border hover:border-primary/30 hover:shadow-md transition-all text-sm group"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-semibold truncate">{sourceLangLabel}</span>
                  <ArrowLeftRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                  <span className="font-semibold truncate">{to}</span>
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
              <h2 className="text-base sm:text-lg font-semibold">Why Use Our {sourceLangLabel} to {targetLangLabel} Translator?</h2>
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
              <h2 className="text-base sm:text-lg font-semibold">How to Translate {sourceLangLabel} to {targetLangLabel}</h2>
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
              <h2 className="text-base sm:text-lg font-semibold">
                FAQ — {sourceLanguage?.label || 'Source'} to {targetLanguage?.label || 'Target'} Translation
              </h2>
              <p className="text-sm text-muted-foreground">
                Common questions about {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                Is {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation free?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes — completely free with no registration required. You can translate unlimited text from {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} at no cost, with no daily limits.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                How accurate is AI {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation?
              </h3>
              <p className="text-sm text-muted-foreground">
                Our AI delivers high accuracy for everyday {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation — conversations, emails, articles, and web content. For specialised domains (legal, medical, technical), we recommend professional review after AI translation.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                Can I translate {sourceLanguage?.label || 'source'} documents to {targetLanguage?.label || 'target'}?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes. Click the Upload button in the translator to upload a DOCX or TXT file. The text is extracted and automatically translated from {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'}.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                What is the character limit for {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'}?
              </h3>
              <p className="text-sm text-muted-foreground">
                You can translate up to 5,000 characters at once. For longer documents, use the file upload feature or split the text into sections and translate each one.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                Can I speak {sourceLanguage?.label || 'source'} and get {targetLanguage?.label || 'target'} translation?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes — click the microphone button to use voice input. Speak in {sourceLanguage?.label || 'source'} and the tool transcribes and translates your speech to {targetLanguage?.label || 'target'} in real time. Works best in Chrome or Edge.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                Can I listen to the {targetLanguage?.label || 'target'} translation pronunciation?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes. Click the speaker icon next to the {targetLanguage?.label || 'target'} output to hear the text read aloud. This helps with learning correct {targetLanguage?.label || 'target'} pronunciation.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                Is my {sourceLanguage?.label || 'source'} to {targetLanguage?.label || 'target'} translation data private?
              </h3>
              <p className="text-sm text-muted-foreground">
                Your privacy is protected. Translations are processed securely and not stored on our servers. Your history is saved only in your browser's local storage and never shared.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-muted/30 rounded-xl border">
              <h3 className="font-medium mb-1 text-sm">
                Can I translate {targetLanguage?.label || 'target'} back to {sourceLanguage?.label || 'source'}?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes — click the swap button (⇄) between the language selectors to instantly reverse the direction and translate from {targetLanguage?.label || 'target'} back to {sourceLanguage?.label || 'source'}.
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
