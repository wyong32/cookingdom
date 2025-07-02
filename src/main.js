import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'

import App from './App.vue'
import router from './router'

// 性能监控
let performanceMetrics = {
  startTime: performance.now(),
  domReady: 0,
  appMounted: 0
}

// 创建应用实例
const app = createApp(App)

// 按正确顺序安装插件
app.use(createPinia())
app.use(router)
app.use(i18n)

// 确保 router 完全准备就绪后再挂载应用
async function initApp() {
  try {
    // 等待 router 准备就绪
    await router.isReady()
    console.log('Router 已准备就绪')

    // 挂载应用
    app.mount('#app')

    // 记录性能指标
    performanceMetrics.appMounted = performance.now()
    performanceMetrics.domReady = performanceMetrics.appMounted - performanceMetrics.startTime

    console.log('应用已挂载')
    console.log('应用启动耗时:', performanceMetrics.domReady.toFixed(2), 'ms')

    // 延迟执行非关键初始化
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        initializeNonCriticalFeatures()
      })
    } else {
      setTimeout(initializeNonCriticalFeatures, 100)
    }

  } catch (error) {
    console.error('应用初始化失败:', error)
    // 即使出错也尝试挂载应用
    app.mount('#app')
  }
}

// 非关键功能初始化
function initializeNonCriticalFeatures() {
  // Service Worker 注册
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.warn('Service Worker 注册失败:', err)
    })
  }

  // 预加载关键路由组件
  const criticalRoutes = [
    () => import('./views/GuideView.vue'),
    () => import('./views/BlogView.vue')
  ]

  criticalRoutes.forEach((routeLoader, index) => {
    setTimeout(() => {
      routeLoader().catch(err => {
        console.warn(`路由 ${index} 预加载失败:`, err)
      })
    }, 1000 + index * 500) // 错开加载时间
  })

  console.log('非关键功能初始化完成')
}

// 监听性能事件
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  // 监控资源加载性能
  const resourceObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach(entry => {
      if (entry.duration > 1000) { // 超过1秒的资源
        console.warn('慢资源:', entry.name, entry.duration.toFixed(2) + 'ms')
      }
    })
  })
  resourceObserver.observe({ entryTypes: ['resource'] })
}

// 初始化应用
initApp()
