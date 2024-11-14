<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Management Profile</h2>
      <textarea placeholder="Business/Management Profile" class="w-full p-3 border rounded-lg mb-4"></textarea>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="index in 3" :key="index">
          <input type="text" placeholder="Shareholder/Director {{ index }}" class="w-full p-3 border rounded-lg mb-2" />
          <input type="text" placeholder="Bank Verification Number" class="w-full p-3 border rounded-lg" />
        </div>
      </div>
      <button @click="$emit('nextStep')" class="mt-6 py-2 px-4 bg-green-700 text-white rounded-lg">Submit application &rarr;</button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps(['nextStep']);
  </script>
  