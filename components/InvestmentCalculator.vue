<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// Base investment values
const minInvestment = 100000
const maxInvestment = 10000000
const defaultInvestment = 1237000

const investmentAmount = ref(defaultInvestment)
const frequency = ref('Weekly')
const timeframe = ref('5 years ago')

const frequencyOptions = ['Weekly', 'Monthly', 'Yearly', 'One Time']
const timeframeOptions = ['Last year', '3 years ago', '5 years ago']
const sliderPosition = ref(((defaultInvestment - minInvestment) / (maxInvestment - minInvestment)) * 100)

// Format currency for display
// const formatCurrency = (value: number) => {
//   return new Intl.NumberFormat('en-NG', {
//     style: 'decimal',
//     maximumFractionDigits: 0
//   }).format(value)
// }

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(value);
};

// Format input value for display
const formattedInput = computed(() => {
  return formatCurrency(investmentAmount.value)
})

// Update investment amount when slider moves
watch(sliderPosition, (newValue) => {
  const calculatedAmount = Math.round(
    minInvestment + (newValue / 100) * (maxInvestment - minInvestment)
  )
  investmentAmount.value = calculatedAmount
})

// Handle input changes with currency formatting
const handleInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  // Remove all non-numeric characters
  const numericValue = input.value.replace(/[^0-9]/g, '')
  const parsedValue = parseInt(numericValue) || minInvestment
  
  // Constrain value between min and max
  const constrainedValue = Math.min(Math.max(parsedValue, minInvestment), maxInvestment)
  investmentAmount.value = constrainedValue
  
  // Update slider position
  sliderPosition.value = ((constrainedValue - minInvestment) / (maxInvestment - minInvestment)) * 100
}

const calculateReturns = computed(() => {
  const baseMultiplier = sliderPosition.value / 25
  let frequencyMultiplier = 1

  switch (frequency.value) {
    case 'Weekly':
      frequencyMultiplier = 52
      break
    case 'Monthly':
      frequencyMultiplier = 12
      break
    case 'Yearly':
      frequencyMultiplier = 1
      break
    case 'One Time':
      frequencyMultiplier = 0.5
      break
  }

  const years = timeframe.value === 'Last year' ? 1 : 
                timeframe.value === '3 years ago' ? 3 : 5

  const totalReturn = investmentAmount.value * baseMultiplier * frequencyMultiplier * years
  const bankReturn = investmentAmount.value * 0.02 * years // Assuming 2% bank interest

  return {
    total: Math.round(totalReturn),
    earned: Math.round(totalReturn - investmentAmount.value),
    bankReturn: Math.round(bankReturn)
  }
})
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 bg-white">
    <h1 class="text-3xl md:text-5xl font-medium text-navy-900 text-center mb-12">
      You can go to sleep, 
      but your money shouldn’t.
    </h1>

    <div class="space-y-8">
      <!-- Investment Input Section -->
      <div class="space-y-2">
        <p class="text-gray-600 text-lg text-center">If you invested</p>
        <div class="relative">
          <!-- <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span> -->
          <input
            type="text"
            :value="formattedInput"
            @input="handleInputChange"
            class="w-full text-7xl text-center font-medium text-navy-900 p-2 pl-8 border-none border-gray-200 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <!-- Frequency and Timeframe Selection -->
      <div class="flex flex-wrap justify-center items-center gap-4">
        <div class="relative inline-block">
          <select
            v-model="frequency"
            class="appearance-none bg-blue-50 text-blue-500 px-4 py-2 pr-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="option in frequencyOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div class="relative inline-block">
          <select
            v-model="timeframe"
            class="appearance-none bg-blue-50 text-blue-500 px-4 py-2 pr-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="option in timeframeOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Slider -->
      <div class="w-full">
        <input
          type="range"
          v-model="sliderPosition"
          min="0"
          max="100"
          class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      <!-- Results Section -->
      <div class="space-y-4">
        <p class="text-gray-600 text-lg text-center">Today, you'd have</p>
        <p class="text-6xl text-center font-medium text-navy-900">
          {{ formatCurrency(calculateReturns.total) }}
        </p>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <p class="text-blue-500 text-center">
            ₦{{ formatCurrency(calculateReturns.earned) }} earned in returns on InvestIQ
          </p>
        </div>

        <p class="text-sm text-gray-500 text-center">
          *In a bank, you'd earn ₦{{ formatCurrency(calculateReturns.bankReturn) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-navy-900 {
  color: #1a2b6d;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  cursor: pointer;
}
</style>