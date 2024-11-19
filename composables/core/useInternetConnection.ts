import { onMounted, onUnmounted, ref } from 'vue'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export const useInternetConnection = () => {
  const isOnline = ref(navigator.onLine)

  const showOfflineAlert = () => {
    showToast({
      title: "Error",
      message: "You are offline! Please check your internet connection.",
      toastType: "error",
      duration: 3000
    });
  }

  const handleOnlineStatusChange = () => {
    isOnline.value = navigator.onLine
    if (!isOnline.value) {
      showOfflineAlert()
    }
  }

  onMounted(() => {
    // Add event listeners for online/offline status
    window.addEventListener('online', handleOnlineStatusChange)
    window.addEventListener('offline', handleOnlineStatusChange)
  })

  onUnmounted(() => {
    // Remove event listeners on component unmount
    window.removeEventListener('online', handleOnlineStatusChange)
    window.removeEventListener('offline', handleOnlineStatusChange)
  })

  return {
    isOnline,
  }
}
