import type { ResourceCategory, Subject } from '../types'

// Shared category set used by every subject. Add/remove a category here and
// it will apply everywhere — no component changes needed.
const defaultCategories: ResourceCategory[] = [
  { id: 'notes', name: 'Notes', description: 'All unit notes', icon: 'notes' },
  { id: 'pyq', name: 'Previous Year Questions', description: 'Past exam papers', icon: 'pyq' },
  { id: 'important', name: 'Important Questions', description: 'High-priority questions', icon: 'star' },
]

// To add a new subject, add an entry here. To change a subject's
// categories, override the `categories` field for that subject.
//
// driveFolderUrl: paste the subject's Google Drive folder link here
// (shared as "Anyone with the link → Viewer"). When filled in, the subject
// card opens that folder. Leave it empty to use the built-in subject page.
export const subjects: Subject[] = [
  {
    id: 'mathematics',
    name: 'MFC',
    shortName: 'MFC',
    description: 'Calculus, linear algebra, probability & more.',
    icon: 'sigma',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1PT8F7g-z9sH_WFtJIBWmpeDHSLcAxLkO',
    categories: [
      ...defaultCategories,
      { id: 'tutorials', name: 'Tutorials', description: 'Tutorial questions & solutions', icon: 'tutorial' },
    ],
  },
  {
    id: 'english',
    name: 'English',
    shortName: 'English',
    description: 'Communication skills & technical writing.',
    icon: 'book',
    driveFolderUrl: '',
    categories: defaultCategories,
  },
  {
    id: 'eee',
    name: 'EEE',
    shortName: 'EEE',
    description: 'Basic Electrical & Electronics Engineering.',
    icon: 'zap',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1BrPepIfkJ_qT3DiVmwhcIqIxMU9Mtniu',
    categories: defaultCategories,
  },
  {
    id: 'mcd',
    name: 'MCD',
    shortName: 'MCD',
    description: 'Mechanics & Computer-aided Design.',
    icon: 'ruler',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1YuyAu8AR0HabHrhrdL5JrJ2jAF5KwOne',
    categories: defaultCategories,
  },
  {
    id: 'cte',
    name: 'CT',
    shortName: 'CT',
    description: 'Computational Thinking & Computing fundamentals.',
    icon: 'cpu',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1Ahv93hu3P-i9A3zdiAWfUUR3tufY72od',
    categories: defaultCategories,
  },
  {
    id: 'pl',
    name: 'PL',
    shortName: 'PL',
    description: 'Programming Languages & problem solving.',
    icon: 'code',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1YRzhvS7LZ3ddcnQd2gptURKf1__zQMtk',
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
