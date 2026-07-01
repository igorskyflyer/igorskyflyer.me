// src/content.config.ts   (must be in src/ root, not inside content/)
import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({
    // pattern: '**/*.{md,mdx}',          ← simpler & usually enough
    pattern: '**/*.{md,mdx}', // or keep your exclude-underscore if needed
    base: './src/data/blog' // relative to project root
  }),
  schema: z.object({
    title: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.coerce.date(), // ← safer, auto-coerces string → Date
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    excerpt: z.string().optional()
  })
})

export const collections = {
  blog
}
