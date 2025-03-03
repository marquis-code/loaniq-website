<script setup lang="ts">
useHead({
  title: "Dynamic Page Title",
  meta: [
    { name: "description", content: "This is a specific page description" },
    { property: "og:title", content: "Dynamic Page Title" },
    { property: "og:description", content: "This is a specific page description for Open Graph" },
    { property: "og:image", content: "/page-specific-image.jpg" },
    { name: "twitter:title", content: "Dynamic Page Title" },
    { name: "twitter:description", content: "This is a specific page description for Twitter" },
    { name: "twitter:image", content: "/page-specific-image.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://yourwebsite.com/dynamic-page" }],
});
// import InvestmentStats from "../../components/InvestmentStats.vue";
// import WealthBuilder from '~/components/WealthBuilder.vue';
</script>

<template>
  <main class="pb-20">
    <PropertyCarousel />


    <div
      class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] h-[500px]  object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
             src="@/assets/img/test2.png"
            alt=""
          />
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <!-- <p class="text-base/7 font-semibold text-indigo-600">Deploy faster</p> -->
              <h1
                class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
              Choose an investment option.
              </h1>
              <h1> Take control of your financial future.</h1>
              <p class="mt-6 text-xl/8 text-gray-700">
                <ul class="space-y-5">
                 <li>
                <div class="flex items-center text-xl gap-x-3">
                  <p>✅</p>
                  <p>Earn up to 27% per annum.</p>
                </div>
              </li>
              <li>
                <div class="flex text-xl items-center gap-x-3">
                  <p>✅</p>
                  <p>Tenor from 90 days to 365 days.</p>
                </div>
              </li>
            </ul>
              </p>


              <!-- <section class="flex justify-start gap-x-3 items-center pt-6">
                <div class="flex -space-x-2 overflow-hidden">
  <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
  <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
  <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
  <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
</div>
<p class="font-semibold">Over 1 Billion in investment.</p>
              </section> -->

            </div>
          </div>
        </div>
      </div>
    </div>

    <WealthBuilder />

   <!-- <div class="bg-white pb-32">
    <InvestmentCalculator />
   </div> -->
   <InvestmentUpdatedCalculator />

    <!-- <div class="overflow-hidden bg-white">
      <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div
          class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"
        ></div>
        <div
          class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8"
        >
          <div class="pt-32">
            <h3
              class="mt-2 text-3xl/8 font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
            Choose an investment option, Take control of your financial future.
            </h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:col-start-2 lg:row-start-1">
            <svg
              class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <img
                  class="aspect-[12/7] w-full h-96 rounded-lg object-cover shadow-lg lg:aspect-auto"
                  src="@/assets/img/test2.png"
                  alt="Whitney leaning against a railing on a downtown street"
                  width="1184"
                  height="1376"
                />
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="mx-auto text-base/7 text-gray-500">
              <ul>
              <li>
                <div class="flex items-center gap-x-3">
                  <p>✅</p>
                  <p>Earn up to 27% per annum.</p>
                </div>

                <div class="flex items-center gap-x-3">
                  <p>✅</p>
                  <p>Tenor from 90 days to 365 days.</p>
                </div>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <section id="investment-products" class="py-20 px-6">
      <h2
        data-aos="fade-up"
        class="text-2xl font-bold text-center text-gray-909 tracking-wider"
      >
        Investment offerings tailored just for you
      </h2>
      <p
        data-aos="fade-up"
        class="mt-2 text-base max-w-xl pb-6 text-center text-center mx-auto text-gray-700"
      >
        From personal aspirations to business endeavors, our comprehensive range
        of loans ensures flexible solutions for every financial chapter in your
        life.
      </p>
      <FinanceCarousel />
    </section>

    <div
      class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <!-- <p class="text-base/7 font-semibold text-indigo-600">Deploy faster</p> -->
              <h1
                class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
                Grow your portfolio with compound interests!
              </h1>
              <p class="mt-6 text-xl/8 text-gray-700">
                The Maximum Yield Note offers you an opportunity to invest a
                lump sum amount and grow it over a period, earning good returns
                through compound interests in the process. It typically provides
                a significantly higher rate of return compared to the average
                yield of similar low-risk instruments in the fixed-income
                market.
              </p>

              <div class="pt-10">
          <button data-aos="fade-up"  class="bg-[#284d79] rounded-lg text-white px-8 py-3  font-medium transition-colors duration-200">
            Lets Talk
          </button>
        </div>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="@/assets/img/portfolio.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- <InvestmentTestimonialCarousel /> -->

    <SingleTestimonial />

    <InvestmentStats />


    <!-- <InvestmentTestimonialSection /> -->


    <div
      class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="@/assets/img/personal-loans.jpg"
            alt=""
          />
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <!-- <p class="text-base/7 font-semibold text-indigo-600">Deploy faster</p> -->
              <h1
                class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
              Start investing with ease
              </h1>
              <p class="mt-6 text-xl/8 text-gray-700">
                We’re dedicated to transforming your financial 
aspirations into realities, offering expert 
solutions with a commitment to trust.
              </p>
        <div class="pt-10">
          <button data-aos="fade-up"  class="bg-[#284d79] rounded-lg text-white px-8 py-3  font-medium transition-colors duration-200">
            Lets Talk
          </button>
        </div>
            </div>
          </div>
        </div>
        <!-- <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="@/assets/img/portfolio.jpg"
            alt=""
          />
        </div> -->
      </div>
    </div>

    <!-- <button></button> -->

    <!-- <KidsInvestment :isOpen="true" /> -->
  </main>
</template>
