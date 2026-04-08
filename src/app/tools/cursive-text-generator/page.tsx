import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { CursiveTextGeneratorTool } from '@/components/tools/cursive-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursive Text Generator - Copy, Paste and Use Anywhere | Free Online Tool',
  description: 'Free online cursive text generator. Convert normal text to beautiful cursive, script, and handwriting styles. Copy and paste anywhere - social media, documents, and more.',
  keywords: ['cursive text generator', 'script text', 'handwriting font', 'fancy text generator', 'calligraphy text', 'beautiful text', 'text to cursive', 'script font converter'],
  openGraph: {
    title: 'Cursive Text Generator - Copy, Paste and Use Anywhere',
    description: 'Convert normal text to beautiful cursive, script, and handwriting styles. Perfect for social media and creative projects.',
    type: 'website',
  },
}

export default function CursiveTextGeneratorPage() {
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
            Cursive Text Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online cursive text generator. Convert normal text to beautiful cursive, script, and handwriting styles. Copy and paste anywhere - social media, documents, and more.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <CursiveTextGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our cursive text generator transforms normal text into beautiful script and handwriting styles. Simply enter your text and instantly get multiple cursive variations including classic script, bold script, fraktur, mathematical script, italic, and many more elegant styles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each style is generated instantly and can be copied with a single click. Perfect for creating elegant social media posts, invitations, artistic projects, signatures, and any content that needs beautiful handwritten-style text.
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
                    <p className="text-sm text-muted-foreground">All cursive styles are generated automatically</p>
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

            {/* Why People Use Cursive Text Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Cursive Text</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Social Media",
                    desc: "Make posts look elegant on Instagram, Facebook, Twitter"
                  },
                  {
                    title: "Weddings & Events",
                    desc: "Create beautiful invitations and announcements"
                  },
                  {
                    title: "Digital Signatures",
                    desc: "Add personal touch to emails and documents"
                  },
                  {
                    title: "Creative Projects",
                    desc: "Enhance designs with elegant text styles"
                  },
                  {
                    title: "Gaming Usernames",
                    desc: "Create unique gaming handles and profiles"
                  },
                  {
                    title: "Art & Design",
                    desc: "Add aesthetic handwriting to digital art"
                  },
                  {
                    title: "Personal Branding",
                    desc: "Stand out with unique script styles"
                  },
                  {
                    title: "Content Creation",
                    desc: "Elegant text for blogs, videos, and more"
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
                  <h3 className="font-semibold mb-2">10+ Styles</h3>
                  <p className="text-xs text-muted-foreground">Multiple cursive and script variations</p>
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
                  <h3 className="font-semibold mb-2">What is cursive text?</h3>
                  <p className="text-sm text-muted-foreground">Cursive text is flowing, connected handwriting-style text that appears elegant and artistic. It's commonly used for invitations, signatures, and adding a personal touch to digital content.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the cursive text generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text into the input field and all 10+ cursive styles will be generated automatically. Click the copy button on any style to use it immediately.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What styles are available?</h3>
                  <p className="text-sm text-muted-foreground">Our cursive text generator includes: Script, Bold Script, Fraktur, Bold Fraktur, Mathematical Script, Italic, Handwriting, Calligraphy, Fancy Script, and Elegant Script styles.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use cursive text on social media?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Cursive text works on most social media platforms including Instagram, Facebook, Twitter, TikTok, and more. It's perfect for creating elegant posts and captions.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is fraktur text?</h3>
                  <p className="text-sm text-muted-foreground">Fraktur is a blackletter Gothic script style that dates back to medieval times. It's characterized by sharp angles and ornate designs, often used for formal or traditional aesthetics.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free to use?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our cursive text generator is completely free with no limitations. No registration or installation required - just visit the page and start creating beautiful cursive text instantly.</p>
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
                  href="/tools/glitch-text-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Glitch Text Generator</p>
                    <p className="text-xs text-muted-foreground">25+ glitch and cursed text styles</p>
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
              <h3 className="text-lg font-bold mb-4">About Cursive Text Generator</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our cursive text generator creates beautiful script and handwriting styles for your text. Perfect for social media posts, invitations, signatures, and creative projects.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Simply enter your text and instantly get multiple elegant styles including classic script, bold script, fraktur, mathematical script, italic, handwriting, calligraphy, and more.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works perfectly on all devices - desktop, tablet, and mobile. Start creating beautiful cursive text today!
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Social media posts and captions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Wedding invitations and announcements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Digital signatures</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Art and design projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gaming usernames</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personal branding</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available styles:</span>
                  <span className="font-medium">10+ unique styles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Popular styles:</span>
                  <span className="font-medium">Script, Fraktur</span>
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
