import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { TextRepeaterTool } from '@/components/tools/text-repeater-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text Repeater - Online Text Repeater Tool | Copy and Paste',
  description: 'Free online text repeater tool. Repeat text multiple times instantly. Text repeater generator with copy and paste functionality. Fast and easy text repeater online.',
  keywords: ['text repeater', 'text repeater generator', 'text repeater online', 'text repeater copy and paste', 'text repeater online tool', 'text repeater tool', 'online text repeater tool', 'online text repeater'],
  openGraph: {
    title: 'Text Repeater - Free Online Text Repeater Tool',
    description: 'Repeat text instantly with our free text repeater online tool. Copy and paste your repeated text in seconds.',
    type: 'website',
  },
}

export default function TextRepeaterPage() {
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
            Text Repeater
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online text repeater tool. Repeat text multiple times instantly with copy and paste functionality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <TextRepeaterTool />
            </div>

            {/* Features Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why Use Our Text Repeater?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Instant Results",
                    desc: "Get your repeated text immediately without any delays or waiting times"
                  },
                  {
                    title: "Copy & Paste Ready",
                    desc: "One-click copy to clipboard for instant use anywhere you need"
                  },
                  {
                    title: "Custom Repetitions",
                    desc: "Choose exactly how many times to repeat your text (1-1000 times)"
                  },
                  {
                    title: "Multiple Separators",
                    desc: "Customize how your repeated text is separated with various options"
                  },
                  {
                    title: "No Installation Required",
                    desc: "Works directly in your browser - no downloads or setup needed"
                  },
                  {
                    title: "No Login Required",
                    desc: "Access instantly without creating an account or providing personal info"
                  },
                  {
                    title: "100% Free",
                    desc: "Use our text repeater online tool completely free with no limitations"
                  },
                  {
                    title: "Mobile Friendly",
                    desc: "Works perfectly on all devices - desktop, tablet, and mobile"
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0 mt-1">
                      <Wrench className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our text repeater is a free online tool that allows you to duplicate any text multiple times instantly. Whether you need to repeat a word, sentence, or paragraph, this text repeater tool makes the process simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text, specify how many times you want it repeated, choose a separator if needed, and get your results immediately. Perfect for creating patterns, testing layouts, generating filler text, or any other text repetition needs.
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
                    <p className="text-sm text-muted-foreground">Type or paste the text you want to repeat into the input field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Set Repetition Count</h3>
                    <p className="text-sm text-muted-foreground">Choose how many times you want the text to be repeated (1-1000)</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Separator</h3>
                    <p className="text-sm text-muted-foreground">Select how you want the repeated text to be separated (space, comma, new line, etc.)</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Click Repeat & Copy</h3>
                    <p className="text-sm text-muted-foreground">Generate your repeated text and copy it with one click</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Text Repeater Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Text Repeater</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Testing Website Layouts",
                    desc: "Designers and developers use it to test how text repeats affect their website designs"
                  },
                  {
                    title: "Creating Patterns",
                    desc: "Generate decorative patterns or backgrounds using repeated text or symbols"
                  },
                  {
                    title: "Social Media Content",
                    desc: "Create repeated text effects for social media posts and comments"
                  },
                  {
                    title: "Filler Text Generation",
                    desc: "Quickly generate placeholder text for design mockups and prototypes"
                  },
                  {
                    title: "Data Formatting",
                    desc: "Format data entries that require repeated information or separators"
                  },
                  {
                    title: "Educational Purposes",
                    desc: "Teachers and students use it for language exercises and pattern recognition"
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
                  <h3 className="font-semibold mb-2">No Installation Required</h3>
                  <p className="text-xs text-muted-foreground">Use our text repeater online tool directly in your browser without downloading anything</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">No Login Required</h3>
                  <p className="text-xs text-muted-foreground">Access our text repeater tool instantly without creating an account or signing up</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Free</h3>
                  <p className="text-xs text-muted-foreground">Use our online text repeater completely free with no hidden charges or limitations</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a text repeater?</h3>
                  <p className="text-sm text-muted-foreground">A text repeater is an online tool that duplicates text multiple times. Our text repeater generator allows you to repeat any word, sentence, or paragraph as many times as you need, with customizable separators.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the text repeater online?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text in the input field, set the number of repetitions you want, choose a separator if needed, and click "Repeat Text". Your repeated text will appear instantly and you can copy it with one click.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is this text repeater tool free?</h3>
                  <p className="text-sm text-muted-foreground">Yes, our text repeater online tool is completely free to use. There are no hidden charges, no registration required, and no limitations on how many times you can use it.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the maximum number of repetitions?</h3>
                  <p className="text-sm text-muted-foreground">Our text repeater tool supports up to 1000 repetitions. This is more than sufficient for most use cases including website testing, pattern creation, and data formatting.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I copy the repeated text?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our text repeater copy and paste feature allows you to instantly copy your repeated text to clipboard with a single click, making it ready to use wherever you need it.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What separators can I use?</h3>
                  <p className="text-sm text-muted-foreground">Our online text repeater tool offers multiple separator options including space, comma + space, pipe (|), double pipe (||), new line, or no separator at all. Choose the one that best fits your needs.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our text repeater online tool works directly in your web browser. Simply visit the page, enter your text, and get your repeated text instantly without downloading any software.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Internal Linking to Translation */}
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
              <h3 className="text-lg font-bold mb-4">About Text Repeater</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our text repeater tool is the perfect online text repeater for anyone who needs to duplicate text quickly. Whether you're testing layouts, creating patterns, or need to repeat text for any purpose, this text repeater generator makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our text repeater copy and paste functionality to instantly get your repeated text ready for use. The online text repeater tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This free text repeater tool requires no registration and provides instant results. You can use this tool without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our online text repeater today and see how easy text repetition can be! Perfect for designers, developers, content creators, and anyone who needs to repeat text quickly and efficiently.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Testing website layouts and responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creating decorative text patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Generating filler text for mockups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Social media text effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Data formatting and processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Language learning exercises</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maximum repetitions:</span>
                  <span className="font-medium">1000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Separator options:</span>
                  <span className="font-medium">6 types</span>
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
