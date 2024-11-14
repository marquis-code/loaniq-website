<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Business Details</h2>
      <input type="text" placeholder="Business Name" class="w-full p-3 border rounded-lg mb-4" />
      <input type="text" placeholder="RC Number" class="w-full p-3 border rounded-lg mb-4" />
      <input type="text" placeholder="Date of Registration" class="w-full p-3 border rounded-lg" />
      <button @click="$emit('nextStep')" class="mt-6 py-2 px-4 bg-green-700 text-white rounded-lg">Continue &rarr;</button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps(['nextStep']);
  </script>
  