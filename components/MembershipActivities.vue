<template>
    <div class="overflow-hidden rounded-lg">
        <div class="py-5">
          <p>Users activities</p>
        </div>
        <section v-if="membersActivities.length" class="bg-white border rounded-lg border-gray-50 px-4 py-5 sm:p-6">
            <div v-for="(item, idx) in membersActivities" :key="idx" class="flex gap-x-3 border-b last:border-b-0 border-gray-25 py-4">
                <div>
                 <svg width="8" height="60" viewBox="0 0 8 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="4" cy="4" r="4" fill="#6A9AEB"/>
                     <line x1="4.5" y1="12" x2="4.5" y2="60" stroke="#6A9AEB" stroke-dasharray="2 2"/>
                     </svg>   
                </div>
               <div class="space-y-0.5">
                 <p class="text-sm text-[#1D2739] max-w-lg">{{item.description}}</p>    
                 <p class="text-sm text-gray-500 font-light">{{item.date}}</p>         
               </div>
         </div>
        </section>
        <div v-else
        class="bg-white border rounded-lg border-gray-50 px-4 py-5 sm:p-6 h-80 flex flex-col gap-y-4 justify-center items-center">
        <img :src="dynamicIcons('activities-empty-state')" alt="leases empty state" class="" />
        <p class="text-[#1D2739]">No recent activities</p>
      </div>
      </div>
</template>

<script setup lang="ts">
import { dynamicIcons } from "@/utils/assets";

const props = defineProps({
    membersActivities: {
    type: Array,
  },
});
</script>