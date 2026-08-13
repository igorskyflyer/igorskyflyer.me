// Author: Igor Dimitrijević (@igorskyflyer)

import { ActivityCategory } from '@my-types/activities/ActivityCategory.ts'

export const CategoryBadge: Record<
  ActivityCategory,
  { label: string; class: string }
> = {
  certification: { label: 'Certification', class: 'badge-certification' },
  contribution: { label: 'Contribution', class: 'badge-contribution' },
  identity: { label: 'Identity', class: 'badge-identity' },
  milestone: { label: 'Milestone', class: 'badge-milestone' },
  package: { label: 'Package', class: 'badge-package' },
  publication: { label: 'Publication', class: 'badge-publication' },
  release: { label: 'Release', class: 'badge-release' },
  repository: { label: 'Repository', class: 'badge-repository' },
  education: { label: 'Education', class: 'badge-education' },
  award: { label: 'Award', class: 'badge-award' }
} as const
