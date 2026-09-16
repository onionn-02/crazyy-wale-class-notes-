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
