import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/data/blog'
  }),
  schema: z.object({
    title: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    excerpt: z.string().optional()
  })
})

export const collections = {
  blog
}
