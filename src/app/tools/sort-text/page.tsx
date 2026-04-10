import { Metadata } from 'next'
import { ArrowUpDown } from 'lucide-react'
import { SortTextTool } from '@/components/tools/sort-text-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sort Text - Free Online Text Sorting Tool | Alphabetical, Natural, Reverse',
  description: 'Free online text sorting tool. Sort text alphabetically, naturally, by length, reverse, or shuffle. Perfect for organizing lists, names, data, and text files. Case-sensitive options.',
  keywords: ['sort text', 'text sorting tool', 'alphabetical sort', 'natural sort', 'sort lines', 'text organizer', 'list sorter', 'sort by length', 'reverse text', 'shuffle text', 'online text sorter', 'text arrangement', 'data sorting', 'sort names', 'sort words', 'text manipulation', 'sort list'],
  openGraph: {
    title: 'Sort Text - Free Online Text Sorting Tool',
    description: 'Sort text alphabetically, naturally, by character length, reverse, or shuffle. Free online tool for organizing lists and data.',
    type: 'website',
  },
}

export default function SortTextPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <ArrowUpDown className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Sort Text
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online text sorting tool. Sort text alphabetically, naturally, by character length, reverse, or shuffle. Perfect for organizing lists, names, data, and text files. Case-sensitive options available.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <SortTextTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our sort text tool is a free online utility that helps you organize and arrange text in various ways. Whether you need to sort names alphabetically, organize numerical data with natural sorting, reverse text order, or shuffle content randomly, this tool makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for organizing lists, data files, contact information, inventories, and any text that needs ordering. Simply paste your text (one item per line), choose your sorting preference, and get instantly organized results.
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
                    <p className="text-sm text-muted-foreground">Paste or type your text with one item per line</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Sort Method</h3>
                    <p className="text-sm text-muted-foreground">Select alphabetical, natural, length, reverse, or shuffle</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Apply Options</h3>
                    <p className="text-sm text-muted-foreground">Enable trim whitespace, remove empty lines, or case sensitivity</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Sorted Output</h3>
                    <p className="text-sm text-muted-foreground">Copy your sorted text instantly with one click</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sort Types Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Sorting Methods Explained</h2>
              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-4">Alphabetical Sort (A-Z / Z-A)</h3>
                  <p className="text-sm text-muted-foreground mb-4">Standard dictionary ordering. Perfect for names, words, and any alphabetical content.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">Before (Unsorted):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Zucchini
Date
Orange
Apple
Grape</pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">After (A-Z):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Apple
Date
Grape
Orange
Zucchini</pre>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-4">Natural Sort (A-Z / Z-A)</h3>
                  <p className="text-sm text-muted-foreground mb-4">Smart sorting that understands numbers. "Apple2" correctly comes before "Apple10" and "Apple10" before "Apple20".</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">Before (Basic Alphabetical):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Apple10
Apple2
Apple20
Apple5</pre>
                      <p className="text-xs text-muted-foreground mt-2 italic">❌ Wrong: "Apple10" first (alphabetical order)</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">After (Natural):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Apple2
Apple5
Apple10
Apple20</pre>
                      <p className="text-xs text-muted-foreground mt-2 italic">✅ Correct: Sorted by numeric value (2, 5, 10, 20)</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-4">Character Length Sort</h3>
                  <p className="text-sm text-muted-foreground mb-4">Arranges text by length, from longest to shortest.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">Before (Mixed):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Banana
Apple
Pear
Fig</pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">After (By Length):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Banana
Pear
Apple
Fig</pre>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-4">Reverse Order</h3>
                  <p className="text-sm text-muted-foreground mb-4">Flips the current order of your text.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">Before:</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Apple
Banana
Cherry
Grape</pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">After (Reverse):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Grape
Cherry
Banana
Apple</pre>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-4">Shuffle</h3>
                  <p className="text-sm text-muted-foreground mb-4">Randomizes the order of all items.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">Original Order:</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Apple
Banana
Cherry</pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary">After (Shuffled):</p>
                      <pre className="text-xs bg-background p-3 rounded font-mono">Cherry
