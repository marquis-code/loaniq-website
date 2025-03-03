<template>
    <main>
        <div class="bg-white py-16">
            <div class="mx-auto max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="lg:col-span-5" data-aos="fade-up">
                        <h2 class="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
                        <p class="mt-6 max-w-2xl text-base leading-7 text-gray-800">Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
                            <!-- <a href="mailto:info@loaniq.ng" class="font-semibold text-indigo-400 hover:text-indigo-300">sending us an email</a>  -->
                            <a href="mailto:info@loaniq.ng" class="font-semibold text-[#284d79]">
  Send us an email
</a>
                            and we’ll get back to you as soon as we can.</p>
                    </div>
                    <div class="lg:col-span-7 lg:mt-0 space-y-8 pt-6 md:pt-0" data-aos="fade-up">
                        <div v-for="item in faqs" :key="item.id" class="overflow-hidden border-b">
                            <button
                                class="w-full text-left py-2 transition-colors duration-300 flex justify-between items-center pb-9"
                                @click="toggle(item.id)">
                                <p class="text-gray-800 font-semibold text-base md:text-lg">
                                    {{ item.question }}
                                </p>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                    <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500 pb-3"
                                :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
                                <p class="p-1 lg:p-4 text-gray-700 text-sm font-light md:text-base rounded-lg">
                                    {{ item.answer }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template> 

<script lang="ts" setup>
const faqs = [
    {
        id: 1, 
        question: 'How do I apply for a loan with Loan IQ Limited?', 
        answer: `Applying for a loan is easy! Fill out the online application form, and our team will guide you through the rest of the process.`
    },
    // {
    //     id: 2, 
    //     question: 'What types of loans do you offer?', 
    //     answer: `We offer a range of loans, including personal loans, business loans, and more. Explore our diverse loan products designed to meet your unique financial needs.`
    // },
    {
        id: 3,
        question: `What are the interest rates on your loans?`,
        answer: `Our interest rates are competitive and vary based on the type of loan and individual circumstances. Get in touch with us for personalized information tailored to your needs.`
    },
    {
        id: 4,
        question: `How quickly can I get my loan approved and disbursed?`,
        answer: `We understand the importance of timely assistance. In many cases, loans can be approved and disbursed within a few minutes to provide you with swift access to funds`
    },
    {
        id: 5,
        question: `What sets Loan IQ Limited apart from other lenders?`,
        answer: `We stand out with our commitment to trust, transparency, and personalized solutions. Our competitive rates, real-time support, and efficient customer service contribute to an exceptional borrowing experience.`
    }
];


const openId = ref(null)
const maxHeight = ref(0)

const toggle = (id: any) => {
    openId.value = openId.value === id ? null : id
    maxHeight.value = openId.value ? 200 : 0
}

const isOpen = (id: any) => {
    return openId.value === id
}

const isClose = (id: any) => {
    return openId.value !== id
}
</script>
