<template>
    <div class="space-y-3" :class="['p-4 rounded-lg shadow-sm', colorClass, 'max-w-lg']">
      <img src="@/assets/icons/flexi-grow.svg" />
      <h3 class="text-lg font-semibold text-[#333333]">{{ item.name || 'Nil' }}</h3>
    <div>
      <p class="text-sm">{{ item.minInvestment || 'Nil' }}</p>
      <p class="text-sm text-[#666666] text-justify">{{ item.description.length > 200 ? `${item.description.slice(0, 200)}...` : item.description }}</p>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
     item: {
      type: Object
     }
  });

   // Mock data for Explore Investments
 const exploreInvestments = ref([
   { colorClass: 'bg-[#E0EBFF]', title: 'Flexi Grow Savings Note', minInvestment: 'Minimum investment of N10,000', description: 'Deposit & Withdraw anytime', icon: flex_grow },
   { colorClass: 'bg-[#E0FFE6]', title: 'Fixed Investment Note', minInvestment: 'Minimum investment of N100,000', description: 'Minimum tenor of 3 months', icon: fixed_investment },
   { colorClass: 'bg-[#FFE5E5]', title: 'Maximum Yield Note', minInvestment: 'Minimum investment of N5 million', description: 'Minimum tenor of 2 Year', icon: fixed_investment },
   { colorClass: 'bg-[#FFF1E0]', title: 'Discount Note', minInvestment: 'Upfront interest payments', description: 'Minimum investment of N500,000', icon: discount_note },
   { colorClass: 'bg-[#F1F2F5]', title: 'Target Savings Note', minInvestment: 'Minimum investment of N50,000', description: 'Minimum tenor of 3 months', icon: target_savings }
 ]);
  </script>
  