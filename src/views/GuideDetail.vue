<template>
  <div class="guide-detail-page">
    <!-- Left Ad -->
    <aside class="ads-left" v-if="!isMobile">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4224010041977181"
        data-ad-slot="7552815638"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </aside>

    <!-- Main Content Container -->
    <div class="guide-detail-content">
      <!-- Optional: Breadcrumbs can go here -->
      <div v-if="currentGuide" class="guide-layout">
        <!-- Main Content Area (Left) -->
        <main class="main-content">
          <!-- Back link -->
          <router-link :to="{ name: 'guides' }" class="back-link">{{
            $t('guideDetail.backLink')
          }}</router-link>

          <!-- New H1 using pageTitle -->
          <h1 class="page-main-title">{{ currentGuide.pageTitle }}</h1>

          <aside class="ads-wrapper" v-if="isMobile">
            <ins
              class="adsbygoogle"
              style="display: inline-block; width: 300px; height: 100px"
              data-ad-client="ca-pub-4224010041977181"
              data-ad-slot="3712377621"
            ></ins>
          </aside>

          <!-- New Subtitle -->
          <p class="page-subtitle" v-if="currentGuide.pageSubtitle">
            {{ currentGuide.pageSubtitle }}
          </p>

          <!-- Display YouTube video if iframeUrl exists -->
          <div v-if="currentGuide.iframeUrl" class="iframe-container">
            <YouTubeFacade
              :videoUrl="currentGuide.iframeUrl"
              :title="$t('guideDetail.iframeTitle')"
              :customThumbnail="getVideoThumbnail(currentGuide)"
            />
          </div>

          <!-- 移动端横幅广告 -->
          <aside class="ads-content" v-if="isMobile">
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-4224010041977181"
              data-ad-slot="6083907013"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </aside>

          <!-- Render HTML content using v-html (Now last) -->
          <div v-html="currentGuide.detailsHtml" class="guide-html-content"></div>

          <!-- You could add more sections here, e.g., comments -->
        </main>

        <!-- Sidebar Area (Right) -->
        <aside class="sidebar">
          <!-- Sidebar Image -->
          <div class="sidebar-image-container">
            <img
              :src="currentGuide.sidebarData.sidebarImageUrl"
              :alt="currentGuide.title"
              class="sidebar-image"
              width="300"
              height="200"
              loading="lazy"
            />
          </div>

          <!-- Level Info -->
          <div class="level-info" v-html="currentGuide.sidebarData.levelInfoHtml"></div>

          <aside class="ads-wrapper">
            <ins
              class="adsbygoogle"
              style="display: inline-block; width: 300px; height: 300px"
              data-ad-client="ca-pub-4224010041977181"
              data-ad-slot="4968753003"
            ></ins>
          </aside>

          <!-- Featured Guides -->
          <div class="featured-guides">
            <h3>{{ $t('guideDetail.featuredLevelsTitle') }}</h3>
            <div class="featured-guides-list">
              <router-link
                v-for="guide in currentGuide.sidebarData.featuredGuides"
                :key="guide.id"
                :to="guide.detailsRoute"
                class="featured-guide-item"
              >
                <img
                  :src="guide.imageUrl"
                  :alt="guide.title"
                  class="featured-guide-image"
                  width="80"
                  height="60"
                  loading="lazy"
                />
                <div class="featured-guide-info">
                  <h4 v-html="guide.title"></h4>
                </div>
              </router-link>
            </div>
          </div>
        </aside>
      </div>

      <!-- Loading or Error States -->
      <div v-else-if="isLoadingList" class="loading-or-not-found">
        <p>{{ $t('guideDetail.loadingOrNotFound') }}</p>
      </div>
      <div v-else-if="listError" class="loading-or-not-found">
        <p>{{ listError.message || 'Error loading guides.' }}</p>
        <router-link :to="{ name: 'guides' }" class="back-link">{{
          $t('guideDetail.backLink')
        }}</router-link>
      </div>
      <div v-else-if="!isLoadingList && !currentGuide && guideId" class="loading-or-not-found">
        <p>{{ $t('guideDetail.loadingOrNotFound') }}</p>
        <p>{{ $t('guideDetail.idNotFound', { id: guideId }) }}</p>
        <router-link :to="{ name: 'guides' }" class="back-link">{{
          $t('guideDetail.backLink')
        }}</router-link>
      </div>
      <div v-else-if="!guideId" class="loading-or-not-found">
        <p>
          {{ t('guide.invalidGuideId', 'No guide ID specified.') }}
          <RouterLink :to="{ name: 'guides' }">Back to Guides</RouterLink>
        </p>
      </div>
    </div>

    <!-- Right Ad -->
    <aside class="ads-right" v-if="!isMobile">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4224010041977181"
        data-ad-slot="1956039879"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </aside>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuides } from '@/composables/useGuides'
import { defaultLang } from '@/i18n'
import { updateMetaTag } from '@/utils/head'
import YouTubeFacade from '@/components/YouTubeFacade.vue'
import { useDeviceDetection } from '@/composables/useDeviceDetection'

const route = useRoute()
const { t, locale } = useI18n()
const { isMobile } = useDeviceDetection()

// Use the composable for guides list, loading state, and error state
const { guides, isLoading: isLoadingList, error: listError, load } = useGuides()

const guideId = computed(() => route.params.id)

// Computed property to find the current guide from the loaded list
const currentGuide = computed(() => {
  if (
    !guideId.value ||
    isLoadingList.value ||
    listError.value ||
    !guides.value ||
    guides.value.length === 0
  ) {
    return null
  }
  return guides.value.find((g) => g.id === guideId.value)
})

