import { Metadata } from 'next'
import { ArrowRight, Check, ExternalLink } from 'lucide-react'
import { SubscriptGeneratorTool } from '@/components/tools/subscript-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Subscript Generator — Unicode Sub & Superscript Text | Free',
  description:
    'Free online subscript and superscript generator. Convert text to ₛᵤbₛcᵣᵢₚₜ or ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ Unicode instantly. Works in Instagram, Twitter, Discord, WhatsApp & plain text. No HTML needed.',
  keywords: [
    'subscript generator',
    'superscript generator',
    'subscript text',
    'superscript text',
    'unicode subscript',
    'unicode superscript',
    'subscript letters',
    'superscript letters',
    'subscript numbers',
    'superscript numbers',
    'chemical formula text',
    'h2o subscript',
    'copy paste subscript',
    'text to subscript',
    'sub text generator',
    'sup text generator',
    'small text below',
    'small text above',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/subscript-generator',
  },
  openGraph: {
    title: 'Subscript Generator — Unicode Sub & Superscript Text',
    description:
      'Convert text to Unicode subscript (H₂O) or superscript (x²) instantly. Paste anywhere — no HTML needed.',
    url: 'https://nagritranslate.com/tools/subscript-generator',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'What is a subscript generator?',
    a: 'A subscript generator converts regular text into Unicode subscript characters — the small letters or numbers that appear below the normal text line, like the "2" in H₂O. This tool also generates superscript (above the line) like x².',
  },
  {
    q: 'Will subscript text paste into Instagram, Twitter, or Discord?',
    a: 'Yes. Because these are real Unicode characters — not HTML formatting — they copy and paste into any app that supports Unicode text, including Instagram bios, Twitter/X, Discord, WhatsApp, Telegram, and even plain text editors.',
  },
  {
    q: 'Why do some letters not convert to subscript?',
    a: 'Unicode only includes subscript versions for certain letters: a, e, h, i, j, k, l, m, n, o, p, r, s, t, u, v, x. Letters like b, c, d, f, g, q, w, y, z do not have official Unicode subscript equivalents, so they are shown as normal characters. All digits (0–9) convert fully.',
  },
  {
    q: 'What is the difference between subscript and superscript?',
    a: 'Subscript (₂) sits below the normal text baseline — used in chemistry formulas like H₂O. Superscript (²) sits above the baseline — used in mathematics like x² (x squared) or footnotes.',
  },
  {
    q: 'Can I use this for chemical formulas?',
    a: 'Absolutely — that\'s one of the most common uses. Type a formula like H2SO4 in the input, select Subscript mode, and get H₂SO₄ instantly. Common examples are pre-loaded in the Quick Examples section.',
  },
  {
    q: 'Is this different from HTML <sub> and <sup> tags?',
    a: 'Yes. HTML tags only work inside web pages. Unicode subscript/superscript characters are actual characters in the text itself — they display as sub/superscript in any context: social media, messaging apps, PDFs, Word documents, and plain text.',
  },
  {
    q: 'Do superscript letters work for all of the alphabet?',
    a: 'Superscript has better letter coverage than subscript — all 26 lowercase letters have a superscript equivalent, plus most uppercase letters. All digits 0–9 are fully supported for both.',
  },
]

