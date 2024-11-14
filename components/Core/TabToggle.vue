<template>
    <div class="flex space-x-4 mt-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="setActiveTab(tab)"
        :class="[
          'py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200',
          activeTab === tab ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700'
        ]"
      >
        {{ tab }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  // Props to pass the tabs array and the initially active tab
  const props = defineProps({
    tabs: {
      type: Array as () => string[],
      default: () => ['My wallet', 'My debit card']
    },
    initialActiveTab: {
      type: String,
      default: 'My wallet'
    }
  });
  
  // Emits an event to update the active tab in the parent component
  const emit = defineEmits(['update:activeTab']);
  
  // Reactive variable for the active tab
  const activeTab = ref(props.initialActiveTab);
  
  // Method to set the active tab and emit an event to parent component
  function setActiveTab(tab: string) {
    activeTab.value = tab;
    emit('update:activeTab', tab);
  }
  </script>
  