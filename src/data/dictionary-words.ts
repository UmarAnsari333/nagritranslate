/**
 * Curated dictionary word list — family-safe, API-verified words only
 *
 * Removed:
 *  - Silly/nonsense words (balderdash, poppycock, hogwash, malarkey, etc.)
 *  - Invented "Dictionary of Obscure Sorrows" words not in real dictionaries
 *  - Borderline adult words (limerence, ecstasy, hedonism, depravity)
 *  - Hyphenated entries that break the dictionary API
 *  - Duplicates
 */

// ── SAT / GRE Vocabulary ─────────────────────────────────────────────────────
const SAT_GRE = [
  'aberrant', 'abeyance', 'abscond', 'abstemious', 'accolade', 'acrimony',
  'adulation', 'aesthetic', 'affable', 'aggrandize', 'alacrity', 'alleviate',
  'amalgamate', 'ambivalent', 'ameliorate', 'anachronism', 'analogous',
  'anomalous', 'antipathy', 'apathy', 'aplomb', 'appease', 'arcane',
  'arduous', 'articulate', 'ascetic', 'assiduous', 'astute', 'atrophy',
  'audacious', 'auspicious', 'austere', 'avarice', 'banal', 'bellicose',
  'benevolent', 'bombastic', 'brusque', 'bucolic', 'burgeon', 'cacophony',
  'callous', 'candid', 'capricious', 'capitulate', 'caustic', 'chicanery',
  'clamor', 'clandestine', 'coalesce', 'cogent', 'complacent', 'concise',
  'condescending', 'confound', 'contentious', 'contrite', 'convoluted',
  'copious', 'corroborate', 'covert', 'craven', 'culpable', 'cursory',
  'cynical', 'dearth', 'debacle', 'decorous', 'deference', 'denigrate',
  'demagogue', 'denounce', 'deprecate', 'deride', 'despondent', 'diligent',
  'dilettante', 'discern', 'disdain', 'disparage', 'dissemble', 'dogmatic',
  'dormant', 'dubious', 'duplicity', 'earnest', 'eccentric', 'eloquent',
  'emulate', 'enervate', 'ephemeral', 'equivocal', 'erratic', 'esoteric',
  'exacerbate', 'exculpate', 'exemplary', 'exonerate', 'expedient',
  'extraneous', 'exuberant', 'facilitate', 'fallacious', 'fastidious',
  'feckless', 'flagrant', 'flippant', 'foment', 'fortuitous', 'frugal',
  'furtive', 'garrulous', 'germane', 'grandiloquent', 'gregarious',
  'gullible', 'hackneyed', 'haughty', 'heretical', 'hegemony', 'hyperbole',
  'iconoclast', 'idiosyncratic', 'immutable', 'impartial', 'impertinent',
  'impetuous', 'impudent', 'incisive', 'indifferent', 'indigenous', 'inept',
  'inevitable', 'insolent', 'insular', 'intrepid', 'inveterate', 'irascible',
  'irreverent', 'laconic', 'lament', 'languid', 'laud', 'loquacious',
  'lugubrious', 'malleable', 'meticulous', 'misanthrope', 'mitigate',
  'mundane', 'myopic', 'nefarious', 'nonchalant', 'obdurate', 'obtuse',
  'officious', 'ominous', 'opaque', 'oscillate', 'ostentatious', 'parsimony',
  'pedantic', 'pellucid', 'penchant', 'perfidious', 'perfunctory',
  'pernicious', 'petulant', 'placate', 'platitude', 'plausible', 'plethora',
  'pragmatic', 'precipitate', 'predilection', 'pretentious', 'prodigal',
  'profound', 'proliferate', 'propitious', 'provocative', 'prudent',
  'pugnacious', 'querulous', 'quixotic', 'recalcitrant', 'reclusive',
  'rectify', 'redundant', 'refute', 'relegate', 'remorse', 'repudiate',
  'rescind', 'resilient', 'reticent', 'rhetoric', 'sagacious', 'sanction',
  'sardonic', 'satirical', 'scrutinize', 'sedulous', 'serendipity',
  'skeptical', 'solicitous', 'soporific', 'specious', 'spurious',
  'stagnant', 'stoic', 'subjugate', 'superfluous', 'sycophant', 'taciturn',
  'tenacious', 'transgress', 'transient', 'trite', 'truculent', 'turbulent',
  'ubiquitous', 'undermine', 'usurp', 'vehement', 'venerate', 'verbose',
  'vilify', 'volatile', 'wary', 'zealous', 'abstain', 'acumen', 'adept',
  'adjacent', 'advocate', 'affinity', 'agenda', 'aggregate', 'albeit',
  'allocate', 'ambiguous', 'amplify', 'anecdote', 'anticipate', 'apocryphal',
  'apprehensive', 'arbitrary', 'ardent', 'articulation', 'aspire',
  'assertion', 'attenuate', 'attribute', 'augment', 'autonomy', 'benign',
  'brevity', 'catalyst', 'causation', 'circumvent', 'coherent', 'complement',
  'comprehensive', 'conception', 'constitute', 'contradict', 'conviction',
  'credible', 'criteria', 'critique', 'cumulative', 'deduce', 'deliberate',
  'demise', 'denote', 'derive', 'detrimental', 'deviate', 'dichotomy',
  'differentiate', 'diminish', 'discrepancy', 'disparity', 'distinctive',
  'diverge', 'dominate', 'dynamic', 'elaborate', 'eminent', 'empirical',
  'encompass', 'enhance', 'enumerate', 'epistemology', 'equitable',
  'evaluate', 'evolve', 'exemplify', 'exhaust', 'expand', 'explicit',
  'exploit', 'fluctuate', 'formulate', 'fundamental', 'generate',
  'hypothesis', 'ideology', 'illustrate', 'implement', 'implicit',
  'incentive', 'incorporate', 'indicate', 'induce', 'inference', 'inherent',
  'initiate', 'innovate', 'integrate', 'interpret', 'intervene', 'intrinsic',
  'invoke', 'justify', 'liable', 'linear', 'magnitude', 'manifest',
  'methodology', 'minimize', 'modify', 'motivate', 'negligible',
  'negate', 'objective', 'obtain', 'paradigm', 'parameter', 'perceive',
  'persist', 'phenomenon', 'precisely', 'predominant', 'premise',
  'prioritize', 'proponent', 'qualitative', 'quantitative', 'radical',
  'rational', 'reinforce', 'relevant', 'replicate', 'require', 'retain',
  'revise', 'robust', 'sequence', 'significant', 'simulate', 'specify',
  'stable', 'strategy', 'subsequent', 'suffice', 'summarize', 'supplement',
  'sustain', 'synthesize', 'temporary', 'terminate', 'theory', 'trace',
  'transform', 'transition', 'undertake', 'unify', 'utilize', 'validity',
  'variable', 'verify', 'whereas', 'widespread',
]

