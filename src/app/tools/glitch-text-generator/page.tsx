import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { GlitchTextGeneratorTool } from '@/components/tools/glitch-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glitch Text Generator - 25+ Styles Free Online | Zalgo, Cursed & More',
  description: 'Free online glitch text generator with 25+ unique styles including Zalgo, Cursed, Upside Down, Bubbles, Squares, Script, Medieval, and more. Perfect for social media, gaming, and creative projects.',
  keywords: ['glitch text generator', 'zalgo text', 'cursed text', 'upside down text', 'bubble text', 'square text', 'creepy text', 'stylish text', 'text effects', 'cool text generator', 'script text', 'medieval text'],
  openGraph: {
    title: 'Glitch Text Generator - 25+ Unique Styles Free Online',
    description: 'Create stunning glitched text with 25+ unique styles including Zalgo, Cursed, Upside Down, Bubbles, Squares, Script, Medieval, and more.',
    type: 'website',
  },
}

export default function GlitchTextGeneratorPage() {
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
            Glitch Text Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online glitch text generator with 25+ unique styles including Zalgo, Cursed, Upside Down, Bubbles, Squares, Script, Medieval, and more. Perfect for social media, gaming, and creative projects.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <GlitchTextGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our glitch text generator transforms normal text into 25+ unique glitched and stylized variations. Simply enter your text and instantly get multiple styles including Zalgo (creepy zalgo text), Cursed, Upside Down, Bubbles, Squares, Wide, Script, Medieval, Monospace, Bold, Italic, Fraktur, and many more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each style is generated instantly and can be copied with a single click. Perfect for creating eye-catching social media posts, gaming usernames, Discord messages, creative projects, and any content that needs to stand out with unique text styling.
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
                    <h3 className="font-semibold mb-1">Instant Generation</h3>
                    <p className="text-sm text-muted-foreground">All 12+ styles are generated automatically</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy Any Style</h3>
                    <p className="text-sm text-muted-foreground">Click copy on any style to use it immediately</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Glitch Text Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use Glitch Text</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Social Media",
                    desc: "Make posts stand out on Twitter, Instagram, TikTok"
                  },
                  {
                    title: "Gaming Content",
                    desc: "Create unique gaming handles and usernames"
                  },
                  {
                    title: "Discord Servers",
                    desc: "Stand out in chat with unique text styles"
                  },
                  {
                    title: "Creative Projects",
                    desc: "Add aesthetic effects to digital art"
                  },
                  {
                    title: "Memes",
                    desc: "Create glitched text for meme content"
                  },
                  {
                    title: "Cyberpunk Style",
                    desc: "Achieve the popular cyberpunk aesthetic"
                  },
                  {
                    title: "Zalgo Text",
                    desc: "Create creepy zalgo text for horror content"
                  },
                  {
                    title: "Brand Identity",
                    desc: "Unique text styling for personal branding"
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
                  <h3 className="font-semibold mb-2">25+ Unique Styles</h3>
                  <p className="text-xs text-muted-foreground">Zalgo, Script, Medieval, Bubbles and more</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Generation</h3>
                  <p className="text-xs text-muted-foreground">All styles generated automatically</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">One-Click Copy</h3>
                  <p className="text-xs text-muted-foreground">Copy any style instantly</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is glitch text?</h3>
                  <p className="text-sm text-muted-foreground">Glitch text is stylized text that appears corrupted or distorted with special characters, combining diacritical marks, or enclosed characters. It creates a digital glitch effect popular in cyberpunk aesthetics, horror content, and creative digital projects.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the glitch text generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text into the input field and all 12+ styles will be generated automatically. Click the copy button on any style to use it immediately. No need to click generate - it's instant!</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What styles are available?</h3>
                  <p className="text-sm text-muted-foreground">Our glitch text generator includes: Zalgo, Behind Bars, Double Strikethrough, Creepy, Upside Down, Bubbles, Squares, Wide, Cursed, Bricks, Electric, Shuriken, Circled, Small Caps, Monospace, Bold, Italic, Script, Bold Script, Fraktur, Double Struck, Parenthesized, Dotted, Tilde, Small Text, Medieval, Full Block, Dashed, and Crossed styles.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use glitch text on social media?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Glitch text works on most social media platforms including Twitter, Instagram, TikTok, Discord, Reddit, and more. It's perfect for making your posts stand out with unique styling.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is Zalgo text?</h3>
                  <p className="text-sm text-muted-foreground">Zalgo text is a style that uses combining diacritical marks (accents and other symbols) placed above, below, and through characters to create a creepy, corrupted appearance. It's often used in horror content and memes.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our glitch text generator is completely free with no limitations. No registration or installation required - just visit the page and start creating glitched text instantly.</p>
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
              <h3 className="text-lg font-bold mb-4">About Glitch Text Generator</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our glitch text generator creates 25+ unique text styles including Zalgo text, Cursed text, Upside Down text, Bubbles, Squares, Script, Medieval, Monospace, Bold, Italic, Fraktur, and many more. Perfect for social media posts, gaming usernames, Discord messages, and creative projects.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Simply enter your text and instantly get multiple styles. Each style can be copied with one click. No registration needed - just type and go!
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start creating unique glitched text today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Social media posts and bios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gaming usernames and handles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Digital art and design projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cyberpunk themed content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Meme creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discord server messages</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available styles:</span>
                  <span className="font-medium">25+ unique styles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Popular styles:</span>
                  <span className="font-medium">Zalgo, Script, Medieval</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Instant generation:</span>
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
