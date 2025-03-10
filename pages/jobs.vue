<template>

    <div class="card bg-transparent w-75 mx-auto" >

        <div class="card-body d-flex flex-column">

            <div class="card m-4 border ">

                    <div class="card-body">

                        <h4 class="card-title text-center">What are Society Jobs?</h4>

                        <div class="d-flex">
                            
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    
                        </div>

                    </div>

                </div>

                <div class="d-flex ">
                
                    <Job
                    v-for="job in jobs"
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
</template>

<script setup>
import Job from '~/components/Job.vue'
const jobs = [
   
    {
        name: "Job 1",
        description: 'Lorem ipsum dolor sit amet, . Excepteur sint occaecat cupidatat non proident.',
        item1Name: "Diamond Pickaxe",
        item1Qty: 1,
        item1ImgUrl: '/images/items/enchanted_iron_axe.png',
        item2Name: "Diamond Pickaxe",
        item2Qty: 64,
        item2ImgUrl: '/images/items/emerald.webp',
    }, 
    {
        name: "Job 1",
        description: 'Lorem ipsum dolor sit amet, . Excepteur sint occaecat cupidatat non proident.',
        item1Name: "Diamond Pickaxe",
        item1Qty: 1,
        item1ImgUrl: '/images/items/enchanted_iron_axe.png',
        item2Name: "Diamond Pickaxe",
        item2Qty: 64,
        item2ImgUrl: '/images/items/emerald.webp',
    }, 

]

</script>

<style scoped>

    .card {
        border: 0;
    }

</style>