<!-- <template>
    <div class="space-y-3" :class="['p-4 rounded-lg shadow-sm', colorClass, 'max-w-lg']">
      <img src="@/assets/icons/flexi-grow.svg" />
      <h3 class="text-lg font-semibold text-[#333333]">{{ item.name || 'Nil' }}</h3>
    <div>
      <p class="text-sm">{{ item.minInvestment || 'Nil' }}</p>
      <p class="text-sm text-[#666666] text-justify">{{ item.description.length > 200 ? `${item.description.slice(0, 200)}...` : item.description }}</p>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
     item: {
      type: Object
     }
  });
  </script>
   -->
   <template>
    <div :class="['p-4 rounded-lg shadow-sm space-y-3', colorClass, 'max-w-lg']">
      <!-- Dynamic Image Handling -->
      <img src="@/assets/img/investment-cover.png" alt="Investment Icon" class="w-8 h-8" />
  
      <!-- Title and Status -->
      <h3 class="text-lg font-semibold text-[#333333]">{{ item.title || 'No Title' }}</h3>
  
      <!-- Investment Details -->
      <div class="space-y-1">
        <p class="text-sm font-medium">Status: {{ item.status || 'Unknown' }}</p>
        <p class="text-sm">Return Rate: {{ item.returnRate || 'N/A' }}</p>
        <p class="text-sm">Amount: {{ item.amount || 'N/A' }}</p>
        <p class="text-sm">Duration: {{ item.duration || 'N/A' }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{
    item: {
      image: string;
      status: string;
      title: string;
      returnRate: string;
      amount: string;
      duration: string;
    };
    colorClass?: string;
  }>();
  </script>
  