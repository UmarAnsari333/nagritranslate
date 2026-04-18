import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { SpeakWithEmojisTool } from '@/components/tools/speak-with-emojis-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Speak With Emojis - Emoji Keyboard & Text to Emoji Converter',
  description: 'Compose messages using only emojis with our free emoji keyboard, or convert any English text into pure emoji-only output. 800+ emoji across 10 categories. Copy and share instantly.',
  keywords: [
    'speak with emojis', 'emoji keyboard', 'emoji composer', 'text to emoji', 'emoji only',
    'emoji communication', 'talk in emojis', 'emoji message', 'emoji generator', 'emoji translator',
    'emoji language', 'emoji chat', 'emoji sentence', 'emoji phrase', 'emoji converter',
    'emoji text generator', 'speak in emojis', 'emoji only mode', 'emoji speak', 'emoji words',
    'emoji communication tool', 'emoji message maker', 'compose with emojis', 'emoji picker',
    'emoji keyboard online', 'free emoji tool', 'emoji copy paste',
  ],
  openGraph: {
    title: 'Speak With Emojis — Emoji Keyboard & Text Converter',
    description: 'Compose emoji-only messages with our emoji keyboard or convert English text to pure emojis. 800+ emoji, instant copy.',
    type: 'website',
  },
}

const SAMPLE_PHRASES = [
  { text: 'Good morning!',   emoji: '🌅☀️👋😊' },
  { text: 'I love you',      emoji: '❤️😍🫶💕' },
  { text: "Let's party!",    emoji: '🎉🥳🍾🎈' },
  { text: "I'm hungry",      emoji: '🤤🍔😋🍕' },
  { text: 'Good night',      emoji: '🌙😴💤⭐' },
  { text: 'Miss you',        emoji: '💔😢👉❤️' },
]

