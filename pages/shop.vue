<template>

<div class="card bg-transparent w-75 mx-auto" >

    <div class="card-body d-flex flex-column">

        <div class="card m-4 border ">

                <div class="card-body">

                    <h4 class="card-title text-center">Welcome to the PieCraft Shop?</h4>

                    <div class="d-flex">
                        
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                
                    </div>

                </div>

            </div>

        <div class="d-flex justifty-content-center m-4">

            <div
            class="card border"
            v-for="itemTrade in itemTrades">
                <div class="card-header text-center">

                    {{itemTrade.item1Name}}

                </div>

                <div class="card-body d-flex">

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

</template>


<script setup>
import ItemTrade from '~/components/ItemTrade.vue'
const itemTrades = [
    {
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