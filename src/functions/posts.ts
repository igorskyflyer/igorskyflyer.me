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
