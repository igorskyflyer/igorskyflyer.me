import { CollectionEntry } from 'astro:content'

export interface PageProps {
  title: string
  description: string
  featuredImage: string
  keywords: string
  post?: CollectionEntry<'blog'>['data']
}
