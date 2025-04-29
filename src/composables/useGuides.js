import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// 创建一个 ref 来存储当前加载的指南数据
const guides = ref([])
const isLoading = ref(false)
const error = ref(null)

export function useGuides() {
  const { locale } = useI18n()

  async function loadGuides(lang) {
    isLoading.value = true
    error.value = null
    console.log(`Attempting to load guides for locale: ${lang}`)
    try {
      let dataModule
      if (lang === 'zh') {
        // 动态导入中文指南数据
        dataModule = await import('@/datas/guides-zh.json')
      } else if (lang === 'ru') {
        dataModule = await import('@/datas/guides-ru.json')
      } else {
        // 默认动态导入英文指南数据
        dataModule = await import('@/datas/guides.json')
      }
      // JSON 模块通常有一个默认导出，包含数组内容
      guides.value = dataModule.default || dataModule
      console.log(`Successfully loaded ${guides.value.length} guides for locale: ${lang}`)
    } catch (err) {
      console.error(`Failed to load guides for locale ${lang}:`, err)
      error.value = err
      guides.value = [] // 出错时清空数据
    } finally {
      isLoading.value = false
    }
  }

  // 监听 locale 变化，并在变化时重新加载数据
  // immediate: true 确保在 composable 首次被调用时就执行一次加载
  watch(
    locale,
    (newLocale) => {
      loadGuides(newLocale)
    },
    { immediate: true },
  )

  // 返回响应式数据和状态
  return {
    guides,
    isLoading,
    error,
  }
}
