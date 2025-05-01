<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const post = ref(null)
const isLoading = ref(true)
const error = ref(null)

const postId = computed(() => route.params.id)

// Helper function to update meta tags (similar to GuideDetail)
const updateMetaTag = (name, content) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute('name', name)
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', content)
}

// 函数：加载并查找特定博客文章
const loadPost = async (id, lang) => {
  isLoading.value = true
  error.value = null
  post.value = null
  try {
    let dataModule
    let allPosts = []
    if (lang === 'zh') {
      dataModule = await import('@/datas/blog-posts-zh.js')
      allPosts = dataModule.blogPostsZh || []
    } else if (lang === 'ru') {
      dataModule = await import('@/datas/blog-posts-ru.js')
      allPosts = dataModule.blogPostsRu || []
    } else {
      dataModule = await import('@/datas/blog-posts.js')
      allPosts = dataModule.blogPosts || []
    }

    const foundPost = allPosts.find((p) => p.id === id)
    if (foundPost) {
      post.value = foundPost
      // Update TDK based on post data
      document.title = foundPost.seo?.title || t('meta.blogDetail.title') // Use placeholder from meta if specific not found
      updateMetaTag('description', foundPost.seo?.description || t('meta.blogDetail.description'))
      updateMetaTag('keywords', foundPost.seo?.keywords || t('meta.defaultKeywords')) // Use general default keywords
    } else {
      error.value = 'Post not found.'
      // Set Not Found TDK
      document.title = t('meta.notFoundTitle', 'Post Not Found') // Add a specific not found title key if desired
      updateMetaTag('description', '')
      updateMetaTag('keywords', '')
      // Optional: Redirect
      // router.push({ name: 'blog' })
    }
  } catch (err) {
    console.error(`Failed to load post ${id} for locale ${lang}:`, err)
    error.value = 'Failed to load post data.'
    // Set Error TDK (could be same as Not Found or specific)
    document.title = t('meta.errorTitle', 'Error Loading Post') // Add error title key
    updateMetaTag('description', '')
    updateMetaTag('keywords', '')
  } finally {
    isLoading.value = false
  }
}

// 监听路由参数变化 (如果用户在详情页之间导航)
watch(postId, (newId) => {
  if (newId) {
    loadPost(newId, locale.value)
  }
})

// 监听语言变化
watch(locale, (newLocale) => {
  if (postId.value) {
    loadPost(postId.value, newLocale)
  }
})

// 组件挂载时加载数据
onMounted(() => {
  if (postId.value) {
    loadPost(postId.value, locale.value)
  }
})
</script>

<template>
  <div class="blog-detail-view">
    <div v-if="isLoading" class="loading-message">
      <p>Loading post...</p>
    </div>

    <div v-else-if="error" class="error-message">
      <p>{{ error }} <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink></p>
    </div>

    <article v-else-if="post" class="blog-post-content">
      <h1>{{ post.detailTitle }}</h1>
      <p class="subtitle">{{ post.detailSubtitle }}</p>
      <hr />
      <!-- Render HTML content safely -->
      <div v-html="post.detailContentHtml" class="post-body"></div>
      <div class="back-link-container">
        <RouterLink :to="{ name: 'blog' }" class="back-link"
          >← {{ t('guideDetail.backLink', 'Back to Blog') }}</RouterLink
        >
      </div>
    </article>
  </div>
</template>

<style scoped>
.blog-detail-view {
  padding: 40px 20px;
  max-width: 900px; /* Content width */
  margin: 20px auto;
  background-color: #fff; /* Optional: white background for content area */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.loading-message,
.error-message {
  text-align: center;
  color: #888;
  font-size: 1.2em;
  padding: 40px 0;
}

.error-message a {
  color: #a08ee6;
  text-decoration: underline;
}

.blog-post-content h1 {
  font-size: 2.5rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.subtitle {
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 2rem;
  line-height: 1.5;
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 2rem 0;
}

.post-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

/* Target elements within v-html */
.post-body :deep(h2) {
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #5b4b8a;
}

.post-body :deep(p) {
  margin-bottom: 1.5rem;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.post-body :deep(li) {
  margin-bottom: 0.5rem;
}

.post-body :deep(a) {
  color: #a08ee6;
  text-decoration: underline;
}

.post-body :deep(strong) {
  font-weight: bold;
  color: #5b4b8a; /* Optional: make strong text stand out more */
}

.back-link-container {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  text-align: center;
}

.back-link {
  color: #a08ee6;
  text-decoration: none;
  font-weight: 500;
}
.back-link:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .blog-post-content h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .post-body {
    font-size: 1rem;
    line-height: 1.7;
  }
}
</style> 