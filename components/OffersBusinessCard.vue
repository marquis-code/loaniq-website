<template>
  <main class="max-w-7xl mx-auto relative">
    <!-- Cards Grid -->
    <div class="grid lg:grid-cols-2 gap-10">
      <template v-for="(item, idx) in visibleItems" :key="idx">
        <NuxtLink :to="item.urlPath" data-aos="fade-up" class="relative blck w-full overflow-hidden rounded-2xl shadow-lg group">
          <!-- Background Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
          />

          <!-- Hover Overlay -->
          <div
            class="absolute inset-0 flex flex-col justify-center bg-[#284d79] text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="flex flex-col items-start space-x-2 mb-4">
              <div class="bg-blue-700 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                  <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold mt-2">{{ item.title }}</h3>
            </div>
            <p class="text-sm leading-6 text-start">{{ item.description }}</p>
            <div class="flex justify-start items-start">
              <NuxtLink :to="item.urlPath" class="mt-4 px-4 py-3 bg-white text-[#284d79] font-semibold rounded-xl hover:bg-gray-100">
                Learn More
              </NuxtLink>
            </div>
          </div>

          <!-- Card Content (Visible initially) -->
          <div class="absolute bottom-0 left-0 w-full bg-white p-4 space-y-2 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
            <h3 class="text-lg font-semibold text-gray-900 text-start">{{ item.title }}</h3>
            <p class="text-base text-gray-500 text-start">{{ item.description }}</p>
          </div>
        </NuxtLink>
      </template>
    </div>

    <!-- Navigation Arrows -->
    <div class="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center px-4 pointer-events-none">
      <button 
        v-show="currentPage < totalPages - 1"
        @click="nextPage" 
        @mouseenter="startBubbling('next')"
        @mouseleave="stopBubbling('next')"
        class="navigation-btn group pointer-events-auto"
        aria-label="Next page"
      >
        <div class="bubble-container" :class="{ 'is-bubbling': isNextBubbling }">
          <svg 
            class="navigation-icon"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" 
              stroke-width="2"
            />
            <path 
              d="M10.5 8.5L14.5 12L10.5 15.5" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
          <div v-for="n in 5" :key="n" class="bubble"></div>
        </div>
      </button>

      <button 
        v-show="currentPage > 0"
        @click="previousPage" 
        @mouseenter="startBubbling('prev')"
        @mouseleave="stopBubbling('prev')"
        class="navigation-btn group pointer-events-auto"
        aria-label="Previous page"
      >
        <div class="bubble-container" :class="{ 'is-bubbling': isPrevBubbling }">
          <svg 
            class="navigation-icon"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" 
              stroke-width="2"
            />
            <path 
              d="M13.5 8.5L9.5 12L13.5 15.5" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
          <div v-for="n in 5" :key="n" class="bubble"></div>
        </div>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface CardItem {
  title: string
  description: string
  image: string
  urlPath: string
}

// Import your images
import product1 from '@/assets/img/portfolio.jpg'
import product2 from '@/assets/img/personal-loans.jpg'
import product3 from '@/assets/img/hallmark.jpg'
import product4 from '@/assets/img/car-loan.jpg'
import product5 from '@/assets/img/working-capital.jpg'
import product6 from '@/assets/img/lpo.jpg'

// Card data
const items = ref<CardItem[]>([
  {
    title: 'Business Loans',
    description: 'Grow your business with up to ₦5 million Loan IQ MSMEs loans.',
    image: product1,
    urlPath: '/products/business-loans'
  },
  {
    title: 'Public Payroll Loan',
    description: 'As a public or civil servant, you can get a loan up to ₦5 million and pay back monthly within 3 to 24 months from the source.',
    image: product2,
    urlPath: '/products/public-payroll'
  },
  {
    title: 'Car-Backed Facility',
    description: 'Loan IQ offers you up to ₦5 million personal cash loan at a specified interest rate which you can secure with your vehicle.',
    image: product3,
    urlPath: '/products/car-backed-facility'
  },
  {
    title: 'Contract/LPO Finance Facility',
    description: 'Your project should not miss its delivery date. Apply for a short-term and self-liquidating loan to finance supply of materials or any other supply you need.',
    image: product4,
    urlPath: '/products/contract-lpo-financing'
  },
  {
    title: 'Invoice Discounting Facility',
    description: 'Do you need money to meet your working capital needs while awaiting payment for the LPO or contract you executed? We have got you covered',
    image: product5,
    urlPath: '/products/invoice-discounting'
  },
  {
    title: 'Asset Lease Finance',
    description: 'If you need money to acquire a brand new asset of your choice such as generator, real estate, etc., you can get a minimum of ₦100,000 from us without hassle.',
    image: product6,
    urlPath: '/products/asset-lease-finance'
  }
])

const itemsPerPage = 2
const currentPage = ref(0)
const isPrevBubbling = ref(false)
const isNextBubbling = ref(false)

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))
const visibleItems = computed(() => {
  const start = currentPage.value * itemsPerPage
  return items.value.slice(start, start + itemsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const startBubbling = (button: 'prev' | 'next') => {
  if (button === 'prev') {
    isPrevBubbling.value = true
  } else {
    isNextBubbling.value = true
  }
}

const stopBubbling = (button: 'prev' | 'next') => {
  if (button === 'prev') {
    isPrevBubbling.value = false
  } else {
    isNextBubbling.value = false
  }
}
</script>

<style scoped>
.navigation-btn {
  z-index: 10;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  backdrop-filter: blur(4px);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.navigation-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.navigation-icon {
  width: 3rem;
  height: 3rem;
  color: rgb(37, 99, 235);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .navigation-icon {
  transform: scale(1.1);
}

.bubble-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bubble {
  position: absolute;
  border-radius: 9999px;
  background-color: rgba(96, 165, 250, 0.3);
  pointer-events: none;
  opacity: 0;
  width: 10px;
  height: 10px;
}

.is-bubbling .bubble {
  animation: bubble 1s ease-in-out infinite;
}

.is-bubbling .bubble:nth-child(1) { animation-delay: 0s; }
.is-bubbling .bubble:nth-child(2) { animation-delay: 0.2s; }
.is-bubbling .bubble:nth-child(3) { animation-delay: 0.4s; }
.is-bubbling .bubble:nth-child(4) { animation-delay: 0.6s; }
.is-bubbling .bubble:nth-child(5) { animation-delay: 0.8s; }

@keyframes bubble {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translate(0, -20px) scale(1);
    opacity: 0;
  }
}

/* Positioned bubbles */
.is-bubbling .bubble:nth-child(1) { top: 50%; left: -20px; }
.is-bubbling .bubble:nth-child(2) { top: 0; left: 0; }
.is-bubbling .bubble:nth-child(3) { top: -20px; left: 50%; }
.is-bubbling .bubble:nth-child(4) { top: 0; right: 0; }
.is-bubbling .bubble:nth-child(5) { top: 50%; right: -20px; }
</style>