import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import ResourceCard from '../components/ResourceCard'
import SubjectCard from '../components/SubjectCard'
import SectionLabel from '../components/SectionLabel'
import EmptyState from '../components/EmptyState'
import { searchResources, searchSubjects } from '../utils/search'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  const results = useMemo(() => searchResources(query), [query])
  const subjectResults = useMemo(() => searchSubjects(query), [query])

  function handleChange(value: string) {
    setQuery(value)
    if (value.trim()) {
      setSearchParams({ q: value.trim() }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }

  const hasResults = results.length > 0 || subjectResults.length > 0

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionLabel>Topper Tapri</SectionLabel>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Search</h1>
      <p className="mt-4 max-w-md text-ink-muted">Find subjects, notes, PYQs and more.</p>

      <div className="mt-10">
        <SearchBar value={query} onChange={handleChange} autoFocus />
      </div>

      <div className="mt-14">
        {query.trim() === '' ? (
          <EmptyState title="Start typing to search." subtitle="Try a subject name like “MFC”, or “Notes”." />
        ) : hasResults ? (
          <div className="flex flex-col gap-14">
            {subjectResults.length > 0 && (
              <section>
                <SectionLabel>Subjects</SectionLabel>
                <div className="mt-5 divide-y divide-edge border-y border-edge">
                  {subjectResults.map((subject, index) => (
                    <SubjectCard key={subject.id} subject={subject} index={index} />
                  ))}
                </div>
              </section>
            )}
            {results.length > 0 && (
              <section>
                <SectionLabel>Resources</SectionLabel>
                <div className="mt-5 divide-y divide-edge border-y border-edge">
                  {results.map(({ resource, subjectName, categoryName }, index) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      subjectName={subjectName}
                      categoryName={categoryName}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <EmptyState title={`No results for "${query}"`} subtitle="Try a different search term." />
        )}
      </div>
    </div>
  )
}
