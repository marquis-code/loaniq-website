<template>
  <div class="p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
    <LoansAvailableLoans />
    <LoansTransactionHistory />
    <LoansLoanDetails />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
</script>
