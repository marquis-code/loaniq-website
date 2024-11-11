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
       <InvestExploreCard @click="router.push(`/dashboard/invest/${index}`)" v-for="(item, index) in exploreInvestments" :key="index" v-bind="item" />
     </div>
   </div>
</main>
 </template>
 
 <script setup lang="ts">
import flex_grow from '@/assets/icons/flexi-grow.svg'
import fixed_investment from '@/assets/icons/fixed-investment.svg'
import discount_note from '@/assets/icons/discount-note.svg'
import target_savings from '@/assets/icons/target-savings.svg'
 
 const balance = ref('₦28,057,000.00');
 const activeTab = ref('My Investments');
 const router = useRouter()
 
 // Mock data for My Investments
 const myInvestments = ref([
   { image: 'image1.jpg', status: 'Active', title: 'Discount Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image2.jpg', status: 'Active', title: 'Target Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image3.jpg', status: 'Active', title: 'Flexi Grow Savings Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image4.jpg', status: 'Active', title: 'Fixed Investment Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
   { image: 'image5.jpg', status: 'Active', title: 'Maximum Yield Note', returnRate: '9.4% Annual return', amount: '₦10,000,000.00', duration: '12 Month(s)' },
 ]);
 
 // Mock data for Explore Investments
 const exploreInvestments = ref([
   { colorClass: 'bg-[#E0EBFF]', title: 'Flexi Grow Savings Note', minInvestment: 'Minimum investment of N10,000', description: 'Deposit & Withdraw anytime', icon: flex_grow },
   { colorClass: 'bg-[#E0FFE6]', title: 'Fixed Investment Note', minInvestment: 'Minimum investment of N100,000', description: 'Minimum tenor of 3 months', icon: fixed_investment },
   { colorClass: 'bg-[#FFE5E5]', title: 'Maximum Yield Note', minInvestment: 'Minimum investment of N5 million', description: 'Minimum tenor of 2 Year', icon: fixed_investment },
   { colorClass: 'bg-[#FFF1E0]', title: 'Discount Note', minInvestment: 'Upfront interest payments', description: 'Minimum investment of N500,000', icon: discount_note },
   { colorClass: 'bg-[#F1F2F5]', title: 'Target Savings Note', minInvestment: 'Minimum investment of N50,000', description: 'Minimum tenor of 3 months', icon: target_savings }
 ]);

 definePageMeta({
   layout: 'dashboard',
})
 </script>
 