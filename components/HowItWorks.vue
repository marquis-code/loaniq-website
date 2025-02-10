<template>
    <section id="loan-products" class="py-12 max-w-7xl mx-auto sm:py-16 px-6 lg:px-0 lg:py-20 text-center">
      <!-- Title Section -->
      <h2 data-aos="fade-up" class="text-2xl font-bold text-gray-900 tracking-wider">Comprehensive range of loans for every financial chapter of your life</h2>
      <p data-aos="fade-up" class="mt-2 text-base  max-w-xl text-center mx-auto  text-gray-700">
        Whether you're looking for a loan to achieve your dreams or finance your business, our flexible solutions have you covered.
        <!-- From personal aspirations to business endeavors, our comprehensive range of loans ensures flexible solutions for every financial chapter in your life. -->
      </p>
  

      <div class="mt-12">
        <OffersBusinessCard />
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  /* Styling for step card */
  .step-card {
    @apply flex flex-col items-center text-center p-6 bg-white rounded-xl  transition-transform transform hover:-translate-y-2;
  }
  
  .icon-container {
    @apply flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full;
  }
  </style>
  