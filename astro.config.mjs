import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import { readingTime } from './src/functions/reading-time'

export default defineConfig({
  site: 'https://igorskyflyer.github.io',
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'css/style.[hash][extname]',
        },
      },
    },
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
