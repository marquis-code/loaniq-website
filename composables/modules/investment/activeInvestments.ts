import { ref } from "vue";
import { investment_api } from '@/api_factory/modules/investment';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchActiveInvestments = () => {
    const loading = ref(false);
    const investments = ref([]);
    const { showToast } = useCustomToast();

    const fetchActiveInvestments = async () => {
        loading.value = true;
        try {
            const res = await investment_api.$_get_active_investments();
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
        fetchActiveInvestments()
    })

    return {
        fetchActiveInvestments,
        investments,
        loading,
    };
};
