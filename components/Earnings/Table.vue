<template>
    <div class="p-6 min-h-screen container mx-auto">
      <div class="overflow-x-auto bg-white rounded-md border-[0.5px] border-gray-50">
        <table class="min-w-full text-left">
          <thead>
            <tr class="text-gray-500 text-sm border-b border-gray-50">
              <th class="px-4 py-4 font-medium text-[#1D2739]">Transaction ID</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Property name</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Tenant name</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Date</th>
              <th class="px-4 py-4 font-medium text-[#1D2739]">Commission fee</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(earning, index) in earnings" :key="index" class="border-b border-gray-50">
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ earning.transactionId }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ earning.propertyName }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ earning.tenantName }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ earning.date }}</td>
              <td class="px-4 py-6 text-[#667185] font-light text-sm">{{ earning.commissionFee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Earnings data array
  interface Earning {
    transactionId: string;
    propertyName: string;
    tenantName: string;
    date: string;
    commissionFee: string;
  }
  
  const earnings = ref<Earning[]>([
    { transactionId: 'TXN26656890', propertyName: 'Ortiz - Kunde', tenantName: 'Jackie Goodwin', date: '30/05/2024', commissionFee: '116, 20.52' },
    { transactionId: 'TXN26656890', propertyName: 'Hodkiewicz - Cummings', tenantName: 'Henry Veum', date: '30/05/2024', commissionFee: '693,590.94' },
    { transactionId: 'TXN26656890', propertyName: 'Gislason - Crona', tenantName: 'Shari Lang', date: '30/05/2024', commissionFee: '597,399.00' },
    { transactionId: 'TXN26656890', propertyName: 'Cassin - Simonis', tenantName: 'Kristina Schinner', date: '30/05/2024', commissionFee: '597,399.00' },
    { transactionId: 'TXN26656890', propertyName: 'Parisian - Haley', tenantName: 'Alex Brown', date: '06/06/2024', commissionFee: '597,399.00' },
    { transactionId: 'TXN26656890', propertyName: 'Torp, O\'Kon and Gislason', tenantName: 'Pat Haley', date: '06/06/2024', commissionFee: '597,399.00' },
    { transactionId: 'TXN26656890', propertyName: 'Lubowitz, Berge and Cartwright', tenantName: 'Kristopher Beatty', date: '06/06/2024', commissionFee: '597,399.00' },
    { transactionId: 'TXN26656890', propertyName: 'Fritsch LLC', tenantName: 'Franklin Jakubowski', date: '06/06/2024', commissionFee: '597,399.00' },
  ]);
  
  const currentPage = ref(1);
  </script>
  
  <style scoped>
  /* Additional styling for custom adjustments */
  </style>
  