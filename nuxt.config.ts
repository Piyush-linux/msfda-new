// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	 app: {
        head: {
        	script: [{
                src: 'https://code.iconify.design/3/3.0.0/iconify.min.js'
            }]
        }
    },
modules: ['@nuxtjs/tailwindcss']
})
