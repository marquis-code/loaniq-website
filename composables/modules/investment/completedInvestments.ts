import { ref } from "vue";
import { investment_api } from '@/api_factory/modules/investment';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchCompletedInvestments = () => {
    const loading = ref(false);
    const investments = ref([]);
    const { showToast } = useCustomToast();

    const fetchCompletedInvestments = async () => {
        loading.value = true;
        try {
            const res = await investment_api.$_get_completed_investments();
            console.log(res, 'res here')
            investments.value = res.data.data || [];
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message || "Failed to fetch active investments",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchCompletedInvestments()
    })

    return {
        fetchCompletedInvestments,
        investments,
        loading,
    };
};
