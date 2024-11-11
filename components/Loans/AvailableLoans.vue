<!-- components/AvailableLoans.vue -->
<template>
    <div class="p-6 bg-white rounded-lg shadow-md w-full max-w-sm md:max-w-md">
      <h2 class="text-xl font-semibold mb-4">Available loans</h2>
      <div v-for="loan in loans" :key="loan.name" class="space-y-1 border-b pb-4 mb-4">
        <h3 class="font-semibold">{{ loan.name }}</h3>
        <p class="text-gray-600">{{ loan.description }}</p>
      </div>
      <button class="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg w-full">
        Let’s get started
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  const loans = [
    { name: "Consumer Loans", description: "Fill up the necessary information to verify and have full access to your account." },
    { name: "Business/Corporate Loans", description: "Fill up the necessary information to verify and have full access to your account." },
    { name: "Asset Financing", description: "Fill up the necessary information to verify and have full access to your account." },
  ];
  </script>
  