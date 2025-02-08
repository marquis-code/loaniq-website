<template>
        <header class="bg-white border-[0.5px] shadow-sm py-3 z-50 sticky top-0">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <NuxtLink class="block text-[#284d79]" to="/">
              <span class="sr-only">Home</span>
              <img src="@/assets/img/logo.png" class="h-8" />
            </NuxtLink>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <NuxtLink to="/about" class="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#"> About </NuxtLink>
                </li>

                <li>
                  <a class="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#loan-products">Products</a>
                </li>

                <li>
                  <NuxtLink class="text-gray-500 font-semibold transition hover:text-gray-500/75" to="/invest"> Investments</NuxtLink>
                </li>

                <li>
                  <a class="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#testimonials"> Testimonials </a>
                </li>



                <li>
                  <a class="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#contact-us"> Contact Us </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
     
             <div class="hidden sm:flex">
                <a class="rounded-md bg-[#284d79] px-5 py-2.5 text-sm font-medium text-white" href="#">
                  Get Started
                </a>
              </div>
            </div>

            <div class="block md:hidden">
              <button class="rounded-sm  text-gray-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 9.5H3M21 4.5H3M21 14.5H3M17 19.5H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>