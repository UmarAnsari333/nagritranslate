import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { WolfNameGeneratorTool } from '@/components/tools/wolf-name-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wolf Name Generator — 180+ Cool & Mythical Wolf Names',
  description: 'Generate 180+ cool wolf names across 6 categories: Pack Names, Lone Wolf, Mythology, Nature, Warrior, and Mystical. Personalize with your own name. Free, instant, no sign-up.',
  keywords: [
    'wolf name generator', 'cool wolf names', 'wolf names', 'wolf name ideas',
    'mythical wolf names', 'fantasy wolf names', 'wolf pack names', 'lone wolf names',
    'warrior wolf names', 'mystical wolf names', 'wolf name for games', 'wolf name for roleplay',
    'wolf name creator', 'generate wolf name', 'best wolf names', 'wolf name list',
    'wolf name meanings', 'unique wolf names', 'dark wolf names', 'cute wolf names',
    'fenrir names', 'werewolf names', 'wolf character names', 'wolf oc names',
    'animal name generator', 'fantasy animal names', 'wolf name finder',
  ],
  openGraph: {
    title: 'Wolf Name Generator — 180+ Cool & Mythical Wolf Names',
    description: 'Generate cool wolf names for games, roleplay, OCs, and writing. Pack, Lone Wolf, Mythology, Nature, Warrior, Mystical — 6 categories, instant copy.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wolf Name Generator — 180+ Cool & Mythical Wolf Names',
    description: 'Generate cool wolf names for games, roleplay & writing. 6 themed categories, instant copy. Free.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/wolf-name-generator',
  },
}

