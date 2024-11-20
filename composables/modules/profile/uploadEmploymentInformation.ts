import { profile_api } from "@/api_factory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
  organizationType: "",
  organizationName: "",
  ippisNumber: "",
  jobTitle: "",
  officeAddress: "",
  stateOfOffice: "",
  documentBackCopy: "",
  documentFrontCopy: "",
});

export const useUploadEmploymentInfo = () => {
  const loading = ref(false);
  const { $_upload_employment_info } = profile_api;
  const uploadEmploymentInfo = async () => {
    loading.value = true;
    try {
      const res = (await $_upload_employment_info(payloadObj.value)) as any;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Employment Information was uploaded successfully!",
          toastType: "success",
          duration: 3000,
        });
      }
    } catch (error: any) {
      showToast({
        title: "Error",
        message: error.response.data.message,
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  const setPayload = (data: any) => {
    payloadObj.value.organizationType = data.organizationType,
    payloadObj.value.organizationName = data.organizationName,
    payloadObj.value.ippisNumber = data.ippisNumber,
    payloadObj.value.jobTitle = data.jobTitle,
    payloadObj.value.officeAddress = data.officeAddress,
    payloadObj.value.stateOfOffice = data.stateOfOffice,
    payloadObj.value.documentBackCopy = data.documentBackCopy,
    payloadObj.value.documentFrontCopy = data.documentFrontCopy
  }
  

  return {
    uploadEmploymentInfo,
    loading,
    payloadObj,
    setPayload
  };
};
