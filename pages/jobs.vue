<template>
    <div class="card bg-transparent w-75 mx-auto">
        <div class="card-body d-flex flex-column">
            <div class="card m-4 border">
                <div class="card-body">
                    <h4 class="card-title text-center">What are Society Jobs?</h4>
                    <div class="d-flex">
                        Society jobs are repeatable tasks that upon completion will reward you with emeralds that you can either spend in game or in our very own shop.
                    </div>
                </div>
            </div>

            <!-- Organize jobs in rows of two -->
            <div class="jobs-container">
                <div v-for="(chunk, index) in jobsInChunks" :key="index" class="row">
                    <Job
                        v-for="job in chunk"
                        :key="job.name"
                        :name="job.name"
                        :description="job.description"
                        :item1Name="job.item1Name" 
                        :item1Qty="job.item1Qty"
                        :item1ImgUrl="job.item1ImgUrl"
                        :item2Name="job.item2Name"
                        :item2Qty="job.item2Qty"
                        :item2ImgUrl="job.item2ImgUrl"
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
        description: 'The Society has created a quarry near Sunstone village. They have asked us to dig for coal inside this quarry.',
        item1Name: "Diamond Pickaxe",
        item1Qty: 64,
        item1ImgUrl: '/images/items/coal.webp',
        item2Name: "Diamond Pickaxe",
        item2Qty: 1,
        item2ImgUrl: '/images/items/emerald.webp',
    }, 
    {
        name: "Diggy diggy hole! Part II",
        description: 'The Society has created a quarry near Sunstone village. They have asked us to dig for iron inside this quarry.',
        item1Name: "Diamond Pickaxe",
        item1Qty: 64,
        item1ImgUrl: '/images/items/iron_ore.png',
        item2Name: "Diamond Pickaxe",
        item2Qty: 1,
        item2ImgUrl: '/images/items/emerald.webp',
    }, 
    {
        name: "It's called lumber, jack.",
        description: 'The Society has asked us to harvest lumber. Any type will do but a variety of different types will be nice to have.',
        item1Name: "Diamond Pickaxe",
        item1Qty: 64,
        item1ImgUrl: '/images/items/oak_log.webp',
        item2Name: "Diamond Pickaxe",
        item2Qty: 1,
        item2ImgUrl: '/images/items/emerald.webp',
    }, 
    {
        name: "A Fourth Job",
        description: 'The Society has asked us to harvest lumber. Any type will do but a variety of different types will be nice to have.',
        item1Name: "Diamond Pickaxe",
        item1Qty: 64,
        item1ImgUrl: '/images/items/oak_log.webp',
        item2Name: "Diamond Pickaxe",
        item2Qty: 1,
        item2ImgUrl: '/images/items/emerald.webp',
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

.jobs-container {
    width: 100%;
}

.row {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
}
</style>