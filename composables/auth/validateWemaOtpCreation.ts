import { useUser } from "@/composables/auth/user";
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';
import CryptoJS from "crypto-js";
const { setToken } = useUser()


const secretKey = "LoanIQEncryption";

export const use_validate_wema_otp = () => {
  const router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const getEncryptedData = () => {
    try {
      const encryptedTrackingId = localStorage.getItem("trackingId");
      const encryptedUserId = localStorage.getItem("userId");

      if (encryptedUserId && encryptedTrackingId) {
        const userId = CryptoJS.AES.decrypt(
          encryptedUserId,
          secretKey
        ).toString(CryptoJS.enc.Utf8);
        const trackingId = CryptoJS.AES.decrypt(encryptedTrackingId, secretKey).toString(
          CryptoJS.enc.Utf8
        );
        return { userId, trackingId };
      }
      throw new Error("User ID or Tracking Id not found in local storage.");
    } catch (error) {
      showToast({
        title: "Error",
        message: "Failed to retrieve encrypted data.",
        toastType: "error",
        duration: 3000,
      });
      return null;
    }
  };

  const { userId, trackingId } = getEncryptedData() || {};

  const validateWemaOtp = async (otp: string) => {
    loading.value = true;
    try {
      const res = await auth_api.$_validate_wema_otp_creation({
        trackingId,
        otp,
        userId,
      }) as any;
       console.log(res, 'res here')
      if (res.status == 200) {
        showToast({
          title: "Success",
          message: res?.data?.message || "Account creation was successful.",
          toastType: "success",
          duration: 3000,
        });
        console.log(res.data, 'vefore set')
        setToken(res?.data?.data?.token)
        router.push("/secure-transactions");
        return { success: true, data: res.data };
      } else {
        const errorMessage = res?.data?.message || "An error occurred during OTP validation.";
        showToast({
          title: "Error",
          message: errorMessage,
          toastType: "error",
          duration: 3000,
        });
        return { success: false, error: errorMessage };
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "An unexpected error occurred.";
      showToast({
        title: "Error",
        message: errorMessage,
        toastType: "error",
        duration: 3000,
      });
      return { success: false, error: errorMessage };
    } finally {
      loading.value = false;
    }
  };

  return { validateWemaOtp, loading };
};
