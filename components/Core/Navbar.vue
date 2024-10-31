
<template>
<main>
  <section class="bg-[#292929] sticky top-0 z-50">
    <nav class="flex items-center justify-between container mx-auto p-4 py-3 text-white">
      <div class="flex items-center space-x-4">
        <img src="@/assets/icons/white-logo-with-text.svg" alt="" />

      <div class="block lg:hidden">
        <button @click="isOpen = true" class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

        <div class="flex items-center space-x-2 hidden lg:flex">
          <NuxtLink to="/dashboard" class="px-4 py-3 rounded-lg flex items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/dashboard.svg" alt="" />

            Dashboard
        </NuxtLink>
          <NuxtLink to="/dashboard/listings" class="flex py-3 px-4 rounded-lg  items-center space-x-1 gap-x-1.5">
            <img src="@/assets/icons/listing.svg" alt="" />

            <span>Listings</span>
          </NuxtLink>
          <NuxtLink to="/dashboard/visitations" class="flex py-3 px-4 rounded-lg  items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/visitation.svg" alt="" />


            <span>Visitations</span>
          </NuxtLink>
          <NuxtLink to="/dashboard/earnings" class="flex py-3 px-4 rounded-lg items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/earnings.svg" alt="" />

            <span>Earnings</span>
          </NuxtLink>
          <NuxtLink to="/dashboard/messages" class="flex py-3 px-4 rounded-lg items-center gap-x-1.5 text-sm">
            <img src="@/assets/icons/messaging.svg" alt="" />

            <span>Messages</span>
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center space-x-4 hidden lg:flex">
        <img @click="router.push('/dashboard/notifications')" class="h-8 cursor-pointer" src="@/assets/icons/notification.svg" alt="" />

        <button @click="router.push('/dashboard/profile')" class="flex cursor-pointer items-center block space-x-2">
          <img src="@/assets/icons/user-icon.svg" alt="" />

          <span class="text-">Rufus Ugochukwu</span>
          <img src="@/assets/icons/more-caret.svg" alt="" />

        </button>
      </div>
    </nav>

    <div v-if="isOpen" class="relative z-30 xl:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>

    <div class="fixed inset-0 flex">
      <div class="relative mr-16 flex w-full max-w-xs flex-1">

        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
          <div class="flex h-16 shrink-0 items-center pt-4">
            <img src="@/assets/icons/logo-with-text.svg" alt="logo" class=" object-contain" />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-4">
                  <li>
                    <NuxtLink @click.native="isOpen = false" to="/dashboard" class="group flex gap-x-3 rounded-md p-2  py-3text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.08331 9.99967C2.08331 6.26772 2.08331 4.40175 3.24268 3.24237C4.40205 2.08301 6.26803 2.08301 9.99998 2.08301C13.7319 2.08301 15.5979 2.08301 16.7573 3.24237C17.9166 4.40175 17.9166 6.26772 17.9166 9.99967C17.9166 13.7316 17.9166 15.5976 16.7573 16.757C15.5979 17.9163 13.7319 17.9163 9.99998 17.9163C6.26803 17.9163 4.40205 17.9163 3.24268 16.757C2.08331 15.5976 2.08331 13.7316 2.08331 9.99967Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M5 7.50033H7.91667M14.1667 7.50033H15M10 6.66699V8.33366M12.0833 6.66699V8.33366" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 12.5003H10M5.83333 12.5003H5M7.91667 11.667V13.3337" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Dashboard
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink @click.native="isOpen = false" to="/dashboard/listings" class="group flex gap-x-3 rounded-md bg-gray-800 p-2 py-3 text-sm font-semibold leading-6 text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66669 15.0003C1.66669 13.7167 1.66669 13.0747 1.95563 12.6032C2.1173 12.3394 2.33913 12.1176 2.60296 11.9559C3.07447 11.667 3.71632 11.667 5.00002 11.667C6.28372 11.667 6.92557 11.667 7.39708 11.9559C7.66091 12.1176 7.88274 12.3394 8.04441 12.6032C8.33335 13.0747 8.33335 13.7167 8.33335 15.0003C8.33335 16.284 8.33335 16.9259 8.04441 17.3974C7.88274 17.6612 7.66091 17.8831 7.39708 18.0447C6.92557 18.3337 6.28372 18.3337 5.00002 18.3337C3.71632 18.3337 3.07447 18.3337 2.60296 18.0447C2.33913 17.8831 2.1173 17.6612 1.95563 17.3974C1.66669 16.9259 1.66669 16.284 1.66669 15.0003Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                        <path d="M11.6667 15.0003C11.6667 13.7167 11.6667 13.0747 11.9556 12.6032C12.1173 12.3394 12.3391 12.1176 12.6029 11.9559C13.0744 11.667 13.7164 11.667 15 11.667C16.2837 11.667 16.9256 11.667 17.3971 11.9559C17.6609 12.1176 17.8828 12.3394 18.0444 12.6032C18.3334 13.0747 18.3334 13.7167 18.3334 15.0003C18.3334 16.284 18.3334 16.9259 18.0444 17.3974C17.8828 17.6612 17.6609 17.8831 17.3971 18.0447C16.9256 18.3337 16.2837 18.3337 15 18.3337C13.7164 18.3337 13.0744 18.3337 12.6029 18.0447C12.3391 17.8831 12.1173 17.6612 11.9556 17.3974C11.6667 16.9259 11.6667 16.284 11.6667 15.0003Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                        <path d="M1.66669 5.00033C1.66669 3.71663 1.66669 3.07478 1.95563 2.60327C2.1173 2.33943 2.33913 2.11761 2.60296 1.95593C3.07447 1.66699 3.71632 1.66699 5.00002 1.66699C6.28372 1.66699 6.92557 1.66699 7.39708 1.95593C7.66091 2.11761 7.88274 2.33943 8.04441 2.60327C8.33335 3.07478 8.33335 3.71663 8.33335 5.00033C8.33335 6.28403 8.33335 6.92588 8.04441 7.39738C7.88274 7.66122 7.66091 7.88304 7.39708 8.04472C6.92557 8.33366 6.28372 8.33366 5.00002 8.33366C3.71632 8.33366 3.07447 8.33366 2.60296 8.04472C2.33913 7.88304 2.1173 7.66122 1.95563 7.39738C1.66669 6.92588 1.66669 6.28403 1.66669 5.00033Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                        <path d="M11.6667 5.00033C11.6667 3.71663 11.6667 3.07478 11.9556 2.60327C12.1173 2.33943 12.3391 2.11761 12.6029 1.95593C13.0744 1.66699 13.7164 1.66699 15 1.66699C16.2837 1.66699 16.9256 1.66699 17.3971 1.95593C17.6609 2.11761 17.8828 2.33943 18.0444 2.60327C18.3334 3.07478 18.3334 3.71663 18.3334 5.00033C18.3334 6.28403 18.3334 6.92588 18.0444 7.39738C17.8828 7.66122 17.6609 7.88304 17.3971 8.04472C16.9256 8.33366 16.2837 8.33366 15 8.33366C13.7164 8.33366 13.0744 8.33366 12.6029 8.04472C12.3391 7.88304 12.1173 7.66122 11.9556 7.39738C11.6667 6.92588 11.6667 6.28403 11.6667 5.00033Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                        </svg>
                      Listings
                      </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/dashboard/visitations" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md p-2 py-3 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.95951 11.0113C1.66533 9.09692 1.51824 8.13977 1.88016 7.29123C2.24208 6.44268 3.04505 5.86211 4.65097 4.70096L5.85085 3.83341C7.8486 2.38897 8.84744 1.66675 10 1.66675C11.1526 1.66675 12.1514 2.38897 14.1492 3.83341L15.3491 4.70096C16.955 5.86211 17.7579 6.44268 18.1199 7.29123C18.4818 8.13977 18.3347 9.09692 18.0405 11.0113L17.7897 12.6437C17.3726 15.3575 17.1641 16.7144 16.1909 17.5239C15.2176 18.3334 13.7948 18.3334 10.949 18.3334H9.05102C6.2053 18.3334 4.78245 18.3334 3.80919 17.5239C2.83593 16.7144 2.62741 15.3575 2.21038 12.6437L1.95951 11.0113Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                        
                     Visitations
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/dashboard/earnings" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md p-2 text-sm py-3 font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.95951 11.0113C1.66533 9.09692 1.51824 8.13977 1.88016 7.29123C2.24208 6.44268 3.04505 5.86211 4.65097 4.70096L5.85085 3.83341C7.8486 2.38897 8.84744 1.66675 10 1.66675C11.1526 1.66675 12.1514 2.38897 14.1492 3.83341L15.3491 4.70096C16.955 5.86211 17.7579 6.44268 18.1199 7.29123C18.4818 8.13977 18.3347 9.09692 18.0405 11.0113L17.7897 12.6437C17.3726 15.3575 17.1641 16.7144 16.1909 17.5239C15.2176 18.3334 13.7948 18.3334 10.949 18.3334H9.05102C6.2053 18.3334 4.78245 18.3334 3.80919 17.5239C2.83593 16.7144 2.62741 15.3575 2.21038 12.6437L1.95951 11.0113Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                        
                     Earnings
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/dashboard/messages" @click.native="isOpen = false" class="group flex gap-x-3 rounded-md py-3 p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8089 17.4084C15.2947 17.1768 18.0714 14.3607 18.2999 10.8254C18.3445 10.1336 18.3445 9.41709 18.2999 8.72526C18.0714 5.18999 15.2947 2.37395 11.8089 2.14223C10.6196 2.06318 9.37802 2.06335 8.19118 2.14223C4.70534 2.37395 1.92869 5.18999 1.70022 8.72526C1.65551 9.41709 1.65551 10.1336 1.70022 10.8254C1.78343 12.113 2.35288 13.3052 3.02328 14.3118C3.41253 15.0166 3.15563 15.8962 2.75019 16.6645C2.45786 17.2185 2.31169 17.4955 2.42905 17.6956C2.54642 17.8957 2.80857 17.9021 3.33288 17.9148C4.36974 17.9401 5.06892 17.6461 5.62392 17.2368C5.93869 17.0048 6.09608 16.8887 6.20455 16.8753C6.31302 16.862 6.52649 16.9499 6.95336 17.1258C7.33702 17.2838 7.78248 17.3813 8.19118 17.4084C9.37802 17.4873 10.6196 17.4875 11.8089 17.4084Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M9.99606 10H10.0035M13.3256 10H13.3331M6.66644 10H6.67392" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     Messages
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="mt-auto">
                <a
                  href="#"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 py-3 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <img
                    :src="dynamicIcons('settings')"
                    alt="settings"
                    class="h-6 w-6"
                  />
                  Settings
                </a>
                <a
                  href="#"
                  @click="showBLogoutModal = true"
                  class="group -mx-2 flex gap-x-3 rounded-md p-2 py-3 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <img
                    :src="dynamicIcons('logout')"
                    alt="logout"
                    class="h-6 w-6"
                  />
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
   </section>
   <CoreModalWithoutCloseBtn
  :isOpen="showBLogoutModal"
  @close="showBLogoutModal = false"
  >
  <div
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  @click.self="onCancel"
>
  <div class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
    <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
        <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
        <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    </div>
    <h2 class="text-lg font-semibold text-gray-700 mb-2">Logout</h2>
    <p class="text-gray-500 mb-6">Are you sure you want to logout?</p>
    <div class="space-y-3">
      <button
        type="button"
        class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
        @click="onConfirm"
      >
        Yes, log out
      </button>
      <button
        type="button"
        class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
        @click="onCancel"
      >
        Cancel
      </button>
    </div>
  </div>
</div>
  </CoreModalWithoutCloseBtn>
</main>
  </template>

  <script setup lang="ts">
const router = useRouter()
const isOpen = ref(false)
const showLogoutModal = ref(false);
const onConfirm = () => {
  showLogoutModal.value = true
  // Logic for logout
  localStorage.clear()
  setTimeout(() => {
    // loading.value = false
    showLogoutModal.value = false
    router.push('/login')
    window.location.href = "/login"
  }), 3000
  console.log("Logging out...");
};

const onCancel = () => {
  showLogoutModal.value = false
  // Logic to close the modal
  console.log("Cancelled");
};

</script>
  
  <style scoped>
  .router-link-exact-active {
    background-color: #5B8469;
    color: white;
  }
  </style>
  