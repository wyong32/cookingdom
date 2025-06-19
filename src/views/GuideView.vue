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
// 移除 Adsense 组件导入
// import Adsense from '@/components/Adsense.vue'

const { t, locale } = useI18n()

// Use the composable to get reactive data
// Pass locale ref to composable. It will handle reactivity.
const { guides, isLoading, error } = useGuides(locale)
</script>

<template>
  <div class="guide-view-main-with-ads">
    <aside class="ads-left">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4224010041977181"
        data-ad-slot="7552815638"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </aside>
    <main>
      <div class="guide-view">
        <!-- Added fallback text -->
        <h1>{{ $t('guides.title') }}</h1>
        <h2>{{ $t('guides.title1') }}</h2>

        <!-- Use the GuidesSection component, passing the reactive data as props -->
        <!-- Note: prop names are kebab-case in template -->
        <GuidesSection :guides="guides" :is-loading="isLoading" :error="error" />
      </div>
    </main>
    <aside class="ads-right">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-4224010041977181"
        data-ad-slot="1956039879"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </aside>
  </div>
</template>

<style scoped>
/* Keep only styles specific to GuideView's container and title */
.guide-view {
  padding: 40px 0;
  margin: 20px auto;
  max-width: 1200px;
}

h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #5b4b8a;
  font-size: 2.2rem;
}

/* Added style for h2 in guide-view */
.guide-view h1 {
  text-align: center;
  font-size: 2rem;
  color: #ff85a2; /* Pink color, consistent with HomeView */
  margin-bottom: 1.5rem;
}
.guide-view h2 {
  text-align: center;
  font-size: 1.5rem;
  color: #5b4b8a;
}
</style> 