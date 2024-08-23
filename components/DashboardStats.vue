<template>
  <section class="space-y-4">
    <div class="lg:flex w-full gap-x-2">
      <div class="w-full lg:max-w-5xl flex p-3 border border-gray-25 rounded-lg bg-white">
        <div v-for="(item, idx) in firstSection" :key="idx" class="h-32 space-y-4 w-full border-gray-100 border-r last:border-r-0 p-4">
          <div class="flex justify-end items-end ">
            <img :src="dynamicIcons(item.icon)" :alt="item.label" class="h-10 w-10 bg-gray-100 p-2 rounded-md" />
          </div>
          <div>
            <p class="text-[#1D2739] font-semibold text-2xl">{{item.value}}</p>
            <h6 class="text-[#667185] font-medium text-sm">{{item.label}}</h6>
          </div>
        </div>
      </div>
      <div class="w-full lg:max-w-lg flex p-3 border border-gray-25 rounded-lg bg-white">
        <div v-for="(item, idx) in secondSection" :key="idx" class="h-32 space-y-4 w-full border-gray-100 border-r last:border-r-0 p-4">
          <div class="flex justify-end items-end ">
            <img :src="dynamicIcons(item.icon)" :alt="item.label" class="h-10 w-10 bg-gray-100 p-2 rounded-md" />
          </div>
          <div>
            <p class="text-[#1D2739] font-semibold text-2xl">{{item.value}}</p>
            <h6 class="text-[#667185] font-medium text-sm">{{item.label}}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex w-full gap-x-2">
      <div class="w-full lg:max-w-5xl flex p-3 border border-gray-25 rounded-lg bg-white">
        <div v-for="(item, idx) in thirdSection" :key="idx" class="h-32 space-y-4 w-full border-gray-100 border-r last:border-r-0 p-4">
          <div class="flex justify-end items-end ">
            <img :src="dynamicIcons(item.icon)" :alt="item.label" class="h-10 w-10 bg-gray-100 p-2 rounded-md" />
          </div>
          <div>
            <p class="text-[#1D2739] font-semibold text-2xl">{{item.value}}</p>
            <h6 class="text-[#667185] font-medium text-sm">{{item.label}}</h6>
          </div>
        </div>
      </div>
      <div class="w-full lg:max-w-lg flex p-3 border border-gray-25 rounded-lg bg-white">
        <div v-for="(item, idx) in fourthSection" :key="idx" class="h-32 space-y-4 w-full border-gray-100 border-r last:border-r-0 p-4">
          <div class="flex justify-end items-end ">
            <img :src="dynamicIcons(item.icon)" :alt="item.label" class="h-10 w-10 bg-gray-100 p-2 rounded-md" />
          </div>
          <div>
            <p class="text-[#1D2739] font-semibold text-2xl">{{item.value}}</p>
            <h6 class="text-[#667185] font-medium text-sm">{{item.label}}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script setup lang="ts">
  import { dynamicIcons } from '@/utils/assets'; // assuming you have a dynamicIcons function in utils
  
  const firstSection = ref([
  { icon: 'total-properties', value: '0', label: 'Total Properties' },
  { icon: 'total-tenants', value: '0', label: 'Total tenants' },
  { icon: 'total-income', value: '₦0.00', label: 'Total Income' },
])

const secondSection = ref([
  { icon: 'total-rooms', value: '0', label: 'Total members' },
  { icon: 'total-rooms', value: '0', label: 'Total rooms' },
])

const thirdSection = ref([
  { icon: 'total-rooms', value: '0', label: 'Available rooms' },
  { icon: 'total-rooms', value: '0', label: 'Occupied rooms' },
  { icon: 'total-rooms', value: '0%', label: 'Occupancy rate' },
])

const fourthSection = ref([
  { icon: 'total-rooms', value: '0', label: 'Agents' },
  { icon: 'total-rooms', value: '0', label: 'Service providers' },
])

  </script>
  
  <style scoped>
  /* Customize additional styles if necessary */
  </style>
  