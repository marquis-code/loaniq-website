import { user_api } from "@/api_factory/modules/user";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
    currentPasscode: "",
    newPasscode: "",
});

const router = useRouter()

export const useUpdatePasscode = () => {
  const loading = ref(false);
  const { $_update_passcode } = user_api;
  const updatePasscode = async () => {
    loading.value = true;
    const res = (await $_update_passcode(payloadObj.value)) as any;
    console.log(res, 'res')
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Passcode was changed successfully",
        toastType: "success",
        duration: 3000,
      });
      localStorage.clear()
      router.push('/')
    } else {
      showToast({
        title: "Error",
        message: res.data.message || 'Soemthing went wrong',
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
    // try {



    // } catch (error: any) {
    //   console.log(error, 'error')
    //   showToast({
    //     title: "Error",
    //     message: error.response.data.message,
    //     toastType: "error",
    //     duration: 3000,
    //   });
    // } finally {
    //   loading.value = false;
    // }
  };

const setPayload = (data: any) => {
  payloadObj.value.currentPasscode  = data.currentPasscode
  payloadObj.value.newPasscode  = data.newPasscode
}

  return {
    updatePasscode,
    loading,
    payloadObj,
    setPayload
  };
};
