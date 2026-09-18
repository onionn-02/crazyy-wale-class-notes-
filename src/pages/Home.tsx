import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import SubjectCard from '../components/SubjectCard'
import SectionLabel from '../components/SectionLabel'
import EmptyState from '../components/EmptyState'
import { subjects, getSubjectById, getCategoryById } from '../data/subjects'
import { getRecentResources, getImportantResources } from '../data/resources'
import { importantLinks } from '../data/importantLinks'
import { formatDate } from '../utils/formatDate'
import { ResourceTypeIcon } from '../components/icons'

const rowLinkClass =
  'group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-ink/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const recentResources = getRecentResources(5)

  // Normalize the two "important" sources (static division-wide links and
  // resources flagged `important: true`) into one shape so they render as
  // a single, consistently-styled list instead of two near-duplicate blocks.
  const importantItems = [
    ...importantLinks.map((link) => ({ id: link.id, title: link.title, meta: undefined as string | undefined, url: link.url })),
    ...getImportantResources().map((resource) => ({
      id: resource.id,
      title: resource.title,
      meta: getSubjectById(resource.subjectId)?.name,
      url: resource.url,
    })),
  ]

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="pt-16 sm:pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <p className="animate-fade-up flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-ink-muted">
            <span className="h-px w-5 bg-edge-strong" aria-hidden="true" />
            Topper Tapri
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,8.5vw,6rem)] font-semibold leading-[0.98] tracking-tightest text-ink">
            <span className="animate-fade-up block" style={{ animationDelay: '80ms' }}>
              Every note.
            </span>
            <span className="animate-fade-up block" style={{ animationDelay: '160ms' }}>
              Every PYQ.
            </span>
            <span className="animate-fade-up block text-ink-muted" style={{ animationDelay: '240ms' }}>
              One place.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
            style={{ animationDelay: '320ms' }}
          >
            Notes, previous year questions and important resources — organized by subject,
            ready when you need them. No more digging through chat groups.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '380ms' }}>
            <Link
              to="/subjects"
              className="group inline-flex items-center gap-2 rounded-md border border-edge-strong px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-brand-400/60 hover:text-brand-400"
            >
              Explore Subjects
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="animate-fade-up mt-16 max-w-xl" style={{ animationDelay: '440ms' }}>
            <SectionLabel className="mb-3">Search resources</SectionLabel>
            <form onSubmit={handleSubmit}>
              <SearchBar value={query} onChange={setQuery} />
            </form>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Subjects                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="mt-28 sm:mt-36">
        <SectionLabel>Subjects</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Browse by subject
        </h2>

        <div className="mt-10 divide-y divide-edge border-y border-edge">
          {subjects.map((subject, index) => (
            <div key={subject.id} className="animate-fade-up" style={{ animationDelay: `${Math.min(index * 60, 300)}ms` }}>
              <SubjectCard subject={subject} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Recently added / Important                                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="mt-28 grid grid-cols-1 gap-16 sm:mt-36 lg:grid-cols-2 lg:gap-20">
        <section>
          <SectionLabel>Recently added</SectionLabel>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">Fresh off the drive</h2>

          {recentResources.length > 0 ? (
            <div className="mt-6 divide-y divide-edge border-y border-edge">
              {recentResources.map((resource) => {
                const subject = getSubjectById(resource.subjectId)
                const category = subject ? getCategoryById(subject, resource.categoryId) : undefined
                return (
                  <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className={rowLinkClass}>
                    <div className="flex min-w-0 items-center gap-3">
                      <ResourceTypeIcon type={resource.type} className="h-4 w-4 shrink-0 text-ink-faint" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-ink">{resource.title}</p>
                        <p className="mt-0.5 truncate text-xs text-ink-muted">
                          {subject?.name} · {category?.name} · {formatDate(resource.date)}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
            </div>
          ) : (
            <div className="mt-6">
              <EmptyState title="Nothing added yet." subtitle="Check back soon." />
            </div>
          )}
        </section>

        <section>
          <SectionLabel>Important</SectionLabel>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">Don't miss these</h2>

          {importantItems.length > 0 ? (
            <div className="mt-6 divide-y divide-edge border-y border-edge">
              {importantItems.map((item) => (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className={rowLinkClass}>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{item.title}</p>
                    {item.meta && <p className="mt-0.5 truncate text-xs text-ink-muted">{item.meta}</p>}
                  </div>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <EmptyState title="Nothing pinned yet." subtitle="Check back soon." />
            </div>
          )}
        </section>
      </div>

      <div className="h-28 sm:h-36" aria-hidden="true" />
    </div>
  )
}
