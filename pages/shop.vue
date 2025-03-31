<template>
    <div class="card w-100 mt-5  bg-transparent">
        <div class="card-body mx-0 px-0 d-flex flex-column">
            <div class="card border">
                <div class="card-body">
                    <h4 class="card-title text-center">Welcome to the PieCraft Shop</h4>
                    <p class="text-center">Looking for a place to spend your harned earned emeralds? Look no further than our very own shop."</p>
                </div>
            </div>

            <!-- Organize shop items in rows of four -->
            <div class="shop-container mt-5">
                <div v-for="(chunk, index) in itemTradesInChunks" :key="index" class="row">
                    <div
                    v-for="(itemTrade, index) in chunk"
                    :key="itemTrade.item1Name"
                    class=" m-0 col-xl-3 mb-4 "
                    :class="chunk.length == 1 ? 'd-xl-flex flex-fill justify-content-center' : index === 0 ? 'pe-xl-2' : index == 3 ? 'ps-xl-2' : 'px-xl-1'"
                    
                    >
                        <div
                            class="card border shop-item"

                            >   
                                <div class="card-header text-center">
                                    {{itemTrade.item1Name}}
                                </div>
                                <div class="card-body d-flex justify-content-center">
                                    <ItemTrade
                                    :item1Name="itemTrade.item1Name"
                                    :item1Qty="itemTrade.item1Qty"
                                    :item1ImgUrl="itemTrade.item1ImgUrl"
                                    :item2Name="itemTrade.item2Name"
                                    :item2Qty="itemTrade.item2Qty"
                                    :item2ImgUrl="itemTrade.item2ImgUrl"
                            
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import ItemTrade from '~/components/ItemTrade.vue'
import { computed } from 'vue'

const itemTrades = [
    {
        item1Name: "Diamond Pickaxe",
        item1Qty: 20,
        item2ImgUrl: './images/items/diamond_pickaxe.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },

    {
        item1Name: "Diamond Axe",
        item1Qty: 20,
        item2ImgUrl: './images/items/diamond_axe.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Shovel",
        item1Qty: 20,
        item2ImgUrl: './images/items/diamond_shovel.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Hoe",
        item1Qty: 20,
        item2ImgUrl: './images/items/diamond_hoe.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Sword",
        item1Qty: 20,
        item2ImgUrl: './images/items/diamond_sword.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Helmet",
        item1Qty: 14,
        item2ImgUrl: './images/items/diamond_helmet.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Chestplate",
        item1Qty: 40,
        item2ImgUrl: './images/items/diamond_chestplate.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Leggings",
        item1Qty: 26,
        item2ImgUrl: './images/items/diamond_leggings.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
    {
        item1Name: "Diamond Boots",
        item1Qty: 14,
        item2ImgUrl: './images/items/diamond_boots.webp',
        item2Name: "",
        item2Qty: 1,
        item1ImgUrl: './images/items/emerald.webp',
    },
]

// Split itemTrades array into chunks of 4 items per array
const itemTradesInChunks = computed(() => {
    const result = [];
    for (let i = 0; i < itemTrades.length; i += 4) {
        result.push(itemTrades.slice(i, i + 4));
    }
    return result;
});
</script>

<style scoped>
.card {
    border: 0;
}

</style>