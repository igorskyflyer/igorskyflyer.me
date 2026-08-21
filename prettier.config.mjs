import config from '@igorskyflyer/prettier-config'

/** @type {import('prettier').Config} */
export default {
  ...config,

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
