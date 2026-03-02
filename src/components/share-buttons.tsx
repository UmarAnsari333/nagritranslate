'use client'

import { motion } from 'framer-motion'
import {
  Share2,
  MessageCircle,
  Copy,
  Check,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'sonner'

interface ShareButtonsProps {
  text: string
  translatedText: string
  sourceLang: string
  targetLang: string
  compact?: boolean
  url?: string
}

export function ShareButtons({
  text,
  translatedText,
  sourceLang,
  targetLang,
  compact = false,
  url
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const shareText = `"${text}" → "${translatedText}"`

  const handleCopy = async () => {
    const fullText = `${text} → ${translatedText}`
    try {
      await navigator.clipboard.writeText(fullText)
      setCopied(true)
      toast.success('Copied to clipboard')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy to clipboard')
    }
  }

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText}\n\nShared via Translate.app`
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handleTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareText)}`
    window.open(telegramUrl, '_blank')
  }

  const handleTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${shareText}\n\nShared via Translate.app`
    )}`
    window.open(twitterUrl, '_blank')
  }

  const handleLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`
    window.open(linkedInUrl, '_blank')
  }

  const handleEmail = () => {
    const mailtoUrl = `mailto:?subject=Translation&body=${encodeURIComponent(
      `${shareText}\n\nShared via ${shareUrl}`
    )}`
    window.location.href = mailtoUrl
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Translation',
          text: shareText,
          url: shareUrl,
        })
      } catch (err) {
        toast.error('Failed to share')
      }
    }
  }

  const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="h-8 w-8 touch-manipulation text-muted-foreground hover:text-foreground"
          title="Copy translation"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-wrap items-center gap-2">
        {/* Native Share (mobile) */}
        {canNativeShare && (
          <Button
            variant="outline"
            size="icon"
            onClick={handleNativeShare}
            className="touch-manipulation"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        )}

        {/* Copy */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          className="touch-manipulation"
          title="Copy translation"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </Button>

        {/* WhatsApp */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleWhatsApp}
          className="touch-manipulation text-green-600 hover:text-green-700 hover:bg-green-50"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </Button>

        {/* Telegram */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleTelegram}
          className="touch-manipulation text-blue-500 hover:text-blue-600 hover:bg-blue-50"
          title="Share on Telegram"
        >
          <Share2 className="w-4 h-4" />
        </Button>

        {/* Twitter/X */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleTwitter}
          className="touch-manipulation text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          title="Share on X (Twitter)"
        >
          <Share2 className="w-4 h-4" />
        </Button>

        {/* LinkedIn */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleLinkedIn}
          className="touch-manipulation text-blue-700 hover:text-blue-800 hover:bg-blue-50"
          title="Share on LinkedIn"
        >
          <Share2 className="w-4 h-4" />
        </Button>

        {/* Email */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleEmail}
          className="touch-manipulation"
          title="Share via Email"
        >
          <Mail className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}

export function CompactShareButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="h-8 w-8 touch-manipulation text-muted-foreground hover:text-foreground"
      title="Share"
    >
      <Share2 className="w-4 h-4" />
    </Button>
  )
}
