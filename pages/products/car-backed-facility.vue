<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
  "Access facility between ₦500,000 and ₦5 million.",
  "Enjoy competitive interest rates.",
  "Repay within 1 to 3 months.",
  "Apply for renewal after clean-up",
  "Get 50% to 60% of the first sale value of your car."
]);

const whyChoose = ref([
  "Easy access to working capital for business growth",
  "Highly competitive interest rates",
  "Flexible loan repayment tied to net cash flow.",
  "Real-time support",
]);

const selectedFeature = ref(null);
const showModal = ref(false);

const applyNow = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const highlightFeature = (index: number) => {
  selectedFeature.value = index;
};

const resetFeature = () => {
  selectedFeature.value = null;
};
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-br from-blue-700 to-purple-600 text-white">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    
    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="n in 5" :key="n" 
           class="absolute animate-float rounded-full bg-white/10"
           :style="{
             width: `${Math.random() * 200 + 50}px`,
             height: `${Math.random() * 200 + 50}px`,
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`
           }">
      </div>
    </div>

    <div class="relative flex flex-col items-center justify-center px-6 py-20">
      <!-- Hero Section -->
      <Transition
        appear
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="opacity-0 -translate-y-12"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div class="text-center max-w-4xl">
          <div class="mb-8">
            <img src="@/assets/img/services3.jpg" alt="Trusted Banking" class="mx-auto rounded-full shadow-2xl border-4 border-yellow-300 animate-pulse" />
          </div>
          <h1 class="text-5xl  font-extrabold leading-tight mb-6">
            Are you faced with cash flow constraints in meeting deadlines, personal obligations and emergencies? <span class="text-yellow-300 animate-shimmer">Don’t fret!

            </span>
          </h1>
          <p class="mt-4 text-xl opacity-90 leading-relaxed">
            Apply to get up to ₦5 million personal cash loan at a specified interest rate and secure it with your vehicle.


          </p>
        </div>
      </Transition>

      <!-- Statistics Strip -->
      <div class="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(stat, index) in ['Over 2,000+ million Loans Disbursed ', 'Loan Processed Less than 12 Hours', 'Up to ₦5 ']" 
             :key="index"
             class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
          <h3 class="text-2xl font-bold text-yellow-300">{{ stat }}</h3>
        </div>
      </div>

      <!-- Features Section with Images -->
      <Transition
        appear
        enter-active-class="transition duration-1000 ease-out delay-300"
        enter-from-class="opacity-0 -translate-x-12"
        enter-to-class="opacity-100 translate-x-0"
      >
        <div class="mt-20 bg-white/95 backdrop-blur-md text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-6xl transform hover:scale-[1.02] transition-transform duration-500">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <img src="@/assets/img/portfolio.jpg" alt="Business Growth" class="rounded-2xl shadow-lg" />
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-6 text-blue-700">🚀 Features That Empower</h2>
              <ul class="space-y-4">
                <li v-for="(feature, index) in features" 
                    :key="index"
                    @mouseenter="highlightFeature(index)"
                    @mouseleave="resetFeature"
                    :class="{'scale-105 text-blue-600': selectedFeature === index}"
                    class="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-blue-50">
                  <span class="mr-3 text-green-500 text-xl">✔️</span>
                  <span class="leading-relaxed">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Why Choose Us Section -->
      <Transition
        appear
        enter-active-class="transition duration-1000 ease-out delay-500"
        enter-from-class="opacity-0 translate-x-12"
        enter-to-class="opacity-100 translate-x-0"
      >
        <div class="mt-12 bg-white/95 backdrop-blur-md text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-6xl">
          <div class="flex flex-col md:flex-row-reverse items-center gap-12">
            <div class="md:w-1/2">
              <img src="@/assets/img/personal-loans.jpg" alt="Customer Success" class="rounded-2xl shadow-lg" />
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-6 text-blue-700">💡 Why Choose Loan IQ?</h2>
              <ul class="space-y-4">
                <li v-for="(reason, index) in whyChoose" 
                    :key="index"
                    class="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-blue-50">
                  <span class="mr-3 text-blue-500 text-xl">⭐</span>
                  <span class="leading-relaxed">{{ reason }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>


            <!-- Features Section with Images -->
            <Transition
        appear
        enter-active-class="transition duration-1000 ease-out delay-300"
        enter-from-class="opacity-0 -translate-x-12"
        enter-to-class="opacity-100 translate-x-0"
      >
        <div class="mt-20 bg-white/95 backdrop-blur-md text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-6xl transform hover:scale-[1.02] transition-transform duration-500">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <img src="@/assets/img/portfolio.jpg" alt="Business Growth" class="rounded-2xl shadow-lg" />
            </div>
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold mb-6 text-blue-700">🚀 Eligibility</h2>
              <p>Anyone with a viable car can apply.
            </p>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Call to Action -->
      <div class="mt-20 text-center">
        <button
          @click="applyNow"
          class="group relative inline-flex items-center px-12 py-4 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-300 rounded-full group-hover:w-96 group-hover:h-96"></span>
          <span class="relative">Apply Now 🚀</span>
        </button>
      </div>

      <!-- Floating Apply Button -->
      <button
        @click="applyNow"
        class="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg text-lg transform hover:scale-110 active:scale-90 transition-transform"
      >
        Quick Apply 🚀
      </button>
    </div>

    <!-- Application Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Start Your Application</h3>
          <p class="text-gray-600 mb-6">Our team will get back to you within 24 hours.</p>
          <form class="space-y-4">
            <input type="text" placeholder="Full Name" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="email" placeholder="Email Address" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="tel" placeholder="Phone Number" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none" />
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Application
            </button>
          </form>
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.animate-float {
  animation: float 20s infinite;
}

.animate-shimmer {
  animation: shimmer 3s infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes shimmer {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>