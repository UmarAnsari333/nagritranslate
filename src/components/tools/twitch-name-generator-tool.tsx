'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RefreshCw, AlertCircle } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

// ─── Twitch Name Data ─────────────────────────────────────────────────────────

const TWITCH_NAMES = {
  gaming: [
    'PixelSlayer', 'NightRaider99', 'VaultHunter_X', 'GlitchReaper', 'NoScopeKing',
    'RespawnGod', 'CtrlAltDefeat', 'FragMachine', 'SpawnCamper', 'LootGoblin',
    'CritHitKing', 'ZeroDeaths', 'XPFarmer', 'MapHacker', 'LastStanding',
    'InfiniteAmmo', 'GodModePro', 'OneShot_Won', 'AimTrainer99', 'HeadshotHero',
    'DropZoneKing', 'RaidBoss_X', 'DungeonCrawlr', 'GrindSetGo', 'MetaBreaker',
    'ComboBreaker', 'FinalBossIRL', 'SkipCutscene', 'AltF4Andy', 'TouchGrassLater',
  ],
  streamer: [
    'JustVibing_TV', 'ChaosContent', 'SnackTimeLive', 'ClipIt_Or_Skip', 'ViewerBait',
    'SubOrRaid', 'EmoteOnly_', 'PogChampion', 'HypeTrainCrew', 'ChatObeyMe',
    'F_In_Chat', 'PrimeLurker', 'DropAFollow', 'BitDonator', 'RaidAlert_',
    'BanHammerTime', 'ChannelPoints', 'TwitchDrops_', 'ModeratorMode', 'StreamSniper',
    'WatchPartyHype', 'LaylaLive_TV', 'MaxxedOut_TV', 'CozyCasterr', 'LateNightLive',
    'MorningStream_', 'WeekendWarrior', 'IRL_AndChill', 'JustChatting_', 'VodReview_',
  ],
  funny: [
    'NotStreamingYet', 'ImBadAtThis', 'PlsNoClip', 'TryHard_Dad', 'WrongButtonGuy',
    'NeverGonnaGG', 'Lag_Excuse', 'BlameThePing', 'Uninstalling_', 'RetiredPro_Lol',
    'CoffeePowered_', 'SleepyStreamer', 'OneMoreGame__', 'JustFiveMinutes', 'NeedMoreMonitors',
    'CarpalTunnel_', 'GamerChair_Pro', 'SnackBreakEvery5', 'MomCameIn_', 'CatOnKeyboard',
    'SendHelpPlease', 'TooOld4This', 'WifeSaidNoMore', 'BossIsWatching', 'AlmostDied_IRL',
    'DisconnectedAgn', 'PatchNotesHurt', 'NerfPleaseNow', 'GithubIssue69', 'IToldYouSo_',
  ],
  esports: [
    'PhantomCarry', 'SilentAce_', 'OpticFlick', 'ZeroLatency_', 'PeakPerformance',
    'ClutchOrKick', 'ELO_Climber', 'RankedGrinder', 'ProScrimmage', 'TourneyReady',
    'TopFragger_', 'EcoRound_Win', 'PistolRound_', 'FullBuy_Always', 'SpikeDefused',
    'PlantAndRun', 'AntiStrat_Pro', 'ScrimReview_', 'DraftKing_X', 'MetaPlayer_1',
    'CoachMode_On', 'VoiceComm_Off', 'FlashbangKing', 'SoloQueueHero', 'CarryOrFeed',
    'ObjectiveBot', 'ContestPoint', 'SiegeBreaker_', 'ValorPoint_X', 'Fragdelity',
  ],
  anime: [
    'SenpaiNoticed', 'WaifuProtector', 'ChunibyCaster', 'IsekaIRL_', 'NarutoRun_TV',
    'GenkiDama_Go', 'OmaeWaMou_', 'NaniThisGame', 'KawaiiRager', 'YamiStreamer',
    'DattebayoLive', 'ShingekiCast', 'MangaReader_', 'OtakuGamer_', 'AnimeOpenings',
    'BladeInHand_', 'ShinobiPath_', 'HokageMode_', 'TitanSlayer_', 'DemonKing_99',
    'SoulReaper_X', 'BanchouVibes', 'YandereMode_', 'TsundereGG_', 'UwUFinalBoss',
    'KamiStrategist', 'NiiSanGaming', 'SakuraPetal_', 'OniichanPlays', 'AkumaCarry',
  ],
  dark: [
    'VoidRifter', 'NullPointer_', 'ShadowBanned_', 'GrimReaper_TV', 'AbyssalGamer',
    'Hex_Protocol', 'DarkMatterX', 'NecroCarry_', 'CorruptedSave', 'OverclockDeath',
    'GlitchDemon_', 'NightCrawlr_', 'PhantomByte', 'CursedStream_', 'VoidWalker_TV',
    'BlackScreened', 'DeathScreen_X', 'EternalRespawn', 'DarkSideMain_', 'SoullessGrind',
    'ObsidianEdge', 'ReaperQueue_', 'HauntedLobby', 'GraveDiggr_', 'UnderworldTV',
    'ShadowMerge_', 'NullZoneCarry', 'VoidEcho_X', 'GrimPixel_', 'DarkPatternX',
  ],
}

