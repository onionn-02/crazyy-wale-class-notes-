import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ResourceCard from '../components/ResourceCard'
import EmptyState from '../components/EmptyState'
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
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: subject.name, to: `/subject/${subject.id}` },
          { label: category.name },
        ]}
      />

      <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
        {category.name}
      </h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{category.description}</p>

      <div className="mt-8 flex flex-col gap-4">
        {categoryResources.length > 0 ? (
          categoryResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              subjectName={subject.name}
              categoryName={category.name}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}
