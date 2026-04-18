'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

// ─── Wolf Name Data ────────────────────────────────────────────────────────────

const WOLF_NAMES = {
  pack: [
    'Shadowpaw', 'Ironjaw', 'Stormfang', 'Ashclaw', 'Steelhide',
    'Embercrest', 'Frostmane', 'Darkwhisper', 'Silverback', 'Thunderstep',
    'Bloodtrail', 'Dustrunner', 'Nighthowl', 'Swiftfang', 'Boldcrest',
    'Grimshaw', 'Coldmoon', 'Wolfcrown', 'Fiereclaw', 'Stoneback',
    'Ravenpelt', 'Goldfang', 'Duskrunner', 'Moonwalker', 'Graypaw',
    'Alderpelt', 'Birchstone', 'Cedarpaw', 'Elmcrest', 'Fernwhisker',
  ],
  loWolf: [
    'Nightshade', 'Voidwalker', 'Ashenwulf', 'Grimthorn', 'Silentclaw',
    'Ebonstrike', 'Hollowfang', 'Ghostpelt', 'Shaderunner', 'Darkmere',
    'Solitaire', 'Eclipsefang', 'Vexmoor', 'Cursedpaw', 'Wraithclaw',
    'Ravenmyst', 'Deathwhisper', 'Soulhowl', 'Obsidian', 'Blackthorn',
    'Mistwalker', 'Dusk', 'Hex', 'Omen', 'Rune',
    'Phantom', 'Specter', 'Haunt', 'Shade', 'Gloom',
  ],
  mythological: [
    'Fenrir', 'Amarok', 'Skoll', 'Hati', 'Lupa',
    'Lycaon', 'Geri', 'Freki', 'Romulus', 'Remus',
    'Wepwawet', 'Xolotl', 'Barghest', 'Fenrisulfr', 'Managarm',
    'Orthos', 'Cerberus', 'Laelaps', 'Actaeon', 'Callisto',
    'Ulfhedinn', 'Berserkir', 'Valki', 'Jotunn', 'Ymir',
    'Loki', 'Thor', 'Odin', 'Tyr', 'Baldur',
  ],
  nature: [
    'Moonhowl', 'Frostedge', 'Stormcaller', 'Riverstone', 'Snowmane',
    'Willowshade', 'Thundercloud', 'Mistfall', 'Sunpeak', 'Rainwhisper',
    'Iceridge', 'Windrunner', 'Firetail', 'Earthpaw', 'Leafcrest',
    'Oakenback', 'Pineclaw', 'Cedarpelt', 'Mosswhisker', 'Briarfang',
    'Crystalmoon', 'Cloverfoot', 'Ashwood', 'Birchpelt', 'Fernleap',
    'Dawnlight', 'Twilight', 'Emberglow', 'Sunshadow', 'Nightfall',
  ],
  warrior: [
    'Ravager', 'Ironpelt', 'Warfang', 'Bloodmoon', 'Battleclaw',
    'Siegebreaker', 'Skullhide', 'Bonecrush', 'Vanguard', 'Marauder',
    'Berserker', 'Conqueror', 'Destroyer', 'Hellhound', 'Warchief',
    'Deathmarch', 'Ravenfang', 'Slayclaw', 'Ruinpelt', 'Grimwar',
    'Ironblood', 'Steelclaw', 'Stormborn', 'Thunderbite', 'Fiercemane',
    'Slayer', 'Crusher', 'Feral', 'Savage', 'Predator',
  ],
  mystical: [
    'Moonsinger', 'Starweaver', 'Dreamwalker', 'Spiritclaw', 'Astralwolf',
    'Voidbane', 'Runepelt', 'Arcanefang', 'Celestia', 'Lunarwhisper',
    'Etherwind', 'Shadowweave', 'Soulfang', 'Mysticmane', 'Wraithborn',
    'Gloomweaver', 'Fatemancer', 'Soulbinder', 'Cosmicpaw', 'Starbane',
    'Eclipseclaw', 'Astralhowl', 'Voidmane', 'Nebulaback', 'Galaxyfang',
    'Prophecy', 'Oracle', 'Seer', 'Vision', 'Omen',
  ],
}

type Category = 'all' | 'pack' | 'loWolf' | 'mythological' | 'nature' | 'warrior' | 'mystical'

