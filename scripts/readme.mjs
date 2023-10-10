import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const readmeUrl =
  'https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/README.md'
const response = await fetch(readmeUrl)
const markdown = await response.text()

const outFile = fileURLToPath(
  new URL('../src/assets/remote/igorskyflyer.md', import.meta.url)
)
await writeFile(outFile, markdown)
