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

export function filterPosts(
  posts: BlogPost[],
  filter: object = {}
): BlogPost[] {
  if (posts.length === 0) {
    throw new Error('No posts to filter.')
  }

  const postsCount = posts.length
  const filterNames = Object.keys(filter)
  const filtersCount = filterNames.length
  const hasFilters = filtersCount > 0

  if (!hasFilters) {
    return posts
  }

  const filtered = []

  for (let i = 0; i < postsCount; i++) {
    const post = posts[i]
    let skip = false

    for (let j = 0; j < filtersCount; j++) {
      const filterName = filterNames[j]
      const filterValue = filter[filterName]

      if (!filterValue) {
        continue
      }

      const postValue = post.frontmatter[filterName]

      if (postValue) {
        const tags = postValue.split(',')

        if (!tags.includes(filterValue)) {
          skip = true
          break
        }
      } else {
        skip = true
      }
    }

    if (!skip) {
      filtered.push(post)
    }
  }

  return filtered
}
