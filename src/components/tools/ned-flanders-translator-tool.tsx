'use client'

import { useState } from 'react'
import { Copy, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

// Phrase-level replacements (checked before individual words)
const phraseMap: [string, string][] = [
  ['how are you doing', 'how-diddly are ya doin\', neighborino'],
  ['how are you', 'how-diddly are ya doin\', neighborino'],
  ['how do you do', 'how-diddly-do you do, neighborino'],
  ['how is it going', 'how-diddly is it goin\', neighborino'],
  ['how is everything', 'how-diddly is everything-diddly, neighborino'],
  ['i am good', 'I\'m doing okely-dokely'],
  ['i am great', 'I\'m doing great-a-rino'],
  ['i am fine', 'I\'m doing just fine-diddly-ine'],
  ['i am doing well', 'I\'m doing okely-dokely'],
  ['i am okay', 'I\'m doing okely-dokely'],
  ['i am ok', 'I\'m doing okely-dokely'],
  ['i am doing good', 'I\'m doing okely-dokely'],
  ['i love you', 'I love-diddly you, neighborino'],
  ['good morning', 'Good-diddly morning, neighborino'],
  ['good afternoon', 'Good-diddly afternoon, neighborino'],
  ['good evening', 'Good-diddly evening, neighborino'],
  ['good night', 'Good-diddly night, neighborino'],
  ['nice to meet you', 'Nice-diddly to meet ya, neighborino'],
  ['what are you doing', 'What-diddly are you doin\', neighborino'],
  ['what is up', 'What-diddly is up, neighborino'],
  ['what\'s up', 'What-diddly is up, neighborino'],
  ['whats up', 'What-diddly is up, neighborino'],
  ['thank you very much', 'Thanks-a-diddly-rooney very-diddly much'],
  ['thank you', 'Thanks-a-diddly-rooney'],
  ['have a good day', 'Have a good-diddly day, neighborino'],
  ['have a nice day', 'Have a nice-diddly day, neighborino'],
]

const wordMap: { [key: string]: string } = {
  // Greetings
  'hello': 'Hi-diddly-ho',
  'hi': 'Hi-diddly-ho',
  'hey': 'Hi-diddly-ho',
  'howdy': 'Hi-diddly-ho',
  'greetings': 'Hi-diddly-ho',
  'goodbye': 'Bye-diddly-bye',
  'bye': 'Bye-diddly-bye',
  'farewell': 'Bye-diddly-bye',

  // Question words
  'how': 'how-diddly',
  'what': 'what-diddly',
  'where': 'where-diddly',
  'when': 'when-diddly',
  'why': 'why-diddly',
  'who': 'who-diddly',

  // Common verbs
  'do': 'doodly',
  'did': 'did-diddly',
  'are': 'are-diddly',
  'is': 'is-diddly',
  'was': 'was-diddly',
  'were': 'were-diddly',
  'going': 'goin\'-diddly',
  'doing': 'doin\'-diddly',
  'have': 'have-diddly',
  'get': 'get-diddly',
  'got': 'got-diddly',
  'think': 'think-diddly',
  'know': 'know-diddly',
  'feel': 'feel-diddly',
  'want': 'want-diddly',
  'need': 'need-a-rooney',
  'like': 'like-a-diddly',
  'love': 'love-diddly',
  'hate': 'do not particularly care for',
  'help': 'help-diddly',
  'try': 'try-diddly',
  'believe': 'believe-a-rooney',
  'dislike': 'do not particularly enjoy-diddly',
  'say': 'say-diddly',
  'said': 'said-diddly',
  'come': 'come-diddly',
  'go': 'go-diddly',
  'see': 'see-diddly',
  'look': 'look-diddly',
  'make': 'make-diddly',
  'take': 'take-diddly',
  'give': 'give-diddly',
  'live': 'live-diddly',

  // Common pronouns / small words
  'you': 'you-diddly',
  'your': 'your-diddly',
  'my': 'my-diddly',
  'me': 'me-diddly',
  'we': 'we-diddly',
  'our': 'our-diddly',
  'they': 'they-diddly',
  'their': 'their-diddly',
  'it': 'it-diddly',
  'this': 'this-diddly',
  'that': 'that-diddly',
  'these': 'these-diddly',
  'those': 'those-diddly',

  // Affirmatives / negatives
  'ok': 'Okely-dokely',
  'okay': 'Okely-dokely',
  'alright': 'Okely-dokely',
  'sure': 'Sure-diddly-ure',
  'yes': 'Yessiree-diddly',
  'yeah': 'Yessiree-diddly',
  'yep': 'Yepperino',
  'yup': 'Yepperino',
  'no': 'No-sirree-diddly',
  'nope': 'No-sirree-diddly',
  'nah': 'No-sirree-diddly',
  'never': 'Never-diddly-ever',

  // Pleasantries
  'please': 'Please-a-rooney',
  'thanks': 'Thanks-a-diddly-rooney',
  'thank': 'Thank-diddly',
  'sorry': 'Sorry-arino',
  'excuse': 'Excuse-a-rooney',
  'welcome': 'Welcome-diddly',

  // People / relations
  'neighbor': 'neighborino',
  'neighbors': 'neighborinos',
  'friend': 'friend-a-rino',
  'friends': 'friend-a-rinos',
  'buddy': 'buddy-arino',
  'pal': 'pal-a-rino',
  'guy': 'fella-diddly',
  'man': 'fella-diddly',
  'dude': 'fella-diddly',
  'homer': 'Homer-diddly-omer',
  'family': 'family-diddly',
  'wife': 'lovely wife-a-rooney',
  'husband': 'husband-diddly',
  'kids': 'little ones-diddly',
  'children': 'little ones-diddly',

  // Adjectives
  'good': 'good-diddly-ood',
  'great': 'great-a-rino',
  'wonderful': 'wonderfully-diddly',
  'nice': 'nice-a-rino',
  'awesome': 'awesome-a-rooney',
  'fantastic': 'fant-diddly-astic',
  'terrible': 'terr-diddly-ible',
  'bad': 'not-so-good-diddly',
  'awful': 'not-so-good-a-rooney',
  'horrible': 'horr-diddly-ible',
  'stupid': 'not-so-smarty-diddly',
  'dumb': 'not-so-smarty-diddly',
  'crazy': 'craze-diddly-azy',
  'weird': 'peculiar-diddly',
  'strange': 'peculiar-diddly',
  'happy': 'happy-diddly',
  'sad': 'sad-a-rino',
  'fine': 'fine-diddly-ine',
  'dandy': 'dandy-diddly',
  'well': 'well-diddly',

  // Adverbs
  'very': 'very-diddly',
  'really': 'really-diddly',
  'actually': 'actually-diddly',
  'absolutely': 'absol-diddly-utely',
  'definitely': 'definit-diddly-ely',
  'probably': 'prob-diddly-ably',
  'maybe': 'maybe-diddly',
  'just': 'just-diddly',
  'quite': 'quite-diddly',
  'so': 'so-diddly',

  // Common nouns
  'something': 'some-diddly-thing',
  'everything': 'every-diddly-thing',
  'nothing': 'noth-diddly-ing',
  'anything': 'any-diddly-thing',
  'everyone': 'every-diddly-one',
  'somebody': 'some-diddly-body',
  'nobody': 'no-diddly-body',
  'today': 'today-diddly',
  'tomorrow': 'tomor-diddly-ow',
  'yesterday': 'yester-diddly-day',

  // Religion
  'god': 'the good Lord',
  'jesus': 'the good Lord',
  'lord': 'the good Lord',
  'church': 'church-a-rooney',
  'pray': 'pray-diddly',
  'prayer': 'prayer-a-rooney',
  'bible': 'the Good Book',
  'amen': 'Amen-diddly-en',
  'bless': 'bless-diddly',
  'blessed': 'bless-diddly-ed',

  // Profanity → Ned-isms
  'hell': 'heck',
  'damn': 'darn',
  'dammit': 'darn it',
  'damnit': 'darn it',
  'crap': 'crud',
  'shit': 'shoot',
  'bullshit': 'bull-diddly',
  'fuck': 'fudge',
  'fucking': 'fudging',
  'fucker': 'fudger',
  'ass': 'rear end',
  'asshole': 'not-so-nice fella',
  'bastard': 'big meanie',
  'idiot': 'not-so-clever fella',
  'jerk': 'not-so-nice fella',
  'moron': 'not-so-bright fella',
}

const diddlySuffixes = ['-diddly', '-doodly', '-a-rooney', '-erino', '-arino']

function getDeterministicSuffix(word: string, index: number): string {
  const seed = (word.charCodeAt(0) + word.length + index) % diddlySuffixes.length
  return diddlySuffixes[seed]
}

function shouldAddSuffix(word: string, index: number): boolean {
  // Add suffix to every ~4th word that's 4+ chars and not a short function word
  const skip = new Set(['the', 'and', 'but', 'for', 'nor', 'yet', 'with', 'from', 'into', 'onto', 'upon', 'than', 'then', 'also', 'both', 'each', 'more', 'most', 'much', 'such', 'some', 'any', 'all', 'not', 'has', 'had', 'its', 'been', 'will', 'can', 'may', 'let', 'via'])
  return word.length >= 4 && !skip.has(word.toLowerCase()) && (word.charCodeAt(0) + index) % 4 === 0
}

function preserveCase(original: string, replacement: string): string {
  if (!original || !replacement) return replacement
  if (original[0] === original[0].toUpperCase() && original[0] !== original[0].toLowerCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1)
  }
  return replacement
}

