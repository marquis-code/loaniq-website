<!-- components/InvestmentCard.vue -->
<template>
    <div class="bg-white p-4 rounded-lg shadow-md relative">
        <img src="@/assets/img/investment-cover.png" alt="Investment" class="rounded-t-lg w-full h-40 object-cover" />
        <!-- <div class="absolute top-2 right-2 bg-gray-100 px-2 py-1 text-xs rounded-full">{{ status }}</div> -->
        <div class="mt-4 space-y-6">
            <h3 class="text-lg font-medium text-[#434E61] mb-2">{{ title }}</h3>
            <p class="text-[#434E61] font-semibold bg-[#EEEFF2] px-3 py-2 rounded-full inline text-xs">{{ returnRate }}
            </p>
            <div class="flex justify-between items-center">
                <p class="text-[#434E61] font-medium text-lg">{{ amount }}</p>
                <p class="text-[#7D8799] text-sm">{{ duration }}</p>
            </div>
            <InvestBadge class="absolute top-0 right-6" status="Pending" backgroundColor="bg-yellow-100"
                dotColor="bg-yellow-500" textColor="text-yellow-800" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    image: String,
    status: String,
    title: String,
    returnRate: String,
    amount: String,
    duration: String,
});
</script>