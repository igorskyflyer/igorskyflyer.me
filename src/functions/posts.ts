import type { MarkdownInstance } from 'astro'
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
    'Dec',
  ]

  return `${
    months[postDate.getMonth()]
  } ${postDate.getDate()}, ${postDate.getFullYear()}`
}
