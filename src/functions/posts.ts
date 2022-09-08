export function sortPosts(posts: any) {
  // @ts-ignore
  return posts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf())
}
