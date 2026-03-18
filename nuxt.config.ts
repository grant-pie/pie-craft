// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target static deployment
  ssr: true,

  app: {
    baseURL: '/pie-craft/',
    buildAssetsDir: '/assets/'
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/pie-craft/']
    }
  },
  
  plugins: [
    '~/plugins/fontawesome',
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' }
    
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  pages: true,
})
