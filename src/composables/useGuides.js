import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defaultLang } from '@/i18n'

// 创建一个 ref 来存储当前加载的指南数据
const guides = ref([])
const isLoading = ref(false)
const error = ref(null)

// Store loaded data before adding routeObject
const rawGuides = ref([])

// Define getGuideLinkProps logic inside the composable
function getGuideLinkProps(level, currentLocale) {
  const isDefaultLang = currentLocale === defaultLang
  let routeName = isDefaultLang ? 'guide-detail' : 'guide-detail-lang'
  let routeParams

  if (isDefaultLang) {
    routeParams = { id: level.id }
  } else {
    if (currentLocale && typeof currentLocale === 'string') {
      routeParams = { id: level.id, lang: currentLocale }
    } else {
      // Fallback or error handling if locale is invalid
      console.warn(
        `Invalid locale detected: ${currentLocale}. Falling back to default route for guide ${level.id}`,
      )
      routeName = 'guide-detail'
      routeParams = { id: level.id }
    }
  }
  return { name: routeName, params: routeParams }
}

export function useGuides() {
  const { locale } = useI18n()

  async function loadGuides(lang) {
    isLoading.value = true
    error.value = null
    console.log(`Attempting to load guides for locale: ${lang}`)
    try {
      let dataModule
      let guidesDataToSet // Temporary variable to hold the data from module

      if (lang === 'zh') {
        dataModule = await import('@/datas/guides-zh.js')
        guidesDataToSet = dataModule.guidesZh
      } else if (lang === 'ru') {
        dataModule = await import('@/datas/guides-ru.js')
        guidesDataToSet = dataModule.guidesRu
      } else if (lang === 'fil') {
        dataModule = await import('@/datas/guides-fil.js')
        guidesDataToSet = dataModule.guides
      } else if (lang === 'ms') {
        dataModule = await import('@/datas/guides-ms.js')
        guidesDataToSet = dataModule.guides
      } else {
        // Default to English
        dataModule = await import('@/datas/guides.js')
        guidesDataToSet = dataModule.guides
      }

      if (guidesDataToSet) {
        rawGuides.value = guidesDataToSet
        console.log(`Successfully loaded ${rawGuides.value.length} raw guides for locale: ${lang}`)
        guides.value = rawGuides.value.map((guide) => ({
          ...guide,
          routeObject: getGuideLinkProps(guide, lang),
        }))
        console.log(
          `Processed ${guides.value.length} guides with route objects for locale: ${lang}`,
        )
      } else {
        console.error(
          `Failed to access the correct export from data module for locale ${lang}. Module content:`,
          dataModule,
        )
        error.value = new Error(`Could not find expected export in data file for locale ${lang}`)
        guides.value = []
        rawGuides.value = []
      }
    } catch (err) {
      console.error(`Failed to load or process guides for locale ${lang}:`, err)
      error.value = err
      guides.value = [] // Ensure guides is empty on error
      rawGuides.value = []
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
