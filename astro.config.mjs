import { defineConfig } from 'astro/config'
import { readingTime } from './src/functions/reading-time'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://igorskyflyer.github.io',
  vite: {
    ssr: {
      noExternal: ['astro', '@igor.dvlpr/astro-post-excerpt'],
    },
  },
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [readingTime],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
  integrations: [compress()],
})
