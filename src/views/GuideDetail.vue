<template>
  <div class="guide-detail-page">
    <!-- Left Ad -->
    <div class="ads-left">
      <Adsense />
    </div>

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

          <!-- Render HTML content using v-html (Now last) -->
          <div v-html="currentGuide.detailsHtml" class="guide-html-content"></div>

          <!-- You could add more sections here, e.g., comments -->
        </main>

        <!-- Sidebar Area (Right) -->
        <aside class="sidebar">
          <!-- Sidebar Image -->
          <div class="sidebar-image-container" v-if="currentGuide.sidebarData?.sidebarImageUrl">
            <img
              :src="currentGuide.sidebarData.sidebarImageUrl"
              alt="Cookingdom Level"
              fetchpriority="high"
              loading="eager"
            />
          </div>

          <!-- Level Info Box -->
          <div
            class="level-info-box"
            v-if="currentGuide.sidebarData?.levelInfoHtml"
            v-html="currentGuide.sidebarData.levelInfoHtml"
          ></div>

          <!-- Featured Guides Section -->
          <div
            class="featured-guides"
            v-if="
              currentGuide.sidebarData?.featuredGuides &&
              currentGuide.sidebarData.featuredGuides.length > 0
            "
          >
            <h4>{{ $t('guideDetail.featuredLevelsTitle') }}</h4>
            <ul>
              <li v-for="featured in currentGuide.sidebarData.featuredGuides" :key="featured.id">
                <router-link :to="getFeaturedGuideLinkProps(featured)" class="featured-guide-link">
                  <img
                    :src="featured.imageUrl"
                    alt="Cookingdom Level"
                    class="featured-guide-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <span v-html="featured.title"></span>
                </router-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- Loading / Not Found State -->
      <div v-else-if="isLoadingList && !currentGuide" class="loading-or-not-found">
        <p>Loading guide details...</p>
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
    <div class="ads-right">
      <Adsense />
    </div>
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
import Adsense from '@/components/Adsense.vue'

const route = useRoute()
const { t, locale } = useI18n()

// Use the composable for guides list, loading state, and error state
const { guides, isLoading: isLoadingList, error: listError } = useGuides()

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

// Watch for changes in currentGuide to update TDK or handle not found
watch(
  currentGuide,
  (newGuide) => {
    if (isLoadingList.value) return // Don't do anything if the list is still loading

    if (newGuide) {
      // 保存当前查看的guide ID到localStorage，以便在返回时自动选择正确的tab
      try {
        console.log(`Saving guide ID to localStorage: ${newGuide.id}`)
        localStorage.setItem('last-viewed-guide-id', newGuide.id)
        // 同时保存当前的category，以防guide ID不能正确映射到category
        if (newGuide.category) {
          console.log(`Saving guide category to localStorage: ${newGuide.category}`)
          localStorage.setItem('last-viewed-guide-category', newGuide.category)
        }
      } catch (e) {
        console.error('Error saving guide ID to localStorage:', e)
      }

      const seoTitle = newGuide.seo?.title || t('meta.guideDetail.title', 'Guide Detail')
      const seoDescription =
        newGuide.seo?.description ||
        t('meta.guideDetail.description', 'Detailed guide information.')
      const seoKeywords =
        newGuide.seo?.keywords || t('meta.defaultKeywords', 'guide, tutorial, walkthrough')

      document.title = seoTitle
      updateMetaTag('description', seoDescription)
      updateMetaTag('keywords', seoKeywords)
      updateMetaTag('og:title', seoTitle)
      updateMetaTag('og:description', seoDescription)
      updateMetaTag('twitter:title', seoTitle)
      updateMetaTag('twitter:description', seoDescription)

      let specificImageUrl = newGuide.imageUrl || newGuide.sidebarData?.sidebarImageUrl
      if (specificImageUrl) {
        if (specificImageUrl.startsWith('/')) {
          specificImageUrl = `${window.location.origin}${
            import.meta.env.BASE_URL || '/'
          }${specificImageUrl.substring(1)}`
        }
        updateMetaTag('og:image', specificImageUrl)
        updateMetaTag('twitter:image', specificImageUrl)
      } else {
        // Optional: Fallback image logic could go here
      }
    } else if (!isLoadingList.value && guideId.value && !listError.value) {
      // Guide not found after list has loaded and no error in loading list
      document.title = t('meta.notFoundTitle', 'Guide Not Found')
      updateMetaTag(
        'description',
        t('meta.notFoundDescription', 'The guide you are looking for could not be found.')
      )
      updateMetaTag('keywords', '')
      updateMetaTag('og:title', document.title)
      updateMetaTag('og:description', '')
    }
  },
  { immediate: true, deep: true }
)

