// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    '~/plugins/fontawesome'
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
