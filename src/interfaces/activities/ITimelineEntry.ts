// Author: Igor Dimitrijević (@igorskyflyer)

import { ActivityCategory } from '@my-types/activities/ActivityCategory.ts'

export interface ITimelineEntry {
  category: ActivityCategory
  date: string
  html: string
}
