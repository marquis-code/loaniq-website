 <template>
    <div 
      class="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-black/90"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img 
        :src="props.item.image" 
        :alt="props.item.name"
        class="absolute inset-0 w-full h-full object-cover"
      />
      
      <!-- Dark overlay added to the image -->
      <div class="absolute inset-0 bg-black/50"></div>
      
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <img 
          :src="props.item.companyLogo" 
          :alt="`${props.item.name}'s company`"
          class="h-8 mb-4"
        />
        
        <div class="min-h-[100px]">
          <p class="text-lg font-medium transition-opacity duration-300">
            {{ isHovered ? displayText : `"${props.item.quote}"` }}
          </p>
        </div>
        
        <div class="mt-4">
          <h3 class="text-xl font-bold">{{ props.item.name }}</h3>
          <p class="text-sm text-gray-300">{{ props.item.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onBeforeUnmount, defineProps } from 'vue';
  
  type ItemProps = {
    image: string;
    name: string;
    companyLogo: string;
    quote: string;
    extendedQuote: string;
    title: string;
  };
  
  const props = defineProps<{ item: ItemProps }>();
  const isHovered = ref(false);
  const displayText = ref('');
  const timeouts: number[] = [];
  
  const typeWriter = (text: string) => {
    displayText.value = '';
    timeouts.forEach(clearTimeout);
    timeouts.length = 0;
  
    text.split('').forEach((letter, index) => {
      const timeout = setTimeout(() => {
        displayText.value += letter;
      }, index * 30);
      timeouts.push(timeout);
    });
  };
  
  watch(isHovered, (newValue) => {
    if (newValue) {
      typeWriter(props.item.extendedQuote);
    } else {
      timeouts.forEach(clearTimeout);
      displayText.value = '';
    }
  });
  
  onBeforeUnmount(() => {
    timeouts.forEach(clearTimeout);
  });
  </script>
  
  <style scoped>
  .transition-transform {
    transition: transform 0.5s ease-in-out;
  }
  </style>
  