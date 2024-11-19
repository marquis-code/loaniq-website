<template>
  <section  :style="{
      background: 'linear-gradient(180deg, rgb(97, 111, 164) 0%, rgb(18, 45, 118) 100%)'
    }" class="flex flex-col min-h-screen lg:flex-row items-center justify-between px-4 lg:px-20 py-10 bg-white">
    <!-- Left Section: Text -->
    <div class="lg:w-1/2 text-center lg:text-left">
      <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
        Verify <span class="text-blue-500">Face</span> ID
      </h1>
      <p class="mt-4 text-lg text-white">
        Face ID scans your face in 3D for quick, secure access to devices, payments, and more—fast, easy, and reliable!
      </p>
      <p class="mt-6 font-medium text-white">
        Face Liveness Verification Technology
      </p>
  <div class="mt-6">
    <NuxtLink to="/verifyface"
        class="mt-6 px-6 py-3.5 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
      >
        Verify my face
      </NuxtLink>
  </div>
    </div>

    <!-- Right Section: Illustration -->
    <div class="mt-8 lg:mt-0 lg:w-1/2">
      <div class="relative">
        <!-- Main Image -->
        <img
          src="@/assets/img/verify-face4.png"
          alt="Face Verification Illustration"
          class="max-w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional styles if required */
</style>
