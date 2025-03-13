<script setup>

const props = defineProps({
  name: String,
  description: String,
  item1Name: String,
  item1Qty: Number,
  item1ImgUrl: String,
  item2Name: String,
  item2Qty: Number,
  item2ImgUrl: String,
  repeatable: Boolean
})
</script>

<template>
    <div class="card px-0 border" style="width: 18rem;">
        <div class="card-header d-flex justify-content-center">
          <FontAwesomeIcon
          v-show="repeatable"
          icon="repeat" class="fs-5 mt-2 me-3"/> 
          <h4 class="card-title text-center">{{name}}</h4>
        </div>

        <div class="card-body d-flex flex-column align-items-center p-4">
            <ItemTrade
            :item1Name="item1Name"
            :item1Qty="item1Qty"
            :item1ImgUrl="item1ImgUrl"
            :item2Name="item2Name"
            :item2Qty="item2Qty"
            :item2ImgUrl="item2ImgUrl"
            />
            
            <div class="d-flex mt-4">
                {{description}}
            </div>
        </div>
    </div>
</template>