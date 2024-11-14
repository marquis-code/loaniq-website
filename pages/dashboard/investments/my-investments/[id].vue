<template>
  <main
    class="min-h-screen bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] to-[#D7F4D7] lg:p-6"
  >
    <div class="p-6 md:p-10 bg-white max-w-3xl rounded-lg shadow-sm">
      <!-- Title and Status -->
      <div class="mb-6">
        <button @click="router.back()" class="text-gray-400 mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="#EEEFF2"/>
<path d="M19 23L12 16L19 9" stroke="#323740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
       <div class="flex gap-x-6 items-center">
        <h1 class="text-2xl font-semibold text-gray-800">
          Flexi Grow Savings Note
        </h1>
        <div class="flex items-center bg-[#EDFFF0] px-4 py-1 rounded-full">
          <span
            class="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"
          ></span>
          <span class="text-sm font-medium text-green-600">Active</span>
        </div>
       </div>
        <p class="text-[#687181]">
          This investment offers the best of both worlds by combining liquidity
          and attractive returns on investment.
        </p>
      </div>

      <!-- Investment Summary -->
      <div class="border-t border-gray-200 mt-6 pt-6">
        <h2 class="text-gray-700 font-medium text-lg mb-4">
          Investment Summary
        </h2>
        <div
          class="bg-[#EEEFF2] rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"
        >
          <div>
            <p class="font-medium text-[#687181] text-sm">Investment amount</p>
            <p class="text-base font-semibold text-gray-900">₦208,000.00</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Investment type</p>
            <p class="text-base font-semibold text-gray-900">Premium Plus</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Interest rate</p>
            <p class="text-base font-semibold text-gray-900">16.0% per annum</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Duration</p>
            <p class="text-base font-semibold text-gray-900">6 Month(s)</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">
              Total payout balance
            </p>
            <p class="text-base font-semibold text-gray-900">₦5,045,300.25</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">
              Total payout accrued
            </p>
            <p class="text-base font-semibold text-gray-900">₦4,134,300.00</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">Monthly interest</p>
            <p class="text-base font-semibold text-gray-900">₦56,045,300.12</p>
          </div>
          <div>
            <p class="font-medium text-[#687181] text-sm">
              Expected payout date
            </p>
            <p class="text-base font-semibold text-gray-900">
              Tue Oct 31, 2023
            </p>
          </div>
        </div>
      </div>

      <!-- Benefits -->
      <div class="border-t border-gray-200 mt-6 pt-6">
        <h2 class="text-gray-700 font-medium text-lg mb-4">Benefits</h2>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center gap-2">
            <span class="text-red-500"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_1859)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                    fill="#D80032"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1859">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p class="text-gray-700">Personalized relationship management</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-red-500"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_1859)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                    fill="#D80032"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1859">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p class="text-gray-700">Free term life insurance policy</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-red-500"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_1859)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                    fill="#D80032"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1859">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p class="text-gray-700">Provision of knowledge-based services</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-red-500"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_1859)">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                    fill="#D80032"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1859">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p class="text-gray-700">FX advisory services</p>
          </div>
        </div>
      </div>

      <!-- Trending Investments -->
      <div class="border-t border-gray-200 mt-6 pt-6">
        <h2 class="text-gray-700 font-medium text-lg mb-4">
          Trending investments
        </h2>
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Investment Card 1 -->
          <div
            class="bg-[#D1EDEA] rounded-lg p-4 w-full md:w-64 flex items-center gap-4 shadow-sm"
          >
            <div class="w-8 h-8 bg-white rounded-full"></div>
            <div>
              <p class="font-semibold text-gray-800">LoanIQ Platinum</p>
              <p class="text-gray-500 text-sm">Credit investment</p>
            </div>
          </div>
          <!-- Investment Card 2 -->
          <div
            class="bg-[#F3EFC5] rounded-lg p-4 w-full md:w-64 flex items-center gap-4 shadow-sm"
          >
            <div class="w-8 h-8 bg-white rounded-full"></div>
            <div>
              <p class="font-semibold text-gray-800">Limited partnership</p>
              <p class="text-gray-500 text-sm">Credit investment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: "dashboard",
});
</script>