type Category = 'all' | 'gaming' | 'streamer' | 'funny' | 'esports' | 'anime' | 'dark'

const CATEGORY_CONFIG: { id: Category; label: string; emoji: string; desc: string }[] = [
  { id: 'all',      label: 'All',          emoji: '🟣', desc: 'All categories' },
  { id: 'gaming',   label: 'Gaming',       emoji: '🎮', desc: 'For gamers & FPS players' },
  { id: 'streamer', label: 'Streamer',     emoji: '📡', desc: 'Content creator vibes' },
  { id: 'funny',    label: 'Funny',        emoji: '😂', desc: 'Meme & comedy usernames' },
  { id: 'esports',  label: 'Esports',      emoji: '🏆', desc: 'Competitive & ranked' },
  { id: 'anime',    label: 'Anime',        emoji: '⛩️', desc: 'Anime & weeb culture' },
  { id: 'dark',     label: 'Dark / Edgy',  emoji: '🌑', desc: 'Mysterious & edgy vibes' },
]

// ─── Personalizer ─────────────────────────────────────────────────────────────

const PREFIX_WORDS = ['Pro', 'Real', 'The', 'Just', 'Only', 'Itz', 'Im', 'x', 'xx', 'YT', 'TV', 'Live']
const SUFFIX_WORDS = ['TV', 'GG', 'Pro', 'Live', 'XD', '99', 'X', '_', 'gg', 'Plays', 'Gaming', 'Stream']
const CONNECTOR_WORDS = ['The', 'Of', 'And', 'Not', 'Or', 'But', '_']

function twitchSafe(name: string): string {
  // Remove non-alphanumeric except underscore, trim to 25 chars
  return name.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 25)
}

