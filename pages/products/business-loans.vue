<script setup lang="ts">
import { ref, onMounted } from 'vue';

const features = ref([
  { icon: "💰", text: "Enjoy competitive interest rates." },
  { icon: "⏱️", text: "Repay within 3 to 9 months." },
  { icon: "🔄", text: "Apply for renewal after clean-up." },
  { icon: "📊", text: "Access 50% to 60% of six month average credit turnover in business account." }
]);

const benefits = ref([
  { icon: "🚀", text: "Easy access to working capital for business growth" },
  { icon: "⌛", text: "Longer loan tenures" },
  { icon: "💸", text: "Flexible loan repayment tied to net cash flow" },
  { icon: "🎯", text: "Real-time support" }
]);

const activeSection = ref(0);
const showCalculator = ref(false);
const loanAmount = ref(100000);
const duration = ref(3);

const calculateMonthlyPayment = () => {
  // Simple calculation for demonstration
  const rate = 0.15; // 15% annual interest rate
  const monthlyRate = rate / 12;
  const months = duration.value;
  const principal = loanAmount.value;
  
  const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                 (Math.pow(1 + monthlyRate, months) - 1);
  
  return Math.round(payment);
};

const toggleCalculator = () => {
  showCalculator.value = !showCalculator.value;
};

const isInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

onMounted(() => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative">
      <!-- Hero Section -->
      <div class="min-h-screen flex items-center justify-center px-4 py-20">
        <div class="max-w-6xl mx-auto text-center">
          <div class="animate-float mb-8">
            <div class="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-full">
              <span class="text-4xl">💼</span>
            </div>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-title">
            We provide up to 
            <span class="text-gradient animate-gradient">₦5 million</span> 
            loan to MSMEs
          </h1>
          
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Get an advance loan facility between ₦100,000 and ₦5 million to boost 
            the working capital of your business for sustainable growth.
          </p>
          
          <div class="flex flex-wrap gap-4 justify-center">
            <button @click="activeSection = 1" 
                    class="primary-button group">
              <span class="relative z-10">Get a Business Loan</span>
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button @click="toggleCalculator" 
                    class="secondary-button">
              Calculate Loan
            </button>
          </div>
        </div>
      </div>

      <!-- Loan Calculator Modal -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="showCalculator" 
             class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" 
               @click="toggleCalculator"></div>
          <div class="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-gray-900">
            <h3 class="text-2xl font-bold mb-6">Loan Calculator</h3>
            
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2">Loan Amount (₦)</label>
                <input type="range" v-model="loanAmount" min="100000" max="5000000" step="50000"
                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                <div class="text-right text-sm text-gray-600">₦{{ loanAmount.toLocaleString() }}</div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Duration (months)</label>
                <input type="range" v-model="duration" min="3" max="9"
                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                <div class="text-right text-sm text-gray-600">{{ duration }} months</div>
              </div>
              
              <div class="p-4 bg-gray-100 rounded-lg">
                <div class="text-sm text-gray-600">Estimated Monthly Payment</div>
                <div class="text-2xl font-bold">₦{{ calculateMonthlyPayment().toLocaleString() }}</div>
              </div>
            </div>
            
            <button @click="toggleCalculator" 
                    class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>
      </Transition>

      <!-- Features Section -->
      <div class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            Our Features
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="(feature, index) in features" 
                 :key="index"
                 class="feature-card animate-on-scroll"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="text-3xl mb-4">{{ feature.icon }}</div>
              <p class="text-lg">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Choose Us Section -->
      <div class="py-20 px-4 bg-white/5">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            Why Choose Loan IQ?
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="(benefit, index) in benefits" 
                 :key="index"
                 class="benefit-card animate-on-scroll"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="text-3xl mb-4">{{ benefit.icon }}</div>
              <p class="text-lg">{{ benefit.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Eligibility Section -->
      <div class="py-20 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
            Who can Apply?
          </h2>
          
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 animate-on-scroll">
            <p class="text-xl mb-8">
              Must be a business owner in any sector of the economy
            </p>
            
            <button @click="activeSection = 1" 
                    class="primary-button group">
              <span class="relative z-10">Get a Business Loan</span>
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s linear infinite;
}

.primary-button {
  @apply relative px-8 py-3 text-black font-bold bg-yellow-400 rounded-lg 
         transform hover:scale-105 transition-all duration-300 overflow-hidden;
}

.secondary-button {
  @apply px-8 py-3 font-bold border-2 border-white/50 rounded-lg
         hover:bg-white/10 transform hover:scale-105 transition-all duration-300;
}

.feature-card, .benefit-card {
  @apply bg-white/10 backdrop-blur-lg rounded-xl p-6 
         transform hover:scale-105 transition-all duration-300;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-title {
  animation: slideUp 1s ease-out forwards;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>