import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ResourceCategory } from '../types'

export default function CategoryCard({
  subjectId,
  category,
  count,
  index,
}: {
  subjectId: string
  category: ResourceCategory
  count: number
  index: number
}) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/subject/${subjectId}/${category.id}`}
      className="group flex flex-col gap-2 py-6 transition-colors hover:bg-ink/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 sm:py-7"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-display text-sm tabular-nums text-ink-faint transition-colors group-hover:text-brand-400">
            {number}
          </span>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{category.name}</h3>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-muted transition-colors group-hover:text-ink">
          <span className="hidden sm:inline">View</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
      <p className="max-w-md pl-10 text-sm text-ink-muted sm:pl-14">
        {category.description}
        <span className="text-ink-faint"> · {count} {count === 1 ? 'file' : 'files'}</span>
      </p>
    </Link>
  )
}
