import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { NedFlandersTranslatorTool } from '@/components/tools/ned-flanders-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'English to Ned Flanders Translator - Free Online Diddly Converter',
  description: 'Translate English text into Ned Flanders speak! Convert regular text into the iconic diddly-doodly speech of The Simpsons\' most beloved neighborino. Free, instant, and okely-dokely!',
  keywords: ['ned flanders translator', 'ned flanders speak', 'diddly translator', 'simpsons text generator', 'neighborino translator', 'okely dokely', 'ned flanders text', 'simpsons language', 'diddly doodly converter'],
  openGraph: {
    title: 'English to Ned Flanders Translator - Diddly-Doodly Converter',
    description: 'Convert regular English into Ned Flanders\' iconic diddly speech. Free and instant!',
    type: 'website',
  },
}

export default function NedFlandersTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            English to Ned Flanders Translator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert regular English into the iconic diddly-doodly speech of Ned Flanders from The Simpsons. Okely-dokely, neighborino!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <NedFlandersTranslatorTool />
            </div>

            {/* What This Tool Does Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our Ned Flanders Translator converts regular English text into the beloved speech patterns of Ned Flanders, the iconic character from The Simpsons. Ned is known for his upbeat, overly cheerful personality, his deep religious faith, and his unique way of speaking that involves adding &quot;diddly,&quot; &quot;doodly,&quot; &quot;erino,&quot; and other fun suffixes to words.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The translator replaces common words with Ned Flanders equivalents, filters out any profanity and replaces it with wholesome Ned-isms, and adds characteristic Flanders suffixes to give your text that authentic diddly-doodly feel. Hi-diddly-ho!
              </p>
            </div>

            {/* How It Works Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Type Your Text</h3>
                    <p className="text-sm text-muted-foreground">Enter any English text into the input field, or try one of the quick examples</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Diddly Conversion</h3>
                    <p className="text-sm text-muted-foreground">Words are instantly replaced with Ned Flanders equivalents as you type</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy & Share</h3>
                    <p className="text-sm text-muted-foreground">Click copy to grab your Ned Flanders text and share it anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why People Use It Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use This Translator</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Simpsons Fan Fun', desc: 'Celebrate The Simpsons with your favorite neighborino' },
                  { title: 'Social Media Posts', desc: 'Share diddly-doodly content on Twitter, Reddit, and more' },
                  { title: 'Messaging Friends', desc: 'Surprise your friends with Ned Flanders speak' },
                  { title: 'Meme Creation', desc: 'Create authentic Ned Flanders meme text' },
                  { title: 'Discord & Gaming', desc: 'Add some Flanders flavor to your online chats' },
                  { title: 'Clean Version', desc: 'Auto-replaces profanity with wholesome Ned-isms' },
                  { title: 'Creative Writing', desc: 'Write stories or scripts in Ned\'s unique voice' },
                  { title: 'Just For Fun', desc: 'Because everything is better with a diddly!' },
                ].map((useCase, i) => (
                  <div key={i} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2">{useCase.title}</h3>
                    <p className="text-xs text-muted-foreground">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🏡</div>
                  <h3 className="font-semibold mb-2">100+ Word Replacements</h3>
                  <p className="text-xs text-muted-foreground">Rich dictionary of Ned Flanders expressions</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">✝️</div>
                  <h3 className="font-semibold mb-2">Profanity Filter</h3>
                  <p className="text-xs text-muted-foreground">Replaces bad words with wholesome Ned-isms</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">⚡</div>
                  <h3 className="font-semibold mb-2">Instant Conversion</h3>
                  <p className="text-xs text-muted-foreground">Real-time translation as you type</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Who is Ned Flanders?</h3>
                  <p className="text-sm text-muted-foreground">Ned Flanders is a beloved character from the animated TV show The Simpsons. He is Homer Simpson&apos;s next-door neighbor, known for his cheerful disposition, devout Christian faith, and his unique speech pattern of adding &quot;diddly,&quot; &quot;doodly,&quot; and other fun suffixes to words. His catchphrases include &quot;Hi-diddly-ho, neighborino!&quot; and &quot;Okely-dokely!&quot;</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What makes Ned Flanders speak unique?</h3>
                  <p className="text-sm text-muted-foreground">Ned Flanders inserts &quot;diddly,&quot; &quot;doodly,&quot; &quot;erino,&quot; &quot;arino,&quot; and &quot;a-rooney&quot; into words and phrases. He uses expressions like &quot;okely-dokely&quot; for &quot;okay,&quot; &quot;neighborino&quot; for &quot;neighbor,&quot; and replaces any profanity with wholesome alternatives like &quot;heck&quot; for &quot;hell&quot; and &quot;darn&quot; for &quot;damn.&quot;</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Does this filter bad language?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Just like the real Ned Flanders, our translator automatically replaces profanity with wholesome Ned-approved alternatives. &quot;Damn&quot; becomes &quot;darn,&quot; &quot;hell&quot; becomes &quot;heck,&quot; and so on — keeping everything okely-dokely clean!</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I use the output on social media?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely-diddly! The translated text is plain Unicode text that works on any platform — Twitter, Instagram, Reddit, Discord, Facebook, and more. Just copy and paste.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free?</h3>
                  <p className="text-sm text-muted-foreground">Yessiree-diddly! This tool is completely free with no sign-up, no installation, and no limitations. Just okely-dokely free!</p>
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
                <Link href="/tools" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">View All Tools</p>
                    <p className="text-xs text-muted-foreground">Browse all available text tools</p>
                  </div>
                </Link>
                <Link href="/tools/fancy-text-generator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Fancy Text Generator</p>
                    <p className="text-xs text-muted-foreground">Bold, script, gothic and more</p>
                  </div>
                </Link>
                <Link href="/tools/vaporwave-text-generator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Vaporwave Text</p>
                    <p className="text-xs text-muted-foreground">Aesthetic retro styles</p>
                  </div>
                </Link>
                <Link href="/tools/glitch-text-generator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Glitch Text Generator</p>
                    <p className="text-xs text-muted-foreground">Zalgo, cursed and glitch styles</p>
                  </div>
                </Link>
                <Link href="/tools/tiny-text-generator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Tiny Text Generator</p>
                    <p className="text-xs text-muted-foreground">Superscript, subscript and more</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* About Ned */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 rounded-2xl border border-yellow-500/20">
              <h3 className="text-lg font-bold mb-4">About Ned Flanders</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Ned Flanders first appeared in The Simpsons premiere in 1989. He is Homer&apos;s cheerful, devoutly religious next-door neighbor at 740 Evergreen Terrace.
              </p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                His iconic &quot;diddly-doodly&quot; speech pattern has become one of the most recognizable catchphrases in TV history.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Famous quotes include: <em>&quot;Hi-diddly-ho, neighborino!&quot;</em> and <em>&quot;Okely-dokely!&quot;</em>
              </p>
            </div>

            {/* Related Language Features */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Language Features</h3>
              <div className="space-y-3">
                <Link href="/ai-translate" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">AI Translator</p>
                    <p className="text-xs text-muted-foreground">Translate text to any language</p>
                  </div>
                </Link>
                <Link href="/languages" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Language Resources</p>
                    <p className="text-xs text-muted-foreground">Explore all supported languages</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Common Phrases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Classic Ned Phrases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="p-2 bg-background/50 rounded-lg"><span className="font-medium text-foreground">Hi-diddly-ho!</span> — Hello</li>
                <li className="p-2 bg-background/50 rounded-lg"><span className="font-medium text-foreground">Okely-dokely!</span> — Okay</li>
                <li className="p-2 bg-background/50 rounded-lg"><span className="font-medium text-foreground">Neighborino</span> — Neighbor</li>
                <li className="p-2 bg-background/50 rounded-lg"><span className="font-medium text-foreground">Yessiree-diddly</span> — Yes</li>
                <li className="p-2 bg-background/50 rounded-lg"><span className="font-medium text-foreground">Sorry-arino</span> — Sorry</li>
                <li className="p-2 bg-background/50 rounded-lg"><span className="font-medium text-foreground">Heck / Darn</span> — Profanity filter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
