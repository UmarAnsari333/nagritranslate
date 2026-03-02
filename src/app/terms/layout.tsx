import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - AI Translation',
  description: 'Read our terms of service for the AI translation platform. Understand your rights and responsibilities when using our free translation service.',
  keywords: ['terms of service', 'translation terms', 'ai translate terms', 'user agreement', 'service terms'],
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
