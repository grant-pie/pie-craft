<template>
<div>
        <h1 class="text-center mt-5">Welcome to the Official Home of PieCraft.</h1>

        <div class="d-flex flex-column align-items-center mt-4">

          <div class="d-flex w-75 justify-content-between">

            <NuxtLink
            :to="'/events'"
            class="card col-6 text-decoration-none"
            >
              <button class="">

                <div class="card-body d-flex justify-content-center">

                  <FontAwesomeIcon icon="calendar-days" class="fs-5 me-3"/> 

                  <p class="mb-0">Click me to see upcoming events.</p>

                </div>

                </button>
            </NuxtLink>

            <NuxtLink
            class="card col-6 text-decoration-none bg-white"
            :to="'/jobs'"
            >
              <button>

                <div class="card-body d-flex justify-content-center">

                  <FontAwesomeIcon icon="hammer" class="fs-5 me-3"/> 

                  <p class="mb-0">Click me if you need something to do.</p>

                </div>

              </button>
            </NuxtLink>


            

          </div>

          <div class="d-flex w-75 mt-1 justify-content-between">

            <NuxtLink
            class="card col-6 text-decoration-none bg-white"
            :to="'/quests'">
              
              <button>

                <div class="card-body d-flex justify-content-center">

                  <FontAwesomeIcon icon="book" class="fs-5 me-3"/> 

                  <p class="mb-0">Click me if you need excitement.</p>

                </div>

              </button>
            </NuxtLink>

            <NuxtLink
            class="card col-6 text-decoration-none bg-white"
            :to="'/'"
            >
              <button>

                <div class="card-body d-flex justify-content-center">

                  <FontAwesomeIcon icon="gem" class="fs-5 me-3"/> 

                  <p class="mb-0">Click me you want to spend some emeralds.</p>

                </div>

              </button>

            </NuxtLink>
          </div>
        </div>

     

        <div class="d-flex flex-column align-items-center mt-2">
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