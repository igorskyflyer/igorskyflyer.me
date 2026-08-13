// Author: Igor Dimitrijević (@igorskyflyer)

import { IYearBlock } from '@interfaces/activities/IYearBlock.ts'

export interface IDecadeBlock {
  decade: string
  icon: string
  open?: boolean
  years: IYearBlock[]
}
