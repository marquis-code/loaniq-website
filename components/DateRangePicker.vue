<template>
    <div class="relative">
      <button @click="isOpen = !isOpen" class="flex items-center space-x-2 bg-white p-2 rounded shadow">
        <span>{{ selectedRange }}</span>
        <!-- <Icon name="chevron-down" class="h-4 w-4" /> -->
      </button>
      <div v-if="isOpen" @click.away="isOpen = false" class="absolute mt-2 w-full bg-white shadow-lg rounded p-2">
        <ul>
          <li v-for="range in ranges" :key="range" @click="selectRange(range)" class="cursor-pointer hover:bg-gray-100 p-2 rounded">
            {{ range }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
//   import { Icon } from '@heroicons/vue/solid';
  
  const isOpen = ref(false);
  const selectedRange = ref('Today');
  
  const ranges = ['Today', 'This Week', 'This Month', 'This Year', 'Custom'];
  
  function selectRange(range) {
    selectedRange.value = range;
    isOpen.value = false;
  }
  </script>
  