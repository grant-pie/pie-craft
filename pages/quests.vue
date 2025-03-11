<template>
    <div class="card bg-transparent w-75 mx-auto">
        <div class="card-body d-flex flex-column">
            <div class="card m-4 border">
                <div class="card-body">
                    <h4 class="card-title text-center">What are Society Quests?</h4>
                    <div class="d-flex">
                        Society Quests are special tasks that are best completed with friends. Each quest has a special blessed item as a reward (if you lose your blessed item don't fret - jusk ask Oom G for a new one.). Unlike jobs they are non-repeatable and once a quest has been completed it will be marked as completed.
                    </div>
                </div>
            </div>

            <!-- Organize quests in rows of two -->
            <div class="quests-container">
                <div v-for="(chunk, index) in questsInChunks" :key="index" class="row">
                    <Quest
                        v-for="quest in chunk"
                        :key="quest.name"
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
    </div>
</template>

<script setup>
import Quest from '~/components/Quest.vue'
import { computed } from 'vue'

const quests = [
    {
        name: "Sap! Sap! Saplings!",
        description: 'The Society has asked us to gather one of every type of sapling. Upon completion the society will reward you with an blessed iron axe. To complete this quest you must gather the following:',
        rewardName: "Evercleave",
        requirements: ["Spruce Sapling", "Oak Sapling", "Acacia Sapling", "Birch Sapling", "Dark Oak Sapling"],
        rewardDescription: 'Iron Axe, Enchanted with Unbreaking III, Mending I and Efficiency V',
        rewardUrl: '/images/items/enchanted_iron_axe.webp',
    },
    {
        name: "The Temple of Anubis.",
        description: 'Somewhere deep in the desert lies the lost temple of Anubis. The Society has asked us to travel to the various desert biomes in search of a desert temple. As a reward the Society will give you a blessed iron shovel. So to complete this quest you must find:',
        rewardName: "Burrowbane",
        requirements: ["A Desert Temple"],
        rewardDescription: 'Iron Shovel, Enchanted with Unbreaking III, Mending I and Efficiency V',
        rewardUrl: '/images/items/enchanted_iron_shovel.webp',
    },
    {
        name: "We must go deep...",
        description: 'Somewhere deep underground lies the Deep Dark - a dark and dangerous place. The Society has asked us dig deep so as to find where this biome is located.. As a reward the Society will give you a blessed iron pickaxe. So to complete this quest you must find:',
        rewardName: "Veinreaver",
        requirements: ["A Desert Temple"],
        rewardDescription: 'Iron Pickaxe, Enchanted with Unbreaking III, Mending I and Efficiency V',
        rewardUrl: '/images/items/enchanted_iron_pickaxe.webp',
    },
    {
        name: "Visions of a Strange Dimention",
        description: 'The Society has heard of a strange new dimention known as "The End", to find this place we must first collect 12 Ender Pearls. As a reward the Society will give you a blessed iron sword. To complete this quest you need:',
        rewardName: "Nightfang",
        requirements: ["12 x Ender Pearls"],
        rewardDescription: 'Iron Sword, Enchanted with Unbreaking III, Mending I and Sharpness V',
        rewardUrl: '/images/items/enchanted_iron_sword.webp',
    },
]

// Split quests array into chunks of 2 quests per array
const questsInChunks = computed(() => {
    const result = [];
    for (let i = 0; i < quests.length; i += 2) {
        result.push(quests.slice(i, i + 2));
    }
    return result;
});
</script>

<style scoped>
.card {
    border: 0;
}

.quests-container {
    width: 100%;
}

.row {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
}
</style>