<!-- components/InvestmentBalance.vue -->
<template>
<main class="flex justify-start items-start">
    <div v-if="!loading && Object.keys(profileInfoObj)?.length" class="bg-[#EEEFF2] p-6 rounded-lg flex justify-between items-center w-full max-w-lg">
    <div>
        <div class="text-2xl font-bold text-gray-800">{{ formatCurrency(profileInfoObj?.investmentBalance) }}</div>
        <div class="text-gray-600 text-sm">Investment Balance</div>
    </div>
      <div class="text-4xl text-gray-400">
        <img src="@/assets/img/chart-pie.png" alt="" class="h-10 w-10" />
      </div>
    </div>
    <section class="w-full rounded-lg max-w-lg" v-else-if="loading && !Object.keys(profileInfoObj)?.length">
        <div
          class="rounded-md h-24 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"
        ></div>
      </section>
</main>
  </template>
  
  <script setup lang="ts">
  import { useFetchStats } from '@/composables/modules/dashboard/fetchStats'
  import { formatCurrency } from '@/utils/currencyUtils';
  const { loading, profileInfoObj } = useFetchStats()
  import { defineProps } from 'vue';
  
  defineProps({
    balance: String,
  });
  </script>
  