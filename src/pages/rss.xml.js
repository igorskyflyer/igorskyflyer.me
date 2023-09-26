import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const blog = (await getCollection('blog')).filter((post) => {
    if (!post.data.draft) {
      return post
    }
  })

  return rss({
    title: 'IgorSkyFlyer.me',
    description: '⚡ The place where I like to express myself. 🦑',
    site: context.site,
    items: blog.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        customData: `<language>en-us</language>`,
        link: `/blog/${post.slug}/`,
      }
    }),
  })
}
