import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { FindReplaceTool } from '@/components/tools/find-replace-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Find and Replace - Text Search & Replace Tool | Free Online',
  description: 'Free online find and replace tool. Search text, find and replace with multiple options. Easy text replacement tool with case sensitivity and regex support.',
  keywords: ['find and replace text', 'text replacement tool', 'search and replace', 'find and replace online', 'text search replace', 'replace text tool', 'find text', 'replace in text', 'find replace'],
  openGraph: {
    title: 'Find and Replace - Free Online Text Replacement Tool',
    description: 'Search text, find and replace with multiple options using our free find and replace online tool.',
    type: 'website',
  },
}

export default function FindReplacePage() {
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
            Find and Replace
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online find and replace tool. Search text, find and replace with multiple options. Easy text replacement tool with case sensitivity and regex support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <FindReplaceTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our find and replace tool is a free online utility that allows you to search for text and replace it with new text. Whether you need to fix typos, update content, or perform batch text replacements, this text replacement tool makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text, specify what to find, and what to replace it with. Choose from options like case sensitivity, use regular expressions, or replace all instances. Perfect for content editing, code cleanup, document processing, and text transformation.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Your Text</h3>
                    <p className="text-sm text-muted-foreground">Type or paste your text in the input field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Find & Replace</h3>
                    <p className="text-sm text-muted-foreground">Enter what to search for and what to replace it with</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Options</h3>
                    <p className="text-sm text-muted-foreground">Select case sensitivity, regex, and replacement options</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">View Results</h3>
                    <p className="text-sm text-muted-foreground">See instant results with match count and replaced text</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Find and Replace Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Find and Replace</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Content Editing",
                    desc: "Writers and editors use it to fix typos and update content across documents"
                  },
                  {
                    title: "Code Cleanup",
                    desc: "Developers clean up code by replacing deprecated functions or fixing formatting issues"
                  },
                  {
                    title: "Document Processing",
                    desc: "Processors update multiple documents by finding and replacing specific terms or phrases"
                  },
                  {
                    title: "Batch Operations",
                    desc: "Perform mass replacements on large text files or data sets efficiently"
                  },
                  {
                    title: "Data Management",
                    desc: "Update records and clean up database entries with find and replace operations"
                  },
                  {
                    title: "Content Migration",
                    desc: "Replace old URLs, domains, or references when moving to new platforms"
                  },
                  {
                    title: "Template Updates",
                    desc: "Update email templates, form letters, or standard text with new information"
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
            <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multiple Options</h3>
                  <p className="text-xs text-muted-foreground">Case sensitive, regex, replace all</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Real-Time Results</h3>
                  <p className="text-xs text-muted-foreground">See matches count and replacement text instantly</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Free</h3>
                  <p className="text-xs text-muted-foreground">Use our find and replace online tool completely free with no limitations</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a find and replace tool?</h3>
                  <p className="text-sm text-muted-foreground">A find and replace tool is an online utility that searches for specific text in your content and replaces it with new text. Our text replacement tool can find and replace single instances or multiple occurrences, making it perfect for editing, content cleanup, and document processing.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the find and replace tool?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text in the input field, type what to find and what to replace it with, then click the "Find and Replace" button. You'll see the results instantly with a count of how many matches were found.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is case sensitivity?</h3>
                  <p className="text-sm text-muted-foreground">Case sensitivity determines if the search matches exact letter case. When enabled, "Hello" will match "Hello" but not "hello". When disabled, it will match regardless of letter case. Use this for exact matching or enable for more flexible search.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What are regular expressions (regex)?</h3>
                  <p className="text-sm text-muted-foreground">Regular expressions allow you to search for patterns rather than exact text. For example, use "\d+" to find all phone numbers, or "[A-Z]+" to find all capital letters. This advanced feature enables powerful pattern matching for complex search and replace operations.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What does replace all instances do?</h3>
                  <p className="text-sm text-muted-foreground">Replace all instances replaces every occurrence of the found text throughout your entire document, not just the first one. This is useful for making global changes or updating multiple instances of the same term.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use special characters in my search?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our find and replace online tool supports all special characters, numbers, and Unicode symbols. You can search for email addresses, phone numbers, punctuation marks, or any other characters you need to find.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I search for multiple terms at once?</h3>
                  <p className="text-sm text-muted-foreground">Yes! You can perform multiple search and replace operations in sequence. Find one term, replace it, then search for another term to replace. This makes batch processing more efficient for complex document updates.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Does this tool work on mobile devices?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our find and replace online tool is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers. Use it anywhere with an internet connection.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is there a limit on how much text I can process?</h3>
                  <p className="text-sm text-muted-foreground">Our free find and replace tool can handle large amounts of text without any limitations. Whether you're working with a short paragraph or a full-length document, you'll get instant results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* All Text Tools */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
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
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
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
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">About Find and Replace</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our find and replace tool is the perfect online text replacement utility for anyone who needs to search and replace text. Whether you're a writer fixing typos, a developer cleaning up code, or a processor updating documents, this text search replace tool makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our find and replace online tool to instantly search for text, find all instances, or replace multiple occurrences. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This free find and replace tool requires no registration and provides instant results. You can use this tool without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our text replacement tool today and see how easy text search and replace can be! Perfect for writers, developers, and anyone who needs to find and replace text quickly and efficiently.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Fixing typos and spelling errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Updating deprecated functions or code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Batch processing multiple documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Content migration and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Template and form updates</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Search features:</span>
                  <span className="font-medium">5 types</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Case sensitivity:</span>
                  <span className="font-medium">Optional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Regex support:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Replace options:</span>
                  <span className="font-medium">All instances/First only</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Character support:</span>
                  <span className="font-medium">All Unicode</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Real-time results:</span>
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
