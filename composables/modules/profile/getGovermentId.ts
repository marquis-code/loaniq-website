import { profile_api } from '@/api_factory/modules/profile'
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const useFetchGovermentId = () => {
    const loading = ref(false);
    const profileObj = ref({} as any);
    const { $_get_goverment_id  } = profile_api
    const getGovermentIdObj = async () => {
        loading.value = true;
        const res = await $_get_goverment_id() as any;
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
        getGovermentIdObj()
    })

    return {
        getGovermentIdObj,
        loading,
        profileObj
    };
};
