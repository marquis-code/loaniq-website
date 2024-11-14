import { ref } from "vue";
import { investment_api } from "@/api_factory/modules/investment";
import { useCustomToast } from "@/composables/core/useCustomToast";
const route = useRoute();

const payload = ref({
  name: "",
  productId: "",
  principal: 200000,
  automatedFrequency: "",
  interestPaymentSchedule: "",
});

export const useCreateInvestment = () => {
  const router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const createInvestment = async () => {
    loading.value = true;
    const res = await investment_api.$_create_investment(
        payload
      );

      if(res.status == 200) {
        showToast({
            title: "Success",
            message: "Investment was created successfully",
            toastType: "success",
            duration: 3000,
          });
          router.push('/dashboard/investments')
      }else {
        showToast({
            title: "Error",
            message: res.data.message || "Failed to create investment",
            toastType: "error",
            duration: 3000,
          });
      }
  };

  return {
    createInvestment,
    loading,
    payload
  };
};
