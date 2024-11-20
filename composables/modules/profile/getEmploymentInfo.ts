import { profile_api } from '@/api_factory/modules/profile'
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const useFetchEmploymentInfo = () => {
    const loading = ref(false);
    const profileObj = ref({} as any);
    const { $_get_employmant_info  } = profile_api
    const getEmploymentObj = async () => {
        loading.value = true;
        const res = await $_get_employmant_info() as any;
        console.log(res, 'res here')
        if (res.type !== 'ERROR') {
            profileObj.value = res?.data?.data || {}
        } else {
            showToast({
                title: "Error",
                message: res?.data?.message ?? 'Something went wrong',
                toastType: "error",
                duration: 3000,
              });
        }
        loading.value = false
    };


    onMounted(() => {
        getEmploymentObj()
    })

    return {
        getEmploymentObj,
        loading,
        profileObj
    };
};
