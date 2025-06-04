<template>
  <div v-if="shouldShowAd" :class="adContainerClass" ref="adContainer">
    <!-- 广告内容会通过JavaScript动态插入到这里 -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// Props
const props = defineProps({
  adConfig: {
    type: Object,
    required: true,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
})

// 容器引用
const adContainer = ref(null)

// 全局广告脚本加载状态
if (!window.loadedAdScripts) {
  window.loadedAdScripts = new Set()
}

// 计算是否应该显示广告
const shouldShowAd = computed(() => {
  const { device } = props.adConfig
  if (device === 'desktop' && props.isMobile) return false
  if (device === 'mobile' && !props.isMobile) return false
  return true
})

// 计算广告容器样式类
const adContainerClass = computed(() => {
  const { hasContainer, containerClass } = props.adConfig
  if (hasContainer && containerClass) {
    return containerClass
  }
  return hasContainer ? 'ad-container' : ''
})

// 广告脚本加载函数
const loadAdScript = (scriptUrl) => {
  return new Promise((resolve) => {
    if (window.loadedAdScripts.has(scriptUrl)) {
      console.log(`广告脚本已存在: ${scriptUrl}`)
      resolve()
      return
    }

    console.log(`开始加载广告脚本: ${scriptUrl}`)
    const script = document.createElement('script')
    script.async = true
    script.type = 'application/javascript'
    script.src = scriptUrl
    document.head.appendChild(script)

    script.onload = () => {
      window.loadedAdScripts.add(scriptUrl)
      console.log(`广告脚本加载完成: ${scriptUrl}`)
      resolve()
    }

    script.onerror = () => {
      console.error(`广告脚本加载失败: ${scriptUrl}`)
      resolve() // 即使失败也继续执行
    }
  })
}

// 加载广告
const loadAd = () => {
  const config = props.adConfig

  console.log(`准备加载广告: ${config.name}`, {
    hasContainer: config.hasContainer,
    device: config.device,
    delay: config.delay,
    isMobile: props.isMobile,
  })

  setTimeout(() => {
    console.log(`开始加载广告: ${config.name}`)
    loadAdScript(config.scriptUrl)
      .then(() => {
        const ins = document.createElement('ins')
        ins.className = config.className
        ins.setAttribute('data-zoneid', config.zoneId)

        if (config.hasContainer && adContainer.value) {
          // 有容器的广告，插入到组件容器中
          console.log(`插入到容器: ${config.name}`, adContainer.value)
          adContainer.value.appendChild(ins)
        } else {
          // 无容器的广告，直接插入到body
          console.log(`插入到body: ${config.name}`)
          document.body.appendChild(ins)
        }

        // 初始化广告
        ;(AdProvider = window.AdProvider || []).push({ serve: {} })
        console.log(`${config.name}已加载完成`)
      })
      .catch((error) => {
        console.error(`${config.name}加载失败:`, error)
      })
  }, config.delay || 1000)
}

// 组件挂载时加载广告
onMounted(() => {
  console.log(`AdComponent挂载: ${props.adConfig.name}`, {
    shouldShowAd: shouldShowAd.value,
    device: props.adConfig.device,
    isMobile: props.isMobile,
    hasContainer: props.adConfig.hasContainer,
  })

  if (shouldShowAd.value) {
    loadAd()
  } else {
    console.log(`广告不显示: ${props.adConfig.name} (设备不匹配)`)
  }
})
</script>

<style scoped>
/* 默认广告容器样式 */
.ad-container {
  padding: 2rem 0;
  text-align: center;
  background-color: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
</style>
