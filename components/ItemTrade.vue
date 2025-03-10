<script setup>
import Item from '~/components/Item.vue'
const props = defineProps({
  item1Name: String,
  item1Qty: Number,
  item1ImgUrl: String,
  item2Name: String,
  item2Qty: Number,
  item2ImgUrl: String,
})


</script>

<template>

    
    <div class="d-flex">

        <Item
        :name="item1Name"
        :qty="item1Qty"
        :imgUrl="item1ImgUrl"
        />

        <div class="mt-2 mx-2 text-center">

            <FontAwesomeIcon icon="arrow-right-long" class="fs-10"/>

        </div>

        <Item
        :name="item2Name"
        :qty="item2Qty"
        :imgUrl="item2ImgUrl"
        />

        </div>

</template>

<style scoped>

.fs-10{
    font-size: 3rem;
}

</style>