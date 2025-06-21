<template>
  <section class="guides-section">
    <div class="container">
      <!-- Add Title -->
      <!-- <h2>{{ $t('guides.title') }}</h2> -->

      <!-- Tabs Navigation -->
      <div class="tabs-nav">
        <button :class="{ active: activeTab === 'special' }" @click="setActiveTab('special')">
          {{ $t('guides.tabs.special') }}
        </button>
        <button :class="{ active: activeTab === '01-10' }" @click="setActiveTab('01-10')">
          {{ $t('guides.tabs.levels1_10') }}
        </button>
        <button :class="{ active: activeTab === '11-20' }" @click="setActiveTab('11-20')">
          {{ $t('guides.tabs.levels11_20') }}
        </button>
        <button :class="{ active: activeTab === '21-30' }" @click="setActiveTab('21-30')">
          {{ $t('guides.tabs.levels21_30') }}
        </button>
        <button :class="{ active: activeTab === '31-40' }" @click="setActiveTab('31-40')">
          {{ $t('guides.tabs.levels31_40') }}
        </button>
        <button :class="{ active: activeTab === '41-50' }" @click="setActiveTab('41-50')">
          {{ $t('guides.tabs.levels41_50') }}
        </button>
        <button :class="{ active: activeTab === '51-60' }" @click="setActiveTab('51-60')">
          {{ $t('guides.tabs.levels51_60') }}
        </button>
        <!-- Add more tabs if needed -->
      </div>

      <!-- Guides Grid -->
      <!-- 添加加载和错误状态, 使用 props -->
      <div v-if="props.isLoading" class="loading-message">Loading guides...</div>
      <div v-else-if="props.error" class="error-message">
        {{ $t('guides.loadingError', { error: props.error }) }}
      </div>
      <div v-else-if="filteredGuides.length > 0" class="guides-grid image-grid">
        <router-link
          v-for="(guide, index) in filteredGuides"
          :key="guide.id"
          :to="guide.routeObject"
          class="guide-card image-card"
        >
          <div class="guide-image-placeholder">
            <img
              :src="guide.imageUrl"
              :alt="guide.title?.replace(brRegex, ' ') || 'Guide image'"
              :fetchpriority="index < 5 ? 'high' : 'auto'"
              :loading="index < 5 ? 'eager' : 'lazy'"
              width="300"
              height="150"
              :decoding="index < 5 ? 'sync' : 'async'"
            />
          </div>
          <div class="guide-content">
            <h3 v-html="guide.title"></h3>
          </div>
        </router-link>
      </div>
      <!-- 显示无结果消息 (现在在 v-else-if 外部) -->
      <p v-else-if="!props.isLoading && filteredGuides.length === 0">
        {{ $t('guides.noGuidesAvailable') }}
      </p>
    </div>
  </section>
</template>

