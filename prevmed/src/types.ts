export type Category =
  | 'Diseases'
  | 'Mental & Neurological Disorders'
  | 'Digestive & Gastrointestinal Disorders'
  | 'Renal Diseases'
  | 'Metabolic & Lifestyle Disorders'
  | 'Vision'
  | 'Dental & Oral Health'
  | 'General'
  | 'Respiratory Disorders'

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