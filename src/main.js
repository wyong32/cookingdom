import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 确保按正确顺序安装插件
app.use(createPinia())
app.use(router)
app.use(i18n)

// 等待 router 准备就绪后再挂载应用
router.isReady().then(() => {
  app.mount('#app')
})

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
