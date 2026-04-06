import { Metadata } from 'next'
import { Plus } from 'lucide-react'
import { AddPrefixSuffixTool } from '@/components/tools/add-prefix-suffix-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Add Prefix Suffix - Free Online Text Tool | Add Text to Lines',
  description: 'Free online tool to add prefix and/or suffix to each line of text. Perfect for numbering lists, adding URLs, formatting filenames, and applying common text patterns. Works with multiple lines.',
  keywords: ['add prefix to lines', 'add suffix to lines', 'text prefix tool', 'text suffix tool', 'add text to lines', 'line text editor', 'number list tool', 'add url to list', 'format text lines', 'text modifier', 'text adder', 'line text processing', 'batch text tool'],
  openGraph: {
    title: 'Add Prefix Suffix - Free Online Text Tool',
    description: 'Add prefix and/or suffix to each line of text. Perfect for numbering lists and formatting.',
    type: 'website',
  },
}

export default function AddPrefixSuffixPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Plus className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Add Prefix and/or Suffix
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online tool to add prefix and/or suffix to each line of text. Perfect for numbering lists, adding URLs, formatting filenames, and applying common text patterns. Works with multiple lines instantly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <AddPrefixSuffixTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our add prefix/suffix tool is a free online utility that helps you add text to the beginning, end, or both sides of each line in your text. Whether you need to number lists, add URLs to items, format filenames, or apply common text patterns, this tool makes it simple and efficient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for processing multiple lines at once - just enter your text with one item per line, specify your prefix and/or suffix, and get instant results. No installation required, works directly in your browser. Includes space options for better formatting control.
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
                    <p className="text-sm text-muted-foreground">Paste or type text with one item per line</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Add Prefix/Suffix</h3>
                    <p className="text-sm text-muted-foreground">Enter prefix to add to beginning, suffix for end, or both</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Process</h3>
                    <p className="text-sm text-muted-foreground">Click to apply prefix/suffix to all lines instantly</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy Results</h3>
                    <p className="text-sm text-muted-foreground">Copy your modified text with one click</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Number Lists",
                    desc: "Add sequential numbers: 1. Item, 2. Item, 3. Item..."
                  },
                  {
                    title: "Add URLs",
                    desc: "Add website URLs to list items: http://example.com/item"
                  },
                  {
                    title: "Format Filenames",
                    desc: "Add extensions to files: document.pdf, image.jpg"
                  },
                  {
                    title: "Add Formatting",
                    desc: "Apply common patterns: [Item], {Item}, \"Item\""
                  },
                  {
                    title: "Text Processing",
                    desc: "Add markers or codes to data entries"
                  },
                  {
                    title: "Batch Editing",
                    desc: "Add same text to multiple lines at once"
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
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is add prefix/suffix tool?</h3>
                  <p className="text-sm text-muted-foreground">An add prefix/suffix tool is an online utility that adds text to the beginning, end, or both sides of each line in your text. Perfect for numbering lists, adding URLs to items, formatting filenames, or applying common text patterns to multiple lines at once.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I add prefix to lines?</h3>
                  <p className="text-sm text-muted-foreground">Simply enter your text with one item per line, then type the prefix you want to add to the beginning of each line in the prefix field. Click "Add Prefix/Suffix" to apply prefix to all lines instantly and see the results.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I add both prefix and suffix?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our tool supports adding prefix, suffix, or both to each line. Check the "Add both prefix and suffix" option to add text to both the beginning and end of each line simultaneously.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">How many lines can I process?</h3>
                  <p className="text-sm text-muted-foreground">You can process unlimited lines. The tool works with any amount of text - from a single line to thousands of lines. Just enter your text with one item per line and apply your prefix/suffix instantly.</p>
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
                  <Plus className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">View All Tools</p>
                    <p className="text-xs text-muted-foreground">Browse all available text tools</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
