<!-- components/InvoiceFacility.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'

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
const showForm = ref(false)
const formData = ref<FormData>({
  businessName: '',
  email: '',
  phone: '',
  invoiceAmount: 0,
  businessType: ''
})
const formErrors = ref<Partial<Record<keyof FormData, string>>>({})

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

const validateForm = (): boolean => {
  formErrors.value = {}
  let isValid = true

  if (!formData.value.businessName) {
    formErrors.value.businessName = 'Business name is required'
    isValid = false
  }

  if (!formData.value.email) {
    formErrors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    formErrors.value.email = 'Invalid email format'
    isValid = false
  }

  if (!formData.value.phone) {
    formErrors.value.phone = 'Phone number is required'
    isValid = false
  }

  if (!formData.value.invoiceAmount || formData.value.invoiceAmount < 500000) {
    formErrors.value.invoiceAmount = 'Minimum amount is ₦500,000'
    isValid = false
  }

  if (!formData.value.businessType) {
    formErrors.value.businessType = 'Business type is required'
    isValid = false
  }

  return isValid
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  if (!validateForm()) return

  isLoading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    showSuccessModal.value = true
    showForm.value = false
    // Reset form
    formData.value = {
      businessName: '',
      email: '',
      phone: '',
      invoiceAmount: 0,
      businessType: ''
    }
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

// Animation logic
const target = ref(null)
const targetIsVisible = ref(false)
const currentHoveredCard = ref<number | null>(null)

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

const animateFeature = (el: Element, index: number) => {
  gsap.from(el, {
    opacity: 0,
    x: -50,
    delay: index * 0.1,
    duration: 0.6,
    ease: 'power2.out'
  })
}

const handleCardHover = (cardId: number) => {
  currentHoveredCard.value = cardId
  gsap.to(`#card-${cardId}`, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const handleCardLeave = (cardId: number) => {
  currentHoveredCard.value = null
  gsap.to(`#card-${cardId}`, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 p-8">
    <div ref="target" class="max-w-5xl mx-auto">
      <!-- Header Section -->
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
        
        <!-- Apply Button -->
        <button 
          @click="showForm = true"
          class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <span class="flex items-center">
            Get Started Now
            <svg class="w-5 h-5 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Features Grid -->
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
        <Dialog as="div" class="relative z-50" @close="showForm = false">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form @submit="handleSubmit" class="space-y-4">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Apply for Invoice Discounting</h3>
                    
                    <div v-for="(label, field) in {
                      businessName: 'Business Name',
                      email: 'Email Address',
                      phone: 'Phone Number',
                      invoiceAmount: 'Invoice Amount (₦)',
                      businessType: 'Business Type'
                    }" :key="field">
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        {{ label }}
                      </label>
                      <input 
                        :type="field === 'email' ? 'email' : field === 'invoiceAmount' ? 'number' : 'text'"
                        v-model="formData[field]"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        :class="{ 'border-red-500': formErrors[field] }"
                      />
                      <p v-if="formErrors[field]" class="mt-1 text-sm text-red-600">{{ formErrors[field] }}</p>
                    </div>

                    <button 
                      type="submit" 
                      class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                      :disabled="isLoading"
                    >
                      <span v-if="isLoading" class="flex items-center justify-center">
                        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                      <span v-else>Submit Application</span>
                    </button>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Success Modal -->
      <TransitionRoot appear :show="showSuccessModal" as="template">
        <Dialog as="div" class="relative z-50" @close="showSuccessModal = false">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <div class="mb-4">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 class="text-lg font-medium leading-6 text-gray-900 mb-2">Application Submitted!</h3>
                  <p class="text-sm text-gray-500 mb-4">
                    We've received your application and will contact you shortly.
                  </p>
                  <button
                    @click="showSuccessModal = false"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Got it, thanks!
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>







<style scoped>
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

/* Gradient text animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}
</style>