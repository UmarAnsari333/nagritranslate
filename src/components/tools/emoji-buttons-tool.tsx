'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import { Search, X, Clock, Copy, Check, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

// ─── Types ────────────────────────────────────────────────────────────────────

interface EmojiEntry {
  e: string   // emoji character
  n: string   // name (used for search)
  t?: string  // extra tags for search (space-separated)
}

// ─── Emoji Data ───────────────────────────────────────────────────────────────

const SMILEYS: EmojiEntry[] = [
  { e: '😀', n: 'grinning', t: 'happy smile laugh' },
  { e: '😃', n: 'big eyes', t: 'happy smile' },
  { e: '😄', n: 'smile eyes', t: 'happy laugh' },
  { e: '😁', n: 'beaming smile', t: 'happy grin' },
  { e: '😆', n: 'laughing', t: 'haha lol funny' },
  { e: '😅', n: 'sweat smile', t: 'nervous relief' },
  { e: '🤣', n: 'rolling laughing', t: 'rofl lol' },
  { e: '😂', n: 'joy tears', t: 'lol crying laugh' },
  { e: '🙂', n: 'slightly smiling', t: 'smile nice' },
  { e: '🙃', n: 'upside down', t: 'silly sarcastic' },
  { e: '😉', n: 'winking', t: 'wink flirty' },
  { e: '😊', n: 'smiling blush', t: 'happy sweet' },
  { e: '😇', n: 'halo angel', t: 'innocent' },
  { e: '🥰', n: 'smiling hearts', t: 'love adore crush' },
  { e: '😍', n: 'heart eyes', t: 'love wow amazing' },
  { e: '🤩', n: 'star struck', t: 'amazed excited' },
  { e: '😘', n: 'blowing kiss', t: 'love kiss' },
  { e: '😗', n: 'kissing', t: 'kiss' },
  { e: '☺️', n: 'relaxed smile', t: 'cozy warm' },
  { e: '😚', n: 'kissing closed eyes', t: 'kiss' },
  { e: '😙', n: 'kissing smile', t: 'kiss smile' },
  { e: '🥲', n: 'smiling tear', t: 'bittersweet touched' },
  { e: '😋', n: 'yum', t: 'delicious food tasty' },
  { e: '😛', n: 'tongue out', t: 'silly fun' },
  { e: '😜', n: 'winking tongue', t: 'playful joking' },
  { e: '🤪', n: 'zany face', t: 'crazy silly' },
  { e: '😝', n: 'squinting tongue', t: 'gross silly' },
  { e: '🤑', n: 'money mouth', t: 'rich cash greedy' },
  { e: '🤗', n: 'hugging', t: 'hug warm' },
  { e: '🤭', n: 'hand over mouth', t: 'oops secret surprised' },
  { e: '🫢', n: 'eyes wide peek', t: 'shock surprise' },
  { e: '🫣', n: 'peeking', t: 'shy hide' },
  { e: '🤫', n: 'shushing', t: 'quiet hush secret' },
  { e: '🤔', n: 'thinking', t: 'hmm pondering' },
  { e: '🫡', n: 'saluting', t: 'yes sir respect' },
  { e: '🤐', n: 'zipper mouth', t: 'quiet silent' },
  { e: '🤨', n: 'raised eyebrow', t: 'skeptical suspicious' },
  { e: '😐', n: 'neutral face', t: 'blank meh' },
  { e: '😑', n: 'expressionless', t: 'blank bored' },
  { e: '😶', n: 'no mouth', t: 'speechless silent' },
  { e: '😏', n: 'smirking', t: 'smug sly flirty' },
  { e: '😒', n: 'unamused', t: 'annoyed meh' },
  { e: '🙄', n: 'eye roll', t: 'bored annoyed whatever' },
  { e: '😬', n: 'grimacing', t: 'awkward cringe' },
  { e: '🤥', n: 'lying face', t: 'liar pinocchio' },
  { e: '😌', n: 'relieved', t: 'calm peaceful' },
  { e: '😔', n: 'pensive', t: 'sad thoughtful' },
  { e: '😪', n: 'sleepy', t: 'tired sleep' },
  { e: '🤤', n: 'drooling', t: 'hungry yummy' },
  { e: '😴', n: 'sleeping', t: 'zzz tired rest' },
  { e: '😷', n: 'face mask', t: 'sick covid ill' },
  { e: '🤒', n: 'thermometer face', t: 'sick fever' },
  { e: '🤕', n: 'bandage face', t: 'hurt injury' },
  { e: '🤢', n: 'nauseated', t: 'sick gross' },
  { e: '🤮', n: 'vomiting', t: 'sick puke gross' },
  { e: '🤧', n: 'sneezing', t: 'sick sneeze cold' },
  { e: '🥵', n: 'hot face', t: 'heat sweat fever' },
  { e: '🥶', n: 'cold face', t: 'freeze ice shiver' },
  { e: '🥴', n: 'woozy', t: 'drunk dizzy' },
  { e: '😵', n: 'dizzy face', t: 'confused shocked' },
  { e: '🤯', n: 'exploding head', t: 'mindblown shocked' },
  { e: '🤠', n: 'cowboy hat', t: 'western yeehaw' },
  { e: '🥳', n: 'partying', t: 'party celebrate birthday' },
  { e: '🥸', n: 'disguised', t: 'disguise incognito' },
  { e: '😎', n: 'sunglasses', t: 'cool chill awesome' },
  { e: '🤓', n: 'nerd glasses', t: 'geek smart' },
  { e: '🧐', n: 'monocle', t: 'hmm curious fancy' },
  { e: '😕', n: 'confused', t: 'uncertain puzzled' },
  { e: '🫤', n: 'diagonal mouth', t: 'meh unsure' },
  { e: '😟', n: 'worried', t: 'concerned upset' },
  { e: '🙁', n: 'frowning', t: 'sad unhappy' },
  { e: '☹️', n: 'sad face', t: 'unhappy' },
  { e: '😮', n: 'open mouth', t: 'surprised wow' },
  { e: '😲', n: 'astonished', t: 'shocked surprised' },
  { e: '😳', n: 'flushed', t: 'embarrassed shocked' },
  { e: '🥺', n: 'pleading', t: 'please sad puppy eyes' },
  { e: '🥹', n: 'holding back tears', t: 'touched emotional' },
  { e: '😦', n: 'frowning open mouth', t: 'worried surprised' },
  { e: '😨', n: 'fearful', t: 'scared afraid' },
  { e: '😰', n: 'anxious sweat', t: 'nervous stressed' },
  { e: '😥', n: 'disappointed', t: 'sad relieved' },
  { e: '😢', n: 'crying', t: 'sad tear' },
  { e: '😭', n: 'loudly crying', t: 'sobbing sad' },
  { e: '😱', n: 'screaming fear', t: 'scared horror' },
  { e: '😤', n: 'steam nose', t: 'angry frustrated' },
  { e: '😡', n: 'pouting angry', t: 'mad' },
  { e: '😠', n: 'angry', t: 'mad furious' },
  { e: '🤬', n: 'symbols mouth', t: 'swearing furious angry' },
  { e: '😈', n: 'smiling devil', t: 'evil mischief' },
  { e: '👿', n: 'angry devil', t: 'evil angry' },
  { e: '💀', n: 'skull', t: 'dead death bones' },
  { e: '☠️', n: 'skull crossbones', t: 'danger poison dead' },
  { e: '💩', n: 'poop', t: 'crap poo' },
  { e: '🤡', n: 'clown', t: 'circus joker' },
  { e: '👻', n: 'ghost', t: 'halloween spooky boo' },
  { e: '👽', n: 'alien', t: 'ufo space extraterrestrial' },
  { e: '👾', n: 'space invader', t: 'game alien pixel' },
  { e: '🤖', n: 'robot', t: 'bot ai machine' },
]

