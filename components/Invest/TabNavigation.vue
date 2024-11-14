<!-- components/TabNavigation.vue -->
<template>
    <div class="flex space-x-4 mt-6 overflow-x-auto whitespace-nowrap">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'py-2 px-4 rounded-lg text-sm font-medium',
          tab === activeTab ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700',
        ]"
        @click="setActiveTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    tabs: Array,
    activeTab: String,
  });
  const emit = defineEmits(['update:activeTab']);
  
  function setActiveTab(tab: string) {
    emit('update:activeTab', tab);
  }
  </script>
  