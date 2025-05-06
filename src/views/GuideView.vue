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

// Initial load and locale watching are assumed to be handled within useGuides

// Remove all the state and computed properties that are now handled by GuidesSection
// const allLevels = ref([])
// const isLoading = ref(true)
// const activeTab = ref('levels1_10')
// const tabs = computed(...)
// const filteredLevels = computed(...)

// Remove functions now handled elsewhere or unnecessary
// const loadLevels = async (lang) => { ... }
// const changeTab = (tabKey) => { ... }
// const getGuideLinkProps = (level) => { ... }
</script>

<template>
  <div class="guide-view">
    <!-- Added fallback text -->

    <!-- Use the GuidesSection component, passing the reactive data as props -->
    <!-- Note: prop names are kebab-case in template -->
    <GuidesSection :guides="guides" :is-loading="isLoading" :error="error" />

    <!-- Remove the old tabs and list rendering -->
    <!-- <div class="tabs"> ... </div> -->
    <!-- <div class="guide-list" v-if="!isLoading"> ... </div> -->
    <!-- <div v-else> Loading... </div> -->
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

/* Remove styles for .tabs, .guide-list, .guide-item-link etc. */
/* They are now handled within GuidesSection */
/*
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.tabs button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #a08ee6;
  background-color: #ffffff;
  color: #a08ee6;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tabs button:hover {
  background-color: #f0eaff;
  transform: translateY(-2px);
}

.tabs button.active {
  background-color: #a08ee6;
  color: #ffffff;
  border-color: #a08ee6;
  box-shadow: 0 4px 10px rgba(160, 142, 230, 0.4);
}

.guide-list ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.5rem;
}

.guide-list li {
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  border: none;
}

.guide-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(160, 142, 230, 0.2);
}

.guide-item-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.guide-image-placeholder {
  width: 100%;
  height: 150px; 
  object-fit: cover; 
  display: block;
}

.guide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.guide-content {
  padding: 1rem;
}

.guide-content h2 {
  margin: 0;
  font-size: 1rem;
  color: #5b4b8a;
  line-height: 1.4;
}


@media (max-width: 1024px) {
  h1 {
    font-size: 2rem;
  }
  .tabs button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  .guide-list ul {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
  .guide-content h2 {
    font-size: 0.9rem;
  }
}


@media (max-width: 767px) {
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .tabs {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .tabs button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  .guide-list ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }
  .guide-image-placeholder {
    height: 120px; 
  }
  .guide-content {
    padding: 0.6rem;
  }
  .guide-content h2 {
    font-size: 0.85rem;
  }
}
*/
</style> 