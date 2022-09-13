import type { MarkdownInstance } from 'astro'

export function sortPosts(posts: MarkdownInstance<Record<string, any>>[]) {
  return posts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf())
}

export function postDate(date: string) {
 const postDate = new Date(Date.parse(date))
 const days = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'SAT' ]
 const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
 return `${days[postDate.getDay()]} ${postDate.getDate()} ${months[postDate.getMonth()]} ${postDate.getFullYear()}`
}
