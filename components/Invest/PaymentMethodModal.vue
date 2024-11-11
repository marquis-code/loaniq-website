<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-lg max-w-sm w-full space-y-6">
        <button @click="$emit('close')" class="absolute top-2 right-2 text-red-500 text-xl">&times;</button>
        <h2 class="text-lg font-semibold">Select Payment Method</h2>
  
        <!-- Payment Tabs -->
        <div class="flex space-x-4 mb-4">
          <button class="py-2 px-4 bg-green-500 text-white rounded">My Wallet</button>
          <button class="py-2 px-4 bg-gray-100 text-gray-600 rounded">My Debit Card</button>
        </div>
  
        <p class="text-gray-600 text-center">Your available balance is low</p>
        <button class="w-full py-2 bg-green-500 text-white rounded">Make Payment</button>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  