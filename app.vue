<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script setup lang="ts">
</script>


<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app {
    @apply min-h-screen;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend+Tera:wght@100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap');
</style>
