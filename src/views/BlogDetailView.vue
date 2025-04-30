<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const post = ref(null)
const isLoading = ref(true)
const error = ref(null)

const postId = computed(() => route.params.id)

// 函数：加载并查找特定博客文章
const loadPost = async (id, lang) => {
  isLoading.value = true
  error.value = null
  post.value = null
  try {
    let dataModule
    if (lang === 'zh') {
      dataModule = await import('@/datas/blog-posts-zh.js')
    } else if (lang === 'ru') {
      dataModule = await import('@/datas/blog-posts-ru.js')
    } else {
      dataModule = await import('@/datas/blog-posts.js') // 默认 en
    }
    // 从 JS 模块的具名导出 blogPosts 获取数据
    const allPosts = dataModule.blogPosts
    const foundPost = allPosts.find((p) => p.id === id)
    if (foundPost) {
      post.value = foundPost
      // Optional: Update document title for SEO
      if (foundPost.seo?.title) {
        document.title = foundPost.seo.title
      }
    } else {
      error.value = 'Post not found.'
      // 可选：找不到帖子时重定向到博客列表或404页面
      // router.push({ name: 'blog' })
    }
  } catch (err) {
    console.error(`Failed to load post ${id} for locale ${lang}:`, err)
    error.value = 'Failed to load post data.'
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