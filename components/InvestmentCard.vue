<!-- components/InvestmentCard.vue -->
<template>
    <div 
      class="group h-[400px] perspective-1000"
      @mouseenter="isFlipped = true"
      @mouseleave="isFlipped = false"
    >
      <div 
        class="relative h-full transition-transform duration-500 transform-style-preserve-3d"
        :class="{ 'rotate-y-180': isFlipped }"
      >
        <!-- Front of card -->
        <div class="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 left-4 flex gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-white text-xs font-medium rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
  
          <div class="p-6">
            <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
            <p class="text-gray-500 text-sm mb-4">{{ project.location }}</p>
            <p class="text-gray-700 mb-6">{{ project.description }}</p>
            
            <div class="relative pt-4">
              <div class="h-1 bg-gray-200 rounded-full">
                <div 
                  class="h-1 bg-emerald-500 rounded-full"
                  :style="`width: ${(project.raised / project.goal) * 100}%`"
                ></div>
              </div>
              <p class="mt-2">
                <span class="text-emerald-500 font-bold">${{ formatNumber(project.raised) }}</span>
                <span class="text-gray-500"> raised of ${{ formatNumber(project.goal) }}</span>
              </p>
            </div>
          </div>
        </div>
  
        <!-- Back of card -->
        <div class="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden rotate-y-180">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
            <p class="text-gray-500 text-sm mb-4">{{ project.location }}</p>
            <p class="text-gray-700 mb-6">{{ project.description }}</p>
            
            <div class="relative pt-4 mb-6">
              <div class="h-1 bg-gray-200 rounded-full">
                <div 
                  class="h-1 bg-emerald-500 rounded-full"
                  :style="`width: ${(project.raised / project.goal) * 100}%`"
                ></div>
              </div>
              <p class="mt-2">
                <span class="text-emerald-500 font-bold">${{ formatNumber(project.raised) }}</span>
                <span class="text-gray-500"> raised of ${{ formatNumber(project.goal) }}</span>
              </p>
            </div>
  
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Security Type</span>
                <span class="font-medium">{{ project.securityType }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Investment Multiple</span>
                <span class="font-medium">{{ project.investmentMultiple }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Maturity</span>
                <span class="font-medium">{{ project.maturity }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Min. Investment</span>
                <span class="font-medium">${{ formatNumber(project.minInvestment) }}</span>
              </div>
            </div>
  
            <button class="w-full mt-6 bg-pink-400 text-white py-3 rounded hover:bg-pink-500 transition-colors uppercase">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    project: {
      id: number;
      title: string;
      location: string;
      description: string;
      image: string;
      tags: string[];
      raised: number;
      goal: number;
      securityType: string;
      investmentMultiple: string;
      maturity: string;
      minInvestment: number;
    }
  }>();
  
  const isFlipped = ref(false);
  
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };
  </script>
  
  <style scoped>
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  </style>