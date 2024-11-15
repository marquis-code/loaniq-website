// import CryptoJS from "crypto-js"; // You can install this package for encryption
// import { auth_api } from "@/api_factory/modules/auth";
// import { decryptData } from '@/utils/crypto-utils';
// import { useCustomToast } from "@/composables/core/useCustomToast";

// // Encryption key - Store this securely
// const secretKey = "LoanIQEncryption";

// const credential = {
//   userId: ref(""),
//   code: ref(""),
// } as any;



// export const use_auth_verify_otp = () => { 
//   const Router = useRouter();
//   const { showToast } = useCustomToast();
//   const loading = ref(false);

//   const getEncryptedData = () => {
//     try {
//       const encryptedUserId = localStorage.getItem("userId");

//       if (encryptedUserId) {
//         const userId = CryptoJS.AES.decrypt(
//           encryptedUserId,
//           secretKey
//         ).toString(CryptoJS.enc.Utf8);
//         return { userId };
//       }

//       showToast({
//         title: "Error",
//         message: "User ID not found in local storage.",
//         toastType: "error",
//         duration: 3000,
//       });
//     } catch (error) {
//       showToast({
//         title: "Error",
//         message: "Failed to retrieve encrypted data.",
//         toastType: "error",
//         duration: 3000,
//       });
//       return null;
//     }
//   };

//   const { userId } = getEncryptedData() || {};

//   const verify_OTP = async () => {
//     loading.value = true;


//     if(Router.query.userType === 'existing') {

//     }

//     const res;



//     try {
//       const res = (await auth_api.$_verify_otp({
//         userId,
//         code: credential.code.value
//       })) as any;

//       const res = (await auth_api.$_verify_existing_user_otp({
//         userId,
//         code: credential.code.value
//       })) as any;

//       loading.value = false;

//       if (res.type !== "ERROR") {
//         showToast({
//           title: "Success",
//           message: res.data.message,
//           toastType: "success",
//           duration: 3000,
//         });

//         // Encrypt and store userId and otp in localStorage
//         const encryptedUserId = CryptoJS.AES.encrypt(res?.data?.data?.onboardingId, secretKey).toString();
//         const encryptedOtp = CryptoJS.AES.encrypt(credential?.code?.value, secretKey).toString();
//         localStorage.setItem("userId", encryptedUserId);
//         localStorage.setItem("otp", encryptedOtp);

//         Router.push(`/verifyface?userId=${res?.data?.data.onboardingId}`);
//       } else {
//         console.log(res.data)
//         showToast({
//           title: "Error",
//           message: res.data.message,
//           toastType: "error",
//           duration: 3000,
//         });
//       }
//     } catch (error: any) {
//       loading.value = false;
//       showToast({
//         title: "Error",
//         message: error.message,
//         toastType: "error",
//         duration: 3000,
//       });
//     }
//   };

//   return { credential, verify_OTP, loading };
// };


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
