import type { ResourceCategory, Subject } from '../types'

// Shared category set used by every subject. Add/remove a category here and
// it will apply everywhere — no component changes needed.
const defaultCategories: ResourceCategory[] = [
  { id: 'notes', name: 'Notes', description: 'Lecture notes & PDFs', icon: 'notes' },
  { id: 'tutorial-1', name: 'Tutorial 1', description: 'Tutorial questions', icon: 'tutorial' },
  { id: 'tutorial-2', name: 'Tutorial 2', description: 'Tutorial questions', icon: 'tutorial' },
  { id: 'tutorial-3', name: 'Tutorial 3', description: 'Tutorial questions', icon: 'tutorial' },
  { id: 'pyq', name: 'Previous Year Questions', description: 'Past exam papers', icon: 'pyq' },
  { id: 'important', name: 'Important Questions', description: 'High-priority questions', icon: 'star' },
  { id: 'assignments', name: 'Assignments', description: 'Homework & submissions', icon: 'assignment' },
  { id: 'other', name: 'Other Resources', description: 'Extra material & links', icon: 'other' },
]

// To add a new subject, add an entry here. To change a subject's
// categories, override the `categories` field for that subject.
export const subjects: Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    shortName: 'Maths',
    description: 'Calculus, linear algebra, probability & more.',
    icon: 'sigma',
    categories: defaultCategories,
  },
  {
    id: 'english',
    name: 'English',
    shortName: 'English',
    description: 'Communication skills & technical writing.',
    icon: 'book',
    categories: defaultCategories,
  },
  {
    id: 'eee',
    name: 'EEE',
    shortName: 'EEE',
    description: 'Basic Electrical & Electronics Engineering.',
    icon: 'zap',
    categories: defaultCategories,
  },
  {
    id: 'mcd',
    name: 'MCD',
    shortName: 'MCD',
    description: 'Mechanics & Computer-aided Design.',
    icon: 'ruler',
    categories: defaultCategories,
  },
  {
    id: 'cte',
    name: 'CT',
    shortName: 'CT',
    description: 'Computational Thinking & Computing fundamentals.',
    icon: 'cpu',
    categories: defaultCategories,
  },
  {
    id: 'pl',
    name: 'PL',
    shortName: 'PL',
    description: 'Programming Languages & problem solving.',
    icon: 'code',
    categories: defaultCategories,
  },
]

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((subject) => subject.id === id)
}

export function getCategoryById(
  subject: Subject,
  categoryId: string,
): ResourceCategory | undefined {
  return subject.categories.find((category) => category.id === categoryId)
}
