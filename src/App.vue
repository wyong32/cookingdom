<script setup>
// Import necessary components
import { RouterView } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import AppHeader from '@/components/Header.vue' // Header 保持同步加载，因为是首屏关键内容

// Footer 懒加载，因为不是首屏关键内容
const AppFooter = defineAsyncComponent({
  loader: () => import('@/components/Footer.vue'),
  delay: 200,
  timeout: 5000,
})
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="main-content-area">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure wrapper takes full viewport height */
}

.main-content-area {
  flex: 1; /* Allow main content to grow and push footer down */
  /* Add padding or other styles if needed */
  padding-top: 60px; /* Example: Adjust based on your header's height */
}

@media (max-width: 767px) {
  .main-content-area {
    padding-top: 20px; /* Example: Adjust based on your header's height */
  }
}

/* Add other global styles if necessary */
</style>
