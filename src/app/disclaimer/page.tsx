'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Languages, AlertTriangle, FileText, Scale, AlertCircle, Info } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full">Disclaimer</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">Important Information</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="p-6 bg-orange-500/5 rounded-2xl border border-orange-500/20">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">General Disclaimer</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The translation service is provided "as is" without any warranties. While we strive for accuracy, 
              we cannot guarantee translations will be error-free or suitable for any particular purpose. 
              Machine translation may not capture all nuances or cultural contexts.
            </p>
          </div>

          <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">No Professional Advice</h2>
            </div>
            <p className="text-muted-foreground mb-4">Our service is not intended to provide professional advice:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Legal advice or legal document preparation</li>
              <li>Medical advice or translation for diagnosis</li>
              <li>Financial or investment recommendations</li>
              <li>Official document translation</li>
            </ul>
          </div>

          <div className="p-6 bg-yellow-500/5 rounded-2xl border border-yellow-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Translation Limitations</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Context:</strong> Machine translation may not understand full context</li>
              <li><strong>Idioms:</strong> Expressions may be translated literally</li>
              <li><strong>Cultural Nuances:</strong> Subtle meanings may not be conveyed</li>
              <li><strong>Technical Terms:</strong> Specialized terminology may need verification</li>
            </ul>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Translate shall not be liable for any direct, indirect, 
              incidental, special, consequential, or punitive damages resulting from errors in translations 
              or reliance on translated content.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">User Responsibility</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Verify translations before use in critical applications</li>
              <li>Ensure rights to translate submitted content</li>
              <li>Not use the service for illegal purposes</li>
              <li>Seek professional services when appropriate</li>
            </ul>
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
              <Link href="/terms" className="hover:text-primary">Terms</Link>
              <Link href="/disclaimer" className="hover:text-primary font-medium">Disclaimer</Link>
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
