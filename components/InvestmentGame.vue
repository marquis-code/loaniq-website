<template>
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Game Header -->
        <div class="p-6 border-b">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-bold">Investment Adventure</h2>
            <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Game Content -->
        <div class="p-6 space-y-8">
          <!-- Game Stats -->
          <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div class="text-center">
              <p class="text-sm text-gray-600">Level</p>
              <p class="text-2xl font-bold" :class="{ 'text-green-600': isLevelUp }">{{ level }}</p>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-600">Score</p>
              <p class="text-2xl font-bold">{{ score }}</p>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-600">Returns</p>
              <p class="text-2xl font-bold text-[#C78D6B]">{{ formattedReturns }}</p>
            </div>
          </div>
  
          <!-- Investment Controls -->
          <div class="space-y-6">
            <!-- Investment Amount -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">
                Investment Amount
              </label>
              <div class="flex items-center gap-4">
                <input
                  type="range"
                  v-model="investment"
                  min="10000"
                  max="500000"
                  step="5000"
                  class="w-full"
                />
                <span class="text-sm font-mono whitespace-nowrap">
                  ₦{{ formatNumber(investment) }}
                </span>
              </div>
            </div>
  
            <!-- Investment Period -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">
                Investment Period (Years)
              </label>
              <div class="flex items-center gap-4">
                <input
                  type="range"
                  v-model="years"
                  min="1"
                  max="25"
                  step="1"
                  class="w-full"
                />
                <span class="text-sm font-mono whitespace-nowrap">
                  {{ years }} years
                </span>
              </div>
            </div>
  
            <!-- Risk Level -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">
                Risk Level
              </label>
              <div class="flex items-center gap-4">
                <input
                  type="range"
                  v-model="risk"
                  min="1"
                  max="5"
                  step="1"
                  class="w-full"
                />
                <span class="text-sm font-mono whitespace-nowrap">
                  Level {{ risk }}
                </span>
              </div>
            </div>
          </div>
  
          <!-- Investment Strategy -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-bold mb-2">Your Investment Strategy</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Risk Profile</p>
                <p class="font-bold">{{ getRiskProfile }}</p>
              </div>
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Expected Return</p>
                <p class="font-bold">{{ getExpectedReturn }}%</p>
              </div>
              <div class="bg-white p-4 rounded shadow-sm">
                <p class="text-sm text-gray-600">Investment Style</p>
                <p class="font-bold">{{ getInvestmentStyle }}</p>
              </div>
            </div>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex justify-center gap-4">
            <button
              @click="calculateInvestment"
              class="px-6 py-3 bg-[#C78D6B] hover:bg-[#B67D5B] text-white rounded-md transition-colors"
            >
              Invest Now
            </button>
            <button
              @click="resetGame"
              class="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
            >
              Reset
            </button>
          </div>
  
          <!-- Game Tips -->
          <div class="text-sm text-gray-600">
            <p class="text-center italic">
              {{ currentTip }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  
  // Game state
  const investment = ref(50000);
  const years = ref(5);
  const risk = ref(2);
  const score = ref(0);
  const level = ref(1);
  const returns = ref(0);
  const isLevelUp = ref(false);
  
  // Computed properties
  const formattedReturns = computed(() => {
    return `₦${formatNumber(returns.value)}`;
  });
  
  const getRiskProfile = computed(() => {
    const profiles = ['Conservative', 'Moderate', 'Balanced', 'Growth', 'Aggressive'];
    return profiles[risk.value - 1];
  });
  
  const getExpectedReturn = computed(() => {
    const baseReturn = 6.9;
    const riskPremium = (risk.value - 1) * 1.5;
    return (baseReturn + riskPremium).toFixed(1);
  });
  
  const getInvestmentStyle = computed(() => {
    if (years.value <= 5) return 'Short-term';
    if (years.value <= 15) return 'Medium-term';
    return 'Long-term';
  });
  
  // Game tips
  const tips = [
    'Higher risk can lead to higher returns, but manage it wisely!',
    'Long-term investments tend to be more stable.',
    'Diversifying your investment reduces risk.',
    'Consider your investment timeline carefully.',
    'Balance risk and return for optimal results.'
  ];
  
  const currentTip = computed(() => {
    return tips[Math.floor(Math.random() * tips.length)];
  });
  
  // Methods
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const calculateInvestment = () => {
    const baseReturn = 0.069; // 6.9% base return
    const riskMultiplier = risk.value * 0.5;
    const yearlyReturn = baseReturn + (riskMultiplier / 100);
    const newReturns = Math.round(investment.value * Math.pow((1 + yearlyReturn), years.value));
    
    returns.value = newReturns;
    updateScore();
    checkLevelUp();
    
    emit('calculate', {
      investment: investment.value,
      returns: returns.value,
      years: years.value,
      risk: risk.value,
      score: score.value,
      level: level.value
    });
  };
  
  const updateScore = () => {
    const returnRate = (returns.value - investment.value) / investment.value;
    const riskAdjustedReturn = returnRate / risk.value;
    const points = Math.round(riskAdjustedReturn * 1000);
    score.value += points;
  };
  
  const checkLevelUp = () => {
    if (score.value > level.value * 1000) {
      level.value++;
      isLevelUp.value = true;
      setTimeout(() => {
        isLevelUp.value = false;
      }, 2000);
    }
  };
  
  const resetGame = () => {
    investment.value = 50000;
    years.value = 5;
    risk.value = 2;
    score.value = 0;
    level.value = 1;
    returns.value = 0;
  };
  
  // Watch for changes
  watch([investment, years, risk], () => {
    calculateInvestment();
  });
  
  // Event emitter
  const emit = defineEmits(['close', 'calculate']);
  </script>
  
  <style scoped>
  input[type="range"] {
    @apply w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    @apply w-4 h-4 bg-[#C78D6B] rounded-full appearance-none cursor-pointer;
  }
  
  .level-up-animation {
    animation: levelUp 0.5s ease-in-out;
  }
  
  @keyframes levelUp {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  </style>