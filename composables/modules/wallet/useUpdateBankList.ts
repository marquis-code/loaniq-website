import { ref } from "vue";
import { wallet_api } from '@/api_factory/modules/wallet';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchTransactionHistory = () => {
    const loading = ref(false);
    const transactionHistory = ref([]);
    const { showToast } = useCustomToast();

    const fetchTransactionHistory = async () => {
        loading.value = true;
        try {
            const res = await wallet_api.$_fetch_transaction_history();
            console.log(res, 'res here')
            transactionHistory.value = res.data.data || [];
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
        fetchTransactionHistory()
    })

    return {
        fetchTransactionHistory,
        transactionHistory,
        loading,
    };
};
