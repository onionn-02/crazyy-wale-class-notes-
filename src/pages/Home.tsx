import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, Pin } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import SubjectCard from '../components/SubjectCard'
import { subjects, getSubjectById, getCategoryById } from '../data/subjects'
import { getRecentResources, getImportantResources } from '../data/resources'
import { importantLinks } from '../data/importantLinks'
import { formatDate } from '../utils/formatDate'
import { ResourceTypeIcon } from '../components/icons'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const recentResources = getRecentResources(5)
  const importantResources = getImportantResources()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          Division Study Hub
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
          Everything you need for your studies.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 dark:text-slate-400 sm:text-lg">
          Notes, tutorials, previous year questions and important resources — all in one place, no
          more digging through chat groups.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
          <SearchBar value={query} onChange={setQuery} />
        </form>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">Subjects</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
            <Clock className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            Recently Added
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            {recentResources.map((resource) => {
              const subject = getSubjectById(resource.subjectId)
              const category = subject ? getCategoryById(subject, resource.categoryId) : undefined
              return (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-800 dark:hover:bg-brand-500/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <ResourceTypeIcon type={resource.type} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">{resource.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {subject?.name} • {category?.name} • {formatDate(resource.date)}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
            <Pin className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            Important
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            {importantLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 transition-colors hover:border-brand-200 hover:bg-brand-50/50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-800 dark:hover:bg-brand-500/5"
              >
                {link.title}
                <span className="text-brand-600 dark:text-brand-400">Open →</span>
              </a>
            ))}
            {importantResources.map((resource) => {
              const subject = getSubjectById(resource.subjectId)
              return (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 transition-colors hover:border-brand-200 hover:bg-brand-50/50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-800 dark:hover:bg-brand-500/5"
                >
                  {resource.title} — {subject?.name}
                  <span className="text-brand-600 dark:text-brand-400">Open →</span>
                </a>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
