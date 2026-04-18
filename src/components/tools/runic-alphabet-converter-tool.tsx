'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, X, ArrowLeftRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// ─── Types ────────────────────────────────────────────────────────────────────

type RuneSystem = 'elder-futhark' | 'younger-futhark' | 'anglo-saxon'
type Direction  = 'to-runic' | 'to-latin'

interface RuneEntry {
  rune:    string
  latin:   string
  name:    string
  meaning: string
}

// ─── Elder Futhark (24 runes, c. 150–800 AD) ─────────────────────────────────

const ELDER_FUTHARK: RuneEntry[] = [
  { rune: 'ᚠ', latin: 'f',  name: 'Fehu',     meaning: 'Cattle, wealth' },
  { rune: 'ᚢ', latin: 'u',  name: 'Uruz',     meaning: 'Aurochs, strength' },
  { rune: 'ᚦ', latin: 'th', name: 'Thurisaz', meaning: 'Giant, thorn' },
  { rune: 'ᚨ', latin: 'a',  name: 'Ansuz',    meaning: 'God, mouth' },
  { rune: 'ᚱ', latin: 'r',  name: 'Raidho',   meaning: 'Ride, journey' },
  { rune: 'ᚲ', latin: 'k',  name: 'Kaunan',   meaning: 'Torch, fire' },
  { rune: 'ᚷ', latin: 'g',  name: 'Gebo',     meaning: 'Gift' },
  { rune: 'ᚹ', latin: 'w',  name: 'Wunjo',    meaning: 'Joy, glory' },
  { rune: 'ᚺ', latin: 'h',  name: 'Hagalaz',  meaning: 'Hail, disruption' },
  { rune: 'ᚾ', latin: 'n',  name: 'Naudiz',   meaning: 'Need, necessity' },
  { rune: 'ᛁ', latin: 'i',  name: 'Isaz',     meaning: 'Ice, stillness' },
  { rune: 'ᛃ', latin: 'j',  name: 'Jera',     meaning: 'Year, harvest' },
  { rune: 'ᛇ', latin: 'ae', name: 'Eihwaz',   meaning: 'Yew tree, endurance' },
  { rune: 'ᛈ', latin: 'p',  name: 'Pertho',   meaning: 'Mystery, fate' },
  { rune: 'ᛉ', latin: 'z',  name: 'Algiz',    meaning: 'Elk, protection' },
  { rune: 'ᛊ', latin: 's',  name: 'Sowilo',   meaning: 'Sun, victory' },
  { rune: 'ᛏ', latin: 't',  name: 'Tiwaz',    meaning: 'Tyr, honor' },
  { rune: 'ᛒ', latin: 'b',  name: 'Berkanan', meaning: 'Birch, growth' },
  { rune: 'ᛖ', latin: 'e',  name: 'Ehwaz',    meaning: 'Horse, trust' },
  { rune: 'ᛗ', latin: 'm',  name: 'Mannaz',   meaning: 'Man, humanity' },
  { rune: 'ᛚ', latin: 'l',  name: 'Laguz',    meaning: 'Lake, water' },
  { rune: 'ᛜ', latin: 'ng', name: 'Ingwaz',   meaning: 'Ing, fertility' },
  { rune: 'ᛞ', latin: 'd',  name: 'Dagaz',    meaning: 'Day, dawn' },
  { rune: 'ᛟ', latin: 'o',  name: 'Othalan',  meaning: 'Heritage, home' },
]

const EF_EXTRA: Record<string, string> = {
  c: 'ᚲ', q: 'ᚲ', v: 'ᚹ', x: 'ᚲᛊ', y: 'ᛁ',
}

// ─── Younger Futhark (16 runes, Viking Age c. 800–1100 AD) ───────────────────

