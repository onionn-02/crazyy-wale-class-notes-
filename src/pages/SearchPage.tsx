import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import ResourceCard from '../components/ResourceCard'
import EmptyState from '../components/EmptyState'
import { searchResources } from '../utils/search'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  const results = useMemo(() => searchResources(query), [query])

  function handleChange(value: string) {
    setQuery(value)
    if (value.trim()) {
      setSearchParams({ q: value.trim() }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">Search</h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">Find notes, tutorials, PYQs and more across every subject.</p>

      <div className="mt-6">
        <SearchBar value={query} onChange={handleChange} autoFocus />
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {query.trim() === '' ? (
          <EmptyState title="Start typing to search." subtitle="Try “Tutorial 1”, “Notes” or a subject name." />
        ) : results.length > 0 ? (
          results.map(({ resource, subjectName, categoryName }) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              subjectName={subjectName}
              categoryName={categoryName}
            />
          ))
        ) : (
          <EmptyState title={`No results for "${query}"`} subtitle="Try a different search term." />
        )}
      </div>
    </div>
  )
}
