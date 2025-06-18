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
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
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

// 智能激活广告 - 添加宽度检查和重试机制
const pushAd = (retryCount = 0) => {
  const adEl = adElement.value
  const parentEl = adEl?.parentElement
  // 检查广告容器和父容器宽度
  if (adEl && adEl.offsetWidth > 0 && parentEl && parentEl.offsetWidth > 0) {
    console.log(
      `AdSense: Container width is ${adEl.offsetWidth}px, parent width is ${parentEl.offsetWidth}px, attempting to push ad`
    )
    if (window.adsbygoogle) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        console.log('AdSense: Ad pushed successfully')
        setTimeout(() => {
          if (adEl.innerHTML.trim() === '') {
            console.warn('AdSense: Ad failed to load, showing fallback')
            showFallback.value = true
          }
        }, 3000)
      } catch (e) {
        console.error('AdSense push error:', e)
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
      console.log(`AdSense: Container or parent width is 0, retry ${retryCount + 1}/15`)
      setTimeout(() => pushAd(retryCount + 1), 200)
    } else {
      console.warn('AdSense: Container or parent width is 0 after 15 retries')
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

// 路由变化时刷新广告
watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath === oldPath) return
    adKey.value += 1
    showFallback.value = false // 重置降级状态
    nextTick(() => {
      // 给更多时间让DOM完全渲染
      setTimeout(() => pushAd(), 100)
    })
  }
)

// 首次挂载时激活广告
onMounted(() => {
  nextTick(() => {
    // 给更多时间让DOM完全渲染
    setTimeout(() => pushAd(), 100)
  })
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
</style> 