import { useState } from 'react'
import { AlertTriangle, ExternalLink } from 'lucide-react'
import type { Resource } from '../types'
import { ResourceTypeIcon } from './icons'
import { formatDate } from '../utils/formatDate'

interface ResourceCardProps {
  resource: Resource
  subjectName: string
  categoryName: string
}

export default function ResourceCard({ resource, subjectName, categoryName }: ResourceCardProps) {
  const [isUnavailable, setIsUnavailable] = useState(false)

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
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
          <ResourceTypeIcon type={resource.type} className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">{resource.title}</h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {subjectName} • {categoryName}
          </p>
          <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">Added: {formatDate(resource.date)}</p>
          {isUnavailable && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Sorry, this resource is currently unavailable.
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={handleOpen}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        Open Resource
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  )
}
