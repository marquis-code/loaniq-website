<template>
    <div class="relative w-full overflow-x-scroll px-4 py-8">
      <div
        ref="carouselRef"
        class="flex transition-transform duration-300 ease-out space-x-6"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="relative flex-shrink-0 w-full md:w-[400px] h-[500px] rounded-2xl overflow-x-scroll cursor-pointer shadow-lg transform transition-transform hover:scale-[1.02]"
          @click="showProfile(testimonial)"
        >
          <img
            :src="testimonial.image"
            :alt="testimonial.name"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <!-- <p class="text-xl font-medium mb-6 leading-relaxed">
              "{{ testimonial.quote }}"
            </p> -->
            <div>
              <h3 class="font-semibold text-lg">{{ testimonial.name }}</h3>
              <p class="text-sm">
                {{ testimonial.title }}
                <span :class="`text-${testimonial.companyColor}`">{{ testimonial.company }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Carousel Navigation Dots -->
      <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        <button
          v-for="(_, index) in totalPages"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentPage === index ? 'bg-white w-4' : 'bg-white/50'"
          @click="goToPage(index)"
        />
      </div>
  
      <!-- Profile Modal -->
      <Teleport to="body">
        <div
          v-if="selectedProfile"
          class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          @click="selectedProfile = null"
        >
          <div
            class="bg-white rounded-2xl p-6 max-w-lg w-full"
            @click.stop
          >
            <img
              :src="selectedProfile.image"
              :alt="selectedProfile.name"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h2 class="text-2xl font-bold text-center mb-2">{{ selectedProfile.name }}</h2>
            <p class="text-center text-gray-600 mb-4">
              {{ selectedProfile.title }} at
              <span :class="`text-${selectedProfile.companyColor}`">{{ selectedProfile.company }}</span>
            </p>
            <p class="text-gray-700 mb-4 text-justify h-72 overflow-auto leading-relaxed">{{ selectedProfile.bio }}</p>
            <button
              class="w-full bg-gray-900 text-white rounded-lg py-3 hover:bg-gray-800"
              @click="selectedProfile = null"
            >
              Close
            </button>
          </div>
        </div>
      </Teleport>
    </div>
  </template>
  
  <script setup lang="ts">
  import  user from '@/assets/img/test2.png'
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  interface Testimonial {
    name: string
    title: string
    company: string
    companyColor: 'purple-500',
    quote: string
    image: string
    bio: string
  }
  
  const props = defineProps({
    testimonials: {
        type: Array,
        default: () => []
    }
  })
//   const testimonials: Testimonial[] = [
//     {
//       name: 'Tina Yards',
//       title: 'VP of Sales',
//       company: 'Protocol',
//       companyColor: 'purple-500',
//       quote: 'Thanks to Radiant, we\'re finding new leads that we never would have found with legal methods.',
//       image: user,
//       bio: 'Tina has over 15 years of experience in sales leadership and has been instrumental in Protocol\'s growth.',
//     },
//     {
//       name: 'Conor Neville',
//       title: 'Head of Customer Success',
//       company: 'TaxPal',
//       companyColor: 'blue-500',
//       quote: 'Radiant made undercutting all of our competitors an absolute breeze.',
//       image: user,
//     //   image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.05.49%E2%80%AFAM-CtSZ34yxvOOcQ7OR5yP5jDFcjQfv1J.png',
//       bio: 'Conor leads the customer success team at TaxPal, ensuring clients get the most value from their services.',
//     },
//     {
//       name: 'Amy Chase',
//       title: 'Head of GTM',
//       company: 'Pocket',
//       companyColor: 'pink-500',
//       quote: 'We closed a deal in literally a few minutes because we knew their exact budget.',
//       image: user,
//     //   image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.05.49%E2%80%AFAM-CtSZ34yxvOOcQ7OR5yP5jDFcjQfv1J.png',
//       bio: 'Amy specializes in go-to-market strategy and has helped Pocket expand into new markets globally.',
//     },
//     {
//       name: 'Veronica Winton',
//       title: 'CSO',
//       company: 'Planeteria',
//       companyColor: 'green-500',
//       quote: 'We\'ve managed to poach our main competitor\'s clients in 6 months.',
//       image: user,
//     //   image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.05.49%E2%80%AFAM-CtSZ34yxvOOcQ7OR5yP5jDFcjQfv1J.png',
//       bio: 'Veronica brings strategic vision to Planeteria as their Chief Strategy Officer.',
//     },
//     {
//       name: 'Tina Yards',
//       title: 'VP of Sales',
//       company: 'Protocol',
//       companyColor: 'purple-500',
//       quote: 'Thanks to Radiant, we\'re finding new leads that we never would have found with legal methods.',
//       image: user,
//       bio: 'Tina has over 15 years of experience in sales leadership and has been instrumental in Protocol\'s growth.',
//     },
//     {
//       name: 'Conor Neville',
//       title: 'Head of Customer Success',
//       company: 'TaxPal',
//       companyColor: 'blue-500',
//       quote: 'Radiant made undercutting all of our competitors an absolute breeze.',
//       image: user,
//     //   image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.05.49%E2%80%AFAM-CtSZ34yxvOOcQ7OR5yP5jDFcjQfv1J.png',
//       bio: 'Conor leads the customer success team at TaxPal, ensuring clients get the most value from their services.',
//     },
//     {
//       name: 'Amy Chase',
//       title: 'Head of GTM',
//       company: 'Pocket',
//       companyColor: 'pink-500',
//       quote: 'We closed a deal in literally a few minutes because we knew their exact budget.',
//       image: user,
//     //   image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.05.49%E2%80%AFAM-CtSZ34yxvOOcQ7OR5yP5jDFcjQfv1J.png',
//       bio: 'Amy specializes in go-to-market strategy and has helped Pocket expand into new markets globally.',
//     },
//     {
//       name: 'Veronica Winton',
//       title: 'CSO',
//       company: 'Planeteria',
//       companyColor: 'green-500',
//       quote: 'We\'ve managed to poach our main competitor\'s clients in 6 months.',
//       image: user,
//     //   image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.05.49%E2%80%AFAM-CtSZ34yxvOOcQ7OR5yP5jDFcjQfv1J.png',
//       bio: 'Veronica brings strategic vision to Planeteria as their Chief Strategy Officer.',
//     },
//   ]
  
  const carouselRef = ref<HTMLElement | null>(null)
  const currentPage = ref(0)
  const selectedProfile = ref<Testimonial | null>(null)
  const touchStart = ref<number>(0)
  const touchEnd = ref<number>(0)
  const itemsPerPage = ref(3)
  
  const totalPages = computed(() => Math.ceil(props.testimonials.length / itemsPerPage.value))
  
  const handleTouchStart = (e: TouchEvent) => {
    touchStart.value = e.touches[0].clientX
  }
  
  const handleTouchMove = (e: TouchEvent) => {
    touchEnd.value = e.touches[0].clientX
  }
  
  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStart.value - touchEnd.value
  
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentPage.value < totalPages.value - 1) {
        currentPage.value++
      } else if (diff < 0 && currentPage.value > 0) {
        currentPage.value--
      }
      updateCarouselPosition()
    }
  }
  
  const updateCarouselPosition = () => {
    if (carouselRef.value) {
      const offset = currentPage.value * (100 / itemsPerPage.value)
      carouselRef.value.style.transform = `translateX(-${offset}%)`
    }
  }
  
  const goToPage = (page: number) => {
    currentPage.value = page
    updateCarouselPosition()
  }
  
  const showProfile = (testimonial: Testimonial) => {
    selectedProfile.value = testimonial
  }
  
  const handleResize = () => {
    itemsPerPage.value = window.innerWidth >= 768 ? 3 : 1
    currentPage.value = 0
    updateCarouselPosition()
  }
  
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  .carousel-item {
    scroll-snap-align: start;
  }
  </style>
  
  