<script setup> 

const props = defineProps({
  name: String,
  qty: Number,
  imgUrl: String,
})

</script>

<template>

    <div class="card p-2 position-relative">
        <img :src="imgUrl" width="50px" height="50px" alt="">
        
        <div 
        class="card position-absolute position-absolute--bottom-right px-1"
        >
            <strong>{{ qty }}</strong>
        </div>
    </div>

</template>

<style scoped>

    .position-absolute--bottom-right{
        bottom: 0;
        right: 0;
    }

</style>