import SubjectCard from '../components/SubjectCard'
import { subjects } from '../data/subjects'

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
        All Subjects
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">Pick a subject to see its notes and resources.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  )
}
