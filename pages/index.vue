<template>
 <main>
  <UserLogin />
 </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const showLoader = ref(true)
</script>
