import { ref } from "vue";
import { dashboard_api } from "@/api_factory/modules/dashboard";
import { useCustomToast } from "@/composables/core/useCustomToast";

const payload = ref({
  avatar: "",
});

export const useUpdateProfile = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const updateProfile = async () => {
    loading.value = true;
    try {
      const res = await dashboard_api.$_update_profile(payload.value);
      showToast({
        title: "Success",
        message: "Profile was updated successfully",
        toastType: "success",
        duration: 3000,
      });
      return res;
    } catch (error: any) {
      showToast({
        title: "Error",
        message: error.response.data.message || "Failed to add card",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  const setPayload = (data: any) =>  {
    payload.value.avatar = data.avatar
  }

  return {
    updateProfile,
    loading,
    payload,
    setPayload
  };
};
