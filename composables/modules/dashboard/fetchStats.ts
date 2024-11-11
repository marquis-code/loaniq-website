import { dashboard_api } from '@/api_factory/modules/dashboard'

export const useFetchStats = () => {
    const loading = ref(false);
    const profileInfoObj = ref({} as any);
    const { $_get_dashboard_stats } = dashboard_api;
    const getProfileInfo = async () => {
        loading.value = true;
        try {
            const res = await $_get_dashboard_stats() as any;
             console.log(res.data.data, 'tres here')
            if (res.type !== 'ERROR') {
                profileInfoObj.value = res?.data?.data
            }
        } catch (error) {
            console.error('Error getting profile object', error);
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        getProfileInfo()
    })

    return {
        getProfileInfo,
        loading,
        profileInfoObj
    };
};
