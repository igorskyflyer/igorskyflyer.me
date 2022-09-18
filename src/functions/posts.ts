import type { MarkdownInstance } from 'astro'

type BlogPost = MarkdownInstance<Record<string, any>>

export function sortPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf())
}

export function postDate(date: string) {
  const postDate = new Date(Date.parse(date))
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let hours = postDate.getHours()
  let minutes = postDate.getMinutes()

  if (hours < 10) {
    //@ts-ignore
    hours = `0${hours}`
  }
  if (minutes < 10) {
    //@ts-ignore
    minutes = `0${minutes}`
  }

  return `${days[postDate.getDay()]}, ${postDate.getDate()} ${
    months[postDate.getMonth()]
  } ${postDate.getFullYear()} @ ${hours}:${minutes}h`
}

export function filterPosts(posts: BlogPost[], filter: object = {}): BlogPost[] {
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
