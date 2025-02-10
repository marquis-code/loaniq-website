<!-- <template>
    <div class="fixed inset-0 bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div class="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold mb-2">Money Growing Adventure! 🌱</h1>
          <p class="text-lg">Level {{ adventureLevel }} Money Explorer</p>
        </div>
  
        <div class="flex justify-center mb-8">
          <div class="text-center">
            <div class="text-6xl mb-2">
              {{ mascotMood === 'happy' ? '🦊' : '🤔' }}
            </div>
            <p class="text-sm">Your Financial Friend Fox!</p>
          </div>
        </div>
  
        <div class="flex justify-center mb-8">
          <div class="relative">
            <div class="text-8xl" :style="{ transform: `scale(${treeHeight})` }">
              🌳
            </div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div class="text-2xl">💰 x {{ coins }}</div>
            </div>
          </div>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            v-for="strategy in strategies" :key="strategy.name"
            @click="selectedStrategy = strategy"
            class="p-4 rounded-xl transition-all transform hover:scale-105"
            :class="selectedStrategy.name === strategy.name ? 'bg-purple-100 border-2 border-purple-500' : 'bg-gray-50'"
          >
            <div class="text-4xl mb-2">{{ strategy.icon }}</div>
            <h3 class="font-bold">{{ strategy.name }}</h3>
          </button>
        </div>
  
        <div class="space-y-6 mb-8">
          <div>
            <label class="block text-center mb-2">How many coins to invest? 🪙</label>
            <input type="range" min="100" max="5000" step="100" v-model="money" class="w-full" />
            <p class="text-center font-bold">{{ money }} coins</p>
          </div>
  
          <div>
            <label class="block text-center mb-2">How long to grow your money? ⏳</label>
            <input type="range" min="1" max="10" v-model="growthTime" class="w-full" />
            <p class="text-center font-bold">{{ growthTime }} year{{ growthTime > 1 ? 's' : '' }}</p>
          </div>
        </div>
  
        <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl mb-8">
          <h3 class="text-center text-xl font-bold mb-4">Your Money Adventure Results!</h3>
          <div class="grid grid-cols-2 gap-4 text-center">
            <div>
              <p class="text-sm">Starting Coins</p>
              <p class="text-2xl font-bold">🪙 {{ money }}</p>
            </div>
            <div>
              <p class="text-sm">Future Treasure</p>
              <p class="text-2xl font-bold">💎 {{ futureTreasure }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const money = ref(1000);
  const growthTime = ref(1);
  const adventureLevel = ref(1);
  const mascotMood = ref('happy');
  const coins = ref(0);
  const treeHeight = ref(1);
  
  const strategies = ref([
    { name: 'Piggy Bank Saver', risk: 'low', icon: '🐷' },
    { name: 'Growing Tree', risk: 'medium', icon: '🌳' },
    { name: 'Rocket to the Moon', risk: 'high', icon: '🚀' }
  ]);
  
  const selectedStrategy = ref(strategies.value[0]);
  
  const futureTreasure = computed(() => Math.round(money.value * (1 + (growthTime.value * 0.1))));
  </script>
  
  <style scoped>
  input[type="range"] {
    accent-color: purple;
  }
  </style>
   -->

   <template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div class="w-full max-w-2xl bg-white rounded-2xl shadow-xl max-h-[70vh] overflow-y-auto p-6 relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          ✖
        </button>
        
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold mb-2">Money Growing Adventure! 🌱</h1>
          <p class="text-lg">Level {{ adventureLevel }} Money Explorer</p>
        </div>
    
        <div class="flex justify-center mb-8">
          <div class="text-center">
            <div class="text-6xl mb-2">
              {{ mascotMood === 'happy' ? '🦊' : '🤔' }}
            </div>
            <p class="text-sm">Your Financial Friend Fox!</p>
          </div>
        </div>
    
        <div class="flex justify-center mb-8">
          <div class="relative">
            <div class="text-8xl" :style="{ transform: `scale(${treeHeight})` }">
              🌳
            </div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div class="text-2xl">💰 x {{ coins }}</div>
            </div>
          </div>
        </div>
    
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            v-for="strategy in strategies" :key="strategy.name"
            @click="selectedStrategy = strategy"
            class="p-4 rounded-xl transition-all transform hover:scale-105"
            :class="selectedStrategy.name === strategy.name ? 'bg-purple-100 border-2 border-purple-500' : 'bg-gray-50'"
          >
            <div class="text-4xl mb-2">{{ strategy.icon }}</div>
            <h3 class="font-bold">{{ strategy.name }}</h3>
          </button>
        </div>
    
        <div class="space-y-6 mb-8">
          <div>
            <label class="block text-center mb-2">How many coins to invest? 🪙</label>
            <input type="range" min="100" max="5000" step="100" v-model="money" class="w-full" />
            <p class="text-center font-bold">{{ money }} coins</p>
          </div>
    
          <div>
            <label class="block text-center mb-2">How long to grow your money? ⏳</label>
            <input type="range" min="1" max="10" v-model="growthTime" class="w-full" />
            <p class="text-center font-bold">{{ growthTime }} year{{ growthTime > 1 ? 's' : '' }}</p>
          </div>
        </div>
    
        <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl mb-8">
          <h3 class="text-center text-xl font-bold mb-4">Your Money Adventure Results!</h3>
          <div class="grid grid-cols-2 gap-4 text-center">
            <div>
              <p class="text-sm">Starting Coins</p>
              <p class="text-2xl font-bold">🪙 {{ money }}</p>
            </div>
            <div>
              <p class="text-sm">Future Treasure</p>
              <p class="text-2xl font-bold">💎 {{ futureTreasure }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
import type { boolean } from 'yup';

  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    }
  })
  
  const isOpen = ref(true);
  const money = ref(1000);
  const growthTime = ref(1);
  const adventureLevel = ref(1);
  const mascotMood = ref('happy');
  const coins = ref(0);
  const treeHeight = ref(1);
  
  const strategies = ref([
    { name: 'Piggy Bank Saver', risk: 'low', icon: '🐷' },
    { name: 'Growing Tree', risk: 'medium', icon: '🌳' },
    { name: 'Rocket to the Moon', risk: 'high', icon: '🚀' }
  ]);
  
  const selectedStrategy = ref(strategies.value[0]);
  const futureTreasure = computed(() => Math.round(money.value * (1 + (growthTime.value * 0.1))));
  
  const closeModal = () => {
    isOpen.value = false;
  };
  </script>
  
  <style scoped>
  input[type="range"] {
    accent-color: purple;
  }
  </style>
  