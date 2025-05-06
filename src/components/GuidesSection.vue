<template>
  <section class="guides-section">
    <div class="container">
      <!-- Add Title -->
      <h2>{{ $t('guides.title') }}</h2>

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
          v-for="guide in filteredGuides"
          :key="guide.id"
          :to="guide.routeObject"
          class="guide-card image-card"
        >
          <div class="guide-image-placeholder">
            <img :src="guide.imageUrl" :alt="guide.title?.replace(brRegex, ' ') || 'Guide image'" />
          </div>
          <div class="guide-content">
            <h4 v-html="guide.title"></h4>
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
import { ref, computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router'
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

// 不再需要调用 useGuides
// const { guides: allGuides, isLoading, error } = useGuides()

// Ref to track the active tab - default to 'special' now
const activeTab = ref('special')

// Function to change the active tab
const setActiveTab = (tab) => {
  activeTab.value = tab
}

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
    // Adjust mapping based on actual data structure if needed
    const categoryMap = {
      '01-10': '01-10',
      '11-20': '11-20',
      '21-30': '21-30',
      '31-40': '31-40',
      '41-50': '41-50',
    }
    const targetCategory = categoryMap[activeTab.value] || activeTab.value
    return props.guides.filter((guide) => guide.category === targetCategory)
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

.guide-image-placeholder img {
  width: 100%;
  height: 150px; /* Fixed height for consistency */
  object-fit: cover; /* Cover the area, may crop */
  display: block; /* Remove bottom space */
}

.guide-content {
  padding: 1rem;
}

.guide-content h4 {
  margin: 0; /* Remove default margin */
  font-size: 1rem; /* Slightly smaller font */
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
  .guide-content h4 {
    font-size: 0.9rem;
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
  .guide-image-placeholder img {
    height: 120px; /* Adjust image height */
  }
  .guide-content {
    padding: 0.6rem;
  }
  .guide-content h4 {
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