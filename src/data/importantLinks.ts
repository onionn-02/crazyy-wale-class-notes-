export interface ImportantLink {
  id: string
  title: string
  url: string
}

// Simple division-wide links shown in the homepage "Important" section.
// Add or remove entries here — no component changes needed.
export const importantLinks: ImportantLink[] = [
  {
    id: 'exam-timetable',
    title: 'Exam Timetable',
    url: 'https://drive.google.com/file/d/1ExamTimetable/view',
  },
  {
    id: 'syllabus',
    title: 'Syllabus',
    url: 'https://drive.google.com/file/d/1Syllabus/view',
  },
  {
    id: 'internal-assessment',
    title: 'Internal Assessment Information',
    url: 'https://drive.google.com/file/d/1InternalAssessment/view',
  },
  {
    id: 'assignment-deadlines',
    title: 'Assignment Deadlines',
    url: 'https://drive.google.com/file/d/1AssignmentDeadlines/view',
  },
]
