import { ref } from "vue";
import { investment_api } from '@/api_factory/modules/investment';
import { useCustomToast } from "@/composables/core/useCustomToast";
const route = useRoute()

export const useFetchInvestmentProduct = () => {
    const route = useRoute()
    const loading = ref(false);
    const product = ref({});
    const { showToast } = useCustomToast();

    const fetchInvestmentProduct = async () => {
        loading.value = true;
        try {
            const res = await investment_api.$_fetch_investment_details(route?.params?.id);
            console.log(res.data.data, 'data here')
            product.value = res?.data?.data || {};
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message || "Failed to fetch cards",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchInvestmentProduct()
    })

    return {
        fetchInvestmentProduct,
        product,
        loading,
    };
};