Apple
Banana</pre>
                      <p className="text-xs text-muted-foreground italic mt-2">* Each shuffle produces different random order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Common Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Organizing Names",
                    desc: "Sort contact lists, employee names, or participant lists alphabetically"
                  },
                  {
                    title: "Data Management",
                    desc: "Organize product lists, inventory items, or database exports"
                  },
                  {
                    title: "File Names",
                    desc: "Sort file lists with natural sorting that understands numbers"
                  },
                  {
                    title: "Content Organization",
                    desc: "Arrange blog posts, articles, or content items by length or alphabetically"
                  },
                  {
                    title: "Text Processing",
                    desc: "Clean and organize raw text data for further processing"
                  },
                  {
                    title: "Random Selection",
                    desc: "Shuffle lists for giveaways, contests, or random assignments"
                  }
                ].map((useCase, i) => (
                  <div key={i} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2">{useCase.title}</h3>
                    <p className="text-xs text-muted-foreground">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is the difference between alphabetical and natural sort?</h3>
                  <p className="text-sm text-muted-foreground">Alphabetical sort uses basic character comparison, treating "item10" as coming before "item2" because '1' comes before '2'. Natural sort is smarter and recognizes numbers within text, correctly placing "item2" before "item10". Natural sort is perfect for numbered lists, file names, and data that includes both letters and numbers.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use this text sorting tool?</h3>
                  <p className="text-sm text-muted-foreground">Simply paste your text with one item per line in the input box. Choose your preferred sorting method from the dropdown (alphabetical, natural, character length, reverse, or shuffle). Optionally enable trim whitespace, remove empty lines, or case sensitivity. Click "Sort Text" to get your organized output instantly.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I sort text by character length?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Select "Character Length" from the sort options dropdown to arrange your text from longest to shortest. This is useful for prioritizing content, analyzing text complexity, or organizing by word size. The tool automatically calculates and sorts based on the number of characters in each line.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What does reverse sorting do?</h3>
                  <p className="text-sm text-muted-foreground">Reverse sorting flips the current order of your text. If you have lines A, B, C, reverse will give you C, B, A. This is useful for presenting data in back-to-front order, reversing chronological lists, or changing the arrangement of content without losing any items.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How does shuffle work?</h3>
                  <p className="text-sm text-muted-foreground">Shuffle completely randomizes the order of all your text items. Each time you click shuffle, you get a different random arrangement. Perfect for creating random lists, picking contest winners, generating random orders, or mixing up content for variety and fairness.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is case-sensitive sorting?</h3>
                  <p className="text-sm text-muted-foreground">Case-sensitive sorting distinguishes between uppercase and lowercase letters, treating them as different characters. For example, 'Apple' and 'apple' would be sorted separately. By default, our tool is case-insensitive for natural sorting, but you can enable case sensitivity if you need exact character comparison.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I remove empty lines when sorting?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Enable the "Remove empty lines" checkbox to automatically filter out any blank lines in your input text. This helps clean up your data and ensures only meaningful content is sorted and displayed in the output.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this text sorting tool free?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our sort text tool is completely free to use with no registration required. Sort as much text as you need in any order - alphabetical, natural, by length, reverse, or shuffle - all at no cost. Works directly in your browser with no downloads or installation needed.</p>
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
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">View All Tools</p>
                    <p className="text-xs text-muted-foreground">Browse all available text tools</p>
                  </div>
                </Link>
                <Link
                  href="/tools/word-counter"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Word Counter</p>
                    <p className="text-xs text-muted-foreground">Count words, characters, sentences</p>
                  </div>
                </Link>
                <Link
                  href="/tools/case-converter"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Case Converter</p>
                    <p className="text-xs text-muted-foreground">Convert text to uppercase, lowercase, title case</p>
                  </div>
                </Link>
                <Link
                  href="/tools/sort-deduplicate"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Sort & Deduplicate</p>
                    <p className="text-xs text-muted-foreground">Sort text and remove duplicates</p>
                  </div>
                </Link>
                <Link
                  href="/tools/slug-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Slug Generator</p>
                    <p className="text-xs text-muted-foreground">Create URL-friendly slugs from text</p>
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
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">AI Translator</p>
                    <p className="text-xs text-muted-foreground">Translate text to any language</p>
                  </div>
                </Link>
                <Link
                  href="/languages"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Language Resources</p>
                    <p className="text-xs text-muted-foreground">Explore all supported languages</p>
                  </div>
                </Link>
                <Link
                  href="/phrases"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <ArrowUpDown className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Common Phrases</p>
                    <p className="text-xs text-muted-foreground">Popular phrases in many languages</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* SEO Content */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">About Sort Text Tool</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our free online sort text tool helps you organize and arrange text in various ways. Sort alphabetically, naturally, by character length, reverse order, or shuffle randomly. Perfect for organizing lists, names, data, and text files.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Use our online text sorting tool to instantly organize lists, data, and content. The tool supports natural sorting that understands numbers, case-sensitive options, and the ability to remove empty lines and trim whitespace. Works perfectly on all devices.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This text sorting tool requires no registration and provides instant results. Sort text by alphabetical order, natural order with number recognition, character length, reverse order, or random shuffle. Perfect for data management, content organization, and list arrangement.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowUpDown className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sorting contact lists and names alphabetically</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpDown className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Organizing product lists and inventory data</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpDown className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sorting file names with natural number recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpDown className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Arranging content by length or alphabetical order</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpDown className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cleaning and organizing raw text data</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpDown className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Randomizing lists for contests and giveaways</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sort methods:</span>
                  <span className="font-medium">7 methods</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Natural sort:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Case sensitivity:</span>
                  <span className="font-medium">Optional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Whitespace trimming:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Empty line removal:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max lines:</span>
                  <span className="font-medium">Unlimited</span>
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