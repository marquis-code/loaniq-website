<template>
  <main class="bg-gray-100 pb-20">
    <PropertyCarousel />

    <section id="investment-products" class="py-20">
      <h2
        data-aos="fade-up"
        class="text-2xl font-bold text-center text-gray-900 uppercase tracking-wider"
      >
        Our Investment Products
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

    <InvestmentTestimonialCarousel />


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
              Get personalised financial solutions.
              </h1>
              <p class="mt-6 text-xl/8 text-gray-700">
                Our commitment to personalised solutions, transparent processes, and unparalleled customer support ensures your path to success is guided with expertise and trust.
              </p>
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
