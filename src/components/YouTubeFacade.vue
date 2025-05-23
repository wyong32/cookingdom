<template>
  <div class="youtube-facade" :class="{ 'facade-loaded': isLoaded }">
    <!-- 占位符容器 -->
    <div v-if="!isLoaded" class="youtube-placeholder" @click="loadYouTube">
      <!-- 缩略图 -->
      <img
        :src="thumbnailUrl"
        :alt="title || 'YouTube video thumbnail'"
        class="youtube-thumbnail"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
        width="640"
        height="360"
      />

      <!-- 播放按钮 -->
      <div class="play-button">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path
            class="play-button-bg"
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
          ></path>
          <path class="play-button-icon" d="M 45,24 27,14 27,34"></path>
        </svg>
      </div>

      <!-- 加载提示 -->
      <!-- <div class="placeholder-info">
        <p class="click-to-load">{{ loadText }}</p>
        <p class="performance-note">{{ performanceText }}</p>
      </div> -->
    </div>

    <!-- YouTube iframe (仅在点击后加载) -->
    <iframe
      v-if="isLoaded"
      :src="videoUrl"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="youtube-iframe"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  autoThumbnail: {
    type: Boolean,
    default: true,
  },
  customThumbnail: {
    type: String,
    default: '',
  },
  optimizeRendering: {
    type: Boolean,
    default: false,
  },
})

// 不再需要 useI18n

// 状态
const isLoaded = ref(false)

// 计算属性：获取视频ID和缩略图URL
const videoId = computed(() => {
  // 从URL中提取视频ID
  const url = props.videoUrl
  let id = ''

  if (url.includes('youtube.com/embed/')) {
    id = url.split('youtube.com/embed/')[1].split('?')[0]
  } else if (url.includes('youtube.com/watch?v=')) {
    id = url.split('youtube.com/watch?v=')[1].split('&')[0]
  } else if (url.includes('youtu.be/')) {
    id = url.split('youtu.be/')[1].split('?')[0]
  }

  return id
})

const thumbnailUrl = computed(() => {
  if (props.customThumbnail) {
    // 添加优化参数 - 使用通用的优化策略
    if (props.customThumbnail.startsWith('/')) {
      // 检查是否是guides_13.webp，如果是则不添加任何参数，保持原始URL
      // 这是因为我们已经在HTML中预加载了这个图片
      if (props.customThumbnail.includes('guides_13.webp')) {
        return props.customThumbnail
      }

      // 其他视频缩略图使用更高的质量和宽度
      return `${props.customThumbnail}?w=640&q=85&fm=webp&cache=31536000`
    }
    return props.customThumbnail
  }

  if (props.autoThumbnail && videoId.value) {
    // 使用YouTube缩略图API，添加预连接
    if (typeof document !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = 'https://img.youtube.com'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }
    return `https://img.youtube.com/vi/${videoId.value}/hqdefault.jpg`
  }

  // 默认占位图
  return '/images/video-placeholder.webp'
})

// 本地化文本 - 可以在模板中直接使用 t() 函数

// 方法：加载YouTube视频
const loadYouTube = () => {
  isLoaded.value = true

  // 发送事件以便跟踪
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'youtube_facade_click',
      video_id: videoId.value,
      video_title: props.title,
    })
  }
}

// 生命周期钩子
onMounted(() => {
  // 可以在这里添加视频预加载逻辑
  // 例如，当用户悬停在视频上时预连接到YouTube域名

  const preconnectYouTube = () => {
    const links = [
      { rel: 'preconnect', href: 'https://www.youtube.com' },
      { rel: 'preconnect', href: 'https://www.youtube-nocookie.com' },
      { rel: 'preconnect', href: 'https://i.ytimg.com' },
    ]

    links.forEach((linkData) => {
      const link = document.createElement('link')
      link.rel = linkData.rel
      link.href = linkData.href
      document.head.appendChild(link)
    })
  }

  // 当用户与页面交互后预连接
  document.addEventListener(
    'mousemove',
    () => {
      preconnectYouTube()
      // 只执行一次
      document.removeEventListener('mousemove', preconnectYouTube)
    },
    { once: true }
  )
})
</script>

<style scoped>
.youtube-facade {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #000;
  aspect-ratio: 16 / 9;
  contain: layout style paint; /* 防止布局偏移和减少渲染计算 */
  will-change: transform; /* 提示浏览器这个元素会变化 */
  transform: translateZ(0); /* 启用GPU加速 */
  content-visibility: auto; /* 优化渲染性能 */
  contain-intrinsic-size: 0 360px; /* 提供估计高度 */
}

.youtube-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transition: all 0.3s ease;
}

.youtube-placeholder:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.youtube-placeholder:hover .play-button {
  transform: scale(1.1);
}

.youtube-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  will-change: transform; /* 提示浏览器这个元素会变化 */
  transform: translateZ(0); /* 启用GPU加速 */
  backface-visibility: hidden; /* 防止闪烁 */
  perspective: 1000; /* 提高渲染性能 */
  image-rendering: -webkit-optimize-contrast; /* 提高图片渲染质量 */
  image-rendering: crisp-edges; /* 提高图片渲染质量 */
  content-visibility: auto; /* 优化渲染性能 */
  contain-intrinsic-size: 0 360px; /* 提供估计高度 */
  paint-order: visibility; /* 优先渲染可见部分 */
}

.play-button {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.play-button-bg {
  fill: #212121;
  fill-opacity: 0.8;
}

.play-button-icon {
  fill: #fff;
}

.placeholder-info {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 2;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
}

.click-to-load {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.performance-note {
  font-size: 12px;
  opacity: 0.8;
}

.youtube-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .click-to-load {
    font-size: 14px;
  }

  .performance-note {
    font-size: 10px;
  }
}
</style>
