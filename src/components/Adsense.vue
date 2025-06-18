<template>
  <ins
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

// 智能激活广告
const pushAd = () => {
  if (window.adsbygoogle) {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense push error:', e)
    }
  } else {
    setTimeout(pushAd, 50)
  }
}

// 路由变化时刷新广告
watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath === oldPath) return
    adKey.value += 1
    nextTick(() => {
      pushAd()
    })
  }
)

// 首次挂载时激活广告
onMounted(() => {
  nextTick(() => {
    pushAd()
  })
})
</script> 