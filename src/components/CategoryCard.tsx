import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ResourceCategory } from '../types'
import { CategoryIcon } from './icons'

export default function CategoryCard({
  subjectId,
  category,
  count,
}: {
  subjectId: string
  category: ResourceCategory
  count: number
}) {
  return (
    <Link
      to={`/subject/${subjectId}/${category.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-800"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-400 dark:group-hover:bg-brand-500/20">
          <CategoryIcon icon={category.icon} className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {count} {count === 1 ? 'file' : 'files'}
        </span>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{category.name}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{category.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
        View Resources
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}
