<template>
  <div class="loan-calculator bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center mb-8 text-indigo-900">Loan Calculator</h1>
      
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
        <div class="md:flex">
          <!-- Loan Input Section -->
          <!-- bg-[#1A322A] -->
          <div class="md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-indigo-500 to-[#284d79] text-white">
            <h2 class="text-2xl font-bold mb-6">Loan Details</h2>
            <div class="space-y-6">
              <div class="relative">
                <label class="block text-sm font-medium mb-1" for="loan-amount">Loan Amount (₦)</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-200">₦</span>
                  <input
                    id="loan-amount"
                    v-model="loanAmount"
                    type="text"
                    class="w-full pl-8 pr-4 py-2 bg-indigo-600 border border-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-indigo-300"
                    placeholder="Enter loan amount"
                    @input="formatLoanAmount"
                  />
                </div>
                <p v-if="parseFloat(loanAmount.replace(/,/g, '')) > 5000000" class="text-yellow-300 text-xs mt-1">
                  Maximum loan amount is ₦5,000,000
                </p>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1" for="loan-term">Loan Term (Months)</label>
                <div class="flex items-center">
                  <input
                    id="loan-term"
                    v-model="loanTerm"
                    type="range"
                    min="1"
                    max="24"
                    class="w-full h-2 bg-indigo-400 rounded-lg appearance-none cursor-pointer"
                  />
                  <span class="ml-3 w-12 text-center text-2xl font-bold">{{ loanTerm }}</span>
                </div>
                <p class="text-xs text-indigo-200 mt-1">Maximum term is 24 months</p>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Interest Rate</label>
                <div class="relative">
                  <input
                    v-model="interestRate"
                    type="text"
                    class="w-full pl-4 pr-8 py-2 bg-indigo-600 border border-indigo-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                    disabled
                  />
                  <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-indigo-300">%</span>
                </div>
              </div>
              
              <button 
                @click="calculateLoan"
                class="w-full bg-white text-indigo-600 font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Calculate Loan
              </button>
            </div>
          </div>
          
          <!-- Results Section -->
          <div class="md:w-1/2 p-6 md:p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Loan Summary</h2>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md">
                <p class="text-sm text-gray-600">Principal Amount</p>
                <p class="text-2xl font-bold text-indigo-600">₦{{ formatNumber(validLoanAmount) }}</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md">
                <p class="text-sm text-gray-600">Interest Payable</p>
                <p class="text-2xl font-bold text-indigo-600">₦{{ formatNumber(totalInterest) }}</p>
                <p class="text-xs text-gray-500">{{ interestRate }}% of principal</p>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md">
                <p class="text-sm text-indigo-600">Monthly Repayment</p>
                <p class="text-3xl font-extrabold text-indigo-600">₦{{ formatNumber(monthlyRepayment) }}</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md">
                <p class="text-sm text-gray-600">Total Repayment</p>
                <p class="text-2xl font-bold text-indigo-600">₦{{ formatNumber(totalRepayment) }}</p>
                <p class="text-xs text-gray-500">Principal + Interest</p>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md">
                <p class="text-sm text-blue-600">
                  <span class="font-medium">Max per month:</span> 
                  ₦{{ formatNumber(maxPerMonth) }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Repayment Schedule Button -->
        <div class="p-6 bg-gray-50 border-t border-gray-200">
          <button 
            @click="toggleRepaymentSchedule" 
            class="w-full bg-[#284d79] hover:bg-[#284d79] text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ showRepaymentSchedule ? 'Hide' : 'Show' }} Repayment Schedule
          </button>
        </div>
      </div>
      
      <!-- Repayment Schedule -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-if="showRepaymentSchedule" class="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Repayment Schedule</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(payment, index) in repaymentSchedule" :key="index" class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ payment.month }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">₦{{ formatNumber(payment.payment) }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">₦{{ formatNumber(payment.principal) }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">₦{{ formatNumber(payment.interest) }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">₦{{ formatNumber(payment.balance) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// State variables
const loanAmount = ref<string>('500000')
const loanTerm = ref<number>(24)
const interestRate = ref<number>(4.5)
const showRepaymentSchedule = ref<boolean>(false)

// Computed values
const validLoanAmount = computed(() => {
  const amount = parseFloat(loanAmount.value.replace(/,/g, ''))
  return isNaN(amount) ? 0 : Math.min(amount, 5000000)
})

const totalInterest = computed(() => {
  return (validLoanAmount.value * interestRate.value) / 100
})

// Fixed monthly repayment calculation: principal divided by months plus interest
// const monthlyRepayment = computed(() => {
//   if (loanTerm.value === 0) return 0
  
//   const principalPerMonth = validLoanAmount.value / loanTerm.value
//   const interestPerMonth = totalInterest.value / loanTerm.value
  
//   return principalPerMonth + interestPerMonth
// })

// Fixed total repayment calculation: principal plus total interest
// const totalRepayment = computed(() => {
//   return validLoanAmount.value + totalInterest.value
// })

const maxPerMonth = computed(() => {
  if (loanTerm.value === 0) return 0
  return validLoanAmount.value / loanTerm.value
})

const repaymentSchedule = ref<Array<{
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}>>([])

// Methods
const formatLoanAmount = () => {
  // Remove non-numeric characters
  let value = loanAmount.value.replace(/\D/g, '')
  
  // Format with commas
  if (value) {
    loanAmount.value = Number(value).toLocaleString('en-NG')
  }
}

const formatNumber = (value: number): string => {
  return value.toLocaleString('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })
}

// const calculateLoan = () => {
//   // Generate repayment schedule
//   const principal = validLoanAmount.value
//   const monthlyInterest = totalInterest.value / loanTerm.value
//   const monthlyPrincipal = principal / loanTerm.value
//   const monthlyPayment = monthlyPrincipal + monthlyInterest
  
//   const schedule = []
//   let remainingBalance = principal
  
//   for (let month = 1; month <= loanTerm.value; month++) {
//     remainingBalance -= monthlyPrincipal
    
//     schedule.push({
//       month,
//       payment: monthlyPayment,
//       principal: monthlyPrincipal,
//       interest: monthlyInterest,
//       balance: Math.max(0, remainingBalance)
//     })
//   }
  
//   repaymentSchedule.value = schedule
// }

// Fixed monthly repayment calculation: (principal / months) + total interest
const monthlyRepayment = computed(() => {
  if (loanTerm.value === 0) return 0
  
  const principalPerMonth = validLoanAmount.value / loanTerm.value
  // Interest is not divided by months - it's added in full to the monthly payment
  return principalPerMonth + totalInterest.value
})

// Total repayment is monthly repayment times number of months
const totalRepayment = computed(() => {
  return monthlyRepayment.value * loanTerm.value
})

const calculateLoan = () => {
  // Generate repayment schedule
  const principal = validLoanAmount.value
  const monthlyPrincipal = principal / loanTerm.value
  // Interest is not divided monthly - full interest is added to each payment
  const monthlyPayment = monthlyPrincipal + totalInterest.value
  
  const schedule = []
  let remainingBalance = principal
  
  for (let month = 1; month <= loanTerm.value; month++) {
    remainingBalance -= monthlyPrincipal
    
    schedule.push({
      month,
      payment: monthlyPayment,
      principal: monthlyPrincipal,
      interest: totalInterest.value,
      balance: Math.max(0, remainingBalance)
    })
  }
  
  repaymentSchedule.value = schedule
}

const toggleRepaymentSchedule = () => {
  showRepaymentSchedule.value = !showRepaymentSchedule.value
}

// Initialize
onMounted(() => {
  calculateLoan()
})
</script>

<style scoped>
.loan-calculator {
  font-family: 'Inter', sans-serif;
}

input[type="range"] {
  -webkit-appearance: none;
  @apply w-full h-2 rounded-lg bg-indigo-400;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply w-6 h-6 rounded-full bg-white border-4 border-indigo-500 cursor-pointer;
}

input[type="range"]::-moz-range-thumb {
  @apply w-6 h-6 rounded-full bg-white border-4 border-indigo-500 cursor-pointer;
}

/* Add smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Add a subtle animation to the result cards */
.bg-gray-50, .bg-indigo-50, .bg-blue-50 {
  transition: all 0.3s ease;
}

.bg-gray-50:hover, .bg-indigo-50:hover, .bg-blue-50:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>