// ── Emotional / Psychological ─────────────────────────────────────────────────
const EMOTIONAL = [
  'melancholy', 'euphoria', 'nostalgia', 'reverie', 'solace', 'anguish',
  'serenity', 'exhilaration', 'forlorn', 'wistful', 'elation', 'desolate',
  'empathy', 'compassion', 'gratitude', 'resilience', 'fortitude',
  'perseverance', 'determination', 'courage', 'bravery', 'wisdom', 'patience',
  'kindness', 'generosity', 'humility', 'integrity', 'honesty', 'loyalty',
  'dignity', 'grace', 'vulnerability', 'mindfulness', 'contentment',
  'despair', 'grief', 'sorrow', 'bliss', 'tranquility',
  'ambivalence', 'catharsis', 'solitude', 'loneliness', 'belonging',
  'fulfillment', 'purpose', 'meaning', 'identity', 'confidence',
  'anxiety', 'phobia', 'trauma', 'healing', 'recovery',
  'forgiveness', 'acceptance', 'surrender', 'hope', 'optimism', 'pessimism',
  'cynicism', 'altruism', 'narcissism', 'empowerment', 'boundaries',
  'accountability', 'authenticity', 'equanimity', 'schadenfreude',
  'saudade', 'hiraeth', 'petrichor', 'liminal', 'epiphany', 'cathartic',
  'languish', 'flourish', 'thrive', 'burnout', 'rumination', 'introspection',
  'existential', 'nihilism', 'stoicism', 'ennui', 'weltschmerz', 'wanderlust',
]

// ── Commonly Misunderstood Words ──────────────────────────────────────────────
const MISUNDERSTOOD = [
  'affect', 'effect', 'irony', 'literally', 'unique', 'infamous',
  'bemused', 'nonplussed', 'disinterested', 'uninterested', 'envy',
  'jealousy', 'comprise', 'compose', 'continual', 'continuous',
  'imply', 'infer', 'fewer', 'less', 'principal', 'principle',
  'complement', 'compliment', 'elusive', 'illusive', 'flaunt',
  'flout', 'historic', 'historical', 'hoard', 'horde',
  'loath', 'loathe', 'luxuriant', 'luxurious', 'perquisite', 'prerequisite',
  'venal', 'venial', 'tortuous', 'torturous', 'mitigate', 'militate',
  'travesty', 'tragedy', 'decimate', 'devastate', 'enormity',
  'fulsome', 'ample', 'noisome', 'penultimate',
  'cliche', 'stereotype', 'trope', 'archetype', 'paradox',
  'oxymoron', 'juxtaposition', 'antithesis', 'analogy',
  'metaphor', 'simile', 'allegory', 'understatement',
  'sarcasm', 'satire', 'parody', 'pastiche', 'homage',
]

