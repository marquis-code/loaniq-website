import CryptoJS from "crypto-js"; // You can install this package for encryption
import { auth_api } from "@/api_factory/modules/auth";
import { decryptData } from '@/utils/crypto-utils';
import { useCustomToast } from "@/composables/core/useCustomToast";

// Encryption key - Store this securely
const secretKey = "LoanIQEncryption";

const credential = {
  userId: ref(""),
  code: ref(""),
} as any;



export const use_auth_verify_otp = () => {
  const Router = useRouter();
  const { showToast } = useCustomToast();
  const loading = ref(false);

  const getEncryptedData = () => {
    try {
      const encryptedUserId = localStorage.getItem("userId");

      if (encryptedUserId) {
        const userId = CryptoJS.AES.decrypt(
          encryptedUserId,
          secretKey
        ).toString(CryptoJS.enc.Utf8);
        return { userId };
      }

      showToast({
        title: "Error",
        message: "User ID not found in local storage.",
        toastType: "error",
        duration: 3000,
      });
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

  const { userId } = getEncryptedData() || {};

  const verify_OTP = async () => {
    loading.value = true;

    try {
      const res = (await auth_api.$_verify_otp({
        userId,
        code: credential.code.value
      })) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: res.data.message,
          toastType: "success",
          duration: 3000,
        });

        // Encrypt and store userId and otp in localStorage
        const encryptedUserId = CryptoJS.AES.encrypt(res?.data?.data?.onboardingId, secretKey).toString();
        const encryptedOtp = CryptoJS.AES.encrypt(credential?.code?.value, secretKey).toString();
        localStorage.setItem("userId", encryptedUserId);
        localStorage.setItem("otp", encryptedOtp);

        Router.push(`/verifyface?userId=${res?.data?.data.onboardingId}`);
      } else {
        console.log(res.data)
        showToast({
          title: "Error",
          message: res.data.message,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: "Error",
        message: error.message,
        toastType: "error",
        duration: 3000,
      });
    }
  };

  return { credential, verify_OTP, loading };
};
