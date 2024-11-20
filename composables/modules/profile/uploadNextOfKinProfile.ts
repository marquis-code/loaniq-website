import { profile_api } from "@/api_factory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
  fullName: "",
  relationship: "",
  gender: "",
  email: "",
  phoneNumber: "",
  residentialAddress: "",
  stateOfResidence: "",
});

export const useUploadNextOfKinProfile = () => {
  const loading = ref(false);
  const { $_upload_next_of_kin_profile } = profile_api;
  const uploadNextOfKinProfile = async () => {
    loading.value = true;
    const res = (await $_upload_next_of_kin_profile(payloadObj.value)) as any;

    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Next Of Kin was uploaded successfully!",
        toastType: "success",
        duration: 3000,
      });
    } else {
      showToast({
        title: "Error",
        message: res?.data?.errror || 'Somehting went wrong',
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false
  };

  const setPayload = (data: any) => {
   payloadObj.value.fullName = data.fullName,
    payloadObj.value.relationship = data.relationship,
    payloadObj.value.gender = data.gender,
    payloadObj.value.email = data.email,
    payloadObj.value.phoneNumber = data.phoneNumber,
    payloadObj.value.residentialAddress = data.residentialAddress,
    payloadObj.value.stateOfResidence = data.stateOfResidence
  }

  return {
    uploadNextOfKinProfile,
    loading,
    payloadObj,
    setPayload
  };
};
