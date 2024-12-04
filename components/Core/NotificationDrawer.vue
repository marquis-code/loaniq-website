<template>
  <div v-if="show" class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <!-- Background backdrop, show/hide based on slide-over state. -->
  <div class="fixed  inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>


  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
        <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full bg-gray-50 flex-col overflow-y-scroll">
            <div class="p-6">
              <div class="flex items-start justify-between">
                <h2 class="text-base font-semibold text-gray-900" id="slide-over-title">Notifications</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button @click="emit('close')" type="button" class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                    <span class="absolute -inset-2.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
    
            <ul role="list" class="flex-1 divide-y divide-gray-200 overflow-y-auto">
              <div class="p-4">
                <div>
                  <div v-for="(notifications, date) in notifications" :key="date" class="mb-6">
                    <h2 class="text-sm pb-2 font-semibold text-gray-800">{{ date }}</h2>
                    <ul class="space-y-2">
                      <li v-for="(notification, index) in notifications" :key="index" class="bg-white p-3 rounded-lg  flex items-center space-x-4">
                        <span class="relative inline-block shrink-0">
                        <img class="size-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                        <!-- Online: "bg-green-400", Offline: "bg-gray-300" -->
                        <span class="absolute right-0 top-0 block size-2.5 rounded-full bg-green-400 ring-2 ring-white" aria-hidden="true"></span>
                      </span>
                        <!-- <component :is="getIcon(notification.type)" class="h-6 w-6 text-gray-500" /> -->
                        <div>
                          <p class="text-sm text-gray-800">{{ notification.message }}</p>
                          <span class="text-xs text-gray-400">{{ notification.amount }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </template>
  
  <script setup lang="ts">
  // import inflow from '@/assets/icons/inflow.svg'
  //   import outflow from '@/assets/icons/outflow.svg'
  import { ref } from 'vue';

  const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    notifications: {
        type: Array,
        default: () => []
    }
  })

  const emit = defineEmits(['close'])
  
  const isNotificationHidden = ref(false);
  const isHidden = ref(true);
  
  const notifications = ref({
  "12/03/2024": [
    {
      "type": "credit",
      "message": "You received a credit of $100 from John Doe.",
      "amount": "$100"
    },
    {
      "type": "debit",
      "message": "You made a payment of $50 to Coffee Shop.",
      "amount": "$50"
    },
    {
      "type": "fraud-alert",
      "message": "Suspicious transaction detected. Please verify your recent activity.",
      "amount": "$0"
    }
  ],
  "12/02/2024": [
    {
      "type": "account-update",
      "message": "Your account has been updated. Review the changes in your profile.",
      "amount": "$0"
    }
  ]
});

// const getIcon = (type: string) => {
//   switch (type) {
//     case 'credit':
//       return inflow;  // Banknotes icon for credit transactions
//     case 'debit':
//       return outflow;  // Credit card icon for debit transactions
//     case 'fraud-alert':
//       return inflow;  // Shield icon for fraud alerts
//     case 'account-update':
//       return outflow;  // User circle icon for account updates
//     default:
//       return inflow;  // Default icon
//   }
// };

  
  const toggleNotification = () => {
    if (isNotificationHidden.value) {
      isNotificationHidden.value = false;
      setTimeout(() => {
        isHidden.value = false;
      }, 1000);
    } else {
      isNotificationHidden.value = true;
      setTimeout(() => {
        isHidden.value = true;
      }, 700);
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional custom styles if necessary */
  </style>
  