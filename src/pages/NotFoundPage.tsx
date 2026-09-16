import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
        <Compass className="h-8 w-8" aria-hidden="true" />
      </span>
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
        Oops! This page doesn't exist.
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">The page you're looking for may have moved or been removed.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Back to Study Hub
      </Link>
    </div>
  )
}
