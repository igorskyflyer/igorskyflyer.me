// Author: Igor Dimitrijević (@igorskyflyer)

export interface IActivityDetail {
  text: string
  link?: string
  postText?: string
  links?: Array<{ text: string; url: string }>
}
