<template>
    <div class="relative">
      <button @click="isOpen = !isOpen" class="flex items-center space-x-2 bg-white p-2 rounded shadow">
        <span>{{ selectedOption }}</span>
        <!-- <Icon name="chevron-down" class="h-4 w-4" /> -->
      </button>
      <div v-if="isOpen" @click.away="isOpen = false" class="absolute mt-2 w-full bg-white shadow-lg rounded p-2">
        <ul>
          <li v-for="option in options" :key="option" @click="selectOption(option)" class="cursor-pointer hover:bg-gray-100 p-2 rounded">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
//   import { Icon } from '@heroicons/vue/solid';
  
  const isOpen = ref(false);
  const selectedOption = ref('All');
  
  defineProps({
    options: {
      type: Array,
      default: () => ['All'],
    },
  });
  
  function selectOption(option) {
    selectedOption.value = option;
    isOpen.value = false;
    emit('update:filter', option);
  }
  </script>
  