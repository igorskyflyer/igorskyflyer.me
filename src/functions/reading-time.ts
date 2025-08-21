import { toString } from 'mdast-util-to-string'
import getReadingTime, { ReadTimeResults } from 'reading-time'

export function readingTime() {
  return function (tree: unknown, { data }: any) {
    const textOnPage: string = toString(tree)
    const readingTime: ReadTimeResults = getReadingTime(textOnPage)
    data.astro.frontmatter.minutesRead = readingTime.text
  }
}
