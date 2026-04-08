'use client'

import { useState, useEffect } from 'react'
import { Copy, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const glitchStyles = [
  {
    name: 'Zalgo',
    id: 'zalgo',
    description: 'Creepy zalgo text with combining diacritical marks',
    transform: (text: string) => {
      const above = '\u030d\u030e\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030f\u0310\u0311\u0312\u0313\u0314\u033d\u033e\u033f\u0340\u0341\u0342\u0343\u0344\u0345\u0346\u034a\u034b\u034c\u034d\u0350\u0351\u0352\u0357\u0358\u0359\u035a\u035b\u035c\u035d\u035e\u035f\u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f\u0488\u0489\u0615\u0616\u0617\u0618\u0619\u061a\u0654\u0655\u0656\u0657\u0658\u0659\u065a\u065b\u065c\u065d\u065e\u06d4\u06d5\u06d6\u06d7\u06d8\u06d9\u06da\u06db\u06dc\u06df\u06e0\u06e1\u06e2\u06e3\u06e4\u06e5\u06e6\u06e7\u06e8\u06e9\u06ea\u06eb\u06ec\u06ed\u0730\u0731\u0732\u0733\u0734\u0735\u0736\u0737\u0738\u0739\u073a\u073b\u073c\u073d\u073e\u073f\u0740\u0741\u0742\u0743\u0744\u0745\u0746\u0747\u0748\u0749\u074a\u07eb\u07ec\u07ed\u07ee\u07ef\u07f0\u07f1\u07f2\u07f3\u07f4\u07f5\u07f6\u07f7\u07f8\u07f9\u07fa\u07fb\u07fc\u07fd\u07fe\u07ff\u0816\u0817\u0818\u0819\u081b\u081c\u081d\u081e\u081f\u0820\u0821\u0822\u0823\u0825\u0826\u0827\u0829\u082a\u082b\u082c\u082d\u0951\u0952\u0953\u0954\u0955\u0956\u0e38\u0e39\u0e3a\u0e3b\u0e3c\u0e48\u0e49\u0e4a\u0e4b\u0eb4\u0eb5\u0eb6\u0eb7\u0eb8\u0eb9\u0ebb\u0ebc\u0ebd\u0ec0\u0ec1\u0ec2\u0ec3\u0ec4\u0ec6\u0ec8\u0ec9\u0eca\u0ecb\u0ecc\u0ecd\u0ece\u0ecf\u0ed0\u0ed1\u0ed2\u0ed3\u0ed4\u0ed5\u0ed6\u0ed7\u0ed8\u0ed9\u0eda\u0edb\u0edc\u0edd\u0ede\u0edf\u0f71\u0f72\u0f73\u0f74\u0f75\u0f76\u0f78\u0f79\u0f7a\u0f7b\u0f7c\u0f7d\u0f7e\u0f80\u0f81\u0f82\u0f83\u0f84\u0f86\u0f87\u0f8d\u0f8e\u0f8f\u0f90\u0f91\u0f92\u0f93\u0f9d\u0f9e\u0f9f\u0fa0\u0fa1\u0fa2\u0fa3\u0fa4\u0fa5\u0fa6\u0fa7\u0fa8\u0fa9\u0faa\u0fab\u0fac\u0fad\u0fae\u0faf\u0fb0\u0fb1\u0fb2\u0fb3\u0fb4\u0fb5\u0fb6\u0fb7\u0fb8\u0fb9\u0fba\u0fbb\u0fbc\u0fc6\u0fc7\u0fc8\u0fc9\u0fca\u0fcb\u0fcc\u0fce\u0fcf\u0fd0\u0fd1\u0fd2\u0fd3\u0fd4\u0fd5\u0fd6\u0fd7\u0fd8\u0fd9\u0fda\u0fdb\u0fdc\u102b\u102c\u102d\u102e\u102f\u1030\u1031\u1032\u1033\u1034\u1035\u1036\u1037\u1038\u1039\u103a\u1056\u1057\u1058\u1059\u105a\u105b\u105c\u105d\u105e\u105f\u1060\u1061\u1062\u1063\u1064\u1065\u1066\u1067\u1068\u1069\u106a\u106b\u106c\u106d\u106e\u106f\u1070\u1071\u1072\u1073\u1074\u1075\u1076\u1077\u1078\u1079\u107a\u107b\u107c\u107d\u107e\u107f\u1080\u1081\u1082\u1083\u1084\u1085\u1086\u1087\u1088\u1089\u108a\u108b\u108c\u108d\u108e\u108f\u135d\u135e\u135f\u1712\u1713\u1714\u1732\u1733\u1734\u1735\u1736\u1737\u1738\u1739\u173a\u173b\u173c\u173d\u173e\u173f\u1752\u1753\u1754\u1755\u1756\u1757\u1758\u1759\u175a\u175b\u175c\u175d\u175e\u175f\u1772\u1773\u17b4\u17b5\u17b6\u17b7\u17b8\u17b9\u17ba\u17bb\u17bc\u17bd\u17be\u17bf\u17c0\u17c1\u17c2\u17c3\u17c4\u17c5\u17c6\u17c7\u17c8\u17c9\u17ca\u17cb\u17cc\u17cd\u17ce\u17cf\u17d0\u17d1\u17d2\u17d3\u17d4\u17d5\u17d6\u17d7\u17d8\u17d9\u17da\u17db\u17dc\u17dd\u17e0\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17ea\u17eb\u17ec\u17ed\u17ee\u17ef\u17f0\u17f1\u17f2\u17f3\u17f4\u17f5\u17f6\u17f7\u17f8\u17f9\u180b\u180c\u180d\u180e\u180f\u1810\u1811\u1812\u1813\u1814\u1815\u1816\u1817\u1818\u1819\u181a\u200b\u200c\u200d\u200e\u200f\u202a\u202b\u202c\u202d\u202e\u2060\u2061\u2062\u2063\u2064\u2065\u2066\u2067\u2068\u2069\u206a\u206b\u206c\u206d\u206e\u206f\ufe00\ufe01\ufe02\ufe03\ufe04\ufe05\ufe06\ufe07\ufe08\ufe09\ufe0a\ufe0b\ufe0c\ufe0d\ufe0e\ufe0f\ufe20\ufe21\ufe22\ufe23\ufe24\ufe25\ufe26\ufe27\ufe28\ufe29\ufe2a\ufe2b\ufe2c\ufe2d\ufe2e\ufe2f\uff9e\uff9f'
      const below = '\u0316\u0317\u0318\u0319\u031a\u031b\u031c\u031d\u031e\u031f\u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033a\u033b\u033c\u0346\u0347\u0348\u0349\u034d\u034e\u0353\u0354\u0355\u0356\u0359\u035a\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f\u0370\u0371\u0372\u0373\u0374\u0375\u0376\u0377\u0378\u0379\u037a\u037b\u037c\u037d\u037e\u037f\u0483\u0484\u0485\u0486\u0487\u0488\u0489\u048a\u048b\u048c\u0591\u0592\u0593\u0594\u0595\u0596\u0597\u0598\u0599\u059a\u059b\u059c\u059d\u059e\u059f\u05a0\u05a1\u05a2\u05a3\u05a4\u05a5\u05a6\u05a7\u05a8\u05a9\u05aa\u05ab\u05ac\u05ad\u05ae\u05af\u05b0\u05b1\u05b2\u05b3\u05b4\u05b5\u05b6\u05b7\u05b8\u05b9\u05ba\u05bb\u05bc\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610\u0611\u0612\u0613\u0614\u064b\u064c\u064d\u0656\u0657\u0658\u0659\u065a\u065b\u065c\u065d\u065e\u06d6\u06d7\u06d8\u06d9\u06da\u06db\u06dc\u06df\u06e0\u06e1\u06e2\u06e3\u06e4\u06e5\u06e6\u06e7\u06e8\u06e9\u06ea\u06eb\u06ec\u06ed\u07a6\u07a7\u07a8\u07a9\u07aa\u07ab\u07ac\u07ad\u07ae\u07af\u07b0\u07b1\u07b2\u07b3\u07b4\u07b5\u07b6\u07b7\u07b8\u07b9\u07ba\u07bb\u07bc\u07bd\u07be\u07bf\u07c0\u07c1\u07c2\u07c3\u07c4\u07c5\u07c6\u07c7\u07c8\u07c9\u07ca\u07cb\u07cc\u07cd\u07ce\u07cf\u07d0\u07d1\u07d2\u07d3\u07d4\u07d5\u07d6\u07d7\u07d8\u07d9\u07da\u07db\u07dc\u07dd\u07de\u07df\u07e0\u07e1\u07e2\u07e3\u07e4\u07e5\u07e6\u07e7\u07e8\u07e9\u07ea\u07eb\u07ec\u07ed\u07ee\u07ef\u07f0\u07f1\u07f2\u07f3\u07f4\u07f5\u07f6\u07f7\u07f8\u07f9\u07fa\u0fe0\u0fe1\u1ab0\u1ab1\u1ab2\u1ab3\u1ab4\u1ab5\u1ab6\u1ab7\u1ab8\u1ab9\u1aba\u1abb\u1abc\u1abd\u1abe\u1abf\u1cd0\u1cd1\u1cd2\u1cd3\u1cd4\u1cd5\u1cd6\u1cd7\u1cd8\u1cd9\u1cda\u1cdb\u1cdc\u1cdd\u1cde\u1cdf\u1ce0\u1ce2\u1ce3\u1ce4\u1ce5\u1ce6\u1ce7\u1ce8\u1ce9\u1ceb\u1cec\u1ced\u1cee\u1cef\u1cf0\u1cf1\u1cf2\u1d2d\u1d2e\u1d2f\u1d30\u1d31\u1d32\u1d33\u1d34\u1d35\u1d36\u1d37\u1d38\u1d39\u1d3a\u1d3b\u1d3c\u1d3d\u1d3e\u1d3f\u1d40\u1d41\u1d42\u1d43\u1d44\u1d45\u1d46\u1d47\u1d48\u1d49\u1d4a\u1d4b\u1d4c\u1d4d\u1d4e\u1d4f\u1d50\u1d51\u1d52\u1d53\u1d54\u1d55\u1d56\u1d57\u1d58\u1d59\u1d5a\u1d5b\u1d5c\u1d5d\u1d5e\u1d5f\u1d60\u1d61\u1d62\u1d63\u1d64\u1d65\u1d66\u1d67\u1d68\u1d69\u1d6a\u1d6b\u1d6c\u1d6d\u1d6e\u1d6f\u1d70\u1d71\u1d72\u1d73\u1d74\u1d75\u1d76\u1d77\u1d78\u1d79\u1d7a\u1d7b\u1d7c\u1d7d\u1d7e\u1d7f\u1da0\u1da1\u1da2\u1da3\u1da4\u1da5\u1da6\u1da7\u1da8\u1da9\u1daa\u1dab\u1dac\u1dad\u1dae\u1daf\u1db0\u1db1\u1db2\u1db3\u1db4\u1db5\u1db6\u1db7\u1db8\u1db9\u1dba\u1dbb\u1dbc\u1dbd\u1dbe\u1dbf\u1dc0\u1dc1\u1dc2\u1dc3\u1dc4\u1dc5\u1dc6\u1dc7\u1dc8\u1dc9\u1dca\u1dcb\u1dcc\u1dcd\u1dce\u1dcf\u1dd0\u1dd1\u1dd2\u1dd3\u1dd4\u1dd5\u1dd6\u1dd7\u1dd8\u1dd9\u1dda\u1ddb\u1ddc\u1ddd\u1dde\u1ddf\u1de0\u1de1\u1de2\u1de3\u1de4\u1de5\u1de6\u1de7\u1de8\u1de9\u1dea\u1deb\u1dec\u1ded\u1dee\u1def\u1df0\u1df1\u1df2\u1df3\u1df4\u1df5\u1df6\u1df7\u1df8\u1df9\u1dfa\u1dfb\u1dfc\u20d0\u20d1\u20d2\u20d3\u20d4\u20d5\u20d6\u20d7\u20d8\u20d9\u20da\u20db\u20dc\u20dd\u20de\u20df\u20e0\u20e1\u20e2\u20e3\u20e4\u20e5\u20e6\u20e7\u20e8\u20e9\u20ea\u20eb\u20ec\u20ed\u20ee\u20ef\u20f0'
      let result = ''
      for (let i = 0; i < text.length; i++) {
        let char = text[i]
        const aboveCount = Math.floor(Math.random() * 5) + 1
        const belowCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < aboveCount; j++) {
          char += above[Math.floor(Math.random() * above.length)]
        }
        for (let j = 0; j < belowCount; j++) {
          char += below[Math.floor(Math.random() * below.length)]
        }
        result += char
      }
      return result
    }
  },
  {
    name: 'Behind Bars',
    id: 'behind-bars',
    description: 'Enclosed in vertical bars',
    transform: (text: string) => text.split('').map(char => `\u239d${char}\u239e`).join('')
  },
  {
    name: 'Double Strikethrough',
    id: 'double-strikethrough',
    description: 'Double line through characters',
    transform: (text: string) => text.split('').map(char => `\u0366${char}\u0366`).join('')
  },
  {
    name: 'Creepy',
    id: 'creepy',
    description: 'Small creepy text style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ',
        'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ',
        'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ',
        'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ',
        'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ',
        'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ',
        'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Upside Down',
    id: 'upside-down',
    description: 'Flip text upside down',
    transform: (text: string) => text.split('').reverse().map(char => {
      const map: { [key: string]: string } = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ',
        'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u',
        'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n',
        'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
        'A': '∀', 'B': 'ᗺ', 'C': 'Ↄ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁',
        'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ꓘ', 'L': '˥', 'M': 'W', 'N': 'N',
        'O': 'O', 'P': 'Ԁ', 'Q': 'Ò', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩',
        'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Bubbles',
    id: 'bubbles',
    description: 'Enclosed in circles',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ',
        'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ',
        'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ',
        'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ',
        'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
        'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ',
        'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Squares',
    id: 'squares',
    description: 'Enclosed in squares',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶',
        'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽',
        'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄',
        'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶',
        'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽',
        'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄',
        'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Wide',
    id: 'wide',
    description: 'Wide spaced characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ',
        'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ',
        'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ',
        'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
        'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ',
        'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ',
        'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ',
        'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Cursed',
    id: 'cursed',
    description: 'Mixed zalgo and symbols',
    transform: (text: string) => {
      const zalgo = glitchStyles[0].transform
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
      let result = ''
      for (let i = 0; i < text.length; i++) {
        const char = text[i]
        result += zalgo(char)
        if (Math.random() > 0.5) {
          result += symbols[Math.floor(Math.random() * symbols.length)]
        }
      }
      return result
    }
  },
  {
    name: 'Bricks',
    id: 'bricks',
    description: 'Block characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '░a░', 'b': '░b░', 'c': '░c░', 'd': '░d░', 'e': '░e░', 'f': '░f░', 'g': '░g░',
        'h': '░h░', 'i': '░i░', 'j': '░j░', 'k': '░k░', 'l': '░l░', 'm': '░m░', 'n': '░n░',
        'o': '░o░', 'p': '░p░', 'q': '░q░', 'r': '░r░', 's': '░s░', 't': '░t░', 'u': '░u░',
        'v': '░v░', 'w': '░w░', 'x': '░x░', 'y': '░y░', 'z': '░z░',
        'A': '░A░', 'B': '░B░', 'C': '░C░', 'D': '░D░', 'E': '░E░', 'F': '░F░', 'G': '░G░',
        'H': '░H░', 'I': '░I░', 'J': '░J░', 'K': '░K░', 'L': '░L░', 'M': '░M░', 'N': '░N░',
        'O': '░O░', 'P': '░P░', 'Q': '░Q░', 'R': '░R░', 'S': '░S░', 'T': '░T░', 'U': '░U░',
        'V': '░V░', 'W': '░W░', 'X': '░X░', 'Y': '░Y░', 'Z': '░Z░'
      }
      return map[char] || `░${char}░`
    }).join('')
  },
  {
    name: 'Electric',
    id: 'electric',
    description: 'Electric circuit style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '⚡a⚡', 'b': '⚡b⚡', 'c': '⚡c⚡', 'd': '⚡d⚡', 'e': '⚡e⚡', 'f': '⚡f⚡', 'g': '⚡g⚡',
        'h': '⚡h⚡', 'i': '⚡i⚡', 'j': '⚡j⚡', 'k': '⚡k⚡', 'l': '⚡l⚡', 'm': '⚡m⚡', 'n': '⚡n⚡',
        'o': '⚡o⚡', 'p': '⚡p⚡', 'q': '⚡q⚡', 'r': '⚡r⚡', 's': '⚡s⚡', 't': '⚡t⚡', 'u': '⚡u⚡',
        'v': '⚡v⚡', 'w': '⚡w⚡', 'x': '⚡x⚡', 'y': '⚡y⚡', 'z': '⚡z⚡',
        'A': '⚡A⚡', 'B': '⚡B⚡', 'C': '⚡C⚡', 'D': '⚡D⚡', 'E': '⚡E⚡', 'F': '⚡F⚡', 'G': '⚡G⚡',
        'H': '⚡H⚡', 'I': '⚡I⚡', 'J': '⚡J⚡', 'K': '⚡K⚡', 'L': '⚡L⚡', 'M': '⚡M⚡', 'N': '⚡N⚡',
        'O': '⚡O⚡', 'P': '⚡P⚡', 'Q': '⚡Q⚡', 'R': '⚡R⚡', 'S': '⚡S⚡', 'T': '⚡T⚡', 'U': '⚡U⚡',
        'V': '⚡V⚡', 'W': '⚡W⚡', 'X': '⚡X⚡', 'Y': '⚡Y⚡', 'Z': '⚡Z⚡'
      }
      return map[char] || `⚡${char}⚡`
    }).join('')
  },
  {
    name: 'Shuriken',
    id: 'shuriken',
    description: 'Star characters around text',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '✧a✧', 'b': '✧b✧', 'c': '✧c✧', 'd': '✧d✧', 'e': '✧e✧', 'f': '✧f✧', 'g': '✧g✧',
        'h': '✧h✧', 'i': '✧i✧', 'j': '✧j✧', 'k': '✧k✧', 'l': '✧l✧', 'm': '✧m✧', 'n': '✧n✧',
        'o': '✧o✧', 'p': '✧p✧', 'q': '✧q✧', 'r': '✧r✧', 's': '✧s✧', 't': '✧t✧', 'u': '✧u✧',
        'v': '✧v✧', 'w': '✧w✧', 'x': '✧x✧', 'y': '✧y✧', 'z': '✧z✧',
        'A': '✧A✧', 'B': '✧B✧', 'C': '✧C✧', 'D': '✧D✧', 'E': '✧E✧', 'F': '✧F✧', 'G': '✧G✧',
        'H': '✧H✧', 'I': '✧I✧', 'J': '✧J✧', 'K': '✧K✧', 'L': '✧L✧', 'M': '✧M✧', 'N': '✧N✧',
        'O': '✧O✧', 'P': '✧P✧', 'Q': '✧Q✧', 'R': '✧R✧', 'S': '✧S✧', 'T': '✧T✧', 'U': '✧U✧',
        'V': '✧V✧', 'W': '✧W✧', 'X': '✧X✧', 'Y': '✧Y✧', 'Z': '✧Z✧'
      }
      return map[char] || `✧${char}✧`
    }).join('')
  },
  {
    name: 'Circled',
    id: 'circled',
    description: 'Characters in circles',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'Ⓐ', 'b': 'Ⓑ', 'c': 'Ⓒ', 'd': 'Ⓓ', 'e': 'Ⓔ', 'f': 'Ⓕ', 'g': 'Ⓖ',
        'h': 'Ⓗ', 'i': 'Ⓘ', 'j': 'Ⓙ', 'k': 'Ⓚ', 'l': 'Ⓛ', 'm': 'Ⓜ', 'n': 'Ⓝ',
        'o': 'Ⓞ', 'p': 'Ⓟ', 'q': 'Ⓠ', 'r': 'Ⓡ', 's': 'Ⓢ', 't': 'Ⓣ', 'u': 'Ⓤ',
        'v': 'Ⓥ', 'w': 'Ⓦ', 'x': 'Ⓧ', 'y': 'Ⓨ', 'z': 'Ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ',
        'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
        'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ',
        'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Small Caps',
    id: 'small-caps',
    description: 'Small capital letters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ',
        'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ',
        'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ',
        'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ',
        'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ',
        'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ',
        'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Monospace',
    id: 'monospace',
    description: 'Monospace font style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐',
        'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗',
        'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞',
        'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶',
        'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽',
        'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄',
        'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Bold',
    id: 'bold',
    description: 'Bold mathematical style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠',
        'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧',
        'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮',
        'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆',
        'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍',
        'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔',
        'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Italic',
    id: 'italic',
    description: 'Italic mathematical style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔',
        'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛',
        'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢',
        'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺',
        'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁',
        'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈',
        'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Script',
    id: 'script',
    description: 'Cursive script style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔',
        'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃',
        'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊',
        'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢',
        'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩',
        'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
        'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Bold Script',
    id: 'bold-script',
    description: 'Bold cursive script',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰',
        'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷',
        'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾',
        'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖',
        'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝',
        'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤',
        'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Fraktur',
    id: 'fraktur',
    description: 'Gothic blackletter style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤',
        'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫',
        'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲',
        'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊',
        'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑',
        'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘',
        'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Double Struck',
    id: 'double-struck',
    description: 'Outlined double line style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘',
        'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟',
        'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦',
        'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾',
        'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ',
        'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌',
        'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Parenthesized',
    id: 'parenthesized',
    description: 'Characters in parentheses',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢',
        'h': '⒣', 'i': '⒤', 'j': '⒥', 'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩',
        'o': '⒪', 'p': '⒫', 'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯', 'u': '⒰',
        'v': '⒱', 'w': '⒲', 'x': '⒳', 'y': '⒴', 'z': '⒵',
        'A': '⒜', 'B': '⒝', 'C': '⒞', 'D': '⒟', 'E': '⒠', 'F': '⒡', 'G': '⒢',
        'H': '⒣', 'I': '⒤', 'J': '⒥', 'K': '⒦', 'L': '⒧', 'M': '⒨', 'N': '⒩',
        'O': '⒪', 'P': '⒫', 'Q': '⒬', 'R': '⒭', 'S': '⒮', 'T': '⒯', 'U': '⒰',
        'V': '⒱', 'W': '⒲', 'X': '⒳', 'Y': '⒴', 'Z': '⒵'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Squared Black',
    id: 'squared-black',
    description: 'Black boxed characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶',
        'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽',
        'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄',
        'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶',
        'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽',
        'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄',
        'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Negative Circled',
    id: 'negative-circled',
    description: 'Inverted circled characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ',
        'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ',
        'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ',
        'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ',
        'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
        'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ',
        'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Regional Indicator',
    id: 'regional',
    description: 'Emoji letter flags',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '🇦', 'b': '🇧', 'c': '🇨', 'd': '🇩', 'e': '🇪', 'f': '🇫', 'g': '🇬',
        'h': '🇭', 'i': '🇮', 'j': '🇯', 'k': '🇰', 'l': '🇱', 'm': '🇲', 'n': '🇳',
        'o': '🇴', 'p': '🇵', 'q': '🇶', 'r': '🇷', 's': '🇸', 't': '🇹', 'u': '🇺',
        'v': '🇻', 'w': '🇼', 'x': '🇽', 'y': '🇾', 'z': '🇿',
        'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫', 'G': '🇬',
        'H': '🇭', 'I': '🇮', 'J': '🇯', 'K': '🇰', 'L': '🇱', 'M': '🇲', 'N': '🇳',
        'O': '🇴', 'P': '🇵', 'Q': '🇶', 'R': '🇷', 'S': '🇸', 'T': '🇹', 'U': '🇺',
        'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾', 'Z': '🇿'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Dotted',
    id: 'dotted',
    description: 'Dotted underline characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ạ', 'b': 'ḅ', 'c': 'c̣', 'd': 'ḍ', 'e': 'ẹ', 'f': 'f̣', 'g': 'g̣',
        'h': 'ḥ', 'i': 'ị', 'j': 'j̣', 'k': 'ḳ', 'l': 'ḷ', 'm': 'ṃ', 'n': 'ṇ',
        'o': 'ọ', 'p': 'p̣', 'q': 'q̣', 'r': 'ṛ', 's': 'ṣ', 't': 'ṭ', 'u': 'ụ',
        'v': 'ṿ', 'w': 'ẉ', 'x': 'x̣', 'y': 'ỵ', 'z': 'ẓ',
        'A': 'Ạ', 'B': 'Ḅ', 'C': 'C̣', 'D': 'Ḍ', 'E': 'Ẹ', 'F': 'F̣', 'G': 'G̣',
        'H': 'Ḥ', 'I': 'Ị', 'J': 'J̣', 'K': 'Ḳ', 'L': 'Ḷ', 'M': 'Ṃ', 'N': 'Ṇ',
        'O': 'Ọ', 'P': 'P̣', 'Q': 'Q̣', 'R': 'Ṛ', 'S': 'Ṣ', 'T': 'Ṭ', 'U': 'Ụ',
        'V': 'Ṿ', 'W': 'Ẉ', 'X': 'X̣', 'Y': 'Ỵ', 'Z': 'Ẓ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Tilde',
    id: 'tilde',
    description: 'Tilde over characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ã', 'b': 'b̃', 'c': 'c̃', 'd': 'd̃', 'e': 'ẽ', 'f': 'f̃', 'g': 'g̃',
        'h': 'h̃', 'i': 'ĩ', 'j': 'j̃', 'k': 'k̃', 'l': 'l̃', 'm': 'm̃', 'n': 'ñ',
        'o': 'õ', 'p': 'p̃', 'q': 'q̃', 'r': 'r̃', 's': 's̃', 't': 't̃', 'u': 'ũ',
        'v': 'ṽ', 'w': 'w̃', 'x': 'x̃', 'y': 'ỹ', 'z': 'z̃',
        'A': 'Ã', 'B': 'B̃', 'C': 'C̃', 'D': 'D̃', 'E': 'Ẽ', 'F': 'F̃', 'G': 'G̃',
        'H': 'H̃', 'I': 'Ĩ', 'J': 'J̃', 'K': 'K̃', 'L': 'L̃', 'M': 'M̃', 'N': 'Ñ',
        'O': 'Õ', 'P': 'P̃', 'Q': 'Q̃', 'R': 'R̃', 'S': 'S̃', 'T': 'T̃', 'U': 'Ũ',
        'V': 'Ṽ', 'W': 'W̃', 'X': 'X̃', 'Y': 'Ỹ', 'Z': 'Z̃'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Small Text',
    id: 'small-text',
    description: 'Tiny superscript style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ',
        'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ',
        'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ʳ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
        'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
        'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ',
        'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ',
        'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'ᵠ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ',
        'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Medieval',
    id: 'medieval',
    description: 'Medieval script style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌',
        'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓',
        'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚',
        'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
        'A': '𝖆', 'B': '𝖇', 'C': '𝖈', 'D': '𝖉', 'E': '𝖊', 'F': '𝖋', 'G': '𝖌',
        'H': '𝖍', 'I': '𝖎', 'J': '𝖏', 'K': '𝖐', 'L': '𝖑', 'M': '𝖒', 'N': '𝖓',
        'O': '𝖔', 'P': '𝖕', 'Q': '𝖖', 'R': '𝖗', 'S': '𝖘', 'T': '𝖙', 'U': '𝖚',
        'V': '𝖛', 'W': '𝖜', 'X': '𝖝', 'Y': '𝖞', 'Z': '𝖟'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Rounded',
    id: 'rounded',
    description: 'Rounded sans-serif style',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘',
        'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟',
        'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦',
        'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾',
        'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ',
        'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌',
        'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
      }
      return map[char] || char
    }).join('')
  },
  {
    name: 'Full Block',
    id: 'full-block',
    description: 'Full block characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': '█a█', 'b': '█b█', 'c': '█c█', 'd': '█d█', 'e': '█e█', 'f': '█f█', 'g': '█g█',
        'h': '█h█', 'i': '█i█', 'j': '█j█', 'k': '█k█', 'l': '█l█', 'm': '█m█', 'n': '█n█',
        'o': '█o█', 'p': '█p█', 'q': '█q█', 'r': '█r█', 's': '█s█', 't': '█t█', 'u': '█u█',
        'v': '█v█', 'w': '█w█', 'x': '█x█', 'y': '█y█', 'z': '█z█',
        'A': '█A█', 'B': '█B█', 'C': '█C█', 'D': '█D█', 'E': '█E█', 'F': '█F█', 'G': '█G█',
        'H': '█H█', 'I': '█I█', 'J': '█J█', 'K': '█K█', 'L': '█L█', 'M': '█M█', 'N': '█N█',
        'O': '█O█', 'P': '█P█', 'Q': '█Q█', 'R': '█R█', 'S': '█S█', 'T': '█T█', 'U': '█U█',
        'V': '█V█', 'W': '█W█', 'X': '█X█', 'Y': '█Y█', 'Z': '█Z█'
      }
      return map[char] || `█${char}█`
    }).join('')
  },
  {
    name: 'Dashed',
    id: 'dashed',
    description: 'Dashed through characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'a̶', 'b': 'b̶', 'c': 'c̶', 'd': 'd̶', 'e': 'e̶', 'f': 'f̶', 'g': 'g̶',
        'h': 'h̶', 'i': 'i̶', 'j': 'j̶', 'k': 'k̶', 'l': 'l̶', 'm': 'm̶', 'n': 'n̶',
        'o': 'o̶', 'p': 'p̶', 'q': 'q̶', 'r': 'r̶', 's': 's̶', 't': 't̶', 'u': 'u̶',
        'v': 'v̶', 'w': 'w̶', 'x': 'x̶', 'y': 'y̶', 'z': 'z̶',
        'A': 'A̶', 'B': 'B̶', 'C': 'C̶', 'D': 'D̶', 'E': 'E̶', 'F': 'F̶', 'G': 'G̶',
        'H': 'H̶', 'I': 'I̶', 'J': 'J̶', 'K': 'K̶', 'L': 'L̶', 'M': 'M̶', 'N': 'N̶',
        'O': 'O̶', 'P': 'P̶', 'Q': 'Q̶', 'R': 'R̶', 'S': 'S̶', 'T': 'T̶', 'U': 'U̶',
        'V': 'V̶', 'W': 'W̶', 'X': 'X̶', 'Y': 'Y̶', 'Z': 'Z̶'
      }
      return map[char] || `${char}̶`
    }).join('')
  },
  {
    name: 'Crossed',
    id: 'crossed',
    description: 'X through characters',
    transform: (text: string) => text.split('').map(char => {
      const map: { [key: string]: string } = {
        'a': 'a̵', 'b': 'b̵', 'c': 'c̵', 'd': 'd̵', 'e': 'e̵', 'f': 'f̵', 'g': 'g̵',
        'h': 'h̵', 'i': 'i̵', 'j': 'j̵', 'k': 'k̵', 'l': 'l̵', 'm': 'm̵', 'n': 'n̵',
        'o': 'o̵', 'p': 'p̵', 'q': 'q̵', 'r': 'r̵', 's': 's̵', 't': 't̵', 'u': 'u̵',
        'v': 'v̵', 'w': 'w̵', 'x': 'x̵', 'y': 'y̵', 'z': 'z̵',
        'A': 'A̵', 'B': 'B̵', 'C': 'C̵', 'D': 'D̵', 'E': 'E̵', 'F': 'F̵', 'G': 'G̵',
        'H': 'H̵', 'I': 'I̵', 'J': 'J̵', 'K': 'K̵', 'L': 'L̵', 'M': 'M̵', 'N': 'N̵',
        'O': 'O̵', 'P': 'P̵', 'Q': 'Q̵', 'R': 'R̵', 'S': 'S̵', 'T': 'T̵', 'U': 'U̵',
        'V': 'V̵', 'W': 'W̵', 'X': 'X̵', 'Y': 'Y̵', 'Z': 'Z̵'
      }
      return map[char] || `${char}̵`
    }).join('')
  }
]

