<template>
    <section class="container mx-auto px-4 py-6 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <div class="md:w-1/2 order-2 lg:order-1">
        <h2 class="text-2xl md:text-5xl font-bold mb-6 leading-tight">
          Earn rewards as you spend
        </h2>
        <p class="text-gray-600 text-lg mb-8">
          We are building a digital community that will empower you to take control of your money and make it work for you.
        </p>
        <button class="text-emerald-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
  
      <div class="md:w-1/2 order-1 lg:order-2">
          <img src="@/assets/img/reward.png" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const savingsCards = [
    { name: 'iPhone 13 Mini', amount: '300', total: '699', progress: 50, bgColor: 'bg-red-400' },
    { name: 'House', amount: '65,000', total: '30,500', progress: 50, bgColor: 'bg-emerald-600' },
    { name: 'Car', amount: '10,000', total: '20,000', progress: 50, bgColor: 'bg-amber-300' },
  ]
  </script>