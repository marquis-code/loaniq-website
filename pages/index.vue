<!-- pages/index.vue -->
<template>
  <main>
    <LoansHero />


    <section
  class="relative flex flex-col w-full h-[700px] bg-cover bg-fixed bg-center justify-center items-center"
  style="background-image: url('/test2.png');"
>

  <div class="absolute inset-0 bg-black/50"></div>


  <div  data-aos="fade-up" class="relative z-10 text-center px-4">
    <h1 data-aos="fade-up" class="text-white text-5xl font-semibold mt-20 max-w-2xl mx-auto mb-10">
      Ready to experience financial empowerment with Loan IQ Limited?
    </h1>

    <p data-aos="fade-up" class="text-center max-w-2xl mx-auto  text-xl my-10 text-white/90">
      Easily apply and secure a loan of up to 1 million naira within minutes, giving you swift access to the funds needed to achieve your goals.
    </p>

    <div class="w-full max-w-6xl mt-12 grid grid-cols-2 md:gridcols-3 lg:grid-cols-4 gap-6">
        <!-- <div v-for="(stat, index) in ['5000+ Businesses Funded', '₦10B+ Disbursed', '98% Customer Satisfaction']" 
             :key="index"
             class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
          <h3 class="text-2xl font-bold text-yellow-300">{{ stat }}</h3>
        </div> -->
        <div v-for="(stat, index) in ['Clear and Transparent Process', 'Quick and Easy Application', 'No Collateral Required', 'Real-time Support']" 
          :key="index"
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
        <h3 class="text-sm font-bold text-white">{{ stat }}</h3>
      </div>

      </div>
      
  </div>
    </section>

    <LogoClouds />

    <!-- <AdvertCta /> -->

    <LoanCalculator id="loan-calculator" />

    <HowItWorks />

    <BusinessMetrics />
    <TestimonialsScroll />

    <LocationMap id="contact" />

    <FrequentlyAskedQuestions id="faqs" />

  </main>
</template>

<script setup lang="ts">
import laptop from '@/assets/img/working-capital.jpg'
// import LoansHero from "../components/LoansHero.vue";
const amount = ref(500000)
const duration = ref(1)

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);
}

useHead({
  title: "Dynamic Page Title",
  meta: [
    { name: "description", content: "This is a specific page description" },
    { property: "og:title", content: "Dynamic Page Title" },
    { property: "og:description", content: "This is a specific page description for Open Graph" },
    { property: "og:image", content: "/page-specific-image.jpg" },
    { name: "twitter:title", content: "Dynamic Page Title" },
    { name: "twitter:description", content: "This is a specific page description for Twitter" },
    { name: "twitter:image", content: "/page-specific-image.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://yourwebsite.com/dynamic-page" }],
});

interface Testimonial {
    name: string
    title: string
    company: string
    companyColor: string
    quote: string
    image: string
    bio: string
  }
</script>

<style scoped>
.carousel-item {
  scroll-snap-align: start;
}
</style>