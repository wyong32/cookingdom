<script setup>
// Keep necessary imports, remove unused ones
// import { ref, watch, computed } from 'vue' // ref, watch, computed might be implicitly handled by useGuides
import { useI18n } from 'vue-i18n'
// import { defaultLang } from '@/i18n' // defaultLang likely needed inside useGuides
import { RouterLink } from 'vue-router' // Keep if needed elsewhere, maybe not here directly
// Import the refactored GuidesSection component
import GuidesSection from '@/components/GuidesSection.vue'
// Assuming useGuides composable exists and handles locale-based fetching + route object creation
import { useGuides } from '@/composables/useGuides' // We'll likely need to create/refactor this

const { t, locale } = useI18n()

// Use the composable to get reactive data
// Pass locale ref to composable. It will handle reactivity.
const { guides, isLoading, error } = useGuides(locale)
</script>

<template>
  <div class="guide-view">
    <!-- Added fallback text -->

    <!-- Use the GuidesSection component, passing the reactive data as props -->
    <!-- Note: prop names are kebab-case in template -->
    <GuidesSection :guides="guides" :is-loading="isLoading" :error="error" />
  </div>
</template>

<style scoped>
/* Keep only styles specific to GuideView's container and title */
.guide-view {
  padding: 40px 20px;
  margin: 20px auto;
  max-width: 1200px;
}

h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #5b4b8a;
  font-size: 2.2rem;
}
.guide-view {
  padding: 0;
}
</style> 