<!-- <template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <div class="w-full max-w-md">
        <button class="text-blue-600 flex items-center mb-4" @click="$router.back()">

           Back to Investments
        </button>
        <div class="relative w-full h-48 rounded-lg overflow-hidden shadow-lg">
          <img :src="investment.image" :alt="investment.title" class="w-full h-full object-cover" />
        </div>
      </div>
      

      <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg mt-4">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ investment.title }}</h1>
        <p class="text-gray-600 mb-4">{{ investment.description }}</p>
        
        <div class="flex items-center justify-between mb-4">
          <span class="text-lg font-semibold text-green-600">{{ investment.interestRate }}% Returns</span>
          <span class="text-gray-500">Min. Investment: ₦{{ investment.minInvestment.toLocaleString() }}</span>
        </div>
        
        <button class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition" @click="investNow">
          Invest Now
        </button>
      </div>
      

      <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg mt-4">
        <h2 class="text-lg font-bold text-gray-800 mb-2">How it Works</h2>
        <p class="text-gray-600">Invest a minimum of ₦{{ investment.minInvestment.toLocaleString() }} and earn up to {{ investment.interestRate }}% interest rate.</p>
      </div>
      

      <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg mt-4">
        <h2 class="text-lg font-bold text-gray-800 mb-2">Who Can Invest?</h2>
        <p class="text-gray-600">{{ investment.eligibility }}</p>
      </div>
      

      <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg mt-4">
        <h2 class="text-lg font-bold text-gray-800 mb-2">Features and Benefits</h2>
        <ul class="list-disc list-inside text-gray-600">
          <li v-for="(feature, index) in investment.features" :key="index">{{ feature }}</li>
        </ul>
      </div>
      

      <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg mt-4">
        <h2 class="text-lg font-bold text-gray-800 mb-2">Calculate Your Returns</h2>
        <input type="number" v-model="investmentAmount" placeholder="Enter Amount" class="w-full p-2 border rounded mb-3" />
        <p class="text-gray-700">Expected Returns: <span class="text-green-600 font-bold">₦{{ calculateReturns().toLocaleString() }}</span></p>
      </div>
    </div>
  </template>
  
  <script>
