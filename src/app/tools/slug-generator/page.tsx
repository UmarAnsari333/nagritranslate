import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { SlugGeneratorTool } from '@/components/tools/slug-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Slug Generator - Create URL Slugs Online | Text to URL Slug',
  description: 'Free online slug generator tool. Convert text to URL-friendly slugs, create clean URLs, and generate web slugs instantly. Perfect for SEO and web development.',
  keywords: ['slug generator', 'url slug generator', 'text to slug', 'create url slug', 'url friendly text', 'slug maker', 'web slug generator', 'url slug maker', 'clean url generator', 'seo slug generator'],
  openGraph: {
    title: 'Slug Generator - Free Online URL Slug Maker',
    description: 'Convert text to URL-friendly slugs instantly with our free slug generator tool. Perfect for SEO and clean URLs.',
    type: 'website',
  },
}

export default function SlugGeneratorPage() {
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
            Slug Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online slug generator tool. Convert text to URL-friendly slugs, create clean URLs, and generate web slugs instantly. Perfect for SEO and web development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <SlugGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our slug generator is a free online tool that converts any text into clean, URL-friendly slugs. Whether you're creating web pages, blog posts, or URLs for any purpose, this slug maker helps you generate readable, SEO-friendly URLs from any text input.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text or title, choose your preferred separator (hyphen, underscore, dot, or custom), and get an instant URL-ready slug. Perfect for web developers, content creators, SEO professionals, and anyone who needs clean, readable URLs.
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
                    <p className="text-sm text-muted-foreground">Type or paste the text, title, or sentence you want to convert to a slug</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Settings</h3>
                    <p className="text-sm text-muted-foreground">Select separator, case preservation, numbers, and other options</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Generate Slug</h3>
                    <p className="text-sm text-muted-foreground">Click generate to instantly see your clean URL-friendly slug</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy your generated slug with one click and use it in your URLs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Slug Generator Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Slug Generator</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "SEO Optimization",
                    desc: "Create clean, keyword-rich URLs that search engines love and users can read"
                  },
                  {
                    title: "Web Development",
                    desc: "Generate URL slugs for websites, blogs, and web applications"
                  },
                  {
                    title: "Content Management",
                    desc: "Create readable URLs for blog posts, articles, and content pages"
                  },
                  {
                    title: "URL Shortening",
                    desc: "Convert long titles into short, manageable URL segments"
                  },
                  {
                    title: "E-commerce Sites",
                    desc: "Generate product slugs for online stores and product pages"
                  },
                  {
                    title: "Social Media",
                    desc: "Create hashtag-friendly text and social media post URLs"
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
                  <h3 className="font-semibold mb-2">Custom Separators</h3>
                  <p className="text-xs text-muted-foreground">Choose hyphen, underscore, dot, or custom separators</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">SEO Friendly</h3>
                  <p className="text-xs text-muted-foreground">Generate URLs that search engines prefer and index well</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Results</h3>
                  <p className="text-xs text-muted-foreground">Get your URL slug immediately without waiting or delays</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a URL slug?</h3>
                  <p className="text-sm text-muted-foreground">A URL slug is the part of a URL that identifies a specific page in a human-readable format. For example, in "website.com/blog/how-to-cook-pasta", "how-to-cook-pasta" is the slug. Our slug generator converts titles and text into these clean, URL-friendly segments.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the slug generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text or title in the input field, choose your preferred separator (hyphen, underscore, or dot), select any options like case preservation or stop word removal, and click "Generate Slug". Your URL-ready slug will appear instantly.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Why are slugs important for SEO?</h3>
                  <p className="text-sm text-muted-foreground">URL slugs are crucial for SEO because they provide search engines with descriptive, keyword-rich information about your page content. Clean slugs also improve user experience by making URLs readable and shareable. Our slug generator helps create optimized URLs that search engines love.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What separator should I use for my URL slug?</h3>
                  <p className="text-sm text-muted-foreground">Hyphens (-) are generally recommended for URL slugs as they're the most readable and search engine friendly. Underscores (_) are sometimes used but less common. Dots (.) are rarely used in URLs. Our slug generator lets you choose any separator that works best for your needs.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I preserve numbers in my URL slug?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our slug generator has an option to preserve numbers in your URL slug. This is perfect for including dates, version numbers, or any numeric information in your URLs while keeping them clean and readable.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What are stop words and why remove them?</h3>
                  <p className="text-sm text-muted-foreground">Stop words are common words like "a", "an", "the", "and" that don't add much meaning to URLs. Removing them from slugs makes URLs shorter and more focused on important keywords. Our slug generator has an option to automatically remove these stop words.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use this tool for programming slugs?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely! Our slug generator is perfect for creating programming-friendly identifiers, variable names, and code slugs. You can choose underscores as separators and preserve case for camelCase or PascalCase conventions, making it ideal for developers.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our slug generator tool works directly in your web browser. Simply visit the page, enter your text, and get instant URL-friendly slugs without downloading any software.</p>
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
                    <p className="text-xs text-muted-foreground">Convert text to uppercase, lowercase, title case</p>
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
              <h3 className="text-lg font-bold mb-4">About Slug Generator</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our slug generator is the perfect URL slug generator for anyone who needs to create clean, readable URLs. Whether you're a web developer, content creator, or SEO professional, this text to slug tool makes URL creation simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our free slug maker to instantly convert any text into URL-friendly format. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This SEO slug generator requires no registration and provides instant results. You can create URL slugs without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our web slug generator today and see how easy creating clean URLs can be! Perfect for SEO optimization, web development, and anyone who needs URL-friendly text conversion.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creating SEO-optimized blog URLs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Generating product slugs for e-commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creating programming variable names</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Generating hashtag-friendly text</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Creating clean website URLs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Converting titles to URL format</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Separator options:</span>
                  <span className="font-medium">Hyphen, underscore, dot, custom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Case preservation:</span>
                  <span className="font-medium">Optional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Number preservation:</span>
                  <span className="font-medium">Optional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stop word removal:</span>
                  <span className="font-medium">Optional</span>
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
