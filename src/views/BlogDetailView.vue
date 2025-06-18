<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useBlogPosts } from '@/composables/useBlogPosts'
import Adsense from '@/components/Adsense.vue'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const { blogPosts, isLoading: isLoadingList, error: listError } = useBlogPosts()

const postId = computed(() => route.params.id)

const currentPost = computed(() => {
  if (
    !postId.value ||
    isLoadingList.value ||
    listError.value ||
    !blogPosts.value ||
    blogPosts.value.length === 0
  ) {
    return null
  }
  return blogPosts.value.find((p) => p.id === postId.value)
})

const updateMetaTag = (name, content) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute('name', name)
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', content || '')
}

watch(
  currentPost,
  (newPost, oldPost) => {
    if (isLoadingList.value) return

    if (newPost) {
      document.title = newPost.seo?.title || t('meta.blogDetail.title', 'Blog Post')
      updateMetaTag('description', newPost.seo?.description)
      updateMetaTag('keywords', newPost.seo?.keywords)
    } else if (!isLoadingList.value && postId.value && !listError.value) {
      document.title = t('meta.notFoundTitle', 'Post Not Found')
      updateMetaTag(
        'description',
        t('meta.notFoundDescription', 'The blog post you are looking for could not be found.')
      )
      updateMetaTag('keywords', '')
    }
  },
  { immediate: true, deep: true }
)

watch(listError, (newError) => {
  if (newError) {
    document.title = t('meta.errorTitle', 'Error Loading Post')
    updateMetaTag('description', 'There was an error loading the blog content.')
    updateMetaTag('keywords', '')
  }
})
</script>

<template>
  <div class="blog-detail-main-with-ads">
    <aside class="ads-left">
      <Adsense
        adClient="ca-pub-4224010041977181"
        adSlot="7552815638"
        adFormat="auto"
        :fullWidthResponsive="true"
      />
    </aside>
    <main>
      <div class="blog-detail-view">
        <div v-if="isLoadingList && !currentPost" class="loading-message">
          <p>Loading post...</p>
        </div>

        <div v-else-if="listError" class="error-message">
          <p>
            {{ listError.message || 'Error loading blog posts.' }}
            <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink>
          </p>
        </div>

        <div v-else-if="!isLoadingList && !currentPost && postId" class="error-message">
          <p>
            {{ t('blog.postNotFound', 'Post not found.') }}
            <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink>
          </p>
        </div>

        <article v-else-if="currentPost" class="blog-post-content">
          <h1>{{ currentPost.detailTitle }}</h1>
          <p class="subtitle">{{ currentPost.detailSubtitle }}</p>
          <hr />
          <div v-html="currentPost.detailContentHtml" class="post-body"></div>
          <div class="back-link-container">
            <RouterLink :to="{ name: 'blog' }" class="back-link">
              ← {{ t('guideDetail.backLink', 'Back to Blog') }}
            </RouterLink>
          </div>
        </article>

        <div v-else-if="!postId" class="error-message">
          <p>
            {{ t('blog.invalidPostId', 'No post ID specified.') }}
            <RouterLink :to="{ name: 'blog' }">Back to Blog</RouterLink>
          </p>
        </div>
      </div>
    </main>
    <aside class="ads-right">
      <Adsense
        adClient="ca-pub-4224010041977181"
        adSlot="1956039879"
        adFormat="auto"
        :fullWidthResponsive="true"
      />
    </aside>
  </div>
</template>

<style scoped>
.blog-detail-main-with-ads {
  display: flex;
  flex-direction: row;
  padding: 40px 20px;
  max-width: 900px; /* Content width */
  margin: 20px auto;
  background-color: #fff; /* Optional: white background for content area */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  contain: layout style paint; /* 防止布局偏移 */
  min-height: 800px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

.ads-left,
.ads-right {
  flex: 0 0 200px; /* Adjust as needed */
  padding: 10px;
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

.blog-post-content {
  contain: layout style paint; /* 防止布局偏移 */
  min-height: 600px; /* 设置最小高度，防止内容加载时的布局偏移 */
}

.blog-post-content h1 {
  font-size: 2.5rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  height: auto; /* 确保高度自适应 */
  min-height: 3.5rem; /* 设置最小高度，防止布局偏移 */
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
  contain: layout style; /* 防止布局偏移 */
  min-height: 400px; /* 设置最小高度，防止内容加载时的布局偏移 */
  content-visibility: auto; /* 优化渲染性能 */
  contain-intrinsic-size: 1000px; /* 提供估计高度，防止布局偏移 */
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
  .blog-detail-main-with-ads {
    flex-direction: column;
    padding: 1rem;
    margin: 0;
    min-height: 600px; /* 移动端减少最小高度 */
  }
  .ads-left,
  .ads-right {
    flex: 0 0 100%;
  }
  .blog-post-content {
    min-height: 400px; /* 移动端减少最小高度 */
  }
  .blog-post-content h1 {
    font-size: 1.5rem;
    min-height: 2.5rem; /* 移动端减少最小高度 */
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .post-body {
    font-size: 1rem;
    line-height: 1.7;
    min-height: 300px; /* 移动端减少最小高度 */
  }
}
</style>