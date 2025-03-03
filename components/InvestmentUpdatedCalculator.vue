<template>
  <div class="max-w-4xl mx-auto p-6 font-sans">\
    <!-- Rate Card Modal -->
    <div v-if="showRateCard" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-navy-700">Investment Rate Card.</h2>
          <button @click="showRateCard = false" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th colspan="2" class="border border-gray-300 p-3 text-left">Amount (In NGN)</th>
                <th colspan="3" class="border border-gray-300 p-3 text-center">Tenor (days)</th>
              </tr>
              <tr>
                <th class="border border-gray-300 p-3">From</th>
                <th class="border border-gray-300 p-3">To</th>
                <th class="border border-gray-300 p-3 text-center">90 Days</th>
                <th class="border border-gray-300 p-3 text-center">180 Days</th>
                <th class="border border-gray-300 p-3 text-center">365 Days</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rate, index) in rateTable" :key="index">
                <td class="border border-gray-300 p-3">{{ formatCurrency(rate.from) }}</td>
                <td class="border border-gray-300 p-3">{{ formatCurrency(rate.to) }}</td>
                <td class="border border-gray-300 p-3 text-center">{{ rate.rates[0] }}%</td>
                <td class="border border-gray-300 p-3 text-center">{{ rate.rates[1] }}%</td>
                <td class="border border-gray-300 p-3 text-center">{{ rate.rates[2] }}%</td>
              </tr>
              <tr>
                <td colspan="2" class="border border-gray-300 p-3">100,000,000 and Above</td>
                <td colspan="3" class="border border-gray-300 p-3 text-center">Management Approval</td>
              </tr>
              <tr>
                <td colspan="2" class="border border-gray-300 p-3">Monthly interest payment</td>
                <td colspan="3" class="border border-gray-300 p-3 text-center">-1.0%</td>
              </tr>
              <tr>
                <td colspan="2" class="border border-gray-300 p-3">Upfront interest payment</td>
                <td class="border border-gray-300 p-3 text-center">-1.25%</td>
                <td class="border border-gray-300 p-3 text-center">-2.0%</td>
                <td class="border border-gray-300 p-3 text-center">-2.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Main Calculator -->
    <div class="bg-white">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-navy-700 mb-2">
          You can go to sleep, but your money shouldn't.
        </h1>
        <button 
          @click="showRateCard = true" 
          class="text-sm text-navy-700 underline hover:text-navy-500 mt-2"
        >
          View Investment Rate Card
        </button>
      </div>

      <div class="mb-12">
        <p class="text-center text-gray-600 mb-2">If you invested</p>
        <div class="flex justify-center">
          <div class="relative inline-block">
            <input
              v-if="amountFocused"
              v-model="inputAmount"
              @input="handleAmountInput"
              @blur="finishAmountEdit"
              type="text"
              class="w-full text-center text-5xl md:text-6xl font-bold text-navy-700 py-2 focus:outline-none"
              ref="amountInput"
            />
            <div 
              v-else
              @click="startAmountEdit"
              class="text-5xl md:text-6xl font-bold text-navy-700 py-2 cursor-pointer"
            >
              ₦{{ formattedAmount }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <div class="relative">
          <select
            v-model="selectedTenor"
            class="appearance-none bg-blue-50 text-navy-700 px-6 py-2 pr-10 rounded-full focus:outline-none"
          >
            <option v-for="tenor in tenors" :key="tenor.value" :value="tenor.value">{{ tenor.label }}</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-4 h-4 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <input
          type="range"
          v-model.number="sliderValue"
          min="0"
          max="100"
          step="1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div class="mb-8">
        <p class="text-center text-gray-600 mb-2">Today, you'd have</p>
        <p class="text-center text-5xl md:text-6xl font-bold text-navy-700 mb-4">
          ₦{{ formatNumber(calculatedAmount) }}
        </p>
        <div class="bg-blue-50 p-4 rounded-lg text-center text-navy-700">
          <p>₦{{ formatNumber(calculatedReturns) }} earned in returns on InvestIQ</p>
        </div>
      </div>

      <div class="text-center text-gray-600 text-sm">
        *In a bank, you'd earn ₦{{ formatNumber(bankComparison) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'

// Rate table from the image - exactly matching your company's investment chart
const rateTable = [
  { from: 100000, to: 999999.99, rates: [20.00, 20.50, 21.00] },
  { from: 1000000, to: 9999999.99, rates: [21.00, 22.00, 23.00] },
  { from: 10000000, to: 49999999.99, rates: [22.00, 23.00, 24.00] },
  { from: 50000000, to: 99999999.99, rates: [25.00, 26.00, 27.00] }
]

// State
const amount = ref(100000)
const inputAmount = ref('')
const formattedAmount = ref('')
const amountFocused = ref(false)
const amountInput = ref<HTMLInputElement | null>(null)
const selectedTenor = ref(90)
const sliderValue = ref(50)
const showRateCard = ref(false)

// Options
const tenors = [
  { label: '90 days', value: 90 },
  { label: '180 days', value: 180 },
  { label: '365 days', value: 365 }
]

// Get applicable rate based on amount and tenor - strictly following your company's rate card
const getRate = (amount: number, tenor: number): number => {
  // Default to lowest rate
  let rate = 20.00
  
  // Find the tenor index (0 for 90 days, 1 for 180 days, 2 for 365 days)
  let tenorIndex = 0
  if (tenor >= 365) {
    tenorIndex = 2
  } else if (tenor >= 180) {
    tenorIndex = 1
  }
  
  // Find the applicable rate tier
  for (const tier of rateTable) {
    if (amount >= tier.from && amount <= tier.to) {
      rate = tier.rates[tenorIndex]
      break
    }
  }
  
  // For amounts above the highest tier but below 100M
  if (amount > rateTable[rateTable.length - 1].to && amount < 100000000) {
    rate = rateTable[rateTable.length - 1].rates[tenorIndex]
  }
  
  return rate // Return the rate without adjustment
}

// Calculate investment returns based on the formula: amount × rate × tenor / 365
const calculateInvestmentReturns = (
  amount: number,
  tenor: number
): { totalInvested: number; finalAmount: number; totalReturns: number } => {
  const rate = getRate(amount, tenor) / 100
  
  // Calculate returns using the formula: amount × rate × tenor / 365
  const returns = amount * rate * tenor / 365
  const finalAmount = amount + returns
  
  return {
    totalInvested: amount,
    finalAmount: finalAmount,
    totalReturns: returns
  }
}

// Computed values
const calculatedResults = computed(() => {
  return calculateInvestmentReturns(
    amount.value,
    selectedTenor.value
  )
})

const calculatedAmount = computed(() => calculatedResults.value.finalAmount)
const calculatedReturns = computed(() => calculatedResults.value.totalReturns)

const bankComparison = computed(() => {
  // Assuming bank rate is 2.1% (10% of the lowest investment rate)
  const bankRate = 0.021
  return amount.value * bankRate * selectedTenor.value / 365
})

// Format number with commas
function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-NG').format(Math.round(value))
}

