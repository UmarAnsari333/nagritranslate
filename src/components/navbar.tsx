'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Globe,
  Bookmark,
  BookOpen,
  Menu,
  X,
  MessageSquare,
  GraduationCap,
  BookMarked,
  Library
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

interface NavbarProps {
  showHistoryButton?: boolean
  historyCount?: number
  onHistoryClick?: () => void
  showFavoritesButton?: boolean
  favoritesCount?: number
  onFavoritesClick?: () => void
}

export function Navbar({ showHistoryButton = false, historyCount = 0, onHistoryClick, showFavoritesButton = false, favoritesCount = 0, onFavoritesClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/ai-translate') {
      return pathname === '/ai-translate' || pathname.startsWith('/ai-translate/')
    }
    if (path === '/phrases') {
      return pathname === '/phrases' || pathname.startsWith('/phrases/')
    }
    if (path === '/learn') {
      return pathname === '/learn' || pathname.startsWith('/learn/')
    }
    if (path === '/vocabulary') {
      return pathname === '/vocabulary' || pathname.startsWith('/vocabulary/')
    }
    if (path === '/language') {
      return pathname === '/language' || pathname.startsWith('/language/')
    }
    return pathname === path
  }

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/nagritranslate-logo.webp"
                alt="Nagri Translate"
                width={40}
                height={40}
                className="rounded-lg"
                priority
              />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold">Nagri Translate</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Free language translation</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/ai-translate"
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isActive('/ai-translate')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Globe className="w-4 h-4" />
              Translate
            </Link>
            <Link 
              href="/languages" 
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isActive('/languages') 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Languages
            </Link>
            <Link
              href="/phrases"
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isActive('/phrases')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Phrases
            </Link>
            <Link
              href="/learn"
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isActive('/learn')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Learn
            </Link>
            <Link
              href="/vocabulary"
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isActive('/vocabulary')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              Vocabulary
            </Link>
            <Link
              href="/language"
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                isActive('/language')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Library className="w-4 h-4" />
              Guides
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            {showHistoryButton && onHistoryClick && (
              <button
                onClick={onHistoryClick}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative"
              >
                <span>History</span>
                {historyCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                    {historyCount > 99 ? '99+' : historyCount}
                  </span>
                )}
              </button>
            )}
            {showFavoritesButton && onFavoritesClick && (
              <button
                onClick={onFavoritesClick}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative"
              >
                <Bookmark className="w-4 h-4" />
                <span>Favorites</span>
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-yellow-500 text-white text-[10px] flex items-center justify-center">
                    {favoritesCount > 99 ? '99+' : favoritesCount}
                  </span>
                )}
              </button>
            )}
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="/ai-translate"
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive('/ai-translate')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Globe className="w-4 h-4" />
                  Translate
                </Link>
                <Link 
                  href="/languages" 
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive('/languages') 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4" />
                  Languages
                </Link>
                <Link
                  href="/phrases"
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive('/phrases')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare className="w-4 h-4" />
                  Phrases
                </Link>
                <Link
                  href="/learn"
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive('/learn')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-4 h-4" />
                  Learn
                </Link>
                <Link
                  href="/vocabulary"
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive('/vocabulary')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookMarked className="w-4 h-4" />
                  Vocabulary
                </Link>
                <Link
                  href="/language"
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive('/language')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Library className="w-4 h-4" />
                  Language Guides
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/about')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/contact')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {showHistoryButton && onHistoryClick && (
                  <button
                    onClick={() => {
                      onHistoryClick()
                      setMobileMenuOpen(false)
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    History
                    {historyCount > 0 && (
                      <span className="h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                        {historyCount > 99 ? '99+' : historyCount}
                      </span>
                    )}
                  </button>
                )}
                {showFavoritesButton && onFavoritesClick && (
                  <button
                    onClick={() => {
                      onFavoritesClick()
                      setMobileMenuOpen(false)
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Favorites</span>
                    {favoritesCount > 0 && (
                      <span className="h-4 w-4 rounded-full bg-yellow-500 text-white text-[10px] flex items-center justify-center">
                        {favoritesCount > 99 ? '99+' : favoritesCount}
                      </span>
                    )}
                  </button>
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
