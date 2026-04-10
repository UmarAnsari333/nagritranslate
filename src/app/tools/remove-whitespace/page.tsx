import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { RemoveWhitespaceTool } from '@/components/tools/remove-whitespace-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Remove Whitespace - Trim Text & Clean Text Online Tool',
  description: 'Free online remove whitespace tool. Clean text, remove extra spaces, trim text, remove line breaks, and more. Easy text cleanup tool with copy and paste.',
  keywords: ['remove whitespace', 'trim text', 'clean text online', 'remove extra spaces', 'remove line breaks', 'text cleanup tool', 'remove spaces', 'clean text'],
  openGraph: {
    title: 'Remove Whitespace - Free Online Text Cleanup Tool',
    description: 'Remove whitespace, clean text, trim and format text instantly with our free text cleanup tool.',
    type: 'website',
  },
}

export default function RemoveWhitespacePage() {
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
            Remove Whitespace
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online remove whitespace tool. Clean text, remove extra spaces, trim text, remove line breaks, and more. Easy text cleanup tool with copy and paste.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <RemoveWhitespaceTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our remove whitespace tool is a free online text cleanup utility that helps you clean and format text by removing unwanted whitespace. Whether you need to trim text, remove extra spaces, remove line breaks, or completely clean text, this text cleanup tool makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text, select what type of whitespace to remove, and get instant, clean results. Perfect for data cleaning, text formatting, programming, and any situation where you need to remove whitespace from text.
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
                    <p className="text-sm text-muted-foreground">Type or paste the text you want to clean</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Select Options</h3>
                    <p className="text-sm text-muted-foreground">Choose what whitespace to remove (spaces, line breaks, tabs, etc.)</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Click Clean</h3>
                    <p className="text-sm text-muted-foreground">Instantly see your cleaned text with whitespace removed</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy your cleaned text with one click for use anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Remove Whitespace Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use Remove Whitespace</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Data Cleaning",
                    desc: "Clean up messy data from databases, spreadsheets, and text files"
                  },
                  {
                    title: "Programming",
                    desc: "Remove whitespace from code strings and programming output"
                  },
                  {
                    title: "Text Formatting",
                    desc: "Format text for documents, emails, and web content"
                  },
                  {
                    title: "Copy-Paste Cleanup",
                    desc: "Clean text copied from PDFs, websites, and other sources"
                  },
                  {
                    title: "CSV Processing",
                    desc: "Prepare data for CSV imports and database entries"
                  },
                  {
                    title: "Social Media",
                    desc: "Clean text for social media posts and character limits"
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
                  <h3 className="font-semibold mb-2">Multiple Options</h3>
                  <p className="text-xs text-muted-foreground">Remove spaces, line breaks, tabs, or combinations</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Results</h3>
                  <p className="text-xs text-muted-foreground">Get clean text immediately without any delays</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Free</h3>
                  <p className="text-xs text-muted-foreground">Use our remove whitespace tool completely free with no limitations</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a remove whitespace tool?</h3>
                  <p className="text-sm text-muted-foreground">A remove whitespace tool is an online utility that cleans text by removing unwanted spaces, line breaks, tabs, and other whitespace characters. Our remove whitespace tool helps you trim text, clean text online, and format text for any purpose.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the remove whitespace tool?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text in the input field, select what type of whitespace to remove (extra spaces, all spaces, line breaks, etc.), and click the clean button. Your cleaned text will appear instantly and you can copy it with one click.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What types of whitespace can I remove?</h3>
                  <p className="text-sm text-muted-foreground">Our text cleanup tool offers multiple options: Remove extra spaces, remove all spaces, remove line breaks, remove tabs, trim text from both ends, and combinations of these options. You can clean text in exactly the way you need.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the difference between trim and remove extra spaces?</h3>
                  <p className="text-sm text-muted-foreground">Trim removes spaces only from the beginning and end of text. Remove extra spaces replaces multiple spaces with a single space throughout the entire text, keeping necessary spacing while cleaning up excessive whitespace.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I clean text from multiple languages?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our remove whitespace tool works with all languages. Whitespace characters are universal, so whether you're cleaning English, Spanish, Chinese, Arabic, or any other language text, it will work perfectly.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our remove whitespace online tool works directly in your web browser. Simply visit the page, enter your text, and get instant clean results without downloading any software.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is there a limit on how much text I can clean?</h3>
                  <p className="text-sm text-muted-foreground">Our free remove whitespace tool can handle large amounts of text without any limitations. Whether you're cleaning a short phrase or a full-length document, you'll get instant results.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Can I use this on mobile devices?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our text cleanup tool is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers. Use it anywhere with an internet connection.</p>
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
              <h3 className="text-lg font-bold mb-4">About Remove Whitespace</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our remove whitespace tool is the perfect trim text and clean text online utility for anyone who needs to remove whitespace. Whether you need to remove extra spaces, trim text, or completely clean text, this text cleanup tool makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our remove line breaks and remove extra spaces tools instantly. The online remove whitespace tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This free text cleanup tool requires no registration and provides instant results. You can use this tool without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our remove whitespace tool today and see how easy text cleaning can be! Perfect for data cleaning, programming, and anyone who needs to trim text quickly and efficiently.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cleaning data from spreadsheets and databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Removing extra spaces from copied text</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Formatting text for programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cleaning CSV data for import</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Removing line breaks from text</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Preparing text for social media posts</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cleanup options:</span>
                  <span className="font-medium">6 types</span>
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
                  <span className="text-muted-foreground">Real-time cleaning:</span>
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
