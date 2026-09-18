import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ResourceCard from '../components/ResourceCard'
import EmptyState from '../components/EmptyState'
import SectionLabel from '../components/SectionLabel'
import { getSubjectById, getCategoryById } from '../data/subjects'
import { getResourcesByCategory } from '../data/resources'

export default function CategoryPage() {
  const { subjectId, categoryId } = useParams<{ subjectId: string; categoryId: string }>()
  const subject = subjectId ? getSubjectById(subjectId) : undefined
  const category = subject && categoryId ? getCategoryById(subject, categoryId) : undefined

  if (!subject || !category) {
    return <Navigate to="/404" replace />
  }

  const categoryResources = getResourcesByCategory(subject.id, category.id)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionLabel>{subject.name}</SectionLabel>
      <div className="mt-4">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: subject.name, to: `/subject/${subject.id}` },
            { label: category.name },
          ]}
        />
      </div>

      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{category.name}</h1>
      <p className="mt-4 max-w-md text-ink-muted">{category.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-faint">
        {categoryResources.length} {categoryResources.length === 1 ? 'resource' : 'resources'}
      </p>

      <div className="mt-14">
        {categoryResources.length > 0 ? (
          <div className="divide-y divide-edge border-y border-edge">
            {categoryResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                subjectName={subject.name}
                categoryName={category.name}
                index={index}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}
