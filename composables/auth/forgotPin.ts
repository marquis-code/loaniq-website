import { profile_api } from "@/api_factory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useForgotTransactionPin = () => {
  const Router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const forgotTransactionPin = async () => {
    loading.value = true;
    const res = (await profile_api.$_forgot_pin()) as any;
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: res?.data?.message || 'Kindly check your phone number for OTP',
        toastType: "success",
        duration: 3000,
      });
    } else {
      showToast({
        title: "Error",
        message: res?.data?.message || "Failed to set pin",
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };
  return { forgotTransactionPin, loading };
};
