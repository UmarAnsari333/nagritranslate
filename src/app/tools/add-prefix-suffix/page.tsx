import { Metadata } from 'next'
import { Plus } from 'lucide-react'
import { AddPrefixSuffixTool } from '@/components/tools/add-prefix-suffix-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Add Prefix Suffix - Free Online Tool to Add Text to Every Line',
  description: 'Add prefix and/or suffix to every line of text in one click. Number lists, wrap items in quotes or brackets, add file extensions, prepend URLs, and more. Free, instant, no sign-up.',
  keywords: [
    'add prefix to lines', 'add suffix to lines', 'text prefix tool', 'text suffix tool',
    'add text to lines', 'line text editor', 'number lines online', 'add url to list',
    'format text lines', 'batch add text', 'prepend text to lines', 'append text to lines',
    'prefix suffix generator', 'line editor online', 'add text before each line',
    'add text after each line', 'wrap lines in text', 'batch text processing',
    'text line tool', 'add prefix each line online free',
  ],
  openGraph: {
    title: 'Add Prefix Suffix — Add Text to Every Line Instantly',
    description: 'Free online tool to prepend or append any text to every line. Number lists, add URLs, wrap in brackets, or apply any pattern instantly.',
    type: 'website',
  },
}

const EXAMPLES = [
  {
    label: 'Number a list',
    prefix: '1. ',
    suffix: '',
    input: ['Apple', 'Banana', 'Cherry'],
    output: ['1. Apple', '1. Banana', '1. Cherry'],
    note: "Use with a text editor's \"auto-number\" feature or the tool's counter mode",
  },
  {
    label: 'Add file extension',
    prefix: '',
    suffix: '.jpg',
    input: ['photo_001', 'photo_002', 'photo_003'],
    output: ['photo_001.jpg', 'photo_002.jpg', 'photo_003.jpg'],
    note: 'Batch-rename filenames before uploading',
  },
  {
    label: 'Wrap in quotes',
    prefix: '"',
    suffix: '"',
    input: ['hello world', 'foo bar', 'baz qux'],
    output: ['"hello world"', '"foo bar"', '"baz qux"'],
    note: 'Useful for CSV values or SQL query strings',
  },
  {
    label: 'Prepend a URL path',
    prefix: 'https://example.com/products/',
    suffix: '',
    input: ['red-shirt', 'blue-jeans', 'black-hat'],
    output: ['https://example.com/products/red-shirt', 'https://example.com/products/blue-jeans', 'https://example.com/products/black-hat'],
    note: 'Build full URLs from a slug list',
  },
]

