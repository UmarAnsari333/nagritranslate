export interface RarityLevel {
  label: string
  bg: string
  text: string
}

export const LEGEND: RarityLevel[] = [
  { label: 'Very Common', bg: 'bg-green-100 dark:bg-green-900/40',    text: 'text-green-800 dark:text-green-200' },
  { label: 'Common',      bg: 'bg-emerald-100 dark:bg-emerald-900/40', text: 'text-emerald-800 dark:text-emerald-200' },
  { label: 'Everyday',    bg: 'bg-sky-100 dark:bg-sky-900/40',         text: 'text-sky-800 dark:text-sky-200' },
  { label: 'Uncommon',    bg: 'bg-amber-100 dark:bg-amber-900/40',     text: 'text-amber-800 dark:text-amber-200' },
  { label: 'Rare',        bg: 'bg-orange-100 dark:bg-orange-900/40',   text: 'text-orange-800 dark:text-orange-200' },
  { label: 'Very Rare',   bg: 'bg-red-100 dark:bg-red-900/40',         text: 'text-red-800 dark:text-red-200' },
]
