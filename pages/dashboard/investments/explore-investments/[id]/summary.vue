<template>
    <div class="min-h-screen bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] lg:p-6 to-[#D7F4D7]">
    <div class="p-6 md:p-8 bg-white max-w-xl rounded-lg shadow-lg relative">
      <!-- Close Button -->
      <button class="absolute top-4 right-4 text-red-600 hover:text-red-800">
        <span class="text-2xl">&times;</span>
      </button>
  
      <!-- Title and Description -->
      <div class="mb-4">
        <h2 class="text-[#434E61] text-2xl font-semibold mb-2">Investment Summary</h2>
        <p class="text-[#687181] text-sm">
          <!-- {{ product?.description ?? 'Nil' }} -->
          This investment offers the best of both worlds by combining liquidity and attractive returns on investment.
        </p>
      </div>
  
      <!-- Investment Details -->
      <div class="border-t border-gray-200 mt-6 pt-6">
        <h2 class="text-gray-700 font-medium text-lg mb-2">
          Investment Summary
        </h2>
        <div
          class="bg-[#EEEFF2] rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"
        >
          <div>
            <p class="font-medium text-[#687181] text-sm">Investment amount</p>
            <p class="text-base font-semibold text-gray-900">{{ formatCurrency(payload.principal) ?? 'Nil' }}</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Investment type</p>
            <p class="text-base font-semibold text-gray-900">{{ product?.name ?? 'Nil' }}</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Interest rate</p>
            <p class="text-base font-semibold text-gray-900">{{product?.interestRate ?? 'Nil'}}% per annum</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Total payout accrued</p>
            <p class="text-base font-semibold text-gray-900">{{ computedRoi ?? 'Nil' }}</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">
              Total Tenor (months)
            </p>
            <p class="text-base font-semibold text-gray-900">{{ payload.tenor }} (months)</p>
          </div>
        </div>
      </div>
  
      <!-- Benefits -->
      <div class="my-6">
        <h3 class="text-gray-700 font-medium text-lg mb-2">Benefits</h3>
        <ul class="space-y-2 grid grid-cols-2 gap-4">
          <li v-for="(item, idx) in product?.benefits" :key="idx" class="flex items-center gap-2">
            <span class="text-red-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_520_12640)">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" fill="#D80032"/>
</g>
<defs>
<clipPath id="clip0_520_12640">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

            </span>
            <span class="text-gray-700">{{ item ?? 'Nil' }}</span>
          </li>
        </ul>
      </div>
  
      <!-- Action Buttons -->
      <div class="flex items-center gap-x-8 pt-6">
        <button @click="router.back()" class="text-[#2F6D67] hover:text-gray-900 flex items-center gap-2 font-medium">
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 15.8334L6.66667 10L12.5 4.16669" stroke="#2F6D67" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span> Make changes
        </button>
        <button @click="showPaymentModal = true" class="bg-[#2F6D67] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#2F6D67]">
          Complete order
        </button>
      </div>
    </div>
</div>
<ModalsPaymentModal :product="product" @close="showPaymentModal = false" v-if="showPaymentModal" />
  </template>
  
  <script setup lang="ts">
  import { useCreateInvestment } from '@/composables/modules/investment/create'
import { useFetchInvestmentProduct } from '@/composables/modules/investment/details';
import { calculate_roi } from '@/utils/calculateROI';
const { product, loading } = useFetchInvestmentProduct();
import { formatCurrency } from '@/utils/currencyUtils';
const { payload } = useCreateInvestment()
  const showPaymentModal = ref(false)
  const router = useRouter()
  const roi = ref({})

const computedRoi = computed(() => {
  const principal =  Number(payload.value.principal) || 0;
  const annual_rate = Number(product?.value?.interestRate) / 100 || 0; // Ensure `annual_rate` is a number
  const days = Number(payload?.value?.tenor) || 0; // Ensure `days` is a number
  const roi = calculate_roi(Number(principal), annual_rate, days);
  return formatCurrency(roi)
})

 definePageMeta({
    layout: 'dashboard',
   //  middleware: 'auth'
 })
  </script>