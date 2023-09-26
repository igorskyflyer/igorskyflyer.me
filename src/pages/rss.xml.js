import rss from '@astrojs/rss'
import { getCollection, CollectionEntry } from 'astro:content'

export async function GET(context) {
  const blog = (await getCollection('blog'))
    .filter((post) => {
      if (!post.data.draft) {
        return post
      }
    })
    .sort(
      (a, b) => Date.parse(b.data.publishDate) - Date.parse(a.data.publishDate)
    )

  return rss({
    title: 'Igor Dimitrijević',
    description: '⚡ The place where I like to express myself. 🦑',
    site: context.site,
    stylesheet: '/rss-styles.xsl',
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    items: blog.map((post) => {
      return {
        title: post.data.title,
        link: `/blog/${post.slug}/`,
        pubDate: post.data.publishDate,
        description: post.data.description,
        customData: `<language>en-us</language><author>Igor Dimitrijević (igorskyflyer)</author>`,
      }
    }),
  })
}
