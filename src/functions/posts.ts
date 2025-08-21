import { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>

export function sortPosts(posts: BlogPost[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
  )
}

export function postDate(date: string) {
  const postDate = new Date(Date.parse(date))
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  let hours: number | string = postDate.getHours()
  let minutes: number | string = postDate.getMinutes()

  if (hours < 10) {
    hours = `0${hours}`
  }

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return `${
    months[postDate.getMonth()]
  } ${postDate.getDate()}, ${postDate.getFullYear()}, ${hours}:${minutes}`
}

export function getLocalIsoTimestamp(date?: Date) {
  if (typeof date === 'undefined') {
    date = new Date()
  }

  const offsetMinutes = date.getTimezoneOffset()
  const sign = offsetMinutes <= 0 ? '+' : '-'
  const abs = Math.abs(offsetMinutes)
  const hh = String(Math.floor(abs / 60)).padStart(2, '0')
  const mm = String(abs % 60).padStart(2, '0')

  const localTime = new Date(date.getTime() - offsetMinutes * 60 * 1000)
    .toISOString()
    .slice(0, 19) // "YYYY-MM-DDTHH:mm:ss"

  return `${localTime}${sign}${hh}:${mm}`
}
