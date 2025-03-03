<!-- <template>
    <div>  
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

                    <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold mb-2">Your Investment Strategy</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Risk Profile</p>
                <p class="font-bold">{{ getRiskProfile }}</p>
              </div>
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Expected Return</p>
                <p class="font-bold">{{ getExpectedReturn }}%</p>
              </div>
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Investment Style</p>
                <p class="font-bold">{{ getInvestmentStyle }}</p>
              </div>
            </div>
          </div>
  

          <div class="flex justify-center gap-4">
            <button
              @click="calculateInvestment"
              class="px-6 py-3 bg-[#C78D6B] hover:bg-[#B67D5B] text-white rounded-md transition-colors"
            >
              Invest Now
            </button>
            <button
              @click="resetGame"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
            >
              Reset
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
   -->

   <template>
    <div>  
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-xl relative">
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
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
  
          <!-- Loan Strategy -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold mb-2">Your Loan Strategy</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Total Repayment</p>
                <p class="font-bold">{{ formatCurrency(totalRepayment) }}</p>
              </div>
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Interest Amount</p>
                <p class="font-bold">{{ formatCurrency(interestAmount) }}</p>
              </div>
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Monthly Repayment</p>
                <p class="font-bold">{{ formatCurrency(dailyRepayment) }}</p>
              </div>
            </div>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex justify-center gap-4 mt-6">
            <!-- <button
              @click="calculateLoan"
              class="px-6 py-3 bg-[#C78D6B] hover:bg-[#B67D5B] text-white rounded-md transition-colors"
            >
              Calculate Loan
            </button> -->
            <button
              @click="resetValues"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
            >
              Reset
            </button>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    isModalOpen: {
      type: Boolean,
      default: false
    }
  })
  
  const amount = ref(500000);
  const duration = ref(1); // In months
  const interestRate = 0.1; // 10% per year
  const emit = defineEmits(['close'])
  
  const closeModal = () => {
    emit('close');
  };
  
  // Convert duration to days
  const durationInDays = computed(() => duration.value * 30);
  
  // Calculate total repayment amount
  const totalRepayment = computed(() => {
    return amount.value + (amount.value * interestRate * (durationInDays.value / 365));
  });
  
  // Calculate interest amount
  const interestAmount = computed(() => {
    return totalRepayment.value - amount.value;
  });
  
  // Calculate daily repayment amount
  const dailyRepayment = computed(() => {
    return totalRepayment.value / durationInDays.value;
  });
  
  // Format currency (Nigerian Naira)
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
      currencyDisplay: 'symbol',
    }).format(value);
  };
  
  const calculateLoan = () => {
    // Trigger recalculation (computed properties update automatically)
  };
  
  const resetValues = () => {
    amount.value = 500000;
    duration.value = 1;
  };
  </script>
  