import { FolderOpen } from 'lucide-react'

export default function EmptyState({
  title = 'No resources added yet.',
  subtitle = 'Check back soon.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
        <FolderOpen className="h-7 w-7" aria-hidden="true" />
      </span>
      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{title}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
    </div>
  )
}
