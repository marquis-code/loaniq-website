<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Loan Summary</h2>
      <p>Loan Type: Consumer loan</p>
      <p>Loan Purpose: Medical expenses</p>
      <p>Loan Amount: ₦200,000.00</p>
      <!-- Other summary details... -->
      <button @click="$emit('nextStep')" class="mt-6 py-2 px-4 bg-green-700 text-white rounded-lg">Finalize application &rarr;</button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps(['nextStep']);
  </script>
  