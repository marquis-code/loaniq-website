<template>
    <div class="p-4 bg-gray-50 rounded-lg shadow">
      <div class="text-sm text-gray-500">{{ title }}</div>
      <div class="text-2xl font-bold text-gray-900">{{ value }}</div>
      <div class="flex items-center mt-2">
        <div
          :class="changeType === 'increase' ? 'text-green-500' : 'text-red-500'"
          class="text-sm font-medium"
        >
          <span>{{ percentageChange }}</span>
          <!-- <Icon
            :name="changeType === 'increase' ? 'arrow-up' : 'arrow-down'"
            class="h-4 w-4 inline-block"
          /> -->
        </div>
        <span class="ml-1 text-xs text-gray-500">vs last month</span>
      </div>
    </div>
  </template>
  
  <script setup>
//   import { Icon } from '@heroicons/vue/solid';
  
  defineProps({
    title: String,
    value: Number,
    percentageChange: String,
    changeType: String, // either 'increase' or 'decrease'
  });
  </script>
  