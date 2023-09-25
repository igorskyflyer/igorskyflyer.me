import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.string(),
    tags: z.string(),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  blog: blogCollection,
}
