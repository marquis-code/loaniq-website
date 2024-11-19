<template>
    <section
    :style="{
      background: 'linear-gradient(180deg, rgb(97, 111, 164) 0%, rgb(18, 45, 118) 100%)'
    }"
      class="h-screen flex flex-col items-center justify-center bg-gradient-face p-6"
    >
      <!-- Face Scan Container -->
      <div class="relative flex items-center justify-center">
        <!-- Face Image -->
        <img
          src="@/assets/img/verify-face4.png"
          alt="Face Scanning"
          class="w-96 h-96 object-cover rounded-full border-8 border-teal-400"
        />
  
        <!-- Green Borders -->
        <div
          class="absolute top-0 left-0 w-12 h-20 border-4 border-green-400"
          style="border-right: none; border-bottom: none;"
        ></div>
        <div
          class="absolute top-0 right-0 w-12 h-20 border-4 border-green-400"
          style="border-left: none; border-bottom: none;"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-12 h-20 border-4 border-green-400"
          style="border-right: none; border-top: none;"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-12 h-20 border-4 border-green-400"
          style="border-left: none; border-top: none;"
        ></div>
      </div>
  
      <!-- Progress Percentage -->
      <p class="mt-6 text-blue-300 text-2xl font-bold">60%</p>
  
      <!-- Progress Bar -->
      <div class="w-full max-w-md mt-4 h-4 bg-gray-600 rounded-full overflow-hidden">
        <div
          class="h-full bg-progress-light"
          style="width: 60%;"
        ></div>
      </div>
  
      <!-- Scanning Text -->
      <p class="mt-2 text-blue-200 text-sm tracking-wide">SCANNING....</p>
    </section>
  </template>
  
  <script setup lang="ts"></script>
  