'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Languages, 
  Globe,
  Search,
  Mic,
  FileText,
  Volume2,
  Clock,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  BookOpen,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { languages, slugifyLanguage } from '@/lib/languages'
import { faqData, statsData } from '@/lib/seo'
import { languageFamilies } from '@/lib/popular-translations'
import { Navbar } from '@/components/navbar'
import {
  KeyFactsSection,
  TrustSignalsSection,
  ComparisonTable,
  PeopleAlsoAskSection,
  LanguagesByRegion,
  Attribution
} from '@/components/geo-components'

// Language categories for filtering
const languageCategories = [
  { id: 'all', name: 'All Languages', icon: Globe },
  { id: 'european', name: 'European', languages: ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Dutch', 'Polish', 'Russian', 'Ukrainian'] },
  { id: 'asian', name: 'Asian', languages: ['Chinese', 'Japanese', 'Korean', 'Vietnamese', 'Thai', 'Indonesian', 'Malay', 'Filipino'] },
  { id: 'indian', name: 'Indian', languages: ['Hindi', 'Bengali', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Gujarati', 'Marathi', 'Punjabi', 'Urdu'] },
  { id: 'middle-eastern', name: 'Middle Eastern', languages: ['Arabic', 'Persian', 'Turkish', 'Hebrew', 'Pashto', 'Kurdish Kurmanji'] },
  { id: 'african', name: 'African', languages: ['Swahili', 'Zulu', 'Xhosa', 'Yoruba', 'Hausa', 'Igbo', 'Amharic', 'Somali'] },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFamilies, setExpandedFamilies] = useState<Record<string, boolean>>({})

  const popularLanguages = [
    'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 
    'Korean', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian',
    'Dutch', 'Turkish', 'Urdu', 'Vietnamese', 'Thai', 'Indonesian'
  ]

  // Filter languages based on search and category
  const filteredLanguages = useMemo(() => {
    let filtered = languages
    
    // Filter by category
    if (selectedCategory !== 'all') {
      const category = languageCategories.find(c => c.id === selectedCategory)
      if (category?.languages) {
        filtered = filtered.filter(lang => 
          category.languages!.some(catLang => 
            catLang.toLowerCase() === lang.label.toLowerCase()
          )
        )
      }
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(lang => 
        lang.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    return filtered
  }, [searchQuery, selectedCategory])

  // Popular translation pairs with categories
  const popularPairs = [
    { from: 'English', to: 'Spanish', speakers: '500M+ speakers', category: 'Popular' },
    { from: 'English', to: 'French', speakers: '300M+ speakers', category: 'Popular' },
    { from: 'English', to: 'German', speakers: '130M+ speakers', category: 'Popular' },
    { from: 'English', to: 'Chinese', speakers: '1.3B+ speakers', category: 'Popular' },
    { from: 'English', to: 'Japanese', speakers: '125M+ speakers', category: 'Asian' },
    { from: 'English', to: 'Korean', speakers: '77M+ speakers', category: 'Asian' },
    { from: 'English', to: 'Arabic', speakers: '400M+ speakers', category: 'Middle East' },
    { from: 'English', to: 'Hindi', speakers: '600M+ speakers', category: 'Indian' },
    { from: 'English', to: 'Urdu', speakers: '230M+ speakers', category: 'Indian' },
    { from: 'English', to: 'Portuguese', speakers: '260M+ speakers', category: 'Popular' },
    { from: 'English', to: 'Russian', speakers: '258M+ speakers', category: 'European' },
    { from: 'English', to: 'Italian', speakers: '70M+ speakers', category: 'European' },
    { from: 'Hindi', to: 'English', speakers: 'Most requested', category: 'Indian' },
    { from: 'Hindi', to: 'Tamil', speakers: 'South Indian', category: 'Indian' },
    { from: 'Spanish', to: 'English', speakers: 'Most requested', category: 'Popular' },
    { from: 'Chinese', to: 'English', speakers: 'Growing demand', category: 'Asian' },
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-5xl mx-auto px-4 py-16 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI Powered Translation
          </span>
        </div>
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Free Translation for
          <span className="block text-primary">{languages.length}+ Languages</span>
        </h1>
        <p className="hero-description text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Instantly translate text, documents, and voice between any language pair. 
          No registration required, completely free forever. Powered by advanced AI technology 
          for accurate, natural translations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/ai-translate/english-to-spanish" className="cursor-pointer">
            <Button size="lg" className="gap-2 px-8 h-12">
              <Globe className="w-5 h-5" />
              Start Translating Free
            </Button>
          </Link>
          <Link href="#popular-translations" className="cursor-pointer">
            <Button variant="outline" size="lg" className="gap-2 h-12">
              Browse Languages
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl border hover:shadow-md transition-shadow"
            >
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16 border-t"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Zap className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-center">Powerful Translation Features</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need for seamless multilingual communication, all in one free tool.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: '248+ Languages',
              description: 'Translate between any combination of over 248 languages including English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, Urdu, and many more.',
              color: 'text-blue-500',
              bgColor: 'bg-blue-500/10',
            },
            {
              icon: FileText,
              title: 'Document Upload',
              description: 'Upload DOCX and TXT files for instant translation. Perfect for translating articles, reports, essays, and other documents.',
              color: 'text-green-500',
              bgColor: 'bg-green-500/10',
            },
            {
              icon: Mic,
              title: 'Voice Input',
              description: 'Speak instead of typing! Use your microphone to dictate text in any supported language. Great for hands-free translation.',
              color: 'text-purple-500',
              bgColor: 'bg-purple-500/10',
            },
            {
              icon: Volume2,
              title: 'Text-to-Speech',
              description: 'Listen to pronunciations in the original or translated language. Perfect for learning pronunciation and accessibility.',
              color: 'text-orange-500',
              bgColor: 'bg-orange-500/10',
            },
            {
              icon: Clock,
              title: 'Translation History',
              description: 'Your recent translations are automatically saved locally for quick access. Store up to 100 translations for 30 days.',
              color: 'text-cyan-500',
              bgColor: 'bg-cyan-500/10',
            },
            {
              icon: Shield,
              title: 'Privacy Focused',
              description: 'No registration required. Your translations are not stored on our servers. History is saved locally in your browser.',
              color: 'text-red-500',
              bgColor: 'bg-red-500/10',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border hover:border-foreground/20 hover:shadow-lg transition-all group"
            >
              <div className={`p-3 rounded-xl ${feature.bgColor} w-fit mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Popular Language Pairs */}
      <motion.section 
        id="popular-translations"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-muted/20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Zap className="w-5 h-5 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold text-center">Popular Translation Pairs</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Quick access to the most commonly used language translation pairs. Click any pair to start translating instantly.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularPairs.map((item) => (
            <Link
              key={`${item.from}-${item.to}`}
              href={`/ai-translate/${item.from.toLowerCase()}-to-${item.to.toLowerCase()}`}
              className="p-4 bg-gradient-to-br from-background to-muted/30 rounded-xl border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{item.from}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                <span className="font-semibold">{item.to}</span>
              </div>
              <p className="text-xs text-muted-foreground bg-muted/50 rounded-full px-2 py-0.5 inline-block">{item.speakers}</p>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Language Categories & Search */}
      <motion.section 
        id="languages"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Globe className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-center">All Supported Languages</h2>
        </div>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Search and select from our comprehensive list of {languages.length}+ supported languages.
        </p>
        
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-xl"
          />
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {languageCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Language Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {filteredLanguages.slice(0, 60).map((lang) => (
            <Link
              key={lang.id}
              href={`/ai-translate/${slugifyLanguage(lang.label)}-to-english`}
              className="p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border hover:border-primary/30 hover:shadow-sm transition-all text-sm text-center group"
            >
              <span className="group-hover:text-primary transition-colors">{lang.label}</span>
            </Link>
          ))}
        </div>
        
        {filteredLanguages.length > 60 && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Showing 60 of {filteredLanguages.length} languages. Use search to find more.
          </p>
        )}
      </motion.section>

      {/* Language Families Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-muted/20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <BookOpen className="w-5 h-5 text-purple-500" />
          </div>
          <h2 className="text-3xl font-bold text-center">Language Families</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore translations by language family. Each family contains related languages with shared linguistic roots.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languageFamilies.slice(0, 6).map((family) => {
            const isExpanded = !!expandedFamilies[family.name]
            const visibleLangs = isExpanded ? family.languages : family.languages.slice(0, 4)
            const hiddenCount = family.languages.length - 4
            return (
              <motion.div
                key={family.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="p-5 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5 rounded-2xl border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{family.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full">
                    {family.languages.length} languages
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{family.description}</p>
                <div className="flex flex-wrap gap-1">
                  {visibleLangs.map((lang) => (
                    <Link
                      key={lang}
                      href={`/ai-translate/${slugifyLanguage(lang)}-to-english`}
                      className="px-2 py-1 bg-purple-500/5 rounded-md border border-purple-500/20 text-xs hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
                    >
                      {lang}
                    </Link>
                  ))}
                  {!isExpanded && hiddenCount > 0 && (
                    <button
                      onClick={() => setExpandedFamilies((prev) => ({ ...prev, [family.name]: true }))}
                      className="px-2 py-1 text-xs text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 rounded-md border border-purple-500/20 transition-all cursor-pointer"
                    >
                      +{hiddenCount} more
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-center">How to Translate</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Translating text, documents, or voice has never been easier. Follow these simple steps.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Choose Languages', description: 'Select your source and target languages from our list of 248+ supported languages.', color: 'bg-blue-500' },
            { step: '2', title: 'Enter Text', description: 'Type, paste, upload a document, or use voice input to enter your text.', color: 'bg-green-500' },
            { step: '3', title: 'Get Translation', description: 'Instantly receive an accurate translation with pronunciation support.', color: 'bg-purple-500' },
            { step: '4', title: 'Copy or Listen', description: 'Copy the translation to clipboard or listen to the pronunciation.', color: 'bg-orange-500' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg`}>
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 py-16 bg-muted/20"
        id="faq"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-12">
          Find answers to common questions about our translation service.
        </p>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border rounded-xl overflow-hidden bg-background"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="font-medium" itemProp="name">{faq.question}</span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {openFaqIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-4 bg-background border-t faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-muted-foreground leading-relaxed" itemProp="text">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* GEO: Trust Signals Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <TrustSignalsSection />
      </motion.section>

      {/* GEO: Key Facts Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-8 bg-muted/20"
      >
        <KeyFactsSection />
      </motion.section>

      {/* GEO: Languages by Region */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <LanguagesByRegion />
      </motion.section>

      {/* GEO: Comparison Table */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-muted/20"
      >
        <ComparisonTable />
      </motion.section>

      {/* GEO: People Also Ask */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <PeopleAlsoAskSection />
        <Attribution />
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16 text-center"
      >
        <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Translating Now</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users who trust our free translation service. 
            No registration, no limits, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ai-translate" className="cursor-pointer">
              <Button size="lg" className="gap-2 px-8 h-12">
                <Zap className="w-5 h-5" />
                Translate Free Now
              </Button>
            </Link>
            <Link href="/ai-translate/hindi-to-english" className="cursor-pointer">
              <Button variant="outline" size="lg" className="gap-2 h-12">
                Hindi to English
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-foreground rounded-lg">
                  <Languages className="w-5 h-5 text-background" />
                </div>
                <span className="font-bold text-xl">Translate</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Free online translation service supporting 248+ languages. 
                Fast, accurate, and always free.
              </p>
              <p className="text-xs text-muted-foreground">
                🌍 248+ Languages • 100% Free • No Registration
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/ai-translate/english-to-spanish" className="hover:text-primary transition-colors">English to Spanish</Link></li>
                <li><Link href="/ai-translate/english-to-french" className="hover:text-primary transition-colors">English to French</Link></li>
                <li><Link href="/ai-translate/english-to-hindi" className="hover:text-primary transition-colors">English to Hindi</Link></li>
                <li><Link href="/ai-translate/hindi-to-english" className="hover:text-primary transition-colors">Hindi to English</Link></li>
                <li><Link href="/ai-translate/english-to-chinese" className="hover:text-primary transition-colors">English to Chinese</Link></li>
              </ul>
            </div>
            
            {/* Features */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Features</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> Text Translation</li>
                <li className="flex items-center gap-2"><FileText className="w-3 h-3 text-primary" /> Document Upload</li>
                <li className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary" /> Translation History</li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Translate. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
