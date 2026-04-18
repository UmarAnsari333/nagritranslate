import { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import { EmojiButtonsTool } from '@/components/tools/emoji-buttons-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emoji Buttons — Click to Copy Emoji, Emoji Picker & Emoji Builder',
  description: 'Free emoji buttons — click any emoji to copy it instantly. Browse 500+ emojis by category, search by name, build emoji combos, and paste anywhere. No sign-up needed.',
  keywords: [
    'emoji buttons',
    'emoji picker',
    'click to copy emoji',
    'emoji copy paste',
    'emoji keyboard online',
    'copy emoji',
    'emoji symbols copy paste',
    'emoji list',
    'emoji search',
    'all emojis',
    'emoji chart',
    'emoji collection',
    'emoji browser',
    'emoji selector',
    'emoji for instagram',
    'emoji for discord',
    'emoji for twitter',
    'emoji combiner',
    'emoji builder',
    'emoji generator',
    'funny emojis',
    'heart emojis',
    'face emojis',
    'food emojis',
    'animal emojis',
    'emoji meaning',
    'text emoji',
    'unicode emoji',
  ],
  openGraph: {
    title: 'Emoji Buttons — Click to Copy Any Emoji Instantly',
    description: '500+ emoji buttons organized by category. Click to copy, search by name, and build emoji strings. Free, instant, no sign-up.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emoji Buttons — Copy Any Emoji with One Click',
    description: 'Browse 500+ emojis by category, search by name, build combos. Click any emoji to copy it instantly.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/emoji-buttons',
  },
}

// ─── Static data ──────────────────────────────────────────────────────────────

const PLATFORMS = [
  'Instagram', 'Discord', 'Twitter / X', 'WhatsApp', 'TikTok',
  'Slack', 'Emails', 'Snapchat',
]

const CATEGORIES_OVERVIEW = [
  { icon: '😊', name: 'Smileys & Emotion',  count: 95,  desc: 'Every face from grinning to crying, laughing to screaming. All the classic face emojis plus devils, ghosts, robots, and aliens.' },
  { icon: '👋', name: 'People & Body',      count: 70,  desc: 'Hand gestures, body parts, people of all kinds — baby to elderly, superhero to ninja, coder to santa.' },
  { icon: '🐾', name: 'Animals & Nature',   count: 85,  desc: 'Dogs, cats, mythical creatures, insects, weather — the full natural world from butterfly to tornado.' },
  { icon: '🍕', name: 'Food & Drink',       count: 90,  desc: 'Every food and drink you can think of — pizza to sushi, coffee to cocktails, candy to salad.' },
  { icon: '✈️', name: 'Travel & Places',    count: 65,  desc: 'Vehicles, aircraft, landmarks, maps, landscapes — for travel captions, directions, and adventures.' },
  { icon: '⚽', name: 'Activities',         count: 60,  desc: 'Sports, musical instruments, games, and arts. Every activity from soccer to violin to chess.' },
  { icon: '💡', name: 'Objects',            count: 70,  desc: 'Tech, tools, money, books, stationery — everyday objects for practical and expressive use.' },
  { icon: '❤️', name: 'Symbols',           count: 90,  desc: 'Hearts in every color, arrows, check marks, warning signs, shapes, stars, and celebration emojis.' },
]

const USE_CASES = [
  { icon: '📱', title: 'Social Media Captions',    desc: 'Instagram posts, TikTok descriptions, and Twitter threads come alive with the right emojis. Click → paste instantly.' },
  { icon: '💬', title: 'Messaging & Chat',         desc: 'WhatsApp, iMessage, Telegram, and Discord all support unicode emojis. Build the perfect reaction.' },
  { icon: '🎮', title: 'Gaming Usernames & Bios',  desc: 'Add emoji symbols to Discord usernames, Steam profiles, and game bios for a unique look.' },
  { icon: '📧', title: 'Email Subject Lines',       desc: 'Emoji in email subjects can lift open rates. Pick the right one, copy it, and paste it in seconds.' },
  { icon: '🛍️', title: 'E-commerce & Marketing',  desc: 'Product descriptions, promotional banners, and ad copy all benefit from strategically placed emoji.' },
  { icon: '📝', title: 'Content Creation',          desc: 'Blog posts, newsletters, and social media threads — emoji break up text and make content scan easier.' },
  { icon: '🎨', title: 'Creative & Design',         desc: 'Mood boards, wireframe notes, Notion pages, and Figma comments — emoji communicate tone fast.' },
  { icon: '🤝', title: 'Business Communication',   desc: 'Modern workplaces use emoji in Slack and Teams. Keep it professional — search by keyword to find the right one.' },
]

