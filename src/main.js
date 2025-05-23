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
    // 使用 requestIdleCallback 在浏览器空闲时初始化应用
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(
        async () => {
          // 等待 router 准备就绪
          await router.isReady()
          console.log('Router 已准备就绪')

          // 使用 requestAnimationFrame 确保在下一帧渲染前挂载应用
          window.requestAnimationFrame(() => {
            app.mount('#app')
            console.log('应用已挂载')

            // 标记应用已加载完成，可用于性能测量
            if (window.performance && window.performance.mark) {
              window.performance.mark('app-mounted')
            }
          })
        },
        { timeout: 2000 },
      ) // 设置超时，确保不会无限等待
    } else {
      // 降级方案
      await router.isReady()
      app.mount('#app')
      console.log('应用已挂载 (降级方案)')
    }
  } catch (error) {
    console.error('应用初始化失败:', error)
    // 即使出错也尝试挂载应用
    app.mount('#app')
  }
}

// 初始化应用
initApp()
