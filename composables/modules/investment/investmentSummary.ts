import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { investment_api } from "@/api_factory/modules/investment";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchInvestmentSummary = () => {
    const loading = ref(false);
    const investmentSummary = ref({});
    const route = useRoute();
    const { showToast } = useCustomToast();

    const fetchInvestmentSummary = async (investmentId: string) => {
        loading.value = true;
        try {
            const res = await investment_api.$_get_investment_summary(investmentId);
            investmentSummary.value = res.data.data || {};
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response?.data?.message || "Failed to fetch investment summary",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        const investmentId = route?.params?.id as any;
        if (investmentId) {
            fetchInvestmentSummary(investmentId);
        } else {
            showToast({
                title: "Error",
                message: "No investment ID provided",
                toastType: "error",
                duration: 3000,
            });
        }
    });

    return {
        fetchInvestmentSummary,
        investmentSummary,
        loading,
    };
};
