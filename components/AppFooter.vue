<template>
  <footer class="bg-emerald-700 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="lg:grid grid-cols-2 space-y-6 lg:space-y-0 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-semibold mb-4">Company</h3>
          <ul class="space-y-2">
            <li v-for="link in companyLinks" :key="link">
              <a href="#" class="hover:text-emerald-200">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Features</h3>
          <ul class="space-y-2">
            <li v-for="link in featureLinks" :key="link">
              <a href="#" class="hover:text-emerald-200">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Help</h3>
          <ul class="space-y-2">
            <li v-for="link in helpLinks" :key="link">
              <a href="#" class="hover:text-emerald-200">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Legal</h3>
          <ul class="space-y-2">
            <li v-for="link in legalLinks" :key="link">
              <a href="#" class="hover:text-emerald-200">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const companyLinks = ['About us', 'Blog', 'Careers', 'Community']
const featureLinks = ['Within Africa', 'International']
const helpLinks = ['Contact', 'FAQs']
const legalLinks = ['Terms & conditions', 'Privacy policy']
</script>