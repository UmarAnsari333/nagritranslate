import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { TextReverserTool } from '@/components/tools/text-reverser-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text Reverser - Reverse Text Online | Text Backwards Tool',
  description: 'Free online text reverser tool. Reverse text, flip text backwards, or reverse words instantly. Easy text reversal tool with copy and paste functionality.',
  keywords: ['text reverser', 'reverse text', 'text reversal tool', 'online text reverser', 'reverse text online', 'text backwards', 'flip text', 'text reverser online', 'reverse string', 'reverse words'],
  openGraph: {
    title: 'Text Reverser - Free Online Text Backwards Tool',
    description: 'Reverse text instantly with our free text reverser online tool. Flip text backwards or reverse words in seconds.',
    type: 'website',
  },
}

export default function TextReverserPage() {
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
            Text Reverser
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online text reverser tool. Reverse text, flip text backwards, or reverse words instantly with copy and paste functionality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <TextReverserTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our text reverser is a free online tool that allows you to reverse text in multiple ways. Whether you want to flip text backwards character by character, reverse the order of words, or create mirrored text, this text reversal tool makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text, choose your reversal mode (text, words, or both), and get instant results. Perfect for creating hidden messages, testing string manipulation, or just having fun with text transformations.
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
                    <p className="text-sm text-muted-foreground">Type or paste the text you want to reverse into the input field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Reversal Mode</h3>
                    <p className="text-sm text-muted-foreground">Select how you want to reverse: text, words, or both text and words</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Click Reverse</h3>
                    <p className="text-sm text-muted-foreground">Instantly see your reversed text appear in the output field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy your reversed text with one click for use anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Text Reverser Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Text Reverser</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Creating Hidden Messages",
                    desc: "People use it to create messages that need to be read backwards or decoded"
                  },
                  {
                    title: "Social Media Fun",
                    desc: "Create interesting text effects for social media posts and comments"
                  },
                  {
                    title: "Testing Code",
                    desc: "Developers test string manipulation functions and palindrome detection"
                  },
                  {
                    title: "Creative Writing",
                    desc: "Writers experiment with backwards text for creative projects and puzzles"
                  },
                  {
                    title: "Educational Purposes",
                    desc: "Teachers use it for language learning and understanding text structure"
                  },
                  {
                    title: "Practical Applications",
                    desc: "Useful for data processing, text analysis, and formatting tasks"
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
                  <p className="text-xs text-muted-foreground">Use our text reverser online tool directly in your browser without downloading anything</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">No Login Required</h3>
                  <p className="text-xs text-muted-foreground">Access our text reverser tool instantly without creating an account or signing up</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Free</h3>
                  <p className="text-xs text-muted-foreground">Use our online text reverser completely free with no hidden charges or limitations</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a text reverser?</h3>
                  <p className="text-sm text-muted-foreground">A text reverser is an online tool that flips text backwards. Our text reverser tool can reverse text character by character, reverse the order of words, or do both - giving you complete control over how your text is transformed.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the text reverser online?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text in the input field, choose your reversal mode (reverse text, reverse words, or reverse both), and click "Reverse Text". Your flipped text will appear instantly and you can copy it with one click.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What's the difference between reversing text and reversing words?</h3>
                  <p className="text-sm text-muted-foreground">Reversing text flips each character backwards (e.g., "hello" becomes "olleh"). Reversing words keeps each word intact but changes their order (e.g., "hello world" becomes "world hello"). Reverse both does both transformations simultaneously.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is this text reverser tool free?</h3>
                  <p className="text-sm text-muted-foreground">Yes, our text reverser online tool is completely free to use. There are no hidden charges, no registration required, and no limitations on how many times you can use it.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I reverse special characters and emojis?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our text reverser handles all characters including special characters, numbers, symbols, and emojis. They will be reversed along with the rest of your text.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Does this tool support multiple languages?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely! Our online text reverser supports all languages and character sets. Whether you're working with English, Spanish, Arabic, Chinese, or any other language, it will work perfectly.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our text reverser online tool works directly in your web browser. Simply visit the page, enter your text, and get your reversed text instantly without downloading any software.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Can I use this on mobile devices?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our text reverser tool is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers. Use it anywhere with an internet connection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Tools */}
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
              </div>
            </div>

            {/* SEO Content */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">About Text Reverser</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our text reverser tool is the perfect online text reverser for anyone who needs to flip text backwards. Whether you're creating hidden messages, testing code, or just having fun with text, this text reversal tool makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our text reverser online to instantly reverse text, words, or both. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This free text reverser tool requires no registration and provides instant results. You can use this tool without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our online text reverser today and see how easy text reversal can be! Perfect for developers, writers, social media users, and anyone who needs to flip text quickly and efficiently.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creating hidden or secret messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Social media text effects and memes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Testing palindrome detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creative writing and puzzles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Data processing and formatting</span>
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
                  <span className="text-muted-foreground">Reversal modes:</span>
                  <span className="font-medium">3 types</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Character support:</span>
                  <span className="font-medium">All Unicode</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language support:</span>
                  <span className="font-medium">All languages</span>
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
