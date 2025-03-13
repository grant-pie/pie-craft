<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  publishedAt: Date,
  imgUrl: String,
  body: String
})

const formattedDate = computed(() => props.publishedAt?.toISOString().split('T')[0]);
</script>

<template>
    <div class="card ">
      <!-- Title and Date Wrapper -->
      <div class="d-flex card-header position-relative px-4">
        <!-- Title: Absolutely Centered -->
        <h4 class="position-absolute start-50 top-50 translate-middle text-center">
          {{ title }}
        </h4>
        <!-- Date: Aligned to the Right -->
        <p class="mx-auto ms-md-auto me-md-0 mt-10 ">{{ formattedDate }}</p>
      </div>
  
      <div class="card-body px-4">
        <img :src="imgUrl" class="card-img-top" alt="...">
        <div class="d-flex mt-4">
          {{ body }}
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
.mt-10{
    margin-top: 8rem;
  }
@media (min-width: 992px) { .mt-10{
    margin-top: 1rem;
}}
  
</style>