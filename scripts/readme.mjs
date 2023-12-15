import { existsSync, mkdirSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

if (!existsSync('_remote')) {
	mkdirSync('_remote')
}

const readmeUrl =
	'https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/README.md'
const response = await fetch(readmeUrl)
const markdown = await response.text()

const outFile = fileURLToPath(
	new URL('../_remote/igorskyflyer.md', import.meta.url)
)
await writeFile(outFile, markdown)
