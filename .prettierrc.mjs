/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  singleQuote: true,
  semi: false,
  bracketSameLine: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
