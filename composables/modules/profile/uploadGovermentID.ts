import { profile_api } from "@/api_factory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
  idType: "",
  idNumber: "",
  issueDate: "",
  documentBackCopy: "",
  documentFrontCopy: "",
});

export const useUploadGovernmentID = () => {
  const loading = ref(false);
  const { $_upload_government_id } = profile_api;
  const uploadGovernmentID = async () => {
    loading.value = true;
    const res = (await $_upload_government_id(payloadObj.value)) as any;

    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Government ID was uploaded successfully!",
        toastType: "success",
        duration: 3000,
      });
    } else {
      showToast({
        title: "Error",
        message: res.data.message || 'Something went wrong',
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  const setPayload = (data: any) => {
    payloadObj.value.idType = data.idType,
    payloadObj.value.idNumber = data.idNumber,
    payloadObj.value.issueDate = data.issueDate,
    payloadObj.value.documentBackCopy = data.documentBackCopy,
    payloadObj.value.documentFrontCopy = data.documentFrontCopy
  }

  return {
    uploadGovernmentID,
    loading,
    payloadObj,
    setPayload
  };
};
