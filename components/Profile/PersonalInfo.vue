<template>
    <div>
      <h2 class="text- font-medium mb-4">Personal information</h2>
      <form v-if="!loading && profileInfoObj?.profile" @submit.prevent="saveChanges" class="space-y-6">
        <div class="grid lg:grid-cols-2 gap-4">
          <div class="flex justify-between items-center bg-blue-100 py-2 px-3 rounded-t-md">
              <h3 class="text-gray-700 font-medium text-center">Front Copy</h3>
              <input type="file" accept="image/*" @change="onFileChange" class="hidden"
                ref="frontInput" />
            </div>
          <div class="flex items-center justify-center h-40 bg-white rounded-b-md">
              <template v-if="uploading">
                <span class="loader"></span>
              </template>
              <template v-else-if="userProfileAvatar">
                <img :src="userProfileAvatar" alt="profile image" class="h-full object-contain" />
              </template>
              <template v-else>
                <button type="button" @click="triggerUpload()"
                  class="flex items-center justify-center text-gray-500">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FC8A8A" stroke-width="2"
                      stroke-dasharray="4 4" />
                    <path
                      d="M23.9996 9.59961C16.0652 9.59961 9.59961 16.0652 9.59961 23.9996C9.59961 31.934 16.0652 38.3996 23.9996 38.3996C31.934 38.3996 38.3996 31.934 38.3996 23.9996C38.3996 16.0652 31.934 9.59961 23.9996 9.59961ZM29.7596 25.0796H25.0796V29.7596C25.0796 30.35 24.59 30.8396 23.9996 30.8396C23.4092 30.8396 22.9196 30.35 22.9196 29.7596V25.0796H18.2396C17.6492 25.0796 17.1596 24.59 17.1596 23.9996C17.1596 23.4092 17.6492 22.9196 18.2396 22.9196H22.9196V18.2396C22.9196 17.6492 23.4092 17.1596 23.9996 17.1596C24.59 17.1596 25.0796 17.6492 25.0796 18.2396V22.9196H29.7596C30.35 22.9196 30.8396 23.4092 30.8396 23.9996C30.8396 24.59 30.35 25.0796 29.7596 25.0796Z"
                      fill="#687181" />
                  </svg>
                </button>
              </template>
            </div>
          <div v-if="profileInfoObj.profile">
            <label class="block text-gray-600 text-sm pb-2">First And Last Name</label>
            <input v-model="profileInfoObj.profile.firstName"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your full name" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Gender</label>
            <select v-model="profileInfoObj.profile.gender"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option selected value="Male">Male</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Date Of Birth</label>
            <input type="date" v-model="profileInfoObj.profile.dateOfBirth"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Marital Status</label>
            <select v-model="profileInfoObj.profile.maritalStatus"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option selected value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">BVN</label>
            <input v-model="profileInfoObj.profile.bvn"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your BVN" />
          </div>
        </div>
        
        <h3 class="text- font-medium mt-8 mb-4">Contact information</h3>
        <div class="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">Email Address</label>
            <input type="email" v-model="profileInfoObj.profile.email"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your email" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Phone Number</label>
            <div class="flex items-center">
              <span class="px-3 py-4 border rounded-l-md border-[0.5px] bg-gray-100 text-gray-600 text-sm pb-2">+234</span>
              <input v-model="profileInfoObj.profile.phoneNumber" class="w-full border border-gray-300 rounded-r-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your phone number" />
            </div>
          </div>
          <div class="col-span-2">
            <label class="block text-gray-600 text-sm pb-2">Residential Address</label>
            <input v-model="profileInfoObj.profile.residentialAddress"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your residential address" />
          </div>
          <div class="w-full">
            <label class="block text-gray-600 text-sm pb-2">State Of Residence</label>
            <select v-model="profileInfoObj.profile.stateOfResidence"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Enugu">Enugu</option>
            </select>
          </div>
        </div>
  
        <div class="pt-3">
            <button type="submit" class="bg-[#2F6D67] text-white px-6 py-3 rounded-md text-sm mt-6">Save changes</button>
           </div>
      </form>
      <section class="w-full rounded-lg" v-else-if="loading && !Object.keys(profileInfoObj)?.length">
            <div class="rounded-md h-44 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"></div>
          </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUpdateProfile } from '@/composables/modules/profile/updateProfile'
  import { useUploadFile } from '@/composables/core/upload'
    import { useFetchStats } from '@/composables/modules/dashboard/fetchStats'
    const { loading, profileInfoObj } = useFetchStats()
    const { updateProfile, loading: processing, setPayload } = useUpdateProfile()
    const { uploadFile, loading: uploading, uploadResponse } = useUploadFile()

  const saveChanges = async () => {
    // Logic to save changes can go here
    const payload = {
      avatar: userProfileAvatar.value
    }
    setPayload(payload);
    await updateProfile();
    // console.log('Personal info saved', personalInfo.value)
  }

  const userProfileAvatar = ref<string | null>(null);
    const profileImageInput = ref<HTMLInputElement | null>(null);

    const onFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
      uploading.value = true;
      await uploadFile(file);
      userProfileAvatar.value = uploadResponse.value?.url;
      uploading.value = false;
      reader.readAsDataURL(file);
  }
};

const triggerUpload = () => {
  if (profileImageInput.value) {
    profileImageInput.value.click();
  }
};
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    outline: none;
    transition: border-color 0.3s;
  }
  .input:focus {
    border-color: #3b82f6;
  }
  
  .btn-primary {
    background-color: #047857;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s;
  }
  </style>
  