// Helper function to get video thumbnail
const getVideoThumbnail = (guide) => {
  if (!guide || !guide.iframeUrl) return null
  // Extract video ID from YouTube URL and generate thumbnail
  const videoIdMatch = guide.iframeUrl.match(/embed\/([^?]+)/)
  if (videoIdMatch) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`
  }
  return null
}

// Watch for guide changes and update meta tags
watch(
  currentGuide,
  (newGuide, oldGuide) => {
    if (isLoadingList.value) return

    if (newGuide) {
      document.title = newGuide.seo?.title || t('meta.guideDetail.title', 'Guide Detail')
      updateMetaTag('description', newGuide.seo?.description)
      updateMetaTag('keywords', newGuide.seo?.keywords)
    } else if (!isLoadingList.value && guideId.value && !listError.value) {
      document.title = t('meta.notFoundTitle', 'Guide Not Found')
      updateMetaTag(
        'description',
        t('meta.notFoundDescription', 'The guide you are looking for could not be found.')
      )
      updateMetaTag('keywords', '')
    }
  },
  { immediate: true, deep: true }
)

// Watch for list errors
watch(listError, (newError) => {
  if (newError) {
    document.title = t('meta.errorTitle', 'Error Loading Guide')
    updateMetaTag('description', 'There was an error loading the guide content.')
    updateMetaTag('keywords', '')
  }
})

// 手动触发广告加载
const loadAds = () => {
  if (window.adsbygoogle && typeof window.adsbygoogle.push === 'function') {
    try {
      // 直接处理所有广告元素，但添加错误处理
      const adElements = document.querySelectorAll('.adsbygoogle')
      adElements.forEach((el) => {
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (pushError) {
          // 忽略重复加载错误
          if (!pushError.message.includes('already have ads')) {
            console.error('广告加载失败:', pushError)
          }
        }
      })
    } catch (e) {
      console.error('广告加载失败:', e)
    }
  } else {
    // 如果 adsbygoogle 还没加载，延迟重试
    setTimeout(loadAds, 1000)
  }
}

onMounted(() => {
  // 加载指南数据（如果还没有加载的话）
  if (!guides.value.length && !isLoadingList.value) {
    load(locale.value)
  }

  // 加载广告
  setTimeout(loadAds, 1000)
})
</script>

<style scoped>
.guide-detail-content {
  /* 页面级主内容区样式已在 base.css 中定义 */
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  contain: layout style;
  min-height: 100vh;
  display: block;
}

.guide-layout {
  display: flex;
  gap: 2rem;
  min-height: 800px;
  contain: layout;
}

.main-content {
  flex: 1;
  min-width: 0;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  contain: layout style;
}

.sidebar {
  flex: 0 0 300px;
  contain: layout style;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #a08ee6;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.sidebar-image-container img {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.level-info-box {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #eee;
}

.level-info-box h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #5b4b8a;
  font-size: 1.2rem;
}

.level-info-box p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.level-info-box p strong {
  color: #333;
}

.featured-guides {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #eee;
  contain: layout style;
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
}

.featured-guides h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #5b4b8a;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.featured-guides ul {
  list-style: none;
  padding: 0;
  margin: 0;
  contain: layout style;
  min-height: 50px;
}

.featured-guides li {
  margin-bottom: 0.8rem;
  height: 60px;
  contain: layout style;
}

.featured-guide-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s ease;
  padding: 0.4rem;
  border-radius: 4px;
  height: 100%;
  contain: layout style;
  box-sizing: border-box;
}

.featured-guide-link:hover {
  background-color: #eee;
}

.featured-guide-img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  background-color: #f0f0f0;
  contain: layout paint;
}

.featured-guide-link span {
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Styles for HTML content and iframe remain largely the same */
.guide-html-content {
  line-height: 1.7;
  color: #333;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}

.guide-html-content :deep(h1),
.guide-html-content :deep(h2),
.guide-html-content :deep(h3) {
  color: #5b4b8a;
  margin-top: 1.8em;
  margin-bottom: 0.8em;
}

.guide-html-content :deep(h1) {
  font-size: 1.8rem;
}
.guide-html-content :deep(h2) {
  font-size: 1.5rem;
}
.guide-html-content :deep(h3) {
  font-size: 1.3rem;
}
.guide-html-content :deep(p) {
  margin-bottom: 1em;
}
.guide-html-content :deep(ul),
.guide-html-content :deep(ol) {
  padding-left: 1.5em;
  margin-bottom: 1em;
}
.guide-html-content :deep(li) {
  margin-bottom: 0.5em;
}
.guide-html-content :deep(a) {
  color: #a08ee6;
  text-decoration: underline;
}

.iframe-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 16 / 12;
}

.loading-or-not-found {
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .guide-layout {
    flex-direction: column;
  }
  .sidebar {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (max-width: 767px) {
  .guide-detail-page {
    flex-direction: column;
    padding: 0;
  }
  .guide-detail-content {
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
  .guide-layout {
    padding: 0;
    margin: 0;
    min-height: 600px;
  }
  .main-content {
    padding: 0 1rem;
    margin: 0;
    min-height: 400px;
  }
  .sidebar {
    padding: 0 1rem;
    margin: 0;
    min-height: 200px;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .page-main-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .page-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
  }
  .featured-guides {
    min-height: 150px;
  }
  .featured-guides li {
    height: 50px;
  }

  .guide-html-content :deep(h2) {
    font-size: 1.2em;
    margin: 0.5em 0;
    line-height: 1;
  }
  .guide-html-content :deep(h3) {
    font-size: 1em;
    margin: 0.5em 0;
    line-height: 1;
  }
  .guide-html-content :deep(p) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}
</style>