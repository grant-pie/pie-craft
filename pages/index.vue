<template>
<div>
        <h1 class="text-center mt-xl-5 mt-10">Welcome to the Official Home of PieCraft.</h1>

        <div class="d-flex flex-column mt-5 ">

          <div class="row">

            <NuxtLink :to="'/events'" class="card bg-transparent border-none col-12 col-md-6 px-0 text-decoration-none">
              <button 
                class="card me-xl-2" 
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
                class="card ms-xl-2"  
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

          <div class="d-flex row mt-xl-4 justify-content-between">
            <NuxtLink class="card bg-transparent border-none  col-12 col-md-6 px-0 text-decoration-none" :to="'/quests'">
              <button 
                class="card me-xl-2" 
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
                class="card ms-xl-2" 
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
          class="mb-5"
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
          publishedAt: '2025-03-28',
          imgUrl: './images/mcraft2.jpeg',
          body: 'Our Minecraft server website is now live! We’re excited to introduce this new hub where players can stay informed and engaged with everything happening on the server. You can now check for upcoming event dates and announcements, view the jobs system, take on unique quests and challenges to unlock special rewards, and browse the in-game shop for useful items and upgrades. Our goal is to provide a seamless way for players to stay connected, whether they are looking for the next big event, working towards job and quest milestones, or shopping for essentials. See you in-game!'
      },

      {
          title: "Player Spotlight: Bella Starlit",
          publishedAt: '2025-03-28',
          imgUrl: './images/bstarlit.jpg',
          body: `<strong>We had a chat with famous PieCraft player - Bella Starlit, here's what she had to say:</strong>
                  <br>
                  <br>
                  <strong>What is your favourite thing about Minecraft?</strong> 
                  <p>All the different Biomes, Mobs and Dimensions. I love that there are different modes as well.</p>
                  <br>
                  <strong>What is your favourite mode?</strong> 
                  <p>Either creative or harcore. I am currently building a city in creative mode.</p>
                  <br>
                  <strong>What's the most impressive build or project you've ever worked on in Minecraft?</strong>
                  <p>The mayor's office. It is thee stories high with a working elevator. It also has a meeting room with a hand out area<p>
                  <br>
                  <strong>What are some of your favorite Minecraft mods</strong>
                  <p>The dragon mod where you can find and tame different types dragons. It also has special trees with nests where you can find dragon eggs. I also love the Modern Furniture mod as well as the Wool and Farming ones too.</p>
                  <br>
                  <strong>If you could add one new feature to the game, what would it be and why?</strong>
                  <p>More mysteries, I love all the strange mysteries surrounding the game. I would definitely add more different dimensions and more mythical creatures.</p>
                  <br>
                  <strong> If you could add one new mob to the game, what would it be and why?</strong>
                  <p>Like I said, more mythical creatures, maybe one for each biome. Like the for the cherry blossom biome I would add a mushroom mob and for the oak woods - bats.</p>
                  `
      },

      {
          title: "Player Spotlight: madmax nz100",
          publishedAt: '2025-03-28',
          imgUrl: './images/img2.jpg',
          body: `<strong>We had a chat with famous PieCraft player - madmaxNZ100, here's what he had to say:</strong>
                  <br>
                  <br>
                  <strong>What is your favourite thing about Minecraft?</strong> 
                  <p>Definitely the creepers, and I love exploring the Nether.</p>
                  <br>
                  <strong>What is your favourite mode?</strong> 
                  <p>Survival, I enjoy the feeling of progress.</p>
                  <br>
                  <strong>What's the most impressive build or project you've ever worked on in Minecraft?</strong>
                  <p>I built a city - complete with a Mcdonalds, my house, a bank, a school and it's right next to a village.</p>
                  <br>
                  <strong>What are some of your favorite Minecraft mods</strong>
                  <p>The farming mod that gives you fruit. I also love the wool addon because of the added cars and sparkly wool.</p>
                  <br>
                  <strong>If you could add one new feature to the game, what would it be and why?</strong>
                  <p>More mobs and perhaps discoverable cities.</p>
                  <br>
                  <strong> If you could add one new mob to the game, what would it be and why?</strong>
                  <p>Crocodiles, elephants and more animals.</p>
                  `
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