export default function WolfNameGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <span className="text-3xl" role="img" aria-label="wolf">🐺</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Wolf Name Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Generate 180+ cool, mythical, and fierce wolf names across 6 themed categories —
            Pack, Lone Wolf, Mythology, Nature, Warrior, and Mystical.
            Perfect for games, roleplay, OCs, and creative writing.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <WolfNameGeneratorTool />
            </div>

            {/* What is a Wolf Name */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Makes a Great Wolf Name?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A great wolf name captures the primal power, wild spirit, and mystique of one of nature's most iconic predators.
                Whether you need a name for a game character, a fantasy story OC, a roleplay persona, or simply for fun,
                the best wolf names evoke strength, speed, and the untamed wilderness.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Wolf names often draw from elements of nature — <strong>Moon, Storm, Shadow, Frost</strong> —
                combined with physical traits — <strong>Fang, Claw, Pelt, Mane</strong> — or mythological
                sources like the Norse <strong>Fenrir</strong> or Aztec <strong>Xolotl</strong>.
                The result is a name that instantly communicates the wolf's personality, role, or power.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our generator covers all these traditions, giving you access to 180+ curated wolf names across
                six distinct categories, each with its own thematic feel — from fierce pack warriors to solitary
                shadow wolves, and from ancient mythology to mystical spirit wolves.
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">6 Wolf Name Categories Explained</h2>
              <div className="space-y-4">
                {[
                  {
                    emoji: '🐾',
                    cat: 'Pack Names',
                    desc: 'Names for wolves that run with a pack — bold, hierarchical, and social. Think Shadowpaw, Ironjaw, Steelhide. These names signal status within the pack and are perfect for group-based fantasy settings or tabletop RPGs.',
                  },
                  {
                    emoji: '🌑',
                    cat: 'Lone Wolf',
                    desc: 'Dark, mysterious names for solitary wolves who roam alone. Names like Nightshade, Voidwalker, and Ghostpelt evoke isolation, danger, and a brooding independence. Ideal for anti-hero characters in games or fiction.',
                  },
                  {
                    emoji: '⚡',
                    cat: 'Mythological',
                    desc: 'Names drawn from world mythology — Fenrir (Norse), Amarok (Inuit), Lycaon (Greek), Xolotl (Aztec), Lupa (Roman). These names carry centuries of storytelling weight and are perfect for powerful, legendary characters.',
                  },
                  {
                    emoji: '🌿',
                    cat: 'Nature',
                    desc: 'Wolf names rooted in the natural world — Moonhowl, Frostedge, Riverstone, Windrunner. These reflect the wolf\'s deep bond with the wilderness, seasons, and elements. Great for druid characters or nature-themed settings.',
                  },
                  {
                    emoji: '⚔️',
                    cat: 'Warrior',
                    desc: 'Fierce, combat-ready names for wolves who live to fight — Ravager, Bloodmoon, Berserker, Ironpelt. These names are high-energy and aggressive, perfect for battle arenas, shooter game usernames, and warrior characters.',
                  },
                  {
                    emoji: '✨',
                    cat: 'Mystical',
                    desc: 'Ethereal, magic-infused wolf names — Moonsinger, Astralwolf, Runepelt, Soulfang. These names hint at supernatural powers, ancient magic, or spiritual connections. Perfect for wizards, shamans, and spirit wolf companions.',
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

            {/* Where to Use Wolf Names */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Wolf Names</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🎮', title: 'Gaming Usernames', desc: 'Stand out in Minecraft, Roblox, Fortnite, Apex Legends, World of Warcraft, and other online games with a fierce wolf username.' },
                  { icon: '📖', title: 'Fantasy Writing & Fiction', desc: 'Give your wolf characters, werewolves, or spirit animals the perfect name that fits the world you\'re building.' },
                  { icon: '🎲', title: 'Tabletop RPG & D&D', desc: 'Name your ranger\'s wolf companion, a druid shapeshifter, or an entire wolf-based faction with authentically styled names.' },
                  { icon: '🎭', title: 'Roleplay & OC Characters', desc: 'Create original wolf characters (OCs) for wolf RP servers, Warrior Cats-style packs, or Animal Jam communities.' },
                  { icon: '📱', title: 'Social Media & Usernames', desc: 'Use a cool wolf name as a unique username on Instagram, Discord, TikTok, or any other social platform.' },
                  { icon: '🐕', title: 'Pet Names', desc: 'Name your dog, especially a husky, malamute, or German Shepherd, with a powerful and fitting wolf-inspired name.' },
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

            {/* Famous Wolf Names */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Famous Wolf Names in Mythology & Fiction</h2>
              <div className="space-y-3">
                {[
                  { name: 'Fenrir', origin: 'Norse Mythology', desc: 'The monstrous wolf son of Loki, bound by the gods until Ragnarök. One of the most powerful wolf figures in mythology.' },
                  { name: 'Amarok', origin: 'Inuit Mythology', desc: 'The great wolf spirit of Inuit legend, said to devour those who hunt alone at night. Symbol of the untamed Arctic wild.' },
                  { name: 'Lycaon', origin: 'Greek Mythology', desc: 'King of Arcadia, transformed into a wolf by Zeus as punishment for serving human flesh. The origin of the word "lycanthrope."' },
                  { name: 'Lupa', origin: 'Roman Mythology', desc: 'The she-wolf who suckled Romulus and Remus, founders of Rome. A symbol of fierce maternal protection.' },
                  { name: 'Geri & Freki', origin: 'Norse Mythology', desc: 'Odin\'s two wolf companions whose names mean "the ravenous" and "the greedy." They accompany the Allfather into battle.' },
                  { name: 'Ghost', origin: 'Game of Thrones', desc: 'Jon Snow\'s albino direwolf — silent, fierce, and loyal. One of the most beloved fictional wolves in modern pop culture.' },
                  { name: 'Akela', origin: 'The Jungle Book', desc: 'The great lone wolf and leader of the wolf pack in Rudyard Kipling\'s classic tale. His name means "alone" in Hindi.' },
                  { name: 'White Fang', origin: 'Jack London', desc: 'The half-wolf, half-dog protagonist of Jack London\'s 1906 novel — a raw exploration of instinct, wilderness, and humanity.' },
                ].map(item => (
                  <div key={item.name} className="flex gap-3 p-3 rounded-xl bg-background/60">
                    <span className="text-primary font-bold flex-shrink-0 text-lg">🐺</span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-sm">{item.name}</span>
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{item.origin}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips for naming */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tips for Choosing the Perfect Wolf Name</h2>
              <div className="space-y-3">
                {[
                  { tip: 'Match the name to the personality', detail: 'A gentle, protective wolf suits "Silverguard" or "Warmheart," while an aggressive hunter fits "Ravager" or "Bloodmoon." Let personality guide the category.' },
                  { tip: 'Combine nature elements with body parts', detail: 'The classic wolf name formula: nature word (Moon, Storm, Ice) + body feature (Fang, Claw, Pelt, Mane). This formula has produced thousands of memorable wolf names.' },
                  { tip: 'Draw from real mythology', detail: 'Mythological names like Fenrir, Amarok, or Lycaon instantly add depth and gravitas to a wolf character. They also make for great conversation starters.' },
                  { tip: 'Keep it pronounceable', detail: 'Even the coolest-looking name loses impact if no one can say it. Aim for 2–3 syllables that flow naturally when spoken aloud.' },
                  { tip: 'Consider the wolf\'s role', detail: 'An alpha pack leader needs an authoritative name (Warchief, Ironjaw). A mystic wolf needs something ethereal (Moonsinger, Starweaver). A scout needs agility in the name (Swiftpaw, Windrunner).' },
                  { tip: 'Use our personalization feature', detail: 'Type your own name or a keyword into the input field to get a wolf name derived from your identity — a fun way to create a truly personal wolf alter-ego.' },
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

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How does the wolf name generator work?',
                    a: 'Our generator draws from a curated database of 180+ wolf names across six themed categories: Pack Names, Lone Wolf, Mythology, Nature, Warrior, and Mystical. You can filter by category, regenerate for a fresh set, or enter your own name to get a personalized wolf name derived algorithmically from your input.',
                  },
                  {
                    q: 'What are good wolf names for games like Minecraft or Roblox?',
                    a: 'For games, shorter and punchier names work best: Shadowfang, Frostclaw, Nighthowl, Stormback. Warrior and Lone Wolf categories are especially popular for gaming usernames since they project strength and dominance. Try regenerating a few times to find the perfect fit.',
                  },
                  {
                    q: 'What is the most famous wolf name in mythology?',
                    a: 'Fenrir from Norse mythology is arguably the most famous wolf name worldwide. A monstrous wolf and son of Loki, Fenrir was prophesied to swallow Odin at Ragnarök. Other famous mythological wolf names include Amarok (Inuit), Lycaon (Greek), and Lupa (Roman).',
                  },
                  {
                    q: 'Can I use these names for my D&D or tabletop RPG campaign?',
                    a: 'Absolutely. Our wolf names are perfect for D&D ranger companions, druid wild shapes, dire wolf mounts, and wolf-themed factions or clans. The Mythological category in particular contains names that carry historical weight and storytelling depth.',
                  },
                  {
                    q: 'What makes a wolf name sound authentic?',
                    a: 'Authentic wolf names typically combine natural elements (Moon, Storm, Frost, Ash) with physical wolf features (Fang, Claw, Pelt, Mane, Howl). You can also draw from real wolf languages: "Ulf" in Norse means wolf, "Lupus" in Latin, "Lobo" in Spanish. Our names follow these organic conventions.',
                  },
                  {
                    q: 'Are these names free to use for my creative work?',
                    a: 'Yes — all names generated here are completely free to use for games, stories, roleplay, OC characters, usernames, or any personal creative project. No attribution required.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External Resources */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">Learn More About Wolves</h2>
              <ul className="space-y-3">
                {[
                  {
                    href: 'https://en.wikipedia.org/wiki/Wolf_in_folklore',
                    label: 'Wolf in Folklore — Wikipedia',
                    desc: 'A comprehensive overview of wolf symbolism and mythology across world cultures.',
                  },
                  {
                    href: 'https://www.nationalgeographic.com/animals/mammals/facts/gray-wolf',
                    label: 'Gray Wolf Facts — National Geographic',
                    desc: 'Biology, behavior, habitat, and conservation status of the gray wolf.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Fenrir',
                    label: 'Fenrir — Wikipedia',
                    desc: 'Detailed history and mythology behind the most famous wolf in Norse legend.',
                  },
                  {
                    href: 'https://www.worldwildlife.org/species/gray-wolf',
                    label: 'Gray Wolf — World Wildlife Fund',
                    desc: 'Conservation efforts and information about wolf populations around the world.',
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
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic & more' },
                  { href: '/tools/random-word-generator', label: 'Random Word Generator', sub: 'Creative brainstorming words' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed text styles' },
                  { href: '/tools/zalgo-text-generator', label: 'Zalgo Text Generator', sub: 'Creepy dripping text' },
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', sub: 'Handwriting styles' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text', sub: 'Full-width aesthetic styles' },
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

            {/* Popular Wolf Names Showcase */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Popular Wolf Names</h3>
              <div className="space-y-2 text-sm font-mono">
                {[
                  'Fenrir', 'Shadowfang', 'Moonhowl', 'Stormclaw',
                  'Nightshade', 'Frostmane', 'Bloodmoon', 'Astralwolf',
                  'Ironjaw', 'Ghostpelt',
                ].map((n, i) => (
                  <div key={i} className="p-2 rounded-lg bg-background/50 text-xs">🐺 {n}</div>
                ))}
              </div>
            </div>

            {/* Wolf Facts */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Wolf Facts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Wolves can run up to 38 mph in short bursts',
                  'A wolf pack typically has 5–10 members',
                  'Wolves howl to communicate across distances up to 10 miles',
                  'The alpha wolf is usually the breeding pair — not always the strongest',
                  '"Lupus" is the Latin word for wolf, giving us "lupine" and "lycanthrope"',
                  'Wolves have been featured in mythology on every inhabited continent',
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">●</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wolf Name Etymology */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Wolf in World Languages</h3>
              <div className="space-y-1.5 text-sm">
                {[
                  { lang: 'Norse', word: 'Úlfr' },
                  { lang: 'Latin', word: 'Lupus' },
                  { lang: 'Greek', word: 'Λύκος (Lýkos)' },
                  { lang: 'German', word: 'Wolf' },
                  { lang: 'Slavic', word: 'Volk (Волк)' },
                  { lang: 'Japanese', word: 'Ōkami (狼)' },
                  { lang: 'Arabic', word: 'Dhi\'b (ذئب)' },
                  { lang: 'Gaelic', word: 'Mac Tíre' },
                ].map(item => (
                  <div key={item.lang} className="flex justify-between items-center py-1 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground text-xs">{item.lang}</span>
                    <span className="font-semibold text-xs">{item.word}</span>
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
