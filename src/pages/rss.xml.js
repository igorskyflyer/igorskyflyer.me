import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SiteName } from '@data/Site'

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
    title: SiteName,
    description: '⚡ The place where I like to express myself. 🦑',
    site: context.site,
    stylesheet: '/rss-styles.xsl',
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/dc/elements/1.1/'
    },
    customData: [
      '<language>en-us</language>',
      `<atom:link href="${new URL(
        'rss.xml',
        context.site
      )}" rel="self" type="application/rss+xml" />`
    ].join(''),
    items: blog.map((post) => {
      return {
        title: post.data.title,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
        pubDate: post.data.publishDate,
        description: post.data.description,
        customData: '<dc:creator>Igor Dimitrijević (igorskyflyer)</dc:creator>'
      }
    })
  })
}
