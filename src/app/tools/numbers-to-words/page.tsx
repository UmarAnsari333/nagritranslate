import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { NumbersToWordsTool } from '@/components/tools/numbers-to-words-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Numbers To Words Converter - Free Online | Instant Number to Text',
  description: 'Free online numbers to words converter. Instantly convert any number to words in lowercase, title case, uppercase, and sentence case. Supports integers, decimals, and negative numbers.',
  keywords: ['numbers to words', 'number to text', 'convert number to words', 'number converter', 'write numbers in words', 'spell out numbers', 'number spelling', 'digit to word converter'],
  openGraph: {
    title: 'Numbers To Words Converter - Free Online',
    description: 'Instantly convert any number to words in multiple formats. Perfect for checks, documents, and educational purposes.',
    type: 'website',
  },
}

export default function NumbersToWordsPage() {
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
            Numbers To Words Converter
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online numbers to words converter. Instantly convert any number to words in lowercase, title case, uppercase, and sentence case. Supports integers, decimals, and negative numbers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <NumbersToWordsTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our numbers to words converter instantly transforms any numeric value into its written word form. Simply enter a number and get the word representation in multiple formats: lowercase, title case, uppercase, and sentence case. Perfect for writing checks, legal documents, educational materials, and any situation where numbers need to be spelled out.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The converter handles integers, decimal numbers, negative numbers, and very large numbers up to quintillions. Each conversion is instant and can be copied to clipboard with a single click.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter a Number</h3>
                    <p className="text-sm text-muted-foreground">Type any number including decimals and negatives</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Conversion</h3>
                    <p className="text-sm text-muted-foreground">Get the word representation in 4 different formats automatically</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Click copy on any format to use it immediately</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use This Tool Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use This Tool</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Writing Checks",
                    desc: "Spell out check amounts accurately"
                  },
                  {
                    title: "Legal Documents",
                    desc: "Ensure numerical accuracy in contracts"
                  },
                  {
                    title: "Educational Purposes",
                    desc: "Teach number spelling to students"
                  },
                  {
                    title: "Financial Reports",
                    desc: "Add clarity to financial statements"
                  },
                  {
                    title: "Invoice Creation",
                    desc: "Professional invoice wording"
                  },
                  {
                    title: "Academic Writing",
                    desc: "Follow style guide requirements"
                  },
                  {
                    title: "Business Communication",
                    desc: "Professional number presentation"
                  },
                  {
                    title: "Data Verification",
                    desc: "Cross-check numeric data entry"
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
                  <h3 className="font-semibold mb-2">4 Format Options</h3>
                  <p className="text-xs text-muted-foreground">Lowercase, title case, uppercase, and sentence</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Conversion</h3>
                  <p className="text-xs text-muted-foreground">Real-time results as you type</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">One-Click Copy</h3>
                  <p className="text-xs text-muted-foreground">Copy any format instantly</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What numbers can this converter handle?</h3>
                  <p className="text-sm text-muted-foreground">Our converter handles integers, decimal numbers, negative numbers, and very large numbers up to quintillions (10^18). It supports all standard numeric formats and provides accurate word representations for each.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the numbers to words converter?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your number in the input field. The converter will automatically generate the word representation in four formats: lowercase, title case, uppercase, and sentence case. Click the copy button on any format to copy it to your clipboard.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What formats are available?</h3>
                  <p className="text-sm text-muted-foreground">We offer four output formats: lowercase (e.g., "one hundred twenty-three"), title case (e.g., "One Hundred Twenty-Three"), uppercase (e.g., "ONE HUNDRED TWENTY-THREE"), and sentence case (e.g., "One hundred twenty-three").</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Does it handle decimal numbers?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our converter handles decimal numbers accurately. For example, 123.45 converts to "one hundred twenty-three point four five". The decimal part is spelled out digit by digit after the word "point".</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use this for writing checks?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely! This tool is perfect for writing checks. Simply enter the check amount, copy the result in your preferred format (usually title case or sentence case for checks), and use it on your check document.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our numbers to words converter is completely free with no limitations. No registration or installation required - just visit the page and start converting numbers to words instantly.</p>
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
                    <p className="text-xs text-muted-foreground">Convert text to uppercase, lowercase</p>
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
              <h3 className="text-lg font-bold mb-4">About Numbers To Words</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our numbers to words converter instantly transforms any numeric value into its written word form. Perfect for writing checks, legal documents, educational materials, and any situation where numbers need to be spelled out.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The converter handles integers, decimal numbers, negative numbers, and very large numbers up to quintillions. Each conversion is instant and can be copied to clipboard with a single click.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start converting numbers to words today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Writing checks and money orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Legal contracts and agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Financial reports and invoices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Educational materials and teaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Academic writing and papers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Business correspondence</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Output formats:</span>
                  <span className="font-medium">4 formats</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Number support:</span>
                  <span className="font-medium">Up to quintillions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Decimal support:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Negative numbers:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Instant conversion:</span>
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