const PEOPLE: EmojiEntry[] = [
  { e: '👋', n: 'waving hand', t: 'hello hi bye' },
  { e: '🤚', n: 'raised back hand', t: 'stop' },
  { e: '🖐️', n: 'hand fingers', t: 'five stop' },
  { e: '✋', n: 'raised hand', t: 'stop high five' },
  { e: '🖖', n: 'vulcan salute', t: 'spock star trek' },
  { e: '🫱', n: 'rightward hand', t: 'reach' },
  { e: '🫲', n: 'leftward hand', t: 'reach' },
  { e: '👌', n: 'ok hand', t: 'perfect okay' },
  { e: '🤌', n: 'pinched fingers', t: 'italian chef' },
  { e: '🤏', n: 'pinching hand', t: 'small tiny' },
  { e: '✌️', n: 'victory hand', t: 'peace two' },
  { e: '🤞', n: 'crossed fingers', t: 'luck wish' },
  { e: '🫰', n: 'hand snap', t: 'snap fingers' },
  { e: '🤟', n: 'love you gesture', t: 'rock love' },
  { e: '🤘', n: 'sign of horns', t: 'rock metal' },
  { e: '🤙', n: 'call me hand', t: 'shaka hang loose' },
  { e: '👈', n: 'pointing left', t: 'arrow' },
  { e: '👉', n: 'pointing right', t: 'arrow' },
  { e: '👆', n: 'pointing up', t: 'above arrow' },
  { e: '🖕', n: 'middle finger', t: 'rude offensive' },
  { e: '👇', n: 'pointing down', t: 'below arrow' },
  { e: '☝️', n: 'index up', t: 'one point' },
  { e: '🫵', n: 'pointing at viewer', t: 'you this' },
  { e: '👍', n: 'thumbs up', t: 'good yes like approve' },
  { e: '👎', n: 'thumbs down', t: 'bad no dislike' },
  { e: '✊', n: 'raised fist', t: 'power protest' },
  { e: '👊', n: 'oncoming fist', t: 'punch hit' },
  { e: '🤛', n: 'left facing fist', t: 'bump fist' },
  { e: '🤜', n: 'right facing fist', t: 'bump fist' },
  { e: '👏', n: 'clapping hands', t: 'applause well done bravo' },
  { e: '🙌', n: 'raising hands', t: 'hooray celebrate' },
  { e: '🫶', n: 'heart hands', t: 'love heart' },
  { e: '👐', n: 'open hands', t: 'hug give' },
  { e: '🤲', n: 'palms up', t: 'give receive' },
  { e: '🙏', n: 'folded hands', t: 'pray please thank you' },
  { e: '🤝', n: 'handshake', t: 'deal agree' },
  { e: '💅', n: 'nail polish', t: 'nails manicure fabulous' },
  { e: '🤳', n: 'selfie', t: 'photo' },
  { e: '💪', n: 'flexed bicep', t: 'muscle strong gym' },
  { e: '🦵', n: 'leg', t: 'kick foot' },
  { e: '🦶', n: 'foot', t: 'feet' },
  { e: '👂', n: 'ear', t: 'listen hear' },
  { e: '👃', n: 'nose', t: 'smell' },
  { e: '👀', n: 'eyes', t: 'see look watching' },
  { e: '👁️', n: 'eye', t: 'see look' },
  { e: '👅', n: 'tongue', t: 'taste lick' },
  { e: '💋', n: 'lips kiss', t: 'kiss love' },
  { e: '👶', n: 'baby', t: 'infant child' },
  { e: '👦', n: 'boy', t: 'child kid' },
  { e: '👧', n: 'girl', t: 'child kid' },
  { e: '🧑', n: 'person', t: 'adult human' },
  { e: '👨', n: 'man', t: 'male adult' },
  { e: '👩', n: 'woman', t: 'female adult' },
  { e: '🧓', n: 'older person', t: 'senior' },
  { e: '👴', n: 'old man', t: 'grandpa senior' },
  { e: '👵', n: 'old woman', t: 'grandma senior' },
  { e: '🧙', n: 'mage wizard', t: 'magic fantasy' },
  { e: '🦸', n: 'superhero', t: 'hero super powers' },
  { e: '🦹', n: 'supervillain', t: 'villain evil' },
  { e: '🎅', n: 'santa claus', t: 'christmas holiday' },
  { e: '🤶', n: 'mrs claus', t: 'christmas holiday' },
  { e: '🧑‍💻', n: 'technologist', t: 'coder programmer dev' },
  { e: '👨‍💻', n: 'man technologist', t: 'programmer dev' },
  { e: '👩‍💻', n: 'woman technologist', t: 'programmer dev' },
  { e: '👫', n: 'couple', t: 'man woman love' },
  { e: '👬', n: 'two men', t: 'couple' },
  { e: '👭', n: 'two women', t: 'couple' },
  { e: '👨‍👩‍👦', n: 'family', t: 'parents kid' },
  { e: '🧑‍🎄', n: 'mx claus', t: 'christmas' },
  { e: '🥷', n: 'ninja', t: 'warrior stealth' },
  { e: '👷', n: 'construction worker', t: 'builder hard hat' },
  { e: '🕵️', n: 'detective', t: 'spy investigator' },
  { e: '🧑‍🍳', n: 'cook chef', t: 'kitchen food restaurant' },
  { e: '🧑‍🎨', n: 'artist', t: 'painter creative' },
  { e: '🧑‍🔧', n: 'mechanic', t: 'repair fix tool' },
  { e: '🧑‍🌾', n: 'farmer', t: 'agriculture food' },
  { e: '🧑‍✈️', n: 'pilot', t: 'flight aviation' },
  { e: '🧑‍🚀', n: 'astronaut', t: 'space rocket' },
  { e: '🧑‍🚒', n: 'firefighter', t: 'fire rescue emergency' },
  { e: '🧑‍⚕️', n: 'health worker', t: 'doctor nurse medical' },
  { e: '🧑‍⚖️', n: 'judge', t: 'law court justice' },
  { e: '🧑‍🎤', n: 'singer', t: 'music performance star' },
  { e: '🧑‍🏫', n: 'teacher', t: 'school education' },
  { e: '🧑‍🔬', n: 'scientist', t: 'lab research science' },
  { e: '🧑‍💼', n: 'office worker', t: 'business work suit' },
  { e: '💑', n: 'couple heart', t: 'love romance relationship' },
  { e: '💏', n: 'couple kiss', t: 'love romance kiss' },
  { e: '🫂', n: 'people hugging', t: 'hug embrace friends' },
  { e: '🧑‍🤝‍🧑', n: 'people holding hands', t: 'friends together' },
]

const ANIMALS: EmojiEntry[] = [
  { e: '🐶', n: 'dog', t: 'puppy pet' },
  { e: '🐱', n: 'cat', t: 'kitten pet' },
  { e: '🐭', n: 'mouse', t: 'rat' },
  { e: '🐹', n: 'hamster', t: 'pet' },
  { e: '🐰', n: 'rabbit', t: 'bunny cute' },
  { e: '🦊', n: 'fox', t: 'foxy clever' },
  { e: '🐻', n: 'bear', t: 'teddy' },
  { e: '🐼', n: 'panda', t: 'bear cute' },
  { e: '🐨', n: 'koala', t: 'australia' },
  { e: '🐯', n: 'tiger', t: 'wild' },
  { e: '🦁', n: 'lion', t: 'king wild' },
  { e: '🐮', n: 'cow', t: 'moo farm' },
  { e: '🐷', n: 'pig', t: 'oink farm' },
  { e: '🐸', n: 'frog', t: 'pond' },
  { e: '🐵', n: 'monkey', t: 'ape' },
  { e: '🙈', n: 'see no evil', t: 'monkey cover eyes' },
  { e: '🙉', n: 'hear no evil', t: 'monkey cover ears' },
  { e: '🙊', n: 'speak no evil', t: 'monkey cover mouth' },
  { e: '🐔', n: 'chicken', t: 'hen farm bird' },
  { e: '🐧', n: 'penguin', t: 'cold arctic' },
  { e: '🐦', n: 'bird', t: 'tweet fly' },
  { e: '🐤', n: 'baby chick', t: 'cute bird' },
  { e: '🦆', n: 'duck', t: 'quack pond' },
  { e: '🦅', n: 'eagle', t: 'bird prey' },
  { e: '🦉', n: 'owl', t: 'wise night bird' },
  { e: '🦇', n: 'bat', t: 'halloween night' },
  { e: '🐺', n: 'wolf', t: 'howl wild' },
  { e: '🐗', n: 'boar', t: 'pig wild' },
  { e: '🐴', n: 'horse face', t: 'neigh' },
  { e: '🦄', n: 'unicorn', t: 'magic rainbow' },
  { e: '🐝', n: 'honeybee', t: 'bee honey' },
  { e: '🐛', n: 'bug caterpillar', t: 'insect' },
  { e: '🦋', n: 'butterfly', t: 'beauty transform' },
  { e: '🐌', n: 'snail', t: 'slow' },
  { e: '🐞', n: 'ladybug', t: 'insect lucky' },
  { e: '🐜', n: 'ant', t: 'insect tiny' },
  { e: '🦟', n: 'mosquito', t: 'insect bite' },
  { e: '🦗', n: 'cricket', t: 'insect' },
  { e: '🕷️', n: 'spider', t: 'web scary' },
  { e: '🦂', n: 'scorpion', t: 'sting desert' },
  { e: '🐢', n: 'turtle', t: 'slow shell' },
  { e: '🐍', n: 'snake', t: 'reptile' },
  { e: '🦎', n: 'lizard', t: 'reptile' },
  { e: '🦕', n: 'sauropod', t: 'dinosaur dino' },
  { e: '🦖', n: 't-rex', t: 'dinosaur dino' },
  { e: '🐊', n: 'crocodile', t: 'alligator reptile' },
  { e: '🦦', n: 'otter', t: 'cute swim' },
  { e: '🦥', n: 'sloth', t: 'slow lazy' },
  { e: '🦔', n: 'hedgehog', t: 'spiky cute' },
  { e: '🐿️', n: 'chipmunk', t: 'squirrel' },
  { e: '🐉', n: 'dragon', t: 'fantasy fire' },
  { e: '🐲', n: 'dragon face', t: 'fantasy fire' },
  { e: '🌵', n: 'cactus', t: 'desert plant' },
  { e: '🎄', n: 'christmas tree', t: 'holiday xmas' },
  { e: '🌲', n: 'evergreen tree', t: 'pine forest' },
  { e: '🌳', n: 'deciduous tree', t: 'tree nature' },
  { e: '🌴', n: 'palm tree', t: 'beach tropical' },
  { e: '🌱', n: 'seedling', t: 'sprout grow plant' },
  { e: '🌿', n: 'herb', t: 'plant green leaf' },
  { e: '☘️', n: 'shamrock', t: 'clover lucky irish' },
  { e: '🍀', n: 'four leaf clover', t: 'lucky' },
  { e: '🌾', n: 'sheaf of rice', t: 'wheat grain harvest' },
  { e: '💐', n: 'bouquet', t: 'flowers gift' },
  { e: '🌷', n: 'tulip', t: 'flower spring' },
  { e: '🌹', n: 'rose', t: 'flower love' },
  { e: '🥀', n: 'wilted flower', t: 'dead sad' },
  { e: '🌺', n: 'hibiscus', t: 'flower tropical' },
  { e: '🌸', n: 'cherry blossom', t: 'flower spring japan' },
  { e: '🌼', n: 'blossom', t: 'flower spring' },
  { e: '🌻', n: 'sunflower', t: 'flower sun' },
  { e: '☀️', n: 'sun', t: 'sunny bright hot' },
  { e: '🌤️', n: 'partly cloudy', t: 'weather' },
  { e: '⛅', n: 'cloudy', t: 'weather clouds' },
  { e: '☁️', n: 'cloud', t: 'weather' },
  { e: '🌧️', n: 'rain cloud', t: 'rainy weather' },
  { e: '⛈️', n: 'thunderstorm', t: 'lightning storm' },
  { e: '🌨️', n: 'snow cloud', t: 'snowy weather' },
  { e: '❄️', n: 'snowflake', t: 'cold winter' },
  { e: '⚡', n: 'lightning', t: 'thunder bolt electric' },
  { e: '🔥', n: 'fire', t: 'flame hot lit' },
  { e: '💧', n: 'water drop', t: 'liquid wet' },
  { e: '🌊', n: 'ocean wave', t: 'sea surf water' },
  { e: '🌈', n: 'rainbow', t: 'colorful pride' },
  { e: '🌪️', n: 'tornado', t: 'twister storm wind' },
  { e: '🌙', n: 'crescent moon', t: 'night moon' },
  { e: '⭐', n: 'star', t: 'rating' },
  { e: '🌟', n: 'glowing star', t: 'shine bright' },
  // Sea creatures
  { e: '🐟', n: 'fish', t: 'sea ocean' },
  { e: '🐠', n: 'tropical fish', t: 'sea colorful coral' },
  { e: '🐡', n: 'blowfish', t: 'sea pufferfish' },
  { e: '🦈', n: 'shark', t: 'ocean danger jaws predator' },
  { e: '🐳', n: 'spouting whale', t: 'ocean sea big' },
  { e: '🐋', n: 'whale', t: 'ocean sea blue' },
  { e: '🐬', n: 'dolphin', t: 'ocean smart cute' },
  { e: '🦭', n: 'seal', t: 'ocean arctic cute' },
  { e: '🐙', n: 'octopus', t: 'sea tentacles ink' },
  { e: '🦑', n: 'squid', t: 'sea ocean' },
  { e: '🦞', n: 'lobster', t: 'seafood red crustacean' },
  { e: '🦀', n: 'crab', t: 'seafood beach claws' },
  { e: '🦐', n: 'shrimp', t: 'seafood ocean' },
  { e: '🪸', n: 'coral', t: 'reef ocean sea' },
  // More birds
  { e: '🦚', n: 'peacock', t: 'bird colorful tail' },
  { e: '🦜', n: 'parrot', t: 'bird colorful talk speak' },
  { e: '🦢', n: 'swan', t: 'bird elegant white lake' },
  { e: '🦩', n: 'flamingo', t: 'bird pink elegant' },
  { e: '🕊️', n: 'dove', t: 'bird peace white symbol' },
  { e: '🐓', n: 'rooster', t: 'bird farm cock morning' },
  { e: '🦃', n: 'turkey', t: 'bird thanksgiving farm' },
  // More mammals
  { e: '🦬', n: 'bison', t: 'wild buffalo american' },
  { e: '🦌', n: 'deer', t: 'wild forest antler' },
  { e: '🐏', n: 'ram', t: 'sheep animal horns' },
  { e: '🐑', n: 'sheep ewe', t: 'farm animal wool' },
  { e: '🐐', n: 'goat', t: 'farm animal horns' },
  { e: '🐎', n: 'horse racing', t: 'equine fast gallop' },
  { e: '🐇', n: 'rabbit', t: 'bunny hop cute' },
  { e: '🦫', n: 'beaver', t: 'animal dam wood' },
]

