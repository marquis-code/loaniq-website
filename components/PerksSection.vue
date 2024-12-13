<template>
    <section class="bg-gradient-to-r from-emerald-600 to-emerald-500">
      <div class="container mx-auto  flex flex-col md:flex-row items-center gap-12">
        <div data-aos="fade-up" class="md:w-1/2 text-white px-4 py-16 md:py-24 order-2 lg:order-1">
          <h2 data-aos="fade-up" class="text-4xl md:text-5xl font-bold mb-8">Perks of using us?</h2>
          <ul data-aos="fade-up" class="space-y-6">
            <li v-for="(perk, i) in perks" :key="i" class="flex items-center gap-3">
              <svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" class="stroke-white" stroke-width="2"/>
                <path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span class="text-xl">{{ perk }}</span>
            </li>
          </ul>
          <button class="text-white font-medium flex items-center gap-2 mt-8 hover:gap-3 transition-all">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
  
        <div data-aos="fade-up" class="md:w-1/2 relative order-1 lg:order-2">
          <!-- <div class="w-[320px] md:w-[400px] aspect-square rounded-3xl overflow-hidden"> -->
            <img data-aos="fade-up" src="@/assets/img/perk.png" alt="Happy user" class="w-full h-full object-cover" />
          </div>
        <!-- </div> -->
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const perks = [
    'No monthly fees',
    'Shop internationally, no fees added',
    'Instant Reversals',
    'Continental debit card'
  ]
  </script>