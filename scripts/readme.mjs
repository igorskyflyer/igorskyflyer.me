import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const readmeUrl = 'https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/README.md'
const response = await fetch(readmeUrl)
const markdown = await response.text()
const frontmatter = `---
title: IgorSkyFlyer | Igor Dimitrijević
layout: ../layouts/author.astro
publishDate: 2022-09-15 00:00
featuredImage: https://igorskyflyer.github.io/assets/igorskyflyer.jpg
---
`
const fileContents = `${frontmatter}
${markdown}`

const outFile = fileURLToPath(new URL('../src/pages/igorskyflyer.md', import.meta.url))
await writeFile(outFile, fileContents)
