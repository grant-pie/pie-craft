<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  description: String,
  requirements: Array,
  rewardUrl: String,
  rewardName: String,
  rewardDescription: String
})


</script>

<template>

    <div class="card border w-50 flex-fill m-4 " style="width: 18rem;">
        <div class="card-header">
            <h4 class="card-title text-center mt-2">{{name}}</h4>
        </div>

        <div class="card-body d-flex flex-column p-4">
            
            <div class="d-flex card-text">
                
                {{description}}
            </div>

            <div class="w-50 align-self-center">
                <ul class="list-group mt-4">
                <li
                v-for="requirement in requirements"
                class="list-group-item text-center">{{ requirement }}</li>
            </ul>
            </div>

        </div>

        <div class="card m-4 d-flex">
            <div class="card-header">
                <strong>Reward:</strong>
            </div>
            <div class="card flex-fill p-2 justify-content-center m-4 d-flex flex-row align-items-center">
                <img :src="rewardUrl" width="50px" alt="">

                <div class="d-flex flex-column ms-4">
                    <strong class="card-text">{{ rewardName }}</strong>
                    <p class="card-text">{{ rewardDescription }}</p>
                </div>

            </div>

        </div>
    </div>
  </template>
