<template>
    <div>
      <h2 class="text-lg font-medium mb-4">Legal ID Information</h2>
      <form v-if="!loading && Object.keys(profileObj)?.length" @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">Your ID Type</label>
            <select v-model="profileObj.idType" class="w-full border-[0.5px] border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm outline-none px-3">
              <option>National Identity Card</option>
              <option>Driver's License</option>
              <option>Voter's Card</option>
              <option>International Passport</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">ID Number</label>
            <input v-model="profileObj.idNumber" class="w-full border-[0.5px] border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Issue Date</label>
            <input type="date" v-model="profileObj.issueDate" class="w-full border-[0.5px] border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm outline-none px-3" />
          </div>
        </div>
  
        <div class="mt-8">
          <h3 class="text-lg font-medium mb-4 mt-6">Upload Documents</h3>
          <div class="grid lg:grid-cols-2 gap-4 max-w-3xl">
            <!-- Front Copy -->
            <div class="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow">
              <div class="flex justify-between items-center bg-blue-100 py-2 px-3 rounded-t-md">
                <h3 class="text-gray-700 font-medium text-center">Front Copy</h3>
                <input type="file" accept="image/*" @change="onFileChange('front', $event)" class="hidden" ref="frontInput" />
              </div>
              <div class="flex items-center justify-center h-40 bg-white rounded-b-md">
                <template v-if="frontLoading">
                  <span class="loader"></span>
                </template>
                <template v-else-if="frontImage">
                  <img :src="frontImage" alt="Front Copy" class="h-full object-contain" />
                </template>
                <template v-else>
                  <button type="button" @click="triggerUpload('front')" class="flex items-center justify-center text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FC8A8A" stroke-width="2" stroke-dasharray="4 4"/>
                            <path d="M23.9996 9.59961C16.0652 9.59961 9.59961 16.0652 9.59961 23.9996C9.59961 31.934 16.0652 38.3996 23.9996 38.3996C31.934 38.3996 38.3996 31.934 38.3996 23.9996C38.3996 16.0652 31.934 9.59961 23.9996 9.59961ZM29.7596 25.0796H25.0796V29.7596C25.0796 30.35 24.59 30.8396 23.9996 30.8396C23.4092 30.8396 22.9196 30.35 22.9196 29.7596V25.0796H18.2396C17.6492 25.0796 17.1596 24.59 17.1596 23.9996C17.1596 23.4092 17.6492 22.9196 18.2396 22.9196H22.9196V18.2396C22.9196 17.6492 23.4092 17.1596 23.9996 17.1596C24.59 17.1596 25.0796 17.6492 25.0796 18.2396V22.9196H29.7596C30.35 22.9196 30.8396 23.4092 30.8396 23.9996C30.8396 24.59 30.35 25.0796 29.7596 25.0796Z" fill="#687181"/>
                            </svg>
                  </button>
                </template>
              </div>
            </div>
  
            <!-- Back Copy -->
            <div class="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow">
              <div class="flex justify-between items-center bg-blue-100 py-2 px-3 rounded-t-md">
                <h3 class="text-gray-700 font-medium text-center">Back Copy</h3>
                <input type="file" accept="image/*" @change="onFileChange('back', $event)" class="hidden" ref="backInput" />
              </div>
              <div class="flex items-center justify-center h-40 bg-white rounded-b-md">
                <template v-if="backLoading">
                  <span class="loader"></span>
                </template>
                <template v-else-if="backImage">
                  <img :src="backImage" alt="Back Copy" class="h-full object-contain" />
                </template>
                <template v-else>
                  <button type="button" @click="triggerUpload('back')" class="flex items-center justify-center text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FC8A8A" stroke-width="2" stroke-dasharray="4 4"/>
                            <path d="M23.9996 9.59961C16.0652 9.59961 9.59961 16.0652 9.59961 23.9996C9.59961 31.934 16.0652 38.3996 23.9996 38.3996C31.934 38.3996 38.3996 31.934 38.3996 23.9996C38.3996 16.0652 31.934 9.59961 23.9996 9.59961ZM29.7596 25.0796H25.0796V29.7596C25.0796 30.35 24.59 30.8396 23.9996 30.8396C23.4092 30.8396 22.9196 30.35 22.9196 29.7596V25.0796H18.2396C17.6492 25.0796 17.1596 24.59 17.1596 23.9996C17.1596 23.4092 17.6492 22.9196 18.2396 22.9196H22.9196V18.2396C22.9196 17.6492 23.4092 17.1596 23.9996 17.1596C24.59 17.1596 25.0796 17.6492 25.0796 18.2396V22.9196H29.7596C30.35 22.9196 30.8396 23.4092 30.8396 23.9996C30.8396 24.59 30.35 25.0796 29.7596 25.0796Z" fill="#687181"/>
                            </svg>
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
  
        <div class="pt-3">
          <button :disabled="processing" type="submit" class="bg-[#2F6D67] disabled:cursor-not-allowed disabled:opacity-25 text-white px-6 py-3 rounded-md text-sm mt-6">
            {{ processing ? 'Processing...' : 'Save Changes' }}
          </button>
        </div>
      </form>
      <section class="w-full rounded-lg" v-else-if="loading && !Object.keys(profileObj)?.length">
        <div class="rounded-md h-44 bg-gray-100 animate-pulse p-4 w-full mx-auto mt-10"></div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUploadFile } from "@/composables/core/upload";
  import { useUploadGovernmentID } from "@/composables/modules/profile/uploadGovermentID";
  import { useFetchGovermentId } from "@/composables/modules/profile/getGovermentId";
  import { ref } from "vue";
  
  const { uploadFile, uploadResponse } = useUploadFile();
  const { uploadGovernmentID, loading: processing, setPayload } = useUploadGovernmentID();
  const { loading, profileObj } = useFetchGovermentId();
  
  const frontImage = ref<string | null>(null);
  const backImage = ref<string | null>(null);
  const frontLoading = ref(false);
  const backLoading = ref(false);
  const frontInput = ref<HTMLInputElement | null>(null);
  const backInput = ref<HTMLInputElement | null>(null);
  
  const onFileChange = async (type: "front" | "back", event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      const reader = new FileReader();
      if (type === "front") {
        frontLoading.value = true;
        await uploadFile(file);
        frontImage.value = uploadResponse.value?.url;
        frontLoading.value = false;
      } else if (type === "back") {
        backLoading.value = true;
        await uploadFile(file);
        backImage.value = uploadResponse.value?.url;
        backLoading.value = false;
      }
      reader.readAsDataURL(file);
    }
  };
  
  const triggerUpload = (type: "front" | "back") => {
    if (type === "front" && frontInput.value) {
      frontInput.value.click();
    } else if (type === "back" && backInput.value) {
      backInput.value.click();
    }
  };
  
  const handleSubmit = async () => {
    const payload = {
      idType: profileObj.value.idType,
      idNumber: profileObj.value.idNumber,
      issueDate: profileObj.value.issueDate,
      documentBackCopy: backImage.value,
      documentFrontCopy: frontImage.value,
    }
    setPayload(payload);
    await uploadGovernmentID();
  };
  </script>
  
  <style scoped>
  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  