

   <template>
    <div class="min-h-screen bg-white">
      <!-- Navigation -->
      <section class="shadow-md">
        <nav class="container mx-auto px-4 py-6 flex items-center justify-between">
          <div class="flex items-center">
            <img src="@/assets/img/logo-dark.png" class="h-6 lg:h-10" />
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink
              v-for="item in menuItems"
              :key="item"
              :to="item.toLowerCase()"
              class="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {{ item }}
            </NuxtLink>
            <button class="px-6 py-2.5 border border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors">
              Login
            </button>
            <button class="px-6 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
              Sign up
            </button>
          </div>
        </nav>
      </section>
  
      <!-- Hero Section -->
      <div class="container mx-auto px-4 pt-12 lg:pt-44">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column -->
          <div class="relative z-10">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left leading-tight mb-6">
              Africa in one financial platform
            </h1>
            <p class="text-gray-600 text-lg mb-8 text-center lg:text-left max-w-xl">
              Africash is a digital ecosystem designed to make Africa one. Its goal is to bring the dream of financial inclusion to all people across the continent.
            </p>
           <div class="flex justify-center items-center lg:flex-start lg:items-start">
            <button class="flex items-center px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Get started- It's free
            </button>
           </div>
          </div>
  
          <!-- Right Column -->
          <div class="relative">
            <img
              src="@/assets/img/hero.png"
              alt="World Map"
              class="w-full h-auto object-contain lg:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const menuItems = ['About', 'Features', 'Blog', 'Contact'];
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>
  