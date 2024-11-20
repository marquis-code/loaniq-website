<template>
    <section
    :style="{
      background: 'linear-gradient(180deg, rgb(97, 111, 164) 0%, rgb(18, 45, 118) 100%)'
    }"
      class="h-screen flex flex-col items-center justify-between text-white bg-gradient-success p-6"
    >
      <!-- Success Header -->
      <div class="text-center mt-6">
        <h1 class="text-3xl font-bold text-blue-400">SUCCESSFUL</h1>
        <p class="text-sm mt-1 tracking-wide">ID CONFIRMED, YOU MAY ENTER!</p>
      </div>
  
      <!-- Face Image -->
      <div class="mt-6 rounded-full overflow-hidden w-40 h-40 border-4 border-white">
        <img
          src="@/assets/icons/checked.svg"
          alt="Verified Face"
          class="w-full h-full object-cover"
        />
      </div>
  
      <!-- Name -->
      <h2 class="text-lg font-bold mt-4 text-blue-400">{{ verifiedUser.firstName }} {{ verifiedUser.lastName }}</h2>

  
      <!-- Information Grid -->
      <div class="grid grid-cols-2 gap-x-6 gap-y-4 text-center text-sm max-w-md">
        <div>
          <p class="font-semibold">GENDER</p>
          <p class="text-blue-400">{{ verifiedUser?.gender ?? 'Nil' }}</p>
        </div>
        <div>
          <p class="font-semibold">PHONE NUMBER</p>
          <p class="text-blue-400">{{ verifiedUser?.phoneNumber ?? 'Nil' }}</p>
        </div>
        <div>
          <p class="font-semibold">BVN</p>
          <p class="text-blue-400">{{ verifiedUser.bvn ?? 'Nil' }}</p>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="flex justify-evenly w-full max-w-md pb-10 mt-10">
       <button type="button" @click="handleNavigation" class="bg-blue-400 text-white rounded-lg px-6 py-3">Continue</button>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useLivelinessCheck } from '@/composables/auth/liveliness_check'
  const { verifiedUser } = useLivelinessCheck()
 const route = useRoute()
 const router = useRouter()

 const handleNavigation = () => {
   router.push(`/create-password?userId=${route?.query?.userId}`)
 }
</script>
  