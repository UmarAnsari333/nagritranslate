import { Metadata } from 'next'
import { languages, getLanguageByValue, slugifyLanguage } from '@/lib/languages'

// Parse slug to get source and target languages
function parseSlug(slug: string): { source: string; target: string } | null {
  const match = slug.match(/^(.+)-to-(.+)$/)
  if (!match) return null

  const sourceSlug = match[1]
  const targetSlug = match[2]

  // Find language by slugified value
  const sourceLang = languages.find(l => slugifyLanguage(l.label) === sourceSlug || l.value === sourceSlug)
  const targetLang = languages.find(l => slugifyLanguage(l.label) === targetSlug || l.value === targetSlug)

  if (!sourceLang || !targetLang) return null

  return { source: sourceLang.label, target: targetLang.label }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (!parsed) {
    return {
      title: 'Translation Not Found',
      description: 'The language pair you are looking for does not exist.',
    }
  }

  const { source, target } = parsed

  return {
    title: `Translate ${source} to ${target} with AI`,
    description: `Translate text from ${source} to ${target} using AI powered ${source} to ${target} online Translator.`,
    keywords: [
      `${source.toLowerCase()} to ${target.toLowerCase()}`,
      `translate ${source.toLowerCase()} to ${target.toLowerCase()}`,
      `${target.toLowerCase()} translator`,
      `${source.toLowerCase()} ${target.toLowerCase()} translation`,
      `${source.toLowerCase()} to ${target.toLowerCase()} ai translator`,
    ],
    openGraph: {
      title: `Translate ${source} to ${target} with AI`,
      description: `Translate text from ${source} to ${target} using AI powered ${source} to ${target} online Translator.`,
      type: 'website',
      url: `https://nagritranslate.com/ai-translate/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Translate ${source} to ${target} with AI`,
      description: `Translate text from ${source} to ${target} using AI powered ${source} to ${target} online Translator.`,
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