function personalizeNames(input: string): string[] {
  if (!input.trim()) return []
  const base = twitchSafe(input.trim().replace(/\s+/g, '_'))
  if (base.length < 2) return []
  const seed = [...input].reduce((s, c) => s + c.charCodeAt(0), 0)
  const results: string[] = []
  const pfx = PREFIX_WORDS[seed % PREFIX_WORDS.length]
  const sfx = SUFFIX_WORDS[(seed * 3) % SUFFIX_WORDS.length]
  const sfx2 = SUFFIX_WORDS[(seed * 7) % SUFFIX_WORDS.length]
  const connector = CONNECTOR_WORDS[(seed * 11) % CONNECTOR_WORDS.length]

  const candidates = [
    twitchSafe(`${pfx}${base}`),
    twitchSafe(`${base}${sfx}`),
    twitchSafe(`${base}_${sfx2}`),
    twitchSafe(`${base}${connector}Games`),
    twitchSafe(`${base}Plays`),
    twitchSafe(`${base}Stream`),
    twitchSafe(`x${base}x`),
    twitchSafe(`${base}TV`),
  ]
  // Only include names 4–25 chars, deduplicate
  const seen = new Set<string>()
  for (const c of candidates) {
    if (c.length >= 4 && c.length <= 25 && !seen.has(c)) {
      seen.add(c)
      results.push(c)
    }
  }
  return results.slice(0, 5)
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = (seed * (i + 13) * 31337) % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function isTwitchValid(name: string): boolean {
  return /^[a-zA-Z0-9_]{4,25}$/.test(name)
}

// ─── Component ────────────────────────────────────────────────────────────────

const EXAMPLES = ['Alex', 'Shadow', 'Ninja', 'Blaze', 'Storm', 'Ace']
const NAMES_PER_VIEW = 30

export function TwitchNameGeneratorTool() {
  const [input, setInput]       = useState('')
  const [category, setCategory] = useState<Category>('all')
  const [seed, setSeed]         = useState(() => Math.floor(Math.random() * 99999))
  const [copied, setCopied]     = useState<string | null>(null)

  const poolByCategory = useCallback((): string[] => {
    if (category === 'all') return Object.values(TWITCH_NAMES).flat()
    return TWITCH_NAMES[category as keyof typeof TWITCH_NAMES] ?? []
  }, [category])

  const displayNames = useCallback((): string[] => {
    const shuffled = shuffle(poolByCategory(), seed).slice(0, NAMES_PER_VIEW)
    const personal = personalizeNames(input)
    const combined = [...personal, ...shuffled.filter(n => !personal.includes(n))]
    return combined.slice(0, NAMES_PER_VIEW)
  }, [poolByCategory, seed, input])

  const names = displayNames()
  const personalSuggestions = personalizeNames(input)
  const inputValid = input.trim().length === 0 || input.trim().length >= 2

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(null), 2000)
      toast({ title: 'Copied!', description: `"${text}" copied — paste it into Twitch.` })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  const regenerate = () => setSeed(Math.floor(Math.random() * 99999))

  return (
    <div className="space-y-6 w-full min-w-0">

      {/* Quick examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Try with your name:</p>
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
        <label className="text-sm font-medium">Your Name or Keyword (optional)</label>
        <input
          type="text"
          placeholder="Enter your name to get personalized suggestions…"
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength={20}
          className="w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />

        {/* Twitch rules reminder */}
        <p className="text-xs text-muted-foreground">
          Twitch usernames: 4–25 characters, letters, numbers and underscores only.
        </p>

        {/* Personalized suggestions */}
        {input.trim().length >= 2 && (
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs font-semibold text-primary mb-2">Personalized suggestions for "{input}":</p>
            <div className="flex flex-wrap gap-2">
              {personalSuggestions.map(s => (
                <button
                  key={s}
                  onClick={() => copy(s)}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors font-mono font-semibold"
                >
                  {s}
                  {copied === s
                    ? <Check className="w-3 h-3 text-green-500" />
                    : <Copy className="w-3 h-3 text-primary/60" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORY_CONFIG.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            title={cat.desc}
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

      {/* Regenerate */}
      <button
        onClick={regenerate}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <RefreshCw className="w-4 h-4" />
        Generate New Names
      </button>

      {/* Name grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {names.map((name, i) => {
          const valid = isTwitchValid(name)
          const isPersonal = personalSuggestions.includes(name)
          return (
            <div
              key={`${name}-${i}`}
              className={`group p-4 rounded-xl border transition-all cursor-pointer ${
                isPersonal
                  ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50'
                  : 'bg-gradient-to-br from-muted/20 to-muted/5 hover:border-primary/30 hover:from-primary/5 hover:to-primary/10'
              }`}
              onClick={() => copy(name)}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="font-bold text-sm leading-snug break-all block">{name}</span>
                  <span className="text-[10px] text-muted-foreground">{name.length} chars</span>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {!valid && (
                    <span title="May not meet Twitch requirements">
                      <AlertCircle className="w-3 h-3 text-amber-500" />
                    </span>
                  )}
                  {isPersonal && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">Personalized</span>
                  )}
                  <button
                    onClick={e => { e.stopPropagation(); copy(name) }}
                    className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full transition-all ${
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
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Showing {names.length} Twitch name ideas — click any name to copy
      </p>
    </div>
  )
}
