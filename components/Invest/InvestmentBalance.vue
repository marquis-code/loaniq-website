<!-- components/InvestmentBalance.vue -->
<template>
<main class="flex justify-start items-start">
    <div class="bg-[#EEEFF2] p-6 rounded-lg flex justify-between items-center w-full max-w-lg">
    <div>
        <div class="text-2xl font-bold text-gray-800">{{ balance }}</div>
        <div class="text-gray-600 text-sm">Investment Balance</div>
    </div>
      <div class="text-4xl text-gray-400">
        <img src="@/assets/img/chart-pie.png" alt="" class="h-10 w-10" />
      </div>
    </div>
</main>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    balance: String,
  });
  </script>
  