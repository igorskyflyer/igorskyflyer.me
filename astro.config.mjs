import { defineConfig } from 'astro/config'
import { readingTime } from './src/functions/reading-time'

// https://astro.build/config
export default defineConfig({
  site: 'https://igorskyflyer.github.io',
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [readingTime],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      langs: [],
      wrap: true,
    },
  },
})