const FOOD: EmojiEntry[] = [
  { e: '🍎', n: 'red apple', t: 'fruit' },
  { e: '🍊', n: 'tangerine', t: 'orange citrus fruit' },
  { e: '🍋', n: 'lemon', t: 'citrus sour fruit' },
  { e: '🍇', n: 'grapes', t: 'fruit wine' },
  { e: '🍓', n: 'strawberry', t: 'fruit red' },
  { e: '🍒', n: 'cherries', t: 'fruit red' },
  { e: '🍑', n: 'peach', t: 'fruit butt' },
  { e: '🥭', n: 'mango', t: 'tropical fruit' },
  { e: '🍍', n: 'pineapple', t: 'tropical fruit' },
  { e: '🥥', n: 'coconut', t: 'tropical fruit' },
  { e: '🥝', n: 'kiwi', t: 'fruit green' },
  { e: '🍅', n: 'tomato', t: 'vegetable red' },
  { e: '🫒', n: 'olive', t: 'mediterranean food' },
  { e: '🥑', n: 'avocado', t: 'healthy food' },
  { e: '🍆', n: 'eggplant', t: 'vegetable purple aubergine' },
  { e: '🥔', n: 'potato', t: 'vegetable' },
  { e: '🥕', n: 'carrot', t: 'vegetable orange' },
  { e: '🌽', n: 'corn', t: 'vegetable maize' },
  { e: '🌶️', n: 'hot pepper', t: 'chili spicy' },
  { e: '🫑', n: 'bell pepper', t: 'vegetable' },
  { e: '🥒', n: 'cucumber', t: 'vegetable green' },
  { e: '🥬', n: 'leafy green', t: 'vegetable salad' },
  { e: '🥦', n: 'broccoli', t: 'vegetable healthy' },
  { e: '🧄', n: 'garlic', t: 'vegetable flavor' },
  { e: '🧅', n: 'onion', t: 'vegetable' },
  { e: '🍄', n: 'mushroom', t: 'fungus forest' },
  { e: '🥜', n: 'peanuts', t: 'nuts snack' },
  { e: '🌰', n: 'chestnut', t: 'nut autumn' },
  { e: '🍞', n: 'bread', t: 'loaf bake' },
  { e: '🥐', n: 'croissant', t: 'french bread pastry' },
  { e: '🥖', n: 'baguette', t: 'french bread' },
  { e: '🫓', n: 'flatbread', t: 'bread flat' },
  { e: '🥨', n: 'pretzel', t: 'snack baked' },
  { e: '🥯', n: 'bagel', t: 'bread breakfast' },
  { e: '🧀', n: 'cheese', t: 'dairy food' },
  { e: '🥚', n: 'egg', t: 'breakfast food' },
  { e: '🍳', n: 'frying pan egg', t: 'breakfast cook' },
  { e: '🧈', n: 'butter', t: 'dairy spread' },
  { e: '🥞', n: 'pancakes', t: 'breakfast sweet' },
  { e: '🧇', n: 'waffle', t: 'breakfast sweet' },
  { e: '🥓', n: 'bacon', t: 'breakfast meat' },
  { e: '🥩', n: 'cut of meat', t: 'steak protein' },
  { e: '🍗', n: 'poultry leg', t: 'chicken meat' },
  { e: '🍖', n: 'meat on bone', t: 'ribs protein' },
  { e: '🌭', n: 'hot dog', t: 'sausage fast food' },
  { e: '🍔', n: 'hamburger', t: 'burger fast food' },
  { e: '🍟', n: 'french fries', t: 'fries fast food' },
  { e: '🍕', n: 'pizza', t: 'italian fast food' },
  { e: '🌮', n: 'taco', t: 'mexican food' },
  { e: '🌯', n: 'burrito wrap', t: 'mexican food' },
  { e: '🫔', n: 'tamale', t: 'mexican food' },
  { e: '🥙', n: 'stuffed pita', t: 'mediterranean food' },
  { e: '🍝', n: 'spaghetti pasta', t: 'italian food' },
  { e: '🍜', n: 'noodles ramen', t: 'asian food' },
  { e: '🍲', n: 'pot of food', t: 'stew soup' },
  { e: '🍛', n: 'curry rice', t: 'indian asian food' },
  { e: '🍣', n: 'sushi', t: 'japanese food fish' },
  { e: '🍱', n: 'bento box', t: 'japanese food' },
  { e: '🥟', n: 'dumpling', t: 'asian food potsticker' },
  { e: '🍤', n: 'fried shrimp', t: 'seafood' },
  { e: '🍙', n: 'rice ball', t: 'japanese food onigiri' },
  { e: '🥮', n: 'moon cake', t: 'chinese food dessert' },
  { e: '🍡', n: 'dango', t: 'japanese sweet' },
  { e: '🧁', n: 'cupcake', t: 'sweet dessert birthday' },
  { e: '🍰', n: 'shortcake', t: 'sweet dessert' },
  { e: '🎂', n: 'birthday cake', t: 'celebration sweet' },
  { e: '🍮', n: 'custard pudding', t: 'dessert sweet' },
  { e: '🍭', n: 'lollipop', t: 'candy sweet' },
  { e: '🍬', n: 'candy', t: 'sweet' },
  { e: '🍫', n: 'chocolate bar', t: 'sweet cocoa' },
  { e: '🍿', n: 'popcorn', t: 'snack movie' },
  { e: '🍩', n: 'doughnut donut', t: 'sweet pastry' },
  { e: '🍪', n: 'cookie', t: 'sweet biscuit' },
  { e: '🍯', n: 'honey pot', t: 'sweet sticky' },
  { e: '🧃', n: 'juice box', t: 'drink fruit' },
  { e: '🥤', n: 'cup with straw', t: 'drink soda' },
  { e: '🧋', n: 'bubble tea', t: 'drink boba' },
  { e: '☕', n: 'coffee', t: 'hot drink morning' },
  { e: '🍵', n: 'teacup', t: 'hot drink tea' },
  { e: '🍺', n: 'beer', t: 'drink alcohol pub' },
  { e: '🍻', n: 'clinking beers', t: 'cheers toast' },
  { e: '🥂', n: 'clinking glasses', t: 'champagne toast celebrate' },
  { e: '🍷', n: 'wine glass', t: 'wine drink' },
  { e: '🥃', n: 'tumbler glass', t: 'whiskey spirits drink' },
  { e: '🍸', n: 'cocktail glass', t: 'drink martini' },
  { e: '🍹', n: 'tropical drink', t: 'cocktail vacation' },
  { e: '🧊', n: 'ice cube', t: 'cold frozen' },
  { e: '🍾', n: 'champagne bottle', t: 'celebrate party' },
  { e: '🍴', n: 'fork and knife', t: 'eat utensil' },
  { e: '🍽️', n: 'plate utensils', t: 'eat meal dinner' },
  { e: '🥗', n: 'green salad', t: 'healthy food vegetable' },
  { e: '🥘', n: 'shallow pan', t: 'paella rice food' },
  { e: '🫕', n: 'fondue', t: 'cheese swiss dip' },
  { e: '🥫', n: 'canned food', t: 'tin can preserved' },
  { e: '🧆', n: 'falafel', t: 'middle eastern food chickpea' },
  { e: '🍦', n: 'soft ice cream', t: 'dessert sweet cold' },
  { e: '🍧', n: 'shaved ice', t: 'dessert cold sweet' },
  { e: '🍨', n: 'ice cream', t: 'dessert cold sweet scoop' },
  { e: '🍚', n: 'cooked rice', t: 'asian food staple' },
  { e: '🍢', n: 'oden', t: 'japanese food skewer' },
  { e: '🥛', n: 'glass of milk', t: 'drink dairy protein' },
  { e: '🫗', n: 'pouring liquid', t: 'drink pour' },
  { e: '🧂', n: 'salt shaker', t: 'seasoning flavor' },
  { e: '🫙', n: 'jar', t: 'container preserve' },
  { e: '🫖', n: 'teapot', t: 'tea hot drink pour' },
]