function toNedFlanders(text: string): string {
  if (!text.trim()) return ''

  // Step 1: Replace phrases with unicode placeholder tokens (❬N❭).
  // ❬ and ❭ are NOT \w characters, so the word-level regex below won't touch them.
  const savedPhrases: string[] = []
  let result = text

  for (const [phrase, replacement] of phraseMap) {
    const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    result = result.replace(regex, (match) => {
      const idx = savedPhrases.length
      const finalReplacement =
        match[0] === match[0].toUpperCase() && match[0] !== match[0].toLowerCase()
          ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
          : replacement
      savedPhrases.push(finalReplacement)
      return `❬${idx}❭`
    })
  }

  // Step 2: Apply word-level replacements only to non-phrase text.
  // Placeholders (❬N❭) are skipped because ❬/❭ break \b\w+\b matching.
  let wordIndex = 0
  result = result.replace(/\b\w+\b/g, (word) => {
    const lower = word.toLowerCase()
    const currentIndex = wordIndex++

    if (wordMap[lower]) {
      return preserveCase(word, wordMap[lower])
    }

    if (shouldAddSuffix(word, currentIndex)) {
      return word + getDeterministicSuffix(word, currentIndex)
    }

    return word
  })

  // Step 3: Restore phrase replacements from placeholders.
  result = result.replace(/❬(\d+)❭/g, (_, idx) => savedPhrases[parseInt(idx)])

  return result
}

