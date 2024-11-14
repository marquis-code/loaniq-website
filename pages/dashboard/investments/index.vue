<template>
  <main class="bg-gradient-to-br from-[#F1F7FD] lg:p-6 via-[#E9F2FA] to-[#D7F4D7] min-h-screen">
    <div class="bg-[#FFFFFF] p-6 lg:p-10 rounded-lg">
      <InvestInvestmentBalance :balance="balance" />

      <!-- Tabs -->
      <InvestTabNavigation
        :tabs="['My Investments', 'Explore investments', 'Completed investments']"
        :activeTab="activeTab"
        @update:activeTab="activeTab = $event"
      />

      <!-- Conditional Rendering Based on Active Tab -->
      <div v-if="activeTab === 'My Investments'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <InvestInvestmentCard
          class="cursor-pointer"
          v-for="(item, index) in myInvestments"
          :key="index"
          @click="router.push(`/dashboard/investments/my-investments/${index}`)"
          v-bind="item"
        />
      </div>
<!-- 
      <div v-else-if="activeTab === 'Explore investments'" class="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <InvestExploreCard
          v-for="(item, index) in exploreInvestments"
          :key="index"
          @click="router.push(`/dashboard/investments/explore-investments/${index}`)"
          :item="item"
        />
      </div> -->

      <InvestExploreInvestments :loading="loading" :products="products" v-else-if="activeTab === 'Explore investments'" />

      <div v-else-if="activeTab === 'Completed investments'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <InvestInvestmentCard
          class="cursor-pointer"
          v-for="(item, index) in completedInvestments"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFetchInvestmentProducts } from '@/composables/modules/investment/fetch';

const balance = ref('₦28,057,000.00');
const activeTab = ref('My Investments');
const router = useRouter();
const { products, loading } = useFetchInvestmentProducts();

// Mock data for different investment types
const myInvestments = ref([
  { image: 'image1.jpg', status: 'Active', title: 'Discount Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
  { image: 'image2.jpg', status: 'Active', title: 'Target Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
  { image: 'image3.jpg', status: 'Active', title: 'Flexi Grow Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
]);

const exploreInvestments = ref([
  { image: 'image1.jpg', status: 'Active', title: 'Discount Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
  { image: 'image2.jpg', status: 'Active', title: 'Target Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
  { image: 'image3.jpg', status: 'Active', title: 'Flexi Grow Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
]);

const completedInvestments = ref([
  { image: 'image1.jpg', status: 'Completed', title: 'Discount Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
  { image: 'image2.jpg', status: 'Completed', title: 'Target Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
  { image: 'image3.jpg', status: 'Completed', title: 'Flexi Grow Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
]);

definePageMeta({
  layout: 'dashboard',
});
</script>
