import { ref } from "vue";
import { investment_api } from "@/api_factory/modules/investment";
import { useCustomToast } from "@/composables/core/useCustomToast";
const route = useRoute();

const payload = ref({
  name: "",
  productId: "",
  principal: '',
  tenor: 0,
  automatedFrequency: "",
  interestPaymentSchedule: ""
});

export const useCreateInvestment = () => {
  const router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const createInvestment = async () => {
    loading.value = true;
    const res = await investment_api.$_create_investment(
        payload.value
      );

      if(res.status == 200) {
        showToast({
            title: "Success",
            message: "Investment was created successfully",
            toastType: "success",
            duration: 3000,
          });
          router.push(`/dashboard/investments/explore-investments/${route?.params?.id}/success`)
      }else {
        showToast({
            title: "Error",
            message: res.data.message || "Failed to create investment",
            toastType: "error",
            duration: 3000,
          });
      }
      loading.value = false
  };

  const setPayload = (data: any) => {
    payload.value.name = data.name,
    payload.value.productId = data.productId,
    payload.value.principal = data.principal
    payload.value.automatedFrequency = data.automatedFrequency,
    payload.value.tenor = data.tenor,
    payload.value.interestPaymentSchedule = data.interestPaymentSchedule
  }

  return {
    createInvestment,
    loading,
    payload,
    setPayload
  };
};
