import { defineConfig } from 'astro/config'
import { readingTime } from './src/js/reading-time.mjs'
readingTime

// https://astro.build/config
export default defineConfig({
  site: 'https://igorskyflyer.github.io',
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [readingTime],
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: [],
      wrap: true,
    },
  },
})
