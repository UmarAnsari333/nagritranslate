import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Translation Service',
  description: 'Read our privacy policy for the AI translation service. We protect your data and do not store your translations on our servers.',
  keywords: ['privacy policy', 'translation privacy', 'data protection', 'ai translate privacy', 'secure translation'],
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
