<template>
    <section id="loan-products" class="py-12 max-w-7xl mx-auto sm:py-16 px-6 lg:px-0 lg:py-20 text-center">
      <!-- Title Section -->
       <h1 data-aos="fade-up"  class="text-4xl font-bold text-gray-900 tracking-wider">Our Loan Product</h1>
      <!-- <h2 data-aos="fade-up" class="text-2xl font-bold text-gray-900 tracking-wider">Comprehensive range of loans for every financial chapter of your life</h2> -->
      <!-- <p data-aos="fade-up" class="mt-2 text-base  max-w-xl text-center mx-auto  text-gray-700">
        Whether you're looking for a loan to achieve your dreams or finance your business, our flexible solutions have you covered.
      </p> -->
  
      <div class="bg-white">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Public Payroll Loan</h2>
        <p class="mt-6 text-pretty text-lg/8 text-gray-300">As a public or civil servant, you can get a loan up to ₦5 million and pay back monthly within 3 to 24 months from the source</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <NuxtLink to="'/products/public-payroll" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</NuxtLink>
          <!-- <NuxtLink to="'/products/public-payroll" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></NuxtLink> -->
        </div>
      </div>
      <div class="relative mt-16 h-80 lg:mt-8">
        <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="@/assets/img/money-exchange.jpg" alt="App screenshot" width="1824" height="1080">
      </div>
    </div>
  </div>
</div>


      <!-- <div class="mt-12">
        <OffersBusinessCard />
      </div> -->
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
  