<script setup>
// Import ref and computed from Vue, and RouterLink from vue-router
// Import ref, computed, and defineProps from Vue
import { ref, computed, defineProps, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
// 移除静态导入
// import allGuidesData from '@/datas/guides.json'
// 移除 useGuides composable 导入
// import { useGuides } from '@/composables/useGuides'

// 定义 props
const props = defineProps({
  guides: {
    type: Array,
    required: true,
    default: () => [], // Provide a default empty array
  },
  isLoading: {
    type: Boolean,
    required: true,
    default: false,
  },
  error: {
    // Can be Error object, string, or null/undefined
    required: false,
    default: null,
  },
})

// 获取当前路由
const route = useRoute()

// 使用localStorage存储和恢复tab状态
const STORAGE_KEY = 'cookingdom-active-tab'

// 从localStorage获取保存的tab，如果没有则默认为'special'
const getSavedTab = () => {
  try {
    const savedTab = localStorage.getItem(STORAGE_KEY)
    return savedTab || 'special'
  } catch (e) {
    console.error('Error accessing localStorage:', e)
    return 'special'
  }
}

// 根据guide ID确定应该属于哪个tab
const getCategoryTabForGuide = (guideId) => {
  if (!props.guides || !guideId) return null

  // 查找匹配的guide
  const guide = props.guides.find((g) => g.id === guideId)
  if (!guide) return null

  // 如果是特殊指南，返回'special'
  if (guide.isSpecial === true) {
    return 'special'
  }

  // 返回guide的category，确保格式一致
  // 处理可能的格式差异，例如'1-10'和'01-10'
  const category = guide.category
  if (category === '1-10' || category === '01-10') return '01-10'
  if (category === '11-20') return '11-20'
  if (category === '21-30') return '21-30'
  if (category === '31-40') return '31-40'
  if (category === '41-50') return '41-50'

  return category
}

// 检查URL中是否有guide ID，如果有则自动切换到对应的tab
const autoSelectTabFromUrl = () => {
  // 如果是从详情页返回，检查localStorage中是否有记录的最后访问的guideId
  const lastViewedGuideId = localStorage.getItem('last-viewed-guide-id')

  if (lastViewedGuideId) {
    // 首先尝试从localStorage获取保存的category
    const savedCategory = localStorage.getItem('last-viewed-guide-category')
    if (savedCategory) {
      console.log(`Found saved category ${savedCategory} for guide ID ${lastViewedGuideId}`)

      // 清除localStorage中的数据
      localStorage.removeItem('last-viewed-guide-id')
      localStorage.removeItem('last-viewed-guide-category')

      // 根据category确定tab
      if (savedCategory === '01-10' || savedCategory === '1-10') return '01-10'
      if (savedCategory === '11-20') return '11-20'
      if (savedCategory === '21-30') return '21-30'
      if (savedCategory === '31-40') return '31-40'
      if (savedCategory === '41-50') return '41-50'
    }

    // 如果没有保存的category或无法映射，尝试从guides数据中获取
    const categoryTab = getCategoryTabForGuide(lastViewedGuideId)
    if (categoryTab) {
      console.log(`Found category tab ${categoryTab} for guide ID ${lastViewedGuideId}`)
      // 清除最后访问的guideId
      localStorage.removeItem('last-viewed-guide-id')
      // 设置tab
      return categoryTab
    } else {
      console.log(`Could not find category tab for guide ID ${lastViewedGuideId}`)
    }
  }

  // 如果没有最后访问的guideId或找不到对应的tab，则使用保存的tab
  const savedTab = getSavedTab()
  console.log(`Using saved tab: ${savedTab}`)
  return savedTab
}

// Ref to track the active tab - 根据URL或localStorage获取初始值
const activeTab = ref(autoSelectTabFromUrl())

// Function to change the active tab
const setActiveTab = (tab) => {
  activeTab.value = tab
  // 保存到localStorage
  try {
    localStorage.setItem(STORAGE_KEY, tab)
  } catch (e) {
    console.error('Error saving to localStorage:', e)
  }
}

// 监听路由变化，当返回到guides页面时自动选择正确的tab
watch(
  () => route.path,
  (newPath) => {
    // 检查是否是guides页面（考虑多语言路径）
    if (newPath === '/guides' || /^\/[a-z]{2}\/guides$/.test(newPath)) {
      console.log(`Navigated to guides page: ${newPath}`)
      const newTab = autoSelectTabFromUrl()
      console.log(`Selected tab: ${newTab}, current tab: ${activeTab.value}`)
      if (newTab && newTab !== activeTab.value) {
        console.log(`Setting active tab to: ${newTab}`)
        setActiveTab(newTab)
      }
    }
  }
)

// Define the regex for removing <br> tags
const brRegex = /<br\s*\/?\s*>/gi

// Computed property to filter guides based on the *props*
const filteredGuides = computed(() => {
  // Use props.guides instead of allGuides.value
  if (!props.guides) return []

  if (activeTab.value === 'special') {
    // If 'special' tab is active, filter guides where isSpecial is true
    return props.guides.filter((guide) => guide.isSpecial === true)
  } else {
    // Otherwise, filter by the category matching the active tab
    // Handle potential format differences (e.g., '1-10' vs '01-10')
    const categoryMap = {
      '01-10': ['01-10', '1-10'],
      '11-20': ['11-20'],
      '21-30': ['21-30'],
      '31-40': ['31-40'],
      '41-50': ['41-50'],
    }

    // Get the possible category values for the active tab
    const possibleCategories = categoryMap[activeTab.value] || [activeTab.value]

    // Filter guides that match any of the possible categories
    return props.guides.filter((guide) => possibleCategories.includes(guide.category))
  }
})
</script>

<style scoped>
/* Guides Section Styles - Moved from HomeView.vue */
.guides-section {
  padding: 3rem 0;
  background-color: #fff0f5; /* Light lavender blush */
}

.guides-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.guides-section h2 {
  font-size: 2.2rem;
  color: #a08ee6; /* Main purple */
  margin-bottom: 2rem;
}

/* Tabs Navigation Styles */
.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.tabs-nav button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #a08ee6; /* Purple border */
  background-color: #ffffff;
  color: #a08ee6; /* Purple text */
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tabs-nav button:hover {
  background-color: #f0eaff; /* Lighter purple background */
  transform: translateY(-2px);
}

.tabs-nav button.active {
  background-color: #a08ee6; /* Purple background */
  color: #ffffff; /* White text */
  box-shadow: 0 4px 10px rgba(160, 142, 230, 0.4);
}

/* Adjusted Guides Grid and Card Styles for Image Grid */
.guides-grid.image-grid {
  display: grid;
  /* Default to 5 columns on larger screens */
  grid-template-columns: repeat(5, minmax(0, 1fr)); /* Ensures 5 columns, prevents overflow */
  gap: 1.5rem;
  /* justify-content: center; /* Optional: Center grid if container is wider */
}

.guide-card.image-card {
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left; /* Align text left */
}

.guide-card.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(160, 142, 230, 0.2);
}

