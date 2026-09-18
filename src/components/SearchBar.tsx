import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
}

export default function SearchBar({ value, onChange, placeholder, autoFocus }: SearchBarProps) {
  return (
    <div className="group relative rounded-lg border border-edge bg-surface/70 backdrop-blur-sm transition-all duration-300 focus-within:border-brand-400/70 focus-within:shadow-[0_0_0_4px_rgb(99_102_241_/_0.12)]">
      <Search
        className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint transition-colors group-focus-within:text-brand-400"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        autoFocus={autoFocus}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? 'Search subjects, notes, PYQs...'}
        aria-label="Search resources"
        className="w-full bg-transparent py-4 pl-14 pr-5 text-base text-ink placeholder:text-ink-faint focus:outline-none sm:py-5 sm:text-lg"
      />
    </div>
  )
}
