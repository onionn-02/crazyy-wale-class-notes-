import type { Resource } from '../types'

// Add a new resource by appending an entry here. `url` should be a Google
// Drive "Anyone with the link → Viewer" share link (or any public link).
//
// {
//   title: "Tutorial 4",
//   subjectId: "mathematics",
//   categoryId: "tutorial-1",
//   date: "2026-09-16",
//   url: "GOOGLE_DRIVE_LINK",
//   type: "pdf",
// }
export const resources: Resource[] = [
  // Mathematics
  {
    id: 'math-notes-1',
    title: 'Mathematics Unit 1 Notes',
    subjectId: 'mathematics',
    categoryId: 'notes',
    date: '2026-09-10',
    url: 'https://drive.google.com/drive/folders/1MathNotesUnit1',
    type: 'drive',
  },
  {
    id: 'math-notes-2',
    title: 'Mathematics Unit 2 Notes',
    subjectId: 'mathematics',
    categoryId: 'notes',
    date: '2026-09-14',
    url: 'https://drive.google.com/drive/folders/1MathNotesUnit2',
    type: 'drive',
  },
  {
    id: 'math-tut-1',
    title: 'Tutorial 1 PDF',
    subjectId: 'mathematics',
    categoryId: 'tutorial-1',
    date: '2026-09-16',
    url: 'https://drive.google.com/file/d/1MathTutorial1/view',
    type: 'pdf',
  },
  {
    id: 'math-tut-1-sol',
    title: 'Tutorial 1 Solutions',
    subjectId: 'mathematics',
    categoryId: 'tutorial-1',
    date: '2026-09-16',
    url: 'https://drive.google.com/file/d/1MathTutorial1Solutions/view',
    type: 'pdf',
  },
  {
    id: 'math-tut-2',
    title: 'Tutorial 2 PDF',
    subjectId: 'mathematics',
    categoryId: 'tutorial-2',
    date: '2026-09-15',
    url: 'https://drive.google.com/file/d/1MathTutorial2/view',
    type: 'pdf',
  },
  {
    id: 'math-tut-3',
    title: 'Tutorial 3 PDF',
    subjectId: 'mathematics',
    categoryId: 'tutorial-3',
    date: '2026-09-12',
    url: 'https://drive.google.com/file/d/1MathTutorial3/view',
    type: 'pdf',
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
  {
    id: 'eng-tut-1',
    title: 'Tutorial 1 — Comprehension',
    subjectId: 'english',
    categoryId: 'tutorial-1',
    date: '2026-09-13',
    url: 'https://drive.google.com/file/d/1EnglishTutorial1/view',
    type: 'pdf',
  },
  {
    id: 'eng-video-1',
    title: 'Effective Communication — Video Lecture',
    subjectId: 'english',
    categoryId: 'other',
    date: '2026-09-07',
    url: 'https://youtube.com/watch?v=example-english-comm',
    type: 'video',
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
    id: 'eee-tut-1',
    title: 'Tutorial 1 PDF',
    subjectId: 'eee',
    categoryId: 'tutorial-1',
    date: '2026-09-05',
    url: 'https://drive.google.com/file/d/1EEETutorial1/view',
    type: 'pdf',
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
    id: 'mcd-notes-1',
    title: 'MCD Fundamentals Notes',
    subjectId: 'mcd',
    categoryId: 'notes',
    date: '2026-09-06',
    url: 'https://drive.google.com/drive/folders/1MCDNotes',
    type: 'drive',
  },
  {
    id: 'mcd-assignment-1',
    title: 'Assignment 1 — Sheets',
    subjectId: 'mcd',
    categoryId: 'assignments',
    date: '2026-09-04',
    url: 'https://docs.google.com/spreadsheets/d/1MCDAssignment1',
    type: 'sheet',
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
  {
    id: 'cte-tut-1',
    title: 'Tutorial 1 PDF',
    subjectId: 'cte',
    categoryId: 'tutorial-1',
    date: '2026-09-01',
    url: 'https://drive.google.com/file/d/1CTETutorial1/view',
    type: 'pdf',
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
  {
    id: 'pl-tut-1',
    title: 'Tutorial 1 — Practice Problems',
    subjectId: 'pl',
    categoryId: 'tutorial-1',
    date: '2026-09-13',
    url: 'https://drive.google.com/file/d/1PLTutorial1/view',
    type: 'pdf',
  },
  {
    id: 'pl-website-1',
    title: 'Practice Platform',
    subjectId: 'pl',
    categoryId: 'other',
    date: '2026-08-28',
    url: 'https://example.com/practice',
    type: 'website',
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