const FAQS = [
  {
    q: 'How do I copy an emoji?',
    a: 'Simple: click any emoji button and it is instantly copied to your clipboard. A confirmation toast appears at the bottom. Then paste it (Ctrl+V / ⌘V) anywhere you want — Instagram, Discord, WhatsApp, email, or any text field.',
  },
  {
    q: 'What is the Emoji Builder?',
    a: 'The Emoji Builder lets you build a string of multiple emojis before copying. Switch to "Emoji Builder" mode and click emojis to add them one by one. When you\'re done, hit Copy to grab the whole combination — perfect for creating reactions like 😂❤️🔥 or decorating bios.',
  },
  {
    q: 'How do I search for a specific emoji?',
    a: 'Type in the search box at the top. You can search by name (e.g. "dog", "heart", "pizza") or by keyword (e.g. "funny", "love", "fire"). The search looks across all 500+ emojis and returns matches instantly.',
  },
  {
    q: 'What is the "Recent" tab?',
    a: 'Every emoji you click is saved in "Recent" for quick access. Your recently used emojis are stored in your browser\'s localStorage — they persist between sessions and are never sent to any server. The Recent tab holds your last 32 used emojis.',
  },
  {
    q: 'Why don\'t some emojis show on older devices?',
    a: 'Emoji support depends on the operating system and font version. Newer emojis (added after 2021) may show as a box or blank on older Android or Windows versions. If you see an empty box, it means the device doesn\'t support that emoji yet.',
  },
  {
    q: 'Can I use these emojis everywhere?',
    a: 'Yes — all emojis here are standard Unicode characters supported on every modern platform: iOS, Android, Windows, macOS, Instagram, Discord, Twitter, WhatsApp, Slack, email clients, and websites. They paste as regular text characters, not images.',
  },
  {
    q: 'How many emojis are available?',
    a: 'The tool includes 500+ of the most commonly used emojis across 8 categories: Smileys, People, Animals & Nature, Food & Drink, Travel & Places, Activities, Objects, and Symbols. This covers the vast majority of everyday emoji usage.',
  },
  {
    q: 'Is this emoji picker free?',
    a: 'Completely free. No account, no sign-up, no installation. Open the page, click emojis, copy, paste. That\'s it.',
  },
]

