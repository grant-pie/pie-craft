<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  startDate: Date,
  endDate: Date,
  imgUrl: String,
  body: String
})

const formattedStartDate = computed(() => props.startDate?.toISOString().split('T')[0]);
const formattedEndDate = computed(() => props.endDate?.toISOString().split('T')[0]);
</script>

<template>

    <div class="card border" style="width: 18rem;">
        <div class="card-header">
            <h4 class="card-title text-center  mt-2">{{title}}</h4>
        </div>

        <img :src="imgUrl" class="card-img-top px-4 mt-4" alt="...">

        <div class="card-body">

            <div class="d-flex flex-column flex-md-row">

                <div class="card bg-light flex-fill m-4 d-flex flex-colomn align-items-center">
                    <strong class="mt-2">Starts:</Strong>
                    <p class="mt-2">{{formattedStartDate}}</p>
                </div>
                
                <div class="card bg-light flex-fill m-4 d-flex flex-colomn align-items-center">
                    <strong class="mt-2">Ends:</strong>
                    <p class="mt-2">{{formattedEndDate}}</p>
                </div>

            </div>
            
            <div class="d-flex">
                
                {{body}}
            </div>

        </div>

    </div>
  </template>
  