
<template>
    <div>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-32 w-auto" src="@/assets/icons/logo.svg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#1D2739] max-w-sm mx-auto">Welcome back admin@blackcountry.com</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-[#1D2739]">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" placeholder="Enter your email" autocomplete="email" class="block outline-none bg-[#E4E7EC] border w-full rounded-md pl-3 py-3.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-inset" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-[#1D2739]">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" placeholder="Enter your password" name="password" type="password" autocomplete="current-password"  class="block outline-none border bg-[#E4E7EC] w-full pl-3 rounded-md py-3.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400" />
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
        <!-- <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p> -->
      </div>
    </div>
  </template>
  

<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
</script>
