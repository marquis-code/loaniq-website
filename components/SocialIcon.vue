<template>
    <a :href="`https://${platform}.com`" 
       class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition-colors">
      <component :is="icon" class="w-5 h-5 text-emerald-600" />
    </a>
  </template>
  
  <script setup lang="ts">
  import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'
  
  const props = defineProps<{
    platform: string
  }>()
  
  const icon = computed(() => {
    const icons = {
      instagram: Instagram,
      twitter: Twitter,
      facebook: Facebook,
      linkedin: Linkedin
    }
    return icons[props.platform as keyof typeof icons]
  })
  </script>