export default function SubscriptGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Text Tools', path: '/tools' },
        { name: 'Subscript Generator', path: '/tools/subscript-generator' },
      ]} />
      <WebPageSchema
        path="/tools/subscript-generator"
        name="Subscript Generator — Unicode Sub & Superscript Text"
        description="Convert text to Unicode subscript (H₂O) or superscript (x²) instantly. Works anywhere — Instagram, Discord, WhatsApp, plain text."
        type="WebApplication"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-violet-500/10 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-600 dark:text-blue-400 font-medium mb-5">
            <span className="font-mono text-base">₂ˢ</span>
            Subscript &amp; Superscript Generator
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Subscript Generator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Convert text to Unicode subscript (H₂O) or superscript (x²) instantly.
            Paste into any app — no HTML, no formatting tricks needed.
          </p>

          {/* Visual demo */}
          <div className="inline-flex flex-wrap justify-center items-center gap-4 px-6 py-4 rounded-2xl bg-background/80 border shadow-sm mb-2">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Input</p>
              <p className="text-2xl font-mono font-semibold">H2SO4</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Subscript</p>
              <p className="text-2xl font-mono font-semibold text-blue-600 dark:text-blue-400">H₂SO₄</p>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Superscript</p>
              <p className="text-2xl font-mono font-semibold text-violet-600 dark:text-violet-400">ᴴ²ˢᴼ⁴</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool + Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Tool */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <SubscriptGeneratorTool />
            </div>

            {/* What is subscript — SEO content block */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">What Is Subscript Text?</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
                <p>
                  <strong className="text-foreground">Subscript</strong> is text that appears slightly below the normal line of type, rendered at a smaller size. It is defined in the{' '}
                  <a href="https://www.unicode.org/charts/PDF/U2070.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    Unicode Superscripts and Subscripts block (U+2070–U+209F) <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  as a set of dedicated characters — not as HTML markup. This makes Unicode subscript text portable across every platform that renders Unicode, including social media, messaging apps, and plain text files.
                </p>
                <p>
                  The most familiar use of subscript is in <strong className="text-foreground">chemical formulas</strong> — the "2" in H₂O tells you there are two hydrogen atoms in a water molecule. Subscript notation is standardised by{' '}
                  <a href="https://iupac.org/what-we-do/nomenclature/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    IUPAC (International Union of Pure and Applied Chemistry) <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  for all chemical compound names.
                </p>
                <p>
                  In mathematics, subscript labels variable indices (xₙ, aᵢ) and logarithm bases (log₂, log₁₀). The{' '}
                  <a href="https://www.w3.org/TR/MathML3/chapter3.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    W3C MathML specification <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  defines <code className="bg-muted px-1 rounded text-xs">&lt;msub&gt;</code> for formal mathematical markup, but Unicode characters work wherever plain text is supported.
                </p>
              </div>
            </div>

            {/* What is superscript */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">What Is Superscript Text?</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
                <p>
                  <strong className="text-foreground">Superscript</strong> is text that sits above the normal baseline at a reduced size. It is used in mathematics for exponents (x², 10⁶), in writing for footnote markers (citation¹), and in everyday typography for ordinals (1ˢᵗ, 2ⁿᵈ) and trademark symbols.
                </p>
                <p>
                  Unicode provides superscript digits in the{' '}
                  <a href="https://www.compart.com/en/unicode/block/U+2070" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    Superscripts and Subscripts block <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  (⁰–⁹) and superscript letters are scattered across the{' '}
                  <a href="https://www.unicode.org/charts/PDF/U02B0.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    Spacing Modifier Letters block (U+02B0–U+02FF) <ExternalLink className="w-3 h-3" />
                  </a>.
                  All 26 lowercase letters have a superscript Unicode equivalent, giving superscript broader coverage than subscript.
                </p>
              </div>
            </div>

            {/* When to use */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Subscript vs Superscript — When to Use Each</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Use Subscript ₓ when…</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {[
                      'Writing chemical formulas — H₂O, CO₂, H₂SO₄',
                      'Labeling variables — xₙ, aᵢ, bⱼ',
                      'Isotope notation — ⁶C₁₂',
                      'Logarithm bases — log₂, log₁₀',
                      'Matrix indices — Aₘₙ',
                    ].map(t => (
                      <li key={t} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-violet-500/20 bg-violet-500/5">
                  <h3 className="font-semibold mb-2 text-violet-600 dark:text-violet-400">Use Superscript ˣ when…</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {[
                      'Writing exponents — x², y³, 10⁶',
                      'Footnote markers — reference¹, citation²',
                      'Ordinals — 1ˢᵗ, 2ⁿᵈ, 3ʳᵈ',
                      'Trademarks — Brand™, Copyright©',
                      'Temperature degrees — 100°C',
                    ].map(t => (
                      <li key={t} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Unicode vs HTML comparison */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Unicode Subscript vs HTML &lt;sub&gt; — What's the Difference?</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/20 border-b">
                      <th className="text-left px-4 py-3 font-semibold">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold text-blue-600 dark:text-blue-400">Unicode (this tool)</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground">HTML &lt;sub&gt; / &lt;sup&gt;</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ['Works on social media', '✅ Yes', '❌ No — stripped by platforms'],
                      ['Works in messaging apps', '✅ Yes (WhatsApp, Telegram…)', '❌ No'],
                      ['Works in plain text files', '✅ Yes', '❌ Shows as raw HTML tags'],
                      ['Needs a browser to render', '❌ No', '✅ Yes'],
                      ['Full alphabet coverage', '⚠ Partial (see table)', '✅ Full'],
                      ['Used in web pages', '✅ Yes', '✅ Yes'],
                      ['Copy-paste ready', '✅ Always', '❌ Loses formatting'],
                    ].map(([feat, uni, html]) => (
                      <tr key={feat} className="hover:bg-muted/10 transition-colors">
                        <td className="px-4 py-2.5 text-muted-foreground">{feat}</td>
                        <td className="px-4 py-2.5">{uni}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{html}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground">
                For web development where full alphabet coverage is needed, use the HTML{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5">
                  &lt;sub&gt; <ExternalLink className="w-3 h-3" />
                </a>{' '}
                and{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5">
                  &lt;sup&gt; <ExternalLink className="w-3 h-3" />
                </a>{' '}
                elements (MDN Web Docs). For social media and plain text, use Unicode characters from this tool.
              </p>
            </div>

            {/* Chemistry section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Using Subscript for Chemical Formulas</h2>
              <p className="text-sm text-muted-foreground">
                Chemical formulas follow the notation rules set by{' '}
                <a href="https://iupac.org/what-we-do/nomenclature/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  IUPAC nomenclature <ExternalLink className="w-3 h-3" />
                </a>
                , where subscript numbers indicate the number of atoms of each element. Here are the most common compounds you can generate with this tool:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Water',            formula: 'H₂O',       raw: 'H2O',     wiki: 'https://en.wikipedia.org/wiki/Water' },
                  { name: 'Carbon dioxide',   formula: 'CO₂',       raw: 'CO2',     wiki: 'https://en.wikipedia.org/wiki/Carbon_dioxide' },
                  { name: 'Ammonia',          formula: 'NH₃',       raw: 'NH3',     wiki: 'https://en.wikipedia.org/wiki/Ammonia' },
                  { name: 'Sulfuric acid',    formula: 'H₂SO₄',     raw: 'H2SO4',   wiki: 'https://en.wikipedia.org/wiki/Sulfuric_acid' },
                  { name: 'Methane',          formula: 'CH₄',       raw: 'CH4',     wiki: 'https://en.wikipedia.org/wiki/Methane' },
                  { name: 'Glucose',          formula: 'C₆H₁₂O₆',  raw: 'C6H12O6', wiki: 'https://en.wikipedia.org/wiki/Glucose' },
                  { name: 'Hydrogen peroxide',formula: 'H₂O₂',      raw: 'H2O2',    wiki: 'https://en.wikipedia.org/wiki/Hydrogen_peroxide' },
                  { name: 'Sodium chloride',  formula: 'NaCl',       raw: 'NaCl',    wiki: 'https://en.wikipedia.org/wiki/Sodium_chloride' },
                  { name: 'Ethanol',          formula: 'C₂H₅OH',    raw: 'C2H5OH',  wiki: 'https://en.wikipedia.org/wiki/Ethanol' },
                ].map(({ name, formula, wiki }) => (
                  <a key={name} href={wiki} target="_blank" rel="noopener noreferrer"
                    className="group p-3 rounded-xl border bg-muted/10 hover:border-primary/30 hover:bg-muted/20 transition-colors">
                    <p className="text-xl font-mono mb-1">{formula}</p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      {name} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Each formula links to its Wikipedia article for reference.</p>
            </div>

            {/* Math section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Superscript in Mathematics</h2>
              <p className="text-sm text-muted-foreground">
                In mathematics, superscript notation for exponents and powers is standardised across all major style guides, including those from the{' '}
                <a href="https://www.ams.org/publications/authors/AMS-StyleGuide-online.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  American Mathematical Society (AMS) <ExternalLink className="w-3 h-3" />
                </a>{' '}
                and{' '}
                <a href="https://www.iso.org/standard/31647.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  ISO 80000 (Quantities and Units) <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Square (x²)',       v: 'x²' },
                  { name: 'Cube (x³)',          v: 'x³' },
                  { name: 'Speed of light',     v: 'c²' },
                  { name: 'Avogadro\'s number', v: '6.02×10²³' },
                  { name: 'Euler\'s number',    v: 'eˣ' },
                  { name: 'Pi squared',         v: 'π²' },
                ].map(({ name, v }) => (
                  <div key={name} className="p-3 rounded-xl border bg-muted/10 text-center">
                    <p className="text-2xl font-mono mb-1">{v}</p>
                    <p className="text-xs text-muted-foreground">{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ with schema */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {FAQS.map(({ q, a }) => (
                  <div key={q} className="p-4 rounded-xl border bg-muted/10">
                    <h3 className="font-semibold text-sm mb-1">{q}</h3>
                    <p className="text-sm text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External resources */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Further Reading</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'Unicode Superscripts & Subscripts Block',
                    desc: 'Official Unicode character chart for U+2070–U+209F',
                    href: 'https://www.unicode.org/charts/PDF/U2070.pdf',
                    source: 'unicode.org',
                  },
                  {
                    title: 'MDN: HTML <sub> element',
                    desc: 'Web standard for subscript in HTML documents',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub',
                    source: 'developer.mozilla.org',
                  },
                  {
                    title: 'MDN: HTML <sup> element',
                    desc: 'Web standard for superscript in HTML documents',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup',
                    source: 'developer.mozilla.org',
                  },
                  {
                    title: 'IUPAC Chemical Nomenclature',
                    desc: 'International rules for naming chemical compounds',
                    href: 'https://iupac.org/what-we-do/nomenclature/',
                    source: 'iupac.org',
                  },
                  {
                    title: 'Wikipedia: Subscript and Superscript',
                    desc: 'History and conventions of sub/superscript notation',
                    href: 'https://en.wikipedia.org/wiki/Subscript_and_superscript',
                    source: 'wikipedia.org',
                  },
                  {
                    title: 'W3C MathML Specification',
                    desc: 'Formal math markup language used on the web',
                    href: 'https://www.w3.org/TR/MathML3/chapter3.html',
                    source: 'w3.org',
                  },
                ].map(({ title, desc, href, source }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 rounded-xl border bg-muted/10 hover:border-primary/30 hover:bg-muted/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors leading-tight">{title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1">{source}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Subscript & superscript modes',
                  '"Both" mode shows both at once',
                  'All digits fully supported',
                  'Partial letter coverage (see table)',
                  'Warns when chars can\'t convert',
                  'Quick-load chemical examples',
                  'One-click copy',
                  'Works in any app — no HTML',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Common Formulas</h3>
              <div className="space-y-1.5 text-sm font-mono">
                {[
                  { name: 'Water',            v: 'H₂O' },
                  { name: 'Carbon dioxide',   v: 'CO₂' },
                  { name: 'Ammonia',          v: 'NH₃' },
                  { name: 'Sulfuric acid',    v: 'H₂SO₄' },
                  { name: 'Glucose',          v: 'C₆H₁₂O₆' },
                  { name: 'Methane',          v: 'CH₄' },
                  { name: 'Squared',          v: 'x²' },
                  { name: 'Speed of light',   v: 'c²' },
                  { name: 'Pi squared',       v: 'π²' },
                ].map(({ name, v }) => (
                  <div key={name} className="flex items-center justify-between py-0.5 border-b border-muted/20 last:border-0">
                    <span className="text-xs text-muted-foreground">{name}</span>
                    <span className="text-base">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authoritative external links in sidebar */}
            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Authoritative References</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Unicode Standard', href: 'https://www.unicode.org/charts/PDF/U2070.pdf' },
                  { name: 'IUPAC Nomenclature', href: 'https://iupac.org/what-we-do/nomenclature/' },
                  { name: 'MDN: HTML sub', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub' },
                  { name: 'MDN: HTML sup', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup' },
                  { name: 'Wikipedia: Sub & Superscript', href: 'https://en.wikipedia.org/wiki/Subscript_and_superscript' },
                ].map(({ name, href }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                      <ExternalLink className="w-3 h-3 shrink-0" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Related Tools</h3>
              <ul className="space-y-1.5">
                {[
                  { name: 'Tiny Text Generator', path: '/tools/tiny-text-generator' },
                  { name: 'Fancy Text Generator', path: '/tools/fancy-text-generator' },
                  { name: 'Fontlu — Font Generator', path: '/tools/fontlu' },
                  { name: 'English to Binary', path: '/tools/english-to-binary' },
                  { name: 'Text Obfuscator', path: '/tools/text-obfuscator' },
                  { name: 'Mirror Text Generator', path: '/tools/mirror-text' },
                  { name: 'Glitch Text Generator', path: '/tools/glitch-text-generator' },
                ].map(({ name, path }) => (
                  <li key={path}>
                    <Link href={path} className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                      <ArrowRight className="w-3 h-3" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
