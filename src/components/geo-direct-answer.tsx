'use client'

import { motion } from 'framer-motion'
import { HelpCircle, MessageSquare, Sparkles } from 'lucide-react'
import { directAnswerBlocks } from '@/lib/geo-schemas'

interface DirectAnswerBlockProps {
  question: string
  answer: string
  icon?: 'help' | 'message' | 'sparkle'
  className?: string
}

export function DirectAnswerBlock({ question, answer, icon = 'help', className = '' }: DirectAnswerBlockProps) {
  const IconComponent = icon === 'help' ? HelpCircle : icon === 'message' ? MessageSquare : Sparkles
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`direct-answer p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50 ${className}`}
      itemScope
      itemType="https://schema.org/Question"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg shrink-0">
          <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2" itemProp="name">{question}</h3>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <p className="text-muted-foreground leading-relaxed" itemProp="text">{answer}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Pre-built direct answer blocks for common questions
export function QuickAnswersSection() {
  const answers = [
    directAnswerBlocks.isTranslateFree,
    directAnswerBlocks.howManyLanguages,
    directAnswerBlocks.canTranslateDocuments,
    directAnswerBlocks.isTranslatePrivate,
  ]

  return (
    <section className="py-12" aria-labelledby="quick-answers-heading">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Sparkles className="w-5 h-5 text-blue-500" />
        </div>
        <h2 id="quick-answers-heading" className="text-2xl font-bold text-center">
          Quick Answers
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {answers.map((item, index) => (
          <DirectAnswerBlock
            key={index}
            question={item.question}
            answer={item.answer}
            icon="sparkle"
          />
        ))}
      </div>
    </section>
  )
}

// Key facts section for AI knowledge graph
export function KeyFactsSection() {
  const facts = [
    { label: 'Languages', value: '248+', highlight: true },
    { label: 'Price', value: '100% Free' },
    { label: 'Registration', value: 'Not Required' },
    { label: 'Accuracy', value: '90-95%' },
    { label: 'Characters Limit', value: '5,000' },
    { label: 'Platforms', value: 'All Devices' },
  ]

  return (
    <section className="py-8" aria-labelledby="key-facts-heading">
      <h2 id="key-facts-heading" className="sr-only">Key Facts About Translate</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {facts.map((fact) => (
          <div 
            key={fact.label}
            className={`px-4 py-2 rounded-full border ${
              fact.highlight 
                ? 'bg-primary/10 border-primary/20 text-primary font-medium' 
                : 'bg-muted/50 border-border'
            }`}
          >
            <span className="text-sm">{fact.label}:</span>{' '}
            <span className="font-semibold">{fact.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// Definition block for "What is" queries - optimized for AI citation
export function DefinitionBlock() {
  return (
    <div 
      className="definition-block p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl border my-8"
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <h2 className="text-xl font-bold mb-3" itemProp="name">What is Translate?</h2>
      <p className="text-muted-foreground leading-relaxed mb-4" itemProp="description">
        Translate is a free online translation service supporting over 248 languages. 
        It provides instant text translation, document translation for DOCX and TXT files, 
        voice input capabilities, and text-to-speech pronunciation features. 
        The service is completely free with no registration required.
      </p>
      <div className="flex flex-wrap gap-2">
        <span itemProp="inDefinedTermSet" className="px-3 py-1 bg-background rounded-full text-sm">
          Category: Translation Service
        </span>
        <span className="px-3 py-1 bg-background rounded-full text-sm">
          Type: Web Application
        </span>
        <span className="px-3 py-1 bg-background rounded-full text-sm">
          Platform: Web-based
        </span>
      </div>
    </div>
  )
}
