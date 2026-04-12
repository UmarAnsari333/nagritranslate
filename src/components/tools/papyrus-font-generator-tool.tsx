'use client'

import { useState } from 'react'
import { Copy, Check, Download } from 'lucide-react'

// ─── Preset style definitions ─────────────────────────────────────────────────

interface PapyrusStyle {
  id: string
  name: string
  desc: string
  tag?: string
  transform: (t: string) => string
  style: React.CSSProperties
  wrapperStyle?: React.CSSProperties
  canvas: {
    bgStops: [string, string]
    textColor: string
    shadowColor?: string
    shadowBlur?: number
  }
}

const PRESETS: PapyrusStyle[] = [
  {
    id: 'classic',
    name: 'Classic Papyrus',
    desc: 'The original — as nature intended',
    transform: (t) => t,
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '2rem', letterSpacing: '0.04em', lineHeight: 1.5 },
    canvas: { bgStops: ['#ffffff', '#f8f8f8'], textColor: '#1a1a1a' },
  },
  {
    id: 'undertale',
    name: 'UNDERTALE Style',
    desc: 'NYEH HEH HEH! PAPYRUS SPEAKS IN ALL CAPS.',
    tag: 'Undertale',
    transform: (t) => t.toUpperCase(),
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '1.9rem', letterSpacing: '0.06em', color: '#ff8c00', lineHeight: 1.5 },
    canvas: { bgStops: ['#ffffff', '#fff8ee'], textColor: '#ff8c00' },
  },
  {
    id: 'avatar',
    name: "Avatar / Na'vi Blue",
    desc: 'The font choice that spawned a thousand memes',
    tag: 'Meme',
    transform: (t) => t,
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '2rem', letterSpacing: '0.05em', color: '#1a9fd4', lineHeight: 1.5 },
    canvas: { bgStops: ['#f0faff', '#e0f4ff'], textColor: '#1a9fd4' },
  },
  {
    id: 'scroll',
    name: 'Ancient Scroll',
    desc: 'Adorned with Egyptian symbols',
    transform: (t) => `☥ ${t} ☥`,
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '1.85rem', letterSpacing: '0.05em', color: '#8b6914', lineHeight: 1.5 },
    wrapperStyle: { background: 'linear-gradient(135deg, #fdf3dc 0%, #f5e4b8 100%)', borderColor: '#c9a84c' },
    canvas: { bgStops: ['#fdf3dc', '#f5e4b8'], textColor: '#8b6914' },
  },
  {
    id: 'pharaoh',
    name: "Pharaoh's Decree",
    desc: 'Wide-spaced, regal and commanding',
    transform: (t) => t.toUpperCase(),
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '1.6rem', letterSpacing: '0.25em', color: '#5a3e0a', lineHeight: 1.8 },
    wrapperStyle: { background: 'linear-gradient(135deg, #fdf3dc 0%, #f5e4b8 100%)', borderColor: '#c9a84c' },
    canvas: { bgStops: ['#fdf3dc', '#f5e4b8'], textColor: '#5a3e0a' },
  },
  {
    id: 'cursed',
    name: 'Cursed Tomb',
    desc: 'Dark, ominous — beware those who enter',
    transform: (t) => t,
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '2rem', letterSpacing: '0.06em', color: '#cc2200', lineHeight: 1.5 },
    wrapperStyle: { background: 'linear-gradient(135deg, #1a0a0a 0%, #2d1010 100%)', borderColor: '#6b1a1a' },
    canvas: { bgStops: ['#1a0a0a', '#2d1010'], textColor: '#cc2200' },
  },
  {
    id: 'hieroglyph',
    name: 'Hieroglyph Border',
    desc: 'Framed with ancient Egyptian symbols',
    transform: (t) => `𓂀 𓃭 ${t} 𓃭 𓂀`,
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '1.85rem', letterSpacing: '0.04em', color: '#3d2b00', lineHeight: 1.6 },
    wrapperStyle: { background: 'linear-gradient(135deg, #fdf3dc 0%, #eedfa0 100%)', borderColor: '#a07820' },
    canvas: { bgStops: ['#fdf3dc', '#eedfa0'], textColor: '#3d2b00' },
  },
  {
    id: 'neon',
    name: 'Neon Sarcophagus',
    desc: 'Ancient meets vaporwave',
    transform: (t) => t,
    style: { fontFamily: "'Papyrus', fantasy, serif", fontSize: '2rem', letterSpacing: '0.07em', color: '#c084fc', textShadow: '0 0 12px #c084fc88, 0 0 24px #7c3aed55', lineHeight: 1.5 },
    wrapperStyle: { background: 'linear-gradient(135deg, #0f0520 0%, #1a0a2e 100%)', borderColor: '#7c3aed' },
    canvas: { bgStops: ['#0f0520', '#1a0a2e'], textColor: '#c084fc', shadowColor: '#c084fc', shadowBlur: 18 },
  },
]

