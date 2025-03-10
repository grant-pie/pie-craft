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
        title: "The Society has arrived.",
        startDate: '2025-03-01',
        endDate: '2025-03-31',
        imgUrl: '/images/event02.jpg',
        body: 'A special group of new players have arrived on the server. Known only as "The Society", these players are here to help out on the server by providing special jobs and quests. They might even build rare and special structures! So be on the lookout for anything new and unusual.'
    },
    {
        title: "The Darkness Comes Alive!",
        startDate: '2025-04-01',
        endDate: '2025-04-30',
        imgUrl: '/images/event01.jpg',
        body: "Society scouts report seeing strange creature's lurking in the night, we must prepare to defend our homes if we are to survive! During this event mobs will be switched on and players may earn special rewards by killing spawned mobs."
    },

]

</script>

<style scoped>

.max-height-100vh{
    max-height: 100vh;
}

</style>