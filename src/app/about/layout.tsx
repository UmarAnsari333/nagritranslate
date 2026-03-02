import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - AI Powered Translation Service',
  description: 'Learn about our mission to provide free AI-powered translation services for 248+ languages. Breaking language barriers worldwide with advanced AI technology.',
  keywords: ['about translator', 'ai translation service', 'free translation mission', 'language barriers', 'about ai translate'],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
