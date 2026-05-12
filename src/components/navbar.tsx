'use client'

import { useState, useRef, useEffect } from 'react'
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
  Library,
  Wrench,
  ChevronDown,
  Mic2,
  Tag,
  Layers,
  Puzzle,
  Sparkles,
  Volume2,
  Trophy,
  PenLine,
  Ear,
  BarChart2,
  FileText,
  Wand2,
  Shuffle,
  Cloud,
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

const WORD_TOOLS = [
  { href: '/synonyms',      label: 'Synonyms',       icon: BookOpen,  desc: 'Similar words'           },
  { href: '/antonyms',      label: 'Antonyms',        icon: BookOpen,  desc: 'Opposite words'          },
  { href: '/rhymes',        label: 'Rhymes',          icon: Mic2,      desc: 'Perfect & near rhymes'   },
  { href: '/collocations',  label: 'Collocations',    icon: BookOpen,  desc: 'Words that go together'  },
  { href: '/dictionary',    label: 'Dictionary',      icon: BookMarked,desc: 'Definitions & examples'  },
  { href: '/adjectives-for',label: 'Adjectives For',  icon: PenLine,   desc: 'Words to describe nouns' },
  { href: '/nouns-for',     label: 'Nouns For',       icon: Tag,       desc: 'Things described by adj' },
  { href: '/homophones',    label: 'Homophones',      icon: Volume2,   desc: 'Sound-alike words'       },
  { href: '/types-of',      label: 'Types Of',        icon: Layers,    desc: 'Kinds & varieties'       },
  { href: '/parts-of',      label: 'Parts Of',        icon: Puzzle,    desc: 'Components & structure'  },
  { href: '/related-words', label: 'Related Words',   icon: Sparkles,  desc: 'Words by topic'          },
  { href: '/scrabble-word-finder', label: 'Scrabble', icon: Trophy,    desc: 'Word finder with scores' },
  { href: '/sounds-like',          label: 'Sounds Like',    icon: Ear,      desc: 'Find words by sound'     },
  { href: '/word-frequency',       label: 'Word Frequency',    icon: BarChart2, desc: 'Common vs rare words'    },
  { href: '/fill-in-the-blank',   label: 'Fill in the Blank', icon: Puzzle,    desc: 'Find words that fit'     },
  { href: '/vocabulary-grader',   label: 'Vocabulary Grader', icon: FileText,  desc: 'Grade text by word rarity'},
  { href: '/find-the-word',       label: 'Find the Word',     icon: Wand2,     desc: 'Describe it, we\'ll name it' },
  { href: '/bigram-explorer',     label: 'Bigram Explorer',   icon: BarChart2, desc: 'Words before & after any word' },
  { href: '/word-unscrambler',   label: 'Word Unscrambler',  icon: Shuffle,   desc: 'Find words from scrambled letters' },
  { href: '/word-cloud',         label: 'Word Cloud',        icon: Cloud,     desc: 'Visualize text as a word cloud' },
]

