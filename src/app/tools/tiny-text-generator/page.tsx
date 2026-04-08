import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { TinyTextGeneratorTool } from '@/components/tools/tiny-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiny Text Generator - 16+ Styles Free Online | Superscript, Subscript & More',
  description: 'Free online tiny text generator with 16+ unique styles including superscript, subscript, small caps, bubbles, squares, inverted, monospace, bold, italic, fraktur, script, double struck, and more. Perfect for social media, gaming, and creative projects.',
  keywords: ['tiny text generator', 'small text', 'superscript generator', 'subscript generator', 'small caps converter', 'tiny letters', 'mini text', 'text styles', 'cool text generator', 'stylish text', 'tiny font'],
  openGraph: {
    title: 'Tiny Text Generator - 16+ Unique Styles Free Online',
    description: 'Create stunning tiny text with 16+ unique styles including superscript, subscript, small caps, bubbles, squares, inverted, monospace, and more.',
    type: 'website',
  },
}

export default function TinyTextGeneratorPage() {
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
            Tiny Text Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online tiny text generator with 16+ unique styles including superscript, subscript, small caps, bubbles, squares, inverted, monospace, bold, italic, fraktur, script, double struck, and more. Perfect for social media, gaming, and creative projects.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <TinyTextGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our tiny text generator transforms normal text into 16+ unique tiny and small text variations. Simply enter your text and instantly get multiple styles including superscript (raised text), subscript (lowered text), small caps, bubbles, squares, inverted, monospace, bold, italic, fraktur (gothic), script, double struck, rounded, full block, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each style is generated instantly and can be copied with a single click. Perfect for creating unique social media posts, gaming usernames, creative projects, and any content that needs to stand out with tiny text styling.
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
                    <p className="text-sm text-muted-foreground">Type or paste your text into the input field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Generation</h3>
                    <p className="text-sm text-muted-foreground">All 16+ styles are generated automatically</p>
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

            {/* Why People Use Tiny Text Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Tiny Text</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Social Media",
                    desc: "Make posts stand out with unique text"
                  },
                  {
                    title: "Gaming Content",
                    desc: "Create unique gaming handles"
                  },
                  {
                    title: "Discord Servers",
                    desc: "Stand out in chat with tiny text"
                  },
                  {
                    title: "Creative Projects",
                    desc: "Add aesthetic effects to design"
                  },
                  {
                    title: "Math & Science",
                    desc: "Use superscript/subscript for formulas"
                  },
                  {
                    title: "Brand Identity",
                    desc: "Unique text for personal branding"
                  },
                  {
                    title: "Aesthetic Posts",
                    desc: "Create visually appealing content"
                  },
                  {
                    title: "Hidden Messages",
                    desc: "Subtle text for special effects"
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
                  <h3 className="font-semibold mb-2">16+ Unique Styles</h3>
                  <p className="text-xs text-muted-foreground">Superscript, subscript, small caps and more</p>
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
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is tiny text?</h3>
                  <p className="text-sm text-muted-foreground">Tiny text is stylized text that appears smaller than regular text using special Unicode characters. It includes styles like superscript (raised text), subscript (lowered text), small caps, and various other miniature text variations.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the tiny text generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text into the input field and all 16+ styles will be generated automatically. Click the copy button on any style to use it immediately. No need to click generate - it's instant!</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What styles are available?</h3>
                  <p className="text-sm text-muted-foreground">Our tiny text generator includes: Superscript, Subscript, Small Caps, Tiny Text, Micro Text, Bubbles Small, Squares Small, Inverted, Monospace Small, Bold Small, Italic Small, Fraktur Small, Script Small, Double Struck Small, Rounded Small, and Full Block Small.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use tiny text on social media?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Tiny text works on most social media platforms including Twitter, Instagram, TikTok, Discord, Reddit, and more. It's perfect for making your posts stand out with unique styling.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What's the difference between superscript and subscript?</h3>
                  <p className="text-sm text-muted-foreground">Superscript text appears above the normal line (like exponents in math: x²), while subscript text appears below the normal line (like chemical formulas: H₂O). Both are useful for different purposes.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our tiny text generator is completely free with no limitations. No registration or installation required - just visit the page and start creating tiny text instantly.</p>
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
                  href="/tools/fancy-text-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Fancy Text</p>
                    <p className="text-xs text-muted-foreground">Bold, script, gothic and more</p>
                  </div>
                </Link>
                <Link
                  href="/tools/glitch-text-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Glitch Text</p>
                    <p className="text-xs text-muted-foreground">Zalgo, cursed and glitched styles</p>
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
              <h3 className="text-lg font-bold mb-4">About Tiny Text Generator</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our tiny text generator creates 16+ unique text styles including superscript, subscript, small caps, bubbles, squares, inverted, monospace, bold, italic, fraktur, script, double struck, rounded, and full block. Perfect for social media posts, gaming usernames, and creative projects.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Simply enter your text and instantly get multiple styles. Each style can be copied with one click. No registration needed - just type and go!
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start creating unique tiny text today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
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
                  <span>Math and science notation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Digital art and design projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Aesthetic content creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discord server messages</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available styles:</span>
                  <span className="font-medium">16+ unique styles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Popular styles:</span>
                  <span className="font-medium">Superscript, Subscript, Small Caps</span>
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
