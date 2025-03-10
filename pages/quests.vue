<template>
        <div class="card bg-transparent w-75 mx-auto" >

            <div class="card-body d-flex flex-column">

                <div class="card m-4 border ">

                        <div class="card-body">

                            <h4 class="card-title text-center">What are Society Quests?</h4>

                            <div class="d-flex">
                                
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                        
                            </div>

                        </div>

                    </div>

                <div class="d-flex">
                    
                    <Quest
                    v-for="quest in quests"
                    :name="quest.name"
                    :description="quest.description"
                    :requirements="quest.requirements"
                    :rewardUrl="quest.rewardUrl"
                    :rewardName="quest.rewardName"
                    :rewardDescription="quest.rewardDescription"
                    />


                </div>

            </div>

            </div>


</template>

<script setup>
import Quest from '~/components/Quest.vue'
const quests = [
    {
        name: "Sap! Sap! Saplings!",
        description: 'The Society has asked us to gather one of every type of sapling. To complete this quest you must gather the following:',
        rewardName: "Evercleave",
        requirements: ["Spruce Sapling", "Oak Sapling", "Acacia Sapling", "Birch Sapling", "Dark Oak Sapling"],
        rewardDescription: 'A blessed axe, enchanted with Unbreaking III, Mending I and Efficiecy V',
        rewardUrl: '/images/items/enchanted_iron_axe.png',
    },
    {
        name: "Saplings! Saplings! Saplings!",
        description: 'The Society has asked us to gather one of every type of sapling. To complete this quest you must gather the following:',
        rewardName: "Evercleave",
        requirements: ["Spruce Sapling", "Oak Sapling", "Acacia Sapling", "Birch Sapling", "Dark Oak Sapling"],
        rewardDescription: 'A blessed axe, enchanted with Unbreaking III, Mending I and Efficiecy V',
        rewardUrl: '/images/items/enchanted_iron_axe.png',
    },

]

</script>

<style scoped>

.card {
    border: 0;
}
</style>