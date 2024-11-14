import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useResendOtp = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const route = useRoute();
  const router = useRouter();

  const resendOtp = async () => {
    loading.value = true;

    const payload = {
      userId: route.query.userId,
    };
    const res = (await auth_api.$_resend_otp(payload)) as any;
    console.log(res, 'here')
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: res.data.message,
        toastType: "success",
        duration: 3000,
      });
      router.push(`/verify-account?userId=${res.data.data.userId}`);
    } else {
      showToast({
        title: "Error",
        message: res.data.errors[0].msg || 'Something went wrong',
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  return {
    loading,
    resendOtp,
  };
};
