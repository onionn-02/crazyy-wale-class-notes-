import { Navigate, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import CategoryCard from '../components/CategoryCard'
import SectionLabel from '../components/SectionLabel'
import { getSubjectById } from '../data/subjects'
import { getResourcesByCategory } from '../data/resources'

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const subject = subjectId ? getSubjectById(subjectId) : undefined

  if (!subject) {
    return <Navigate to="/404" replace />
  }

  const categoryCounts = subject.categories.map((category) => getResourcesByCategory(subject.id, category.id).length)
  const totalResources = categoryCounts.reduce((sum, count) => sum + count, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionLabel>Division Study Hub</SectionLabel>
      <div className="mt-4">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: subject.name }]} />
      </div>

      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{subject.name}</h1>
      <p className="mt-4 max-w-md text-ink-muted">{subject.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-faint">
        {totalResources} {totalResources === 1 ? 'resource' : 'resources'} · {subject.categories.length}{' '}
        {subject.categories.length === 1 ? 'category' : 'categories'}
      </p>

      {subject.driveFolderUrl && (
        <a
          href={subject.driveFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-edge-strong px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand-400/60 hover:text-brand-400"
        >
          Open Google Drive folder
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}

      <div className="mt-14 divide-y divide-edge border-y border-edge">
        {subject.categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            subjectId={subject.id}
            category={category}
            count={categoryCounts[index]}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
