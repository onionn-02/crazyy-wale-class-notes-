import type { Resource } from '../types'

// Add a new resource by appending an entry here. `url` should be a Google
// Drive "Anyone with the link → Viewer" share link (or any public link).
//
// {
//   title: "Unit 3 Notes",
//   subjectId: "mathematics",
//   categoryId: "notes", // notes | pyq | important (+ tutorials for MFC)
//   date: "2026-09-16",
//   url: "GOOGLE_DRIVE_LINK",
//   type: "pdf",
// }
export const resources: Resource[] = [
  // MFC (subjectId stays 'mathematics')
  {
    id: 'mfc-unit-1-notes',
    title: 'MFC Unit 1 Notes',
    subjectId: 'mathematics',
    categoryId: 'notes',
    date: '2026-09-16',
    url: '/pdfs/mfc/unit-1-notes.pdf',
    type: 'pdf',
  },
  {
    id: 'mfc-unit-1-notes-2',
    title: 'MFC Unit 1 Notes (Set 2)',
    subjectId: 'mathematics',
    categoryId: 'notes',
    date: '2026-09-16',
    url: '/pdfs/mfc/unit-1-notes-2.pdf',
    type: 'pdf',
  },
  {
    id: 'math-notes-2',
    title: 'MFC Unit 2 Notes',
    subjectId: 'mathematics',
    categoryId: 'notes',
    date: '2026-09-14',
    url: 'https://drive.google.com/drive/folders/1MathNotesUnit2',
    type: 'drive',
  },
  {
    id: 'math-pyq-2025',
    title: 'PYQ 2025',
    subjectId: 'mathematics',
    categoryId: 'pyq',
    date: '2026-09-08',
    url: 'https://drive.google.com/file/d/1MathPYQ2025/view',
    type: 'pdf',
  },
  {
    id: 'math-important-1',
    title: 'Important Questions — Unit 1 & 2',
    subjectId: 'mathematics',
    categoryId: 'important',
    date: '2026-09-11',
    url: 'https://drive.google.com/file/d/1MathImportantQ/view',
    type: 'pdf',
    important: true,
  },

  // English
  {
    id: 'eng-notes-1',
    title: 'English Grammar Notes',
    subjectId: 'english',
    categoryId: 'notes',
    date: '2026-09-09',
    url: 'https://drive.google.com/drive/folders/1EnglishNotes',
    type: 'drive',
  },

  // EEE
  {
    id: 'eee-notes-1',
    title: 'EEE Unit 2 Notes',
    subjectId: 'eee',
    categoryId: 'notes',
    date: '2026-09-15',
    url: 'https://drive.google.com/drive/folders/1EEENotesUnit2',
    type: 'drive',
  },
  {
    id: 'eee-pyq-2025',
    title: 'PYQ 2025',
    subjectId: 'eee',
    categoryId: 'pyq',
    date: '2026-09-03',
    url: 'https://drive.google.com/file/d/1EEEPYQ2025/view',
    type: 'pdf',
  },

  // MCD
  {
    id: 'mcd-unit-2-engineering-materials',
    title: 'Unit 2 Engineering Materials',
    subjectId: 'mcd',
    categoryId: 'notes',
    date: '2026-09-16',
    url: '/pdfs/mcd/unit-2-engineering-materials.pdf',
    type: 'pdf',
  },

  // CT
  {
    id: 'cte-notes-1',
    title: 'CT Unit 1 Notes',
    subjectId: 'cte',
    categoryId: 'notes',
    date: '2026-09-02',
    url: 'https://drive.google.com/drive/folders/1CTENotes',
    type: 'drive',
  },

  // PL
  {
    id: 'pl-notes-1',
    title: 'PL Syntax & Semantics Notes',
    subjectId: 'pl',
    categoryId: 'notes',
    date: '2026-09-16',
    url: 'https://drive.google.com/drive/folders/1PLNotes',
    type: 'drive',
  },
]

export function getResourcesBySubject(subjectId: string): Resource[] {
  return resources.filter((resource) => resource.subjectId === subjectId)
}

export function getResourcesByCategory(
  subjectId: string,
  categoryId: string,
): Resource[] {
  return resources.filter(
    (resource) => resource.subjectId === subjectId && resource.categoryId === categoryId,
  )
}

export function getRecentResources(limit = 5): Resource[] {
  return [...resources]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getImportantResources(): Resource[] {
  return resources.filter((resource) => resource.important)
}
