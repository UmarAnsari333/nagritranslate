import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { WordCounterTool } from '@/components/tools/word-counter-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Word Counter - Count Words & Characters Online | Free Text Counter Tool',
  description: 'Free online word counter tool. Count words, characters, sentences, paragraphs instantly. Accurate word and character counter with reading time estimate.',
  keywords: ['word counter', 'character counter', 'text counter online', 'word count tool', 'count words online', 'free word counter', 'character count tool', 'word and character counter'],
  openGraph: {
    title: 'Word Counter - Free Online Text Counter Tool',
    description: 'Count words, characters, sentences, and paragraphs instantly with our free word counter online tool.',
    type: 'website',
  },
}

export default function WordCounterPage() {
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
            Word Counter
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online word counter tool. Count words, characters, sentences, paragraphs instantly. Accurate word and character counter with reading time estimate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <WordCounterTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our word counter is a free online tool that provides comprehensive text analysis. Whether you're a writer, student, blogger, or professional, this word and character counter gives you detailed insights into your text including word count, character count, sentence count, paragraph count, and reading time estimates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply paste or type your text and get instant, accurate statistics. Perfect for meeting word count requirements for essays, articles, social media posts, or any text-based content.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Your Text</h3>
                    <p className="text-sm text-muted-foreground">Type or paste your text into the input field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Analysis</h3>
                    <p className="text-sm text-muted-foreground">See real-time statistics update as you type or paste</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Detailed Breakdown</h3>
                    <p className="text-sm text-muted-foreground">View comprehensive statistics including reading and speaking time</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Use the Insights</h3>
                    <p className="text-sm text-muted-foreground">Meet requirements, optimize content, and track your progress</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Word Counter Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use Word Counter</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Academic Writing",
                    desc: "Students and researchers use it to meet essay word count requirements"
                  },
                  {
                    title: "Content Creation",
                    desc: "Bloggers and writers track word counts for SEO and readability"
                  },
                  {
                    title: "Social Media",
                    desc: "Check character limits for tweets, posts, and descriptions"
                  },
                  {
                    title: "Professional Writing",
                    desc: "Business writers ensure documents meet length requirements"
                  },
                  {
                    title: "Translation Work",
                    desc: "Translators track word counts for pricing and project management"
                  },
                  {
                    title: "Editing & Proofreading",
                    desc: "Editors analyze text length and structure during revision"
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
                  <h3 className="font-semibold mb-2">Real-Time Analysis</h3>
                  <p className="text-xs text-muted-foreground">Get instant statistics as you type or paste text</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multiple Metrics</h3>
                  <p className="text-xs text-muted-foreground">Words, characters, sentences, paragraphs, and time estimates</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Free</h3>
                  <p className="text-xs text-muted-foreground">Use our word counter online tool completely free with no limitations</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a word counter?</h3>
                  <p className="text-sm text-muted-foreground">A word counter is an online tool that analyzes text and provides statistics including word count, character count, sentence count, paragraph count, and reading time estimates. Our word counter tool is perfect for writers, students, and professionals who need to track text length.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the word counter online?</h3>
                  <p className="text-sm text-muted-foreground">Simply type or paste your text into the input field, and our word counter will instantly display all statistics. The analysis happens in real-time as you type or paste, giving you immediate feedback on your text.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What statistics does this tool provide?</h3>
                  <p className="text-sm text-muted-foreground">Our word counter provides comprehensive statistics including: word count, character count (with and without spaces), sentence count, paragraph count, reading time estimate, and speaking time estimate. It also shows unique word count and average word length.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is this word counter tool accurate?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our word counter uses advanced algorithms to accurately count words, characters, sentences, and paragraphs. It handles multiple languages, special characters, and complex text structures with precision.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How is reading time calculated?</h3>
                  <p className="text-sm text-muted-foreground">Reading time is calculated based on the average reading speed of 200-250 words per minute. This is the standard benchmark used by most reading materials and provides a good estimate for most readers.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I count words in multiple languages?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely! Our word counter online tool supports all languages including English, Spanish, French, German, Chinese, Japanese, Arabic, and many more. The word counting algorithms work with Unicode characters and can handle various language scripts.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our word counter online tool works directly in your web browser. Simply visit the page, enter your text, and get instant statistics without downloading any software or creating an account.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is there a limit on how much text I can analyze?</h3>
                  <p className="text-sm text-muted-foreground">Our free word counter tool can handle large amounts of text without any limitations. Whether you're analyzing a short paragraph or a full-length article, you'll get accurate statistics instantly.</p>
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
                  href="/tools/remove-whitespace"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Remove Whitespace</p>
                    <p className="text-xs text-muted-foreground">Clean text, remove extra spaces, line breaks</p>
                  </div>
                </Link>
                <Link
                  href="/tools/text-repeater"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Text Repeater</p>
                    <p className="text-xs text-muted-foreground">Repeat text multiple times</p>
                  </div>
                </Link>
                <Link
                  href="/tools/text-reverser"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Text Reverser</p>
                    <p className="text-xs text-muted-foreground">Reverse text, words, or both</p>
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
              <h3 className="text-lg font-bold mb-4">About Word Counter</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our word counter tool is the perfect online text counter for anyone who needs to count words and characters. Whether you're a writer meeting essay requirements, a blogger optimizing content, or a student checking assignments, this word and character counter makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our count words online tool to instantly get detailed statistics about your text. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This free word counter tool requires no registration and provides instant, accurate results. You can use this tool without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our word counter online today and see how easy text analysis can be! Perfect for writers, students, professionals, and anyone who needs to count words and track text length.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Meeting essay word count requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Checking social media character limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optimizing content for SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tracking translation word counts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Analyzing document length</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Estimating reading and speaking time</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Statistics provided:</span>
                  <span className="font-medium">7 types</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language support:</span>
                  <span className="font-medium">All languages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Character support:</span>
                  <span className="font-medium">All Unicode</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Real-time analysis:</span>
                  <span className="font-medium">Yes</span>
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
