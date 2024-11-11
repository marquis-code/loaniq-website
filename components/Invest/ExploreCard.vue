<!-- components/ExploreCard.vue -->
<template>
    <div class="space-y-3" :class="['p-4 rounded-lg shadow-sm', colorClass, 'max-w-lg']">
      <img :src="icon" />
      <h3 class="text-lg font-semibold text-[#333333]">{{ title }}</h3>
    <div>
      <p class="text-sm">{{ minInvestment }}</p>
      <p class="text-sm text-[#666666]">{{ description }}</p>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    colorClass: String,
    icon: String,
    title: String,
    minInvestment: String,
    description: String,
  });
  </script>
  