<template>
    <nav class="flex items-center space-x-2">
      <button @click="goBack" class="p-1 bg-gray-100 rounded hover:bg-gray-200">
        <i class="fas fa-arrow-left text-gray-500"></i>
      </button>
  
      <span v-for="(item, index) in items" :key="index" class="flex items-center space-x-2">
        <!-- Display each breadcrumb item -->
        <span :class="{'text-gray-500': !isLastItem(index), 'text-red-600 font-semibold': isLastItem(index)}">
          <template v-if="!isLastItem(index)">
            <a @click="navigateTo(item.path)" class="hover:underline">{{ item.label }}</a>
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </span>
        
        <!-- Separator, if not the last item -->
        <span v-if="!isLastItem(index)" class="text-gray-400">/</span>
      </span>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  
  interface BreadcrumbItem {
    label: string;
    path?: string;
  }
  
  const props = defineProps<{
    items: BreadcrumbItem[];
  }>();
  
  const router = useRouter();
  
  function goBack() {
    router.back();
  }
  
  function navigateTo(path?: string) {
    if (path) {
      router.push(path);
    }
  }
  
  function isLastItem(index: number): boolean {
    return index === props.items.length - 1;
  }
  </script>
  
  <style scoped>
  /* Optional additional styles if needed */
  </style>
  