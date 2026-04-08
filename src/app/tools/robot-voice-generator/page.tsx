import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { RobotVoiceGeneratorTool } from '@/components/tools/robot-voice-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Robot Voice Generator - Free Text to Robot Speech Online',
  description: 'Convert text to robot voice with adjustable speed and pitch. Free online robot voice generator with 6 visual robot text styles. No login required.',
  keywords: ['robot voice generator', 'text to robot voice', 'robot speech', 'robot text generator', 'robot voice online', 'robot voice converter', 'robotic voice', 'robot sound', 'tts robot'],
  openGraph: {
    title: 'Robot Voice Generator - Free Text to Robot Speech Online',
    description: 'Convert text to robot voice with adjustable speed and pitch. Free, instant, no login needed.',
    type: 'website',
  },
}

export default function RobotVoiceGeneratorPage() {
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
            Robot Voice Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert any text to a robotic voice with adjustable speed and pitch. Also get 6 visual robot text styles — caps, leet, spaced, and more.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool Section */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <RobotVoiceGeneratorTool />
            </div>

            {/* What This Tool Does */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What This Tool Does</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Robot Voice Generator converts any text into a robotic-sounding voice using your browser&apos;s built-in speech synthesis engine. Adjust the <strong>speed</strong> (how fast the robot speaks) and <strong>pitch</strong> (how deep or high the robot sounds) using the sliders to get your perfect robot voice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On top of audio, you also get 6 visual robot text style transformations — from uppercase caps to leet speak (R0B0T C0D3), spaced characters, dot-separated, bracket-wrapped, and command-line styles. Copy any style with one click.
              </p>
            </div>

            {/* How It Works */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Type Your Text</h3>
                    <p className="text-sm text-muted-foreground">Enter any text you want the robot to say</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Adjust Speed &amp; Pitch</h3>
                    <p className="text-sm text-muted-foreground">Use the sliders to set how fast and how deep the robot voice sounds</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Play Robot Voice</h3>
                    <p className="text-sm text-muted-foreground">Hit the Play button to hear your text in a robotic voice</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Copy Visual Styles</h3>
                    <p className="text-sm text-muted-foreground">Copy any of the 6 visual robot text styles for use anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speed & Pitch Guide */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Speed &amp; Pitch Guide</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Speed Settings</h3>
                  <div className="space-y-2">
                    {[
                      { range: '0.3x – 0.5x', label: 'Very Slow', desc: 'Slow, dramatic robot commands' },
                      { range: '0.6x – 0.8x', label: 'Slow', desc: 'Classic robot pace' },
                      { range: '0.9x – 1.1x', label: 'Normal', desc: 'Natural robot speed' },
                      { range: '1.2x – 1.5x', label: 'Fast', desc: 'Rapid robot processing' },
                      { range: '1.6x – 2.0x', label: 'Very Fast', desc: 'Data download mode' },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 p-3 bg-primary/5 rounded-lg">
                        <code className="text-xs font-mono text-primary w-20 flex-shrink-0">{item.range}</code>
                        <div>
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">— {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Pitch Settings</h3>
                  <div className="space-y-2">
                    {[
                      { range: '0.0 – 0.3', label: 'Deep Robot', desc: 'Classic deep robot voice' },
                      { range: '0.4 – 0.6', label: 'Low Robot', desc: 'Low robotic tone' },
                      { range: '0.7 – 1.1', label: 'Normal', desc: 'Neutral voice pitch' },
                      { range: '1.2 – 1.5', label: 'High', desc: 'Higher pitched robot' },
                      { range: '1.6 – 2.0', label: 'Very High', desc: 'Squeaky robot' },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 p-3 bg-primary/5 rounded-lg">
                        <code className="text-xs font-mono text-primary w-20 flex-shrink-0">{item.range}</code>
                        <div>
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">— {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🔊</div>
                  <h3 className="font-semibold mb-2">Adjustable Speed</h3>
                  <p className="text-xs text-muted-foreground">0.3x to 2.0x speed control</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🎚️</div>
                  <h3 className="font-semibold mb-2">Adjustable Pitch</h3>
                  <p className="text-xs text-muted-foreground">Deep robot to high-pitched voice</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🤖</div>
                  <h3 className="font-semibold mb-2">6 Visual Styles</h3>
                  <p className="text-xs text-muted-foreground">Caps, leet, spaced, dots, brackets, command</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">How do I get the most robotic sound?</h3>
                  <p className="text-sm text-muted-foreground">Set the pitch to 0.0–0.3 (Deep Robot) and the speed to 0.6–0.8 (Slow). This gives the most mechanical, deep robot voice effect.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Does it work on all browsers?</h3>
                  <p className="text-sm text-muted-foreground">The robot voice uses the Web Speech API, which is supported in Chrome, Edge, Safari, and Firefox. Some browsers may have more robotic-sounding voices than others.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I download the robot voice audio?</h3>
                  <p className="text-sm text-muted-foreground">Currently the tool plays the audio directly in your browser. Audio download is not supported yet as it depends on the browser&apos;s speech synthesis API.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">What are the visual robot text styles?</h3>
                  <p className="text-sm text-muted-foreground">There are 6 styles: ROBOT CAPS (uppercase), R0B0T C0D3 (leet speak), R·O·B·O·T (dot-separated), S P A C E D (space between chars), [BRACKET] [WORDS], and &gt;&gt;COMMAND&lt;&lt; style.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this tool free?</h3>
                  <p className="text-sm text-muted-foreground">Yes! The Robot Voice Generator is completely free with no sign-up or installation required. GREETINGS HUMAN.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">All Text Tools</h3>
              <div className="space-y-3">
                <Link href="/tools" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">View All Tools</p>
                    <p className="text-xs text-muted-foreground">Browse all text tools</p>
                  </div>
                </Link>
                <Link href="/tools/ned-flanders-translator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Ned Flanders Translator</p>
                    <p className="text-xs text-muted-foreground">Okely-dokely diddly speak</p>
                  </div>
                </Link>
                <Link href="/tools/morse-code-translator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Morse Code Translator</p>
                    <p className="text-xs text-muted-foreground">Text to Morse with audio</p>
                  </div>
                </Link>
                <Link href="/tools/glitch-text-generator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Glitch Text Generator</p>
                    <p className="text-xs text-muted-foreground">Zalgo and cursed styles</p>
                  </div>
                </Link>
                <Link href="/tools/fancy-text-generator" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Fancy Text Generator</p>
                    <p className="text-xs text-muted-foreground">Bold, script, gothic styles</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Robot Voice Tips */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Robot Voice Tips</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">🤖</span>
                  <span><strong>Deep robot:</strong> Pitch 0.0–0.3, Speed 0.6–0.8</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">⚡</span>
                  <span><strong>Fast computer:</strong> Pitch 0.5, Speed 1.5–2.0</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">📢</span>
                  <span><strong>Announcement:</strong> Pitch 0.8, Speed 0.7</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">🔬</span>
                  <span><strong>Sci-fi AI:</strong> Pitch 0.4, Speed 0.9</span>
                </li>
              </ul>
            </div>

            {/* Language Features */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Language Features</h3>
              <div className="space-y-3">
                <Link href="/ai-translate" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">AI Translator</p>
                    <p className="text-xs text-muted-foreground">Translate to any language</p>
                  </div>
                </Link>
                <Link href="/languages" className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Language Resources</p>
                    <p className="text-xs text-muted-foreground">Explore all languages</p>
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
