<script setup lang="ts">
import { ref, computed } from 'vue'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

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

interface Feature {
  id: number
  text: string
  icon: string
}

interface FormData {
  businessName: string
  email: string
  phone: string
  invoiceAmount: number
  businessType: string
}

const isLoading = ref(false)
const showSuccessModal = ref(false)
const showForm = ref(false) // ✅ This should be reactive and update on button click

const features = ref<Feature[]>([
  { id: 1, text: 'Access a minimum of ₦500,000', icon: '💰' },
  { id: 2, text: 'Enjoy competitive interest rates', icon: '📊' },
  { id: 3, text: 'Flexible loan tenures', icon: '⏱' },
  { id: 4, text: 'Renewal after expiration of facility', icon: '🔄' },
  { id: 5, text: 'Short term and self-liquidating', icon: '⚡' },
  { id: 6, text: 'Get 50% to 60% of six month average credit turnover', icon: '📈' }
])

const benefits = ref<Feature[]>([
  { id: 1, text: 'Easy access to working capital for business growth', icon: '🚀' },
  { id: 2, text: 'Flexible loan tenures', icon: '📅' },
  { id: 3, text: 'Highly competitive interest rates', icon: '💎' },
  { id: 4, text: 'Flexible loan repayment tied to net cash flow', icon: '💫' },
  { id: 5, text: 'Real-time support', icon: '🎯' }
])

// Form Validation Schema
const schema = yup.object({
  businessName: yup.string().required('Business name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  invoiceAmount: yup.number().min(500000, 'Minimum amount is ₦500,000').required('Amount is required'),
  businessType: yup.string().required('Business type is required')
})

const { handleSubmit, errors, values } = useForm<FormData>({
  validationSchema: schema,
  initialValues: {
    businessName: '',
    email: '',
    phone: '',
    invoiceAmount: 0,
    businessType: ''
  }
})

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    showSuccessModal.value = true
    showForm.value = false // ✅ Close form after submission
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
})

// Animation logic
const target = ref(null)
const targetIsVisible = ref(false)

const onIntersect = ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
  targetIsVisible.value = isIntersecting
  if (isIntersecting) {
    animateCards()
  }
}

useIntersectionObserver(target, onIntersect)

const animateCards = () => {
  gsap.from('.feature-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
}
</script>


<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 p-8">
    <div ref="target" class="max-w-5xl mx-auto">
      <!-- Header Section with enhanced animation -->
      <div class="text-center mb-16">
        <h1 
          class="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 transform transition-all duration-700"
          :class="{ 'translate-y-0 opacity-100': targetIsVisible, '-translate-y-10 opacity-0': !targetIsVisible }"
        >
          Supercharge Your Cash Flow
        </h1>
        <p 
          class="text-xl text-gray-700 mb-8 transform transition-all duration-700 delay-200"
          :class="{ 'translate-y-0 opacity-100': targetIsVisible, 'translate-y-10 opacity-0': !targetIsVisible }"
        >
          Transform your pending invoices into immediate working capital with our Invoice Discounting Facility.
        </p>
        
        <!-- Enhanced Apply Button -->
        <button 
          @click="showForm = true"
          class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
          :class="{ 'translate-y-0 opacity-100': targetIsVisible, 'translate-y-10 opacity-0': !targetIsVisible }"
        >
          <span class="flex items-center">
            Get Started Now
            <svg class="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Features Grid with Animation -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div 
          v-for="(section, idx) in [features, benefits]" 
          :key="idx"
          :id="`card-${idx}`"
          class="feature-card bg-white rounded-xl p-8 shadow-xl backdrop-blur-lg bg-opacity-90"
          @mouseenter="handleCardHover(idx)"
          @mouseleave="handleCardLeave(idx)"
        >
          <h2 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            {{ idx === 0 ? 'Our Features' : 'Why Choose Loan IQ?' }}
          </h2>
          <TransitionGroup
            tag="ul"
            @enter="animateFeature"
            class="space-y-4"
          >
            <li 
              v-for="item in section" 
              :key="item.id"
              class="flex items-center text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <span class="text-2xl mr-3">{{ item.icon }}</span>
              <span class="flex-1">{{ item.text }}</span>
            </li>
          </TransitionGroup>
        </div>
      </div>

          <!-- Application Form Modal -->
          <TransitionRoot appear :show="showForm" as="template">
        <Dialog as="div" @close="showForm = false" class="relative z-50">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <DialogPanel class="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl transition-all">
                <form @submit="onSubmit" class="space-y-4">
                  <h3 class="text-xl font-bold text-gray-900">Apply for Invoice Discounting</h3>
                  
                  <div v-for="field in ['businessName', 'email', 'phone', 'invoiceAmount', 'businessType']" :key="field">
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      {{ field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1') }}
                    </label>
                    <input 
                      :type="field === 'email' ? 'email' : field === 'invoiceAmount' ? 'number' : 'text'"
                      v-model="values[field]"
                      class="w-full px-3 py-2.5 border border-gray-300 rounded-md"
                      :class="{ 'border-red-500': errors[field] }"
                    />
                    <p v-if="errors[field]" class="text-sm text-red-600">{{ errors[field] }}</p>
                  </div>

                  <button type="submit" class="w-full bg-purple-600 text-white px-4 py-3 rounded-md hover:opacity-90">
                    Submit Application
                  </button>
                </form>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Success Modal -->
      <TransitionRoot appear :show="showSuccessModal" as="template">
        <Dialog as="div" @close="showSuccessModal = false" class="relative z-50">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <DialogPanel class="w-full max-w-md bg-white p-6 rounded-2xl text-center shadow-xl transition-all">
                <div class="mb-4">
                  <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-medium text-gray-900">Application Submitted!</h3>
                <p class="text-sm text-gray-500">We've received your application and will contact you shortly.</p>
                <button @click="showSuccessModal = false" class="mt-4 bg-blue-100 px-4 py-2 rounded-md hover:bg-blue-200">
                  Got it, thanks!
                </button>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>


