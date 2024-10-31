<template>
  <div class="flex items-center justify-between space-x-4 p-4 bg-white rounded-md">
    <!-- Total Earnings Section -->
    <div class="flex items-center space-x-2">
      <div class="w-10 h-10 bg-green-50 rounded-md flex items-center justify-center">
        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="44" height="44" rx="4" fill="#EBF0EC" />
          <path
            d="M27.8327 16.666C28.1191 16.7078 28.3974 16.7602 28.666 16.8222C29.1587 16.936 29.405 16.9929 29.7002 17.2284C29.8685 17.3628 30.0787 17.6286 30.1709 17.8241C30.3327 18.1668 30.3327 18.4992 30.3327 19.1639V28.2159C30.3327 29.0435 29.466 29.6119 28.666 29.4272C27.8996 29.2501 27.0543 29.152 26.166 29.152C24.5684 29.152 23.1098 29.4694 21.9993 29.9924C20.8889 30.5154 19.4302 30.8327 17.8327 30.8327C16.9444 30.8327 16.0991 30.7346 15.3327 30.5576C14.84 30.4438 14.5937 30.3869 14.2985 30.1514C14.1301 30.017 13.92 29.7511 13.8278 29.5557C13.666 29.2129 13.666 28.8806 13.666 28.2159V19.1639C13.666 18.3363 14.5327 17.7679 15.3327 17.9526C15.6013 18.0147 15.8796 18.067 16.166 18.1088"
            stroke="#326543" stroke-width="1.5" stroke-linecap="round" />
          <path
            d="M24.0827 23.7493C24.0827 24.8999 23.1499 25.8327 21.9993 25.8327C20.8488 25.8327 19.916 24.8999 19.916 23.7493C19.916 22.5988 20.8488 21.666 21.9993 21.666C23.1499 21.666 24.0827 22.5988 24.0827 23.7493Z"
            stroke="#326543" stroke-width="1.5" />
          <path d="M16.584 24.584V24.5915" stroke="#326543" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M27.416 22.9102V22.9177" stroke="#326543" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M21.9993 14.166V17.4993M18.666 16.666V18.3327M25.3327 14.9993V16.666" stroke="#326543"
            stroke-width="1.5" stroke-linecap="round" />
        </svg>

      </div>
      <div>
        <p class="text-2xl font-semibold text-[#1D2739]">0</p>
        <p class="text-sm text-[#1D2739]">Total Earnings</p>
      </div>
    </div>

<section class="flex items-center justify-between gap-x-5">
      <!-- Filter Button -->
      <button class="flex items-center px-4 py-3 bg-white border-gray-50 border rounded-md space-x-2 text-gray-700 hover:bg-gray-200">
      <span>Filter</span>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8333 3.83398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16667 16.334H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4993 16.334H14.166" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4993 10.084H9.16602" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5007 3.83398H15.834" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.16667 10.084H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.084 2.16602C12.4722 2.16602 12.6664 2.16602 12.8196 2.22945C13.0237 2.31402 13.186 2.47626 13.2706 2.68045C13.334 2.83359 13.334 3.02773 13.334 3.41602V4.24935C13.334 4.63763 13.334 4.83177 13.2706 4.98492C13.186 5.18911 13.0237 5.35134 12.8196 5.43592C12.6664 5.49935 12.4722 5.49935 12.084 5.49935C11.6957 5.49935 11.5016 5.49935 11.3484 5.43592C11.1442 5.35134 10.982 5.18911 10.8974 4.98492C10.834 4.83177 10.834 4.63763 10.834 4.24935V3.41602C10.834 3.02773 10.834 2.83359 10.8974 2.68045C10.982 2.47626 11.1442 2.31402 11.3484 2.22945C11.5016 2.16602 11.6957 2.16602 12.084 2.16602Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.416 14.666C10.8043 14.666 10.9984 14.666 11.1516 14.7294C11.3558 14.814 11.518 14.9763 11.6026 15.1804C11.666 15.3336 11.666 15.5278 11.666 15.916V16.7493C11.666 17.1376 11.666 17.3318 11.6026 17.4849C11.518 17.6891 11.3558 17.8513 11.1516 17.9359C10.9984 17.9993 10.8043 17.9993 10.416 17.9993C10.0278 17.9993 9.8336 17.9993 9.68043 17.9359C9.47627 17.8513 9.31402 17.6891 9.22943 17.4849C9.16602 17.3318 9.16602 17.1376 9.16602 16.7493V15.916C9.16602 15.5278 9.16602 15.3336 9.22943 15.1804C9.31402 14.9763 9.47627 14.814 9.68043 14.7294C9.8336 14.666 10.0278 14.666 10.416 14.666Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.91602 8.41602C8.3043 8.41602 8.49843 8.41602 8.6516 8.47945C8.85577 8.56402 9.01802 8.72626 9.1026 8.93043C9.16602 9.0836 9.16602 9.27777 9.16602 9.66602V10.4993C9.16602 10.8876 9.16602 11.0818 9.1026 11.2349C9.01802 11.4391 8.85577 11.6013 8.6516 11.6859C8.49843 11.7493 8.3043 11.7493 7.91602 11.7493C7.52773 11.7493 7.33359 11.7493 7.18045 11.6859C6.97626 11.6013 6.81402 11.4391 6.72945 11.2349C6.66602 11.0818 6.66602 10.8876 6.66602 10.4993V9.66602C6.66602 9.27777 6.66602 9.0836 6.72945 8.93043C6.81402 8.72626 6.97626 8.56402 7.18045 8.47945C7.33359 8.41602 7.52773 8.41602 7.91602 8.41602Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>

    <!-- Properties Dropdown -->
    <select class="px-4 py-3 rounded-md bg-white border-gray-50 text-sm border text-gray-700 cursor-pointer hover:bg-gray-200">
      <option>All Properties</option>
      <!-- Additional options can be added here -->
    </select>

    <!-- Search Input -->
    <div class="flex items-center px-4 py-3 bg-white rounded-md space-x-2 border-gray-50 text-sm border">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.584 15.084L18.334 18.834" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.666 9.66602C16.666 5.52388 13.3082 2.16602 9.16602 2.16602C5.02388 2.16602 1.66602 5.52388 1.66602 9.66602C1.66602 13.8082 5.02388 17.166 9.16602 17.166C13.3082 17.166 16.666 13.8082 16.666 9.66602Z" stroke="#1D2739" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

      <input type="text" placeholder="Search" class="bg-transparent text-gray-700 focus:outline-none" />
    </div>
</section>
  </div>
</template>

<script setup lang="ts">
// No complex functionality is required for this component yet, so we don't need additional script logic.
</script>

<style scoped>
/* Additional styling if needed */
</style>