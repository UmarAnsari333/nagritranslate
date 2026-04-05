import { Metadata } from 'next'
import { Wrench, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text Tools - Free Online Text Utilities',
  description: 'Collection of free online text tools including word counter, case converter, find and replace, remove whitespace, text repeater, and text reverser. Easy to use text utilities for everyone.',
  keywords: ['text tools', 'online text tools', 'text utilities', 'free text tools', 'text manipulation', 'word counter', 'case converter', 'find and replace', 'remove whitespace', 'text repeater', 'text reverser'],
  openGraph: {
    title: 'Text Tools - Free Online Text Utilities',
    description: 'Collection of free online text tools for text manipulation and formatting.',
    type: 'website',
  },
}

const tools = [
  {
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs instantly',
    path: '/tools/word-counter',
    icon: '📊',
    color: 'from-green-500/5 to-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    name: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, and more',
    path: '/tools/case-converter',
    icon: '🔠',
    color: 'from-orange-500/5 to-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
  {
    name: 'Find and Replace',
    description: 'Find and replace text with case sensitive and regex options',
    path: '/tools/find-replace',
    icon: '🔍',
    color: 'from-red-500/5 to-red-500/10',
    borderColor: 'border-red-500/20',
  },
  {
    name: 'Remove Whitespace',
    description: 'Clean text, remove extra spaces, line breaks, and tabs',
    path: '/tools/remove-whitespace',
    icon: '🧹',
    color: 'from-pink-500/5 to-pink-500/10',
    borderColor: 'border-pink-500/20',
  },
  {
    name: 'Text Repeater',
    description: 'Repeat text multiple times with customizable separators',
    path: '/tools/text-repeater',
    icon: '🔄',
    color: 'from-blue-500/5 to-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    name: 'Text Reverser',
    description: 'Reverse text, words, or both instantly',
    path: '/tools/text-reverser',
    icon: '↔️',
    color: 'from-purple-500/5 to-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Text Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collection of free online text tools for text manipulation and formatting including word counter, case converter, find and replace, remove whitespace, text repeater, and text reverser. Easy to use, no installation required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={tool.path}
              href={tool.path}
              className={`group p-6 bg-gradient-to-br ${tool.color} rounded-2xl border ${tool.borderColor} hover:shadow-lg transition-all`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{tool.icon}</div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h2 className="text-xl font-bold mb-2">{tool.name}</h2>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-dashed">
          <h2 className="text-2xl font-bold mb-4 text-center">More Tools Coming Soon</h2>
          <p className="text-center text-muted-foreground">
            We're constantly adding new text tools to help you work more efficiently. Check back soon for updates!
          </p>
        </div>

        {/* Related Language Features */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/ai-translate"
              className="group p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-2xl border border-blue-500/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl">🌍</div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Translator</h3>
              <p className="text-sm text-muted-foreground">Translate text to any of 248+ languages instantly</p>
            </Link>
            <Link
              href="/languages"
              className="group p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl border border-purple-500/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl">📚</div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Language Resources</h3>
              <p className="text-sm text-muted-foreground">Explore all supported languages with guides and resources</p>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">No Installation</h3>
            <p className="text-sm text-muted-foreground">Use all tools directly in your browser without downloading anything</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">No Login Required</h3>
            <p className="text-sm text-muted-foreground">Access all tools instantly without creating an account</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">100% Free</h3>
            <p className="text-sm text-muted-foreground">All tools are completely free with no hidden charges</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
