<template>
   <main>
      <CreatePassword />
   </main>
  </template>
  
  <script setup lang="ts">
  const isModalOpen = ref(false)

  onMounted(() => {
   isModalOpen.value = true
  })
 definePageMeta({
    layout: 'auth',
 })
  </script>
  