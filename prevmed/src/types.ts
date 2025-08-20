export type Category =
  | 'Diseases'
  | 'Dementia'
  | 'Schizophrenia'
  | 'Kidney Stones'
  | 'Asthma'
  | 'Cardiovascular'
  | 'Diabetes'
  | 'Sleep'

export interface ArticleSection { h: string; p: string }

export interface Article {
  slug: string
  title: string
  category: Exclude<Category, 'Diseases'>
  excerpt: string
  publishedAt: string // ISO date
  readingMinutes: number
  hero?: string
  sections: ArticleSection[]
}