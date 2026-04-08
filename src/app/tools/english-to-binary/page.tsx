import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { EnglishToBinaryTool } from '@/components/tools/english-to-binary-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'English to Binary Converter - Free Online | Text to Binary & Vice Versa',
  description: 'Free online English to binary converter. Convert text to binary code and vice versa instantly. Also supports hexadecimal, decimal, and octal conversions. Perfect for programmers and students.',
  keywords: ['english to binary', 'text to binary', 'binary to text', 'binary converter', 'ascii to binary', 'binary code converter', 'hex to text', 'decimal to binary', 'octal to binary'],
  openGraph: {
    title: 'English to Binary Converter - Free Online',
    description: 'Convert text to binary code and vice versa. Also supports hex, decimal, and octal conversions.',
    type: 'website',
  },
}

export default function EnglishToBinaryPage() {
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
            English to Binary Converter
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online English to binary converter. Convert text to binary code and vice versa instantly. Also supports hexadecimal, decimal, and octal conversions. Perfect for programmers and students.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <EnglishToBinaryTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our English to binary converter instantly transforms text into binary code (0s and 1s) and converts binary code back to readable text. Simply enter your text or binary code and get instant conversion. The tool also provides conversions to other number systems including hexadecimal, decimal, and octal for comprehensive character encoding analysis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each character is converted to its ASCII value and represented as an 8-bit binary number. This makes it perfect for programmers, students learning about character encoding, and anyone working with binary data.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Text or Binary</h3>
                    <p className="text-sm text-muted-foreground">Switch between Text to Binary or Binary to Text mode</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Conversion</h3>
                    <p className="text-sm text-muted-foreground">Get the converted result immediately as you type</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">View All Formats</h3>
                    <p className="text-sm text-muted-foreground">See conversions in hex, decimal, and octal too</p>
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
                    title: "Programming",
                    desc: "Understand character encoding"
                  },
                  {
                    title: "Education",
                    desc: "Learn about binary systems"
                  },
                  {
                    title: "Debugging",
                    desc: "Analyze binary data"
                  },
                  {
                    title: "Data Analysis",
                    desc: "Examine character codes"
                  },
                  {
                    title: "Cybersecurity",
                    desc: "Analyze encoded messages"
                  },
                  {
                    title: "File Analysis",
                    desc: "Examine file content"
                  },
                  {
                    title: "Network Communication",
                    desc: "Analyze data transmission"
                  },
                  {
                    title: "Learning ASCII",
                    desc: "Study character codes"
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
                  <h3 className="font-semibold mb-2">Two-Way Conversion</h3>
                  <p className="text-xs text-muted-foreground">Text to Binary and Binary to Text</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multiple Formats</h3>
                  <p className="text-xs text-muted-foreground">Binary, Hex, Decimal, Octal</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Results</h3>
                  <p className="text-xs text-muted-foreground">Real-time conversion as you type</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is binary code?</h3>
                  <p className="text-sm text-muted-foreground">Binary code is a system of representing text or computer processor instructions using the binary number system's two binary digits, 0 and 1. In character encoding, each character is represented by a unique sequence of 0s and 1s.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the English to binary converter?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text in the input field to get the binary representation, or enter binary code to decode it back to text. Switch between modes using the tabs. You'll also see conversions to hex, decimal, and octal.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What other formats are supported?</h3>
                  <p className="text-sm text-muted-foreground">In addition to binary, our tool shows conversions to hexadecimal (base-16), decimal (base-10), and octal (base-8). Each character is converted using its ASCII value and displayed in all these number systems.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How is text converted to binary?</h3>
                  <p className="text-sm text-muted-foreground">Each character is first converted to its ASCII code (a number), then that number is converted to binary. For example, 'A' has ASCII code 65, which in binary is 01000001. Each character becomes an 8-bit binary number.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I convert special characters?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our converter supports all ASCII characters including letters, numbers, spaces, punctuation, and special characters. Each is converted to its appropriate binary representation.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our English to binary converter is completely free with no limitations. No registration or installation required - just visit the page and start converting text to binary instantly.</p>
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
                  href="/tools/numbers-to-words"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Numbers To Words</p>
                    <p className="text-xs text-muted-foreground">Convert numbers to word format</p>
                  </div>
                </Link>
                <Link
                  href="/tools/morse-code-translator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Morse Code</p>
                    <p className="text-xs text-muted-foreground">Text to Morse with audio</p>
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
              <h3 className="text-lg font-bold mb-4">About English to Binary</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our English to binary converter instantly transforms text into binary code (0s and 1s) and converts binary code back to readable text. Supports hexadecimal, decimal, and octal conversions for comprehensive analysis.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Each character is converted to its ASCII value and represented as an 8-bit binary number. Perfect for programmers, students, and anyone working with binary data.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start converting text to binary today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Programming and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Learning character encoding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Debugging binary data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Analyzing file content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cybersecurity analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Network communication analysis</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conversion modes:</span>
                  <span className="font-medium">Text to Binary, Binary to Text</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Additional formats:</span>
                  <span className="font-medium">Hex, Decimal, Octal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Character encoding:</span>
                  <span className="font-medium">ASCII (8-bit)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Binary format:</span>
                  <span className="font-medium">8-bit per character</span>
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