// ── Business / Professional Vocabulary ───────────────────────────────────────
const BUSINESS = [
  'acumen', 'agile', 'benchmark', 'scalable', 'synergy', 'leverage',
  'disruption', 'innovation', 'entrepreneurship', 'pivoting',
  'iteration', 'stakeholder', 'deliverable', 'bandwidth', 'alignment',
  'transparency', 'accountability', 'metrics', 'analytics', 'optimization',
  'monetize', 'acquisition', 'retention', 'conversion', 'engagement',
  'onboarding', 'arbitrage', 'liquidate', 'amortize', 'depreciate',
  'appreciate', 'dividend', 'equity', 'liability', 'revenue', 'profit',
  'margin', 'overhead', 'turnover', 'valuation', 'consortium',
  'conglomerate', 'subsidiary', 'franchise', 'merger', 'divestiture',
  'liquidation', 'insolvency', 'bankruptcy', 'collateral', 'fiduciary',
  'indemnify', 'arbitration', 'mediation', 'litigation', 'jurisdiction',
  'compliance', 'regulatory', 'mandate', 'procurement', 'logistics',
  'outsource', 'offshore', 'prototype', 'feasibility', 'viability',
  'sustainability', 'scalability', 'redundancy', 'contingency',
  'mitigation', 'remediation', 'escalation', 'proactive', 'reactive',
  'strategic', 'tactical', 'operational', 'empowerment', 'delegation',
  'micromanagement', 'bureaucracy', 'hierarchy',
]

// ── Literary / Academic Vocabulary ───────────────────────────────────────────
const LITERARY = [
  'didactic', 'poignant', 'evocative', 'eloquence', 'vernacular',
  'colloquial', 'euphemism', 'malapropism', 'spoonerism',
  'neologism', 'portmanteau', 'eponymous', 'apocryphal', 'canonical',
  'quintessential', 'epitome', 'paragon', 'exemplar',
  'protagonist', 'antagonist', 'antihero', 'foil', 'leitmotif',
  'denouement', 'soliloquy', 'monologue', 'dialogue', 'narrative',
  'omniscient', 'omnipotent', 'omnipresent', 'pervasive',
  'succinct', 'terse', 'pithy', 'circumlocution',
  'pejorative', 'connotation', 'denotation', 'semantics',
  'syntax', 'etymology', 'lexicon', 'nomenclature', 'taxonomy',
  'parable', 'fable', 'personification', 'anthropomorphism',
  'onomatopoeia', 'alliteration', 'assonance', 'consonance',
  'rhythm', 'cadence', 'prosody', 'meter', 'sonnet', 'elegy', 'ode', 'haiku',
  'plagiarism', 'paraphrase', 'synopsis', 'abstract', 'thesis',
  'corollary', 'deduction', 'induction', 'syllogism', 'tautology',
  'fallacy', 'sophistry', 'axiom', 'postulate', 'theorem', 'lemma',
]

// ── Science & Nature ──────────────────────────────────────────────────────────
const SCIENCE = [
  'entropy', 'osmosis', 'photosynthesis', 'respiration', 'metabolism',
  'enzyme', 'protein', 'chromosome', 'genome', 'mutation',
  'evolution', 'adaptation', 'ecosystem', 'biodiversity', 'symbiosis',
  'predator', 'prey', 'carnivore', 'herbivore', 'omnivore',
  'habitat', 'niche', 'species', 'genus', 'fossil',
  'sediment', 'erosion', 'tectonic', 'volcanic', 'seismic', 'tsunami',
  'observation', 'experiment', 'variable', 'control', 'correlation', 'causation',
  'gravity', 'momentum', 'velocity', 'acceleration', 'inertia', 'friction',
  'pressure', 'density', 'viscosity', 'buoyancy', 'diffusion', 'convection',
  'radiation', 'conduction', 'wavelength', 'frequency', 'amplitude',
  'quantum', 'photon', 'electron', 'neutron', 'proton', 'nucleus',
  'fission', 'fusion', 'isotope', 'compound', 'element', 'molecule',
  'oxidation', 'reduction', 'alkaline', 'neutral',
  'flora', 'fauna', 'microorganism', 'bacteria', 'virus', 'pathogen',
  'immune', 'antibody', 'antigen', 'vaccine', 'pandemic', 'endemic',
  'epidemic', 'contagious', 'latent', 'acute', 'chronic',
  'benign', 'malignant', 'remission', 'prognosis', 'diagnosis', 'symptom',
]

