// Common adjectives curated for "nouns for [adjective]" searches

const SIZE = [
  'big', 'small', 'large', 'tiny', 'huge', 'little', 'giant', 'massive',
  'narrow', 'wide', 'tall', 'short', 'long', 'deep', 'shallow', 'vast',
  'immense', 'miniature', 'colossal', 'petite',
]

const COLOR = [
  'red', 'blue', 'green', 'yellow', 'black', 'white', 'golden', 'silver',
  'purple', 'crimson', 'scarlet', 'pale', 'dark', 'bright', 'gray', 'brown',
  'orange', 'pink', 'violet', 'ivory',
]

const PHYSICAL = [
  'hot', 'cold', 'heavy', 'light', 'fast', 'slow', 'sharp', 'soft', 'hard',
  'rough', 'smooth', 'wet', 'dry', 'warm', 'cool', 'frozen', 'burning',
  'broken', 'hollow', 'empty', 'full', 'open', 'closed', 'solid', 'liquid',
  'thin', 'thick', 'loose', 'tight', 'flat', 'round', 'curved', 'twisted',
]

const APPEARANCE = [
  'beautiful', 'ugly', 'clean', 'dirty', 'old', 'young', 'fresh', 'ancient',
  'worn', 'ruined', 'sacred', 'forbidden', 'magical', 'cursed', 'hidden',
  'lost', 'forgotten', 'shining', 'glowing', 'faded', 'crumbling', 'polished',
  'tattered', 'pristine', 'ornate', 'bare', 'wild',
]

const PERSONALITY = [
  'brave', 'fierce', 'gentle', 'noble', 'cunning', 'loyal', 'wise', 'foolish',
  'kind', 'cruel', 'proud', 'humble', 'bold', 'timid', 'calm', 'restless',
  'greedy', 'generous', 'selfish', 'devoted', 'ruthless', 'innocent', 'wicked',
  'honest', 'deceitful', 'fearless', 'reckless', 'patient', 'stubborn', 'clever',
]

const EMOTIONAL = [
  'angry', 'lonely', 'joyful', 'mournful', 'fearful', 'hopeful', 'desperate',
  'passionate', 'serene', 'anxious', 'melancholy', 'cheerful', 'gloomy',
  'excited', 'content', 'bitter', 'jealous', 'grateful', 'sorrowful', 'radiant',
]

const NATURE_QUALITY = [
  'mortal', 'divine', 'earthly', 'celestial', 'natural', 'supernatural',
  'ordinary', 'extraordinary', 'legendary', 'mythical', 'real', 'imaginary',
]

const INTENSITY = [
  'dangerous', 'safe', 'deadly', 'harmless',
]

const ALL_ADJECTIVES = [
  ...SIZE, ...COLOR, ...PHYSICAL, ...APPEARANCE, ...PERSONALITY,
  ...EMOTIONAL, ...NATURE_QUALITY, ...INTENSITY,
]

export const NOUN_ADJECTIVES: string[] = [
  ...new Set(ALL_ADJECTIVES.map((w) => w.toLowerCase())),
].sort()
