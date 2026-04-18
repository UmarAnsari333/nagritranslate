import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { TwitchNameGeneratorTool } from '@/components/tools/twitch-name-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Twitch Name Generator — 180+ Cool & Unique Twitch Username Ideas',
  description: 'Generate 180+ unique Twitch channel name ideas across 6 categories: Gaming, Streamer, Funny, Esports, Anime, and Dark/Edgy. Personalize with your name. Free, instant, no sign-up.',
  keywords: [
    'twitch name generator', 'twitch username generator', 'twitch channel name ideas',
    'cool twitch names', 'unique twitch usernames', 'funny twitch names',
    'gaming twitch names', 'best twitch names', 'twitch name ideas',
    'twitch name creator', 'twitch username ideas', 'streamer name generator',
    'twitch channel names', 'twitch account name', 'catchy twitch names',
    'esports twitch names', 'anime twitch names', 'twitch name finder',
    'generate twitch username', 'twitch display name ideas', 'cool streamer names',
    'creative twitch names', 'twitch name suggestions', 'good twitch usernames',
    'twitch handle generator', 'gamer username generator', 'streamer username ideas',
  ],
  openGraph: {
    title: 'Twitch Name Generator — 180+ Cool & Unique Username Ideas',
    description: 'Generate cool Twitch usernames across Gaming, Streamer, Funny, Esports, Anime & Dark categories. Personalize with your name. Instant, free.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitch Name Generator — 180+ Cool Twitch Username Ideas',
    description: 'Find your perfect Twitch channel name. 6 themed categories, personalized suggestions, instant copy. Free.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/twitch-name-generator',
  },
}

