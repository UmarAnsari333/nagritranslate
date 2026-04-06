import { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { CitationGeneratorTool } from '@/components/tools/citation-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Citation Generator - Free Online Citation Tool | APA, MLA, Chicago',
  description: 'Free online citation generator. Create citations in APA, MLA, Chicago, and Harvard styles instantly. Support for books, webpages, newspapers, and academic articles. Perfect for students and researchers.',
  keywords: ['citation generator', 'APA citation generator', 'MLA citation generator', 'Chicago citation generator', 'Harvard citation generator', 'book citation', 'webpage citation', 'newspaper citation', 'academic citation', 'free citation tool', 'online citation maker', 'cite sources', 'citation format', 'bibliography generator', 'works cited', 'reference generator', 'automatic citations', 'cite generator'],
  openGraph: {
    title: 'Citation Generator - Free Online Citation Tool',
    description: 'Generate citations in APA, MLA, Chicago, and Harvard styles. Perfect for students and researchers.',
    type: 'website',
  },
}

export default function CitationGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Citation Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free online citation generator. Create citations in APA, MLA, Chicago, and Harvard styles instantly. Support for books, webpages, newspapers, and academic articles. Perfect for students and researchers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <CitationGeneratorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our citation generator is a free online tool that creates properly formatted citations in multiple academic styles. Simply paste your text, select the portion you want to cite, answer a few questions about your source, and generate accurate citations instantly in APA, MLA, Chicago, or Harvard format.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for students, researchers, writers, and anyone who needs to cite sources in academic papers, articles, or publications. The tool supports books, webpages, newspapers, and academic articles, making it versatile for all citation needs.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Paste or Write Text</h3>
                    <p className="text-sm text-muted-foreground">Enter the text you want to cite in the text editor</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Select Text to Cite</h3>
                    <p className="text-sm text-muted-foreground">Highlight the specific text portion you want to reference</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Source Type</h3>
                    <p className="text-sm text-muted-foreground">Select from books, webpages, newspapers, or academic articles</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Answer Questions</h3>
                    <p className="text-sm text-muted-foreground">Provide information about author, title, year, and other details</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Your Citation</h3>
                    <p className="text-sm text-muted-foreground">Copy the formatted citation in your chosen style</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Source Types Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Supported Source Types</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">📚 Books</h3>
                  <p className="text-sm text-muted-foreground">Cite books with author, title, year, and publisher information</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">🌐 Webpages</h3>
                  <p className="text-sm text-muted-foreground">Create citations for websites with URL, author, and access date</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">📰 Newspapers</h3>
                  <p className="text-sm text-muted-foreground">Cite newspaper articles with publication name and edition</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">🎓 Academic Articles</h3>
                  <p className="text-sm text-muted-foreground">Format journal citations with volume, issue, and page numbers</p>
                </div>
              </div>
            </div>

            {/* Citation Formats Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Citation Formats Supported</h2>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">APA 7th Edition</h3>
                  <p className="text-sm text-muted-foreground">American Psychological Association style, widely used in social sciences, education, and psychology</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">MLA 9th Edition</h3>
                  <p className="text-sm text-muted-foreground">Modern Language Association style, commonly used in humanities and liberal arts</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">Chicago 17th Edition</h3>
                  <p className="text-sm text-muted-foreground">Chicago Manual of Style, used in history, business, and fine arts</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold mb-2">Harvard Style</h3>
                  <p className="text-sm text-muted-foreground">Harvard referencing system, popular in UK and Australian universities</p>
                </div>
              </div>
            </div>

            {/* Why Use Citation Generator Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Why Use Citation Generator</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Save Time",
                    desc: "Generate citations in seconds instead of manually formatting them"
                  },
                  {
                    title: "Accurate Formatting",
                    desc: "Ensure citations follow the correct style guidelines"
                  },
                  {
                    title: "Multiple Formats",
                    desc: "Switch between APA, MLA, Chicago, and Harvard styles"
                  },
                  {
                    title: "Easy to Use",
                    desc: "Simple interface with step-by-step guidance"
                  },
                  {
                    title: "Free Access",
                    desc: "No registration or payment required"
                  },
                  {
                    title: "Text Integration",
                    desc: "Paste text and select portions for context-aware citations"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What is a citation generator?</h3>
                  <p className="text-sm text-muted-foreground">A citation generator is an online tool that automatically creates properly formatted citations for your sources. Our citation generator takes information about your source (author, title, year, etc.) and formats it according to specific citation styles like APA, MLA, Chicago, or Harvard, saving you time and ensuring accuracy.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I use the citation generator?</h3>
                  <p className="text-sm text-muted-foreground">Simply paste or type your text, select the portion you want to cite, choose the source type (book, webpage, newspaper, or academic article), answer the questions about your source, and click generate. Your properly formatted citation will appear instantly, ready to copy.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What citation formats are supported?</h3>
                  <p className="text-sm text-muted-foreground">Our citation generator supports four major citation styles: APA 7th Edition, MLA 9th Edition, Chicago 17th Edition, and Harvard style. Each format is commonly used in different academic disciplines, so you can choose the one required for your paper or publication.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I cite books with this tool?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our citation generator supports book citations. You'll need to provide the author's name, book title, publication year, and publisher. The tool will format this information according to your chosen citation style automatically.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I cite a webpage?</h3>
                  <p className="text-sm text-muted-foreground">To cite a webpage, select the "Webpage" source type and provide the author (if available), page title, URL, publication year (if known), and the date you accessed the webpage. Our tool will create a properly formatted webpage citation in your chosen style.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I generate multiple citations at once?</h3>
                  <p className="text-sm text-muted-foreground">Yes! You can generate multiple citations by repeating the process for each source. All citations will be saved in your session, and you can copy them all at once or individually. Each citation can be deleted if needed.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What's the difference between APA and MLA styles?</h3>
                  <p className="text-sm text-muted-foreground">APA (American Psychological Association) is commonly used in social sciences, education, and psychology, while MLA (Modern Language Association) is used in humanities and liberal arts. The main differences are in formatting author names, dates, titles, and other elements. Our citation generator handles these differences automatically.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this citation generator free?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our citation generator is completely free to use with no registration required. Generate as many citations as you need in any supported format without any cost or signup process.</p>
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
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">View All Tools</p>
                    <p className="text-xs text-muted-foreground">Browse all available text tools</p>
                  </div>
                </Link>
                <Link
                  href="/tools/word-counter"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Word Counter</p>
                    <p className="text-xs text-muted-foreground">Count words, characters, sentences</p>
                  </div>
                </Link>
                <Link
                  href="/tools/case-converter"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Case Converter</p>
                    <p className="text-xs text-muted-foreground">Convert text to uppercase, lowercase, title case</p>
                  </div>
                </Link>
                <Link
                  href="/tools/slug-generator"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Slug Generator</p>
                    <p className="text-xs text-muted-foreground">Create URL-friendly slugs from text</p>
                  </div>
                </Link>
                <Link
                  href="/tools/sort-deduplicate"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
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
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">AI Translator</p>
                    <p className="text-xs text-muted-foreground">Translate text to any language</p>
                  </div>
                </Link>
                <Link
                  href="/languages"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Language Resources</p>
                    <p className="text-xs text-muted-foreground">Explore all supported languages</p>
                  </div>
                </Link>
                <Link
                  href="/phrases"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Common Phrases</p>
                    <p className="text-xs text-muted-foreground">Popular phrases in many languages</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* SEO Content */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">About Citation Generator</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our free online citation generator helps students, researchers, and writers create properly formatted citations in multiple academic styles. Generate citations for books, webpages, newspapers, and academic articles in APA, MLA, Chicago, and Harvard formats.
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Create accurate citations in seconds with our easy-to-use citation generator tool. Simply paste your text, select what you want to cite, answer questions about your source, and get instantly formatted citations ready to copy into your paper.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Perfect for academic writing, research papers, articles, and any publication requiring proper source attribution. Use our free citation generator to ensure your citations follow the correct style guidelines without manual formatting.
              </p>
            </div>

            {/* Use Cases */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Academic research papers and dissertations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Journal articles and publications</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Student essays and assignments</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Book reviews and literary analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Web content and blog posts with sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>News articles and journalistic writing</span>
                </li>
              </ul>
            </div>

            {/* Technical Info */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Technical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Supported formats:</span>
                  <span className="font-medium">4 formats</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Source types:</span>
                  <span className="font-medium">4 types</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">APA version:</span>
                  <span className="font-medium">7th Edition</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">MLA version:</span>
                  <span className="font-medium">9th Edition</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chicago version:</span>
                  <span className="font-medium">17th Edition</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Harvard style:</span>
                  <span className="font-medium">Harvard referencing</span>
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