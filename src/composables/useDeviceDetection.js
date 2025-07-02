import { ref, onMounted, onUnmounted } from 'vue'

export function useDeviceDetection() {
  // 简化设备检测，只基于屏幕宽度
  const getInitialValue = () => {
    if (typeof window === 'undefined') return false
    return window.innerWidth <= 767
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
