<template>
<div>
        <h1 class="text-center mt-5">Welcome to the Official Home of PieCraft.</h1>

        <div class="d-flex flex-column mt-5 ">

          <div class="row">

            <NuxtLink :to="'/events'" class="card bg-transparent border-none col-12 col-md-6 px-0 text-decoration-none">
              <button 
                class="card me-2" 
                v-on:mouseenter="hoverEvents = true" 
                v-on:mouseleave="hoverEvents = false"
                :class="{ 'bg-primary text-light': hoverEvents }">
                <div class="card-body d-flex align-items-center">
                  <FontAwesomeIcon icon="calendar-days" class="fs-5 me-3"/> 
                  <p class="mb-0">Click me to see upcoming events.</p>
                </div>
              </button>
            </NuxtLink>

            <NuxtLink class="card bg-transparent border-none  col-12 col-md-6 px-0 text-decoration-none" :to="'/jobs'">
              <button 
                class="card ms-2"  
                v-on:mouseenter="hoverJobs = true" 
                v-on:mouseleave="hoverJobs = false"
                :class="{ 'bg-primary text-light': hoverJobs }">
                <div class="card-body d-flex align-items-center">
                  <FontAwesomeIcon icon="hammer" class="fs-5 me-3"/> 
                  <p class="mb-0">Click me if you need something to do.</p>
                </div>
              </button>
            </NuxtLink>
          </div>

          <div class="d-flex row mt-4 justify-content-between">
            <NuxtLink class="card bg-transparent border-none  col-12 col-md-6 px-0 text-decoration-none" :to="'/quests'">
              <button 
                class="card me-2" 
                v-on:mouseenter="hoverQuests = true" 
                v-on:mouseleave="hoverQuests = false"
                :class="{ 'bg-primary text-light': hoverQuests }">
                <div class="card-body d-flex align-items-center">
                  <FontAwesomeIcon icon="book" class="fs-5 me-3"/> 
                  <p class="mb-0">Click me if you need excitement.</p>
                </div>
              </button>
            </NuxtLink>

            <NuxtLink class="card bg-transparent border-none  col-12 col-md-6 px-0 text-decoration-none" :to="'/'">
              <button 
                class="card ms-2" 
                v-on:mouseenter="hoverEmeralds = true" 
                v-on:mouseleave="hoverEmeralds = false"
                :class="{ 'bg-primary text-light': hoverEmeralds }">
                <div class="card-body d-flex align-items-center">
                  <FontAwesomeIcon icon="gem" class="fs-5 me-3"/> 
                  <p class="mb-0">Click me you want to spend some emeralds.</p>
                </div>
              </button>
            </NuxtLink>
          </div>
        </div>

     

        <div class="d-flex flex-column mt-5">
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
          title: "PieCraft.online launched!",
          publishedAt: '2025-03-09',
          imgUrl: './images/mcraft2.jpeg',
          body: 'Our Minecraft server website is now live! We’re excited to introduce this new hub where players can stay informed and engaged with everything happening on the server. You can now check for upcoming event dates and announcements, view the jobs system, take on unique quests and challenges to unlock special rewards, and browse the in-game shop for useful items and upgrades. Our goal is to provide a seamless way for players to stay connected, whether they are looking for the next big event, working towards job and quest milestones, or shopping for essentials. See you in-game!'
      },

  ]
    const hoverEvents= ref(false);
    const hoverJobs= ref(false);
    const hoverQuests= ref(false);
    const hoverEmeralds= ref(false);
  
  </script>
  
  <style scoped>
  .border-none{
    border: none;
  }

  .max-height-100vh{
      max-height: 100vh;
  }
  .row{
    --bs-gutter-x: 0;
  }
  </style>