const EXAMPLES = ['In a world far away…', 'NYEH HEH HEH!', 'Beware all who enter', 'The Great Papyrus', 'Ancient wisdom', 'I see you']

// ─── Canvas helpers ───────────────────────────────────────────────────────────

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = []
  for (const rawLine of text.split('\n')) {
    if (!rawLine) { lines.push(''); continue }
    const words = rawLine.split(' ')
    let cur = ''
    for (const word of words) {
      const test = cur ? `${cur} ${word}` : word
      if (ctx.measureText(test).width > maxWidth) { if (cur) lines.push(cur); cur = word }
      else cur = test
    }
    if (cur) lines.push(cur)
  }
  return lines.length ? lines : ['']
}

interface CanvasOpts {
  text: string
  fontPx: number
  lsPx: number
  lineHeight: number
  rotation: number
  bold: boolean
  italic: boolean
  allCaps: boolean
  fontColor: string
  bgColor: string
  shadowOn: boolean
  shadowColor: string
  shadowDist: number
  shadowBlur: number
  outlineOn: boolean
  outlineColor: string
  outlineWidth: number
  format: 'png' | 'jpeg'
  filename: string
  // preset overrides (optional)
  presetBgStops?: [string, string]
  presetTextColor?: string
  presetShadowColor?: string
  presetShadowBlur?: number
}

