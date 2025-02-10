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
    image: '/path-to-john-image.jpg',
    quote: "LoanIQ’s Discount Note gave me the flexibility I needed while ensuring great returns!",
    name: "John Adeyemi",
    title: "Investor & Entrepreneur",
    companyLogo: "/path-to-investor-logo.png",
    extendedQuote: "I was looking for a short-term investment option with good returns, and the Discount Note delivered exactly that. The process was seamless, and the customer support was top-notch!"
  },
  {
    id: 2,
    image: '/path-to-emily-image.jpg',
    quote: "With Fixed Investment Note, I secured my financial future with stable returns.",
    name: "Emily Okonkwo",
    title: "Finance Analyst",
    companyLogo: "/path-to-finance-analyst-logo.png",
    extendedQuote: "I wanted a reliable investment option that provided predictable returns. LoanIQ’s Fixed Investment Note gave me peace of mind, knowing my money was working for me efficiently."
  },
  {
    id: 3,
    image: '/path-to-daniel-image.jpg',
    quote: "Target Savings Note helped me build my dream investment portfolio effortlessly!",
    name: "Daniel Obi",
    title: "Small Business Owner",
    companyLogo: "/path-to-business-owner-logo.png",
    extendedQuote: "I struggled with disciplined savings before LoanIQ. The Target Savings Note structured my savings while earning me competitive interest rates. Highly recommended!"
  },
  {
    id: 4,
    image: '/path-to-grace-image.jpg',
    quote: "Managing my investments and transactions has never been easier with LoanIQ Wallet.",
    name: "Grace Udoh",
    title: "Tech Consultant",
    companyLogo: "/path-to-tech-consultant-logo.png",
    extendedQuote: "I needed an all-in-one financial solution, and the LoanIQ Wallet delivered. From transactions to investment tracking, it simplifies everything seamlessly!"
  },
  {
    id: 5,
    image: '/path-to-michael-image.jpg',
    quote: "The Maximum Yield Note took my passive income game to the next level!",
    name: "Michael Eze",
    title: "Investor & Financial Coach",
    companyLogo: "/path-to-financial-coach-logo.png",
    extendedQuote: "I’ve explored various investment options, but nothing beats LoanIQ’s Maximum Yield Note in terms of returns and reliability. It’s a must-have for every smart investor!"
  },
  {
    id: 6,
    image: '/path-to-chisom-image.jpg',
    quote: "LoanIQ's Discount Note helped me grow my savings faster than I expected!",
    name: "Chisom Nwafor",
    title: "Freelancer",
    companyLogo: "/path-to-freelancer-logo.png",
    extendedQuote: "I wanted a short-term investment with better returns than my bank savings, and LoanIQ’s Discount Note delivered outstanding results. A game-changer!"
  },
  {
    id: 7,
    image: '/path-to-david-image.jpg',
    quote: "Fixed Investment Note gave me the security I needed for my long-term goals.",
    name: "David Okeke",
    title: "Software Engineer",
    companyLogo: "/path-to-software-engineer-logo.png",
    extendedQuote: "I was skeptical about investing, but LoanIQ’s Fixed Investment Note changed my perspective. It’s stable, secure, and consistently delivers great returns."
  },
  {
    id: 8,
    image: '/path-to-bola-image.jpg',
    quote: "I’ve never been this disciplined with saving until I started using LoanIQ’s Target Savings Note!",
    name: "Bola Hassan",
    title: "HR Manager",
    companyLogo: "/path-to-hr-manager-logo.png",
    extendedQuote: "I struggled to save consistently, but this product made it easy. I can now plan ahead and achieve my financial targets stress-free!"
  },
  {
    id: 9,
    image: '/path-to-mariam-image.jpg',
    quote: "LoanIQ Wallet is the best thing that happened to my investment journey!",
    name: "Mariam Yusuf",
    title: "E-commerce Business Owner",
    companyLogo: "/path-to-ecommerce-logo.png",
    extendedQuote: "Before LoanIQ, I juggled multiple platforms to manage my finances. Now, everything is in one place, and I have full control over my investments."
  },
  {
    id: 10,
    image: '/path-to-kunle-image.jpg',
    quote: "Maximum Yield Note is my secret to high returns with minimal effort!",
    name: "Kunle Alabi",
    title: "Real Estate Investor",
    companyLogo: "/path-to-real-estate-logo.png",
    extendedQuote: "I love how LoanIQ maximizes my investments. The returns are incredible, and the risk is well managed. Highly recommended for serious investors!"
  },
  {
    id: 11,
    image: '/path-to-ifeoma-image.jpg',
    quote: "I finally found an investment platform that fits my financial needs perfectly!",
    name: "Ifeoma Eze",
    title: "Medical Doctor",
    companyLogo: "/path-to-medical-doctor-logo.png",
    extendedQuote: "LoanIQ provides diverse investment options that cater to different goals. Whether short-term or long-term, there’s something for everyone."
  },
  {
    id: 12,
    image: '/path-to-segun-image.jpg',
    quote: "Safe, secure, and profitable—LoanIQ’s Fixed Investment Note is everything I needed!",
    name: "Segun Adebayo",
    title: "Banking Professional",
    companyLogo: "/path-to-banker-logo.png",
    extendedQuote: "I trust LoanIQ because they deliver exactly what they promise. No hidden fees, no unnecessary risks—just great investment opportunities."
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