const YOUNGER_FUTHARK: RuneEntry[] = [
  { rune: 'ᚠ', latin: 'f',  name: 'Fe',      meaning: 'Cattle, wealth' },
  { rune: 'ᚢ', latin: 'u',  name: 'Ur',      meaning: 'Slag, drizzle' },
  { rune: 'ᚦ', latin: 'th', name: 'Þurs',    meaning: 'Giant, thorn' },
  { rune: 'ᚬ', latin: 'a',  name: 'Óss',     meaning: 'God, estuary' },
  { rune: 'ᚱ', latin: 'r',  name: 'Reið',    meaning: 'Ride, thunder' },
  { rune: 'ᚴ', latin: 'k',  name: 'Kaun',    meaning: 'Ulcer, wound' },
  { rune: 'ᚼ', latin: 'h',  name: 'Hagall',  meaning: 'Hail, model' },
  { rune: 'ᚾ', latin: 'n',  name: 'Nauðr',   meaning: 'Need, constraint' },
  { rune: 'ᛁ', latin: 'i',  name: 'Ís',      meaning: 'Ice, bridge' },
  { rune: 'ᛅ', latin: 'e',  name: 'Ár',      meaning: 'Good year, plenty' },
  { rune: 'ᛋ', latin: 's',  name: 'Sól',     meaning: 'Sun, wheel' },
  { rune: 'ᛏ', latin: 't',  name: 'Týr',     meaning: 'God Tyr, honor' },
  { rune: 'ᛒ', latin: 'b',  name: 'Bjarkan', meaning: 'Birch twig, growth' },
  { rune: 'ᛘ', latin: 'm',  name: 'Maðr',    meaning: 'Man, humanity' },
  { rune: 'ᛚ', latin: 'l',  name: 'Lögr',    meaning: 'Water, lake' },
  { rune: 'ᛦ', latin: 'y',  name: 'Yr',      meaning: 'Bow, yew' },
]

const YF_EXTRA: Record<string, string> = {
  o: 'ᚢ', c: 'ᚴ', g: 'ᚴ', q: 'ᚴ', v: 'ᚢ',
  w: 'ᚢ', d: 'ᛏ', j: 'ᛁ', p: 'ᛒ', z: 'ᛋ', x: 'ᚴᛋ',
}

// ─── Anglo-Saxon Futhorc (28+ runes, c. 400–1100 AD) ─────────────────────────

const ANGLO_SAXON: RuneEntry[] = [
  { rune: 'ᚠ', latin: 'f',  name: 'Feoh',   meaning: 'Cattle, wealth' },
  { rune: 'ᚢ', latin: 'u',  name: 'Ur',     meaning: 'Aurochs, strength' },
  { rune: 'ᚦ', latin: 'th', name: 'Thorn',  meaning: 'Thorn, giant' },
  { rune: 'ᚩ', latin: 'o',  name: 'Os',     meaning: 'God, estuary' },
  { rune: 'ᚱ', latin: 'r',  name: 'Rad',    meaning: 'Ride, journey' },
  { rune: 'ᚳ', latin: 'c',  name: 'Cen',    meaning: 'Torch, fire' },
  { rune: 'ᚷ', latin: 'g',  name: 'Gyfu',   meaning: 'Gift, generosity' },
  { rune: 'ᚹ', latin: 'w',  name: 'Wynn',   meaning: 'Joy, pleasure' },
  { rune: 'ᚻ', latin: 'h',  name: 'Haegl',  meaning: 'Hail' },
  { rune: 'ᚾ', latin: 'n',  name: 'Nyd',    meaning: 'Need, hardship' },
  { rune: 'ᛁ', latin: 'i',  name: 'Is',     meaning: 'Ice' },
  { rune: 'ᛄ', latin: 'j',  name: 'Ger',    meaning: 'Year, good harvest' },
  { rune: 'ᛇ', latin: 'eo', name: 'Eoh',    meaning: 'Yew tree' },
  { rune: 'ᛈ', latin: 'p',  name: 'Peorth', meaning: 'Chess piece, fun' },
  { rune: 'ᛉ', latin: 'x',  name: 'Eolh',   meaning: 'Elk-sedge, protection' },
  { rune: 'ᛋ', latin: 's',  name: 'Sigel',  meaning: 'Sun' },
  { rune: 'ᛏ', latin: 't',  name: 'Tir',    meaning: 'Tiw (deity), star' },
  { rune: 'ᛒ', latin: 'b',  name: 'Beorc',  meaning: 'Birch tree' },
  { rune: 'ᛖ', latin: 'e',  name: 'Eh',     meaning: 'Horse, trust' },
  { rune: 'ᛗ', latin: 'm',  name: 'Mann',   meaning: 'Man, person' },
  { rune: 'ᛚ', latin: 'l',  name: 'Lagu',   meaning: 'Lake, sea' },
  { rune: 'ᛝ', latin: 'ng', name: 'Ing',    meaning: 'Hero/deity Ing' },
  { rune: 'ᛟ', latin: 'oe', name: 'Ethel',  meaning: 'Estate, heritage' },
  { rune: 'ᛞ', latin: 'd',  name: 'Daeg',   meaning: 'Day, light' },
  { rune: 'ᚪ', latin: 'a',  name: 'Ac',     meaning: 'Oak tree' },
  { rune: 'ᚫ', latin: 'ae', name: 'Aesc',   meaning: 'Ash tree' },
  { rune: 'ᚣ', latin: 'y',  name: 'Yr',     meaning: 'Bow, yew' },
  { rune: 'ᛡ', latin: 'ia', name: 'Ior',    meaning: 'Eel, serpent' },
  { rune: 'ᛠ', latin: 'ea', name: 'Ear',    meaning: 'Earth, grave' },
]