//   import { ChevronLeftIcon } from 'lucide-vue-next';
  
  export default {
    // components: { ChevronLeftIcon },
    data() {
      return {
        investment: {
          image: '/path-to-investment-image.jpg',
          title: 'Fixed Investment Note',
          description: 'If you love simplicity and adaptability, our high-quality Fixed Investment Note is the perfect investment product for you. It generates passive income for you, provide capital preservation and gives you opportunity to diversify your portfolio.',
          interestRate: 25,
          minInvestment: 100000,
          eligibility: 'Passive investors seeking to invest one-off in return for a bulk payment of maturity..',
          features:  [
  "Minimum tenure of 3 months and maximum of 1 year renewable tenure.",
  "Investors can engage effortlessly, observing their wealth grow steadily throughout the chosen duration.",
  "Investment could be liquidated before maturity, subject to pre-liquidation fee charged on interest only.",
  "Interest can be paid out monthly, quarterly, bi-annually, or at maturity."
]

        },
        investmentAmount: 100000
      };
    },
    methods: {
      calculateReturns() {
        return (this.investmentAmount * (this.investment.interestRate / 100));
      },
      investNow() {
        alert('Investment process initiated!');
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    transition: transform 0.2s ease-in-out;
  }
  button:hover {
    transform: scale(1.05);
  }
  </style>
   -->

   <template>
    <main>
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 h-full w-full">
        <img src="@/assets/img/team.jpg" alt="" class="h-full w-full object-cover">
        <div class="absolute inset-0 bg-black opacity-60"></div> <!-- Dark transparent overlay -->
      </div>
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Invest Easy, Earn Great Returns!        </h2>
        <!-- <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">{{ investment.description ?? 'Nil' }}</p> -->
      </div>
    </div>
    
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-4">
            <div class="relative overflow-hidden rounded-3xl bg-[#284d79] px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img class="absolute inset-0 size-full object-cover brightness-125 saturate-0" src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="">
              <div class="absolute inset-0 bg-[#284d79] mix-blend-multiply"></div>
              <div class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
              </div>
              <figure class="relative isolate">
                <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20">
                  <path id="0ef284b8-28c2-426e-9442-8655d393522e" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
                </svg>
                <!-- <img src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-white.svg" alt="" class="h-12 w-auto"> -->
                <div class="w-full max-w-md p-6 mt-4">
                  <h2 class="text-lg font-bold text-white text-gray-800 mb-2">Calculate Your Returns</h2>
                  <input type="number" v-model="investmentAmount" placeholder="Enter Amount" class="w-full p-2 py-3.5 border rounded-lg bg-gray-25 outline-none  mb-3" />
                 <div class="mt-4 pt-4">
                  <div class="text-white flex justify-between text-lg items-center">
                    <p>Expected Returns: </p>
                    <p class="text-green-600 font-semibold">₦{{ calculateReturns().toLocaleString() }}</p>
                  </div>
                 </div>
                </div>
              </figure>
            </div>
          </div>
          <div>
            <div class="text-base/7 text-gray-700 lg:max-w-lg">
              <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ investment.title ?? 'Nil' }}</h1>
              <div class="max-w-xl">
                <p class="mt-6">{{ investment.description ?? 'Nil' }}</p>
              </div>
            </div>
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li class="flex gap-x-3">
                  <svg class="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                  </svg>
                  <span><strong class="font-semibold text-gray-900">How it Works.</strong> Invest a minimum of ₦100,000 for a defined period and earn up to 25% in accrued interest with your principal. </span>
                </li>
                <li class="flex gap-x-3">
                  <svg class="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                  </svg>
                  <span><strong class="font-semibold text-gray-900">Who can Invest?</strong>Passive investors seeking to invest one-off in return for a bulk payment of maturity.
                    . </span>
                </li>
              </ul>
            <div class="mt-6">
              <h2 class="text-lg font-bold text-gray-800 mb-2"><strong class="font-semibold text-gray-900">Features and Benefits</strong></h2>
              <ul class="list-disc text-gray-600">
                <li class="flex items-center gap-x-2 text-sm" v-for="(feature, index) in investment.features" :key="index">
                <div class="flex justify-center items-center text-sm space-x-3">
                  <p>✅</p>
                  <p class="ml-3"> {{ feature }}</p>
                </div>
                </li>
              </ul>
            </div>
              <div class="max-lg:mt-16 lg:col-span-1 pt-6">
            <dl class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div class="flex flex-col gap-y-2  border-dotted border-gray-200 pb-4">
                <dt class="text-sm/6 font-semibold text-gray-600">Minimum Investment</dt>
                <dd class="order-first text-6xl font-semibold tracking-tight"><span>100,000</span></dd>
              </div>
              <div class="flex flex-col gap-y-2  border-dotted border-gray-200 pb-4">
                <dt class="text-sm/6 font-semibold text-gray-600">Interest rate</dt>
                <dd class="order-first text-6xl font-semibold tracking-tight"><span>25%</span></dd>
              </div>
            </dl>
          </div>
            <div class="mt-10 flex">
              <a href="#" class="text-base/7 font-semibold text-indigo-600">Apply for Fixed Investment Note.<span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
      </template>
      
      <script>
    //   import { ChevronLeftIcon } from 'lucide-vue-next';
      
      export default {
        // components: { ChevronLeftIcon },
        data() {
          return {
            investment: {
              image: '/path-to-investment-image.jpg',
              title: 'Fixed Investment Note',
              description: 'If you love simplicity and adaptability, our high-quality Fixed Investment Note is the perfect investment product for you. It generates passive income for you, provide capital preservation and gives you opportunity to diversify your portfolio.',
              // description: 'Our Discount Note investment offers you immediate value by offering upfront interest payments on your investment, with your principal amount disbursed upon maturity. You can choose to reinvest your earning immediately in another product or retain it in your interest-earning Loan IQ Wallet account for various transactional purposes.',
              interestRate: 25,
              minInvestment: 100000,
              eligibility: 'Passive investors seeking to invest one-off in return for a bulk payment of maturity.',
              features: [
  "Minimum tenure of 3 months and maximum of 1 year renewable tenure.",
  "Investors can engage effortlessly, observing their wealth grow steadily throughout the chosen duration.",
  "Investment could be liquidated before maturity, subject to pre-liquidation fee charged on interest only.",
  "Interest can be paid out monthly, quarterly, bi-annually, or at maturity."
]
            },
            investmentAmount: 100000
          };
        },
        methods: {
          calculateReturns() {
            return (this.investmentAmount * (this.investment.interestRate / 100));
          },
          investNow() {
            alert('Investment process initiated!');
          }
        }
      };

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
      </script>
      
      <style scoped>
      button {
        transition: transform 0.2s ease-in-out;
      }
      button:hover {
        transform: scale(1.05);
      }
      </style>
      