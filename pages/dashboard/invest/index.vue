<template>
   <main class="bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] to-[#D7F4D7] min-h-screen p-6">
   <div class="">
     <InvestInvestmentBalance class="" :balance="balance" />
 
     <!-- Tabs -->
     <InvestTabNavigation :tabs="['My Investments', 'Explore investments', 'Completed investments']" :activeTab="activeTab" @update:activeTab="activeTab = $event" />
 
     <!-- Conditional Rendering Based on Active Tab -->
     <div v-if="activeTab === 'My Investments'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
       <InvestInvestmentCard class="cursor-pointer" v-for="(item, index) in myInvestments" :key="index" v-bind="item" />
     </div>
 
     <div v-else-if="activeTab === 'Explore investments'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      <!-- {{ products }} -->
       <InvestExploreCard @click="router.push(`/dashboard/invest/${item.id}`)" v-for="(item, index) in products" :key="index" :item="item" />
     </div>
   </div>
</main>
 </template>
 
 <script setup lang="ts">
// import flex_grow from '@/assets/icons/flexi-grow.svg'
// import fixed_investment from '@/assets/icons/fixed-investment.svg'
// import discount_note from '@/assets/icons/discount-note.svg'
// import target_savings from '@/assets/icons/target-savings.svg'
import { useFetchInvestmentProducts } from '@/composables/modules/investment/fetch'
 
 const balance = ref('₦28,057,000.00');
 const activeTab = ref('My Investments');
 const router = useRouter()
 const { products, loading } = useFetchInvestmentProducts()
 
 // Mock data for My Investments
 const myInvestments = ref([
   { image: 'image1.jpg', status: 'Active', title: 'Discount Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image2.jpg', status: 'Active', title: 'Target Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image3.jpg', status: 'Active', title: 'Flexi Grow Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image4.jpg', status: 'Active', title: 'Fixed Investment Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image5.jpg', status: 'Active', title: 'Maximum Yield Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
 ]);
 

 definePageMeta({
   layout: 'dashboard',
})
 </script>
 