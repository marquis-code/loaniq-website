import { ref } from "vue";
import { investment_api } from "@/api_factory/modules/investment";
import { useCustomToast } from "@/composables/core/useCustomToast";

const payload = ref({
  name: "Rent",
  productId: "",
  amount: "",
});

const amount = ref('2000')

const remainingInvestmentAmount = ref({})

export const useGetRemainingAmount = () => {
  const router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const getRemainingAmount = async () => {
    loading.value = true;
    const res = await investment_api.$_get_remaining_amount(amount.value, payload);
    console.log(res, 'res here')
    if (res.status == 200) {
        remainingInvestmentAmount.value = res.data.data
    //   router.push("/dashboard/investments");
    } else {
      showToast({
        title: "Error",
        message: res.data.message || "Failed to create investment",
        toastType: "error",
        duration: 3000,
      });
    }
  };

  return {
    getRemainingAmount,
    loading,
    payload,
    remainingInvestmentAmount
  };
};