// Format currency with NGN symbol
// function formatCurrency(value: number): string {
//   return new Intl.NumberFormat('en-NG', {
//     style: 'currency',
//     currency: 'NGN',
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0
//   }).format(value)
// }
function formatCurrency(value: number): string {
  return `₦${value.toLocaleString('en-NG', { useGrouping: true })}`;
}

// Handle amount input with real-time formatting
function handleAmountInput(event: Event) {
  const input = event.target as HTMLInputElement
  const cursorPosition = input.selectionStart
  const value = input.value.replace(/[^\d]/g, '')
  
  if (value) {
    const numberValue = parseInt(value)
    amount.value = numberValue
    inputAmount.value = formatNumber(numberValue)
    
    nextTick(() => {
      const newCursorPosition = cursorPosition + (inputAmount.value.length - input.value.length)
      input.setSelectionRange(newCursorPosition, newCursorPosition)
    })
  } else {
    amount.value = 0
    inputAmount.value = ''
  }
}

// Start editing amount
function startAmountEdit() {
  amountFocused.value = true
  inputAmount.value = amount.value.toString()
  
  nextTick(() => {
    if (amountInput.value) {
      amountInput.value.focus()
      amountInput.value.select()
    }
  })
}

// Finish editing amount
function finishAmountEdit() {
  amountFocused.value = false
  formattedAmount.value = formatNumber(amount.value)
}

// Watch slider to adjust amount
watch(sliderValue, (newValue) => {
  // Scale slider to range between 100,000 and 50,000,000
  const min = 100000
  const max = 50000000
  amount.value = min + (newValue / 100) * (max - min)
  formattedAmount.value = formatNumber(amount.value)
})

// Initialize formatted amount
onMounted(() => {
  formattedAmount.value = formatNumber(amount.value)
})
</script>

<style>
/* Custom styles */
.text-navy-700 {
  color: #1e3a8a;
}

.text-navy-500 {
  color: #3b82f6;
}

/* Custom range slider styling */
input[type="range"] {
  -webkit-appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #e5e7eb;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1e3a8a;
  cursor: pointer;
  border: 4px solid white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
}

input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1e3a8a;
  cursor: pointer;
  border: 4px solid white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

