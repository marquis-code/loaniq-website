<template>
    <section class="bg-white dark:bg-gray-900">
      <div class="relative flex">
        <div class="min-h-screen lg:w-1/3"></div>
        <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
  
        <div
          class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0"
        >
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span class="text-blue-500">customers</span> <br /> are saying
          </h1>
  
          <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
            <div 
              class="flip-card w-full lg:w-[32rem] h-96"
              :class="{ 'flipped': isFlipped }"
              @mouseenter="isFlipped = true"
              @mouseleave="isFlipped = false"
            >
              <div class="flip-card-inner">
                <!-- Front of card (image) -->
                <div class="flip-card-front">
                  <img 
                    class="object-cover object-center w-full h-full rounded-lg" 
                    :src="testimonials[currentIndex].image" 
                    :alt="testimonials[currentIndex].name"
                  />
                </div>
                
                <!-- Back of card (video) -->
                <div class="flip-card-back rounded-lg bg-gray-800 flex items-center justify-center p-4">
                  <video 
                    class="w-full h-full rounded-lg" 
                    controls
                    :src="testimonials[currentIndex].video"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
  
            <div class="mt-8 lg:px-10 lg:mt-0">
              <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                {{ testimonials[currentIndex].title }}
              </h1>
  
              <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                "{{ testimonials[currentIndex].quote }}"
              </p>
  
              <h3 class="mt-6 text-lg font-medium text-blue-500">{{ testimonials[currentIndex].name }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ testimonials[currentIndex].position }}</p>
            </div>
          </div>
  
          <div class="flex items-center justify-between mt-12 lg:justify-start">
            <button
              title="previous testimonial"
              class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              @click="prevTestimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
  
            <button
              title="next testimonial"
              class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              @click="nextTestimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import testimonial1 from '@/assets/testimonials/testimonial1.mp4'
  import { ref } from 'vue'
  
  interface Testimonial {
    image: string
    video: string
    title: string
    quote: string
    name: string
    position: string
  }
  
  // Sample testimonials data
  const testimonials = ref<Testimonial[]>([
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    video: testimonial1,
    title: 'Doubled My Investment Portfolio',
    quote: `LoanIQ's investment advisory service helped me navigate Nigeria's dynamic market with confidence. Their personalized portfolio strategy increased my returns by 22% in just 6 months. Their mobile platform makes tracking investments effortless, even for a busy entrepreneur like myself. I've recommended LoanIQ to my entire business network.`,
    name: 'Adebayo Okonkwo',
    position: 'Founder, Lagos Tech Ventures'
  },
//   {
//     image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
//     video: testimonial2,
//     title: `Secure Diversification for My Family's Future`,
//     quote: `As a mother and professional, I needed an investment solution that balanced growth with security. LoanIQ's tiered investment packages allowed me to diversify across multiple sectors while maintaining liquidity for emergencies. Their quarterly performance forecasts have been remarkably accurate, and I've achieved 18% annual growth despite market volatility.`,
//     name: 'Amina Ibrahim',
//     position: 'Senior Manager at PanAfrican Banking Group'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
//     video: testimonial3,
//     title: 'From Novice to Confident Investor',
//     quote: 'Before LoanIQ, investment seemed intimidating. Their educational resources and intuitive platform transformed how I approach financial planning. Starting with just ₦50,000, their micro-investment options helped me build a diverse portfolio now worth over ₦2 million. Their customer support team answers my questions in minutes, not days.',
//     name: 'Chinedu Nwachukwu',
//     position: 'Civil Engineer, Abuja'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
//     video: testimonial4,
//     title: 'Agricultural Investment Success',
//     quote: `LoanIQ's sector-specific investment packages allowed our cooperative to invest in agricultural projects with minimized risk. Their analysis of seasonal patterns and commodities markets helped us achieve returns 31% above industry average. The transparency in fee structures and performance reporting has built tremendous trust among our members.`,
//     name: 'Folake Adeyemi',
//     position: 'Chairperson, Osun State Farmers Cooperative'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
//     video: testimonial5,
//     title: 'Retirement Planning Made Simple',
//     quote: `At 45, I was concerned about retirement security in Nigeria's changing economy. LoanIQ's financial advisors created a customized plan balancing property investments, equity funds, and government bonds. Their inflation-adjusted projections gave me clarity on my financial future, and their automated monthly investment system has been effortless to maintain.`,
//     name: 'Emmanuel Okafor',
//     position: 'Regional Director, Nigerian Medical Association'
//   }
]);
//   const testimonials = ref<Testimonial[]>([
//     {
//       image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//       video: testimonial1, // Replace with your video URL
//       title: 'Help us improve our productivity',
//       quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
//       name: 'Ronik Ederson',
//       position: 'Marketing Manager at AIRTEC SYSTEMS LIMITED'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
//       video: 'https://example.com/testimonial2.mp4', // Replace with your video URL
//       title: 'The software changed our business',
//       quote: 'Excepturi quaerat sint, enim soluta tempore minus aperiam consequatur repudiandae aliquid. Aperiam excepturi totam maiores, nostrum reiciendis voluptatem et laboriosam!',
//       name: 'Sarah Johnson',
//       position: 'CEO at TechFlow'
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
//       video: 'https://example.com/testimonial3.mp4', // Replace with your video URL
//       title: 'Increased our team efficiency by 80%',
//       quote: 'Nulla deserunt exercitationem quibusdam provident rerum. In eos laboriosam rem, voluptates ad minima quae dolorem perferendis atque nostrum dignissimos.',
//       name: 'Michael Chen',
//       position: 'Development Lead at InnoTech'
//     }
//   ])
  
  const currentIndex = ref(0)
  const isFlipped = ref(false)
  
  const nextTestimonial = () => {
    // Reset flip state when changing testimonials
    isFlipped.value = false
    
    // Add animation class for transition
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
    }, 300)
  }
  
  const prevTestimonial = () => {
    // Reset flip state when changing testimonials
    isFlipped.value = false
    
    // Add animation class for transition
    setTimeout(() => {
      currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
    }, 300)
  }
  </script>
  
  <style scoped>
  /* Flip card effect */
  .flip-card {
    perspective: 1000px;
    transition: transform 0.6s;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
  }
  
  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    .flip-card {
      height: 300px;
    }
  }
  
  /* Slide transition animation */
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  </style>