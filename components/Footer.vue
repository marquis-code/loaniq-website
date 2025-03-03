<template>
  <footer class="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 overflow-hidden relative">
    <!-- Decorative Illustrations -->
    <div class="absolute top-0 left-0 w-32 h-32 text-teal-500/10 transform -translate-x-1/2 -translate-y-1/2">
      <CreditCardIcon class="w-full h-full" />
    </div>
    <div class="absolute bottom-0 right-0 w-40 h-40 text-teal-500/10 transform translate-x-1/4 translate-y-1/4">
      <BanknoteIcon class="w-full h-full" />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        <!-- Company Info -->
        <div v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <div class="flex items-center gap-2 mb-6">
            <!-- <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white">
              <CurrencyIcon class="w-6 h-6" />
            </div> -->
            <img class="h-16 w-full"  src="@/assets/img/logo.png" />
            <!-- <h2 class="text-2xl font-bold text-gray-900">LoanIQ</h2> -->
          </div>
          <p class="text-gray-600 mb-6">
            <!-- Providing quick and hassle-free loans to help you achieve financial freedom. -->
             <!-- Your financial partner of choice. -->
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <FacebookIcon class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <TwitterIcon class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <InstagramIcon class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <LinkedinIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index" 
              class="transform transition-transform duration-300 hover:translate-x-2">
              <a :href="link.url" class="text-gray-600 hover:text-teal-600 flex items-center gap-2 group">
                <ArrowRightIcon class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span>{{ link.label }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPinIcon class="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <p class="text-gray-600">5a Esugbayi Street</p>
                <p class="text-gray-600">Ikeja GRA, Lagos</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                <PhoneIcon class="w-4 h-4 text-teal-600" />
              </div>
              <a href="tel:+2348022265398" class="text-gray-600 hover:text-teal-600 transition-colors">
                +234 802 226 5398
              </a>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                <MailIcon class="w-4 h-4 text-teal-600" />
              </div>
              <a href="mailto:info@loaniq.ng" class="text-gray-600 hover:text-teal-600 transition-colors">
                info@loaniq.ng
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">Subscribe</h3>
          <p class="text-gray-600 mb-4">
            Stay updated with our latest offers and financial tips.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-3">
            <div class="relative">
              <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                v-model="email" 
                type="email" 
                placeholder="Your email address" 
                class="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <button 
              type="submit" 
              class="w-full bg-[#284d79] text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              :class="{ 'opacity-75 cursor-wait': isSubscribing }"
              :disabled="isSubscribing"
            >
              <span v-if="isSubscribing || loading">Processing...</span>
              <span v-else>Subscribe</span>
              <SendIcon v-if="!isSubscribing" class="w-4 h-4" />
              <LoaderIcon v-else class="w-4 h-4 animate-spin" />
            </button>
          </form>
          <div v-if="subscribed" class="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg text-green-700 text-sm flex items-start gap-2 animate-fadeIn">
            <CheckCircleIcon class="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>Thank you for subscribing to our newsletter!</p>
          </div>
        </div>
      </div>

      <!-- Animated Divider -->
      <div class="relative h-px bg-gray-200 mb-8 overflow-hidden">
        <div class="absolute top-0 left-0 h-full bg-teal-500 w-1/3 animate-flow"></div>
      </div>

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-200">
        <div class="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} LoanIQ. All rights reserved.
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="#" class="text-gray-500 hover:text-teal-600 text-sm transition-colors">Privacy Policy</a>
          <a href="#" class="text-gray-500 hover:text-teal-600 text-sm transition-colors">Terms of Service</a>
          <a href="#" class="text-gray-500 hover:text-teal-600 text-sm transition-colors">Cookie Policy</a>
          <a href="#" class="text-gray-500 hover:text-teal-600 text-sm transition-colors">Sitemap</a>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button 
      @click="scrollToTop" 
      class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#284d79] text-white shadow-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 z-50"
      :class="{ 'translate-y-0 opacity-100': showBackToTop, 'translate-y-20 opacity-0': !showBackToTop }"
    >
      <ArrowUpIcon class="w-5 h-5" />
    </button>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  ArrowRightIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  CurrencyIcon,
  BanknoteIcon,
  CreditCardIcon,
  SendIcon,
  CheckCircleIcon,
  LoaderIcon,
  ArrowUpIcon
} from 'lucide-vue-next';
import { useMotion } from '@vueuse/motion';

// Quick Links
const quickLinks = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about' },
  { label: 'Loan Product', url: '#loan-product' },
  { label: 'Investment Products', url: '#investment-products' },
  // { label: 'FAQs', url: '#faqs' },
  { label: 'Contact Us', url: '#contact' }
];

const MAILCHIMP_URL = "https://loaniq.us15.list-manage.com/subscribe/post-json?u=3f4782f316a92f2fe056c2650&id=25a90ded26&c=?";
// Newsletter subscription
const email = ref('');
const isSubscribing = ref(false);
const loading = ref(false);
const subscribed = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

async function subscribeNewsletter() {
  if (!email.value) return;
  
  isSubscribing.value = true;
  
  try {
    // // Simulate API call
    // await new Promise(resolve => setTimeout(resolve, 1500));
    
    // // Handle newsletter subscription
    // console.log('Newsletter subscription:', email.value);
    
    // // Show success message
    // subscribed.value = true;
    // email.value = '';
    
    // // Hide success message after 5 seconds
    // setTimeout(() => {
    //   subscribed.value = false;
    // }, 5000);
    const response = await axios.get(MAILCHIMP_URL, {
        params: { EMAIL: email.value },
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.result === 'success') {
        successMessage.value = 'Subscription successful! Check your email.';
        email.value = '';
      } else {
        errorMessage.value = response.data.msg || 'An error occurred.';
      }

  } catch (error) {
    errorMessage.value = 'Subscription failed. Please try again later.';
    // console.error('Error subscribing to newsletter:', error);
  } finally {
    loading.value = false;
    isSubscribing.value = false;
  }
}

// Back to top functionality
const showBackToTop = ref(false);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes flow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-flow {
  animation: flow 3s infinite linear;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Transitions for hover effects */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>