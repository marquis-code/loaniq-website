
// import CryptoJS from "crypto-js";
// import { auth_api } from "@/api_factory/modules/auth";
// import { useCustomToast } from "@/composables/core/useCustomToast";
// // import { use_validate_wema_otp } from "@/composables/auth/validateWemaOtpCreation";

// const secretKey = "LoanIQEncryption";

// const credential = {
//   passcode: ref(""),
// };

// export const use_create_passcode = () => {
//   const loading = ref(false);
//   const { showToast } = useCustomToast();
//   // const { validateWemaOtp, setPayloadObj } = use_validate_wema_otp();
//   const router = useRouter();

//   const getEncryptedData = () => {
//     try {
//       const encryptedUserId = localStorage.getItem("userId");
//       const encryptedOtp = localStorage.getItem("otp");

//       if (encryptedUserId && encryptedOtp) {
//         const userId = CryptoJS.AES.decrypt(
//           encryptedUserId,
//           secretKey
//         ).toString(CryptoJS.enc.Utf8);
//         const otp = CryptoJS.AES.decrypt(encryptedOtp, secretKey).toString(
//           CryptoJS.enc.Utf8
//         );
//         return { userId, otp };
//       }
//       throw new Error("User ID or OTP not found in local storage.");
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

//   const { userId, otp } = getEncryptedData() || {};

//   if(route.query.userType === 'existing'){

//   }

//   const createPasscode = async () => {
//     if (!userId || !otp) {
//       showToast({
//         title: "Error",
//         message: "Missing user ID or OTP. Please try again.",
//         toastType: "error",
//         duration: 3000,
//       });
//       return;
//     }

//     const payload = {
//       userId,
//       otp,
//       passcode: credential.passcode.value,
//     };
//     loading.value = true;

//     try {
//       const res = (await auth_api.$_create_passcode(payload)) as any;

//       if (res?.type !== "ERROR" && res.data) {
//         showToast({
//           title: "Success",
//           message: "Passcode created successfully",
//           toastType: "success",
//           duration: 3000,
//         });

//             // Encrypt and store userId and otp in localStorage
//         const encryptedTrackingId = CryptoJS.AES.encrypt(res?.data?.data?.trackingId, secretKey).toString();
//         const encryptedUserId = CryptoJS.AES.encrypt(res?.data.data?.userId, secretKey).toString();
//         localStorage.setItem("trackingId", encryptedTrackingId);
//         localStorage.setItem("userId", encryptedUserId);

//          router.push('/verify-wema-otp')
//       } else {
//         handleApiError(res);
//       }
//     } catch (error: any) {
//       showToast({
//         title: "Error",
//         message:
//           error?.response?.data?.message ||
//           "An error occurred while creating passcode.",
//         toastType: "error",
//         duration: 3000,
//       });
//     } finally {
//       loading.value = false;
//     }
//   };

//   const handleApiError = (res: any) => {
//     const message = res?.data?.message || "An unexpected error occurred.";
//     showToast({
//       title: "Error",
//       message,
//       toastType: "error",
//       duration: 3000,
//     });
//     console.error("API Error:", message);
//   };

//   return {
//     createPasscode,
//     loading,
//     credential,
//   };
// };

import CryptoJS from "crypto-js";
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
// import { use_validate_wema_otp } from "@/composables/auth/validateWemaOtpCreation";


const secretKey = "LoanIQEncryption";

const credential = {
  passcode: ref(""),
};

export const use_create_passcode = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  // const { validateWemaOtp, setPayloadObj } = use_validate_wema_otp();
  const router = useRouter();
  const route = useRoute();

  const getEncryptedData = () => {
    try {
      const encryptedUserId = localStorage.getItem("userId");
      const encryptedOtp = localStorage.getItem("otp");

      if (encryptedUserId && encryptedOtp) {
        const userId = CryptoJS.AES.decrypt(
          encryptedUserId,
          secretKey
        ).toString(CryptoJS.enc.Utf8);
        const otp = CryptoJS.AES.decrypt(encryptedOtp, secretKey).toString(
          CryptoJS.enc.Utf8
        );
        return { userId, otp };
      }
      throw new Error("User ID or OTP not found in local storage.");
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

  const createPasscode = async () => {
    const { userId, otp } = getEncryptedData() || {};
    if (!userId || !otp) {
      showToast({
        title: "Error",
        message: "Missing user ID or OTP. Please try again.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    loading.value = true;

    try {
      const userType = route.query.userType;

      if (userType === "existing") {
        // Call $_create_new_passcode for existing users
        const res = await auth_api.$_create_new_passcode({
          otp,
          newPasscode: credential.passcode.value,
        });

        handleApiResponse(res, "/login");
      } else {
        // Call $_create_passcode for new users
        const res = await auth_api.$_create_passcode({
          userId,
          otp,
          passcode: credential.passcode.value,
        });

        handleApiResponse(res, "/verify-wema-otp");
      }
    } catch (error: any) {
      showToast({
        title: "Error",
        message:
          error?.response?.data?.message ||
          "An error occurred while creating passcode.",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  const handleApiResponse = (res: any, redirectPath: string) => {
    if (res?.type !== "ERROR" && res.data) {
      showToast({
        title: "Success",
        message: "Passcode created successfully",
        toastType: "success",
        duration: 3000,
      });

      // Encrypt and store trackingId and userId in localStorage
      const encryptedTrackingId = CryptoJS.AES.encrypt(
        res?.data?.data?.trackingId || "",
        secretKey
      ).toString();
      const encryptedUserId = CryptoJS.AES.encrypt(
        res?.data.data?.userId || "",
        secretKey
      ).toString();
      localStorage.setItem("trackingId", encryptedTrackingId);
      localStorage.setItem("userId", encryptedUserId);

      // Redirect to the appropriate page
      router.push(redirectPath);
    } else {
      const message = res?.data?.message || "An unexpected error occurred.";
      showToast({
        title: "Error",
        message,
        toastType: "error",
        duration: 3000,
      });
      console.error("API Error:", message);
    }
  };

  return {
    createPasscode,
    loading,
    credential,
  };
};
