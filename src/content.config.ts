// Author: Igor Dimitrijević (@igorskyflyer)

import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/data/blog'
  }),
  schema: z.object({
    title: z.string().max(50).default(''),
    featuredImage: z.string().optional(),
    publishDate: z.coerce.date().default(new Date()),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    excerpt: z.string().optional().default(''),
    description: z.string().max(150).default(''),
    keywords: z.string().max(120).default(''),
    minutesRead: z.string().optional().default('')
  })
})

export const collections = {
  blog
}
