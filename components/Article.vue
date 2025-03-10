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
    <div class="card w-50 m-4 flex-fill border ">
      <!-- Title and Date Wrapper -->
      <div class="card-header position-relative d-flex align-items-center px-4">
        <!-- Title: Absolutely Centered -->
        <h4 class="position-absolute start-50 top-50 translate-middle text-center">
          {{ title }}
        </h4>
        <!-- Date: Aligned to the Right -->
        <p class="ms-auto mt-3">{{ formattedDate }}</p>
      </div>
  
      
  
      <div class="card-body px-4">
        <img :src="imgUrl" class="card-img-top" alt="...">
        <div class="d-flex mt-4">
          {{ body }}
        </div>
      </div>
    </div>
  </template>
  