'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

// ─── Unicode maps ─────────────────────────────────────────────────────────────

const SUB_MAP: Record<string, string> = {
  '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉',
  'a':'ₐ','e':'ₑ','h':'ₕ','i':'ᵢ','j':'ⱼ','k':'ₖ','l':'ₗ','m':'ₘ','n':'ₙ',
  'o':'ₒ','p':'ₚ','r':'ᵣ','s':'ₛ','t':'ₜ','u':'ᵤ','v':'ᵥ','x':'ₓ',
  '+':'₊','-':'₋','=':'₌','(':'₍',')':'₎',
}

const SUP_MAP: Record<string, string> = {
  '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹',
  'a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ','i':'ⁱ','j':'ʲ',
  'k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ','r':'ʳ','s':'ˢ','t':'ᵗ','u':'ᵘ',
  'v':'ᵛ','w':'ʷ','x':'ˣ','y':'ʸ','z':'ᶻ',
  'A':'ᴬ','B':'ᴮ','D':'ᴰ','E':'ᴱ','G':'ᴳ','H':'ᴴ','I':'ᴵ','J':'ᴶ','K':'ᴷ','L':'ᴸ',
  'M':'ᴹ','N':'ᴺ','O':'ᴼ','P':'ᴾ','R':'ᴿ','T':'ᵀ','U':'ᵁ','W':'ᵂ',
  '+':'⁺','-':'⁻','=':'⁼','(':'⁽',')':'⁾',
}

function toSubscript(t: string) {
  return t.split('').map(c => SUB_MAP[c] ?? SUB_MAP[c.toLowerCase()] ?? c).join('')
}

function toSuperscript(t: string) {
  return t.split('').map(c => SUP_MAP[c] ?? SUP_MAP[c.toLowerCase()] ?? c).join('')
}

// Which letters lack subscript Unicode equivalents
const NO_SUB = 'bcdfgqwyz'.split('')
const NO_SUP = 'cquvxyz'.split('') // uppercase gaps

// ─── Quick examples ───────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Water',          formula: 'H₂O',     raw: 'H2O',         mode: 'sub' },
  { label: 'Carbon dioxide', formula: 'CO₂',     raw: 'CO2',         mode: 'sub' },
  { label: 'Squared',        formula: 'x²',      raw: 'x2',          mode: 'sup' },
  { label: 'Cubed',          formula: 'x³',      raw: 'x3',          mode: 'sup' },
  { label: 'Einstein',       formula: 'E=mc²',   raw: 'E=mc2',       mode: 'sup' },
  { label: 'Sulfuric acid',  formula: 'H₂SO₄',  raw: 'H2SO4',       mode: 'sub' },
  { label: 'Footnote',       formula: 'text¹',   raw: 'text1',       mode: 'sup' },
  { label: 'Ammonia',        formula: 'NH₃',     raw: 'NH3',         mode: 'sub' },
]

// ─── Component ────────────────────────────────────────────────────────────────

type Mode = 'sub' | 'sup' | 'both'

