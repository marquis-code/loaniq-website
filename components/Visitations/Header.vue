<template>
  <div class="flex flex-wrap justify-between items-center gap-4 p-4">
    <!-- View Mode Buttons -->
    <section class="flex items-center gap-x-4">
      <button
        :class="[
          'px-10 py-3 rounded-md font-medium transition-colors text-sm',
          isGridView ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#1A1A1A]'
        ]"
        @click="changeViewMode('grid')"
      >
        Grid
      </button>
      <button
        :class="[
          'px-10 py-3 rounded-md font-medium transition-colors text-sm',
          !isGridView ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#1A1A1A]'
        ]"
        @click="changeViewMode('calendar')"
      >
        Calendar
      </button>
    </section>

    <section class="flex items-center gap-x-4">
      <!-- Sort Dropdown -->
      <div class="relative">
        <select v-model="sortOption" class="px-4 py-3 outline-none border border-gray-100 pr-6 bg-white text-[#1D2739] rounded-md text-sm">
          <option value="most-recent">Most recent</option>
          <option value="least-recent">Least recent</option>
        </select>
      </div>

      <!-- Property Filter Dropdown -->
      <div class="relative">
        <select v-model="propertyOption" class="px-4 py-3 outline-none border border-gray-100 pr-6 bg-white text-[#1D2739] rounded-md text-sm">
          <option value="all-properties">All Properties</option>
          <option value="property-1">Property 1</option>
          <option value="property-2">Property 2</option>
        </select>
      </div>

      <!-- Search Bar -->
      <div class="relative flex-1">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          class="w-full px-4 py-3 bg-white text-gray-700 text-base rounded-md pl-10 focus:outline-none border border-gray-100"
        />
        <svg class="absolute top-4 left-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_6053_338774)">
            <path d="M14.584 14.583L18.334 18.333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.666 9.16699C16.666 5.02486 13.3082 1.66699 9.16602 1.66699C5.02388 1.66699 1.66602 5.02486 1.66602 9.16699C1.66602 13.3092 5.02388 16.667 9.16602 16.667C13.3082 16.667 16.666 13.3092 16.666 9.16699Z" stroke="#1D2739" stroke-width="1.5" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_6053_338774">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

// const emit = defineEmits(['setTab', 'viewModeChange']);

// State for toggling between Grid and Calendar views
const isGridView = ref(true);
const emit = defineEmits<{
  (e: 'viewModeChange', viewMode: string): void;
  (e: 'setTab', viewMode: string): void;
}>();

// Function to change view mode and emit the selected mode
const changeViewMode = (mode: string) => {
  isGridView.value = mode === 'grid';
  emit('setTab', mode);
};

// State for sort and property filter dropdowns
const sortOption = ref("most-recent");
const propertyOption = ref("all-properties");

// Search query state
const searchQuery = ref("");
</script>

<style scoped>
@media (max-width: 640px) {
  .flex-wrap {
    flex-direction: column;
  }
}
</style>