export default function TwitchNameGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <span className="text-3xl" role="img" aria-label="Twitch">🟣</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Twitch Name Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Generate 180+ cool, unique Twitch username ideas across 6 themed categories —
            Gaming, Streamer, Funny, Esports, Anime, and Dark. Enter your name for
            personalized suggestions that follow Twitch's naming rules.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <TwitchNameGeneratorTool />
            </div>

            {/* What makes a great Twitch name */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Makes a Great Twitch Username?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your Twitch username is your brand. It's the first thing potential viewers see in search results,
                raid announcements, and on-stream overlays. A great Twitch name is <strong>memorable, easy to spell,
                and reflects your content or personality</strong>. Twitch allows 4–25 characters using only letters,
                numbers, and underscores — so the competition for short, punchy names is fierce.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The most successful streamers often choose names that are <strong>easy to pronounce out loud</strong> —
                because viewers recommend channels to friends verbally. If someone has to spell out your name letter
                by letter, it creates friction. "PixelSlayer" is far easier to share than "Px3lSl4y3r_xX."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our generator covers 6 distinct styles — from competitive Esports handles to wholesome Streamer vibes,
                and from Anime-inspired names to dark, mysterious monikers — giving you 180+ starting points to find
                a name that feels authentically yours.
              </p>
            </div>

            {/* Twitch Rules */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Twitch Username Rules</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '✅', title: '4–25 Characters', desc: 'Twitch enforces a minimum of 4 and maximum of 25 characters. Too short is not allowed; too long hurts memorability.' },
                  { icon: '✅', title: 'Letters & Numbers', desc: 'Only A–Z (uppercase or lowercase), 0–9, and underscores are permitted. No spaces, hyphens, or special characters.' },
                  { icon: '✅', title: 'Underscores Allowed', desc: 'A single underscore ( _ ) is allowed. It can be used to separate words (e.g. Pixel_Slayer) but cannot start or end the name.' },
                  { icon: '❌', title: 'No Spaces or Symbols', desc: 'Spaces, hyphens (-), dots (.), @, and other symbols are not supported. They will be rejected on signup.' },
                  { icon: '❌', title: 'No Impersonation', desc: 'You cannot use a name that impersonates another streamer, brand, or public figure. Twitch can permanently ban such accounts.' },
                  { icon: '⚠️', title: 'Case Insensitive', desc: 'Twitch usernames are case-insensitive. "NinjaTV" and "ninjatv" are the same account. However, you can set a display name with preferred capitalization.' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <span>{item.icon}</span>{item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category breakdown */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">6 Twitch Name Style Categories</h2>
              <div className="space-y-4">
                {[
                  {
                    emoji: '🎮',
                    cat: 'Gaming',
                    desc: 'Names built for gamers — FPS players, RPG fans, and battle royale grinders. Think PixelSlayer, NoScopeKing, GlitchReaper. These names signal that you\'re here to play and you\'re serious about it. Perfect for game-specific streaming channels.',
                  },
                  {
                    emoji: '📡',
                    cat: 'Streamer',
                    desc: 'Names that lean into the streaming culture itself — JustVibing_TV, HypeTrainCrew, ClipIt_Or_Skip. These names work across any content type and signal that you\'re a content creator first, building a community around your personality.',
                  },
                  {
                    emoji: '😂',
                    cat: 'Funny',
                    desc: 'Self-aware, meme-coded names that attract viewers who want entertainment over competition — ImBadAtThis, BlameThePing, CatOnKeyboard. The best funny names are relatable. Everyone has blamed lag at some point.',
                  },
                  {
                    emoji: '🏆',
                    cat: 'Esports',
                    desc: 'Short, punchy, competitive handles — PhantomCarry, ClutchOrKick, SilentAce_. Ideal for ranked streamers, tournament participants, and content creators in competitive scenes like Valorant, CS2, LoL, and Apex Legends.',
                  },
                  {
                    emoji: '⛩️',
                    cat: 'Anime',
                    desc: 'Names drawn from anime culture — SenpaiNoticed, OmaeWaMou_, TitanSlayer_, UwUFinalBoss. Anime-themed Twitch channels have a dedicated and passionate audience. These names signal your tribe instantly.',
                  },
                  {
                    emoji: '🌑',
                    cat: 'Dark / Edgy',
                    desc: 'Mysterious, villain-coded, and brooding — VoidRifter, GrimReaper_TV, CursedStream_. This style is popular in horror game streaming, late-night content, and for personalities who lean into a darker, more intense persona.',
                  },
                ].map(item => (
                  <div key={item.cat} className="p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{item.emoji}</span>
                      <h3 className="font-semibold">{item.cat}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips for picking */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tips for Choosing Your Twitch Name</h2>
              <div className="space-y-3">
                {[
                  {
                    tip: 'Keep it under 15 characters if possible',
                    detail: 'Even though Twitch allows 25, shorter names are easier to remember, type in chat, and fit in overlays. Most top streamers have names under 12 characters.',
                  },
                  {
                    tip: 'Say it out loud before committing',
                    detail: 'Viewers recommend channels to friends verbally. "PhantomCarry" is instantly clear. "Ph4nt0mC4rry" causes confusion. If you have to spell it out, reconsider.',
                  },
                  {
                    tip: 'Avoid excessive numbers and l33tspeak',
                    detail: 'Names like "N1nj4xXx99" look dated and are hard to search. Numbers work well as a single suffix (e.g. Shadow99) but avoid swapping letters for numbers.',
                  },
                  {
                    tip: 'Check availability across platforms',
                    detail: 'Before settling on a name, check if it\'s available on YouTube, Twitter/X, Instagram, and TikTok too. Consistent branding across platforms is crucial for growth.',
                  },
                  {
                    tip: 'Think about your niche',
                    detail: 'If you\'re exclusively streaming horror games, a name like "HauntedLobby" is perfect. If you might branch out to other content types later, a more general name gives you flexibility.',
                  },
                  {
                    tip: 'Use underscores intentionally',
                    detail: 'An underscore can separate words cleanly (Silent_Ace) but two underscores look messy (__Username__). Use one at most, positioned in the middle of the name.',
                  },
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl bg-background/60">
                    <span className="text-primary font-bold flex-shrink-0 text-lg">💡</span>
                    <div>
                      <p className="font-semibold text-sm">{t.tip}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous Twitch names */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What We Can Learn from Top Streamers' Names</h2>
              <div className="space-y-3">
                {[
                  { name: 'Ninja', lesson: 'Short, punchy, one word. Universally recognizable, easy to search, works as a brand name on any platform. Zero ambiguity.' },
                  { name: 'xQc', lesson: 'Extremely short handle (3 chars with the "x" prefix) — memorable through sheer simplicity. Works better once you already have an audience.' },
                  { name: 'Pokimane', lesson: 'A blend of a personal nickname ("Poki") and "mane" — feels personal yet invented. Strikes the right balance between unique and pronounceable.' },
                  { name: 'DrLupo', lesson: 'A title (Dr) + a word (Lupo = wolf in Italian). Titles add personality and imply expertise or persona without being generic.' },
                  { name: 'TimTheTatman', lesson: 'Tells a story — Tim with a tattoo. Highly personalized, impossible to confuse with anyone else. Long but memorable because it\'s descriptive.' },
                  { name: 'Shroud', lesson: 'A single evocative word with dark, mysterious connotations. Works because it\'s unusual and conjures strong imagery. One syllable, impossible to misspell.' },
                ].map(item => (
                  <div key={item.name} className="flex gap-3 p-3 rounded-xl bg-background/60">
                    <code className="text-primary font-bold flex-shrink-0 text-sm bg-primary/10 px-2 py-1 rounded-lg h-fit">{item.name}</code>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.lesson}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How do I change my Twitch username?',
                    a: 'You can change your Twitch username once every 60 days. Go to your Twitch Settings → Account → Username. Note that changing your username can break existing links to your channel, so choose carefully before switching.',
                  },
                  {
                    q: 'Can I use spaces in my Twitch username?',
                    a: 'No. Twitch usernames do not support spaces. To separate words visually, use an underscore (_). For example, "Pixel Slayer" would need to be "Pixel_Slayer" or "PixelSlayer" as a single compound word.',
                  },
                  {
                    q: 'Does capitalization matter on Twitch?',
                    a: 'For login purposes, Twitch usernames are case-insensitive — "NinjaTV" and "ninjatv" are treated as the same account. However, you can set a preferred capitalization for your display name, which appears on your channel page and in chat.',
                  },
                  {
                    q: 'What if my chosen Twitch name is already taken?',
                    a: 'Try adding a number (e.g. ShadowFang99), a prefix (xShadowFang, TheShadowFang), or a suffix (ShadowFangTV, ShadowFangGG). You can also try slight variations or check if the existing account is inactive — Twitch has periodically released inactive usernames.',
                  },
                  {
                    q: 'Should my Twitch name match my YouTube or social media names?',
                    a: 'Yes, whenever possible. Consistent branding across Twitch, YouTube, Twitter/X, Instagram, and TikTok makes it much easier for fans to find you and for search engines to associate your content. Inconsistency fragments your audience.',
                  },
                  {
                    q: 'How long should a Twitch username be?',
                    a: 'Twitch\'s technical limit is 25 characters, but for branding purposes, aim for 8–15 characters. Shorter names are easier to type in chat, fit better in stream overlays and alerts, and are simpler for new viewers to remember after hearing your name once.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External links */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">Useful Twitch Resources</h2>
              <ul className="space-y-3">
                {[
                  {
                    href: 'https://www.twitch.tv',
                    label: 'Twitch — Live Streaming Platform',
                    desc: 'The official Twitch platform — sign up and use your generated name to create your channel.',
                  },
                  {
                    href: 'https://help.twitch.tv/s/article/username-change-login',
                    label: 'Twitch Username Rules — Official Help',
                    desc: 'Official Twitch documentation on username requirements, change limits, and display names.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Twitch_(service)',
                    label: 'Twitch — Wikipedia',
                    desc: 'History, growth, and cultural impact of Twitch as the dominant live streaming platform.',
                  },
                  {
                    href: 'https://www.streamlabs.com',
                    label: 'Streamlabs — Streaming Software',
                    desc: 'Free streaming software and tools to set up your Twitch channel alerts, overlays, and widgets.',
                  },
                ].map(r => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">↗</span>
                      <div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Related Tools */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all free text tools' },
                  { href: '/tools/agario-names', label: 'Agario Names Generator', sub: '80+ fancy names for Agar.io' },
                  { href: '/tools/wolf-name-generator', label: 'Wolf Name Generator', sub: '180+ cool wolf names' },
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic & more' },
                  { href: '/tools/random-word-generator', label: 'Random Word Generator', sub: 'Brainstorm name ideas' },
                  { href: '/tools/case-converter', label: 'Case Converter', sub: 'Uppercase, lowercase & more' },
                  { href: '/tools/slug-generator', label: 'Slug Generator', sub: 'URL-friendly text' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed text styles' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{l.label}</p>
                      <p className="text-xs text-muted-foreground">{l.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Twitch quick stats */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Twitch by the Numbers</h3>
              <div className="space-y-3">
                {[
                  { stat: '35M+', label: 'Daily active users' },
                  { stat: '7M+', label: 'Unique streamers per month' },
                  { stat: '2.5M', label: 'Concurrent viewers at peak' },
                  { stat: '140+', label: 'Game categories live right now' },
                  { stat: '2011', label: 'Year Twitch launched' },
                ].map(item => (
                  <div key={item.stat} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground text-xs">{item.label}</span>
                    <span className="font-bold text-sm text-primary">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top streamer name patterns */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Popular Name Patterns</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                {[
                  { pattern: '[Word] + GG',     example: 'ShadowGG, BladeGG' },
                  { pattern: '[Word] + TV',      example: 'PhantomTV, NightTV' },
                  { pattern: 'x + [Word] + x',   example: 'xNinjax, xFrostx' },
                  { pattern: 'Dr + [Word]',      example: 'DrLupo, DrSilver' },
                  { pattern: '[Word] + Pro',     example: 'AimPro, ClutchPro' },
                  { pattern: '[Word] + Plays',   example: 'ShadowPlays, AcePlays' },
                  { pattern: '[Name] + [Number]',example: 'Frost99, Blade77' },
                  { pattern: '[Word] + _',       example: 'Phantom_, Void_' },
                ].map(item => (
                  <div key={item.pattern} className="p-2 rounded-lg bg-background/50">
                    <p className="font-semibold text-foreground">{item.pattern}</p>
                    <p>{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick checklist */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Name Checklist</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Is it 4–25 characters?',
                  'Only letters, numbers, underscores?',
                  'Easy to say out loud?',
                  'Easy to spell from memory?',
                  'Available on Twitch?',
                  'Available on YouTube & socials?',
                  'Does it reflect your content?',
                  'Will it still fit in 2 years?',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">☐</span>
                    <span>{item}</span>
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
