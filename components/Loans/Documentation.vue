<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Documentation</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(doc, index) in documents" :key="index" class="border rounded-lg p-4 text-center">
          <p>{{ doc }}</p>
          <button class="mt-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">+</button>
        </div>
      </div>
      <input type="text" placeholder="Your First And Last Name" class="w-full p-3 border rounded-lg my-4" />
      <button class="mt-4 py-2 px-4 bg-green-700 text-white rounded-lg">Submit application &rarr;</button>
    </div>
  </template>
  
  <script setup lang="ts">
  const documents = ref(['Pay slip 1', 'Pay slip 2', 'Pay slip 3']);
  </script>
  