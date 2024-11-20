import { profile_api } from "@/api_factory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";


const payload = ref({
    otp: "",
    newPin: ""
  })


export const useResetTransactionPin = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const resetTransactionPin = async () => {
    loading.value = true;
    const res = (await profile_api.$_reset_transaction_pin(payload.value)) as any;
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: res?.data?.message || 'Transaction Pin changed successfully',
        toastType: "success",
        duration: 3000,
      });
    } else {
      showToast({
        title: "Error",
        message: res.data.message || "Something went wrong",
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  const setPayload = (data: any) => {
     payload.value.newPin = data?.newPin
     payload.value.otp = data?.otp
  }

  return { resetTransactionPin, loading, setPayload };
};
