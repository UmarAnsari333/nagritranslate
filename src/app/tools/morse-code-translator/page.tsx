import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { MorseCodeTranslatorTool } from '@/components/tools/morse-code-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Morse Code Translator - Free Online | Text to Morse with Audio',
  description: 'Free online Morse code translator with audio playback. Convert text to Morse code and vice versa. Listen to Morse code with adjustable speed and frequency. Perfect for learning and communication.',
  keywords: ['morse code translator', 'text to morse', 'morse to text', 'morse code audio', 'morse code player', 'morse code generator', 'learn morse code', 'morse code converter'],
  openGraph: {
    title: 'Morse Code Translator - Free Online with Audio',
    description: 'Convert text to Morse code and vice versa with audio playback. Listen to your Morse code with customizable speed and frequency.',
    type: 'website',
  },
}

export default function MorseCodeTranslatorPage() {
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
            Morse Code Translator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online Morse code translator with audio playback. Convert text to Morse code and vice versa. Listen to Morse code with adjustable speed and frequency. Perfect for learning and communication.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <MorseCodeTranslatorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our Morse code translator instantly converts text to Morse code and Morse code back to text. Simply type your message and get the Morse code representation instantly, or enter Morse code to decode it back to readable text. The built-in audio player lets you listen to Morse code with customizable speed and frequency, making it perfect for learning and practice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Supports all letters, numbers, and common punctuation marks. The audio playback feature uses the Web Audio API to generate authentic Morse code sounds that you can adjust to your preference.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Text or Morse Code</h3>
                    <p className="text-sm text-muted-foreground">Switch between Text to Morse or Morse to Text mode</p>
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
                    <h3 className="font-semibold mb-1">Play Audio</h3>
                    <p className="text-sm text-muted-foreground">Click play to hear the Morse code with adjustable settings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use This Tool Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use This Tool</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Learning Morse Code",
                    desc: "Practice and learn Morse code effectively"
                  },
                  {
                    title: "Emergency Communication",
                    desc: "Prepare for emergency signaling"
                  },
                  {
                    title: "Ham Radio",
                    desc: "Amateur radio communication practice"
                  },
                  {
                    title: "Educational Projects",
                    desc: "Teach students about communication history"
                  },
                  {
                    title: "Secret Messages",
                    desc: "Create encoded messages for fun"
                  },
                  {
                    title: "Historical Interest",
                    desc: "Explore traditional communication methods"
                  },
                  {
                    title: "Accessibility",
                    desc: "Alternative communication method"
                  },
                  {
                    title: "Hobby & Fun",
                    desc: "Enjoy learning and using Morse code"
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
                  <h3 className="font-semibold mb-2">Two-Way Conversion</h3>
                  <p className="text-xs text-muted-foreground">Text to Morse and Morse to text</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Audio Playback</h3>
                  <p className="text-xs text-muted-foreground">Listen to Morse code with adjustable settings</p>
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
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is Morse code?</h3>
                  <p className="text-sm text-muted-foreground">Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes. It was developed in the 1830s and 1840s by Samuel Morse and Alfred Vail for use with their electrical telegraph.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the Morse code translator?</h3>
                  <p className="text-sm text-muted-foreground">Simply switch between "Text to Morse" or "Morse to Text" mode, enter your input, and get instant conversion. You can also click the play button to hear the Morse code audio. Use the sliders to adjust speed and frequency.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I listen to the Morse code?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our tool includes an audio player that generates authentic Morse code sounds. You can adjust the speed (dot duration) and frequency (pitch) to customize the playback to your preference.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What characters are supported?</h3>
                  <p className="text-sm text-muted-foreground">Our translator supports all letters (A-Z), numbers (0-9), and common punctuation marks including period, comma, question mark, exclamation mark, slash, parentheses, ampersand, colon, semicolon, equals, plus, minus, underscore, quote, dollar sign, and at sign.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the correct timing for Morse code?</h3>
                  <p className="text-sm text-muted-foreground">Standard Morse code timing: a dot is one unit, a dash is three units, the space between parts of the same letter is one unit, between letters is three units, and between words is seven units. Our tool automatically applies these ratios based on your chosen speed.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our Morse code translator is completely free with no limitations. No registration or installation required - just visit the page and start translating Morse code instantly.</p>
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
                  href="/tools/numbers-to-words"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Numbers To Words</p>
                    <p className="text-xs text-muted-foreground">Convert numbers to word format</p>
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
              <h3 className="text-lg font-bold mb-4">About Morse Code</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our Morse code translator instantly converts text to Morse code and vice versa with audio playback. Perfect for learning, practice, and communication. Supports all letters, numbers, and common punctuation.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The built-in audio player lets you listen to authentic Morse code with adjustable speed and frequency, making it an excellent tool for learning and practice.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start translating Morse code today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Learning and practicing Morse code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Emergency communication preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ham radio and amateur radio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Educational projects and teaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creating secret messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Historical communication study</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conversion modes:</span>
                  <span className="font-medium">Text to Morse, Morse to Text</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Audio playback:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Speed control:</span>
                  <span className="font-medium">20-200ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency range:</span>
                  <span className="font-medium">200-1000Hz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Supported chars:</span>
                  <span className="font-medium">A-Z, 0-9, punctuation</span>
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
