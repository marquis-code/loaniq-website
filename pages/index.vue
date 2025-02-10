<!-- pages/index.vue -->
<template>
  <main>
    <!-- <div class="relative min-h-screen pt-32 w-full">

      <div class="absolute inset-0 z-0">
        <img src="@/assets/img/loans1.jpg" alt="Background" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-black/80"></div>
      </div>


      <div class="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl gap-x-32 lg:flex">
          <div>
            <div class="mb-12 max-w-2xl">
              <h1 class="mb-6 text-4xl font-bold text-white sm:text-6xl">
                Your Path to Prosperity Starts Here with Us.

              </h1>
              <p class="text-lg text-gray-200">
                Every step is a stride to a brighter and wealthier future.

              </p>
            </div>


            <div class="mb-8 max-w-2xl">
              <div class="relative">
                <input type="text" placeholder="Search lender name"
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 pr-12 text-gray-900 focus:border-[#284d79] focus:outline-none" />
                <div class="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-xl">
            <div class="">
  
              <div class="mb-8">
                <div class="mb-4 flex justify-between">
                  <h3 class="text-base font-medium text-gray-900">
                    How much do you need?
                  </h3>
                  <span class="text-lg font-medium text-gray-900">
                    {{ formatCurrency(amount) }}
                  </span>
                </div>
                <input type="range" v-model="amount" :min="500" :max="1000000" step="500"
                  class="w-full appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#284d79]" />
                <div class="mt-2 flex justify-between text-sm text-gray-600">
                  <span>500</span>
                  <span>1,000,000</span>
                </div>
              </div>


              <div class="mb-8">
                <div class="mb-4 flex justify-between">
                  <h3 class="text-base font-medium text-gray-900">
                    How long do you need it
                  </h3>
                  <span class="text-lg font-medium text-gray-900">
                    {{ duration }} {{ duration === 1 ? 'Month' : 'Months' }}
                  </span>
                </div>
                <input type="range" v-model="duration" :min="1" :max="12"
                  class="w-full appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#284d79]" />
                <div class="mt-2 flex justify-between text-sm text-gray-600">
                  <span>1 Month</span>
                  <span>12 Months</span>
                </div>
              </div>
            </div>

    
            <div class="mb-6 grid gap-4 sm:grid-cols-2">
              <div class="relative">
                <input type="text" :value="formatCurrency(amount)" readonly
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12" />
                <div class="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                </div>
              </div>
              <div class="relative">
                <input type="text" :value="`${duration} Month${duration > 1 ? 's' : ''}`" readonly
                  class="w-full rounded-lg border border-gray-300 px-4 py-3" />
                <div class="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>


            <div class="pt-6">
              <button
                class="w-full rounded-lg bg-[#284d79] px-4 py-4 text-center text-white hover:bg-[#284d79] focus:outline-none focus:ring-2 focus:ring-[#284d79] focus:ring-offset-2">
                View available offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <LoansHero />


    <section
  class="relative flex flex-col w-full h-[700px] bg-cover bg-fixed bg-center justify-center items-center"
  style="background-image: url('/group-transit.jpg');"
>

  <div class="absolute inset-0 bg-black/50"></div>


  <div  data-aos="fade-up" class="relative z-10 text-center px-4">
    <h1 data-aos="fade-up" class="text-white text-5xl font-semibold mt-20 max-w-2xl mx-auto mb-10">
      Your Path to Prosperity Starts Here with us
    </h1>

    <p data-aos="fade-up" class="text-center max-w-2xl mx-auto  text-xl my-10 text-white/90">
      Experience financial empowerment with Loan IQ Limited – effortlessly apply and secure a loan of up to 1 million naira in just minutes, ensuring swift access to the funds you need for your aspirations.
    </p>
  </div>
    </section>

    <LogoClouds />

    <AdvertCta />

    <HowItWorks />

    <BusinessMetrics />

    <TestimonialsScroll />

    <FrequentlyAskedQuestions />


    <div id="contact-us" class="relative isolate bg-white">
  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
          <svg class="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M130 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="white" />
            <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
              <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
          </svg>
        </div>
        <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Need a Loan? Let's Talk!</h2>
        <p class="mt-6 text-lg/8 text-gray-600">
            Get quick and hassle-free loans tailored to your needs. Whether it's for personal expenses, business growth, or emergency funds, we've got you covered. Apply today and take a step towards financial freedom!
        </p>

        <!-- <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get in touch sss</h2> -->
        <!-- <p class="mt-6 text-lg/8 text-gray-600">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p> -->
        <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Address</span>
              <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
              </svg>
            </dt>
            <dd>5a Esugbayi Street<br>Ikeja GRA, Lagos</dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telephone</span>
              <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </dt>
            <dd><a class="hover:text-gray-900" href="tel:+2348022265398">+234 802 226 5398</a></dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Email</span>
              <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </dt>
            <dd><a class="hover:text-gray-900" href="mailto:info@loaniq.ng">info@loaniq.ng</a></dd>
          </div>
        </dl>
      </div>
    </div>
    <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#284d79]">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#284d79]">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
            <div class="mt-2.5">
              <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#284d79]">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
            <div class="mt-2.5">
              <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#284d79]">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#284d79]"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-end">
          <button type="submit" class="rounded-md bg-[#284d79] w-full px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#284d79]">Send message</button>
        </div>
      </div>
    </form>
  </div>
</div>

  </main>
</template>

<script setup lang="ts">
// import LoansHero from "../components/LoansHero.vue";
const amount = ref(500000)
const duration = ref(1)

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);
}
</script>