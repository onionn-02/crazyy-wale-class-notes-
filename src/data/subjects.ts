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
    driveFolderUrl: 'https://drive.google.com/drive/folders/1qM51htdHjKnU9WUsptXkDkVI5frhnxXp',
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
    description: 'MCD',
    icon: 'ruler',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1YuyAu8AR0HabHrhrdL5JrJ2jAF5KwOne',
    categories: [
      ...defaultCategories,
      { id: 'flashcards', name: 'Flash Cards', description: 'Formula sheets & quick-reference cheats', icon: 'flashcards' },
    ],
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
  {
    id: 'academic-info',
    name: 'Academic Info',
    shortName: 'Academic',
    description: 'Calendar, holidays & official notices.',
    icon: 'building',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1WN_iLoTPlz9BtQ_7A1FFhhNh8IvWKz2I',
    categories: [
      { id: 'calendar', name: 'Academic Calendar', description: 'Semester & yearly calendar', icon: 'calendar' },
      { id: 'holidays', name: 'Holidays', description: 'Holiday list', icon: 'holiday' },
      { id: 'circulars', name: 'Circulars / Notices', description: 'Official notices & circulars', icon: 'megaphone' },
    ],
  },
  {
    id: 'cew',
    name: 'CEW',
    shortName: 'CEW',
    description: 'CEW',
    icon: 'wrench',
    driveFolderUrl: 'https://drive.google.com/drive/folders/1dHg_-n4UAzcbe8_7PZ6vm_vuhfQFkRqg',
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
