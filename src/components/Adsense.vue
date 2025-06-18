<template>
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

// 智能激活广告 - 添加宽度检查和重试机制
const pushAd = (retryCount = 0) => {
  // 使用 ref 获取当前组件的广告元素
  const adEl = adElement.value

  // 检查广告容器是否有宽度
  if (adEl && adEl.offsetWidth > 0) {
    if (window.adsbygoogle) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {
        console.error('AdSense push error:', e)
      }
    } else {
      // adsbygoogle 未加载，延迟重试
      setTimeout(() => pushAd(retryCount), 100)
    }
  } else {
    // 宽度为0，延迟重试
    if (retryCount < 10) {
      // 最多重试10次
      setTimeout(() => pushAd(retryCount + 1), 200)
    } else {
      console.warn('AdSense: Container width is 0 after 10 retries')
    }
  }
}

// 路由变化时刷新广告
watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath === oldPath) return
    adKey.value += 1
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