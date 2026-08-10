import rss from '@astrojs/rss'
import { SiteName } from '@data/Site.ts'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  const siteUrl = context.site ?? new URL('https://igorskyflyer.me')

  const posts = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime()
    )

  return rss({
    title: `Software Engineering & Developer Experience Blog | ${SiteName}`,
    description:
      'Technical insights on TypeScript, AST compilers, custom DSLs, open-source tooling, and modern full-stack development by Igor Dimitrijević (igorskyflyer).',
    site: siteUrl,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      dc: 'http://purl.org/dc/elements/1.1/'
    },
    customData: [
      '<language>en-us</language>',
      `<atom:link href="${new URL('rss.xml', siteUrl)}" rel="self" type="application/rss+xml" />`
    ].join(''),
    items: posts.map((post) => ({
      title: post.data.title,
      link: new URL(`/blog/${post.id}/`, siteUrl).href,
      categories: post.data.tags ?? [],
      pubDate: new Date(post.data.publishDate),
      // description: post.data.description,
      customData: [
       '<dc:creator>Igor Dimitrijević (igorskyflyer)</dc:creator>',
       '<atom:author><atom:name>Igor Dimitrijević (igorskyflyer)</atom:name><atom:uri>https://igorskyflyer.me/igorskyflyer</atom:uri></atom:author>',
       post.data.featuredImage ? `<enclosure url="${new URL(post.data.featuredImage, siteUrl)}" type="image/png" length="0" />` : ''
      ].join('')
    }))
  })
}
