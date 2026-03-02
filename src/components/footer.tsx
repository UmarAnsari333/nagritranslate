import Link from 'next/link'
import Image from 'next/image'
import { Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/nagritranslate-logo.webp"
                alt="Nagri Translate"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Free AI-powered online translation service supporting 248+ languages.
              Fast, accurate, and always free.
            </p>
            <p className="text-xs text-muted-foreground">
              🌍 248+ Languages • 100% Free • No Registration
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/ai-translate/english-to-spanish" className="hover:text-primary transition-colors">English to Spanish</Link></li>
              <li><Link href="/ai-translate/english-to-french" className="hover:text-primary transition-colors">English to French</Link></li>
              <li><Link href="/ai-translate/english-to-hindi" className="hover:text-primary transition-colors">English to Hindi</Link></li>
              <li><Link href="/ai-translate/hindi-to-english" className="hover:text-primary transition-colors">Hindi to English</Link></li>
              <li><Link href="/ai-translate/english-to-urdu" className="hover:text-primary transition-colors">English to Urdu</Link></li>
              <li><Link href="/ai-translate/english-to-arabic" className="hover:text-primary transition-colors">English to Arabic</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Features</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> Text Translation</li>
              <li className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> 248+ Languages</li>
              <li className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> AI Powered</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/languages" className="hover:text-primary transition-colors">Languages</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nagri Translate. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
