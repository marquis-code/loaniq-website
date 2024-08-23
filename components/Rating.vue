<template>
    <div class="flex">
      <!-- <Icon
        v-for="i in 5"
        :key="i"
        name="star"
        class="h-5 w-5"
        :class="i <= stars ? 'text-yellow-500' : 'text-gray-300'"
      /> -->
    </div>
  </template>
  
  <script setup>
//   import { Icon } from '@heroicons/vue/solid';
  
  defineProps({
    stars: Number,
  });
  </script>
  