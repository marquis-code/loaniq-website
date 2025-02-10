<template>
    <div id="testimonials" class="w-full overflow-hidden bg-gray-25 py-32">
        <section class="pl-10 lg:pl-32">
        <div data-aos="fade-up" class="inline-block px-4 py-2.5 mb-6 bg-gray-50 rounded-full">
        <span class="text-[#284d79] font-medium">Testimonials</span>
      </div>
      
      <h1 data-aos="fade-up" class="text-4xl md:text-5xl font-medium text-gray-900 mb-4 -mt-2">
        Don’t just take our word for it
      </h1>
      
      <p data-aos="fade-up" class="text-gray-600  mb-16">
        Here is what people are saying about us
      </p>
     </section>
      <div data-aos="fade-up" class="relative">
        <!-- First row - Left to Right -->
        <div 
          class="flex animate-scroll-left"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials1" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-lg font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icons/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Second row - Right to Left -->
        <div 
          class="flex animate-scroll-right mt-6"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials2" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-lg font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icons/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  interface Testimonial {
    id: number;
    content: string;
    name: string;
    role: string;
    avatar: string;
  }
  
  const testimonials1: Testimonial[] = [
  {
    id: 1,
    content: "LoanIQ Limited made my business expansion seamless. The loan approval process was straightforward, and their team was always available to guide me. Highly recommended!",
    name: "Chinedu Okafor",
    role: "CEO @ Okafor Ventures",
    avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "I needed a personal loan for my daughter's tuition, and LoanIQ came through. Their transparent process and reasonable interest rates made all the difference.",
    name: "Aisha Lawal",
    role: "Lecturer @ University of Lagos",
    avatar: "https://images.unsplash.com/photo-1546961329-78bef7c1f2dd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "My business needed urgent funding, and LoanIQ Limited delivered beyond my expectations. Their professionalism and customer service are top-notch!",
    name: "Ifeanyi Eze",
    role: "Founder @ EzeTech Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    content: "I was skeptical about taking a loan, but LoanIQ made the process stress-free. Their flexible repayment plan gave me the confidence to proceed.",
    name: "Omolola Adeyemi",
    role: "Fashion Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    content: "As a startup founder, getting access to funding can be challenging. LoanIQ Limited helped me secure the capital I needed, and today, my business is thriving!",
    name: "Tobi Adebayo",
    role: "CEO @ NaijaTech Hub",
    avatar: "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 6,
    content: "LoanIQ’s customer service is exceptional! Their team ensured I understood every detail of my loan agreement before proceeding. No hidden fees, just transparency!",
    name: "Fatima Abdullahi",
    role: "Real Estate Developer",
    avatar: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 7,
    content: "Thanks to LoanIQ, I was able to consolidate my debts and get back on track financially. Their low-interest rates and flexible repayment options were a lifesaver.",
    name: "Daniel Chukwuma",
    role: "Banking Executive",
    avatar: "https://images.unsplash.com/photo-1518749123302-ff97a512b6cf?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 8,
    content: "I got a business loan from LoanIQ to restock my inventory, and I am already seeing great returns. Their loan process was quick and hassle-free!",
    name: "Bukola Oyewole",
    role: "Retail Store Owner",
    avatar: "https://images.unsplash.com/photo-1523303821445-f2983744a23e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 9,
    content: "I appreciate how LoanIQ took the time to understand my needs before offering a financial solution. The trust and transparency they operate with are commendable.",
    name: "Jide Akinwale",
    role: "Project Manager @ Blueprints Ltd",
    avatar: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 10,
    content: "LoanIQ Limited made my dream of owning a home a reality. Their mortgage solutions were tailored to my financial situation, and I couldn’t be happier!",
    name: "Grace Nwankwo",
    role: "HR Consultant",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];
  
  const testimonials2: Testimonial[] =[
  {
    id: 1,
    content: "LoanIQ Limited made my business expansion seamless. The loan approval process was straightforward, and their team was always available to guide me. Highly recommended!",
    name: "Chinedu Okafor",
    role: "CEO @ Okafor Ventures",
    avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "I needed a personal loan for my daughter's tuition, and LoanIQ came through. Their transparent process and reasonable interest rates made all the difference.",
    name: "Aisha Lawal",
    role: "Lecturer @ University of Lagos",
    avatar: "https://images.unsplash.com/photo-1546961329-78bef7c1f2dd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "My business needed urgent funding, and LoanIQ Limited delivered beyond my expectations. Their professionalism and customer service are top-notch!",
    name: "Ifeanyi Eze",
    role: "Founder @ EzeTech Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    content: "I was skeptical about taking a loan, but LoanIQ made the process stress-free. Their flexible repayment plan gave me the confidence to proceed.",
    name: "Omolola Adeyemi",
    role: "Fashion Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    content: "As a startup founder, getting access to funding can be challenging. LoanIQ Limited helped me secure the capital I needed, and today, my business is thriving!",
    name: "Tobi Adebayo",
    role: "CEO @ NaijaTech Hub",
    avatar: "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 6,
    content: "LoanIQ’s customer service is exceptional! Their team ensured I understood every detail of my loan agreement before proceeding. No hidden fees, just transparency!",
    name: "Fatima Abdullahi",
    role: "Real Estate Developer",
    avatar: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 7,
    content: "Thanks to LoanIQ, I was able to consolidate my debts and get back on track financially. Their low-interest rates and flexible repayment options were a lifesaver.",
    name: "Daniel Chukwuma",
    role: "Banking Executive",
    avatar: "https://images.unsplash.com/photo-1518749123302-ff97a512b6cf?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 8,
    content: "I got a business loan from LoanIQ to restock my inventory, and I am already seeing great returns. Their loan process was quick and hassle-free!",
    name: "Bukola Oyewole",
    role: "Retail Store Owner",
    avatar: "https://images.unsplash.com/photo-1523303821445-f2983744a23e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 9,
    content: "I appreciate how LoanIQ took the time to understand my needs before offering a financial solution. The trust and transparency they operate with are commendable.",
    name: "Jide Akinwale",
    role: "Project Manager @ Blueprints Ltd",
    avatar: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 10,
    content: "LoanIQ Limited made my dream of owning a home a reality. Their mortgage solutions were tailored to my financial situation, and I couldn’t be happier!",
    name: "Grace Nwankwo",
    role: "HR Consultant",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

  const pauseScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'paused';
};

const resumeScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'running';
};
  </script>
  
  <style scoped>
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .animate-scroll-left {
    animation: scroll-left linear infinite;
    animation-play-state: running;
  }
  
  .animate-scroll-right {
    animation: scroll-right linear infinite;
    animation-play-state: running;
  }
  
  /* Add subtle hover effect to cards */
  .group:hover .hover\:shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  </style>