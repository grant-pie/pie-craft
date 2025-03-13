// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target static deployment
  ssr: true,

  // Set the base URL to match your GitHub repository name
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    // Optionally, you can also set the buildAssetsDir for GitHub Pages
    buildAssetsDir: '/assets/'
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
