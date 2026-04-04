'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Users,
  Globe,
  Zap,
  CheckCircle2,
  Clock,
  Award,
  Lock,
  Star,
  Quote,
  TrendingUp,
  HeartHandshake
} from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import { slugifyLanguage } from '@/lib/languages'

// =====================================================
// DIRECT ANSWER BLOCK - Optimized for AI Citation
// =====================================================
interface DirectAnswerProps {
  question: string
  answer: string
  className?: string
}

export function DirectAnswer({ question, answer, className = '' }: DirectAnswerProps) {
  return (
    <div className={`direct-answer bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border ${className}`}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
          <Quote className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{question}</h3>
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

// =====================================================
// KEY FACTS SECTION - For AI Knowledge Graph
// =====================================================
interface KeyFact {
  label: string
  value: string
  icon?: React.ReactNode
}

const keyFactsData: KeyFact[] = [
  { label: 'Languages Supported', value: '248+', icon: <Globe className="w-4 h-4" /> },
  { label: 'Pricing', value: '100% Free', icon: <CheckCircle2 className="w-4 h-4" /> },
  { label: 'Registration', value: 'Not Required', icon: <Users className="w-4 h-4" /> },
  { label: 'Platform', value: 'Web-based', icon: <Zap className="w-4 h-4" /> },
  { label: 'Character Limit', value: '5,000', icon: <Star className="w-4 h-4" /> },
  { label: 'History Storage', value: '30 Days', icon: <Clock className="w-4 h-4" /> },
]

export function KeyFactsSection() {
  return (
    <section className="py-8" aria-label="Key Facts about Translate">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Quick Facts</h2>
          <p className="text-sm text-muted-foreground">Key information at a glance</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {keyFactsData.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-xl p-4 border text-center"
          >
            <div className="flex justify-center mb-2 text-primary">
              {fact.icon}
            </div>
            <div className="text-xl font-bold mb-1">{fact.value}</div>
            <div className="text-xs text-muted-foreground">{fact.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// =====================================================
// E-E-A-T TRUST SIGNALS
// =====================================================
const trustSignals = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy Protected',
    description: 'Your translations are never stored on our servers. All history is saved locally in your browser.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'No Registration Required',
    description: 'Start translating immediately without creating an account or providing personal information.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'AI-Powered Accuracy',
    description: 'Powered by advanced machine learning and Google Translate technology for 90-95% accuracy.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Trusted by Users',
    description: 'Used by students, professionals, and travelers worldwide for instant multilingual communication.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
]

export function TrustSignalsSection() {
  return (
    <section className="py-8" aria-label="Trust and Security">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <HeartHandshake className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Why Trust {siteConfig.name}</h2>
          <p className="text-sm text-muted-foreground">Built for privacy, accuracy, and ease of use</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustSignals.map((signal, index) => (
          <motion.div
            key={signal.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-5 border hover:border-primary/20 transition-colors"
          >
            <div className={`p-3 rounded-xl ${signal.bgColor} w-fit mb-3`}>
              <div className={signal.color}>{signal.icon}</div>
            </div>
            <h3 className="font-semibold mb-2">{signal.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{signal.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// =====================================================
// COMPARISON TABLE - For AI Understanding
// =====================================================
interface ComparisonFeature {
  feature: string
  translate: string | boolean
  googleTranslate: string | boolean
}

const comparisonData: ComparisonFeature[] = [
  { feature: 'Number of Languages', translate: '248+', googleTranslate: '133' },
  { feature: 'Price', translate: '100% Free', googleTranslate: 'Free with limits' },
  { feature: 'Registration Required', translate: false, googleTranslate: false },
  { feature: 'Character Limit', translate: '5,000', googleTranslate: '5,000' },
  { feature: 'Document Upload', translate: 'DOCX, TXT', googleTranslate: 'Limited formats' },
  { feature: 'Voice Input', translate: true, googleTranslate: true },
  { feature: 'Text-to-Speech', translate: true, googleTranslate: true },
  { feature: 'Translation History', translate: '30 days local', googleTranslate: 'Requires login' },
  { feature: 'Dark Mode', translate: true, googleTranslate: true },
  { feature: 'Privacy (No Server Storage)', translate: true, googleTranslate: false },
  { feature: 'API Access', translate: false, googleTranslate: 'Paid' },
  { feature: 'Mobile Friendly', translate: true, googleTranslate: true },
]

export function ComparisonTable() {
  return (
    <section className="py-8" aria-label="Comparison with Google Translate">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-violet-500/10 rounded-lg">
          <TrendingUp className="w-5 h-5 text-violet-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">How We Compare</h2>
          <p className="text-sm text-muted-foreground">{siteConfig.name} vs Google Translate</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-4 border-b font-semibold">Feature</th>
              <th className="text-center p-4 border-b font-semibold text-primary">
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  {siteConfig.name}
                </div>
              </th>
              <th className="text-center p-4 border-b font-semibold text-muted-foreground">Google Translate</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr 
                key={row.feature} 
                className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
              >
                <td className="p-4 border-b text-sm">{row.feature}</td>
                <td className="p-4 border-b text-center">
                  {typeof row.translate === 'boolean' ? (
                    row.translate ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )
                  ) : (
                    <span className="text-sm font-medium text-primary">{row.translate}</span>
                  )}
                </td>
                <td className="p-4 border-b text-center">
                  {typeof row.googleTranslate === 'boolean' ? (
                    row.googleTranslate ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )
                  ) : (
                    <span className="text-sm text-muted-foreground">{row.googleTranslate}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

// =====================================================
// PEOPLE ALSO ASK SECTION
// =====================================================
interface PeopleAskItem {
  question: string
  answer: string
}

const peopleAlsoAskData: PeopleAskItem[] = [
  {
    question: 'Is there a free translator better than Google Translate?',
    answer: `${siteConfig.name} offers 248+ languages (more than Google Translate), complete privacy with no server storage, and requires no registration. While Google Translate has more features like image translation, our service focuses on text translation with better privacy and a clean, ad-free experience.`,
  },
  {
    question: 'What is the most accurate free online translator?',
    answer: `Both ${siteConfig.name} and Google Translate achieve 90-95% accuracy for common language pairs. ${siteConfig.name} uses the same underlying technology while offering more languages (248+) and better privacy. For professional or legal documents, human verification is always recommended.`,
  },
  {
    question: 'Can I translate 100 pages for free?',
    answer: `Yes, with ${siteConfig.name} you can translate unlimited text. Each translation accepts up to 5,000 characters. For 100 pages, simply split your content into multiple translations. Document uploads support files up to 10MB with approximately 50,000 characters per file.`,
  },
  {
    question: 'What languages are most in demand for translation?',
    answer: `The most requested translation pairs are English to Spanish, English to Chinese, English to Hindi, English to Arabic, and English to French. Regional languages like Tagalog, Ilocano, Tamil, Telugu, and Urdu are also highly popular for specific demographics.`,
  },
]

export function PeopleAlsoAskSection() {
  return (
    <section className="py-8" aria-label="People Also Ask">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-500/10 rounded-lg">
          <Quote className="w-5 h-5 text-amber-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">People Also Ask</h2>
          <p className="text-sm text-muted-foreground">Common questions about online translation</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {peopleAlsoAskData.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl p-5 border"
          >
            <h3 className="font-semibold mb-2 text-lg">{item.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// =====================================================
// SPEAKABLE CONTENT WRAPPER
// =====================================================
interface SpeakableContentProps {
  children: React.ReactNode
  className?: string
}

export function SpeakableContent({ children, className = '' }: SpeakableContentProps) {
  return (
    <div className={`speakable-content ${className}`} data-speakable="true">
      {children}
    </div>
  )
}

// =====================================================
// AUTHOR/DATE ATTRIBUTION - E-E-A-T
// =====================================================
interface AttributionProps {
  lastUpdated?: string
}

export function Attribution({ lastUpdated }: AttributionProps) {
  const date = lastUpdated || new Date().toISOString().split('T')[0]
  
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground py-4 border-t mt-8">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4" />
        <span>Reviewed by {siteConfig.name} Team</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>Last updated: {date}</span>
      </div>
    </div>
  )
}

// =====================================================
// DEFINITION BOX - For AI Understanding
// =====================================================
interface DefinitionBoxProps {
  term: string
  definition: string
  additionalInfo?: string
}

export function DefinitionBox({ term, definition, additionalInfo }: DefinitionBoxProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500/5 to-primary/5 rounded-xl p-6 border my-6">
      <dl>
        <dt className="font-bold text-lg mb-2">{term}</dt>
        <dd className="text-muted-foreground leading-relaxed">{definition}</dd>
        {additionalInfo && (
          <dd className="text-sm text-muted-foreground mt-3 pt-3 border-t">{additionalInfo}</dd>
        )}
      </dl>
    </div>
  )
}

// =====================================================
// USE CASES SECTION
// =====================================================
const useCasesData = [
  {
    title: 'Students & Researchers',
    icon: '📚',
    description: 'Translate academic papers, research materials, and study resources. Perfect for international students and cross-cultural research projects.',
    languages: ['English to Spanish', 'Chinese to English', 'German to English'],
  },
  {
    title: 'Business Professionals',
    icon: '💼',
    description: 'Communicate with international clients, translate contracts, emails, and business documents. Break language barriers in global commerce.',
    languages: ['English to Chinese', 'English to Japanese', 'French to English'],
  },
  {
    title: 'Travelers & Tourists',
    icon: '✈️',
    description: 'Translate signs, menus, local phrases, and travel documents. Navigate foreign countries with confidence.',
    languages: ['English to Thai', 'English to Japanese', 'Spanish to English'],
  },
  {
    title: 'Content Creators',
    icon: '🎬',
    description: 'Reach global audiences by translating video scripts, social media posts, and blog content. Make content accessible worldwide.',
    languages: ['English to Hindi', 'English to Spanish', 'English to Portuguese'],
  },
]

export function UseCasesSection() {
  return (
    <section className="py-8" aria-label="Popular Use Cases">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-pink-500/10 rounded-lg">
          <Users className="w-5 h-5 text-pink-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Popular Use Cases</h2>
          <p className="text-sm text-muted-foreground">How people use our translation service</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {useCasesData.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-5 border"
          >
            <div className="text-3xl mb-3">{useCase.icon}</div>
            <h3 className="font-semibold mb-2">{useCase.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{useCase.description}</p>
            <div className="flex flex-wrap gap-1">
              {useCase.languages.map((lang) => (
                <span 
                  key={lang} 
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// =====================================================
// LANGUAGES BY REGION SECTION
// =====================================================
const regionsData = [
  {
    region: 'European Languages',
    languages: ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Dutch', 'Polish', 'Russian', 'Ukrainian'],
    speakers: '1.5+ billion speakers',
  },
  {
    region: 'Asian Languages',
    languages: ['Chinese', 'Japanese', 'Korean', 'Vietnamese', 'Thai', 'Indonesian', 'Malay', 'Filipino'],
    speakers: '2+ billion speakers',
  },
  {
    region: 'Indian Languages',
    languages: ['Hindi', 'Bengali', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Gujarati', 'Marathi', 'Punjabi', 'Urdu'],
    speakers: '1.5+ billion speakers',
  },
  {
    region: 'Middle Eastern Languages',
    languages: ['Arabic', 'Persian', 'Turkish', 'Hebrew', 'Pashto', 'Kurdish'],
    speakers: '400+ million speakers',
  },
  {
    region: 'African Languages',
    languages: ['Swahili', 'Zulu', 'Xhosa', 'Yoruba', 'Hausa', 'Igbo', 'Amharic', 'Somali'],
    speakers: '500+ million speakers',
  },
  {
    region: 'Philippine Languages',
    languages: ['Tagalog', 'Ilocano', 'Cebuano', 'Bisaya', 'Hiligaynon', 'Waray', 'Kapampangan', 'Bikol'],
    speakers: '100+ million speakers',
  },
]

export function LanguagesByRegion() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  return (
    <section className="py-8" aria-label="Languages by Region">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-500/10 rounded-lg">
          <Globe className="w-5 h-5 text-teal-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Languages by Region</h2>
          <p className="text-sm text-muted-foreground">Explore our comprehensive language coverage</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regionsData.map((region, index) => {
          const isExpanded = !!expanded[region.region]
          const visibleLangs = isExpanded ? region.languages : region.languages.slice(0, 5)
          const hiddenCount = region.languages.length - 5

          return (
            <motion.div
              key={region.region}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-5 border"
            >
              <h3 className="font-semibold mb-1">{region.region}</h3>
              <p className="text-xs text-muted-foreground mb-3">{region.speakers}</p>
              <div className="flex flex-wrap gap-1">
                {visibleLangs.map((lang) => (
                  <Link
                    key={lang}
                    href={`/ai-translate/${slugifyLanguage(lang)}-to-english`}
                    className="text-xs px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded hover:bg-teal-500/20 transition-colors"
                  >
                    {lang}
                  </Link>
                ))}
                {!isExpanded && hiddenCount > 0 && (
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [region.region]: true }))}
                    className="text-xs px-2 py-0.5 text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 rounded transition-colors cursor-pointer"
                  >
                    +{hiddenCount} more
                  </button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
