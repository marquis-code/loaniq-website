import CryptoJS from "crypto-js"; // Install this package for encryption
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { useRouter } from "vue-router";
import { ref } from "vue";

// Encryption key - Store this securely
const secretKey = "LoanIQEncryption";

const credential = {
  code: ref(""),
};

export const use_auth_verify_otp = () => { 
  const router = useRouter();
  const route = useRoute();
  const { showToast } = useCustomToast();
  const loading = ref(false);

  // Utility function to retrieve and decrypt data from localStorage
  const getDecryptedData = (key: string) => {
    try {
      const encryptedData = localStorage.getItem(key);
      if (!encryptedData) return null;
      return CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
    } catch {
      return null;
    }
  };

  // Utility function to handle toast notifications
  const showErrorToast = (message: string) => {
    showToast({
      title: "Error",
      message,
      toastType: "error",
      duration: 3000,
    });
  };

  // Verify OTP function
  const verify_OTP = async () => {
    const userId = getDecryptedData("userId");
    if (!userId) {
      showErrorToast("User ID not found in local storage.");
      return;
    }

    loading.value = true;

    try {
      const userType = route.query.userType;
      const apiFunction = userType === "existing"
        ? auth_api.$_verify_existing_user_otp
        : auth_api.$_verify_otp;

      const response = await apiFunction({ userId, code: credential.code.value }) as any

      if (response.type === "ERROR") {
        showErrorToast(response.data.message);
      } else {
        showToast({
          title: "Success",
          message: response.data.message,
          toastType: "success",
          duration: 3000,
        });

        // For new users, encrypt and store data in localStorage
        if (userType !== "existing") {
          const onboardingId = response.data.data.onboardingId;
          localStorage.setItem(
            "userId",
            CryptoJS.AES.encrypt(onboardingId, secretKey).toString()
          );
          localStorage.setItem(
            "otp",
            CryptoJS.AES.encrypt(credential.code.value, secretKey).toString()
          );
          router.push(`/verifyface?userId=${onboardingId}`);
        } else {
          // Redirect for existing users
          localStorage.setItem(
            "otp",
            CryptoJS.AES.encrypt(credential.code.value, secretKey).toString()
          );
          router.push(`/create-password?userType=existing`);
        }
      }
    } catch (error: any) {
      showErrorToast(error.message || "An error occurred while verifying OTP.");
    } finally {
      loading.value = false;
    }
  };

  return { credential, verify_OTP, loading };
};
