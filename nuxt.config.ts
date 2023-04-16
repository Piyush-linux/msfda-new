// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [{
                src: 'https://code.iconify.design/3/3.0.0/iconify.min.js'
            }]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/strapi',
        // '@nuxt/devtools'
        ],
      strapi: {
  url: process.env.STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
  version: 'v4',
  cookie: {},
  cookieName: 'msfda'
}
,
      runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: ''
    }
  }
})