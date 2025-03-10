<script setup>
const route = useRoute()
</script>

<template>
  <nav class="sidenav border bg-white">
    <div style="width: 18rem;">
      <div class="p-0">
        <div class="border d-flex mb-0">
          <img src="/images/logo.png" alt="" height="75px" width="75px">
          <h2 class="ms-2 mt-4">PieCraft</h2>
        </div>
        
        <div class="list-group">
          <NuxtLink 
            to="/"
            class="list-group-item  list-group-item-action text-decoration-none"
            :class="route.path === '/' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/'">
            Home
          </NuxtLink>

          <NuxtLink 
            to="/events"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/events' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/events'">
            Events
          </NuxtLink>
          
          <NuxtLink 
            to="/jobs"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/jobs' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/jobs'">
            Society Jobs
          </NuxtLink>
          
          <NuxtLink 
            to="/quests"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/quests' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/quests'">
            Society Quests
          </NuxtLink>

          <NuxtLink 
            to="/shop"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/shop' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/shop'">
            Shop
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sidenav {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

}

.card {
  border: 0px;
}

.list-group {
  border: 0;
  border-radius: 0;
}

.list-group-item {
  border: 0;
  border-radius: 0;
}
</style>