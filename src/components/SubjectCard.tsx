import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Subject } from '../types'

// One row in the numbered subject index used on Home, /subjects and search
// results. The parent renders these inside a `divide-y divide-edge
// border-y border-edge` wrapper — the row itself only owns its vertical
// padding and hover state, so the dividing lines line up automatically.
const rowClass =
  'group flex flex-col gap-2 py-6 transition-colors hover:bg-ink/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 sm:py-7'

export default function SubjectCard({ subject, index }: { subject: Subject; index: number }) {
  const number = String(index + 1).padStart(2, '0')
  const isDrive = Boolean(subject.driveFolderUrl)

  const body = (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-display text-sm tabular-nums text-ink-faint transition-colors group-hover:text-brand-400">
            {number}
          </span>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{subject.name}</h3>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-muted transition-colors group-hover:text-ink">
          <span className="hidden sm:inline">{isDrive ? 'Open in Drive' : 'Explore'}</span>
          {isDrive ? (
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          ) : (
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          )}
        </span>
      </div>
      <p className="max-w-md pl-10 text-sm text-ink-muted sm:pl-14">{subject.description}</p>
    </>
  )

  const wrap = (children: ReactNode) =>
    isDrive ? (
      <a
        href={subject.driveFolderUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${subject.name} — open Google Drive folder (opens in a new tab)`}
        className={rowClass}
      >
        {children}
      </a>
    ) : (
      <Link to={`/subject/${subject.id}`} className={rowClass}>
        {children}
      </Link>
    )

  return wrap(body)
}
