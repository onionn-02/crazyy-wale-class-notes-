import { FolderOpen } from 'lucide-react'

export default function EmptyState({
  title = 'No resources added yet.',
  subtitle = 'Check back soon.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-edge px-6 py-20 text-center">
      <FolderOpen className="mb-4 h-6 w-6 text-ink-faint" aria-hidden="true" />
      <p className="font-display text-base font-medium text-ink">{title}</p>
      <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
    </div>
  )
}
