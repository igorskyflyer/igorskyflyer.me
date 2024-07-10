import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    draft: z.boolean().default(false)
  })
})

export const collections = {
  blog: blogCollection
}
