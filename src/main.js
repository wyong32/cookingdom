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
