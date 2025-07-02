import { ref, onMounted, onUnmounted } from 'vue'

export function useDeviceDetection() {
  // 提供更稳定的初始值，基于 User Agent
  const getInitialValue = () => {
    if (typeof window === 'undefined') return false
    // 先尝试基于 User Agent 进行初始判断
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
    // 结合屏幕宽度进行判断
    const isMobileScreen = window.innerWidth <= 767
    return isMobileUA || isMobileScreen
  }

  const isMobile = ref(getInitialValue())

  const updateDeviceStatus = () => {
    if (typeof window !== 'undefined') {
      const newValue = window.innerWidth <= 767
      // 只有当值真正改变时才更新，减少不必要的重新渲染
      if (isMobile.value !== newValue) {
        isMobile.value = newValue
      }
    }
  }

  onMounted(() => {
    updateDeviceStatus()
    window.addEventListener('resize', updateDeviceStatus)
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateDeviceStatus)
    }
  })

  return { isMobile }
}
