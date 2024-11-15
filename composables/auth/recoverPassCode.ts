import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
import CryptoJS from "crypto-js"; 

const secretKey = "LoanIQEncryption";

export const use_recover_passcode = () => {
  const Router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const credential = {
    email: ref(""),
  };

  const recoverPasscode = async () => {
    if (!credential.email.value) {
      showToast({
        title: "Error",
        message: "Phone number is required.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    loading.value = true;

    try {
      const res = (await auth_api.$_recover_passcode({
        email: credential.email.value,
      })) as any;

      console.log(res, 'res here')

      if (res.status == 200) {
        showToast({
          title: "Success",
          message: res.data.message || "OTP sent to your phone number",
          toastType: "success",
          duration: 3000,
        });

        // Encrypt and store userId and otp in localStorage
        const encryptedUserId = CryptoJS.AES.encrypt(res.data.data.userId, secretKey).toString();
        localStorage.setItem("userId", encryptedUserId);

                
        // Redirect to the verify OTP page
        Router.push("/verify-account?userType=existing");
      } else {
        showToast({
          title: "Error",
          message: res.data.message || "Failed to send OTP",
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: "Error",
        message: error?.message || "An unexpected error occurred.",
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  return { credential, recoverPasscode, loading };
};
