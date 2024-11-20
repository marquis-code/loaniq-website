<template>
    <div>
      <h2 class="text- font-medium mb-4">Next of kin personal information</h2>
      <form v-if="!loading && Object.keys(profileObj)?.length"  @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">First And Last Name</label>
            <input v-model="profileObj.fullName"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Relationship</label>
            <select v-model="profileObj.relationship"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Gender</label>
            <select v-model="profileObj.gender"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Email Address</label>
            <input type="email" v-model="profileObj.email"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Phone Number</label>
            <input v-model="profileObj.phoneNumber"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Residential Address</label>
            <input v-model="profileObj.residentialAddress"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">State Of Residence</label>
            <select v-model="profileObj.stateOfResidence"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option value="lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Enugu">Enugu</option>
            </select>
          </div>
        </div>
        <div class="pt-3">
            <button :disabled="processing" type="submit" class="bg-[#2F6D67] disabled:cursor-not-allowed disabled:opacity-25 text-white px-6 py-3 rounded-md text-sm mt-6">{{ processing ? 'processing..' : 'Save changes' }}</button>
           </div>
      </form>
      <section class="w-full rounded-lg" v-else-if="loading && !Object.keys(profileObj)?.length">
            <div class="rounded-md h-44 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"></div>
          </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUploadNextOfKinProfile } from '@/composables/modules/profile/uploadNextOfKinProfile'
  import { useFetchNextOfKinProfile } from '@/composables/modules/profile/getNextOfKinProfile'
  const { profileObj, loading } = useFetchNextOfKinProfile()
  const { uploadNextOfKinProfile,
    loading: processing, setPayload } = useUploadNextOfKinProfile()
  
  
    const handleSubmit = async () => {
     setPayload(profileObj.value)
    await uploadNextOfKinProfile()
}
  </script>
  