export function GlitchTextGeneratorTool() {
  const [input, setInput] = useState('')
  const [outputs, setOutputs] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (input.trim()) {
      const newOutputs: { [key: string]: string } = {}
      glitchStyles.forEach(style => {
        newOutputs[style.id] = style.transform(input)
      })
      setOutputs(newOutputs)
    } else {
      setOutputs({})
    }
  }, [input])

  const copyToClipboard = (text: string, styleName: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: 'Copied!',
      description: `${styleName} copied to clipboard`,
    })
  }

  const clearAll = () => {
    setInput('')
    setOutputs({})
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Glitch Text Generator</h2>
        <p className="text-sm text-muted-foreground">
          Enter text below to create multiple glitch and stylized versions
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Input Text
          </label>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your text here..."
            className="min-h-[120px] font-mono"
          />
        </div>

        <div className="flex gap-3">
          <Button onClick={clearAll} variant="outline" className="flex-1">
            Clear
          </Button>
        </div>

        {outputs && Object.keys(outputs).length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Generated Styles</h3>
            <div className="grid gap-4">
              {glitchStyles.map(style => (
                <Card key={style.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-base">{style.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{style.description}</p>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(outputs[style.id], style.name)}
                        size="sm"
                        variant="outline"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-muted/50 rounded-lg font-mono text-sm break-all min-h-[60px]">
                      {outputs[style.id]}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