export function Navbar({ showHistoryButton = false, historyCount = 0, onHistoryClick, showFavoritesButton = false, favoritesCount = 0, onFavoritesClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [wordsOpen, setWordsOpen] = useState(false)
  const [mobileWordsOpen, setMobileWordsOpen] = useState(false)
  const pathname = usePathname()
  const wordsRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (wordsRef.current && !wordsRef.current.contains(e.target as Node))
        setWordsOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setWordsOpen(false)
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    if (path === '/ai-translate') return pathname === '/ai-translate' || pathname.startsWith('/ai-translate/')
    if (path === '/phrases') return pathname === '/phrases' || pathname.startsWith('/phrases/')
    if (path === '/learn') return pathname === '/learn' || pathname.startsWith('/learn/')
    if (path === '/vocabulary') return pathname === '/vocabulary' || pathname.startsWith('/vocabulary/')
    if (path === '/language') return pathname === '/language' || pathname.startsWith('/language/')
    if (path === '/tools') return pathname === '/tools' || pathname.startsWith('/tools/')
    return pathname === path
  }

  const isWordsActive = WORD_TOOLS.some((t) => pathname === t.href || pathname.startsWith(t.href + '/'))

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium flex items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`

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
            <Link href="/ai-translate" className={navLinkClass(isActive('/ai-translate'))}>
              <Globe className="w-4 h-4" />Translate
            </Link>
            <Link href="/languages" className={navLinkClass(isActive('/languages'))}>
              <BookOpen className="w-4 h-4" />Languages
            </Link>
            <Link href="/phrases" className={navLinkClass(isActive('/phrases'))}>
              <MessageSquare className="w-4 h-4" />Phrases
            </Link>

            {/* Words dropdown */}
            <div className="relative" ref={wordsRef}>
              <button
                onClick={() => setWordsOpen((o) => !o)}
                className={`text-sm font-medium flex items-center gap-1 transition-colors ${isWordsActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                <BookMarked className="w-4 h-4" />
                Words
                <ChevronDown className={`w-3 h-3 transition-transform ${wordsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {wordsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-background border rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-1"
                  >
                    {WORD_TOOLS.map(({ href, label, icon: Icon, desc }) => (
                      <Link
                        key={href}
                        href={href}
                        className={`flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-muted transition-colors group ${pathname === href || pathname.startsWith(href + '/') ? 'bg-primary/5' : ''}`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-tight">{label}</p>
                          <p className="text-xs text-muted-foreground leading-tight">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/learn" className={navLinkClass(isActive('/learn'))}>
              <GraduationCap className="w-4 h-4" />Learn
            </Link>
            <Link href="/vocabulary" className={navLinkClass(isActive('/vocabulary'))}>
              <BookMarked className="w-4 h-4" />Vocab
            </Link>
            <Link href="/tools" className={navLinkClass(isActive('/tools'))}>
              <Wrench className="w-4 h-4" />Tools
            </Link>
            <Link href="/about" className={navLinkClass(isActive('/about'))}>About</Link>
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
              <div className="flex flex-col gap-1">
                {[
                  { href: '/ai-translate', label: 'Translate',  icon: Globe },
                  { href: '/languages',   label: 'Languages',  icon: BookOpen },
                  { href: '/phrases',     label: 'Phrases',    icon: MessageSquare },
                  { href: '/learn',       label: 'Learn',      icon: GraduationCap },
                  { href: '/vocabulary',  label: 'Vocabulary', icon: BookMarked },
                  { href: '/language',    label: 'Language Guides', icon: Library },
                  { href: '/tools',       label: 'Tools',      icon: Wrench },
                ].map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors ${isActive(href) ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />{label}
                  </Link>
                ))}

                {/* Mobile Words section */}
                <button
                  onClick={() => setMobileWordsOpen((o) => !o)}
                  className={`text-sm font-medium flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors w-full text-left ${isWordsActive ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}
                >
                  <BookMarked className="w-4 h-4" />
                  Word Tools
                  <ChevronDown className={`w-3 h-3 ml-auto transition-transform ${mobileWordsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileWordsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-1 overflow-hidden"
                    >
                      {WORD_TOOLS.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          className={`text-sm flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${pathname === href ? 'text-primary bg-primary/5 font-medium' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon className="w-3.5 h-3.5" />{label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-t my-1" />
                {[
                  { href: '/about',   label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium px-3 py-2.5 rounded-xl transition-colors ${isActive(href) ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary hover:bg-muted'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}

                {showHistoryButton && onHistoryClick && (
                  <button
                    onClick={() => { onHistoryClick(); setMobileMenuOpen(false) }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-3 py-2.5"
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
                    onClick={() => { onFavoritesClick(); setMobileMenuOpen(false) }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-3 py-2.5"
                  >
                    <Bookmark className="w-4 h-4" /><span>Favorites</span>
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
