import { payment_api } from "@/api_factory/modules/payment";
import { useCustomToast } from "@/composables/core/useCustomToast";

const payload = ref({
  accountNumber: "",
  accountName: "",
  bankName: "",
  bankCode: "",
  passcode: ""
});
export const useAddBankAccount = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const addBankAccount = async () => {
    loading.value = true;
    try {
      const res = await payment_api.$_add_bank_account(payload.value);
      showToast({
        title: "Success",
        message: "Bank account added successfully",
        toastType: "success",
        duration: 3000,
      });
      return res;
    } catch (error: any) {
      showToast({
        title: "Error",
        message: error.response.data.message || "Failed to add bank account",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  const setPayload = (data: any) => {
    payload.value.accountNumber = data.accountNumber
    payload.value.accountName = data.accountName
    payload.value.bankName = data.bankName
    payload.value.bankCode = data.bankCode
    payload.value.passcode = data.password
  }

  return {
    addBankAccount,
    loading,
    payload,
    setPayload
  };
};
