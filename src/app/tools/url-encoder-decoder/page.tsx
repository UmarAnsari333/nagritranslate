import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { UrlEncoderDecoderTool } from '@/components/tools/url-encoder-decoder-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'URL Encoder/Decoder - Encode & Decode URLs Online',
  description: 'Free online URL encoder and decoder tool. Encode URLs, decode URLs, and handle percent-encoded text instantly. Perfect for web development and API work.',
  keywords: ['url encoder', 'url decoder', 'percent encoding', 'url encode decode', 'encode url online', 'decode url online', 'percent encoded url', 'url encoding', 'url decoding', 'url percent encoding'],
  openGraph: {
    title: 'URL Encoder/Decoder - Free Online URL Encoding Tool',
    description: 'Encode and decode URLs instantly with our free online URL encoder/decoder tool. Perfect for web development and API work.',
    type: 'website',
  },
}

export default function UrlEncoderDecoderPage() {
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
            URL Encoder/Decoder
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online URL encoder and decoder tool. Encode URLs, decode URLs, and handle percent-encoded text instantly. Perfect for web development and API work.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <UrlEncoderDecoderTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our URL encoder/decoder is a free online tool that converts text and URLs between their plain format and percent-encoded format. URL encoding (also called percent encoding) replaces unsafe ASCII characters with a % followed by two hexadecimal digits. Our tool makes it simple to encode and decode URLs for web development, API calls, and data transmission.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text or URL, choose between encode or decode mode, and get instant results. Perfect for developers working with query parameters, form submissions, handling special characters, and any situation requiring URL encoding or decoding.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Your Text/URL</h3>
                    <p className="text-sm text-muted-foreground">Paste or type the text or URL you want to encode or decode</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Mode</h3>
                    <p className="text-sm text-muted-foreground">Select encode to convert text to percent-encoded, or decode to reverse the process</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Click Encode/Decode</h3>
                    <p className="text-sm text-muted-foreground">Instantly see your encoded or decoded URL appear in the output field</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy your encoded or decoded URL with one click for immediate use</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use URL Encoder/Decoder Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use URL Encoder/Decoder</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Web Development",
                    desc: "Encode query parameters and form data for safe URL transmission"
                  },
                  {
                    title: "API Integration",
                    desc: "Prepare URLs and parameters for API calls and web services"
                  },
                  {
                    title: "Special Characters",
                    desc: "Handle spaces, emojis, and special characters in URLs"
                  },
                  {
                    title: "Data Transmission",
                    desc: "Ensure safe transmission of text over HTTP and HTTPS"
                  },
                  {
                    title: "Form Submissions",
                    desc: "Encode form data for proper URL parameter formatting"
                  },
                  {
                    title: "URL Analysis",
                    desc: "Decode encoded URLs to understand their contents and structure"
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
                  <h3 className="font-semibold mb-2">Dual Mode</h3>
                  <p className="text-xs text-muted-foreground">Both URL encode and decode functionality in one tool</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">RFC Compliant</h3>
                  <p className="text-xs text-muted-foreground">Follows RFC 3986 URL encoding standards</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Processing</h3>
                  <p className="text-xs text-muted-foreground">Get encoded/decoded URLs immediately without delays</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is URL encoding?</h3>
                  <p className="text-sm text-muted-foreground">URL encoding (also called percent encoding) converts unsafe characters into a format that can be safely transmitted over the internet. It replaces characters like spaces, special symbols, and non-ASCII characters with a % followed by two hexadecimal digits. For example, a space becomes %20 and an exclamation mark becomes %21.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use URL encoder/decoder?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text or URL in the input field, choose between encode or decode mode, and click the encode/decode button. Your encoded or decoded URL will appear instantly in the output field, and you can copy it with one click.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Why do I need to encode URLs?</h3>
                  <p className="text-sm text-muted-foreground">URLs can only contain certain characters safely. Characters like spaces, quotes, and special symbols need to be encoded to ensure proper URL formatting, prevent errors, and safely transmit data. Our URL encoder handles this conversion automatically.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What characters need URL encoding?</h3>
                  <p className="text-sm text-muted-foreground">Characters that need encoding include spaces (%20), special symbols like ! (%21), @ (%40), # (%23), $ (%24), % (%25), and other non-alphanumeric characters. Our URL encoder automatically identifies and encodes all characters that require encoding.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I encode emojis and special characters?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our URL encoder handles all Unicode characters including emojis, accented characters, and international characters. They will be properly encoded using UTF-8 percent encoding standards.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the difference between URL encoding and Base64?</h3>
                  <p className="text-sm text-muted-foreground">URL encoding replaces individual characters with %XX format and is primarily for URLs. Base64 encodes entire strings using a different algorithm and is often used for data transmission in HTTP headers. Our URL encoder focuses on URL-safe percent encoding.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Is URL encoding reversible?</h3>
                  <p className="text-sm text-muted-foreground">Yes! URL encoding is completely reversible. Our tool includes both encode and decode modes, so you can convert text to encoded format and back again without any data loss or corruption.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our URL encoder/decoder tool works directly in your web browser. Simply visit the page, enter your URL or text, and get instant encoded or decoded results without downloading any software.</p>
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
                  href="/tools/slug-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Slug Generator</p>
                    <p className="text-xs text-muted-foreground">Create URL-friendly slugs from text</p>
                  </div>
                </Link>
                <Link
                  href="/tools/sort-deduplicate"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Sort & Deduplicate</p>
                    <p className="text-xs text-muted-foreground">Sort text and remove duplicates</p>
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
              <h3 className="text-lg font-bold mb-4">About URL Encoder/Decoder</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our URL encoder/decoder is perfect percent encoding tool for anyone who needs to encode or decode URLs. Whether you're a web developer, working with APIs, or handling form data, this URL encode decode tool makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our free URL encoder to instantly convert text to percent-encoded format, or decode URLs back to plain text. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This URL decoder requires no registration and provides instant results. You can encode and decode URLs without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our online URL encoder/decoder today and see how easy percent encoding can be! Perfect for web development, API integration, and anyone who needs URL encoding/decoding.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Encoding query parameters for web forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Preparing URLs for API calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Handling spaces and special characters in URLs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Decoding encoded URLs to read their contents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>URL debugging and troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Safe transmission of data over HTTP</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Encoding standard:</span>
                  <span className="font-medium">RFC 3986 (percent encoding)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Character support:</span>
                  <span className="font-medium">All Unicode (UTF-8)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Operation modes:</span>
                  <span className="font-medium">Encode & Decode</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Special characters:</span>
                  <span className="font-medium">Fully supported</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emoji support:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">International characters:</span>
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
