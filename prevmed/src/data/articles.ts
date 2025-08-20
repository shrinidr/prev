import type { Article, Category } from '../types'

export const CATEGORIES: Category[] = [
  'Diseases',
  'Dementia',
  'Schizophrenia',
  'Asthma',
  'Kidney Stones',
  'Cardiovascular',
  'Diabetes',
  'Sleep',
]

export const ARTICLES: Article[] = [
  {
    slug: 'dementia-early-signs-checklist',
    title: 'Dementia: Early Signs You Shouldnt Ignore',
    category: 'Dementia',
    excerpt: 'Know the subtle cognitive and behavioral changes that often precede a diagnosis—and what to do early.',
    publishedAt: '2025-08-12',
    readingMinutes: 6,
    hero: 'dementia.jpg',
    sections: [
      { h: 'Why prevention matters', p: 'Cognitive reserve can be built with sleep, exercise, and social engagement. Early changes can be addressed.' },
      { h: 'Early signs', p: 'Navigation issues, word-finding difficulty, new apathy. Track patterns over weeks, not hours.' },
      { h: 'Do now', p: '30 min brisk walking most days, Mediterranean-style diet, hearing correction, blood pressure control.' },
    ],
  },
  {
    slug: 'schizophrenia-relapse-prevention',
    title: 'Schizophrenia: Relapse Prevention 101',
    category: 'Schizophrenia',
    excerpt: 'Relapses are predictable. Build routines and prodrome checklists that actually get used.',
    publishedAt: '2025-08-10',
    readingMinutes: 7,
    hero: 'schizophrenia_stock_photo.png',
    sections: [
      { h: 'Know the prodrome', p: 'Sleep reversal, social withdrawal, and new suspiciousness often precede relapse.' },
      { h: 'Protective habits', p: 'Fixed sleep/wake window, medication adherence, and trigger logs reduce risk.' },
    ],
  },
  {
    slug: 'asthma-trigger-minimization',
    title: 'Asthma: Cut Your Triggers, Cut Your Flares',
    category: 'Asthma',
    excerpt: 'Peak-flow tracking and environment control do more than heroic rescue inhaler use.',
    publishedAt: '2025-08-05',
    readingMinutes: 5,
    hero: 'pexels-cottonbro-6202735.jpg',
    sections: [
      { h: 'Home controls', p: 'Dust-mite covers, HEPA filtration, no smoking, humidity control 40–50%.' },
      { h: 'Daily monitoring', p: 'Peak flow in the morning; action plan thresholds prevent ER visits.' },
    ],
  },
  {
    slug: 'kidney-stones-hydration-playbook',
    title: 'Kidney Stones: Hydration Playbook',
    category: 'Kidney Stones',
    excerpt: 'Most stones are preventable. Urine dilution and citrate are your friends.',
    publishedAt: '2025-08-03',
    readingMinutes: 4,
    hero: '2146547.jpg',
    sections: [
      { h: 'Targets', p: 'Aim for urine output ≥2.5L/day. Lemon/lime for citrate. Moderate sodium; don’t crash calcium.' },
    ],
  },
]