<script setup>
const route = useRoute()

const pickAxeIconUrlBlack = '/images/pickaxe.png'

</script>

<template>
  <nav class="sidenav border bg-white">
    <div style="width: 18rem;">
      <div class="p-0">
        <div class="border d-flex justify-content-center mb-0">
          <img src="/images/logo.png" alt="" height="75px" width="75px">

        </div>
        
        <div class="list-group">
          <NuxtLink 
            to="/"
            class="list-group-item  list-group-item-action text-decoration-none"
            :class="route.path === '/' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/'">
            <div class="d-flex">
              <FontAwesomeIcon icon="house" class="fs-5 me-custom"/> 
              <p class="mb-0">Home</p>
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/events"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/events' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/events'">
            <div class="d-flex">
              <FontAwesomeIcon icon="calendar-days" class="fs-5 me-3"/> 
              <p class="mb-0">Events</p>
            </div>
          </NuxtLink>
          
          <NuxtLink 
            to="/jobs"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/jobs' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/jobs'">
            <div class="d-flex">
              <FontAwesomeIcon icon="hammer" class="fs-6 me-3"/> 
              <p class="mb-0">Society Jobs</p>
            </div>
          </NuxtLink>
          
          <NuxtLink 
            to="/quests"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/quests' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/quests'">
            <div class="d-flex">
              <FontAwesomeIcon icon="book" class="fs-5 me-3"/> 
              <p class="mb-0">Quests</p>
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/shop"
            class="list-group-item list-group-item-action text-decoration-none"
            :class="route.path === '/shop' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/shop'">
            <div class="d-flex">
              <FontAwesomeIcon icon="gem" class="fs-5 me-3"/> 
              <p class="mb-0">Shop</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.me-custom{
  margin-right: 0.75rem;
}
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