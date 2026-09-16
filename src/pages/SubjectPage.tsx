import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import CategoryCard from '../components/CategoryCard'
import { getSubjectById } from '../data/subjects'
import { getResourcesByCategory } from '../data/resources'
import { SubjectIcon } from '../components/icons'

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const subject = subjectId ? getSubjectById(subjectId) : undefined

  if (!subject) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: subject.name }]} />

      <div className="mt-4 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
          <SubjectIcon icon={subject.icon} className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            {subject.name} Resources
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">{subject.description}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {subject.categories.map((category) => (
          <CategoryCard
            key={category.id}
            subjectId={subject.id}
            category={category}
            count={getResourcesByCategory(subject.id, category.id).length}
          />
        ))}
      </div>
    </div>
  )
}
