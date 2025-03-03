<template>
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <!-- Header Section with Animation -->
        <div class="max-w-3xl mx-auto text-center mb-16" v-motion 
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          <div class="inline-block p-2 bg-[#284d79] rounded-full text-teal-600 mb-4">
            <CurrencyIcon class="w-8 h-8" />
          </div>
          <!-- {{ content }} -->
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ content?.title || 'Need a Loan? Let\'s Talk!' }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ content?.description || 'Get quick and hassle-free loan. Apply today and take a step towards financial freedom!' }}
          </p>
        </div>
  
        <!-- Animated Illustration -->
        <div class="relative max-w-5xl mx-auto mb-16 hidden md:block" v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 300, duration: 800 } }">
          <div class="absolute -top-10 -left-10 w-20 h-20 text-teal-500 opacity-20">
            <CreditCardIcon class="w-full h-full" />
          </div>
          <div class="absolute -bottom-10 -right-10 w-20 h-20 text-teal-500 opacity-20">
            <BanknoteIcon class="w-full h-full" />
          </div>
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div v-if="content?.subject !== 'investment'" class="order-2 md:order-1" v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Financial Solutions Tailored For You</h2>
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon class="w-5 h-5 text-teal-600" />
                    </div>
                    <p class="text-gray-700">Quick approval process</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon class="w-5 h-5 text-teal-600" />
                    </div>
                    <p class="text-gray-700">Competitive interest rates</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon class="w-5 h-5 text-teal-600" />
                    </div>
                    <p class="text-gray-700">Flexible repayment options</p>
                  </div>
                </div>
              </div>
              <div v-else class="order-2 md:order-1" v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }">
                <!-- <h2 class="text-2xl font-bold text-gray-900 mb-4">Financial Solutions Tailored For You</h2> -->
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon class="w-5 h-5 text-teal-600" />
                    </div>
                    <p class="text-gray-700">Competitive interest rates</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon class="w-5 h-5 text-teal-600" />
                    </div>
                    <p class="text-gray-700">Hassle-free liquidation</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon class="w-5 h-5 text-teal-600" />
                    </div>
                    <p class="text-gray-700">Investment security</p>
                  </div>
                </div>
              </div>
              <!-- <div class="order-1 md:order-2 flex justify-center" v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }">
                <img src="/placeholder.svg?height=300&width=300" alt="Financial illustration" class="w-full max-w-xs" />
              </div> -->
            </div>
          </div>
        </div>
  
        <!-- Contact Info Cards with Animation -->
        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }">
            <div class="w-12 h-12 rounded-full bg-[#284d79] flex items-center justify-center mb-4">
              <MapPinIcon class="w-6 h-6 text-teal-600" />
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">Visit Us</h2>
            <p class="text-gray-600">5a Esugbayi Street</p>
            <p class="text-gray-600">Ikeja GRA, Lagos</p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <button @click="openDirections" class="text-teal-600 font-medium flex items-center gap-1 hover:text-teal-700 transition-colors">
                <MapIcon class="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
  
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }">
            <div class="w-12 h-12 rounded-full bg-[#284d79] flex items-center justify-center mb-4">
              <PhoneIcon class="w-6 h-6 text-teal-600" />
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">Call Us</h2>
            <p class="text-gray-600">+234 802 226 5398</p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <a href="tel:+2348022265398" class="text-teal-600 font-medium flex items-center gap-1 hover:text-teal-700 transition-colors">
                <PhoneCallIcon class="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
  
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }">
            <div class="w-12 h-12 rounded-full bg-[#284d79] flex items-center justify-center mb-4">
              <MailIcon class="w-6 h-6 text-teal-600" />
            </div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">Email Us</h2>
            <p class="text-gray-600">info@loaniq.ng</p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <a href="mailto:info@loaniq.ng" class="text-teal-600 font-medium flex items-center gap-1 hover:text-teal-700 transition-colors">
                <SendIcon class="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Map Section with Animation -->
        <div class="relative w-full rounded-xl overflow-hidden mb-16 shadow-lg border border-gray-200" 
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }">
          <client-only>
            <div class="w-full h-[400px]">
              <iframe 
                width="100%" 
                height="400" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=5a%20Esugbayi%20St,%20Ikeja%20GRA,%20Ikeja%20101233,%20Lagos,%20Nigeria+(LoanIQ)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <button 
              @click="openDirections"
              class="absolute bottom-6 left-6 bg-[#284d79]  text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <MapPinIcon class="w-5 h-5 mr-2" />
              <span>Get Directions</span>
              <ArrowRightIcon class="w-4 h-4 ml-2" />
            </button>
          </client-only>
        </div>
  
        <!-- Contact Form with Animation -->
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-full bg-[#284d79] flex items-center justify-center">
              <MessageSquareIcon class="w-5 h-5 text-teal-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Send us a message</h2>
          </div>
          
          <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name*</label>
              <div class="relative group">
                <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                <input
                  v-model="form.fullName"
                  type="text"
                  id="fullName"
                  class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="Enter your name..."
                  required
                />
              </div>
            </div>
  
            <div class="space-y-2">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number*</label>
              <div class="relative group">
                <PhoneIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                <input
                  v-model="form.phone"
                  type="tel"
                  id="phone"
                  class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="Enter your phone number..."
                  required
                />
              </div>
            </div>
  
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address*</label>
              <div class="relative group">
                <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="Enter your email..."
                  required
                />
              </div>
            </div>
  
            <!-- <div class="space-y-2">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number*</label>
              <div class="relative group">
                <PhoneIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                <input
                  v-model="form.phone"
                  type="tel"
                  id="phone"
                  class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="Enter your phone number..."
                  required
                />
              </div>
            </div> -->
            <div class="space-y-2">
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject*</label>
              <div class="relative group">
                <BriefcaseIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="Enter your message subject"
                  required
                />
              </div>
            </div>

            <div class="md:col-span-2 space-y-2">
              <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
              <div class="relative group">
                <MessageSquareIcon class="absolute left-3 top-3 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="4"
                  class="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
  
            <div class="md:col-span-2">
              <button
                type="submit"
                class="w-full bg-[#284d79] text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 font-medium"
                :class="{ 'opacity-75 cursor-wait': isSubmitting }"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Processing...</span>
                <span v-else>Submit Message</span>
                <ArrowRightIcon v-if="!isSubmitting" class="w-4 h-4" />
                <LoaderIcon v-else class="w-4 h-4 animate-spin" />
              </button>
            </div>
          </form>
  
          <!-- Success Message -->
          <div v-if="formSubmitted" class="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg text-green-700 flex items-start gap-3 animate-fadeIn">
            <CheckCircleIcon class="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p>Thank you for your request! Our team will contact you shortly to discuss your loan options.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios'
  import { 
    MapPinIcon, 
    PhoneIcon, 
    UserIcon, 
    MailIcon, 
    BriefcaseIcon, 
    ArrowRightIcon,
    CheckCircleIcon,
    CurrencyIcon,
    BanknoteIcon,
    CreditCardIcon,
    MapIcon,
    PhoneCallIcon,
    SendIcon,
    MessageSquareIcon,
    LoaderIcon
  } from 'lucide-vue-next';
  import { useMotion } from '@vueuse/motion';
  
  interface FormData {
    fullName: string;
    subject: string;
    email: string;
    phone: string;
    message: string;
  }

  const mailchimpUrl = 'https://loaniq.us15.list-manage.com/subscribe/post-json?u=3f4782f316a92f2fe056c2650&id=25a90ded26&c=?';
  
  const form = ref<FormData>({
    fullName: '',
    subject: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const isSubmitting = ref(false);
  const formSubmitted = ref(false);

  const props = defineProps({
    content: {
      type: Object,
      default: () => {}
    }
  })
  
  // Lagos coordinates
  const LAGOS_LOCATION = {
    address: '5a Esugbayi Street, Ikeja GRA, Lagos, Nigeria'
  };
  
  function openDirections() {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LAGOS_LOCATION.address)}`;
    window.open(url, '_blank');
  }
  
  async function handleSubmit() {
    isSubmitting.value = true;


    const params = new URLSearchParams();
      params.append('MMERGE9', form.value.fullName);
      params.append('EMAIL', form.value.email);
      params.append('PHONE', form.value.phone);
      params.append('MMERGE8', form.value.subject);
      params.append('MMERGE7', form.value.message);
    
    try {
      const response = await axios.get(mailchimpUrl, { params }).then(() => {
        formSubmitted.value = true;
      }).catch(() => {

      }).finally(() => {
        formSubmitted.value = false;
        isSubmitting.value = false;
      })
      // Simulate API call
      // await new Promise(resolve => setTimeout(resolve, 1500));
      
      // // Handle form submission here
      // console.log('Form submitted:', form.value);
      
      // // Show success message
      // formSubmitted.value = true;
      
      // // Reset form
      // form.value = {
      //   fullName: '',
      //   subject: '',
      //   email: '',
      //   phone: '',
      //   message: ''
      // };
      
      // // Hide success message after 5 seconds
      // setTimeout(() => {
      //   formSubmitted.value = false;
      // }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      isSubmitting.value = false;
    }
  }
  </script>
  
  <style>
  /* Animation keyframes */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
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
  </style>