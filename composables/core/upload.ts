

import { ref } from 'vue';
import { upload_api } from '@/api_factory/core/upload';
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const useUploadFile = () => {
  const loading = ref(false);
  const uploadResponse = ref({} as any);
  
  const { $_upload_file } = upload_api;

  const uploadFile = async (file: File) => {
    loading.value = true;
    try {
      // Create FormData and append the file directly
      const formData = new FormData();
      formData.append('file', file);  // Append the file, no conversion to Base64

      // Make the API call with FormData
      const res = await $_upload_file(formData) as any;
      console.log(res, 'upload response')
      showToast({
        title: "Success",
        message: "Upload was successful",
        toastType: "success",
        duration: 3000,
      });

      if (res.type !== 'ERROR') {
        uploadResponse.value = res.data.data ?? {};
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: "Error uploading file",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  return { uploadFile, loading, uploadResponse };
};
