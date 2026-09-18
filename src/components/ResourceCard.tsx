import { useState } from 'react'
import { AlertTriangle, ArrowUpRight } from 'lucide-react'
import type { Resource } from '../types'
import { formatDate } from '../utils/formatDate'

interface ResourceCardProps {
  resource: Resource
  subjectName: string
  categoryName: string
  index: number
}

export default function ResourceCard({ resource, subjectName, categoryName, index }: ResourceCardProps) {
  const [isUnavailable, setIsUnavailable] = useState(false)
  const number = String(index + 1).padStart(2, '0')

  function handleOpen() {
    if (!resource.url) {
      setIsUnavailable(true)
      return
    }
    try {
      // 'noopener' makes window.open return null even on success, so detach
      // the opener manually instead to still detect blocked popups.
      const opened = window.open(resource.url, '_blank')
      if (opened) {
        opened.opener = null
      } else {
        setIsUnavailable(true)
      }
    } catch {
      setIsUnavailable(true)
    }
  }

  return (
    <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-7">
      <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
        <span className="font-display text-sm tabular-nums text-ink-faint">{number}</span>
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            {resource.title}
          </h3>
          <p className="mt-1.5 text-sm text-ink-muted">
            {subjectName} · {categoryName} · {formatDate(resource.date)}
          </p>
          {isUnavailable && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber-500">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Sorry, this resource is currently unavailable.
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={handleOpen}
        className="ml-10 inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-edge px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand-400/60 hover:text-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:ml-0"
      >
        Open
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
