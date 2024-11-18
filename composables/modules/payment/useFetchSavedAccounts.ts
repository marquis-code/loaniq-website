import { ref } from "vue";
import { payment_api } from '@/api_factory/modules/payment';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchSavedAccounts = () => {
    const loading = ref(false);
    const accounts = ref([]);
    const { showToast } = useCustomToast();

    const fetchSavedAccounts = async () => {
        loading.value = true;
        try {
            const res = await payment_api.$_fetch_saved_account();
            console.log(res.data.data, 'hee')
            accounts.value = res?.data?.data || [];
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message || "Failed to fetch saved accounts",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchSavedAccounts()
    })

    return {
        fetchSavedAccounts,
        accounts,
        loading,
    };
};
