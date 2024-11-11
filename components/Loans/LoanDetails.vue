<!-- components/LoanDetails.vue -->
<template>
    <div class="p-6 bg-white rounded-lg shadow-md w-full max-w-lg space-y-4">
      <h2 class="text-xl font-semibold mb-4">Loan Details</h2>
      <div class="space-y-2">
        <label class="block font-medium">Loan Purpose</label>
        <select class="w-full p-2 border rounded">
          <option>Medical emergency</option>
          <option>Education</option>
          <option>Business</option>
        </select>
      </div>
      <div class="space-y-2">
        <label class="block font-medium">Your Net Earnings (₦)</label>
        <input type="number" placeholder="Enter amount" class="w-full p-2 border rounded" />
      </div>
      <div class="space-y-2">
        <label class="block font-medium">Loan Duration</label>
        <div class="flex gap-2">
          <button v-for="duration in durations" :key="duration.value"
                  :class="['px-4 py-2 rounded-lg', selectedDuration === duration.value ? 'bg-red-500 text-white' : 'bg-gray-100']"
                  @click="selectedDuration = duration.value">
            {{ duration.label }}
          </button>
        </div>
      </div>
      <div class="space-y-2">
        <label class="block font-medium">Your Loan Amount (₦)</label>
        <div class="flex items-center gap-2">
          <button class="p-2 bg-gray-200 rounded">-</button>
          <input type="text" class="w-full text-center p-2 border rounded" :value="loanAmount" readonly />
          <button class="p-2 bg-gray-200 rounded">+</button>
        </div>
      </div>
      <button class="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg w-full">
        View summary
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const durations = [
    { value: 1, label: "1 month" },
    { value: 3, label: "3 months" },
    { value: 6, label: "6 months" },
    { value: 12, label: "12 months" },
  ];
  
  const selectedDuration = ref(3);
  const loanAmount = ref("4,000,000");
  </script>
  