// Watch for listError from the composable to set error TDK
watch(listError, (newError) => {
  if (newError) {
    document.title = t('meta.errorTitle', 'Error Loading Guide')
    updateMetaTag('description', 'There was an error loading the guide content.')
    updateMetaTag('keywords', '')
    updateMetaTag('og:title', document.title)
    updateMetaTag('og:description', '')
  }
})

// The local loadGuide function is removed.
// Watches for guideId and locale are implicitly handled by currentGuide reacting to guides (from composable)
// and guideId.

// onMounted is no longer strictly needed for an initial loadGuide call,
// as the composable handles initial loading and currentGuide will react.

const getFeaturedGuideLinkProps = (featured) => {
  // This function might need adjustment if featured.id is not sufficient
  // or if the routeObject is already prepared in useGuides.js for featured guides.
  // For now, assuming it generates links similarly to how it was done before.
  const currentLocaleValue = locale.value
  const isDefault = currentLocaleValue === defaultLang
  let routeName = isDefault ? 'guide-detail' : 'guide-detail-lang'
  let routeParams = { id: featured.id }
  if (!isDefault) {
    routeParams.lang = currentLocaleValue
  }

  // 当用户点击featured guide时，保存guide ID和category到localStorage
  try {
    console.log(`Saving featured guide ID to localStorage: ${featured.id}`)
    localStorage.setItem('last-viewed-guide-id', featured.id)

    // 查找featured guide的完整数据以获取category
    const featuredGuideData = guides.value.find((g) => g.id === featured.id)
    if (featuredGuideData && featuredGuideData.category) {
      console.log(`Saving featured guide category to localStorage: ${featuredGuideData.category}`)
      localStorage.setItem('last-viewed-guide-category', featuredGuideData.category)
    }
  } catch (e) {
    console.error('Error saving featured guide data to localStorage:', e)
  }

  // If featured guides in the data already have a pre-calculated routeObject from useGuides,
  // you could potentially use that directly: return featured.routeObject
  return { name: routeName, params: routeParams }
}

