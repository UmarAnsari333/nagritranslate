'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Languages, FileText, Scale, CheckCircle, XCircle, Gavel } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Terms of Service</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Translate service, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree, you are prohibited from using this service.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Translate provides a free online translation service allowing users to translate text and documents 
              between multiple languages using AI technology. The service is free and does not require registration.
            </p>
          </div>

          <div className="p-6 bg-green-500/5 rounded-2xl border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">User Obligations</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use the service only for lawful purposes</li>
              <li>Not submit illegal, harmful, or infringing content</li>
              <li>Not interfere with or disrupt the service</li>
              <li>Respect intellectual property rights</li>
              <li>Verify important translations with professionals</li>
            </ul>
          </div>

          <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Prohibited Uses</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>For unlawful purposes or to solicit illegal acts</li>
              <li>To violate regulations or laws</li>
              <li>To infringe intellectual property rights</li>
              <li>To harass, abuse, or discriminate</li>
              <li>To upload viruses or malicious code</li>
              <li>To spam, phish, or scrape data</li>
            </ul>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of content you submit. By using our service, you grant us a temporary license 
              to process your content solely for translation. We do not claim ownership over your translated content.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Translate shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              or any loss of profits, data, or intangible losses resulting from your use of the service or 
              errors in translations provided.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided "AS IS" and "AS AVAILABLE". We make no warranties, expressed or implied, 
              including merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use of our service after changes 
              constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5" />
              <span className="font-bold">Translate</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary">About</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
              <Link href="/privacy" className="hover:text-primary">Privacy</Link>
              <Link href="/terms" className="hover:text-primary font-medium">Terms</Link>
              <Link href="/disclaimer" className="hover:text-primary">Disclaimer</Link>
            </div>
          </div>
          <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Translate. All rights reserved.
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  )
}
