<template>
  <div class="ad-layout">
    <!-- 顶部广告 -->
    <div v-if="showTopAds" class="top-ads">
      <AdComponent 
        v-for="adKey in topAds" 
        :key="adKey"
        :adConfig="adConfigs[adKey]" 
        :isMobile="isMobile" 
      />
    </div>

    <!-- 页面内容插槽 -->
    <slot />

    <!-- 底部广告 -->
    <div v-if="showBottomAds" class="bottom-ads">
      <AdComponent 
        v-for="adKey in bottomAds" 
        :key="adKey"
        :adConfig="adConfigs[adKey]" 
        :isMobile="isMobile" 
      />
    </div>

    <!-- 悬浮广告 -->
    <div v-if="showFloatingAds" class="floating-ads">
      <AdComponent 
        v-for="adKey in floatingAds" 
        :key="adKey"
        :adConfig="adConfigs[adKey]" 
        :isMobile="isMobile" 
      />
    </div>
  </div>
</template>

<script setup>
import AdComponent from '@/components/AdComponent.vue'
import { adConfigs } from '@/config/adConfig.js'
import { useDeviceDetection } from '@/composables/useDeviceDetection.js'
import { computed } from 'vue'

// Props
const props = defineProps({
  // 顶部广告
  topAds: {
    type: Array,
    default: () => ['ad1', 'ad6']
  },
  // 底部广告
  bottomAds: {
    type: Array,
    default: () => ['ad6']
  },
  // 悬浮广告
  floatingAds: {
    type: Array,
    default: () => ['ad2', 'ad3', 'ad5', 'ad7', 'ad8']
  },
  // 控制显示
  showTopAds: {
    type: Boolean,
    default: true
  },
  showBottomAds: {
    type: Boolean,
    default: true
  },
  showFloatingAds: {
    type: Boolean,
    default: true
  }
})

// 设备检测
const { isMobile } = useDeviceDetection()
</script>

<style scoped>
.ad-layout {
  width: 100%;
}

.top-ads,
.bottom-ads {
  width: 100%;
}

.floating-ads {
  /* 悬浮广告不需要特殊样式，由广告本身控制 */
}
</style>
