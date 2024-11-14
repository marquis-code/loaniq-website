<template>
  <div class="p-6 max-w-4xl space-y-8 bg-white rounded-lg">
    <!-- Back Navigation -->
    <button @click="router.back()" class="text-gray-500 flex items-center space-x-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="#EEEFF2"/>
<path d="M19 23L12 16L19 9" stroke="#323740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
    <CoreBreadcrumb :items="breadcrumbItems" />

<section class="lg:flex gap-x-10 space-y-6 lg:space-y-0">
  <section class="lg:w-6/12">
<div class="border-b pb-3">
        <!-- Investment Title and Details -->
        <h2 class="text-xl font-semibold text-gray-800 mb-5">Flexi Grow Savings Note <span
        class="text-xs bg-[#EEEFF2] text-gray-600 px-3 py-2 rounded-full">8% Annual returns</span></h2>
    <p class="text-gray-600 text-sm leading-loose text-justify">
      The Flexi Grow Savings Note is a flexible financial product that allows investors to make deposits and withdrawals while enjoying high returns. With a minimum balance of N10,000, it offers the liquidity of a savings account and competitive interest rates that exceed those of traditional accounts. There’s no lock-in period, so investors can access their funds without penalties. Interest is calculated daily, maximizing earnings even with early withdrawals.
    </p>
</div>

    <!-- Benefits -->
    <div class="border-b pb-3">
      <h3 class="font-semibold text-lg mb-2">Benefits</h3>
      <div class="grid grid-cols-2 gap-4">
        <p class="text-sm text-gray-600 flex items-center gap-x-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_1859)">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                fill="#D80032" />
            </g>
            <defs>
              <clipPath id="clip0_0_1859">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          No lock-in period</p>
        <p class="text-sm text-gray-600 flex items-center gap-x-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_1859)">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                fill="#D80032" />
            </g>
            <defs>
              <clipPath id="clip0_0_1859">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Interest is calculated daily</p>
        <p class="text-sm text-gray-600 flex items-center gap-x-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_1859)">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                fill="#D80032" />
            </g>
            <defs>
              <clipPath id="clip0_0_1859">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          No early liquidation penalty</p>
        <p class="text-sm text-gray-600 flex items-center gap-x-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_1859)">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                fill="#D80032" />
            </g>
            <defs>
              <clipPath id="clip0_0_1859">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Minimum balance of N10,000</p>
      </div>
    </div>
</section>

<section class="lg:w-6/12">
      <!-- Form Section -->
      <div class="space-y-6">
      <div>
        <label class="text-[#7D8799] text-sm">Name This Investment For Identification</label>
        <input type="text" v-model="investmentName" placeholder="Rent Payment"
          class="w-full p-2 py-3.5 text-sm border border-gray-300 outline-none border-none bg-[#F4F5F7] rounded" />
      </div>
      <div>
        <label class="text-[#7D8799] text-sm">Frequency</label>
        <select v-model="frequency" class="w-full outline-none border-none p-2 py-3.5 text-sm border bg-[#F4F5F7] border-gray-300 rounded">
          <option>One off</option>
          <option>Monthly</option>
        </select>
      </div>

      <!-- Amount and ROI Section -->
      <div class="flex flex-col  justify-between gap-y-4 border-b pb-4 border-gray-100">
        <h3 class="font-semibold text-[#7D8799]">Your Amount (₦)</h3>
        <div class="flex items-center space-x-4">
          <button @click="decreaseAmount" class="">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 0C9.45431 0 0.5 8.95431 0.5 20C0.5 31.0457 9.45431 40 20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.95431 31.5457 0 20.5 0ZM26.5 18V21.968H14.5V18H26.5Z" fill="#D9D9D9"/>
</svg>

          </button>
          <span class="text-2xl font-bold">{{ amount }}</span>
          <button @click="increaseAmount" class="">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 0C9.45431 0 0.5 8.95431 0.5 20C0.5 31.0457 9.45431 40 20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.95431 31.5457 0 20.5 0ZM22.62 13V18.248H27.9V22.12H22.62V27.4H18.748V22.12H13.5V18.248H18.748V13H22.62Z" fill="#DD3636"/>
</svg>

          </button>
        </div>
      </div>
      <p class="text-[#434E61] text-sm flex items-center gap-x-1">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 16H12.5V12H11.5M12.5 8H12.51M21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z" stroke="#687181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        Total ROI after the completed cycle <span
          class="text-[#10A83B] font-bold bg-[#EDFFF0] px-3 text-sm py-2 rounded-full">₦{{ roi }}</span></p>
    </div>

    <!-- Submit Button -->
<div class="pt-6">
  <button @click="router.push(`/dashboard/investments/explore-investments/4/summary`)" class="w-full py-3.5 bg-[#2F6D67] text-white rounded-md">Submit</button>
</div>
</section>
</section>

    <!-- Summary Modal -->
    <!-- <InvestSummaryModal v-if="showSummary" :investmentName="investmentName" :amount="amount"
      @close="showSummary = false" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const router = useRouter()

const investmentName = ref('Rent Payment');
const frequency = ref('One off');
const amount = ref(12000000);
const roi = ref(504236990); // Assume this is calculated based on the amount
const showSummary = ref(false);

function openSummaryModal() {
  showSummary.value = true;
}

function increaseAmount() {
  amount.value += 100000;
  roi.value = calculateROI();
}

function decreaseAmount() {
  if (amount.value > 0) amount.value -= 100000;
  roi.value = calculateROI();
}

function calculateROI() {
  return amount.value * 0.042; // Example calculation
}

const breadcrumbItems = ref([
  { label: 'Investments', path: '/dashboard/invest' },
  { label: 'Flexi Grow Savings Note' }
])
</script>