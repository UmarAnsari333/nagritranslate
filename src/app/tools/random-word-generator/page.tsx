import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { RandomWordGeneratorTool } from '@/components/tools/random-word-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Random Word Generator - Generate Random Words Online',
  description: 'Free online random word generator. Generate random words for creative writing, brainstorming, password generation, and more. Customize word count, length, and categories.',
  keywords: ['random word generator', 'generate random words', 'random vocabulary generator', 'word generator online', 'random words', 'word list generator', 'creative writing tools', 'brainstorming tool', 'random word creator', 'random words for writing'],
  openGraph: {
    title: 'Random Word Generator - Free Online Word Creator',
    description: 'Generate random words instantly with our free online tool. Perfect for creative writing, brainstorming, and vocabulary building.',
    type: 'website',
  },
}

export default function RandomWordGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Random Word Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online random word generator. Generate random words for creative writing, brainstorming, password generation, and more. Customize word count, length, and categories.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <RandomWordGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our random word generator is a free online tool that creates random word lists for any purpose. Whether you need inspiration for creative writing, words for brainstorming sessions, vocabulary building material, or random content for testing and development, this word generator makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply customize your preferences (word count, length, category), click generate, and get instant random word lists. Perfect for writers, developers, designers, marketers, and anyone who needs random vocabulary on demand.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Set Your Preferences</h3>
                    <p className="text-sm text-muted-foreground">Choose word count, length limits, and category for your needs</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Click Generate</h3>
                    <p className="text-sm text-muted-foreground">Instantly receive your randomly generated word list</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Review & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy the generated words for your project or generate again for fresh results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Random Word Generator Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use Random Word Generator</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Creative Writing",
                    desc: "Get inspiration for stories, poems, and creative projects"
                  },
                  {
                    title: "Brainstorming",
                    desc: "Generate ideas for naming, concepts, and problem-solving"
                  },
                  {
                    title: "Password Generation",
                    desc: "Create random word combinations for secure passwords"
                  },
                  {
                    title: "Vocabulary Building",
                    desc: "Discover new words and expand your language skills"
                  },
                  {
                    title: "Content Creation",
                    desc: "Generate placeholder content for testing and development"
                  },
                  {
                    title: "Gaming & Fun",
                    desc: "Create random names, items, and game elements"
                  }
                ].map((useCase, i) => (
                  <div key={i} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2">{useCase.title}</h3>
                    <p className="text-xs text-muted-foreground">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Customizable</h3>
                  <p className="text-xs text-muted-foreground">Control word count, length, and categories</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Generation</h3>
                  <p className="text-xs text-muted-foreground">Get random words immediately without waiting</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Diverse Vocabulary</h3>
                  <p className="text-xs text-muted-foreground">Rich word database across multiple categories</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a random word generator?</h3>
                  <p className="text-sm text-muted-foreground">A random word generator is an online tool that creates random word lists from a vocabulary database. Our tool lets you customize the number of words, word length, and category to generate perfect word lists for writing, brainstorming, password creation, or any project requiring random vocabulary.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the random word generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply set your preferences (word count, minimum/maximum length, and category), then click "Generate Random Words". Your custom word list will appear instantly, and you can copy it with one click or generate again for fresh results.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I customize the generated words?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our tool offers multiple customization options: choose the number of words (1-100), set minimum and maximum word length, and select from various categories like all words, nouns, verbs, adjectives, technical words, and more.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What word categories are available?</h3>
                  <p className="text-sm text-muted-foreground">Our random word generator supports multiple categories: all words, English nouns, verbs, adjectives, adverbs, technical words, business terms, and creative vocabulary. This lets you tailor word generation to your specific needs or writing style.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is this good for creative writing?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely! Writers use random word generators to overcome writer's block, discover new vocabulary, find inspiration for characters and plots, and add unexpected words to their writing. It's perfect for brainstorming sessions and expanding your creative horizons.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use random words for password generation?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Random words are excellent for password generation. Generate several random words and combine them to create secure, memorable passwords. Just remember to use additional security practices like mixing in numbers and special characters for optimal password strength.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How random is the word generation?</h3>
                  <p className="text-sm text-muted-foreground">Our tool uses true random algorithms to select words from a large vocabulary database. Each generation creates completely unique combinations, ensuring you get fresh word lists every time. The randomness follows mathematical standards for fair, unpredictable results.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our random word generator works directly in your web browser. Simply visit the page, set your preferences, and get instant random word lists without downloading any software.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* All Text Tools */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">All Text Tools</h3>
              <div className="space-y-3">
                <Link
                  href="/tools"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">View All Tools</p>
                    <p className="text-xs text-muted-foreground">Browse all available text tools</p>
                  </div>
                </Link>
                <Link
                  href="/tools/word-counter"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Word Counter</p>
                    <p className="text-xs text-muted-foreground">Count words, characters, sentences</p>
                  </div>
                </Link>
                <Link
                  href="/tools/case-converter"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Case Converter</p>
                    <p className="text-xs text-muted-foreground">Convert text to uppercase, lowercase, title case</p>
                  </div>
                </Link>
                <Link
                  href="/tools/slug-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Slug Generator</p>
                    <p className="text-xs text-muted-foreground">Create URL-friendly slugs from text</p>
                  </div>
                </Link>
                <Link
                  href="/tools/sort-deduplicate"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Sort & Deduplicate</p>
                    <p className="text-xs text-muted-foreground">Sort text and remove duplicates</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related Language Features */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Language Features</h3>
              <div className="space-y-3">
                <Link
                  href="/ai-translate"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">AI Translator</p>
                    <p className="text-xs text-muted-foreground">Translate text to any language</p>
                  </div>
                </Link>
                <Link
                  href="/languages"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Language Resources</p>
                    <p className="text-xs text-muted-foreground">Explore all supported languages</p>
                  </div>
                </Link>
                <Link
                  href="/phrases"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Common Phrases</p>
                    <p className="text-xs text-muted-foreground">Popular phrases in many languages</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* SEO Content */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">About Random Word Generator</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our random word generator is perfect tool for anyone who needs random vocabulary on demand. Whether you're a writer looking for inspiration, a developer needing test content, or someone brainstorming new ideas, this random word creator makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our free random word generator to instantly create customized word lists for any purpose. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This random vocabulary generator requires no registration and provides instant results. You can generate random words without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our online random word generator today and discover new vocabulary for your creative projects, brainstorming sessions, or any application that needs random words. Perfect for writers, developers, marketers, and everyone who needs inspiration.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creative writing inspiration and story development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Brainstorming and idea generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Password generation and security testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vocabulary building and language learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Content creation for testing and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gaming content and random name generation</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Word count range:</span>
                  <span className="font-medium">1-100 words</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Word length range:</span>
                  <span className="font-medium">1-15 characters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categories available:</span>
                  <span className="font-medium">8 categories</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Algorithm:</span>
                  <span className="font-medium">True random</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vocabulary size:</span>
                  <span className="font-medium">200+ words</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language support:</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Browser support:</span>
                  <span className="font-medium">All modern browsers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Device support:</span>
                  <span className="font-medium">Desktop, tablet, mobile</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Installation:</span>
                  <span className="font-medium">Not required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account needed:</span>
                  <span className="font-medium">No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
