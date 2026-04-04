'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Languages, Shield, Lock, Eye, Database, Cookie, AlertCircle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Privacy Policy</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">Your Privacy Matters</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Translate. We provide a free online translation service that prioritizes your privacy. 
              Unlike many other services, we do not require registration, and we do not store your translations on our servers.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Translation Text:</strong> Temporarily processed but not stored on our servers.</li>
              <li><strong>Translation History:</strong> Stored locally in your browser, never leaves your device.</li>
              <li><strong>Usage Analytics:</strong> Anonymous statistics to improve our service.</li>
            </ul>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">What We Do NOT Collect</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal identification information (no registration required)</li>
              <li>Email addresses or contact details</li>
              <li>Payment information (completely free)</li>
              <li>Your translation content on our servers</li>
            </ul>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">How We Use Information</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Providing accurate translation services</li>
              <li>Improving our translation algorithms</li>
              <li>Monitoring and preventing abuse</li>
              <li>Ensuring security and stability</li>
            </ul>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">Cookies & Local Storage</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Translation History:</strong> Stored locally for quick access</li>
              <li><strong>Preferences:</strong> Language and settings preferences</li>
              <li><strong>Theme:</strong> Dark/light mode preference</li>
            </ul>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All data transmission is encrypted using HTTPS. Since we do not store translations on our servers, 
              the risk of data breaches is minimized. Your history remains on your device under your control.
            </p>
          </div>

          <div className="p-6 bg-muted/30 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Clear your translation history anytime via browser settings</li>
              <li>Disable cookies in your browser</li>
              <li>Use our service anonymously without personal information</li>
              <li>Contact us with privacy-related questions</li>
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
              <Link href="/privacy" className="hover:text-primary font-medium">Privacy</Link>
              <Link href="/terms" className="hover:text-primary">Terms</Link>
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
