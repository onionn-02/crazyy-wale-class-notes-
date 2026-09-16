import { resources } from '../data/resources'
import { getSubjectById, getCategoryById, subjects } from '../data/subjects'
import type { Resource, Subject } from '../types'

// Matches subjects by name or description, e.g. "mcd" or "english".
export function searchSubjects(query: string): Subject[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []

  return subjects.filter((subject) => {
    const haystack = `${subject.name} ${subject.shortName} ${subject.description}`.toLowerCase()
    return terms.every((term) => haystack.includes(term))
  })
}

export interface SearchResult {
  resource: Resource
  subjectName: string
  categoryName: string
}

export function searchResources(query: string): SearchResult[] {
  const trimmed = query.trim().toLowerCase()
  if (!trimmed) return []

  const terms = trimmed.split(/\s+/)

  const enriched = resources
    .map((resource) => {
      const subject = getSubjectById(resource.subjectId)
      const category = subject ? getCategoryById(subject, resource.categoryId) : undefined
      return {
        resource,
        subjectName: subject?.name ?? 'Unknown Subject',
        categoryName: category?.name ?? 'Unknown Category',
      }
    })
    .filter(({ resource, subjectName, categoryName }) => {
      const haystack = `${resource.title} ${subjectName} ${categoryName}`.toLowerCase()
      return terms.every((term) => haystack.includes(term))
    })

  return enriched.sort(
    (a, b) => new Date(b.resource.date).getTime() - new Date(a.resource.date).getTime(),
  )
}
