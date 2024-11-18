import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useResendOtp = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const route = useRoute();
  const router = useRouter();

  const resendOtp = async () => {
    loading.value = true;

    // Safely get the email from localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      showToast({
        title: "Error",
        message: "User email is missing. Please try again.",
        toastType: "error",
        duration: 3000,
      });
      loading.value = false;
      return;
    }

    const payload = {
      userId: route.query.userId,
      email: userEmail,
    };

    try {
      const res = (await auth_api.$_resend_otp(payload)) as any;
      console.log(res, 'here');
      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: res.data.message,
          toastType: "success",
          duration: 3000,
        });
        router.push(`/verify-account?userId=${res.data.data.userId}?userType=existing`);
      } else {
        showToast({
          title: "Error",
          message: res.data.errors[0]?.msg || "Something went wrong",
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      showToast({
        title: "Error",
        message: "An unexpected error occurred. Please try again later.",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    resendOtp,
  };
};
