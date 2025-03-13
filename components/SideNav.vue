<script setup>
const route = useRoute()
</script>

<template>
  <div class="sidebar-container">
       
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
     
      <div class="d-flex justify-content-center">
        
        <div class="d-flex justify-content-end justify-content-xl-center flex-fill">
          <img src="/images/logo.png" alt="" class="" height="75px" width="75px">
        </div>

        <div class="d-flex flex-fill justify-content-center mt-4 d-xl-none">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      </div>

      <div class="offcanvas-body p-0">
        <div class="list-group">
          <NuxtLink 
            to="/"
            class="list-group-item list-group-item-action text-decoration-none ps-4"
            :class="route.path === '/' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/'">
            <div class="d-flex">
              <FontAwesomeIcon icon="house" class="fs-5 me-custom"/> 
              <p class="mb-0">Home</p>
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/events"
            class="list-group-item list-group-item-action text-decoration-none ps-4"
            :class="route.path === '/events' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/events'">
            <div class="d-flex">
              <FontAwesomeIcon icon="calendar-days" class="fs-5 me-3"/> 
              <p class="mb-0">Events</p>
            </div>
          </NuxtLink>
          
          <NuxtLink 
            to="/jobs"
            class="list-group-item list-group-item-action text-decoration-none ps-4"
            :class="route.path === '/jobs' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/jobs'">
            <div class="d-flex">
              <FontAwesomeIcon icon="hammer" class="fs-6 me-3"/> 
              <p class="mb-0">Society Jobs</p>
            </div>
          </NuxtLink>
          
          <NuxtLink 
            to="/quests"
            class="list-group-item list-group-item-action text-decoration-none ps-4" 
            :class="route.path === '/quests' ? 'active text-light' : 'text-dark'"
            :aria-current="route.path === '/quests'">
            <div class="d-flex">
              <FontAwesomeIcon icon="book" class="fs-5 me-3"/> 
              <p class="mb-0">Quests</p>
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/shop"
            class="list-group-item list-group-item-action text-decoration-none ps-4"
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
  </div>
</template>

<style scoped>


@media (min-width: 1200px) { 
  .offcanvas {
    visibility: visible!important;
    transform: none!important;
    position: static!important;
    height: 100%;
  }

  .sidebar-container {
    position: sticky;
    top: 0;
    bottom: 0;
    align-self: flex-start;
    height: 100vh;
    overflow-y: auto;
    }
}

.me-custom {
  margin-right: 0.75rem;
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