const CATEGORY_CONFIG: { id: Category; label: string; emoji: string; desc: string }[] = [
  { id: 'all',          label: 'All Names',    emoji: '🐺', desc: 'All wolf name categories' },
  { id: 'pack',         label: 'Pack Names',   emoji: '🐾', desc: 'For wolves in a pack' },
  { id: 'loWolf',       label: 'Lone Wolf',    emoji: '🌑', desc: 'Solitary, shadowy names' },
  { id: 'mythological', label: 'Mythology',    emoji: '⚡', desc: 'From legends & lore' },
  { id: 'nature',       label: 'Nature',       emoji: '🌿', desc: 'Forest, moon & elements' },
  { id: 'warrior',      label: 'Warrior',      emoji: '⚔️', desc: 'Fierce battle names' },
  { id: 'mystical',     label: 'Mystical',     emoji: '✨', desc: 'Magic & spirit wolves' },
]

// Name personalizer: generate wolf name from user input
function personalizeWolfName(input: string): string {
  if (!input.trim()) return ''
  const prefixes = ['Shadow', 'Storm', 'Moon', 'Iron', 'Dark', 'Frost', 'Fire', 'Silver', 'Night', 'Ash', 'Thunder', 'Raven', 'Blood', 'Ghost', 'Wild']
  const suffixes = ['fang', 'claw', 'pelt', 'mane', 'howl', 'stride', 'walker', 'back', 'paw', 'whisper', 'breath', 'heart', 'soul', 'eye', 'born']
  const seed = [...input].reduce((s, c) => s + c.charCodeAt(0), 0)
  const prefix = prefixes[seed % prefixes.length]
  const suffix = suffixes[(seed * 7 + input.length) % suffixes.length]
  return `${prefix}${suffix}`
}

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = (seed * (i + 7) * 31337) % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Component ────────────────────────────────────────────────────────────────

const EXAMPLES = ['Luna', 'Shadow', 'Blaze', 'Frost', 'Storm', 'Hunter']
const NAMES_PER_VIEW = 30

export function WolfNameGeneratorTool() {
  const [input, setInput]       = useState('')
  const [category, setCategory] = useState<Category>('all')
  const [seed, setSeed]         = useState(() => Math.floor(Math.random() * 99999))
  const [copied, setCopied]     = useState<string | null>(null)

  const poolByCategory = useCallback((): string[] => {
    if (category === 'all') {
      return Object.values(WOLF_NAMES).flat()
    }
    return WOLF_NAMES[category as keyof typeof WOLF_NAMES] ?? []
  }, [category])

  const names = useCallback((): string[] => {
    const pool = shuffle(poolByCategory(), seed)
    const results = pool.slice(0, NAMES_PER_VIEW)
    const personal = personalizeWolfName(input)
    if (personal && !results.includes(personal)) {
      results.unshift(personal)
    }
    return results
  }, [poolByCategory, seed, input])

  const displayNames = names()

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(null), 2000)
      toast({ title: 'Copied!', description: `"${text}" copied to clipboard.` })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  const regenerate = () => setSeed(Math.floor(Math.random() * 99999))

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Quick examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Personalize with your name:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex}
              onClick={() => setInput(ex)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Name / Keyword (optional)</label>
        <input
          type="text"
          placeholder="Enter a name to get a personalized wolf name…"
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength={30}
          className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        {input.trim() && (
          <p className="text-xs text-muted-foreground">
            Your wolf name: <span className="font-bold text-foreground">{personalizeWolfName(input)}</span>
          </p>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORY_CONFIG.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              category === cat.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Regenerate button */}
      <button
        onClick={regenerate}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <RefreshCw className="w-4 h-4" />
        Generate New Names
      </button>

      {/* Names grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayNames.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group p-4 rounded-xl border bg-gradient-to-br from-muted/20 to-muted/5 hover:border-primary/30 hover:from-primary/5 hover:to-primary/10 transition-all cursor-pointer"
            onClick={() => copy(name)}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-sm leading-snug break-all">{name}</span>
              <button
                onClick={e => { e.stopPropagation(); copy(name) }}
                className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full transition-all flex-shrink-0 ${
                  copied === name
                    ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {copied === name
                  ? <><Check className="w-2.5 h-2.5" /> Copied</>
                  : <><Copy className="w-2.5 h-2.5" /> Copy</>}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Showing {displayNames.length} wolf names — click any name to copy it
      </p>
    </div>
  )
}
