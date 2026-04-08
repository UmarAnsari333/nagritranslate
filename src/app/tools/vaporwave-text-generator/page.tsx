import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { VaporwaveTextGeneratorTool } from '@/components/tools/vaporwave-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vaporwave Text Generator - 13+ Styles Free Online | Aesthetic & Full-Width',
  description: 'Free online vaporwave text generator with 13+ unique styles including full-width, aesthetic small, bold, italic, script, fraktur, monospace, double struck, sans, circled, squared, and emoji-surrounded text. Perfect for social media, gaming, and aesthetic content.',
  keywords: ['vaporwave text generator', 'aesthetic text', 'full width text', 'vaporwave font', 'aesthetic font generator', 'retro text', '80s text', '90s text', 'vaporwave aesthetic', 'aesthetic text converter', 'vaporwave style'],
  openGraph: {
    title: 'Vaporwave Text Generator - 13+ Unique Styles Free Online',
    description: 'Create stunning vaporwave and aesthetic text with 13+ unique styles including full-width, aesthetic small, bold, italic, script, and more.',
    type: 'website',
  },
}

export default function VaporwaveTextGeneratorPage() {
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
            Vaporwave Text Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online vaporwave text generator with 13+ unique styles including full-width, aesthetic small, bold, italic, script, fraktur, monospace, double struck, sans, circled, squared, and emoji-surrounded text. Perfect for social media, gaming, and aesthetic content.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <VaporwaveTextGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our vaporwave text generator transforms normal text into 13+ unique vaporwave and aesthetic variations. Simply enter your text and instantly get multiple styles including full-width characters (the classic vaporwave look), aesthetic small text, bold, italic, script, fraktur (gothic), monospace, double struck, sans-serif, circled, squared, and fun emoji-surrounded styles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each style is generated instantly and can be copied with a single click. Perfect for creating retro 80s and 90s aesthetic content, social media posts, gaming usernames, and any content that needs that nostalgic vaporwave vibe.
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
                    <p className="text-sm text-muted-foreground">All 13+ styles are generated automatically</p>
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

            {/* Why People Use Vaporwave Text Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Vaporwave Text</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Aesthetic Social Media",
                    desc: "Create retro aesthetic posts"
                  },
                  {
                    title: "Vaporwave Aesthetics",
                    desc: "Embrace the 80s/90s nostalgia"
                  },
                  {
                    title: "Gaming Usernames",
                    desc: "Unique vaporwave handles"
                  },
                  {
                    title: "Discord Servers",
                    desc: "Stand out with aesthetic text"
                  },
                  {
                    title: "Creative Projects",
                    desc: "Retro digital art effects"
                  },
                  {
                    title: "Brand Identity",
                    desc: "Nostalgic branding style"
                  },
                  {
                    title: "Content Creation",
                    desc: "Eye-catching thumbnails"
                  },
                  {
                    title: "Personal Style",
                    desc: "Express retro aesthetic taste"
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
                  <h3 className="font-semibold mb-2">13+ Unique Styles</h3>
                  <p className="text-xs text-muted-foreground">Full-width, aesthetic, emoji and more</p>
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
                  <h3 className="font-semibold mb-2">What is vaporwave text?</h3>
                  <p className="text-sm text-muted-foreground">Vaporwave text is a stylistic choice that uses full-width Unicode characters to create text that appears wider and more spacious. It's part of the vaporwave aesthetic, a visual art style that emerged in the early 2010s, drawing inspiration from 1980s and 1990s consumer culture and technology.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the vaporwave text generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text into the input field and all 13+ styles will be generated automatically. Click the copy button on any style to use it immediately. No need to click generate - it's instant!</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What styles are available?</h3>
                  <p className="text-sm text-muted-foreground">Our vaporwave text generator includes: Full Width, Aesthetic Small, Aesthetic Bold, Aesthetic Italic, Aesthetic Script, Aesthetic Bold Script, Aesthetic Fraktur, Aesthetic Monospace, Aesthetic Double Struck, Aesthetic Sans, Aesthetic Circled, Aesthetic Squared, Vaporwave Emoji, Vaporwave Stars, and Vaporwave Hearts.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use vaporwave text on social media?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Vaporwave text works on most social media platforms including Twitter, Instagram, TikTok, Discord, Reddit, and more. It's perfect for creating aesthetic posts and embracing the retro vaporwave vibe.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the vaporwave aesthetic?</h3>
                  <p className="text-sm text-muted-foreground">Vaporwave is an aesthetic and microgenre of electronic music that emerged in the early 2010s. It's characterized by a nostalgic fascination with 1980s and 1990s consumer culture, technology, and pop culture. Visual elements often include neon colors, Greek statues, palm trees, and retro computer graphics.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our vaporwave text generator is completely free with no limitations. No registration or installation required - just visit the page and start creating vaporwave text instantly.</p>
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
                  href="/tools/tiny-text-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Tiny Text</p>
                    <p className="text-xs text-muted-foreground">Superscript, subscript and more</p>
                  </div>
                </Link>
                <Link
                  href="/tools/cursive-text-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Cursive Text</p>
                    <p className="text-xs text-muted-foreground">Beautiful handwriting styles</p>
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
              <h3 className="text-lg font-bold mb-4">About Vaporwave Text</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our vaporwave text generator creates 13+ unique text styles including full-width characters (the classic vaporwave look), aesthetic small text, bold, italic, script, fraktur, monospace, double struck, sans-serif, circled, squared, and fun emoji-surrounded styles.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Simply enter your text and instantly get multiple styles. Each style can be copied with one click. No registration needed - just type and go!
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start creating vaporwave aesthetic text today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Aesthetic social media posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vaporwave aesthetic content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Retro 80s/90s themed projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gaming usernames and handles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Discord server messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Retro digital art and design</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available styles:</span>
                  <span className="font-medium">13+ unique styles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Popular styles:</span>
                  <span className="font-medium">Full Width, Aesthetic Small</span>
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
