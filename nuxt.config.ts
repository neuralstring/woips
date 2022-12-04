// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxt/content'
    ],
    css: [
        '@/assets/style/bulma-loader.scss',
        '@/assets/style/app.scss',
    ]
})
