<template>
<div>
        <h1 class="text-center mt-5">Welcome to the Official Home of PieCraft.</h1>
  
        <div class="d-flex flex-column align-items-center mt-5">
          <Article
            v-for="article in articles" 
            :key="article.title"
            :title="article.title"
            :publishedAt="new Date(article.publishedAt)"
            :imgUrl="article.imgUrl"
            :body="article.body"
          />

        </div>

      </div>
      
  </template>
  
  <script setup>
  // Import the Article component
  import Article from '~/components/Article.vue'
  
  const articles = [
      {
          title: "Article 1",
          publishedAt: '2025-03-09',
          imgUrl: '/images/mcraft2.jpeg',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
          title: "Article 2",
          publishedAt: '2025-03-09',
          imgUrl: '/images/mcraft2.jpeg',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
  ]
  </script>
  
  <style scoped>
  .max-height-100vh{
      max-height: 100vh;
  }
  </style>