<template>
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
      <slot />
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
  });
  </script>
  