const TRAVEL: EmojiEntry[] = [
  { e: '🚗', n: 'car', t: 'vehicle drive' },
  { e: '🚕', n: 'taxi', t: 'cab car' },
  { e: '🚙', n: 'suv', t: 'car vehicle' },
  { e: '🚌', n: 'bus', t: 'public transport' },
  { e: '🏎️', n: 'racing car', t: 'fast speed' },
  { e: '🚓', n: 'police car', t: 'cop law' },
  { e: '🚑', n: 'ambulance', t: 'emergency medical' },
  { e: '🚒', n: 'fire engine', t: 'firefighter emergency' },
  { e: '🚐', n: 'minibus', t: 'van transport' },
  { e: '🛻', n: 'pickup truck', t: 'vehicle' },
  { e: '🚚', n: 'delivery truck', t: 'freight vehicle' },
  { e: '🚜', n: 'tractor', t: 'farm vehicle' },
  { e: '🏍️', n: 'motorcycle', t: 'motorbike bike' },
  { e: '🛵', n: 'scooter', t: 'moped vespa' },
  { e: '🚲', n: 'bicycle', t: 'bike cycle' },
  { e: '🛴', n: 'kick scooter', t: 'ride' },
  { e: '🛹', n: 'skateboard', t: 'skate board' },
  { e: '⛽', n: 'fuel pump', t: 'gas petrol' },
  { e: '🚨', n: 'police light', t: 'siren emergency' },
  { e: '🚥', n: 'horizontal traffic light', t: 'signal' },
  { e: '🚦', n: 'traffic light', t: 'signal stop go' },
  { e: '🛑', n: 'stop sign', t: 'halt' },
  { e: '🚧', n: 'construction', t: 'roadwork barrier' },
  { e: '⚓', n: 'anchor', t: 'boat sea stable' },
  { e: '⛵', n: 'sailboat', t: 'sailing boat' },
  { e: '🚤', n: 'speedboat', t: 'boat fast' },
  { e: '🚢', n: 'ship', t: 'cruise boat sea' },
  { e: '✈️', n: 'airplane', t: 'plane flight travel' },
  { e: '🛩️', n: 'small airplane', t: 'plane' },
  { e: '🛫', n: 'takeoff plane', t: 'departure flight' },
  { e: '🛬', n: 'landing plane', t: 'arrival flight' },
  { e: '🪂', n: 'parachute', t: 'sky dive jump' },
  { e: '💺', n: 'seat', t: 'airplane seat' },
  { e: '🚁', n: 'helicopter', t: 'chopper fly' },
  { e: '🛸', n: 'flying saucer', t: 'ufo alien spaceship' },
  { e: '🚀', n: 'rocket', t: 'space launch fast' },
  { e: '🏠', n: 'house', t: 'home building' },
  { e: '🏡', n: 'house garden', t: 'home yard' },
  { e: '🏢', n: 'office building', t: 'work company' },
  { e: '🏥', n: 'hospital', t: 'medical health' },
  { e: '🏦', n: 'bank', t: 'money finance' },
  { e: '🏨', n: 'hotel', t: 'travel accommodation' },
  { e: '🏪', n: 'convenience store', t: 'shop retail' },
  { e: '🏫', n: 'school', t: 'education learning' },
  { e: '🏰', n: 'castle', t: 'medieval royal' },
  { e: '🏯', n: 'japanese castle', t: 'japan fortress' },
  { e: '🗼', n: 'tokyo tower', t: 'japan landmark' },
  { e: '🗽', n: 'statue of liberty', t: 'usa new york landmark' },
  { e: '🌁', n: 'foggy bridge', t: 'san francisco city' },
  { e: '🌃', n: 'night with stars', t: 'city night skyline' },
  { e: '🏙️', n: 'cityscape', t: 'city buildings' },
  { e: '🌄', n: 'sunrise mountain', t: 'dawn morning' },
  { e: '🌅', n: 'sunrise', t: 'dawn beach morning' },
  { e: '🌇', n: 'sunset city', t: 'evening dusk' },
  { e: '🌉', n: 'bridge night', t: 'city lights' },
  { e: '🏔️', n: 'snow mountain', t: 'mountain alps peak' },
  { e: '⛰️', n: 'mountain', t: 'peak hiking' },
  { e: '🌋', n: 'volcano', t: 'lava eruption' },
  { e: '🗻', n: 'mount fuji', t: 'japan mountain' },
  { e: '🏕️', n: 'camping', t: 'tent outdoor' },
  { e: '🏖️', n: 'beach', t: 'sand sea vacation' },
  { e: '🏜️', n: 'desert', t: 'sand hot dry' },
  { e: '🏝️', n: 'island', t: 'tropical vacation' },
  { e: '🌍', n: 'globe europe africa', t: 'world earth' },
  { e: '🌎', n: 'globe americas', t: 'world earth usa' },
  { e: '🌏', n: 'globe asia australia', t: 'world earth asia' },
  { e: '🗺️', n: 'world map', t: 'travel geography' },
]

const ACTIVITIES: EmojiEntry[] = [
  { e: '⚽', n: 'soccer football', t: 'sport ball game' },
  { e: '🏀', n: 'basketball', t: 'sport ball nba' },
  { e: '🏈', n: 'american football', t: 'sport nfl' },
  { e: '⚾', n: 'baseball', t: 'sport ball' },
  { e: '🥎', n: 'softball', t: 'sport ball' },
  { e: '🏐', n: 'volleyball', t: 'sport ball beach' },
  { e: '🏉', n: 'rugby ball', t: 'sport' },
  { e: '🥏', n: 'frisbee disc', t: 'sport throw' },
  { e: '🎾', n: 'tennis', t: 'sport ball racket' },
  { e: '🏸', n: 'badminton', t: 'sport racket' },
  { e: '🏒', n: 'ice hockey', t: 'sport stick' },
  { e: '🏑', n: 'field hockey', t: 'sport stick' },
  { e: '🏏', n: 'cricket', t: 'sport bat' },
  { e: '🏓', n: 'ping pong', t: 'table tennis sport' },
  { e: '🥊', n: 'boxing glove', t: 'fight sport punch' },
  { e: '🥋', n: 'martial arts', t: 'karate judo sport' },
  { e: '⛳', n: 'golf', t: 'sport flag hole' },
  { e: '🏹', n: 'bow and arrow', t: 'archery sport' },
  { e: '🎣', n: 'fishing pole', t: 'fish hobby' },
  { e: '🤿', n: 'diving mask', t: 'snorkel swim' },
  { e: '🎽', n: 'running shirt', t: 'sport race' },
  { e: '🎿', n: 'skis skiing', t: 'winter sport snow' },
  { e: '🛷', n: 'sled', t: 'winter snow' },
  { e: '🥌', n: 'curling stone', t: 'sport winter' },
  { e: '🎯', n: 'bullseye target', t: 'aim direct goal' },
  { e: '🪃', n: 'boomerang', t: 'throw return' },
  { e: '🏋️', n: 'weight lifting', t: 'gym strong exercise' },
  { e: '🤸', n: 'gymnastics', t: 'sport flip' },
  { e: '🏊', n: 'swimming', t: 'sport pool water' },
  { e: '🚴', n: 'cycling', t: 'bike sport' },
  { e: '🧘', n: 'yoga lotus', t: 'meditation relax' },
  { e: '🧗', n: 'climbing', t: 'rock wall sport' },
  { e: '🏄', n: 'surfing', t: 'surf wave sport' },
  { e: '🤽', n: 'water polo', t: 'swim sport' },
  { e: '🚵', n: 'mountain biking', t: 'bike outdoor sport' },
  { e: '🏆', n: 'trophy', t: 'winner champion award' },
  { e: '🥇', n: 'gold medal', t: 'first winner' },
  { e: '🥈', n: 'silver medal', t: 'second' },
  { e: '🥉', n: 'bronze medal', t: 'third' },
  { e: '🏅', n: 'sports medal', t: 'award winner' },
  { e: '🎖️', n: 'military medal', t: 'award honor' },
  { e: '🎪', n: 'circus tent', t: 'show performance' },
  { e: '🤹', n: 'juggling', t: 'circus perform' },
  { e: '🎭', n: 'theater masks', t: 'drama perform art' },
  { e: '🎨', n: 'artist palette', t: 'art paint creative' },
  { e: '🎬', n: 'clapperboard', t: 'movie film action' },
  { e: '🎤', n: 'microphone', t: 'sing music perform' },
  { e: '🎧', n: 'headphones', t: 'music listen audio' },
  { e: '🎼', n: 'musical score', t: 'sheet music notes' },
  { e: '🎹', n: 'piano keyboard', t: 'music instrument' },
  { e: '🥁', n: 'drum', t: 'percussion music' },
  { e: '🪘', n: 'long drum', t: 'percussion music' },
  { e: '🎷', n: 'saxophone', t: 'jazz music instrument' },
  { e: '🎺', n: 'trumpet', t: 'brass music instrument' },
  { e: '🎸', n: 'guitar', t: 'rock music instrument' },
  { e: '🎻', n: 'violin', t: 'classical music instrument' },
  { e: '🎲', n: 'game die dice', t: 'board game chance' },
  { e: '🎮', n: 'video game controller', t: 'gaming play' },
  { e: '🕹️', n: 'joystick', t: 'arcade game' },
  { e: '🎱', n: 'pool billiards', t: 'game' },
  { e: '🎰', n: 'slot machine', t: 'casino gamble' },
  { e: '🎳', n: 'bowling', t: 'sport game pins' },
]

