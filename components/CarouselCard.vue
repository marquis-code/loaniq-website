<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>

<template>
    <div class="relative group rounded-lg overflow-hidden shadow-lg bg-white h-full">
        <img 
          :src="item.image" 
          alt={props.item.title}
          class="w-full h-48 object-cover"
        />
        
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>

        <div class="absolute inset-0 bg-[#284d79] p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="flex justify-start items-start flex-col">
            <p class="text-white text-start leading-snug">{{ item.extendedDescription }}</p>

          <button class="bg-white px-6 py-3 rounded-lg  text-[#284d79] mt-6 font-semibold">Apply Now</button>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
 const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
 })
</script>