const examples = [
  { label: 'Greeting', input: 'Hello neighbor, how are you today?' },
  { label: 'Anger', input: 'Damn it Homer, you are so stupid!' },
  { label: 'Positivity', input: 'Everything is wonderful and great today!' },
  { label: 'Request', input: 'Please help me with something important.' },
]

export function NedFlandersTranslatorTool() {
  const [input, setInput] = useState('')

  const output = toNedFlanders(input)

  const copyToClipboard = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      toast({ title: 'Copied!', description: 'Ned Flanders text copied to clipboard.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy the text manually.', variant: 'destructive' })
    }
  }

  const loadExample = (exampleInput: string) => {
    setInput(exampleInput)
  }

  const clear = () => {
    setInput('')
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex.label}
              onClick={() => loadExample(ex.input)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Text</label>
        <Textarea
          placeholder="Type something neighborino... (e.g. Hello friend, how are you today?)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[120px] resize-none font-mono text-sm"
        />
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{input.length} characters</span>
          {input && (
            <button onClick={clear} className="flex items-center gap-1 hover:text-foreground transition-colors">
              <RefreshCw className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Output */}
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Ned Flanders Says...</label>
            <Button size="sm" variant="outline" onClick={copyToClipboard} className="gap-2">
              <Copy className="w-3.5 h-3.5" />
              Copy
            </Button>
          </div>
          <div className="relative p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 min-h-[120px]">
            <p className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
              {output}
            </p>
          </div>
        </div>
      )}

      {!input && (
        <div className="text-center py-8 text-muted-foreground">
          <div className="text-4xl mb-3">🏡</div>
          <p className="text-sm">Type some text above and watch it turn into Ned Flanders speak!</p>
          <p className="text-xs mt-1 opacity-70">Okely-dokely!</p>
        </div>
      )}
    </div>
  )
}
