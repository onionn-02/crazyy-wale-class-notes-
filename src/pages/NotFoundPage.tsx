import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-36">
      <SectionLabel>Error</SectionLabel>
      <p className="mt-6 font-display text-7xl font-semibold tracking-tightest text-ink sm:text-8xl">404</p>
      <h1 className="mt-4 text-xl font-semibold text-ink sm:text-2xl">Oops! This page doesn't exist.</h1>
      <p className="mt-2 text-ink-muted">The page you're looking for may have moved or been removed.</p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 rounded-md border border-edge-strong px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand-400/60 hover:text-brand-400"
      >
        Back to Study Hub
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  )
}
