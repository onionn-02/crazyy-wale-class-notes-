import SubjectCard from '../components/SubjectCard'
import SectionLabel from '../components/SectionLabel'
import { subjects } from '../data/subjects'

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionLabel>Division Study Hub</SectionLabel>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">All Subjects</h1>
      <p className="mt-4 max-w-md text-ink-muted">Pick a subject to see its notes and resources.</p>

      <div className="mt-14 divide-y divide-edge border-y border-edge">
        {subjects.map((subject, index) => (
          <SubjectCard key={subject.id} subject={subject} index={index} />
        ))}
      </div>
    </div>
  )
}
