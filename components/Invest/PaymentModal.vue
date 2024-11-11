<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-lg max-w-sm w-full space-y-6">
        <button @click="$emit('close')" class="absolute top-2 right-2 text-red-500 text-xl">&times;</button>
        <h2 class="text-lg font-semibold">Hi {{ userName }}</h2>
        <p class="text-gray-600 text-sm">
          Before you proceed to payment, please accept the Terms and Conditions.
        </p>
        <label class="text-sm text-gray-500 mt-4">Your First and Last Name</label>
        <input type="text" v-model="userName" class="w-full p-2 border border-gray-300 rounded" placeholder="Chinedu Ndukief" />
        
        <button @click="processPayment" class="w-full py-2 bg-green-500 text-white rounded">Process Payment</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const userName = ref('Chinedu Ndukief');
  
  function processPayment() {
    // Logic for payment processing
  }
  </script>
  