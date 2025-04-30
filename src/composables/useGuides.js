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
        dataModule = await import('@/datas/guides-zh.js')
        // 使用正确的导出名称 guidesZh
        guides.value = dataModule.guidesZh
      } else if (lang === 'ru') {
        dataModule = await import('@/datas/guides-ru.js')
        // 假设俄语文件导出 guidesRu (如果不是，需要相应修改)
        // **需要确认 guides-ru.js 的导出名**
        // 暂时假设是 guidesRu
        guides.value = dataModule.guidesRu
      } else {
        // 默认动态导入英文指南数据
        dataModule = await import('@/datas/guides.js')
        // 英文文件导出 guides
        guides.value = dataModule.guides
      }
      // JS 模块导出了名为 guides 的常量  <-- 这行注释现在不完全准确了，但可以保留或删除
      // guides.value = dataModule.guides <-- 删除这行旧代码
      // console.log(`Successfully loaded ${guides.value.length} guides for locale: ${lang}`) <-- 这行日志在 guides.value 为 undefined 时会报错，移到后面
      if (guides.value) {
        console.log(`Successfully loaded ${guides.value.length} guides for locale: ${lang}`)
      } else {
        console.error(
          `Failed to access the correct export from data module for locale ${lang}. Expected 'guides', 'guidesZh', or 'guidesRu'.`,
        )
        error.value = new Error(`Could not find expected export in data file for locale ${lang}`)
        guides.value = [] // 确保出错时清空
      }
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