const OBJECTS: EmojiEntry[] = [
  { e: '📱', n: 'mobile phone', t: 'smartphone iphone android' },
  { e: '💻', n: 'laptop', t: 'computer notebook' },
  { e: '🖥️', n: 'desktop computer', t: 'monitor pc' },
  { e: '⌨️', n: 'keyboard', t: 'type computer' },
  { e: '🖱️', n: 'computer mouse', t: 'click' },
  { e: '📷', n: 'camera', t: 'photo picture' },
  { e: '📸', n: 'camera flash', t: 'photo selfie' },
  { e: '📹', n: 'video camera', t: 'film record' },
  { e: '🎥', n: 'movie camera', t: 'film cinema' },
  { e: '📺', n: 'television', t: 'tv watch' },
  { e: '📻', n: 'radio', t: 'music broadcast' },
  { e: '🧭', n: 'compass', t: 'navigate direction' },
  { e: '⏰', n: 'alarm clock', t: 'wake time morning' },
  { e: '⌚', n: 'watch', t: 'time wrist' },
  { e: '📡', n: 'satellite antenna', t: 'signal broadcast' },
  { e: '🔋', n: 'battery', t: 'power charge energy' },
  { e: '🔌', n: 'electric plug', t: 'power charge' },
  { e: '💡', n: 'light bulb', t: 'idea bright lamp' },
  { e: '🔦', n: 'flashlight', t: 'torch light dark' },
  { e: '🕯️', n: 'candle', t: 'light flame' },
  { e: '💎', n: 'gem diamond', t: 'jewelry precious' },
  { e: '🔧', n: 'wrench', t: 'tool fix repair' },
  { e: '🔨', n: 'hammer', t: 'tool build' },
  { e: '⚒️', n: 'hammer pick', t: 'tools mining' },
  { e: '🛠️', n: 'hammer wrench', t: 'tools maintenance' },
  { e: '🔩', n: 'nut bolt', t: 'tool fix' },
  { e: '🔑', n: 'key', t: 'lock open' },
  { e: '🗝️', n: 'old key', t: 'lock antique' },
  { e: '🔐', n: 'locked key', t: 'secure private' },
  { e: '🔒', n: 'locked', t: 'secure private closed' },
  { e: '🔓', n: 'unlocked', t: 'open access' },
  { e: '🧲', n: 'magnet', t: 'attract pull' },
  { e: '🔭', n: 'telescope', t: 'stars astronomy space' },
  { e: '🔬', n: 'microscope', t: 'science lab biology' },
  { e: '🩺', n: 'stethoscope', t: 'doctor medical' },
  { e: '💊', n: 'pill tablet', t: 'medicine health' },
  { e: '🩹', n: 'bandage', t: 'injury hurt healing' },
  { e: '🧰', n: 'toolbox', t: 'tools maintenance' },
  { e: '🔎', n: 'magnifying glass', t: 'search find zoom' },
  { e: '📚', n: 'books', t: 'library reading study' },
  { e: '📖', n: 'open book', t: 'reading study' },
  { e: '📰', n: 'newspaper', t: 'news article' },
  { e: '📋', n: 'clipboard', t: 'list task notes' },
  { e: '📌', n: 'pushpin', t: 'pin location note' },
  { e: '📍', n: 'round pushpin', t: 'location map pin' },
  { e: '📎', n: 'paperclip', t: 'attach clip' },
  { e: '✂️', n: 'scissors', t: 'cut craft' },
  { e: '📏', n: 'ruler', t: 'measure length' },
  { e: '📐', n: 'triangle ruler', t: 'measure geometry' },
  { e: '✏️', n: 'pencil', t: 'write draw' },
  { e: '🖊️', n: 'pen', t: 'write ink' },
  { e: '🖋️', n: 'fountain pen', t: 'write ink fancy' },
  { e: '📝', n: 'memo notepad', t: 'write notes list' },
  { e: '💼', n: 'briefcase', t: 'work business office' },
  { e: '📁', n: 'file folder', t: 'documents organize' },
  { e: '📂', n: 'open folder', t: 'files documents' },
  { e: '📅', n: 'calendar', t: 'date schedule' },
  { e: '📆', n: 'tear-off calendar', t: 'date day' },
  { e: '📊', n: 'bar chart', t: 'data statistics graph' },
  { e: '🔖', n: 'bookmark', t: 'save mark' },
  { e: '🏷️', n: 'label tag', t: 'price mark' },
  { e: '💰', n: 'money bag', t: 'cash rich wealth' },
  { e: '💵', n: 'dollar bill', t: 'cash money usd' },
  { e: '💸', n: 'money wings', t: 'spending cash' },
  { e: '💳', n: 'credit card', t: 'payment bank' },
  { e: '🪙', n: 'coin', t: 'money currency' },
  { e: '🧾', n: 'receipt', t: 'bill payment' },
  { e: '🎁', n: 'gift wrapped', t: 'present birthday surprise' },
  { e: '🎀', n: 'ribbon bow', t: 'gift wrap' },
  { e: '🎊', n: 'confetti ball', t: 'party celebrate' },
  { e: '🎉', n: 'party popper', t: 'celebrate confetti' },
  { e: '🎈', n: 'balloon', t: 'party birthday' },
  // Magical & fun
  { e: '🪄', n: 'magic wand', t: 'wizard magic spell' },
  { e: '🔮', n: 'crystal ball', t: 'magic fortune future mystic' },
  { e: '🧿', n: 'nazar amulet', t: 'evil eye protection charm' },
  { e: '🧸', n: 'teddy bear', t: 'toy cute stuffed animal' },
  { e: '🪆', n: 'nesting dolls', t: 'matryoshka russian toy' },
  { e: '🪀', n: 'yo-yo', t: 'toy game spin' },
  { e: '🪁', n: 'slingshot', t: 'toy shoot catapult' },
  { e: '🗿', n: 'moai statue', t: 'easter island stone mysterious' },
  { e: '🏺', n: 'amphora', t: 'ancient greek pottery vase' },
  { e: '⚗️', n: 'alembic', t: 'chemistry science flask' },
  { e: '🧬', n: 'dna', t: 'science biology genetics' },
  { e: '🧪', n: 'test tube', t: 'science lab experiment' },
  { e: '🧫', n: 'petri dish', t: 'science lab biology' },
  // Household
  { e: '🛋️', n: 'couch sofa', t: 'furniture living room relax' },
  { e: '🪑', n: 'chair', t: 'furniture sit seat' },
  { e: '🛏️', n: 'bed', t: 'furniture sleep rest' },
  { e: '🚪', n: 'door', t: 'entrance exit' },
  { e: '🪞', n: 'mirror', t: 'reflection vanity look' },
  { e: '🪟', n: 'window', t: 'glass view outside' },
  { e: '🛁', n: 'bathtub', t: 'bath soak clean' },
  { e: '🚽', n: 'toilet', t: 'bathroom restroom' },
  { e: '🚿', n: 'shower', t: 'clean wash bath' },
  { e: '🪥', n: 'toothbrush', t: 'teeth clean dental' },
  { e: '🧴', n: 'lotion bottle', t: 'skin care moisturizer' },
  { e: '🧼', n: 'soap', t: 'clean wash hygiene' },
  { e: '🧽', n: 'sponge', t: 'clean scrub wash' },
  { e: '🧹', n: 'broom', t: 'sweep clean floor' },
  { e: '🧺', n: 'basket', t: 'laundry clothes' },
  { e: '🧻', n: 'roll of paper', t: 'toilet tissue' },
  { e: '🪣', n: 'bucket', t: 'water container pail' },
  { e: '🛒', n: 'shopping cart', t: 'shop retail buy grocery' },
]

