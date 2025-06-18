<template>
  <div class="adsense-container">
    <ins
      ref="adElement"
      :key="adKey"
      class="adsbygoogle"
      style="display: block"
      :data-ad-client="adClient"
      :data-ad-slot="adSlot"
      :data-ad-format="adFormat"
      :data-full-width-responsive="fullWidthResponsive"
    ></ins>
    <!-- 降级显示 -->
    <div v-if="showFallback" class="ad-fallback">
      <div class="ad-placeholder">
        <span>Advertisement</span>
      </div>
    </div>
    <!-- 调试信息 -->
    <div v-if="showDebug" class="ad-debug">
      <div>Width: {{ adWidth }}px</div>
      <div>Parent: {{ parentWidth }}px</div>
      <button @click="forceRefreshAd">Refresh</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  adClient: {
    type: String,
    required: true,
  },
  adSlot: {
    type: String,
    required: true,
  },
  adFormat: {
    type: String,
    default: 'auto',
  },
  fullWidthResponsive: {
    type: Boolean,
    default: true,
  },
})

const route = useRoute()
const adKey = ref(0)
const adElement = ref(null)
const showFallback = ref(false)
const showDebug = ref(false)
const adWidth = ref(0)
const parentWidth = ref(0)

// 全局广告管理
let globalAdPushInProgress = false

// 更新调试信息
const updateDebugInfo = () => {
  const adEl = adElement.value
  const parentEl = adEl?.parentElement
  adWidth.value = adEl?.offsetWidth || 0
  parentWidth.value = parentEl?.offsetWidth || 0
}

// 强制刷新广告（用于调试）
const forceRefreshAd = () => {
  // 先清理旧的广告内容
  clearAd()
  adKey.value += 1
  showFallback.value = false
  nextTick(() => {
    // 重新初始化广告元素
    reinitAd()
    updateDebugInfo()
    pushAd()
  })
}

// 清理页面上所有其他 adsbygoogle 元素
const clearAllAds = () => {
  const allAds = document.querySelectorAll('.adsbygoogle')
  allAds.forEach((ad) => {
    if (ad !== adElement.value) {
      ad.innerHTML = ''
      ad.classList.remove('adsbygoogle')
    }
  })
}

// 智能激活广告 - 添加宽度检查和重试机制
const pushAd = (retryCount = 0) => {
  const adEl = adElement.value
  const parentEl = adEl?.parentElement

  // 更新调试信息
  updateDebugInfo()

  // 检查广告容器宽度，放宽父容器宽度要求
  if (adEl && adEl.offsetWidth > 0) {
    console.log(
      `AdSense: Container width is ${adEl.offsetWidth}px, parent width is ${
        parentEl?.offsetWidth || 0
      }px, attempting to push ad`
    )

    // 检查广告是否已经存在
    if (adEl.innerHTML.trim() !== '' && !adEl.querySelector('iframe')) {
      console.log('AdSense: Ad already exists, skipping push')
      return
    }

    // 检查是否有其他广告正在 push
    if (globalAdPushInProgress) {
      console.log('AdSense: Another ad push in progress, retrying...')
      setTimeout(() => pushAd(retryCount), 100)
      return
    }

    // 清理页面上所有其他 adsbygoogle 元素
    clearAllAds()

    if (window.adsbygoogle) {
      try {
        globalAdPushInProgress = true
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        console.log('AdSense: Ad pushed successfully')
        setTimeout(() => {
          globalAdPushInProgress = false
          if (adEl.innerHTML.trim() === '') {
            console.warn('AdSense: Ad failed to load, showing fallback')
            showFallback.value = true
          }
        }, 3000)
      } catch (e) {
        globalAdPushInProgress = false
        console.error('AdSense push error:', e)
        if (e.message && e.message.includes('already have ads')) {
          console.log('AdSense: Ad already exists, skipping')
          return
        }
        if (e.message && e.message.includes('403')) {
          console.warn('AdSense: 403 error detected, showing fallback')
          showFallback.value = true
        }
      }
    } else {
      console.log('AdSense: adsbygoogle not loaded, retrying...')
      setTimeout(() => pushAd(retryCount), 100)
    }
  } else {
    if (retryCount < 15) {
      console.log(`AdSense: Container width is 0, retry ${retryCount + 1}/15`)
      setTimeout(() => pushAd(retryCount + 1), 200)
    } else {
      console.warn('AdSense: Container width is 0 after 15 retries')
      if (adEl) {
        console.log('AdSense debug info:', {
          offsetWidth: adEl.offsetWidth,
          clientWidth: adEl.clientWidth,
          scrollWidth: adEl.scrollWidth,
          style: adEl.style.cssText,
          parentWidth: parentEl?.offsetWidth,
          parentStyle: parentEl?.style.cssText,
        })
      }
      showFallback.value = true
    }
  }
}

// 清理广告内容
const clearAd = () => {
  const adEl = adElement.value
  if (adEl) {
    // 移除所有子元素，包括 iframe
    adEl.innerHTML = ''
    // 移除 adsbygoogle 类，让 Google 认为这是一个新元素
    adEl.classList.remove('adsbygoogle')
    showFallback.value = false
  }
}

// 重新初始化广告元素
const reinitAd = () => {
  const adEl = adElement.value
  if (adEl) {
    // 重新添加 adsbygoogle 类
    adEl.classList.add('adsbygoogle')
    // 重新设置属性
    adEl.setAttribute('data-ad-client', props.adClient)
    adEl.setAttribute('data-ad-slot', props.adSlot)
    adEl.setAttribute('data-ad-format', props.adFormat)
    adEl.setAttribute('data-full-width-responsive', props.fullWidthResponsive.toString())
  }
}

// 路由变化时刷新广告
watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath === oldPath) return
    // 先清理旧的广告内容
    clearAd()
    adKey.value += 1
    showFallback.value = false // 重置降级状态
    nextTick(() => {
      // 重新初始化广告元素
      reinitAd()
      // 立即尝试 push，不等待额外延迟
      pushAd()
    })
  }
)

// 首次挂载时激活广告
onMounted(() => {
  // 立即尝试 push，不等待 nextTick
  updateDebugInfo()
  pushAd()
  // 同时也在 nextTick 后再次尝试，确保 DOM 完全渲染
  nextTick(() => {
    updateDebugInfo()
    setTimeout(() => pushAd(), 50)
  })
})

// 组件卸载时清理逻辑
onUnmounted(() => {
  clearAd()
})
</script>

<style scoped>
.adsense-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.ad-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
}

.ad-placeholder {
  text-align: center;
  color: #6c757d;
  font-size: 12px;
  font-weight: 500;
}

.ad-debug {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #e9ecef;
  border-radius: 4px;
  flex-direction: column;
}

.ad-debug div {
  margin-bottom: 10px;
}

.ad-debug button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.ad-debug button:hover {
  background-color: #0056b3;
}
</style> 