const AS_EXTRA: Record<string, string> = {
  k: 'ᚳ', q: 'ᚳ', v: 'ᚹ', z: 'ᛋ',
}

// ─── Build fast lookup maps ───────────────────────────────────────────────────

function buildMaps(entries: RuneEntry[], extra: Record<string, string> = {}): {
  toRune: Record<string, string>
  toLatin: Record<string, string>
} {
  const toRune: Record<string, string> = {}
  const toLatin: Record<string, string> = {}
  for (const e of entries) {
    toRune[e.latin] = e.rune
    if (e.rune.length === 1) toLatin[e.rune] = e.latin
  }
  Object.assign(toRune, extra)
  return { toRune, toLatin }
}

const EF_MAPS = buildMaps(ELDER_FUTHARK, EF_EXTRA)
const YF_MAPS = buildMaps(YOUNGER_FUTHARK, YF_EXTRA)
const AS_MAPS = buildMaps(ANGLO_SAXON, AS_EXTRA)

function getMaps(sys: RuneSystem)    { return sys === 'younger-futhark' ? YF_MAPS : sys === 'anglo-saxon' ? AS_MAPS : EF_MAPS }
function getEntries(sys: RuneSystem) { return sys === 'younger-futhark' ? YOUNGER_FUTHARK : sys === 'anglo-saxon' ? ANGLO_SAXON : ELDER_FUTHARK }

// ─── Conversion ───────────────────────────────────────────────────────────────

const DIGRAPHS = ['th', 'ng', 'ae', 'ea', 'eo', 'ia', 'oe']

function convertToRunic(text: string, sys: RuneSystem): string {
  const { toRune } = getMaps(sys)
  const lower = text.toLowerCase()
  let out = '', i = 0
  while (i < lower.length) {
    let matched = false
    for (const dg of DIGRAPHS) {
      if (lower.startsWith(dg, i) && toRune[dg]) {
        out += toRune[dg]; i += dg.length; matched = true; break
      }
    }
    if (matched) continue
    out += toRune[lower[i]] ?? lower[i]
    i++
  }
  return out
}

function convertToLatin(text: string, sys: RuneSystem): string {
  const { toLatin } = getMaps(sys)
  return [...text].map(c => toLatin[c] ?? c).join('')
}

// ─── System metadata ──────────────────────────────────────────────────────────

const SYSTEMS: {
  id: RuneSystem; label: string; shortLabel: string; short: string; period: string; count: number
}[] = [
  { id: 'elder-futhark',   label: 'Elder Futhark',      shortLabel: 'Elder',   short: 'ᚠᚢᚦᚨ', period: 'c. 150–800 AD',  count: 24 },
  { id: 'younger-futhark', label: 'Younger Futhark',    shortLabel: 'Viking',  short: 'ᚠᚢᚦᚬ', period: 'c. 800–1100 AD', count: 16 },
  { id: 'anglo-saxon',     label: 'Anglo-Saxon Futhorc', shortLabel: 'Futhorc', short: 'ᚠᚢᚦᚩ', period: 'c. 400–1100 AD', count: 28 },
]

