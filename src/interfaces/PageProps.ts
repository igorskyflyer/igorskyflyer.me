import { CollectionEntry } from 'astro:content'

export interface PageProps {
  title: string
  description: string
  featuredImage: string
  keywords: string
  isHome: boolean
  post?: CollectionEntry<'blog'>['data']
}
