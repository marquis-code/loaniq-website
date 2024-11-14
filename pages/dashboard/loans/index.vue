<template>
  <div class="min-h-screen bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] to-[#D7F4D7] p-6 md:p-10 flex flex-start items-start flex-col md:flex-row gap-6">
  <LoansAvailableLoans />
    <LoansTransactionHistory />
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'dashboard',
})
</script>

<style scoped>
/* Scoped styling to ensure styles apply specifically to this component */
</style>
