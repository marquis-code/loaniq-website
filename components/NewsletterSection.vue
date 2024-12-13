<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-xl lg:text-3xl font-bold text-center mb-8">
        Keep up with us by signing up for our newsletter
      </h2>
      <div class="max-w-xl mx-auto flex gap-4 rounded-3xl p-1 px-1 border">
        <input type="email" placeholder="Email address" 
               class="flex-1 px-4 py-2 border-none outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600" />
      <div class="pr-3">
        <button class="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors mr-3">
          Subscribe
        </button>
      </div>
      </div>
      <div class="flex justify-center mt-8 space-x-4">
        <a v-for="platform in socialPlatforms" 
           :key="platform.name"
           :href="platform.url"
           class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors">
          <img :src="platform.url" :alt="platform.name" class="w-10 h-10" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import instagram from '@/assets/img/instagram.png'
import twitter from '@/assets/img/twitter.png'
import facebook from '@/assets/img/facebook.png'
import linkedin from '@/assets/img/linkedin.png'
const socialPlatforms = ref([
  { name: 'Instagram', icon: '/social/instagram.svg', url: instagram },
  { name: 'Twitter', icon: '/social/twitter.svg', url: twitter },
  { name: 'Facebook', icon: '/social/facebook.svg', url: facebook },
  { name: 'LinkedIn', icon: '/social/linkedin.svg', url: linkedin }
])
</script>