export default function SpeakWithEmojisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            {['😀','🗣️','💬','😎','❤️','🤩','🎉'].map(e => (
              <span key={e} className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: `${Math.random() * 0.5}s` }}>{e}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Speak With Emojis
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Communicate entirely in emojis. Use the emoji keyboard to compose messages click by click, or type any English text and instantly convert it into pure emoji-only output. 800+ emoji across 10 categories.
          </p>

          {/* Sample conversions */}
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {SAMPLE_PHRASES.map(p => (
              <div key={p.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border text-sm">
                <span className="text-muted-foreground hidden sm:inline">{p.text}</span>
                <span className="text-muted-foreground hidden sm:inline">→</span>
                <span className="text-base">{p.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-pink-500/5 rounded-2xl border">
              <SpeakWithEmojisTool />
            </div>

            {/* How to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { n: '1', title: 'Choose a Mode', desc: 'Use Emoji Composer to build messages by clicking emojis, or Text → Emojis to auto-convert English words.' },
                  { n: '2', title: 'Compose Your Message', desc: 'Click emojis from the keyboard, pick a quick phrase preset, or type words and watch them become emojis.' },
                  { n: '3', title: 'Review & Edit', desc: 'Your emoji message builds in real time. Use Backspace to remove the last emoji or Clear to start over.' },
                  { n: '4', title: 'Copy & Share', desc: 'Click the message or hit Copy to grab it. Paste anywhere — iMessage, WhatsApp, Instagram, Twitter, Discord.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-3 p-4 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{s.n}</div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Speak With Emojis */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">What Is "Speak With Emojis"?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Emoji-only communication is a social media trend where people express thoughts, feelings, and entire conversations using nothing but emoji characters. From replying with a single ❤️ to crafting a full story in 🏃💨🏆🎉, emoji speak has become a universal micro-language.
                </p>
                <p>
                  Our tool gives you two ways to do it: the <strong className="text-foreground">Emoji Composer</strong> lets you click-to-build messages using a categorized emoji keyboard — no typing required. The <strong className="text-foreground">Text → Emojis</strong> mode auto-converts any English sentence into pure emoji output by matching common words to their best visual emoji equivalent.
                </p>
                <p>
                  Both modes produce copy-ready emoji strings you can paste directly into any chat app, social media post, email, or profile bio.
                </p>
              </div>
            </div>

            {/* Where to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Emoji Messages</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '💬', title: 'Messaging Apps', desc: 'iMessage, WhatsApp, Telegram, Messenger — emoji messages stand out in any chat.' },
                  { icon: '📸', title: 'Instagram & TikTok', desc: 'Add emoji-only captions, comments, or bio lines that catch attention instantly.' },
                  { icon: '🐦', title: 'Twitter / X', desc: 'Emoji-only tweets drive engagement. Convey emotion without word count limits.' },
                  { icon: '🎮', title: 'Discord & Gaming', desc: 'Emoji-only server messages, status lines, and reaction combos.' },
                  { icon: '🎁', title: 'Cards & Notes', desc: 'Add a fun emoji message to birthday cards, gift tags, or digital greetings.' },
                  { icon: '😂', title: 'Memes & Jokes', desc: 'Build emoji punchlines or tell a whole meme story using just emojis.' },
                ].map(u => (
                  <div key={u.title} className="flex gap-3 p-3 rounded-xl border bg-muted/20">
                    <span className="text-2xl flex-shrink-0">{u.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{u.title}</p>
                      <p className="text-xs text-muted-foreground">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Tips for Emoji Communication</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Keep it short — 3 to 6 emojis is the sweet spot for readability.',
                  'Use emotion emojis (😂🥹😭) at the end to set the tone of a message.',
                  'Pair an action emoji with a result emoji: 🏃💨 = running fast, 📖💡 = learning something.',
                  'Skin tone variations work in composer mode — long-press on supported emojis in your keyboard.',
                  'Emoji combos work as reactions: ❤️🔥 = fire, 🤝💪 = deal/strength, 🎉✨ = celebration.',
                  'The Text → Emojis converter works best with simple, concrete nouns and emotions.',
                ].map((tip, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is the difference between Emoji Composer and Text → Emojis?',
                    a: 'The Emoji Composer lets you manually click emojis from a keyboard to build your message. Text → Emojis automatically converts typed English words into their emoji equivalents, producing a purely emoji output with no text.',
                  },
                  {
                    q: 'How many emojis are in the keyboard?',
                    a: 'The emoji keyboard includes 800+ emoji across 10 categories: Smileys, Hearts, People, Animals, Food, Travel, Activities, Objects, Nature, and Symbols.',
                  },
                  {
                    q: 'Why does the Text → Emojis converter miss some words?',
                    a: 'The converter matches against a dictionary of 400+ common words. Abstract, technical, or uncommon words may not have an emoji match and are silently skipped. Try simpler, more concrete words for best results.',
                  },
                  {
                    q: 'Can I use these emoji messages on all platforms?',
                    a: 'Yes — all emojis used are standard Unicode emoji that work on iOS, Android, Windows, macOS, and all major apps. Appearance may vary slightly across platforms.',
                  },
                  {
                    q: 'Is this tool free?',
                    a: 'Completely free. No account, no login, no limits — compose and convert as many emoji messages as you like.',
                  },
                ].map(faq => (
                  <div key={faq.q} className="p-4 bg-muted/20 rounded-xl">
                    <h3 className="font-semibold mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Related tools */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { name: 'Emoji Translator', path: '/tools/emoji-translator', icon: '😊' },
                  { name: 'Emoji Buttons', path: '/tools/emoji-buttons', icon: '🎛️' },
                  { name: 'Glitch Text Generator', path: '/tools/glitch-text-generator', icon: '👾' },
                  { name: 'Fancy Text Generator', path: '/tools/fancy-text-generator', icon: '✨' },
                  { name: 'Gen Z Translator', path: '/tools/gen-z-translator', icon: '💅' },
                  { name: 'Vaporwave Text', path: '/tools/vaporwave-text-generator', icon: '🌸' },
                ].map(t => (
                  <Link key={t.path} href={t.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm group">
                    <span className="text-lg">{t.icon}</span>
                    <span className="group-hover:text-primary transition-colors">{t.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emoji categories */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Keyboard Categories</h3>
              <div className="space-y-1.5 text-sm">
                {[
                  ['😊', 'Smileys & Emotions', '60+'],
                  ['❤️', 'Hearts & Gestures', '30+'],
                  ['👋', 'People & Hands', '70+'],
                  ['🐶', 'Animals', '60+'],
                  ['🍕', 'Food & Drink', '70+'],
                  ['✈️', 'Travel & Places', '70+'],
                  ['⚽', 'Activities & Sports', '60+'],
                  ['💡', 'Objects', '60+'],
                  ['🌸', 'Nature & Weather', '60+'],
                  ['✅', 'Symbols', '60+'],
                ].map(([icon, name, count]) => (
                  <div key={name} className="flex items-center justify-between gap-2 py-1 border-b border-border/30 last:border-0">
                    <div className="flex items-center gap-2">
                      <span>{icon}</span>
                      <span className="text-muted-foreground">{name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="p-4 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl border border-yellow-500/20">
              <h3 className="font-bold mb-3">😄 Fun Emoji Facts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Over <strong>3,600+</strong> emoji exist in the Unicode standard</li>
                <li>• The 😂 (Face with Tears of Joy) is the most-used emoji worldwide</li>
                <li>• Oxford Dictionaries named 😂 Word of the Year in 2015</li>
                <li>• Japan created the first emoji set in 1999 for NTT DoCoMo</li>
                <li>• World Emoji Day is celebrated on <strong>July 17</strong> 📅</li>
                <li>• ❤️ is the most-sent emoji on Twitter/X</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