async function renderAndDownload(opts: CanvasOpts) {
  const W = 1200
  const padX = 80
  const padY = 60

  const weight = opts.bold ? 'bold' : 'normal'
  const style = opts.italic ? 'italic' : 'normal'
  const fontDecl = `${style} ${weight} ${opts.fontPx}px 'Papyrus', fantasy, serif`
  const lsStr = `${opts.lsPx}px`

  let displayText = opts.text || 'The Great Papyrus'
  if (opts.allCaps) displayText = displayText.toUpperCase()

  const tmp = document.createElement('canvas').getContext('2d')!
  tmp.font = fontDecl
  if ('letterSpacing' in tmp) (tmp as any).letterSpacing = lsStr
  const lines = wrapText(tmp, displayText, W - padX * 2)
  const lineH = Math.round(opts.fontPx * opts.lineHeight)
  const textH = lines.length * lineH + padY * 2

  // If rotation, canvas needs to be larger to fit rotated text
  const maxDim = Math.ceil(Math.sqrt(W * W + textH * textH))
  const useRotation = opts.rotation !== 0
  const canvasW = useRotation ? maxDim : W
  const canvasH = useRotation ? maxDim : textH

  const canvas = document.createElement('canvas')
  canvas.width = canvasW
  canvas.height = canvasH
  const ctx = canvas.getContext('2d')!

  // Background
  if (opts.presetBgStops) {
    const grd = ctx.createLinearGradient(0, 0, canvasW, canvasH)
    grd.addColorStop(0, opts.presetBgStops[0])
    grd.addColorStop(1, opts.presetBgStops[1])
    ctx.fillStyle = grd
  } else {
    ctx.fillStyle = opts.bgColor
  }
  ctx.fillRect(0, 0, canvasW, canvasH)

  // Rotate around center
  if (useRotation) {
    ctx.translate(canvasW / 2, canvasH / 2)
    ctx.rotate((opts.rotation * Math.PI) / 180)
    ctx.translate(-W / 2, -textH / 2)
  }

  // Shadow
  const sc = opts.presetShadowColor ?? (opts.shadowOn ? opts.shadowColor : 'transparent')
  const sb = opts.presetShadowBlur ?? (opts.shadowOn ? opts.shadowBlur : 0)
  if (sc && sc !== 'transparent') {
    ctx.shadowColor = sc
    ctx.shadowBlur = sb
    ctx.shadowOffsetX = opts.presetShadowColor ? 0 : opts.shadowDist
    ctx.shadowOffsetY = opts.presetShadowColor ? 0 : opts.shadowDist
  }

  // Text
  ctx.font = fontDecl
  if ('letterSpacing' in ctx) (ctx as any).letterSpacing = lsStr
  ctx.textBaseline = 'top'
  ctx.textAlign = 'center'

  const cx = useRotation ? W / 2 : canvasW / 2

  if (opts.outlineOn && !opts.presetBgStops) {
    ctx.strokeStyle = opts.outlineColor
    ctx.lineWidth = opts.outlineWidth * 2
    ctx.lineJoin = 'round'
    lines.forEach((line, i) => ctx.strokeText(line, cx, padY + i * lineH))
  }

  ctx.fillStyle = opts.presetTextColor ?? opts.fontColor
  lines.forEach((line, i) => ctx.fillText(line, cx, padY + i * lineH))

  // Download
  const mime = opts.format === 'jpeg' ? 'image/jpeg' : 'image/png'
  const ext = opts.format === 'jpeg' ? 'jpg' : 'png'
  canvas.toBlob(
    (blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${opts.filename}.${ext}`
      a.click()
      URL.revokeObjectURL(url)
    },
    mime,
    opts.format === 'jpeg' ? 0.95 : undefined,
  )
}

// ─── Live custom preview ──────────────────────────────────────────────────────

interface CustomSettings {
  fontSize: number
  letterSpacing: number
  lineHeight: number
  rotation: number
  bold: boolean
  italic: boolean
  allCaps: boolean
  fontColor: string
  bgColor: string
  shadowOn: boolean
  shadowColor: string
  shadowDist: number
  shadowBlur: number
  outlineOn: boolean
  outlineColor: string
  outlineWidth: number
}

// ─── Component ────────────────────────────────────────────────────────────────

export function PapyrusFontGeneratorTool() {
  const [text, setText] = useState('The Great Papyrus')
  const [format, setFormat] = useState<'png' | 'jpeg'>('png')
  const [copied, setCopied] = useState<string | null>(null)
  const [downloading, setDownloading] = useState<string | null>(null)
  // customize panel is always open

  const [settings, setSettings] = useState<CustomSettings>({
    fontSize: 48,
    letterSpacing: 2,
    lineHeight: 1.5,
    rotation: 0,
    bold: false,
    italic: false,
    allCaps: false,
    fontColor: '#1a1a1a',
    bgColor: '#ffffff',
    shadowOn: false,
    shadowColor: '#000000',
    shadowDist: 4,
    shadowBlur: 8,
    outlineOn: false,
    outlineColor: '#000000',
    outlineWidth: 2,
  })

  function set<K extends keyof CustomSettings>(key: K, val: CustomSettings[K]) {
    setSettings((s) => ({ ...s, [key]: val }))
  }

  function copy(id: string, value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(id); setTimeout(() => setCopied(null), 2000)
    })
  }

  async function downloadCustom() {
    setDownloading('custom')
    try {
      const displayText = settings.allCaps ? text.toUpperCase() : text
      await renderAndDownload({
        text: displayText,
        fontPx: settings.fontSize * 1.5,
        lsPx: settings.letterSpacing,
        lineHeight: settings.lineHeight,
        rotation: settings.rotation,
        bold: settings.bold,
        italic: settings.italic,
        allCaps: settings.allCaps,
        fontColor: settings.fontColor,
        bgColor: settings.bgColor,
        shadowOn: settings.shadowOn,
        shadowColor: settings.shadowColor,
        shadowDist: settings.shadowDist,
        shadowBlur: settings.shadowBlur,
        outlineOn: settings.outlineOn,
        outlineColor: settings.outlineColor,
        outlineWidth: settings.outlineWidth,
        format,
        filename: 'papyrus-custom',
      })
    } finally { setDownloading(null) }
  }

  async function downloadPreset(s: PapyrusStyle) {
    setDownloading(s.id)
    try {
      const output = s.transform(text || 'The Great Papyrus')
      const fontPx = parseFloat(String(s.style.fontSize)) * 20
      await renderAndDownload({
        text: output,
        fontPx,
        lsPx: parseFloat(String(s.style.letterSpacing)) * fontPx,
        lineHeight: Number(s.style.lineHeight) || 1.5,
        rotation: 0, bold: false, italic: false, allCaps: false,
        fontColor: String(s.style.color || '#1a1a1a'),
        bgColor: '#ffffff',
        shadowOn: false, shadowColor: '#000', shadowDist: 0, shadowBlur: 0,
        outlineOn: false, outlineColor: '#000', outlineWidth: 1,
        format,
        filename: `papyrus-${s.id}`,
        presetBgStops: s.canvas.bgStops,
        presetTextColor: s.canvas.textColor,
        presetShadowColor: s.canvas.shadowColor,
        presetShadowBlur: s.canvas.shadowBlur,
      })
    } finally { setDownloading(null) }
  }

  const customDisplayText = settings.allCaps ? text.toUpperCase() : (text || 'The Great Papyrus')
  const previewStyle: React.CSSProperties = {
    fontFamily: "'Papyrus', fantasy, serif",
    fontSize: `${settings.fontSize}px`,
    fontWeight: settings.bold ? 'bold' : 'normal',
    fontStyle: settings.italic ? 'italic' : 'normal',
    letterSpacing: `${settings.letterSpacing}px`,
    lineHeight: settings.lineHeight,
    color: settings.fontColor,
    textShadow: settings.shadowOn
      ? `${settings.shadowDist}px ${settings.shadowDist}px ${settings.shadowBlur}px ${settings.shadowColor}`
      : undefined,
    transform: settings.rotation ? `rotate(${settings.rotation}deg)` : undefined,
    WebkitTextStroke: settings.outlineOn ? `${settings.outlineWidth}px ${settings.outlineColor}` : undefined,
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  }

  return (
    <div className="space-y-8">

      {/* ── Text input — full width ── */}
      <div>
        <label className="block text-sm font-semibold mb-2">Your Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
          maxLength={200}
          placeholder="Type something worthy of the Papyrus font…"
          className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <div className="flex items-center justify-between mt-1.5 flex-wrap gap-2">
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLES.map((ex) => (
              <button key={ex} onClick={() => setText(ex)}
                className="text-xs px-2.5 py-1 rounded-full border bg-muted/20 hover:bg-muted/40 transition text-muted-foreground hover:text-foreground">
                {ex}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground shrink-0">{text.length}/200</span>
        </div>
      </div>

      {/* ── Two columns: Controls left | Preview right (sticky) ── */}
      <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-8 lg:items-start space-y-6 lg:space-y-0">

        {/* Left: Customize controls */}
        <div className="space-y-5">
          <h2 className="text-base font-bold border-b pb-2">Customize Style</h2>

          {/* Sliders */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              { key: 'fontSize' as const, label: 'Font Size', val: `${settings.fontSize}px`, min: 16, max: 120, step: 1 },
              { key: 'letterSpacing' as const, label: 'Letter Spacing', val: `${settings.letterSpacing}px`, min: -2, max: 20, step: 0.5 },
              { key: 'lineHeight' as const, label: 'Line Height', val: `${settings.lineHeight}`, min: 1, max: 3, step: 0.1 },
              { key: 'rotation' as const, label: 'Text Rotation', val: `${settings.rotation}°`, min: -45, max: 45, step: 1 },
            ].map(({ key, label, val, min, max, step }) => (
              <div key={key}>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                  {label}: <span className="text-foreground">{val}</span>
                </label>
                <input type="range" min={min} max={max} step={step} value={settings[key] as number}
                  onChange={(e) => set(key, Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
                  <span>{min}{key === 'rotation' ? '°' : key === 'lineHeight' ? '' : 'px'}</span>
                  <span>{max}{key === 'rotation' ? '°' : key === 'lineHeight' ? '' : 'px'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Style toggles + Colors */}
          <div className="flex flex-wrap gap-4 items-start">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1.5">Style</p>
              <div className="flex gap-2">
                {[
                  { key: 'bold' as const, label: 'B', title: 'Bold', cls: 'font-bold' },
                  { key: 'italic' as const, label: 'I', title: 'Italic', cls: 'italic' },
                  { key: 'allCaps' as const, label: 'AA', title: 'All Caps', cls: 'text-xs font-bold tracking-wide' },
                ].map(({ key, label, title, cls }) => (
                  <button key={key} title={title} onClick={() => set(key, !settings[key])}
                    className={`w-10 h-10 rounded-lg border text-sm transition ${cls} ${settings[key] ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/20 hover:bg-muted/40 border-muted/40'}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1.5">Font Color</p>
              <div className="flex items-center gap-2">
                <input type="color" value={settings.fontColor} onChange={(e) => set('fontColor', e.target.value)}
                  className="w-10 h-10 rounded-lg border cursor-pointer p-0.5 bg-background" />
                <span className="text-xs font-mono text-muted-foreground">{settings.fontColor}</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1.5">Background</p>
              <div className="flex items-center gap-2">
                <input type="color" value={settings.bgColor} onChange={(e) => set('bgColor', e.target.value)}
                  className="w-10 h-10 rounded-lg border cursor-pointer p-0.5 bg-background" />
                <span className="text-xs font-mono text-muted-foreground">{settings.bgColor}</span>
              </div>
            </div>
          </div>

          {/* Shadow */}
          <div className="p-4 rounded-xl bg-muted/10 border space-y-3">
            <div className="flex items-center gap-3">
              <button onClick={() => set('shadowOn', !settings.shadowOn)}
                className={`relative w-10 h-5 rounded-full transition-colors ${settings.shadowOn ? 'bg-primary' : 'bg-muted/40'}`}>
                <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.shadowOn ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
              <span className="text-sm font-semibold">Shadow</span>
              {settings.shadowOn && (
                <div className="flex items-center gap-2 ml-2">
                  <input type="color" value={settings.shadowColor} onChange={(e) => set('shadowColor', e.target.value)}
                    className="w-7 h-7 rounded-md border cursor-pointer p-0.5 bg-background" />
                  <span className="text-xs font-mono text-muted-foreground">{settings.shadowColor}</span>
                </div>
              )}
            </div>
            {settings.shadowOn && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Distance: <strong className="text-foreground">{settings.shadowDist}px</strong></label>
                  <input type="range" min={0} max={30} value={settings.shadowDist}
                    onChange={(e) => set('shadowDist', Number(e.target.value))} className="w-full accent-primary" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Blur: <strong className="text-foreground">{settings.shadowBlur}px</strong></label>
                  <input type="range" min={0} max={40} value={settings.shadowBlur}
                    onChange={(e) => set('shadowBlur', Number(e.target.value))} className="w-full accent-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Outline */}
          <div className="p-4 rounded-xl bg-muted/10 border space-y-3">
            <div className="flex items-center gap-3">
              <button onClick={() => set('outlineOn', !settings.outlineOn)}
                className={`relative w-10 h-5 rounded-full transition-colors ${settings.outlineOn ? 'bg-primary' : 'bg-muted/40'}`}>
                <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.outlineOn ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
              <span className="text-sm font-semibold">Outline</span>
              {settings.outlineOn && (
                <div className="flex items-center gap-2 ml-2">
                  <input type="color" value={settings.outlineColor} onChange={(e) => set('outlineColor', e.target.value)}
                    className="w-7 h-7 rounded-md border cursor-pointer p-0.5 bg-background" />
                  <span className="text-xs font-mono text-muted-foreground">{settings.outlineColor}</span>
                </div>
              )}
            </div>
            {settings.outlineOn && (
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Width: <strong className="text-foreground">{settings.outlineWidth}px</strong></label>
                <input type="range" min={1} max={10} value={settings.outlineWidth}
                  onChange={(e) => set('outlineWidth', Number(e.target.value))} className="w-full accent-primary" />
              </div>
            )}
          </div>
        </div>

        {/* Right: sticky live preview */}
        <div className="lg:sticky lg:top-6 space-y-3">
          <h2 className="text-base font-bold border-b pb-2">Preview</h2>

          {/* Preview box */}
          <div className="rounded-2xl border-2 border-primary/20">
            <div
              className="min-h-[200px] flex items-center justify-center"
              style={{
                backgroundColor: settings.bgColor,
                padding: settings.rotation ? `${Math.abs(settings.rotation) * 2 + 40}px 32px` : '32px',
                borderRadius: 'inherit',
              }}
            >
              <span style={previewStyle}>{customDisplayText}</span>
            </div>
          </div>

          {/* Format + actions */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">Format:</span>
            <div className="flex gap-1 p-1 bg-muted/20 rounded-lg border">
              {(['png', 'jpeg'] as const).map((f) => (
                <button key={f} onClick={() => setFormat(f)}
                  className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide transition ${format === f ? 'bg-background shadow border text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => copy('custom', customDisplayText)}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-semibold border bg-background hover:bg-muted/20 transition">
              {copied === 'custom' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied === 'custom' ? 'Copied!' : 'Copy Text'}
            </button>
            <button onClick={downloadCustom} disabled={downloading === 'custom'}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed">
              <Download className="w-4 h-4" />
              {downloading === 'custom' ? 'Rendering…' : `Download ${format.toUpperCase()}`}
            </button>
          </div>
        </div>

      </div>

      {/* ── Preset Styles — full width below ── */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 border-t" />
          <h2 className="text-base font-bold px-2">Preset Styles</h2>
          <div className="flex-1 border-t" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {PRESETS.map((s) => {
            const output = s.transform(text || 'The Great Papyrus')
            const isCopied = copied === s.id
            const isDownloading = downloading === s.id
            return (
              <div key={s.id} className="rounded-2xl border p-5 space-y-3 transition hover:shadow-md" style={s.wrapperStyle}>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold">{s.name}</span>
                      {s.tag && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{s.tag}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button onClick={() => copy(s.id, output)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border bg-background/80 hover:bg-background transition">
                      {isCopied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      {isCopied ? 'Copied' : 'Copy'}
                    </button>
                    <button onClick={() => downloadPreset(s)} disabled={isDownloading}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed">
                      <Download className="w-3.5 h-3.5" />
                      {isDownloading ? '…' : format.toUpperCase()}
                    </button>
                  </div>
                </div>
                <div className="min-h-[60px] flex items-center" style={{ ...s.style, maxWidth: '100%', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  {output}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Downloads are 1200px wide — just the styled text on its background, no borders or labels.
      </p>
    </div>
  )
}
