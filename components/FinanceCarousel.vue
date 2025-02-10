<template>
  <div class="relative w-full max-w-6xl mx-auto px-4">

    <div class="overflow-hidden relative">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentTranslate}%)` }"
      >

        <div 
          v-for="item in displayItems.slice(-2)"
          :key="`clone-start-${item.id}`"
          class="w-full md:w-1/2 flex-shrink-0 p-4"
        >
          <CarouselCard :item="item" />
        </div>


        <div 
          v-for="item in displayItems"
          :key="item.id"
          class="w-full md:w-1/2 flex-shrink-0 p-4"
        >
          <CarouselCard :item="item" />
        </div>


        <div 
          v-for="item in displayItems.slice(0, 2)"
          :key="`clone-end-${item.id}`"
          class="w-full md:w-1/2 flex-shrink-0 p-4"
        >
          <CarouselCard :item="item" />
        </div>
      </div>
    </div>


    <button 
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>
    </button>

    <button 
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import investment from '@/assets/img/fixed-investment.jpg'
interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  extendedDescription: string;
}

const items = ref<CarouselItem[]>([
  {
    id: 1,
    image: investment,
    title: 'Discount Investment Note',
    description: 'Earn upfront interest on your investment with a Discount Note.',
    extendedDescription: 'Our Discount Note investment offers immediate value by providing upfront interest payments on your investment. Your principal amount is disbursed upon maturity, and you can choose to reinvest or keep it in your LoanIQ Wallet for further transactions. Invest a minimum of ₦10 million and earn up to 23% interest.'
  },
  {
    id: 2,
     image: investment,
    title: 'Target Savings Note',
    description: 'Save conveniently towards your financial goals with the Target Savings Note.',
    extendedDescription: 'LoanIQ’s Target Savings Note helps you build financial discipline by allowing you to set and achieve savings goals on your own terms. Lock in a minimum of ₦50,000 for a pre-defined date and earn competitive returns while preventing premature withdrawals.'
  },
  {
    id: 3,
    image: investment,
    title: 'LoanIQ Wallet Account',
    description: 'Deposit and withdraw anytime while earning high interest on your savings.',
    extendedDescription: 'With LoanIQ Wallet Account, enjoy the flexibility of making deposits and withdrawals while earning attractive returns. Maintain a minimum balance of ₦10,000 and earn up to 15% interest. The wallet also allows seamless bill payments, money transfers, and other financial transactions without hassle.'
  },
  {
    id: 4,
     image: investment,
    title: 'Maximum Yield Note',
    description: 'Grow your portfolio with compound interest and higher returns.',
    extendedDescription: 'Invest a lump sum and grow your funds over time with compound interest. The Maximum Yield Note provides significantly higher returns compared to similar fixed-income instruments. Invest a minimum of ₦1 million for a minimum tenor of 2 years and earn up to 26% in compounded interest, with flexible payout options.'
  },
  {
    id: 5,
     image: investment,
    title: 'Fixed Investment Note',
    description: 'Earn stable returns with our flexible Fixed Investment Note.',
    extendedDescription: 'If you prefer security and passive income, the Fixed Investment Note is for you. Invest a minimum of ₦100,000 for a defined period and earn up to 25% in accrued interest. Choose between monthly, quarterly, bi-annual, or end-of-term payouts, with flexible rollover options.'
  }
]);


// Ensure smooth infinite scrolling
const displayItems = computed(() => items.value);
const currentIndex = ref(0);
const isTransitioning = ref(false);
const currentTranslate = ref(0);

// Calculate item width (50% for 2 items view)
const itemWidth = 50;

const next = async () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  currentIndex.value++;
  currentTranslate.value = currentIndex.value * itemWidth;

  // Reset position if we've reached the end of cloned items
  if (currentIndex.value >= displayItems.value.length) {
    setTimeout(() => {
      isTransitioning.value = false;
      currentIndex.value = 0;
      currentTranslate.value = 0;
    }, 500); // Match this with CSS transition duration
  } else {
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const prev = async () => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentIndex.value--;
  currentTranslate.value = currentIndex.value * itemWidth;

  // Reset position if we've reached the start of cloned items
  if (currentIndex.value < 0) {
    setTimeout(() => {
      isTransitioning.value = false;
      currentIndex.value = displayItems.value.length - 1;
      currentTranslate.value = currentIndex.value * itemWidth;
    }, 500); // Match this with CSS transition duration
  } else {
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

</script>