.guide-image-placeholder {
  width: 100%;
  height: 150px; /* 固定高度 */
  background-color: #f0f0f0; /* 加载前的背景色 */
  position: relative;
  overflow: hidden;
  contain: layout paint; /* 防止布局偏移 */
  will-change: transform; /* 提示浏览器这个元素会变化 */
  transform: translateZ(0); /* 启用GPU加速 */
  backface-visibility: hidden; /* 防止闪烁 */
  perspective: 1000; /* 提高渲染性能 */
  content-visibility: auto; /* 优化渲染性能 */
  contain-intrinsic-size: 0 150px; /* 提供估计高度 */
}

.guide-image-placeholder img {
  width: 100%;
  height: 100%; /* 使用100%高度填充容器 */
  object-fit: cover; /* Cover the area, may crop */
  display: block; /* Remove bottom space */
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform; /* 提示浏览器这个元素会变化 */
  transform: translateZ(0); /* 启用GPU加速 */
  backface-visibility: hidden; /* 防止闪烁 */
  perspective: 1000; /* 提高渲染性能 */
  image-rendering: -webkit-optimize-contrast; /* 提高图片渲染质量 */
  image-rendering: crisp-edges; /* 提高图片渲染质量 */
}

.guide-content {
  padding: 0.5rem 1rem;
}

.guide-content h3 {
  margin: 0; /* Remove default margin */
  font-size: 0.8rem; /* Slightly smaller font */
  color: #5b4b8a; /* Darker purple */
  line-height: 1.4;
  /* Removed height/line-height/display grid centering */
}

/* Specific style for level text if needed - Example */
.guide-content span {
  font-size: 0.85rem;
  color: #a08ee6;
  display: block;
  margin-top: 0.25rem;
}

/* Ensure router-link doesn't add default styling */
.guide-card {
  text-decoration: none; /* Remove underline from link */
  color: inherit; /* Inherit text color */
  display: block; /* Make the link a block element */
}

/* --- Media Queries --- */

/* Tablet Styles (<= 1024px) */
@media (max-width: 1024px) {
  .guides-section h2 {
    font-size: 2rem;
  }
  .tabs-nav button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  .guides-grid.image-grid {
    /* Change to 4 columns */
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
}

/* Mobile Styles (<= 767px) */
@media (max-width: 767px) {
  .guides-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .tabs-nav {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .tabs-nav button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  .guides-grid.image-grid {
    /* Change to 3 columns */
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }
  .guide-image-placeholder {
    height: 120px; /* 调整容器高度 */
  }
  .guide-content {
    padding: 0.6rem;
  }
  .guide-content h3 {
    font-size: 0.8rem;
    line-height: 1.3;
  }
  .guides-section {
    padding: 0;
  }
}

/* Optional: Add smaller screen breakpoint if needed */
@media (max-width: 480px) {
  .guides-grid.image-grid {
    /* Change to 2 columns */
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
  }
}

/* 添加 loading 和 error 消息样式 */
.loading-message,
.error-message {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: #555;
}
.error-message {
  color: #dc3545; /* Bootstrap danger color */
}
</style>