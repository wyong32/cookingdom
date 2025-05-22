import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'

import App from './App.vue'
import router from './router'

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
    console.log('应用已挂载')
  } catch (error) {
    console.error('应用初始化失败:', error)
    // 即使出错也尝试挂载应用
    app.mount('#app')
  }
}

// 初始化应用
initApp()

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker 注册成功:', registration.scope)

        // 检查是否有新的 Service Worker 等待激活
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }

        // 监听 Service Worker 更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('新的 Service Worker 可用，建议刷新页面')
                // 可以在这里显示更新提示
              }
            })
          }
        })
      })
      .catch((error) => {
        console.error('Service Worker 注册失败:', error)
      })
  })
}
