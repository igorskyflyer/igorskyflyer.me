import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import { readingTime } from './src/functions/reading-time'
import Icon from "astro-icon";

export default defineConfig({
  site: 'https://igorskyflyer.me',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  experimental: {
    contentCollectionCache: true
  },
  vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt']
    }
  },
  markdown: {
    remarkPlugins: [readingTime],
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [
		Icon(),
    compress({
      HTML: {
        caseSensitive: true,
        collapseBooleanAttributes: true,
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
        useShortDoctype: true
      },
      CSS: {
        restructure: true
      },
      JavaScript: {
        compress: true,
        format: { comments: false }
      }
    }),
    mdx({ shikiConfig: { theme: 'one-dark-pro', wrap: true } }),
    sitemap()
  ]
})
