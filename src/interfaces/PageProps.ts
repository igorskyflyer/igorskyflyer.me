// Author: Igor Dimitrijević (@igorskyflyer)

import { CollectionEntry } from 'astro:content'

export interface PageProps {
  title: string
  description: string
  featuredImage: string
  keywords: string
  pageTitle: string
  pageTagline: string
  post?: CollectionEntry<'blog'>['data']
}
