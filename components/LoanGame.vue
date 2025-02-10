<!-- <template>
      <div class="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-xl">
            <div class="">
  
              <div class="mb-8">
                <div class="mb-4 flex justify-between">
                  <h3 class="text-base font-medium text-gray-900">
                    How much do you need?
                  </h3>
                  <span class="text-lg font-medium text-gray-900">
                    {{ formatCurrency(amount) }}
                  </span>
                </div>
                <input type="range" v-model="amount" :min="500" :max="1000000" step="500"
                  class="w-full appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#284d79]" />
                <div class="mt-2 flex justify-between text-sm text-gray-600">
                  <span>500</span>
                  <span>1,000,000</span>
                </div>
              </div>


              <div class="mb-8">
                <div class="mb-4 flex justify-between">
                  <h3 class="text-base font-medium text-gray-900">
                    How long do you need it
                  </h3>
                  <span class="text-lg font-medium text-gray-900">
                    {{ duration }} {{ duration === 1 ? 'Month' : 'Months' }}
                  </span>
                </div>
                <input type="range" v-model="duration" :min="1" :max="12"
                  class="w-full appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#284d79]" />
                <div class="mt-2 flex justify-between text-sm text-gray-600">
                  <span>1 Month</span>
                  <span>12 Months</span>
                </div>
              </div>
            </div>

    
            <div class="mb-6 grid gap-4 sm:grid-cols-2">
              <div class="relative">
                <input type="text" :value="formatCurrency(amount)" readonly
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12" />
                <div class="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                </div>
              </div>
              <div class="relative">
                <input type="text" :value="`${duration} Month${duration > 1 ? 's' : ''}`" readonly
                  class="w-full rounded-lg border border-gray-300 px-4 py-3" />
                <div class="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>


            <div class="pt-6">
              <button
                class="w-full rounded-lg bg-[#284d79] px-4 py-4 text-center text-white hover:bg-[#284d79] focus:outline-none focus:ring-2 focus:ring-[#284d79] focus:ring-offset-2">
                View available offers
              </button>
            </div>
          </div>
</template>

<script setup lang="ts">
// import LoansHero from "../components/LoansHero.vue";
const amount = ref(500000)
const duration = ref(1)

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);
}
</script> -->


<template>
    <div>
      <!-- <button @click="$emit('close')" class="rounded-lg bg-[#284d79] px-4 py-2 text-white hover:bg-[#1f3a5a]">
        Open Loan Calculator
      </button> -->
  
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-xl relative">
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
  
          <div class="pt-10">
            <div class="mb-8">
              <div class="mb-4 flex justify-between">
                <h3 class="text-base font-medium text-gray-900">How much do you need?</h3>
                <span class="text-lg font-medium text-gray-900">{{ formatCurrency(amount) }}</span>
              </div>
              <input type="range" v-model="amount" :min="500" :max="1000000" step="500" 
                class="w-full appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#284d79]" />
              <div class="mt-2 flex justify-between text-sm text-gray-600">
                <span>500</span>
                <span>1,000,000</span>
              </div>
            </div>
  
            <div class="mb-8">
              <div class="mb-4 flex justify-between">
                <h3 class="text-base font-medium text-gray-900">How long do you need it?</h3>
                <span class="text-lg font-medium text-gray-900">{{ duration }} {{ duration === 1 ? 'Month' : 'Months' }}</span>
              </div>
              <input type="range" v-model="duration" :min="1" :max="12" 
                class="w-full appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#284d79]" />
              <div class="mt-2 flex justify-between text-sm text-gray-600">
                <span>1 Month</span>
                <span>12 Months</span>
              </div>
            </div>
          </div>
  
          <div class="mb-6 grid gap-4 sm:grid-cols-2">
            <div class="relative">
              <input type="text" :value="formatCurrency(amount)" readonly class="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12" />
            </div>
            <div class="relative">
              <input type="text" :value="`${duration} Month${duration > 1 ? 's' : ''}`" readonly class="w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
          </div>
  
          <div class="pt-6">
            <button class="w-full rounded-lg bg-[#284d79] px-4 py-4 text-center text-white hover:bg-[#1f3a5a]">
              View available offers
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    isModalOpen: {
        type: Boolean,
        default: false
    }
  })
  
//   const isModalOpen = ref(false);
  const amount = ref(500000);
  const duration = ref(1);
  const emit = defineEmits(['close'])
  
//   const openModal = () => {
//     isModalOpen.value = true;
//   };
  
  const closeModal = () => {
    emit('close')
    // isModalOpen.value = false;
  };
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
      currencyDisplay: 'symbol',
    }).format(value);
  };
  </script>
  