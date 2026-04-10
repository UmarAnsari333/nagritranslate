'use client'

import { useState, useCallback } from 'react'
import { Copy, RefreshCw, Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { toast } from '@/hooks/use-toast'

// ─── Zalgo combining character sets ──────────────────────────────────────────

const ABOVE = [
  '\u030d','\u030e','\u0304','\u0305','\u033f','\u0311','\u0306','\u0310',
  '\u0352','\u0357','\u0351','\u0307','\u0308','\u030a','\u0342','\u0343',
  '\u0344','\u034a','\u034b','\u034c','\u0303','\u0302','\u030c','\u0350',
  '\u0300','\u0301','\u030b','\u030f','\u0312','\u0313','\u0314','\u033d',
  '\u0309','\u0363','\u0364','\u0365','\u0366','\u0367','\u0368','\u0369',
  '\u036a','\u036b','\u036c','\u036d','\u036e','\u036f','\u033e','\u035b',
  '\u0346','\u031a',
]

const BELOW = [
  '\u0316','\u0317','\u0318','\u0319','\u031c','\u031d','\u031e','\u031f',
  '\u0320','\u0324','\u0325','\u0326','\u0329','\u032a','\u032b','\u032c',
  '\u032d','\u032e','\u032f','\u0330','\u0331','\u0332','\u0333','\u0339',
  '\u033a','\u033b','\u033c','\u0345','\u0347','\u0348','\u0349','\u034d',
  '\u034e','\u0353','\u0354','\u0355','\u0356','\u0359','\u035a','\u0323',
]

const MIDDLE = [
  '\u0315','\u031b','\u0340','\u0341','\u0358','\u0321','\u0322','\u0327',
  '\u0328','\u0334','\u0335','\u0336','\u034f','\u035c','\u035d','\u035e',
  '\u035f','\u0360','\u0361','\u0362','\u0338','\u0337','\u0489',
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randCount(max: number): number {
  return Math.floor(Math.random() * (max + 1))
}

// ─── Zalgo modes ──────────────────────────────────────────────────────────────

type ZalgoMode = 'down' | 'up' | 'both' | 'mini' | 'max'

interface ModeConfig {
  label: string
  description: string
  upMult: number    // multiplier on upMax
  midMult: number
  downMult: number
}

const MODES: Record<ZalgoMode, ModeConfig> = {
  down: {
    label: '▼ Drip Down',
    description: 'Characters drip below — like in the screenshot',
    upMult: 0, midMult: 0.1, downMult: 1,
  },
  up: {
    label: '▲ Rise Up',
    description: 'Marks stack above each character',
    upMult: 1, midMult: 0.1, downMult: 0,
  },
  both: {
    label: '⬍ Up & Down',
    description: 'Chaos above and below',
    upMult: 0.6, midMult: 0.15, downMult: 0.6,
  },
  mini: {
    label: '◈ Mini Zalgo',
    description: 'Subtle corruption, still readable',
    upMult: 0.2, midMult: 0.1, downMult: 0.2,
  },
  max: {
    label: '☠ Full Chaos',
    description: 'All directions, maximum madness',
    upMult: 1, midMult: 0.5, downMult: 1,
  },
}

// ─── Core generator ───────────────────────────────────────────────────────────
// craziness: 1–10 controls max combining chars per character

function zalgoify(
  text: string,
  craziness: number,
  mode: ZalgoMode,
): string {
  const cfg = MODES[mode]
  // Map craziness 1–10 → upMax 1–20
  const upMax = Math.round(craziness * 2 * cfg.upMult)
  const midMax = Math.round(craziness * 0.5 * cfg.midMult)
  const downMax = Math.round(craziness * 2 * cfg.downMult)

  return text
    .split('')
    .map(char => {
      // Leave spaces and newlines alone
      if (char === ' ' || char === '\n') return char

      let out = char

      for (let i = 0; i < randCount(upMax); i++) out += pick(ABOVE)
      for (let i = 0; i < randCount(midMax); i++) out += pick(MIDDLE)
      for (let i = 0; i < randCount(downMax); i++) out += pick(BELOW)

      return out
    })
    .join('')
}

// ─── Component ────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Hello', input: 'Hello World' },
  { label: 'Horror', input: 'The darkness consumes all' },
  { label: 'Curse', input: 'I am the void' },
  { label: 'Glitch', input: 'ERROR 666 SYSTEM FAILURE' },
]

export function ZalgoTextGeneratorTool() {
  const [input, setInput] = useState('')
  const [craziness, setCraziness] = useState([5])
  const [mode, setMode] = useState<ZalgoMode>('down')
  // seed forces re-generation when user clicks "Regenerate"
  const [seed, setSeed] = useState(0)

  // Re-generate on every keystroke, slider change, mode change, or seed change
  const output = (() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!input.trim()) return ''
    // seed is read here so changing it triggers a new random output
    void seed
    return zalgoify(input, craziness[0], mode)
  })()

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({ title: 'Copied!', description: 'Zalgo text copied to clipboard.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  const crazinessLabel =
    craziness[0] <= 2 ? 'Whisper'
    : craziness[0] <= 4 ? 'Unsettling'
    : craziness[0] <= 6 ? 'Corrupted'
    : craziness[0] <= 8 ? 'Nightmare'
    : 'He Comes'

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Quick examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => setInput(ex.input)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Text</label>
        <Textarea
          placeholder="Type something and watch it become cursed..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="min-h-[100px] resize-none text-sm"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{input.length} characters</span>
          {input && (
            <button onClick={() => setInput('')} className="flex items-center gap-1 hover:text-foreground transition-colors">
              <RefreshCw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Mode selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Zalgo Style</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {(Object.entries(MODES) as [ZalgoMode, ModeConfig][]).map(([key, cfg]) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`p-3 rounded-xl border text-left transition-all ${
                mode === key
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-muted/10 hover:border-primary/30 hover:bg-primary/5'
              }`}
            >
              <p className="text-xs font-bold font-mono">{cfg.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{cfg.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Craziness slider */}
      <div className="space-y-3 p-5 bg-muted/30 rounded-xl border">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Craziness Level</label>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
            {craziness[0]} / 10 — {crazinessLabel}
          </span>
        </div>
        <Slider
          min={1}
          max={10}
          step={1}
          value={craziness}
          onValueChange={setCraziness}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1 Whisper</span>
          <span>5 Corrupted</span>
          <span>10 He Comes</span>
        </div>
      </div>

      {/* Output per mode — show all 5 styles when text is entered */}
      {input.trim() && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {MODES[mode].label} Preview
            </h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSeed(s => s + 1)}
                className="h-7 px-2 gap-1 text-xs"
              >
                <Shuffle className="w-3 h-3" /> Regenerate
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copy(output)}
                className="h-7 px-2 gap-1 text-xs"
              >
                <Copy className="w-3 h-3" /> Copy
              </Button>
            </div>
          </div>

          {/* Main preview box — dark bg so the drip is visible */}
          <div className="p-6 rounded-xl bg-gray-950 border border-gray-800 min-h-[120px] overflow-x-auto">
            <p className="font-mono text-base text-white leading-[4rem] whitespace-pre-wrap break-all tracking-wide select-all">
              {output}
            </p>
          </div>

          {/* All 5 styles at once */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">All Styles</h3>
            {(Object.entries(MODES) as [ZalgoMode, ModeConfig][]).map(([key, cfg]) => {
              void seed
              const preview = zalgoify(input, craziness[0], key)
              return (
                <div
                  key={key}
                  className="p-4 rounded-xl bg-gray-950 border border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xs font-bold text-primary font-mono">{cfg.label}</span>
                      <span className="text-xs text-gray-500 ml-2">— {cfg.description}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copy(preview)}
                      className="h-6 px-2 gap-1 text-[10px] text-gray-400 hover:text-white"
                    >
                      <Copy className="w-3 h-3" /> Copy
                    </Button>
                  </div>
                  <p className="font-mono text-sm text-white leading-[3.5rem] whitespace-pre-wrap break-all select-all">
                    {preview}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {!input.trim() && (
        <div className="text-center py-10 text-muted-foreground">
          <div className="text-5xl mb-3">̴̢̢̛̛̙̙̺̖̲̤͎͔̗̳͚͔͕͍̟̳͚̱̝̯͙̟̰̯̠͎̩̙̯͓͚̜̘͓̙̺̩̖̤̭̝͈̞̭̞̎̈́̈́̓̓̃͗͛͛̓̓̿̔͗̿̔̓̓̀̊͋̑̒̅̿̿̾̿̾͆͆̈́̀̀̃̊̆̾̊̉͋͑̒̈́̄̒̉̏̔̽̋̾̎̾̃̏̑̈́̽̉̔̔̚̚͘͘͘͝͠͝͠ͅͅ☠</div>
          <p className="text-sm">Type text above to summon the Zalgo corruption.</p>
          <p className="text-xs mt-1 opacity-50">H̷e̴ ̸C̷o̴m̸e̵s̷.</p>
        </div>
      )}
    </div>
  )
}
