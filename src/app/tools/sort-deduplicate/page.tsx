import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { SortDeduplicateTool } from '@/components/tools/sort-deduplicate-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sort & Deduplicate - Sort Text & Remove Duplicates Online',
  description: 'Free online sort and deduplicate tool. Sort text alphabetically, by length, or numerically. Remove duplicate lines and clean lists instantly. Perfect for data organization.',
  keywords: ['sort text', 'deduplicate text', 'remove duplicate lines', 'sort lines', 'text sorter', 'list sorter', 'alphabetical sort', 'text deduplicator', 'clean list', 'sort and remove duplicates'],
  openGraph: {
    title: 'Sort & Deduplicate - Free Online Text Sorter',
    description: 'Sort text alphabetically, by length, or numerically while removing duplicates instantly with our free online tool.',
    type: 'website',
  },
}

export default function SortDeduplicatePage() {
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
            Sort & Deduplicate
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online sort and deduplicate tool. Sort text alphabetically, by length, or numerically. Remove duplicate lines and clean lists instantly. Perfect for data organization.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <SortDeduplicateTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our sort and deduplicate tool is a free online utility that helps you organize and clean text lists. Whether you need to sort lines alphabetically, by length, or numerically, this text sorter makes it simple. It also removes duplicate lines, trims whitespace, and removes empty lines to give you clean, organized results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply enter your text list (one item per line), choose your sorting preferences and filtering options, and get instant, clean results. Perfect for organizing data, cleaning spreadsheets, sorting lists, and any situation where you need sorted, deduplicated text.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Your List</h3>
                    <p className="text-sm text-muted-foreground">Paste or type your text list (one item per line)</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Options</h3>
                    <p className="text-sm text-muted-foreground">Select sort type (alphabetical, length, numeric) and filtering options</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Click Sort</h3>
                    <p className="text-sm text-muted-foreground">Instantly see your sorted and deduplicated list</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Use</h3>
                    <p className="text-sm text-muted-foreground">Copy your clean, sorted list with one click</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use Sort & Deduplicate Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why People Use Sort & Deduplicate</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Data Cleaning",
                    desc: "Clean up messy data lists and remove duplicate entries"
                  },
                  {
                    title: "List Organization",
                    desc: "Sort names, items, or any list alphabetically or by length"
                  },
                  {
                    title: "Spreadsheet Prep",
                    desc: "Prepare data for Excel, CSV imports, and database entries"
                  },
                  {
                    title: "Programming",
                    desc: "Sort arrays, clean data structures, and organize code lists"
                  },
                  {
                    title: "Content Management",
                    desc: "Organize blog posts, products, or content items"
                  },
                  {
                    title: "Research & Analysis",
                    desc: "Sort survey responses, research data, and analytical lists"
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
                  <h3 className="font-semibold mb-2">Multiple Sort Options</h3>
                  <p className="text-xs text-muted-foreground">Sort alphabetically, by length, or numerically in ascending or descending order</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Filtering</h3>
                  <p className="text-xs text-muted-foreground">Remove duplicates, empty lines, and trim whitespace automatically</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Results</h3>
                  <p className="text-xs text-muted-foreground">Get clean, sorted lists immediately without any delays</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a sort and deduplicate tool?</h3>
                  <p className="text-sm text-muted-foreground">A sort and deduplicate tool is an online utility that organizes text lists by sorting them in a specified order (alphabetically, by length, or numerically) while removing duplicate entries. Our sort text tool helps you clean lists, organize data, and prepare text for any purpose.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the sort and deduplicate tool?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your list (one item per line), choose your sorting method (alphabetical, length, or numeric), select filtering options like remove duplicates or remove empty lines, and click "Sort & Deduplicate". Your clean, sorted list will appear instantly.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What sorting options are available?</h3>
                  <p className="text-sm text-muted-foreground">Our text sorter offers multiple sorting options: alphabetical (A-Z or Z-A), by length (shortest to longest or vice versa), and numeric (ascending or descending numbers). You can choose ascending or descending order for any sorting method.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How does duplicate removal work?</h3>
                  <p className="text-sm text-muted-foreground">The duplicate removal feature automatically identifies and removes any lines that appear more than once in your list. It keeps the first occurrence of each unique item and removes subsequent duplicates, giving you a clean list with no repeated entries.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I sort numbers with this tool?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our sort and deduplicate tool includes a numeric sorting option that correctly sorts numbers (1, 2, 3, etc.) rather than treating them as text. This is perfect for sorting numeric lists, prices, or any numerical data.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What does trim whitespace do?</h3>
                  <p className="text-sm text-muted-foreground">Trim whitespace removes leading and trailing spaces from each line in your list. This ensures clean formatting and prevents sorting issues caused by hidden spaces at the beginning or end of text entries.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I sort text from multiple languages?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our sort text tool supports alphabetical sorting in multiple languages using proper locale-aware comparison. Whether you're sorting English, Spanish, French, German, or other languages, it will work correctly.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Do I need to install anything to use this tool?</h3>
                  <p className="text-sm text-muted-foreground">No installation required! Our sort and deduplicate tool works directly in your web browser. Simply visit the page, enter your list, and get instant sorted results without downloading any software.</p>
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
              <h3 className="text-lg font-bold mb-4">About Sort & Deduplicate</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our sort and deduplicate tool is the perfect text sorter for anyone who needs to organize and clean lists. Whether you're sorting names, numbers, or any data, this list sorter makes it simple.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our free sort text tool to instantly sort lines alphabetically, by length, or numerically. The tool works perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                This text deduplicator requires no registration and provides instant results. You can sort and deduplicate without installing anything - it works directly in your browser. No login required, no downloads needed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try our online sort and deduplicate tool today and see how easy list organization can be! Perfect for data cleaning, spreadsheet preparation, and anyone who needs sorted, clean lists.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sorting name lists alphabetically</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cleaning duplicate email addresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Organizing product lists</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sorting numerical data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Preparing CSV data for import</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cleaning messy spreadsheet data</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sort options:</span>
                  <span className="font-medium">3 types</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sort order:</span>
                  <span className="font-medium">Ascending/descending</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duplicate removal:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Empty line removal:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Whitespace trimming:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language support:</span>
                  <span className="font-medium">Multi-language</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Character support:</span>
                  <span className="font-medium">All Unicode</span>
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
