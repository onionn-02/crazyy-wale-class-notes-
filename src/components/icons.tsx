import {
  BookOpen,
  Building2,
  Code2,
  Cpu,
  FileQuestion,
  FileText,
  Folder,
  NotebookPen,
  Play,
  Ruler,
  Sigma,
  Star,
  Zap,
  ExternalLink,
  File,
  type LucideIcon,
} from 'lucide-react'
import type { ResourceFileType } from '../types'

// Maps the string icon keys used in data files to actual Lucide components.
// Keeping data files as plain strings (instead of JSX) keeps data and UI separate.
const subjectIconMap: Record<string, LucideIcon> = {
  sigma: Sigma,
  book: BookOpen,
  zap: Zap,
  ruler: Ruler,
  building: Building2,
  code: Code2,
  cpu: Cpu,
}

const categoryIconMap: Record<string, LucideIcon> = {
  notes: NotebookPen,
  tutorial: FileText,
  pyq: FileQuestion,
  star: Star,
  assignment: FileText,
  other: Folder,
}

const resourceTypeIconMap: Record<ResourceFileType, LucideIcon> = {
  pdf: FileText,
  drive: Folder,
  doc: File,
  sheet: File,
  video: Play,
  website: ExternalLink,
}

export function SubjectIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = subjectIconMap[icon] ?? Folder
  return <Icon className={className} aria-hidden="true" />
}

export function CategoryIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = categoryIconMap[icon] ?? Folder
  return <Icon className={className} aria-hidden="true" />
}

export function ResourceTypeIcon({ type, className }: { type: ResourceFileType; className?: string }) {
  const Icon = resourceTypeIconMap[type] ?? FileText
  return <Icon className={className} aria-hidden="true" />
}