export function SubscriptGeneratorTool() {
  const [input, setInput] = useState('H2O')
  const [mode, setMode] = useState<Mode>('sub')
  const [copied, setCopied] = useState<string | null>(null)

  const subOut = toSubscript(input)
  const supOut = toSuperscript(input)

  function copy(id: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  function loadExample(ex: typeof EXAMPLES[0]) {
    setInput(ex.raw)
    setMode(ex.mode as Mode)
  }

  // Characters in input that don't have subscript equivalents
  const missingSubChars = [...new Set(
    input.split('').filter(c => c !== ' ' && !SUB_MAP[c] && !SUB_MAP[c.toLowerCase()] && /[a-zA-Z]/.test(c))
  )]
  const missingSupChars = [...new Set(
    input.split('').filter(c => c !== ' ' && !SUP_MAP[c] && !SUP_MAP[c.toLowerCase()] && /[a-zA-Z]/.test(c))
  )]

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Mode tabs */}
      <div className="flex gap-1 p-1 bg-muted/20 rounded-xl border">
        {([
          { id: 'sub',  label: 'Subscript',   example: 'H₂O' },
          { id: 'sup',  label: 'Superscript', example: 'x²' },
          { id: 'both', label: 'Both',        example: 'x² & H₂O' },
        ] as { id: Mode; label: string; example: string }[]).map(tab => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`flex-1 flex flex-col items-center py-2 px-2 rounded-lg text-sm font-semibold transition-all ${
              mode === tab.id ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
            <span className="text-xs font-normal opacity-60">{tab.example}</span>
          </button>
        ))}
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-semibold mb-2">Your Text</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={3}
          placeholder="Type text or numbers here… e.g. H2O or x2"
          className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Tip: type numbers normally — they always convert. Letters have partial coverage (see below).
        </p>
      </div>

      {/* Output(s) */}
      <div className="space-y-3">
        {(mode === 'sub' || mode === 'both') && (
          <OutputCard
            label="Subscript Output"
            badge="₀₁₂"
            badgeColor="bg-blue-500/10 text-blue-600 dark:text-blue-400"
            output={subOut}
            id="sub"
            copied={copied}
            onCopy={copy}
            missing={missingSubChars}
            missingNote="These letters have no Unicode subscript — shown as normal:"
          />
        )}
        {(mode === 'sup' || mode === 'both') && (
          <OutputCard
            label="Superscript Output"
            badge="⁰¹²"
            badgeColor="bg-violet-500/10 text-violet-600 dark:text-violet-400"
            output={supOut}
            id="sup"
            copied={copied}
            onCopy={copy}
            missing={missingSupChars}
            missingNote="These letters have no Unicode superscript — shown as normal:"
          />
        )}
      </div>

      {/* Quick examples */}
      <div>
        <p className="text-sm font-semibold mb-2">Quick Examples</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => loadExample(ex)}
              className="text-left px-3 py-2 rounded-lg border bg-muted/10 hover:bg-muted/30 hover:border-primary/30 transition-colors"
            >
              <span className="block text-base font-mono">{ex.formula}</span>
              <span className="block text-[11px] text-muted-foreground">{ex.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Coverage table */}
      <div className="rounded-xl border overflow-hidden">
        <div className="px-4 py-2.5 bg-muted/20 border-b">
          <p className="text-sm font-semibold">Unicode Coverage</p>
        </div>
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
          <div className="p-4 space-y-2">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">Subscript ₓ</p>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Digits (all supported)</p>
              <p className="font-mono text-sm tracking-wider">₀₁₂₃₄₅₆₇₈₉</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Letters with subscript</p>
              <p className="font-mono text-sm">ₐ ₑ ₕ ᵢ ⱼ ₖ ₗ ₘ ₙ ₒ ₚ ᵣ ₛ ₜ ᵤ ᵥ ₓ</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">No subscript equivalent</p>
              <p className="font-mono text-sm text-muted-foreground">{NO_SUB.join(' ')} (shown as-is)</p>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-2">Superscript ˣ</p>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Digits (all supported)</p>
              <p className="font-mono text-sm tracking-wider">⁰¹²³⁴⁵⁶⁷⁸⁹</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Letters with superscript</p>
              <p className="font-mono text-sm">ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Operators</p>
              <p className="font-mono text-sm">⁺ ⁻ ⁼ ⁽ ⁾</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 bg-muted/10 rounded-xl border text-xs text-muted-foreground space-y-1">
        <p className="font-semibold text-foreground">How it works</p>
        <p>This tool uses real Unicode subscript and superscript characters — not HTML tags like <code className="bg-muted px-1 rounded">&lt;sub&gt;</code>. That means the output <strong>pastes anywhere</strong> — social media, messaging apps, plain text documents — without needing HTML support.</p>
      </div>
    </div>
  )
}

// ─── Output card subcomponent ────────────────────────────────────────────────

function OutputCard({
  label, badge, badgeColor, output, id, copied, onCopy, missing, missingNote
}: {
  label: string
  badge: string
  badgeColor: string
  output: string
  id: string
  copied: string | null
  onCopy: (id: string, text: string) => void
  missing: string[]
  missingNote: string
}) {
  const isCopied = copied === id
  return (
    <div className="rounded-xl border bg-muted/5 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/10 border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{label}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${badgeColor}`}>{badge}</span>
        </div>
        <button
          onClick={() => onCopy(id, output)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            isCopied
              ? 'bg-green-500/10 text-green-600 dark:text-green-400'
              : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
        >
          {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="px-4 py-4 min-h-[3.5rem] flex items-center">
        <p className="text-2xl font-mono tracking-wide break-all leading-relaxed">
          {output || <span className="text-muted-foreground/40 text-sm italic">type something above…</span>}
        </p>
      </div>
      {missing.length > 0 && (
        <div className="px-4 py-2 bg-amber-500/5 border-t border-amber-500/20">
          <p className="text-[11px] text-amber-600 dark:text-amber-400">
            ⚠ {missingNote} <span className="font-mono font-semibold">{missing.join(', ')}</span>
          </p>
        </div>
      )}
    </div>
  )
}