const SYMBOLS: EmojiEntry[] = [
  { e: '❤️', n: 'red heart', t: 'love like' },
  { e: '🧡', n: 'orange heart', t: 'love warmth' },
  { e: '💛', n: 'yellow heart', t: 'love happiness' },
  { e: '💚', n: 'green heart', t: 'love nature' },
  { e: '💙', n: 'blue heart', t: 'love calm' },
  { e: '💜', n: 'purple heart', t: 'love military' },
  { e: '🖤', n: 'black heart', t: 'dark love goth' },
  { e: '🤍', n: 'white heart', t: 'pure love' },
  { e: '🤎', n: 'brown heart', t: 'love warmth' },
  { e: '💔', n: 'broken heart', t: 'sad love loss' },
  { e: '❤️‍🔥', n: 'heart on fire', t: 'burning love passion' },
  { e: '❣️', n: 'heart exclamation', t: 'love emphasis' },
  { e: '💕', n: 'two hearts', t: 'love couple' },
  { e: '💞', n: 'revolving hearts', t: 'love spinning' },
  { e: '💓', n: 'beating heart', t: 'love pulse' },
  { e: '💗', n: 'growing heart', t: 'love big' },
  { e: '💖', n: 'sparkling heart', t: 'love shine' },
  { e: '💘', n: 'heart arrow', t: 'love cupid' },
  { e: '💝', n: 'heart ribbon', t: 'love gift' },
  { e: '💟', n: 'heart decoration', t: 'love symbol' },
  { e: '✅', n: 'check mark', t: 'done correct yes complete' },
  { e: '❌', n: 'cross mark', t: 'no wrong incorrect' },
  { e: '⚠️', n: 'warning', t: 'caution alert danger' },
  { e: '🚫', n: 'no entry', t: 'banned forbidden' },
  { e: '⛔', n: 'no entry', t: 'stop forbidden' },
  { e: '❓', n: 'question mark', t: 'help unknown' },
  { e: '❗', n: 'exclamation mark', t: 'important alert' },
  { e: '‼️', n: 'double exclamation', t: 'serious alert' },
  { e: '💯', n: 'hundred points', t: 'perfect score 100' },
  { e: '♻️', n: 'recycling', t: 'eco green environment' },
  { e: '🔴', n: 'red circle', t: 'dot stop' },
  { e: '🟠', n: 'orange circle', t: 'dot' },
  { e: '🟡', n: 'yellow circle', t: 'dot' },
  { e: '🟢', n: 'green circle', t: 'dot go' },
  { e: '🔵', n: 'blue circle', t: 'dot' },
  { e: '🟣', n: 'purple circle', t: 'dot' },
  { e: '⚫', n: 'black circle', t: 'dot' },
  { e: '⚪', n: 'white circle', t: 'dot' },
  { e: '🟤', n: 'brown circle', t: 'dot' },
  { e: '🔶', n: 'orange diamond', t: 'shape' },
  { e: '🔷', n: 'blue diamond', t: 'shape' },
  { e: '🔸', n: 'small orange diamond', t: 'shape' },
  { e: '🔹', n: 'small blue diamond', t: 'shape' },
  { e: '🔺', n: 'red triangle up', t: 'shape arrow' },
  { e: '🔻', n: 'red triangle down', t: 'shape arrow' },
  { e: '⬆️', n: 'up arrow', t: 'direction north' },
  { e: '➡️', n: 'right arrow', t: 'direction east next' },
  { e: '⬇️', n: 'down arrow', t: 'direction south' },
  { e: '⬅️', n: 'left arrow', t: 'direction west back' },
  { e: '↩️', n: 'curved arrow', t: 'back return undo' },
  { e: '↪️', n: 'curved right arrow', t: 'redo' },
  { e: '🔃', n: 'clockwise arrows', t: 'refresh rotate' },
  { e: '🔄', n: 'counterclockwise arrows', t: 'sync refresh repeat' },
  { e: '🔔', n: 'bell notification', t: 'alert ring' },
  { e: '🔕', n: 'bell slash', t: 'mute silent' },
  { e: '🎵', n: 'music note', t: 'song audio' },
  { e: '🎶', n: 'music notes', t: 'song melody' },
  { e: '🔇', n: 'muted speaker', t: 'silent quiet' },
  { e: '🔊', n: 'loud speaker', t: 'volume sound' },
  { e: '📣', n: 'megaphone', t: 'announce loud' },
  { e: '📢', n: 'loudspeaker', t: 'announce' },
  { e: '✔️', n: 'check mark', t: 'done tick' },
  { e: '☑️', n: 'ballot check', t: 'done checkbox' },
  { e: '➕', n: 'plus sign', t: 'add math' },
  { e: '➖', n: 'minus sign', t: 'subtract math' },
  { e: '✖️', n: 'multiply', t: 'times math x' },
  { e: '💲', n: 'dollar sign', t: 'money usd currency' },
  { e: '✨', n: 'sparkles', t: 'shine magic glitter' },
  { e: '💥', n: 'collision', t: 'boom explosion' },
  { e: '🧨', n: 'firecracker', t: 'fireworks celebration' },
  { e: '🎆', n: 'fireworks', t: 'celebrate new year' },
  { e: '🎇', n: 'sparkler', t: 'firework light' },
  { e: '☮️', n: 'peace symbol', t: 'peace anti war' },
  { e: '☯️', n: 'yin yang', t: 'balance harmony' },
  { e: '🔱', n: 'trident', t: 'poseidon symbol' },
  { e: '♾️', n: 'infinity', t: 'forever endless' },
  { e: '🆕', n: 'new button', t: 'fresh recent' },
  { e: '🆓', n: 'free button', t: 'gratis cost' },
  { e: '🔞', n: 'no one under 18', t: 'adult mature' },
  { e: '🅰️', n: 'blood type a', t: 'letter' },
  { e: '🅱️', n: 'blood type b', t: 'letter meme' },
  { e: '🆗', n: 'ok button', t: 'okay yes agree' },
  { e: '🆙', n: 'up button', t: 'upgrade' },
  { e: '🆒', n: 'cool button', t: 'awesome' },
  { e: '🔆', n: 'brightness high', t: 'bright screen' },
  { e: '🔅', n: 'brightness low', t: 'dim screen' },
]

const CLOTHING: EmojiEntry[] = [
  { e: '👔', n: 'necktie', t: 'formal business shirt' },
  { e: '👕', n: 't-shirt', t: 'top clothing casual' },
  { e: '👖', n: 'jeans', t: 'pants denim casual' },
  { e: '👗', n: 'dress', t: 'womens clothing fashion' },
  { e: '👘', n: 'kimono', t: 'japanese traditional clothing' },
  { e: '🥻', n: 'sari', t: 'indian traditional clothing' },
  { e: '🩱', n: 'one-piece swimsuit', t: 'swim beach fashion' },
  { e: '🩲', n: 'briefs underwear', t: 'undergarment' },
  { e: '🩳', n: 'shorts', t: 'summer pants casual' },
  { e: '👙', n: 'bikini', t: 'swim beach summer' },
  { e: '👚', n: 'womans clothes', t: 'top shirt fashion' },
  { e: '🧣', n: 'scarf', t: 'winter neck warm fashion' },
  { e: '🧤', n: 'gloves', t: 'winter hands warm' },
  { e: '🧥', n: 'coat', t: 'jacket winter outerwear' },
  { e: '🧦', n: 'socks', t: 'feet winter warm' },
  { e: '👒', n: 'womans hat', t: 'head fashion sun' },
  { e: '🎩', n: 'top hat', t: 'magic formal fancy gentleman' },
  { e: '🎓', n: 'graduation cap', t: 'education graduate diploma school' },
  { e: '🧢', n: 'billed cap', t: 'hat baseball sports' },
  { e: '⛑️', n: 'rescue helmet', t: 'safety hard hat construction' },
  { e: '💄', n: 'lipstick', t: 'makeup beauty cosmetic' },
  { e: '💍', n: 'ring', t: 'jewelry engagement wedding diamond' },
  { e: '👓', n: 'glasses', t: 'eyewear spectacles nerd' },
  { e: '🕶️', n: 'sunglasses', t: 'cool shade eyewear fashion' },
  { e: '🥽', n: 'goggles', t: 'safety eyewear protection lab' },
  { e: '👛', n: 'purse', t: 'wallet money bag fashion' },
  { e: '👜', n: 'handbag', t: 'bag fashion womens' },
  { e: '👝', n: 'clutch bag', t: 'pouch bag fashion' },
  { e: '🎒', n: 'backpack', t: 'school bag travel hiking' },
  { e: '🧳', n: 'luggage', t: 'travel suitcase trip' },
  { e: '🌂', n: 'closed umbrella', t: 'rain weather' },
  { e: '☂️', n: 'umbrella open', t: 'rain weather' },
  { e: '👟', n: 'sneaker', t: 'shoe sport running casual' },
  { e: '👞', n: 'mans shoe', t: 'formal footwear leather' },
  { e: '👠', n: 'high heel', t: 'shoe fashion womens' },
  { e: '👡', n: 'womans sandal', t: 'shoe summer fashion' },
  { e: '👢', n: 'boot', t: 'shoe winter tall leather' },
  { e: '🥾', n: 'hiking boot', t: 'shoe outdoor trail mountain' },
  { e: '🥿', n: 'flat shoe', t: 'footwear casual fashion' },
  { e: '🩴', n: 'flip flop sandal', t: 'beach summer thong' },
  { e: '🧵', n: 'thread sewing', t: 'needle craft stitch' },
  { e: '🪡', n: 'sewing needle', t: 'craft thread stitch' },
  { e: '🧶', n: 'yarn wool', t: 'knit crochet craft' },
  { e: '🧷', n: 'safety pin', t: 'pin craft sewing' },
]

