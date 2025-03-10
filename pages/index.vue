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
          title: "PieCraft.net launched!",
          publishedAt: '2025-03-09',
          imgUrl: '/images/mcraft2.jpeg',
          body: 'Our Minecraft server website is now live! We’re excited to introduce this new hub where players can stay informed and engaged with everything happening on the server. You can now check for upcoming event dates and announcements, view the jobs system, take on unique quests and challenges to unlock special rewards, and browse the in-game shop for useful items and upgrades. Our goal is to provide a seamless way for players to stay connected, whether they are looking for the next big event, working towards job and quest milestones, or shopping for essentials. See you in-game!'
      },

  ]
  </script>
  
  <style scoped>
  .max-height-100vh{
      max-height: 100vh;
  }
  </style>