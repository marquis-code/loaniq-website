<!-- components/Badge.vue -->
<template>
    <div :class="`flex items-center gap-1 px-3 py-1 rounded-full w-fit ${backgroundColor}`">
      <span :class="`w-2 h-2 rounded-full ${dotColor}`"></span>
      <span class="text-xs font-medium" :class="textColor">{{ status }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    status: { type: String, default: 'Active' },
    backgroundColor: { type: String, default: 'bg-green-100' },
    dotColor: { type: String, default: 'bg-green-500' },
    textColor: { type: String, default: 'text-gray-800' },
  });
  </script>
  