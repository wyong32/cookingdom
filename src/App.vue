<script setup>
// Import necessary components
import { RouterView } from 'vue-router'
import AppHeader from '@/components/Header.vue' // Assuming Header.vue is the correct component
import AppFooter from '@/components/Footer.vue' // Assuming Footer.vue is the correct component
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

/* Add other global styles if necessary */
</style>
