import type { MarkdownInstance } from 'astro'

export function sortPosts(posts: MarkdownInstance<Record<string, any>>[]) {
  return posts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf())
}

export function postDate(date: string) {
 const postDate = Date.parse(date)
 const days = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'SAT' ]
 return `${days[postDate.getDay()]} ${date}`
}
