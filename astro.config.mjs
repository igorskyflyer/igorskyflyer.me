import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import { readingTime } from './src/functions/reading-time'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
export default defineConfig({
  site: 'https://igorskyflyer.me',
  vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt']
    }
  },
  markdown: {
    remarkPlugins: [readingTime],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  },
  integrations: [
    compress({
      HTML: {
        caseSensitive: true,
        collapseInlineTagWhitespace: false,
        collapseWhitespace: true,
        html5: true,
        keepClosingSlash: false,
        minifyCSS: true,
        minifyJS: true,
        noNewlinesBeforeTagClose: true,
        removeAttributeQuotes: false,
        removeComments: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: false,
        sortAttributes: false,
        sortClassName: true,
        useShortDoctype: false
      },
      CSS: {
        restructure: true
      }
    }),
    mdx(),
    sitemap()
  ]
})
