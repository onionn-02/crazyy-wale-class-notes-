import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Subject } from '../types'
import { SubjectIcon } from './icons'

const cardClass =
  'group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-800'

export default function SubjectCard({ subject }: { subject: Subject }) {
  const content = (action: ReactNode) => (
    <>
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-400 dark:group-hover:bg-brand-500/20">
        <SubjectIcon icon={subject.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{subject.name}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subject.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
        {action}
      </span>
    </>
  )

  // Subject has a shared Drive folder: open it directly in a new tab.
  if (subject.driveFolderUrl) {
    return (
      <a
        href={subject.driveFolderUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${subject.name} — open Google Drive folder (opens in a new tab)`}
        className={cardClass}
      >
        {content(
          <>
            Open in Drive
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </>,
        )}
      </a>
    )
  }

  return (
    <Link to={`/subject/${subject.id}`} className={cardClass}>
      {content(
        <>
          View resources
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </>,
      )}
    </Link>
  )
}
