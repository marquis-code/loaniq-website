import { ref } from "vue";
import { wallet_api } from '@/api_factory/modules/wallet';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchBankList = () => {
    const loading = ref(false);
    const banksList = ref([]);
    const { showToast } = useCustomToast();

    const fetchBankList = async () => {
        loading.value = true;
        try {
            const res = await wallet_api.$_fetch_bank_list();
            console.log(res, 'res here')
            banksList.value = res.data.data || [];
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message || "Failed to fetch banks list",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchBankList()
    })

    return {
        fetchBankList,
        banksList,
        loading,
    };
};