// ── Philosophy & Ethics ───────────────────────────────────────────────────────
const PHILOSOPHY = [
  'nihilism', 'existentialism', 'stoicism', 'utilitarianism',
  'consequentialism', 'deontology', 'virtue', 'ethics', 'morality',
  'relativism', 'absolutism', 'determinism', 'compatibilism',
  'dualism', 'monism', 'materialism', 'idealism', 'empiricism',
  'rationalism', 'skepticism', 'pragmatism', 'humanism', 'absurdism',
  'solipsism', 'ontology', 'epistemology', 'metaphysics', 'dialectic',
  'dogma', 'doctrine', 'sophism', 'aporia', 'logos', 'ethos', 'pathos',
  'sublime', 'transcendent', 'immanent', 'zeitgeist',
  'angst', 'hubris', 'nemesis',
]

// ── Interesting Real Words ────────────────────────────────────────────────────
// Genuine words with real dictionary definitions and high curiosity search volume
const INTERESTING = [
  'petrichor', 'hiraeth', 'saudade', 'tsundoku', 'hygge', 'ikigai',
  'meraki', 'eudaimonia', 'kairos', 'ubuntu', 'fernweh',
  'ellipsis', 'phosphenes', 'daguerreotype', 'palimpsest',
  'concatenate', 'defenestrate', 'onomatopoeia', 'loquacious',
  'ephemeral', 'mellifluous', 'sesquipedalian', 'ineffable',
  'numinous', 'apricity', 'sempiternal',
  'susurrus', 'gossamer', 'halcyon', 'elysian', 'ethereal',
  'labyrinthine', 'labyrinth', 'silhouette', 'rendezvous',
  'sycophant', 'phantasm', 'kaleidoscope', 'serendipity',
  'eloquent', 'melancholy', 'ephemeral', 'luminous', 'resplendent',
  'iridescent', 'incandescent', 'translucent', 'luminescent',
  'bioluminescent', 'phosphorescent', 'scintillating', 'coruscating',
]

// ── Formal / Eloquent Words ───────────────────────────────────────────────────
const FORMAL = [
  'acquiesce', 'allude', 'ameliorate', 'antecedent', 'apprise',
  'arbiter', 'assail', 'attest', 'beguile', 'behoove', 'beleaguer',
  'bemoan', 'bestow', 'bode', 'bolster', 'broach',
  'castigate', 'caveat', 'censure', 'circumspect', 'clarify',
  'coerce', 'condone', 'conjecture', 'consecrate', 'consummate',
  'counteract', 'cultivate', 'curtail', 'deter', 'devoid', 'disclaim',
  'dispel', 'dissipate', 'distinguish', 'edify', 'elucidate', 'embody',
  'embroil', 'emphasize', 'encroach', 'endeavor', 'engender', 'enjoin',
  'equivocate', 'espouse', 'esteem', 'exhort', 'expedite',
  'extol', 'fervent', 'forestall', 'galvanize', 'garner', 'glean',
  'grapple', 'herald', 'impede', 'inaugurate', 'incite', 'indulge',
  'ingratiate', 'lament', 'mediate', 'nullify',
  'obfuscate', 'obviate', 'orchestrate', 'pardon', 'patronize', 'preclude',
  'presuppose', 'prevail', 'proclaim', 'profess', 'promulgate',
  'rebuke', 'recount', 'redress', 'refrain', 'relinquish', 'remedy',
  'remonstrate', 'render', 'renounce', 'resolve',
  'restore', 'retaliate', 'reveal', 'safeguard', 'signify', 'solicit',
  'stipulate', 'surmount', 'uphold', 'vindicate', 'warrant',
  'withstand', 'arbitrate', 'contend', 'diverge', 'endorse', 'eradicate',
  'fabricate', 'fortify', 'hamper', 'impair', 'incentivize', 'inculcate',
  'instigate', 'juxtapose', 'obliterate',
  'perpetuate', 'propagate', 'reverberate',
  'revoke', 'stifle', 'subvert', 'supersede', 'truncate',
]

