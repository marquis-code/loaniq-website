import { user_api } from "@/api_factory/modules/user";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
    currentPasscode: "",
    newPasscode: "",
});

export const useUpdatePasscode = () => {
  const loading = ref(false);
  const { $_update_passcode } = user_api;
  const updatePasscode = async (id: any) => {
    loading.value = true;
    try {
      const res = (await $_update_passcode(payloadObj)) as any;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Passcode was changed successfully",
          toastType: "success",
          duration: 3000,
        });
      }
    } catch (error: any) {
      showToast({
        title: "Error",
        message: error.response.data.message,
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    updatePasscode,
    loading,
    payloadObj,
  };
};