const SAMPLES = ['Hello World', 'Norse Runes', 'Viking Age', 'Odin', 'Valhalla', 'Your Name']

// ─── Component ────────────────────────────────────────────────────────────────

export function RunicAlphabetConverterTool() {
  const [input,     setInput]     = useState('')
  const [system,    setSystem]    = useState<RuneSystem>('elder-futhark')
  const [direction, setDirection] = useState<Direction>('to-runic')
  const [copiedOut, setCopiedOut] = useState(false)

  const output = input
    ? direction === 'to-runic' ? convertToRunic(input, system) : convertToLatin(input, system)
    : ''

  const copyOutput = useCallback(() => {
    if (!output) return
    navigator.clipboard.writeText(output)
    setCopiedOut(true)
    setTimeout(() => setCopiedOut(false), 2000)
    toast({ title: 'Copied!', description: 'Runic text copied to clipboard' })
  }, [output])

  const swap = useCallback(() => {
    setInput(output)
    setDirection(d => d === 'to-runic' ? 'to-latin' : 'to-runic')
  }, [output])

  const entries  = getEntries(system)
  const charCount = input.length
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* ── System selector ── */}
      <div className="space-y-2 w-full min-w-0">
        <p className="text-sm font-semibold">Runic Alphabet</p>

        {/* Mobile: 3-column equal-width grid — no overflow needed */}
        <div className="grid grid-cols-3 gap-1.5 sm:hidden w-full">
          {SYSTEMS.map(sys => (
            <button
              key={sys.id}
              onClick={() => setSystem(sys.id)}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 px-1 rounded-xl border transition-all text-center touch-manipulation w-full min-w-0 overflow-hidden ${
                system === sys.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'border-border hover:bg-muted/50'
              }`}
            >
              <span className="text-sm leading-none">{sys.short}</span>
              <span className="text-[10px] font-semibold leading-tight truncate w-full text-center">{sys.shortLabel}</span>
              <span className={`text-[9px] leading-tight ${system === sys.id ? 'opacity-70' : 'text-muted-foreground'}`}>
                {sys.count}
              </span>
            </button>
          ))}
        </div>

        {/* sm+: full card row */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-2 w-full">
          {SYSTEMS.map(sys => (
            <button
              key={sys.id}
              onClick={() => setSystem(sys.id)}
              className={`flex flex-col items-start px-3 py-3 rounded-xl border transition-all text-left touch-manipulation min-w-0 w-full overflow-hidden ${
                system === sys.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'border-border hover:bg-muted/50 hover:border-primary/30'
              }`}
            >
              <span className="text-xl leading-none mb-1">{sys.short}</span>
              <span className="text-xs font-semibold truncate w-full">{sys.label}</span>
              <span className={`text-[10px] mt-0.5 truncate w-full ${system === sys.id ? 'opacity-70' : 'text-muted-foreground'}`}>
                {sys.count} runes · {sys.period}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Direction toggle ── */}
      <div className="flex items-center gap-1.5 sm:gap-2 w-full min-w-0">
        <button
          onClick={() => setDirection('to-runic')}
          className={`flex-1 min-w-0 py-2.5 rounded-lg text-[11px] sm:text-sm font-medium transition-colors border touch-manipulation truncate px-1 ${
            direction === 'to-runic'
              ? 'bg-primary/10 border-primary/40 text-primary'
              : 'border-border text-muted-foreground hover:bg-muted/40'
          }`}
        >
          Latin → Runes
        </button>
        <button
          onClick={swap}
          className="p-2 sm:p-2.5 rounded-lg border border-border hover:bg-muted/50 transition-colors touch-manipulation shrink-0"
          title="Swap input & output"
        >
          <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
        </button>
        <button
          onClick={() => setDirection('to-latin')}
          className={`flex-1 min-w-0 py-2.5 rounded-lg text-[11px] sm:text-sm font-medium transition-colors border touch-manipulation truncate px-1 ${
            direction === 'to-latin'
              ? 'bg-primary/10 border-primary/40 text-primary'
              : 'border-border text-muted-foreground hover:bg-muted/40'
          }`}
        >
          Runes → Latin
        </button>
      </div>

      {/* ── Input ── */}
      <div className="space-y-2 w-full min-w-0">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <label className="text-sm font-semibold shrink-0">
            {direction === 'to-runic' ? 'Enter Latin Text' : 'Enter Runic Text'}
          </label>
          <span className="text-xs text-muted-foreground truncate">{charCount} chars · {wordCount} words</span>
        </div>
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={direction === 'to-runic'
            ? 'Type English text to convert to runes…'
            : 'Paste runic characters to convert back…'
          }
          className="w-full min-h-24 text-base resize-none"
          autoFocus
        />
        {/* Sample chips — scroll on mobile */}
        <div className="w-full flex gap-1.5 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap sm:overflow-visible sm:pb-0">
          {SAMPLES.map(s => (
            <button
              key={s}
              onClick={() => { setInput(s); setDirection('to-runic') }}
              className="shrink-0 text-xs px-2.5 py-1 rounded-full border hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground touch-manipulation"
            >
              {s}
            </button>
          ))}
        </div>
        {input && (
          <Button onClick={() => setInput('')} size="sm" variant="outline" className="h-9 sm:h-8 touch-manipulation">
            <X className="w-3.5 h-3.5 mr-1.5" /> Clear
          </Button>
        )}
      </div>

      {/* ── Output ── */}
      {output && (
        <div className="space-y-2 w-full min-w-0">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold">
              {direction === 'to-runic' ? 'Runic Output' : 'Latin Output'}
            </label>
            <Button
              onClick={copyOutput}
              size="sm"
              variant={copiedOut ? 'default' : 'outline'}
              className="h-9 sm:h-8 touch-manipulation"
            >
              {copiedOut
                ? <><Check className="w-3.5 h-3.5 mr-1.5" />Copied</>
                : <><Copy className="w-3.5 h-3.5 mr-1.5" />Copy</>
              }
            </Button>
          </div>
          <div
            onClick={copyOutput}
            className="w-full p-4 rounded-xl border-2 border-primary/20 bg-primary/5 cursor-pointer hover:border-primary/40 transition-colors select-all overflow-hidden"
            title="Click to copy"
          >
            <p className="text-base sm:text-2xl leading-loose tracking-normal sm:tracking-wider break-all font-medium">
              {output}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Click the box to copy · {[...output].length} characters
          </p>
        </div>
      )}

      {/* ── Rune legend ── */}
      <div className="space-y-2 pt-2 border-t w-full min-w-0">
        <p className="text-sm font-semibold flex items-center gap-2">
          {SYSTEMS.find(s => s.id === system)?.label} Alphabet
          <span className="text-xs font-normal text-muted-foreground">— {entries.length} runes</span>
        </p>

        {/* 4 cols mobile → 6 cols sm → 8 cols md */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1 sm:gap-1.5 w-full">
          {entries.map(e => (
            <button
              key={e.name}
              onClick={() => { setInput(prev => prev + e.latin); setDirection('to-runic') }}
              title={`${e.name}: ${e.meaning}`}
              className="flex flex-col items-center gap-0.5 p-1.5 sm:p-2.5 rounded-xl border hover:border-primary/40 hover:bg-primary/5 transition-all touch-manipulation overflow-hidden min-w-0"
            >
              <span className="text-xl sm:text-3xl leading-none">{e.rune}</span>
              <span className="text-[8px] sm:text-[10px] font-semibold text-center leading-tight mt-0.5 w-full truncate">
                {e.name}
              </span>
              <span className="text-[7px] sm:text-[9px] font-mono text-muted-foreground uppercase truncate w-full text-center">
                {e.latin}
              </span>
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Tap any rune to add it to your input · hover for meaning
        </p>
      </div>

    </div>
  )
}