export default function EmojiButtonsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/8 via-orange-500/5 to-pink-500/8 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-4 sm:mb-6 max-w-full">
            <span className="text-sm sm:text-base leading-none shrink-0">😀🎉❤️🔥✨</span>
            <span className="hidden sm:inline truncate">500+ emojis · click to copy instantly</span>
            <span className="sm:hidden">500+ emojis</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Emoji Buttons
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Click any <strong>emoji button</strong> to copy it instantly.
            Browse 500+ emojis by category, search by keyword, or build
            multi-emoji strings with the builder. Free, instant, no sign-up.
          </p>

          {/* Preview emoji grid */}
          <div className="grid grid-cols-4 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { emojis: '😀😂🥰😎', label: 'Smileys' },
              { emojis: '❤️🔥✨💯', label: 'Symbols' },
              { emojis: '🍕🍔🍣🍰', label: 'Food' },
              { emojis: '🐶🦊🐸🦋', label: 'Animals' },
            ].map(p => (
              <div key={p.label} className="px-2 sm:px-4 py-2 rounded-xl bg-background/80 border shadow-sm backdrop-blur-sm min-w-0">
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5">{p.label}</p>
                <p className="text-sm sm:text-xl">{p.emojis}</p>
              </div>
            ))}
          </div>

          {/* Platform tags */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {PLATFORMS.map(p => (
              <span key={p} className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-background/60 border text-muted-foreground">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main ─────────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-6 sm:py-8 w-full overflow-x-hidden">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 w-full">

          {/* ── Tool ── */}
          <div className="lg:col-span-2 min-w-0">
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm overflow-hidden">
              <EmojiButtonsTool />
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2 space-y-4 sm:space-y-6 lg:sticky lg:top-4 lg:self-start min-w-0">

            {/* Related tools */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools/emoji-translator',          label: 'Emoji Translator',         desc: 'Convert text to emoji' },
                  { href: '/tools/fancy-text-generator',      label: 'Fancy Text Generator',     desc: 'Bold, script & gothic styles' },
                  { href: '/tools/glitch-text-generator',     label: 'Glitch Text Generator',    desc: 'Zalgo & cursed text' },
                  { href: '/tools/runic-alphabet-converter',  label: 'Runic Converter',          desc: 'Elder Futhark rune translator' },
                  { href: '/tools/underline-text-generator',  label: 'Underline Text',           desc: '28 underline styles' },
                  { href: '/tools/aesthetic-fonts-generator', label: 'Aesthetic Fonts',          desc: '50+ text font styles' },
                  { href: '/tools',                           label: 'View All Tools',           desc: 'Browse all free text tools' },
                ].map(t => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{t.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick tips */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl border border-yellow-500/20">
              <h3 className="text-base sm:text-lg font-bold mb-3">Quick Tips</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {[
                  '🖱️ Click any emoji to copy it',
                  '🔍 Search by name or keyword',
                  '🕐 Recent tab tracks your picks',
                  '🔨 Builder mode = chain emojis',
                  '📱 Works on any device or OS',
                  '⌨️ Ctrl+V to paste anywhere',
                  '💬 Paste into any text field',
                  '🔁 Switch categories with tabs',
                ].map(tip => (
                  <li key={tip} className="flex items-start gap-2 leading-snug">
                    <span className="shrink-0">{tip.split(' ')[0]}</span>
                    <span>{tip.slice(tip.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category overview */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3">8 Categories</h3>
              <div className="space-y-2">
                {CATEGORIES_OVERVIEW.map(c => (
                  <div key={c.name} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                    <span className="text-xl shrink-0">{c.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-xs truncate">{c.name}</p>
                      <p className="text-[10px] text-muted-foreground">{c.count} emojis</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Content sections ── */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 space-y-6 sm:space-y-8 min-w-0">

            {/* How to use */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">How to Use the Emoji Buttons Tool</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  ['1', 'Browse or Search', 'Use the category tabs (Smileys, People, Animals, Food, Travel, Activities, Objects, Symbols) to browse by type, or type a keyword into the search box to find emojis by name instantly.'],
                  ['2', 'Click Any Emoji', 'In "Click to Copy" mode (default), clicking any emoji button copies it to your clipboard immediately. A toast confirmation appears at the bottom of the screen.'],
                  ['3', 'Paste Anywhere', 'Press Ctrl+V (Windows) or ⌘V (Mac) to paste the emoji into any app — Instagram, Discord, WhatsApp, Gmail, Twitter, Slack, or any text field on any website.'],
                  ['4', 'Build Emoji Combos', 'Switch to "Emoji Builder" mode to chain multiple emojis together. Click emojis one by one to build a string, then hit Copy to grab the whole combination at once.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm">
                      {num}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base mb-1">{title}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emoji categories in depth */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Emoji Categories Explained</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {CATEGORIES_OVERVIEW.map(c => (
                  <div key={c.name} className="p-3 sm:p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl shrink-0">{c.icon}</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm truncate">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.count} emojis</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use emojis */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Where to Use Emojis</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {USE_CASES.map(item => (
                  <div key={item.title} className="p-3 sm:p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-xs sm:text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brief emoji history */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl border border-yellow-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">What Are Emojis?</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                <strong>Emojis</strong> are small digital icons used to express emotions, ideas, and objects in text.
                The word comes from Japanese: <em>e</em> (絵, "picture") + <em>moji</em> (文字, "character").
                The first emoji set was created in 1999 by Shigetaka Kurita for NTT DoCoMo's mobile internet platform in Japan — a set of 176 simple 12×12-pixel icons.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Today, emojis are standardized by <strong>Unicode</strong>, the international text encoding standard.
                Unicode Emoji version 15.1 (released 2023) contains over 3,700 emoji characters — including faces, hand gestures,
                food, animals, activities, objects, symbols, and national flags. Because they are Unicode characters,
                they work in any text field on any modern device without any special software.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Different platforms render emojis slightly differently — Apple, Google, Microsoft, and Samsung each have their own
                emoji designs. But the <em>meaning</em> is standardized: a 😀 on iOS looks different from a 😀 on Android,
                but both represent "grinning face." When you copy an emoji from our tool, it pastes as a universal Unicode
                character that renders correctly on every platform.
              </p>
            </div>

            {/* Tips for specific platforms */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Platform-Specific Emoji Tips</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { platform: 'Instagram', tips: 'Add emojis to bios, captions, and comments. Use 3–5 emojis per caption for best engagement. The 🔗 emoji in bio captions signals a link-in-bio call to action.' },
                  { platform: 'Discord', tips: 'Emojis work in usernames (display name), bios, server descriptions, and channel names. The 🎮 ⚡ 🔥 emojis are popular for gaming servers. Use emoji reactions to respond to messages without typing.' },
                  { platform: 'Twitter / X', tips: 'Emoji in tweet text increases engagement. Use emoji at the start or end of a tweet to draw attention. Emoji in display names and bios are fully supported.' },
                  { platform: 'Email', tips: 'Emoji in email subject lines can boost open rates by 25–35%. Use sparingly — 1 emoji in a subject line works better than 5. Avoid emoji that might trigger spam filters (💰, 🏆, 🎁 are common false positives in bulk email).' },
                  { platform: 'Slack / Teams', tips: 'Emoji reactions are a fast way to acknowledge messages without cluttering chat. 👍 for acknowledgement, ✅ for done, 👀 for "I\'ve seen this." Standard Unicode emoji work in messages and status.' },
                ].map(item => (
                  <div key={item.platform} className="p-3 sm:p-4 bg-muted/30 rounded-xl">
                    <p className="font-bold text-sm sm:text-base mb-1">{item.platform}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.tips}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map(item => (
                  <div key={item.q} className="border-b pb-3 sm:pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">{item.q}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
