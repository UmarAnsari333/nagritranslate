import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { CaseConverterTool } from '@/components/tools/case-converter-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Converter - Uppercase Lowercase Converter | Text Case Changer',
  description: 'Free online case converter tool. Convert text to uppercase, lowercase, title case, sentence case, toggle case, and more. Easy text case changer with copy and paste.',
  keywords: ['case converter', 'uppercase lowercase converter', 'text case changer', 'convert to uppercase', 'convert to lowercase', 'title case converter', 'sentence case converter'],
  openGraph: {
    title: 'Case Converter - Free Online Text Case Changer',
    description: 'Convert text to uppercase, lowercase, title case, and more with our free case converter tool.',
    type: 'website',
  },
}

export default function CaseConverterPage() {
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
            Case Converter
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online case converter tool. Convert text to uppercase, lowercase, title case, sentence case, toggle case, and more. Easy text case changer with copy and paste.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <CaseConverterTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our case converter is a free online tool that allows you to change the case of your text in multiple ways. Whether you need to convert text to uppercase for emphasis, lowercase for consistency, title case for headings, or sentence case for proper formatting, this text case changer makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text, choose your desired case conversion, and get instant results. Perfect for writers, developers, marketers, and anyone who works with text formatting.
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
                    <p className="text-sm text-muted-foreground">Type or paste the text you want to convert</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Case Type</h3>
                    <p className="text-sm text-muted-foreground">Select from uppercase, lowercase, title case, sentence case, toggle case, or more</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Conversion</h3>
                    <p className="text-sm text-muted-foreground">See your converted text appear immediately</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy your converted text with one click for use anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Case Converter Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use Case Converter</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Writing & Editing",
                    desc: "Writers convert text to proper case for different document types and styles"
                  },
                  {
                    title: "Programming",
                    desc: "Developers change case for variable names, constants, and code formatting"
                  },
                  {
                    title: "Marketing",
                    desc: "Marketers use title case for headlines and uppercase for emphasis"
                  },
                  {
                    title: "Social Media",
                    desc: "Users format text for different platforms and style preferences"
                  },
                  {
                    title: "Data Entry",
                    desc: "Professionals standardize text case for databases and records"
                  },
                  {
                    title: "Academic Writing",
                    desc: "Students and researchers apply proper case formatting to papers"
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
                  <h3 className="font-semibold mb-2">Multiple Case Types</h3>
                  <p className="text-xs text-muted-foreground">Convert to uppercase, lowercase, title case, sentence case, and more</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Results</h3>
                  <p className="text-xs text-muted-foreground">Get your converted text immediately without any delays</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Free</h3>
                  <p className="text-xs text-muted-foreground">Use our case converter online tool completely free with no limitations</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a case converter?</h3>
                  <p className="text-sm text-muted-foreground">A case converter is an online tool that changes the letter case of text. Our case converter tool can convert text to uppercase, lowercase, title case, sentence case, toggle case, and more, making it easy to format text for any purpose.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the case converter online?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text in the input field, select the case type you want (uppercase, lowercase, title case, etc.), and click the convert button. Your converted text will appear instantly and you can copy it with one click.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What case types are available?</h3>
                  <p className="text-sm text-muted-foreground">Our text case changer offers multiple conversion options: Uppercase, Lowercase, Title Case, Sentence Case, Toggle Case, Capitalize Case, and Alternating Case. Each serves different formatting needs.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the difference between title case and sentence case?</h3>
                  <p className="text-sm text-muted-foreground">Title case capitalizes the first letter of each word (e.g., "Hello World"). Sentence case capitalizes only the first letter of each sentence (e.g., "Hello world."). Use title case for headlines and sentence case for normal text.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I convert text to multiple languages?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our case converter works with all languages including English, Spanish, French, German, and many more. It handles uppercase and lowercase letters in all supported languages and character sets.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our case converter online tool works directly in your web browser. Simply visit the page, enter your text, and get instant conversions without downloading any software.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is there a limit on how much text I can convert?</h3>
                  <p className="text-sm text-muted-foreground">Our free case converter tool can handle large amounts of text without any limitations. Whether you're converting a short phrase or a full-length document, you'll get instant results.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Can I use this on mobile devices?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our case converter tool is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers. Use it anywhere with an internet connection.</p>
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
              <h3 className="text-lg font-bold mb-4">About Case Converter</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our case converter tool is the perfect uppercase lowercase converter for anyone who needs to change text case. Whether you need to convert text to uppercase for emphasis, lowercase for consistency, or title case for headings, this text case changer makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our convert to uppercase and convert to lowercase tools instantly. The online case converter works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This free case converter tool requires no registration and provides instant results. You can use this tool without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our case converter online today and see how easy text case conversion can be! Perfect for writers, developers, marketers, and anyone who needs to change text case quickly and efficiently.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Converting headlines to title case</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Formatting code variable names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Standardizing data entry text</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Social media text formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Academic paper formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Marketing copy preparation</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Case types available:</span>
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
                  <span className="text-muted-foreground">Real-time conversion:</span>
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
