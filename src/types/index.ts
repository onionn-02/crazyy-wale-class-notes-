export type ResourceFileType =
  | 'pdf'
  | 'drive'
  | 'doc'
  | 'sheet'
  | 'video'
  | 'website'

export interface ResourceCategory {
  id: string
  name: string
  description: string
  icon: string
}

export interface Subject {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  categories: ResourceCategory[]
  // Public Google Drive folder ("Anyone with the link → Viewer").
  // When set, the subject card opens this folder instead of the subject page.
  driveFolderUrl?: string
}

export interface Resource {
  id: string
  title: string
  subjectId: string
  categoryId: string
  date: string
  url: string
  type: ResourceFileType
  important?: boolean
}
