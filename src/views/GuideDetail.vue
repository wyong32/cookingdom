<template>
  <div class="guide-detail-page">
    <!-- Optional: Breadcrumbs can go here -->
    <div v-if="guide" class="guide-layout">
      <!-- Main Content Area (Left) -->
      <main class="main-content">
        <!-- Back link -->
        <router-link to="/" class="back-link">{{ $t('guideDetail.backLink') }}</router-link>

        <!-- New H1 using pageTitle -->
        <h1 class="page-main-title">{{ guide.pageTitle }}</h1>
        <!-- New Subtitle -->
        <p class="page-subtitle" v-if="guide.pageSubtitle">{{ guide.pageSubtitle }}</p>

        <!-- Display iframe if iframeUrl exists -->
        <div v-if="guide.iframeUrl" class="iframe-container">
          <iframe
            :src="guide.iframeUrl"
            frameborder="0"
            allowfullscreen
            :title="$t('guideDetail.iframeTitle')"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <!-- Render HTML content using v-html (Now last) -->
        <div v-html="guide.detailsHtml" class="guide-html-content"></div>

        <!-- You could add more sections here, e.g., comments -->
      </main>

      <!-- Sidebar Area (Right) -->
      <aside class="sidebar">
        <!-- Sidebar Image -->
        <div class="sidebar-image-container" v-if="guide.sidebarData?.sidebarImageUrl">
          <img :src="guide.sidebarData.sidebarImageUrl" alt="Level Thumbnail" />
        </div>

        <!-- Level Info Box -->
        <div
          class="level-info-box"
          v-if="guide.sidebarData?.levelInfoHtml"
          v-html="guide.sidebarData.levelInfoHtml"
        ></div>

        <!-- Featured Guides Section -->
        <div
          class="featured-guides"
          v-if="guide.sidebarData?.featuredGuides && guide.sidebarData.featuredGuides.length > 0"
        >
          <h4>{{ $t('guideDetail.featuredLevelsTitle') }}</h4>
          <ul>
            <li v-for="featured in guide.sidebarData.featuredGuides" :key="featured.id">
              <router-link :to="getFeaturedGuideLinkProps(featured)" class="featured-guide-link">
                <img :src="featured.imageUrl" alt="" class="featured-guide-img" />
                <span v-html="featured.title"></span>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Loading / Not Found State -->
    <div v-else-if="isLoading" class="loading-or-not-found">
      <p>Loading guide details...</p>
    </div>
    <div v-else class="loading-or-not-found">
      <p>{{ $t('guideDetail.loadingOrNotFound') }}</p>
      <router-link to="/" class="back-link">{{ $t('guideDetail.backLink') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { defaultLang } from '@/i18n'
import { updateMetaTag } from '@/utils/head'

const route = useRoute()
const guideId = computed(() => route.params.id)
const { t, locale } = useI18n()

const guide = ref(null)
const isLoading = ref(true)
const error = ref(null)

const loadGuide = async (id, lang) => {
  isLoading.value = true
  error.value = null
  guide.value = null

  if (!id) {
    error.value = 'Guide ID is missing.'
    isLoading.value = false
    return
  }

  try {
    let dataModule
    let allGuides = []
    if (lang === 'zh') {
      dataModule = await import('@/datas/guides-zh.js')
      allGuides = dataModule.guidesZh || []
    } else if (lang === 'ru') {
      dataModule = await import('@/datas/guides-ru.js')
      allGuides = dataModule.guidesRu || []
    } else {
      dataModule = await import('@/datas/guides.js')
      allGuides = dataModule.guides || []
    }

    const foundGuide = allGuides.find((g) => g.id === id)

    if (foundGuide) {
      guide.value = foundGuide

      const seoTitle = foundGuide.seo?.title || t('meta.guideDetail.title')
      const seoDescription = foundGuide.seo?.description || t('meta.guideDetail.description')
      const seoKeywords = foundGuide.seo?.keywords || t('meta.defaultKeywords')

      document.title = seoTitle
      updateMetaTag('description', seoDescription)
      updateMetaTag('keywords', seoKeywords)

      updateMetaTag('og:title', seoTitle)
      updateMetaTag('og:description', seoDescription)
      updateMetaTag('twitter:title', seoTitle)
      updateMetaTag('twitter:description', seoDescription)

      let specificImageUrl = foundGuide.imageUrl || foundGuide.sidebarData?.sidebarImageUrl
      if (specificImageUrl) {
        if (specificImageUrl.startsWith('/')) {
          specificImageUrl = `${window.location.origin}${
            import.meta.env.BASE_URL || '/'
          }${specificImageUrl.substring(1)}`
        }
        updateMetaTag('og:image', specificImageUrl)
        updateMetaTag('twitter:image', specificImageUrl)
      } else {
        // Optional: Fallback to default if no specific image found?
        // const defaultSocialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/logo.webp`;
        // updateMetaTag('og:image', defaultSocialImageUrl);
        // updateMetaTag('twitter:image', defaultSocialImageUrl);
      }
    } else {
      error.value = t('guideDetail.loadingOrNotFound')
      document.title = t('meta.notFoundTitle', 'Guide Not Found')
      updateMetaTag('description', '')
      updateMetaTag('keywords', '')
      updateMetaTag('og:title', document.title)
      updateMetaTag('og:description', '')
      // Maybe reset image to default?
      // const defaultSocialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/logo.webp`;
      // updateMetaTag('og:image', defaultSocialImageUrl);
      // updateMetaTag('twitter:image', defaultSocialImageUrl);
    }
  } catch (err) {
    error.value = 'Failed to load guide data.'
    document.title = t('meta.errorTitle', 'Error Loading Guide')
    updateMetaTag('description', '')
    updateMetaTag('keywords', '')
    updateMetaTag('og:title', document.title)
    updateMetaTag('og:description', '')
    // Maybe reset image to default?
    // const defaultSocialImageUrl = `${window.location.origin}${import.meta.env.BASE_URL || '/'}images/logo.webp`;
    // updateMetaTag('og:image', defaultSocialImageUrl);
    // updateMetaTag('twitter:image', defaultSocialImageUrl);
  } finally {
    isLoading.value = false
  }
}

watch(
  guideId,
  (newId, oldId) => {
    const currentLocale = locale.value
    if (newId && newId !== oldId) {
      loadGuide(newId, currentLocale)
    } else if (newId && !oldId) {
      loadGuide(newId, currentLocale)
    }
  },
  { immediate: true }
)

watch(locale, (newLocale) => {
  const currentGuideId = guideId.value
  if (currentGuideId) {
    loadGuide(currentGuideId, newLocale)
  }
})

const getFeaturedGuideLinkProps = (featured) => {
  const currentLocale = locale.value
  const isDefaultLang = currentLocale === defaultLang
  let routeName = isDefaultLang ? 'guide-detail' : 'guide-detail-lang'
  let routeParams

  if (isDefaultLang) {
    routeParams = { id: featured.id }
  } else {
    if (currentLocale && typeof currentLocale === 'string') {
      routeParams = { id: featured.id, lang: currentLocale }
    } else {
      routeName = 'guide-detail'
      routeParams = { id: featured.id }
    }
  }

  const linkProps = {
    name: routeName,
    params: routeParams,
  }

  return linkProps
}

// 动态插入 VideoObject 结构化数据，提升 Google 视频索引能力
const addVideoSchema = (guideObj) => {
  // 只在有 iframeUrl 时插入
  if (!guideObj || !guideObj.iframeUrl) return
  // 处理缩略图为绝对路径
  let thumb = guideObj.sidebarData?.sidebarImageUrl || guideObj.imageUrl
  if (thumb && thumb.startsWith('/')) {
    thumb = `${window.location.origin}${import.meta.env.BASE_URL || '/'}${thumb.substring(1)}`
  }
  if (!thumb) {
    thumb = 'https://www.cookingdom.co/images/banner1.webp' // 请替换为你自己的默认图片
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: guideObj.seo?.title || guideObj.pageTitle,
    description: guideObj.seo?.description || guideObj.pageSubtitle || guideObj.pageTitle,
    thumbnailUrl: thumb,
    embedUrl: guideObj.iframeUrl,
  }
  // 移除旧的
  const old = document.getElementById('video-schema')
  if (old) old.remove()
  // 插入新的
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'video-schema'
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
}

onMounted(() => {
  addVideoSchema(guide.value)
})
watch(guide, (newVal) => {
  addVideoSchema(newVal)
})
</script>

<style scoped>
.guide-detail-page {
  max-width: 1200px; /* Wider max-width for two columns */
  margin: 2rem auto;
  padding: 0 1rem; /* Add padding for overall page */
}

.guide-layout {
  display: flex;
  gap: 2rem; /* Space between main content and sidebar */
}

.main-content {
  flex: 1; /* Takes up remaining space */
  min-width: 0; /* Prevents content overflow */
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.sidebar {
  flex: 0 0 300px; /* Fixed width for sidebar */
  /* Add some styling if needed */
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
  background-color: #f8f9fa; /* Light background for info box */
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
}

.featured-guides li {
  margin-bottom: 0.8rem;
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
}

.featured-guide-link:hover {
  background-color: #eee;
}

.featured-guide-img {
  width: 50px; /* Adjust size as needed */
  height: 50px;
  border-radius: 4px;
  object-fit: cover;
}

.featured-guide-link span {
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Styles for HTML content and iframe remain largely the same */
.guide-html-content {
  line-height: 1.7;
  color: #333;
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
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border: 1px solid #eee;
  border-radius: 4px;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.loading-or-not-found {
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  /* Adjust breakpoint as needed */
  .guide-layout {
    flex-direction: column; /* Stack content and sidebar */
  }
  .sidebar {
    flex: 0 0 auto; /* Reset flex properties */
    width: 100%; /* Sidebar takes full width */
  }
}
</style> 