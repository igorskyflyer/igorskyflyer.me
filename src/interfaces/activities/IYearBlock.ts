// Author: Igor Dimitrijević (@igorskyflyer)

import { ITimelineEntry } from '@interfaces/activities/ITimelineEntry.ts'

export interface IYearBlock {
  year: string
  entries: ITimelineEntry[]
}
