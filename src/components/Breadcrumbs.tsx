import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
      {items.map((item, index) => (
        <Fragment key={`${item.label}-${index}`}>
          {index > 0 && <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600" aria-hidden="true" />}
          {item.to ? (
            <Link to={item.to} className="rounded px-1 hover:text-brand-600 hover:underline dark:hover:text-brand-400">
              {item.label}
            </Link>
          ) : (
            <span className="px-1 font-medium text-slate-700 dark:text-slate-200" aria-current="page">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
