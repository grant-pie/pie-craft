<template>
    <div class="card mt-10 mt-xl-5 bg-transparent ">
        <div class="card-body px-0 d-flex flex-column">
            <div class="card border">
                <div class="card-body">
                    <h4 class="card-title text-center">What are Society Jobs?</h4>
                    <div class="d-flex">
                        Society jobs are tasks that upon completion will reward you with emeralds that you can either spend in game or in our very own shop. Some jobs are even repeatable and others require you to build a building or structure.
                    </div>
                </div>
            </div>

            <!-- Organize jobs in rows of two -->
            <div class="jobs-container mt-5">
                <div v-for="(chunk, index) in jobsInChunks" :key="index" class="row mb-xl-5">
                    <Job
                    v-for="(job, index) in chunk"
                    :key="job.name"
                    :name="job.name"
                    :description="job.description"
                    :item1Name="job.item1Name" 
                    :item1Qty="job.item1Qty"
                    :item1ImgUrl="job.item1ImgUrl"
                    :item2Name="job.item2Name"
                    :item2Qty="job.item2Qty"
                    :item2ImgUrl="job.item2ImgUrl"
                    :repeatable="job.repeatable"
                    :class="chunk.length > 1 ? index % 2 === 0  ? 'me-xl-2' : 'ms-xl-2' : ''"
                    class="flex-fill mb-5 mb-xl-0 "
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Job from '~/components/Job.vue'
import { computed } from 'vue'

const jobs = [
    {
        name: "Diggy diggy hole! Part I",
        description: 'The Society has created a quarry near Sunstone village. They have asked us to dig for coal inside this quarry and it is important to keep in mind that only coal mined from the quarry is accepted. This job is repeatable.',
        item1Name: "",
        item1Qty: 1,
        item1ImgUrl: './images/items/coal.webp',
        item2Name: "",
        item2Qty: 1,
        item2ImgUrl: './images/items/emerald.webp',
        repeatable: true
    }, 
    {
        name: "Diggy diggy hole! Part II",
        description: 'The Society has created a quarry near Sunstone village. They have asked us to dig for iron inside this quarry and it is important to keep in mind that only iron mined from the quarry is accepted. This job is repeatable.',
        item1Name: "",
        item1Qty: 1,
        item1ImgUrl: './images/items/iron_ore.png',
        item2Name: "",
        item2Qty: 1,
        item2ImgUrl: './images/items/emerald.webp',
        repeatable: true
    }, 
    {
        name: "It's called lumber, jack.",
        description: 'The Society has asked us to harvest lumber. Any type will do but a variety of different types will be nice to have. This job is repeatable.',
        item1Name: "",
        item1Qty: 1,
        item1ImgUrl: './images/items/oak_log.webp',
        item2Name: "",
        item2Qty: 1,
        item2ImgUrl: './images/items/emerald.webp',
        repeatable: true
    }, 
    {
        name: "Food for the troops.",
        description: 'As we prepare for the oncoming battles we need to ensure that our troops have ample food supply. Thus the Society has asked us to bake a surplus of bread. This job is repeatable.',
        item1Name: "",
        item1Qty: 1,
        item1ImgUrl: './images/items/bread.webp',
        item2Name: "",
        item2Qty: 1,
        item2ImgUrl: './images/items/emerald.webp',
        repeatable: true
    },
    {
        name: "Defense against the darkness.",
        description: "To ensure that we protect our home and people the Society has asked us to build a small wall around our home. This wall must be at least four blocks high and three blocks thick. Don't boring - be sure to build a wall that not only works well but is also nice to look at. This job is repeatable.",
        item1Name: "",
        item1Qty: 0,
        item1ImgUrl: './images/items/iron_hammer.webp',
        item2Name: "",
        item2Qty: 1,
        item2ImgUrl: './images/items/emerald.webp',
        repeatable: false
    },
]

// Split jobs array into chunks of 2 jobs per array
const jobsInChunks = computed(() => {
    const result = [];
    for (let i = 0; i < jobs.length; i += 2) {
        result.push(jobs.slice(i, i + 2));
    }
    return result;
});
</script>

<style scoped>
.card {
    border: 0;
}

</style>