const FLAGS: EmojiEntry[] = [
  { e: '🇺🇸', n: 'united states', t: 'usa america flag' },
  { e: '🇬🇧', n: 'united kingdom', t: 'england britain uk flag' },
  { e: '🇨🇦', n: 'canada', t: 'flag maple leaf' },
  { e: '🇦🇺', n: 'australia', t: 'flag aussie' },
  { e: '🇩🇪', n: 'germany', t: 'flag german' },
  { e: '🇫🇷', n: 'france', t: 'flag french paris' },
  { e: '🇯🇵', n: 'japan', t: 'flag japanese tokyo' },
  { e: '🇰🇷', n: 'south korea', t: 'flag korean seoul' },
  { e: '🇨🇳', n: 'china', t: 'flag chinese beijing' },
  { e: '🇮🇳', n: 'india', t: 'flag indian' },
  { e: '🇧🇷', n: 'brazil', t: 'flag brazilian' },
  { e: '🇲🇽', n: 'mexico', t: 'flag mexican' },
  { e: '🇮🇹', n: 'italy', t: 'flag italian rome' },
  { e: '🇪🇸', n: 'spain', t: 'flag spanish madrid' },
  { e: '🇵🇹', n: 'portugal', t: 'flag portuguese' },
  { e: '🇳🇱', n: 'netherlands', t: 'flag dutch holland' },
  { e: '🇧🇪', n: 'belgium', t: 'flag belgian brussels' },
  { e: '🇨🇭', n: 'switzerland', t: 'flag swiss' },
  { e: '🇸🇪', n: 'sweden', t: 'flag swedish' },
  { e: '🇳🇴', n: 'norway', t: 'flag norwegian' },
  { e: '🇩🇰', n: 'denmark', t: 'flag danish' },
  { e: '🇫🇮', n: 'finland', t: 'flag finnish' },
  { e: '🇵🇱', n: 'poland', t: 'flag polish' },
  { e: '🇷🇺', n: 'russia', t: 'flag russian' },
  { e: '🇺🇦', n: 'ukraine', t: 'flag ukrainian' },
  { e: '🇬🇷', n: 'greece', t: 'flag greek' },
  { e: '🇦🇹', n: 'austria', t: 'flag austrian' },
  { e: '🇮🇪', n: 'ireland', t: 'flag irish' },
  { e: '🇨🇿', n: 'czech republic', t: 'flag czechia' },
  { e: '🇭🇺', n: 'hungary', t: 'flag hungarian' },
  { e: '🇷🇴', n: 'romania', t: 'flag romanian' },
  { e: '🇿🇦', n: 'south africa', t: 'flag south african' },
  { e: '🇳🇬', n: 'nigeria', t: 'flag nigerian' },
  { e: '🇰🇪', n: 'kenya', t: 'flag kenyan' },
  { e: '🇬🇭', n: 'ghana', t: 'flag ghanaian' },
  { e: '🇪🇬', n: 'egypt', t: 'flag egyptian' },
  { e: '🇲🇦', n: 'morocco', t: 'flag moroccan' },
  { e: '🇹🇿', n: 'tanzania', t: 'flag tanzanian' },
  { e: '🇦🇷', n: 'argentina', t: 'flag argentinian' },
  { e: '🇨🇱', n: 'chile', t: 'flag chilean' },
  { e: '🇨🇴', n: 'colombia', t: 'flag colombian' },
  { e: '🇵🇪', n: 'peru', t: 'flag peruvian' },
  { e: '🇻🇪', n: 'venezuela', t: 'flag venezuelan' },
  { e: '🇸🇬', n: 'singapore', t: 'flag singaporean' },
  { e: '🇲🇾', n: 'malaysia', t: 'flag malaysian' },
  { e: '🇹🇭', n: 'thailand', t: 'flag thai' },
  { e: '🇻🇳', n: 'vietnam', t: 'flag vietnamese' },
  { e: '🇮🇩', n: 'indonesia', t: 'flag indonesian' },
  { e: '🇵🇭', n: 'philippines', t: 'flag filipino' },
  { e: '🇵🇰', n: 'pakistan', t: 'flag pakistani' },
  { e: '🇧🇩', n: 'bangladesh', t: 'flag bangladeshi' },
  { e: '🇸🇦', n: 'saudi arabia', t: 'flag saudi' },
  { e: '🇦🇪', n: 'united arab emirates', t: 'flag uae dubai' },
  { e: '🇹🇷', n: 'turkey', t: 'flag turkish' },
  { e: '🇮🇱', n: 'israel', t: 'flag israeli' },
  { e: '🇮🇷', n: 'iran', t: 'flag iranian' },
  { e: '🇳🇿', n: 'new zealand', t: 'flag kiwi' },
  { e: '🇯🇲', n: 'jamaica', t: 'flag jamaican' },
  { e: '🇨🇺', n: 'cuba', t: 'flag cuban' },
  { e: '🇵🇷', n: 'puerto rico', t: 'flag' },
  { e: '🏳️', n: 'white flag', t: 'peace surrender' },
  { e: '🏴', n: 'black flag', t: 'pirate dark' },
  { e: '🚩', n: 'red flag', t: 'warning danger alert' },
  { e: '🏳️‍🌈', n: 'rainbow flag', t: 'pride lgbtq' },
  { e: '🏳️‍⚧️', n: 'transgender flag', t: 'pride trans' },
  { e: '🏴‍☠️', n: 'pirate flag', t: 'skull crossbones danger' },
]

const EMOJI_DATA = [
  { id: 'smileys',    label: 'Smileys',    icon: '😊', emojis: SMILEYS    },
  { id: 'people',     label: 'People',     icon: '👋', emojis: PEOPLE     },
  { id: 'animals',    label: 'Animals',    icon: '🐾', emojis: ANIMALS    },
  { id: 'food',       label: 'Food',       icon: '🍕', emojis: FOOD       },
  { id: 'travel',     label: 'Travel',     icon: '✈️', emojis: TRAVEL     },
  { id: 'activities', label: 'Activities', icon: '⚽', emojis: ACTIVITIES },
  { id: 'objects',    label: 'Objects',    icon: '💡', emojis: OBJECTS    },
  { id: 'symbols',    label: 'Symbols',    icon: '❤️', emojis: SYMBOLS    },
  { id: 'clothing',   label: 'Clothing',   icon: '👗', emojis: CLOTHING   },
  { id: 'flags',      label: 'Flags',      icon: '🚩', emojis: FLAGS      },
]

// Deduplicate by emoji character so search never shows the same emoji twice
const ALL_EMOJIS: EmojiEntry[] = EMOJI_DATA
  .flatMap(c => c.emojis)
  .filter((e, i, arr) => arr.findIndex(x => x.e === e.e) === i)
const TOTAL = ALL_EMOJIS.length

// ─── Skin Tone Support ────────────────────────────────────────────────────────

const SKIN_TONES = [
  { mod: '',           title: 'Default'       },
  { mod: '\u{1F3FB}',  title: 'Light'         },
  { mod: '\u{1F3FC}',  title: 'Medium-Light'  },
  { mod: '\u{1F3FD}',  title: 'Medium'        },
  { mod: '\u{1F3FE}',  title: 'Medium-Dark'   },
  { mod: '\u{1F3FF}',  title: 'Dark'          },
]

const SKIN_TONE_COMPATIBLE = new Set([
  // Hands & gestures
  '👋','🤚','🖐️','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙',
  '👈','👉','👆','🖕','👇','☝️','🫵','👍','👎','✊','👊','🤛','🤜',
  '👏','🙌','👐','🤲','🙏','💅','🤳','💪','🦵','🦶','👂','🦻','👃','🫶',
  // People (simple characters)
  '👶','🧒','👦','👧','🧑','👱','👨','🧔','👩','🧓','👴','👵',
  '🙍','🙎','🙅','🙆','💁','🙋','🧏','🙇','🤦','🤷',
  '👮','🕵️','💂','🥷','👷','👸','🎅','🤶',
  '🦸','🦹','🧙','🧝','🧛','🧜','🧚','👼',
  '💆','💇','🚶','🧍','🧎','🏃','💃','🕺',
  '🛀','🧖','🧗','🏋️','🤸','⛹️','🏌️','🏇','🤾','🏊','🤽','🚣','🧘','🛌',
  // Professions (ZWJ sequences)
  '🧑‍⚕️','🧑‍🎓','🧑‍🏫','🧑‍⚖️','🧑‍🌾','🧑‍🍳','🧑‍🔧','🧑‍🏭','🧑‍💼','🧑‍🔬','🧑‍🎨','🧑‍🚒','🧑‍✈️','🧑‍🚀','🧑‍🎤',
])