// ── Commonly Searched Adjectives ──────────────────────────────────────────────
const ADJECTIVES = [
  'abysmal', 'adamant', 'affable', 'aggressive', 'agile', 'amiable',
  'amicable', 'ample', 'antagonistic', 'apprehensive', 'archaic',
  'ardent', 'arrogant', 'astute', 'audacious',
  'bleak', 'boisterous', 'callous', 'charismatic', 'circumspect',
  'colossal', 'compelling', 'complacent', 'concise', 'convoluted',
  'crafty', 'credulous', 'cryptic', 'cunning', 'cynical', 'daunting',
  'debonair', 'decisive', 'defiant', 'delicate', 'desolate', 'devious',
  'diligent', 'docile', 'dominant', 'dubious', 'dynamic', 'earnest',
  'eccentric', 'elusive', 'eminent', 'empathetic', 'enigmatic', 'erratic',
  'evasive', 'exemplary', 'exhaustive', 'exorbitant',
  'extraordinary', 'exuberant', 'fastidious', 'fervent', 'ferocious',
  'formidable', 'frugal', 'gregarious', 'hilarious', 'humble',
  'immaculate', 'impeccable', 'indulgent', 'ingenious', 'inquisitive',
  'insightful', 'intricate', 'intuitive', 'jovial', 'judicious', 'keen',
  'lucid', 'magnanimous', 'malevolent', 'mediocre', 'meek',
  'mischievous', 'naive', 'oblivious', 'obstinate',
  'ominous', 'passionate', 'peculiar', 'persistent', 'perspicacious',
  'pious', 'plausible', 'poignant', 'pompous', 'precocious', 'prominent',
  'prudent', 'quirky', 'radiant', 'ruthless', 'scholarly', 'serene',
  'shrewd', 'sincere', 'spontaneous', 'stubborn',
  'subtle', 'timid', 'triumphant', 'turbulent', 'vivacious',
  'whimsical', 'witty', 'adept', 'aggrieved', 'aloof',
  'amorphous', 'antiquated', 'apathetic',
  'blatant', 'captivating', 'chaotic', 'coherent', 'contrarian',
  'deliberate', 'distraught', 'durable', 'empathic',
]

// ── Nouns with High Search Volume ─────────────────────────────────────────────
const NOUNS = [
  'abyss', 'accolade', 'adversity', 'affliction', 'aftermath', 'allegiance',
  'alliance', 'ambiguity', 'anarchy', 'anomaly', 'antagonist', 'aphorism',
  'aspiration', 'atrocity', 'autonomy', 'beacon',
  'benefactor', 'causality', 'chasm', 'cohesion',
  'collaboration', 'colloquy', 'commotion', 'compassion', 'conception',
  'condescension', 'conundrum', 'conviction', 'correlation', 'covenant',
  'debacle', 'deception', 'deficiency', 'dilemma', 'discrepancy',
  'disillusionment', 'dogma', 'duality', 'elegy', 'enigma', 'equilibrium',
  'evolution', 'facade', 'ferocity', 'finesse',
  'fracture', 'futility', 'genesis', 'grandeur', 'grievance', 'hallmark',
  'harbinger', 'hierarchy', 'homage', 'hypocrisy', 'illusion',
  'impasse', 'inception', 'indignation', 'ingenuity',
  'injustice', 'irony', 'legacy', 'lethargy',
  'lucidity', 'malice', 'manifestation', 'mediocrity',
  'menace', 'metamorphosis', 'misconception', 'momentum',
  'nuance', 'obstruction', 'omen', 'oppression', 'optimism',
  'ordeal', 'perseverance', 'perspective',
  'precedent', 'predicament', 'profundity',
  'resilience', 'sanctuary', 'sovereignty', 'spectrum', 'stigma',
  'subtlety', 'tenacity', 'threshold', 'turmoil', 'tyranny', 'utopia',
  'valor', 'versatility', 'vindication', 'virtue', 'vision', 'vulnerability',
  'zealotry', 'zenith', 'adversary', 'ambivalence',
]

// ── All words combined and deduplicated ───────────────────────────────────────
export const DICTIONARY_WORDS: string[] = [
  ...new Set([
    ...SAT_GRE,
    ...EMOTIONAL,
    ...MISUNDERSTOOD,
    ...BUSINESS,
    ...LITERARY,
    ...SCIENCE,
    ...PHILOSOPHY,
    ...INTERESTING,
    ...FORMAL,
    ...ADJECTIVES,
    ...NOUNS,
  ]),
].sort()

export const DICTIONARY_WORD_COUNT = DICTIONARY_WORDS.length
