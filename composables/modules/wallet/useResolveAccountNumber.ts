import { ref } from "vue";
import { wallet_api } from '@/api_factory/modules/wallet';
import { useCustomToast } from "@/composables/core/useCustomToast";


export const useResolveAccountNumber = () => {
    const loading = ref(false);
    const accountObj = ref({});
    const { showToast } = useCustomToast();

    const resolveAccountNumber = async (bankCode: string | number, accountNumber: string | number) => {
        loading.value = true;
        const res = await wallet_api.$_resolve_account_number(bankCode, accountNumber);
        console.log(res, 'res here')
        if(res.status == 200 && res?.data?.data?.accountName !== null){
            accountObj.value = res.data.data || {};
        } else {
              showToast({
                title: "Error",
                message: "Failed to fetch resolve account",
                toastType: "error",
                duration: 3000,
            }); 
        }
        loading.value = false;
    };

    return {
        accountObj,
        loading,
        resolveAccountNumber
    };
};
