<template>
  <div class="w-full max-w-7xl mx-auto px-4">
    <h1 class="text-4xl font-bold text-center mb-12">See how InvestIQ is helping investors</h1>
    
    <!-- Carousel Container -->
    <div class="overflow-hidden relative">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentTranslate}%)` }"
      >
        <!-- Cloned items for infinite scroll (end) -->
        <div 
          v-for="item in displayItems.slice(-2)"
          :key="`clone-start-${item.id}`"
          class="w-full md:w-1/2 flex-shrink-0 px-2"
        >
          <TestimonialCard :item="item" />
        </div>

        <!-- Original items -->
        <div 
          v-for="item in displayItems"
          :key="item.id"
          class="w-full md:w-1/2 flex-shrink-0 px-2"
        >
          <TestimonialCard :item="item" />
        </div>

        <!-- Cloned items for infinite scroll (start) -->
        <div 
          v-for="item in displayItems.slice(0, 2)"
          :key="`clone-end-${item.id}`"
          class="w-full md:w-1/2 flex-shrink-0 px-2"
        >
          <TestimonialCard :item="item" />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button 
        @click="prev"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center z-10 transition-transform hover:scale-110"
      >
        <Icon name="lucide:chevron-left" class="w-6 h-6 text-gray-600" />
      </button>

      <button 
        @click="next"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center z-10 transition-transform hover:scale-110"
      >
        <Icon name="lucide:chevron-right" class="w-6 h-6 text-gray-600" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import personal1 from '@/assets/img/portfolio.jpg'
import personal2 from '@/assets/img/lpo.jpg'
import personal3 from '@/assets/img/car-loan.jpg'
import personal4 from '@/assets/img/personal-loans.jpg'
import avatar from '@/assets/icons/male-user-avatar.svg'
import logo from '@/assets/img/logo.png'

interface TestimonialItem {
  id: number;
  image: string;
  quote: string;
  name: string;
  title: string;
  companyLogo: string;
  extendedQuote: string;
}

const items = ref<TestimonialItem[]>([
  {
    id: 1,
    image: personal1,
    quote: "I wanted something that brought everything into one place with good integrations.",
    name: "Vaughn Bethell",
    title: "Founder & CEO, REI Junkies",
    companyLogo: logo,
    extendedQuote: "The platform has revolutionized how we handle our real estate investments. The integrations make everything seamless."
  },
  {
    id: 2,
    image: personal2,
    quote: "I wanted something that brought everything into one place with good integrations.",
    name: "Vaughn Bethell",
    title: "Founder & CEO, REI Junkies",
    companyLogo: logo,
    extendedQuote: "The platform has revolutionized how we handle our real estate investments. The integrations make everything seamless."
  },
  {
    id: 3,
    image: personal3,
    quote: "I wanted something that brought everything into one place with good integrations.",
    name: "Vaughn Bethell",
    title: "Founder & CEO, REI Junkies",
    companyLogo: logo,
    extendedQuote: "The platform has revolutionized how we handle our real estate investments. The integrations make everything seamless."
  },  {
    id: 4,
    image: personal4,
    quote: "I wanted something that brought everything into one place with good integrations.",
    name: "Vaughn Bethell",
    title: "Founder & CEO, REI Junkies",
    companyLogo: logo,
    extendedQuote: "The platform has revolutionized how we handle our real estate investments. The integrations make everything seamless."
  },

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