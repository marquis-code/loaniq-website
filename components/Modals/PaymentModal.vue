<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <!-- Modal Container -->
    <div class="bg-white max-w-md w-full p-6 md:p-8 rounded-lg shadow-lg relative">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-4 right-4 text-red-600 hover:text-red-800">
        <span class="text-2xl">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.588 2.66602H10.4146C5.5613 2.66602 2.66797 5.55935 2.66797 10.4127V21.5727C2.66797 26.4393 5.5613 29.3327 10.4146 29.3327H21.5746C26.428 29.3327 29.3213 26.4393 29.3213 21.586V10.4127C29.3346 5.55935 26.4413 2.66602 21.588 2.66602ZM20.4813 19.066C20.868 19.4527 20.868 20.0927 20.4813 20.4793C20.2813 20.6793 20.028 20.7727 19.7746 20.7727C19.5213 20.7727 19.268 20.6793 19.068 20.4793L16.0013 17.4127L12.9346 20.4793C12.7346 20.6793 12.4813 20.7727 12.228 20.7727C11.9746 20.7727 11.7213 20.6793 11.5213 20.4793C11.1346 20.0927 11.1346 19.4527 11.5213 19.066L14.588 15.9993L11.5213 12.9327C11.1346 12.546 11.1346 11.906 11.5213 11.5193C11.908 11.1327 12.548 11.1327 12.9346 11.5193L16.0013 14.586L19.068 11.5193C19.4546 11.1327 20.0946 11.1327 20.4813 11.5193C20.868 11.906 20.868 12.546 20.4813 12.9327L17.4146 15.9993L20.4813 19.066Z"
              fill="#DD3636" />
          </svg>

        </span>
      </button>

      <!-- User Profile and Greeting -->
      <div class="flex flex-col mb-6 pt-20">
        <img src="@/assets/img/avatar.png" alt="User Profile" class="w-20 h-20 rounded-full mb-4" />
        <h2 v-if="Object.keys(profileInfoObj)?.length && !loading" class="text-xl font-semibold text-[#333333]">Hi
          <span>{{ profileInfoObj?.profile?.firstName }} {{
            profileInfoObj?.profile?.lastName }},</span>
        </h2>
        <section class="w-full rounded-lg" v-else-if="loading && !Object.keys(profileInfoObj)?.length">
            <div class="rounded-md h-10 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"></div>
          </section>
          <span v-else>Nil</span>
        <p class="text-[#687181] leading-loose  mt-2">
          Before you proceed to payment, you must accept the LoanIQ Product’s Terms of Agreement and append the
          e-signature
        </p>
      </div>

      <!-- Input Field -->
      <div class="mb-4">
        <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Your First And Last Name</label>
        <div v-if="Object.keys(profileInfoObj)?.length && !loading" class="relative">
          <input id="fullName" type="text" :value="computedFullName"
            class="w-full py-3.5 px-4 border bg-[#F4F5F7] border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" />
          <span class="absolute inset-y-0 right-3 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#292D32" />
              <path
                d="M12 14.0671C11.4896 14.0671 11.0664 13.6667 11.0664 13.1838V12.9364C11.0664 11.5701 12.1245 10.8987 12.5228 10.6396C12.9834 10.3451 13.1328 10.1449 13.1328 9.83868C13.1328 9.24975 12.6224 8.76679 12 8.76679C11.3776 8.76679 10.8672 9.24975 10.8672 9.83868C10.8672 10.3216 10.444 10.7221 9.93362 10.7221C9.42324 10.7221 9 10.3216 9 9.83868C9 8.27213 10.3444 7 12 7C13.6556 7 15 8.27213 15 9.83868C15 11.1814 13.9544 11.8528 13.5685 12.1001C13.083 12.4064 12.9336 12.6066 12.9336 12.9364V13.1838C12.9336 13.6785 12.5104 14.0671 12 14.0671Z"
                fill="#292D32" />
              <path
                d="M12 17.0001C11.4772 17.0001 11.0664 16.5996 11.0664 16.1167C11.0664 15.6337 11.4896 15.2333 12 15.2333C12.5104 15.2333 12.9336 15.6337 12.9336 16.1167C12.9336 16.5996 12.5229 17.0001 12 17.0001Z"
                fill="#292D32" />
            </svg>

          </span>
        </div>
        <section class="w-full rounded-lg" v-else-if="loading && !Object.keys(profileInfoObj)?.length">
            <div class="rounded-md h-10 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"></div>
          </section>
          <span v-else>Nil</span>
      </div>

      <!-- Terms and Conditions -->
      <p class="text-sm text-gray-500 mb-6">
        By signing this form electronically, you are agreeing to the <span class="font-semibold text-[#323740]">Terms
          and Conditions</span> stated therein.
      </p>

      <!-- Process Payment Button -->
      <div class="pt-6">
        <button @click="router.push(`/dashboard/investments/explore-investments/${product?.id}/payment`)"
          class="w-full py-3.5 text-white font-medium bg-[#2F6D67] rounded-md hover:bg-[#2F6D67] flex items-center justify-center">
          Process payment <span class="ml-2"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4.16671L13.8333 10L8 15.8334" stroke="white" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useFetchStats } from '@/composables/modules/dashboard/fetchStats'
const { loading, profileInfoObj } = useFetchStats()
const router = useRouter()

// Emit an event to close the modal
const emit = defineEmits(['close']);

const props = defineProps({
  product: {
    type: Object  
  }
})

const computedFullName = computed(() => {
  if (profileInfoObj.value) {
    return `${profileInfoObj?.value?.profile?.firstName} ${profileInfoObj?.value?.profile?.lastName}`
  }
})

function closeModal() {
  emit('close');
}
</script>

<style scoped>
/* Ensures the modal is centered and has a backdrop */
.fixed {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
