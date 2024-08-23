<template>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <div class="flex flex-col items-center">
          <div class="text-lg font-semibold">Apple Store</div>
          <div class="text-2xl font-bold">100</div>
          <div class="flex items-center mt-2 text-sm text-green-500">
            6% 
            <!-- <Icon name="arrow-up" class="h-4 w-4 inline-block ml-1" /> -->
          </div>
          <Rating :stars="4" />
        </div>
        <div class="flex flex-col items-center">
          <div class="text-lg font-semibold">Google Playstore</div>
          <div class="text-2xl font-bold">100</div>
          <div class="flex items-center mt-2 text-sm text-green-500">
            6% 
            <!-- <Icon name="arrow-up" class="h-4 w-4 inline-block ml-1" /> -->
          </div>
          <Rating :stars="3" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
//   import { Icon } from '@heroicons/vue/solid';
  import Rating from '~/components/Rating.vue';
  </script>
  