export default function AddPrefixSuffixPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            <Plus className="w-3.5 h-3.5" />
            Prefix · Suffix · Both · Instant
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Add Prefix and Suffix to Lines
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste any multi-line text, set a prefix, a suffix, or both — and every line gets updated instantly. Number lists, add URLs, wrap in quotes, batch-append file extensions, and more.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool + content */}
          <div className="lg:col-span-2">

            {/* Tool card */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <AddPrefixSuffixTool />
            </div>

            {/* What this tool does */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">What Is a Prefix / Suffix Tool?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">prefix</strong> is text added to the <em>beginning</em> of each line; a <strong className="text-foreground">suffix</strong> is text added to the <em>end</em> of each line. This tool applies both in a single pass to every line in your input — no spreadsheet formulas, no sed commands, no manual copy-pasting.
                </p>
                <p>
                  The tool processes text <strong className="text-foreground">line by line</strong>: each newline-separated entry becomes its own target. Empty lines are preserved as-is so your original formatting is not disrupted. There is no limit on the number of lines — it handles thousands of rows as quickly as ten.
                </p>
                <p>
                  Typical workflows include <strong className="text-foreground">numbering list items</strong>, <strong className="text-foreground">adding a base URL</strong> to a list of slugs, <strong className="text-foreground">wrapping values in quotes or brackets</strong> for use in code, and <strong className="text-foreground">appending a file extension</strong> to a batch of filenames.
                </p>
              </div>
            </div>

            {/* How it works */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { n: '1', title: 'Paste your lines', desc: 'Enter or paste text with one item per line. The tool works on any size input — a few lines or thousands.' },
                  { n: '2', title: 'Set a prefix', desc: 'Type the text you want added before every line — a number, a URL, a bullet character, a quote mark, or anything else.' },
                  { n: '3', title: 'Set a suffix', desc: 'Type the text to append after every line — a file extension, closing bracket, comma, or any string.' },
                  { n: '4', title: 'Copy the result', desc: 'The output updates in real time. Click Copy to grab the modified text and paste it wherever you need it.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-3 p-3 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">{s.n}</div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-0.5 text-sm">{s.title}</h3>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Example conversions */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Example Conversions</h2>
              <div className="space-y-5">
                {EXAMPLES.map(ex => (
                  <div key={ex.label} className="p-4 rounded-xl border bg-muted/20">
                    <p className="font-semibold text-sm mb-3">{ex.label}</p>
                    <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs">
                      <div>
                        <p className="text-muted-foreground mb-1.5">Before</p>
                        <div className="space-y-0.5">
                          {ex.input.map(line => (
                            <p key={line} className="bg-background/60 px-2 py-1 rounded">{line}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1.5">After</p>
                        <div className="space-y-0.5">
                          {ex.output.map(line => (
                            <p key={line} className="bg-primary/5 px-2 py-1 rounded text-primary">{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    {ex.prefix && (
                      <p className="text-[10px] text-muted-foreground mt-2">Prefix: <code className="bg-muted px-1 rounded">{ex.prefix}</code></p>
                    )}
                    {ex.suffix && (
                      <p className="text-[10px] text-muted-foreground mt-0.5">Suffix: <code className="bg-muted px-1 rounded">{ex.suffix}</code></p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Common use cases */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Common Use Cases</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '🔢', title: 'Number a list', desc: 'Prefix each line with "1. ", "2. " etc. to create a numbered list from a plain list of items.' },
                  { icon: '🔗', title: 'Build full URLs', desc: 'Prepend a base URL (https://site.com/) to a column of slugs to get the complete page URLs.' },
                  { icon: '📁', title: 'Batch-add file extensions', desc: 'Suffix a list of filenames with .png, .csv, .pdf, or any extension without editing each one manually.' },
                  { icon: '💻', title: 'Wrap for code', desc: 'Add quotes, brackets, or commas — turn a list into a JavaScript array, a SQL IN clause, or a Python list literal.' },
                  { icon: '📝', title: 'Add bullet points', desc: 'Prefix every line with "• " or "- " to instantly convert plain lines into a formatted bullet list.' },
                  { icon: '📧', title: 'Email or HTML tags', desc: 'Wrap each line in <li> … </li> or <p> … </p> tags to build HTML snippets from raw text.' },
                  { icon: '🏷️', title: 'Add hashtags or @handles', desc: 'Append #tag or prepend @username to a list of social media items for quick copy-paste posting.' },
                  { icon: '🗂️', title: 'Spreadsheet prep', desc: 'Add column prefixes or suffixes to data before pasting into Google Sheets or Excel to match a required format.' },
                ].map(u => (
                  <div key={u.title} className="flex gap-3 p-3 rounded-xl border bg-muted/20">
                    <span className="text-xl flex-shrink-0">{u.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">{u.title}</p>
                      <p className="text-xs text-muted-foreground">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is a prefix and what is a suffix?',
                    a: 'A prefix is text inserted at the beginning of a word or line — for example, "• " turns a line into a bullet point. A suffix is text added at the end — for example, ".pdf" turns "report" into "report.pdf". This tool lets you apply both to every line simultaneously.',
                  },
                  {
                    q: 'Does the tool add the text to every line, including blank ones?',
                    a: 'By default, blank lines are preserved as-is and the prefix/suffix is not applied to them, so your paragraph spacing remains intact. If you want to add text even to blank lines, check the "include empty lines" option.',
                  },
                  {
                    q: 'Can I add special characters like quotes, brackets, or newlines?',
                    a: "Yes — you can type any character in the prefix or suffix field: quotes (\" ' ), brackets ([ ] { }), angle brackets (< >), slashes, pipes, or any Unicode character. Backslash escape sequences for newlines (\\n) are not interpreted — what you type is what you get.",
                  },
                  {
                    q: 'How do I number lines sequentially (1, 2, 3…)?',
                    a: 'Type "1. " in the prefix field and the tool will apply "1. " to every line, not auto-increment. For true sequential numbering, use the counter feature (if available in the tool), or process the result in a spreadsheet with ROW() or a text editor\'s column-editing mode.',
                  },
                  {
                    q: 'Is there a limit to how many lines I can process?',
                    a: 'No — the tool runs entirely in your browser and handles any amount of text. Processing 10,000 lines takes the same fraction of a second as processing 10. The only practical limit is your browser\'s memory.',
                  },
                  {
                    q: 'How is this different from Find & Replace?',
                    a: 'Find & Replace targets a specific string anywhere in the text. This tool specifically targets the start or end of each line, regardless of what the line contains. It is faster and safer for bulk prefix/suffix operations because it cannot accidentally modify text in the middle of a line.',
                  },
                  {
                    q: 'Can I use this to wrap lines in HTML tags?',
                    a: 'Yes. Set prefix to <li> and suffix to </li> and every line becomes a valid HTML list item. You can then paste the result inside a <ul> or <ol> element.',
                  },
                ].map(faq => (
                  <div key={faq.q} className="p-4 bg-muted/20 rounded-xl">
                    <h3 className="font-semibold mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 min-w-0">

            {/* Quick patterns */}
            <div className="p-4 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/20">
              <h3 className="font-bold mb-3 text-sm">Quick Patterns</h3>
              <div className="space-y-2 text-xs font-mono">
                {[
                  { label: 'Bullet list',    pre: '• ',   suf: '' },
                  { label: 'Dash list',      pre: '- ',   suf: '' },
                  { label: 'Numbered',       pre: '1. ',  suf: '' },
                  { label: 'Double-quoted',  pre: '"',    suf: '"' },
                  { label: 'Single-quoted',  pre: "'",    suf: "'" },
                  { label: 'Bracketed',      pre: '[',    suf: ']' },
                  { label: 'Curly braced',   pre: '{',    suf: '}' },
                  { label: 'CSV comma',      pre: '',     suf: ',' },
                  { label: 'HTML <li>',      pre: '<li>', suf: '</li>' },
                  { label: 'SQL string',     pre: "'",    suf: "'," },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-1 border-b border-border/20 last:border-0">
                    <span className="text-muted-foreground">{p.label}</span>
                    <span className="text-primary">
                      {p.pre && <span>{p.pre}</span>}
                      <span className="opacity-30">…</span>
                      {p.suf && <span>{p.suf}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related tools */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3 text-sm">Related Tools</h3>
              <div className="space-y-1">
                {[
                  { name: 'Find & Replace',       path: '/tools/find-replace',        icon: '🔍' },
                  { name: 'Case Converter',        path: '/tools/case-converter',       icon: 'Aa' },
                  { name: 'Sort & Deduplicate',    path: '/tools/sort-deduplicate',     icon: '🔤' },
                  { name: 'Remove Whitespace',     path: '/tools/remove-whitespace',    icon: '✂️' },
                  { name: 'Text Repeater',         path: '/tools/text-repeater',        icon: '🔁' },
                  { name: 'Sort Text',             path: '/tools/sort-text',            icon: '↕️' },
                  { name: 'Slug Generator',        path: '/tools/slug-generator',       icon: '🔗' },
                  { name: 'Word Counter',          path: '/tools/word-counter',         icon: '📊' },
                ].map(t => (
                  <Link key={t.path} href={t.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm group">
                    <span className="text-base w-5 text-center flex-shrink-0">{t.icon}</span>
                    <span className="group-hover:text-primary transition-colors truncate">{t.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3 text-sm">Tips</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Add a <strong className="text-foreground">space after a prefix</strong> like "• " to separate the bullet from the text.</li>
                <li>• Use <strong className="text-foreground">both fields at once</strong> — e.g., prefix <code className="bg-muted px-0.5 rounded">[</code> and suffix <code className="bg-muted px-0.5 rounded">]</code> — to wrap every line.</li>
                <li>• Combine with <strong className="text-foreground">Sort & Deduplicate</strong> first to clean your list before adding prefixes.</li>
                <li>• For SQL <code className="bg-muted px-0.5 rounded">IN</code> clauses, prefix with <code className="bg-muted px-0.5 rounded">'</code> and suffix with <code className="bg-muted px-0.5 rounded">',</code> then remove the trailing comma from the last line.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
