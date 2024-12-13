<!-- components/MediaLogos.vue -->
<template>
    <div class="w-full bg-gray-50 py-8 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          <!-- Quartz -->
          <div class="w-32 lg:w-40">
            <img 
              src="@/assets/img/quartz-logo.svg" 
              alt="Quartz" 
              class="w-full h-auto opacity-60 hover:opacity-75 transition-opacity"
            />
          </div>
          
          <!-- Bloomberg -->
          <div class="w-40 lg:w-48">
            <img 
              src="@/assets/img/bloomberg-logo.png" 
              alt="Bloomberg" 
              class="w-full h-auto opacity-60 hover:opacity-75 transition-opacity"
            />
          </div>
          
          <!-- CNBC Africa -->
          <div class="w-24 lg:w-32">
            <img 
              src="@/assets/img/cnbc-africa-logo.png" 
              alt="CNBC Africa" 
              class="w-full h-auto opacity-60 hover:opacity-75 transition-opacity"
            />
          </div>
          
          <!-- Forbes -->
          <div class="w-32 lg:w-40">
            <img 
              src="@/assets/img/forbes-logo.png" 
              alt="Forbes" 
              class="w-full h-auto opacity-60 hover:opacity-75 transition-opacity"
            />
          </div>
          
          <!-- TechCrunch -->
          <div class="w-16 lg:w-20">
            <img 
              src="@/assets/img/tc-logo.png" 
              alt="TechCrunch" 
              class="w-full h-auto opacity-60 hover:opacity-75 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No props or complex logic needed for this component
  </script>