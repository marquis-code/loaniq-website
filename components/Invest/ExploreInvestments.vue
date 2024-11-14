<template>
    <div class="pt-6">
      <!-- Title -->
      <h2 class="text-[#687181] text-lg font-medium mb-6">Choose an investment product to get started</h2>
  
      <!-- Investment Product Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.title" :class="['p-6 h-44 rounded-lg shadow-sm', product.bgColor]">
          <div class="flex flex-col mb-4">
            <img :src="product.icon" alt="Icon" class="w-8 h-8 mr-2" />
            <h3 class="text-lg font-semibold text-gray-800">{{ product.title }}</h3>
          </div>
          <p class="text-sm text-gray-700">{{ product.minInvestment }}</p>
          <p class="text-sm text-gray-500">{{ product.tenor }}</p>
        </div>
      </div>
  
      <!-- User Profile Badge -->
      <div class="absolute top-6 right-6 flex items-center space-x-2">
        <span class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">A</span>
        <img src="https://via.placeholder.com/40" alt="User Profile" class="w-10 h-10 rounded-full shadow-lg" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import invest1 from '@/assets/icons/flexi-grow.svg'
    import invest2 from '@/assets/icons/discount-note.svg'
      import invest3 from '@/assets/icons/fixed-investment.svg'
        import invest4 from '@/assets/icons/target-savings.svg'

  import { ref } from 'vue';
  
  // Sample Data for Investment Products
  const products = ref([
    {
      title: 'Flexi Grow Savings Note',
      minInvestment: 'Minimum investment of ₦10,000',
      tenor: 'Deposit & Withdraw anytime',
      icon: invest1,
      bgColor: 'bg-[#E0EBFF]'
    },
    {
      title: 'Fixed Investment Note',
      minInvestment: 'Minimum investment of ₦100,000',
      tenor: 'Minimum tenor of 3 months',
      icon: invest3,
      bgColor: 'bg-[#E0FFE6]'
    },
    {
      title: 'Maximum Yield Note',
      minInvestment: 'Minimum investment of ₦5 million',
      tenor: 'Minimum tenor of 2 years',
      icon: invest3,
      bgColor: 'bg-[#FFE5E5]'
    },
    {
      title: 'Discount Note',
      minInvestment: 'Upfront interest payments',
      tenor: 'Minimum investment of ₦500,000\nMinimum tenor of 3 months',
      icon: invest2,
      bgColor: 'bg-[#FFF1E0]'
    },
    {
      title: 'Target Savings Note',
      minInvestment: 'Minimum investment of ₦50,000',
      tenor: 'Minimum tenor of 3 months',
      icon: invest4,
      bgColor: 'bg-[#F1F2F5]'
    },
  ]);
  </script>
  
  <style scoped>
  /* Ensure Profile Badge Stays at the Top Right */
  .absolute {
    position: absolute;
  }
  </style>
  