/** Apply a skin-tone modifier to a base emoji, handling ZWJ sequences */
function applySkintone(emoji: string, modifier: string): string {
  if (!modifier) return emoji
  const ZWJ = '\u200D'
  if (emoji.includes(ZWJ)) {
    const parts = emoji.split(ZWJ)
    // Strip existing modifier & variation selector from the first (person) segment
    const base = parts[0].replace(/[\u{1F3FB}-\u{1F3FF}]/u, '').replace(/\uFE0F$/, '')
    return [base + modifier, ...parts.slice(1)].join(ZWJ)
  }
  return emoji.replace(/\uFE0F$/, '') + modifier
}

// ─── Delete last grapheme cluster safely ──────────────────────────────────────

function deleteLastEmoji(str: string): string {
  if (!str) return str
  try {
    const segs = [...new Intl.Segmenter().segment(str)]
    return segs.slice(0, -1).map(s => s.segment).join('')
  } catch {
    return [...str].slice(0, -1).join('')
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function EmojiButtonsTool() {
  const [search,          setSearch]          = useState('')
  const [cat,             setCat]             = useState('smileys')
  const [mode,            setMode]            = useState<'copy' | 'build'>('copy')
  const [justCopied,      setJustCopied]      = useState<string | null>(null)
  const [recent,          setRecent]          = useState<EmojiEntry[]>([])
  const [builder,         setBuilder]         = useState('')
  const [builderCopied,   setBuilderCopied]   = useState(false)
  const [skinTonePopover, setSkinTonePopover] = useState<{ entry: EmojiEntry; rect: DOMRect } | null>(null)

  // Load recent from localStorage
  useEffect(() => {
    try {
      const s = localStorage.getItem('eb-recent-v1')
      if (s) setRecent(JSON.parse(s))
    } catch {}
  }, [])

  const commitEmoji = useCallback((entry: EmojiEntry, emojiChar: string) => {
    if (mode === 'copy') {
      navigator.clipboard.writeText(emojiChar)
      setJustCopied(entry.e)
      setTimeout(() => setJustCopied(c => c === entry.e ? null : c), 1200)
      toast({ title: `${emojiChar} Copied!`, description: entry.n })
    } else {
      setBuilder(prev => prev + emojiChar)
    }
    const committed: EmojiEntry = { ...entry, e: emojiChar }
    setRecent(prev => {
      const next = [committed, ...prev.filter(x => x.e !== emojiChar)].slice(0, 32)
      try { localStorage.setItem('eb-recent-v1', JSON.stringify(next)) } catch {}
      return next
    })
  }, [mode])

  const handleEmoji = useCallback((entry: EmojiEntry, ev: React.MouseEvent<HTMLButtonElement>) => {
    if (SKIN_TONE_COMPATIBLE.has(entry.e)) {
      const rect = ev.currentTarget.getBoundingClientRect()
      setSkinTonePopover({ entry, rect })
      return
    }
    commitEmoji(entry, entry.e)
  }, [commitEmoji])

  const handleSkinTonePick = useCallback((entry: EmojiEntry, modifier: string) => {
    setSkinTonePopover(null)
    commitEmoji(entry, applySkintone(entry.e, modifier))
  }, [commitEmoji])

  const searchResults = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return null
    return ALL_EMOJIS.filter(e => e.n.includes(q) || e.t?.includes(q))
  }, [search])

  const displayEmojis: EmojiEntry[] = searchResults
    ?? (cat === 'recent' ? recent : (EMOJI_DATA.find(c => c.id === cat)?.emojis ?? []))

  return (
    <div className="space-y-4 w-full min-w-0">

      {/* ── Mode toggle ── */}
      <div className="flex gap-1 p-1 rounded-xl bg-muted/40 border w-full">
        {(['copy', 'build'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all touch-manipulation ${
              mode === m
                ? 'bg-background shadow-sm text-foreground border border-border/50'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {m === 'copy' ? '📋 Click to Copy' : '🔨 Emoji Builder'}
          </button>
        ))}
      </div>

      {/* ── Builder area ── */}
      {mode === 'build' && (
        <div className="p-3 sm:p-4 rounded-xl border-2 border-primary/20 bg-primary/5 space-y-2 w-full min-w-0">
          <div className="flex items-center justify-between gap-2 min-w-0">
            <p className="text-xs font-semibold text-muted-foreground shrink-0">Your emoji string</p>
            {builder && (
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  size="sm"
                  variant={builderCopied ? 'default' : 'outline'}
                  className="h-7 text-xs touch-manipulation"
                  onClick={() => {
                    navigator.clipboard.writeText(builder)
                    setBuilderCopied(true)
                    setTimeout(() => setBuilderCopied(false), 2000)
                    toast({ title: 'Copied!', description: `${[...new Intl.Segmenter().segment(builder)].length} emojis copied` })
                  }}
                >
                  {builderCopied
                    ? <><Check className="w-3 h-3 mr-1" />Copied</>
                    : <><Copy className="w-3 h-3 mr-1" />Copy</>
                  }
                </Button>
                <button
                  onClick={() => setBuilder(b => deleteLastEmoji(b))}
                  title="Delete last emoji"
                  className="h-7 px-2 rounded-md border text-xs text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors touch-manipulation"
                >
                  ⌫
                </button>
                <button
                  onClick={() => setBuilder('')}
                  title="Clear all"
                  className="h-7 px-1.5 rounded-md border text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors touch-manipulation"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
          <div className="min-h-12 text-xl sm:text-2xl leading-relaxed break-all select-all">
            {builder || (
              <span className="text-sm text-muted-foreground font-sans font-normal">
                Tap emojis below to build your combo string…
              </span>
            )}
          </div>
          {builder && (
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              {[...new Intl.Segmenter().segment(builder)].length} emoji{[...new Intl.Segmenter().segment(builder)].length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      )}

      {/* ── Search ── */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search — fire, heart, pizza, dog, laugh…"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── Category tabs ── */}
      {!search && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none w-full">
          {recent.length > 0 && (
            <button
              onClick={() => setCat('recent')}
              title="Recently used"
              className={`shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all touch-manipulation ${
                cat === 'recent'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:bg-muted/60'
              }`}
            >
              <Clock className="w-3 h-3 shrink-0" />
              <span>Recent</span>
            </button>
          )}
          {EMOJI_DATA.map(c => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              title={c.label}
              className={`shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all touch-manipulation ${
                cat === c.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:bg-muted/60'
              }`}
            >
              <span>{c.icon}</span>
              <span className="hidden sm:inline">{c.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Search result count ── */}
      {search && (
        <p className="text-xs text-muted-foreground">
          {searchResults?.length ?? 0} results for{' '}
          <span className="font-medium">"{search}"</span>
        </p>
      )}

      {/* ── Emoji grid ── */}
      {displayEmojis.length > 0 ? (
        <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-12 gap-0.5 sm:gap-1 w-full">
          {displayEmojis.map((entry, i) => (
            <button
              key={`${i}-${entry.e}`}
              onClick={(ev) => handleEmoji(entry, ev)}
              title={SKIN_TONE_COMPATIBLE.has(entry.e) ? `${entry.n} — tap to pick skin tone` : (mode === 'copy' ? `Copy ${entry.n}` : `Add ${entry.n}`)}
              className={`relative aspect-square flex items-center justify-center rounded-lg text-xl sm:text-2xl transition-all touch-manipulation ${
                justCopied === entry.e && mode === 'copy'
                  ? 'bg-primary/25 scale-110 shadow-sm'
                  : 'hover:bg-primary/10 hover:scale-110 active:scale-90'
              }`}
            >
              {entry.e}
              {SKIN_TONE_COMPATIBLE.has(entry.e) && (
                <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400/80 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      ) : search ? (
        <div className="py-10 text-center space-y-2">
          <p className="text-4xl">🔍</p>
          <p className="text-sm text-muted-foreground">No emojis found for "{search}"</p>
          <button
            onClick={() => setSearch('')}
            className="text-xs text-primary hover:underline touch-manipulation"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="py-10 text-center">
          <p className="text-sm text-muted-foreground">No recent emojis yet — start clicking!</p>
        </div>
      )}

      {/* ── Footer hint ── */}
      <p className="text-xs text-muted-foreground text-center">
        {mode === 'copy'
          ? 'Click any emoji to copy it instantly'
          : 'Click any emoji to add it to your builder'
        }
        {' · '}{TOTAL}+ emojis · {EMOJI_DATA.length} categories
        {' · '}<span className="inline-flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/80" /> skin tone support
        </span>
      </p>

      {/* ── Skin Tone Popover ── */}
      {skinTonePopover && (
        <>
          {/* Backdrop — click outside to dismiss */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setSkinTonePopover(null)}
          />
          {/* Popover panel */}
          <div
            className="fixed z-50 bg-background border shadow-xl rounded-2xl p-2 flex flex-col gap-1.5"
            style={{
              top: skinTonePopover.rect.top < 110
                ? skinTonePopover.rect.bottom + 6
                : skinTonePopover.rect.top - 82,
              left: Math.max(8, Math.min(
                (typeof window !== 'undefined' ? window.innerWidth : 800) - 300,
                skinTonePopover.rect.left - 108,
              )),
            }}
          >
            <p className="text-[10px] text-muted-foreground text-center leading-none px-1">
              {skinTonePopover.entry.n} · pick skin tone
            </p>
            <div className="flex gap-0.5">
              {SKIN_TONES.map(({ mod, title }) => (
                <button
                  key={mod || 'default'}
                  title={title}
                  onClick={() => handleSkinTonePick(skinTonePopover.entry, mod)}
                  className="w-10 h-10 flex items-center justify-center text-2xl rounded-xl hover:bg-primary/10 hover:scale-110 active:scale-90 transition-all touch-manipulation"
                >
                  {applySkintone(skinTonePopover.entry.e, mod)}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
