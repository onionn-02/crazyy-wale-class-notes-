import type { ReactNode } from 'react'

// The small uppercase "DIVISION STUDY HUB" / "SUBJECTS" / "SEARCH" labels
// used above every section heading throughout the site. One component so
// the tracking, size and leading tick stay identical everywhere.
export default function SectionLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-ink-muted ${className}`}>
      <span className="h-px w-5 bg-edge-strong" aria-hidden="true" />
      {children}
    </p>
  )
}
