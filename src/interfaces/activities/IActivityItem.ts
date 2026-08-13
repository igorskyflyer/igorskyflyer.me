// Author: Igor Dimitrijević (@igorskyflyer)

import { type IActivityDetail } from '@interfaces/activities/IActivityDetail.ts'
import { type ActivityCategory } from '@my-types/activities/ActivityCategory.ts'

export interface IActivityItem {
  category: ActivityCategory
  title: string
  date: string
  titleLink?: string
  details?: IActivityDetail[]
}
