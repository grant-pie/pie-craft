<template>


<div >

    <h1 class="text-center mt-5">Upcoming Events.</h1>

    <div class="d-flex flex-column  align-items-center mt-5">
        
        <Event
        v-for="event in events"
        :title="event.title"
        :startDate="new Date(event.startDate)"
        :endDate="new Date(event.endDate)"
        :imgUrl="event.imgUrl"
        :body="event.body"
        />

    </div>

</div>

</template>

<script setup>
  import Event from '~/components/Event.vue'
const events = [
    {
        title: "Event 1",
        startDate: '2025-03-09',
        endDate: '2025-03-09',
        imgUrl: '/images/mcraft2.jpeg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    {
        title: "event 2",
        startDate: '2025-03-09',
        endDate: '2025-03-09',
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