// 动态插入结构化数据，提升 Google 索引能力
const addStructuredData = (guideObj) => {
  if (!guideObj) return

  let thumb = guideObj.sidebarData?.sidebarImageUrl || guideObj.imageUrl
  if (thumb && thumb.startsWith('/')) {
    thumb = `${window.location.origin}${import.meta.env.BASE_URL || '/'}${thumb.substring(1)}`
  }
  if (!thumb) {
    thumb = 'https://www.cookingdom.co/images/banner1.webp'
  }

  // 更新页面的社交分享图片（避免与watch中的重复）
  updateMetaTag('og:image', thumb)
  updateMetaTag('twitter:image', thumb)

  // 主要的HowTo结构化数据
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guideObj.seo?.title || guideObj.pageTitle,
    description: guideObj.seo?.description || guideObj.pageSubtitle || guideObj.pageTitle,
    image: thumb,
    author: {
      '@type': 'Organization',
      name: 'Cookingdom Fansite',
      url: 'https://www.cookingdom.co/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cookingdom Fansite',
      url: 'https://www.cookingdom.co/',
      logo: {
        '@type': 'ImageObject',
        url: `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/logo.webp`,
        width: 240,
        height: 240,
      },
    },
    datePublished: guideObj.publishDate
      ? `${guideObj.publishDate}T00:00:00Z`
      : new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
    about: {
      '@type': 'VideoGame',
      name: 'Cookingdom',
      genre: 'Cooking Simulation',
    },
    keywords:
      guideObj.seo?.keywords || 'cookingdom, game guide, walkthrough, cooking game, level guide',
    inLanguage: locale.value,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Cookingdom Fansite',
      url: 'https://www.cookingdom.co/',
    },
  }

  // 面包屑导航结构化数据
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.cookingdom.co/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: 'https://www.cookingdom.co/guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guideObj.seo?.title || guideObj.pageTitle,
        item: window.location.href,
      },
    ],
  }

  // 如果有视频，添加视频结构化数据
  let videoSchema = null
  if (guideObj.iframeUrl) {
    videoSchema = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: guideObj.seo?.title || guideObj.pageTitle,
      description: guideObj.seo?.description || guideObj.pageSubtitle || guideObj.pageTitle,
      thumbnailUrl: thumb,
      embedUrl: guideObj.iframeUrl,
      uploadDate: guideObj.publishDate
        ? `${guideObj.publishDate}T00:00:00Z`
        : new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'Cookingdom Fansite',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Cookingdom Fansite',
        logo: {
          '@type': 'ImageObject',
          url: `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/logo.webp`,
        },
      },
    }
  }

  // 移除旧的结构化数据
  const oldHowTo = document.getElementById('howto-schema')
  const oldVideo = document.getElementById('video-schema')
  const oldBreadcrumb = document.getElementById('breadcrumb-schema')
  if (oldHowTo) oldHowTo.remove()
  if (oldVideo) oldVideo.remove()
  if (oldBreadcrumb) oldBreadcrumb.remove()

  // 添加HowTo结构化数据
  const howToScript = document.createElement('script')
  howToScript.type = 'application/ld+json'
  howToScript.id = 'howto-schema'
  howToScript.text = JSON.stringify(howToSchema)
  document.head.appendChild(howToScript)

  // 添加面包屑结构化数据
  const breadcrumbScript = document.createElement('script')
  breadcrumbScript.type = 'application/ld+json'
  breadcrumbScript.id = 'breadcrumb-schema'
  breadcrumbScript.text = JSON.stringify(breadcrumbSchema)
  document.head.appendChild(breadcrumbScript)

  // 如果有视频，添加视频结构化数据
  if (videoSchema) {
    const videoScript = document.createElement('script')
    videoScript.type = 'application/ld+json'
    videoScript.id = 'video-schema'
    videoScript.text = JSON.stringify(videoSchema)
    document.head.appendChild(videoScript)
  }
}

// 获取视频缩略图
const getVideoThumbnail = (guide) => {
  if (!guide) return null

  // 优先使用侧边栏图片或主图片作为缩略图
  let thumbnail = guide.sidebarData?.sidebarImageUrl || guide.imageUrl

  // 确保路径是绝对路径
  if (thumbnail && thumbnail.startsWith('/')) {
    thumbnail = `${window.location.origin}${import.meta.env.BASE_URL || '/'}${thumbnail.substring(
      1
    )}`
  }

  return thumbnail
}

onMounted(() => {
  // 延迟添加结构化数据，避免阻塞首屏渲染
  setTimeout(() => {
    addStructuredData(currentGuide.value)
  }, 100)
})
watch(currentGuide, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      addStructuredData(newVal)
    }, 100)
  }
})
</script>

<style scoped>
.guide-detail-page {
  /* 页面级布局样式已在 base.css 中定义 */
}

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
  margin-left: 1.5em;
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
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .featured-guides {
    min-height: 150px;
  }
  .featured-guides li {
    height: 50px;
  }
}
</style>