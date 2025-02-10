<!-- components/InvestmentStats.vue -->
<template>
    <div class="relative min-h-[500px] bg-slate-50 overflow-hidden">
      <!-- Wave background image -->
      <img 
      data-aos="fade-up" 
        src="@/assets/img/wave-vector.png" 
        alt="Background pattern"
        class="absolute bottom-0 left-0 w-1/2 h-2/3 object-cover opacity-30"
      />
  
      <!-- Decorative circle top right -->
      <div data-aos="fade-up"  class="absolute top-4 right-4 w-16 h-16">
        <div v-for="(_, index) in 3" 
             :key="index"
             class="absolute inset-0"
             :style="{
               padding: `${index * 8}px`,
             }"
        >
          <div class="w-full h-full border-4 border-teal-600 rounded-full"
               :style="{
                 opacity: 0.2 + (index * 0.2)
               }"
          ></div>
        </div>
      </div>
  
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Left content -->
          <div class="relative z-10">
            <div class="bg-teal-600 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
              <!-- <IconTrendingUp class="text-white" /> -->
            </div>
            
            <h2 data-aos="fade-up"  class="text-4xl font-bold text-gray-900 mb-4">
              NGN 300M+ paid out to investors
            </h2>
            
            <p data-aos="fade-up"  class="text-gray-600 max-w-md">
              In just one year, we've paid out over ₦300 million to our investors, with many reinvesting their principal and earnings to further grow their wealth.
               <!-- we have paid out over NGN 300M to our investors in just one year with most of them renvesting their principals and earnings to further grow their wealth. -->
            </p>
          </div>
  
          <!-- Right content - Graph -->
          <div class="relative bg-white rounded-lg shadow-sm p-4">
            <!-- More options button -->
            <button class="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full">
              <!-- <IconMoreVertical class="text-gray-400 w-5 h-5" /> -->
               <!-- <img src="@/assets/img/spiral.png" class="h-" /> -->
            </button>
  
            <!-- Graph container -->
            <div class="h-[300px]">
              <LineChart :data="chartData" />
            </div>
  
            <!-- Highlight point -->
            <div class="absolute top-4 right-20 bg-pink-500 text-white text-xs px-2 py-1 rounded">
              Q2 2017
              <br />
              NGN5,492,840
            </div>
          </div>
        </div>
      </div>
  
      <!-- Chat widget -->
      <ChatWidget />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
//   import { IconTrendingUp, IconMoreVertical } from '@/components/icons';
  
  const chartData = ref([
    { year: '2015', value: 2000000 },
    { year: '2016', value: 2500000 },
    { year: '2017', value: 3500000 },
    { year: '2018', value: 4200000 },
    { year: '2019', value: 5000000 },
    { year: '2020', value: 7000000 },
  ]);
  </script>