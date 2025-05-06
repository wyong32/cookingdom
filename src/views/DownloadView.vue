<script setup>
// No script logic needed for now, just displaying static content
</script>

<template>
  <div class="download-page-view">
    <!-- Reusing the structure and i18n keys from HomeView's download section -->
    <section class="downloads-section">
      <div class="container">
        <div class="section-header">
          <!-- Using nav.download key for the main title of this page -->
          <h1>{{ $t('nav.download') }}</h1>
        </div>
        <h2>{{ $t('home.downloads.description') }}</h2>
        <div class="downloads-grid">
          <div class="download-card">
            <div class="download-icon">📱</div>
            <h3>{{ $t('home.downloads.ios.title') }}</h3>
            <p>{{ $t('home.downloads.ios.description') }}</p>
            <div class="download-meta">
              <span class="file-type">{{ $t('home.downloads.ios.meta.type') }}</span>
              <span class="file-size">{{ $t('home.downloads.ios.meta.size') }}</span>
            </div>
            <!-- Assuming the button should navigate to an external site -->
            <a
              href="https://apps.apple.com/us/app/cookingdom/id6742222069"
              class="btn btn-download"
              rel="noopener noreferrer"
            >
              {{ $t('home.downloads.ios.button') }}
            </a>
          </div>
          <div class="download-card">
            <div class="download-icon">🤖</div>
            <h3>{{ $t('home.downloads.android.title') }}</h3>
            <p>{{ $t('home.downloads.android.description') }}</p>
            <div class="download-meta">
              <span class="file-type">{{ $t('home.downloads.android.meta.type') }}</span>
              <span class="file-size">{{ $t('home.downloads.android.meta.size') }}</span>
            </div>
            <!-- Assuming the button should navigate to an external site -->
            <a
              href="https://play.google.com/store/apps/details?id=com.abi.cook.chill"
              class="btn btn-download"
              rel="noopener noreferrer"
            >
              {{ $t('home.downloads.android.button') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Styles copied and adapted from HomeView */
.download-page-view {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 20px auto;
}

.downloads-section {
  /* Removed background-color if it was specific to home page context */
  padding: 3rem 0;
  text-align: center;
}

.downloads-section .container {
  max-width: 960px; /* Adjusted max-width for download section */
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 1rem;
}

.section-header h1 {
  font-size: 2.2rem;
  color: #5b4b8a; /* Darker purple */
  margin: 0;
}

.section-header h1 .icon {
  margin-right: 0.5rem;
}

.downloads-section > .container > h2 {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.downloads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive columns */
  gap: 2rem;
}

.download-card {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.download-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(160, 142, 230, 0.15);
}

.download-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.download-card h3 {
  font-size: 1.5rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
}

.download-card p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.download-meta {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1.5rem;
}

.download-meta .file-type {
  margin-right: 1rem;
  /* Example: Add background/badge style */
  /* background-color: #eee; padding: 2px 6px; border-radius: 4px; */
}

/* General Button Styles (assuming similar to home page) */
.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none; /* For <a> tags used as buttons */
}

.btn-download {
  background-color: #a08ee6; /* Purple */
  color: white;
}

.btn-download:hover {
  background-color: #8a75c4; /* Darker purple */
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 767px) {
  .section-header h2 {
    font-size: 1.8rem;
  }
  .download-page-view {
    padding: 0;
    margin: 0;
  }

  .downloads-section {
    padding: 0;
    margin: 0;
  }
  .section-header h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .downloads-section > .container > p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .download-card {
    padding: 1.5rem;
  }
  .download-card h3 {
    font-size: 1.3rem;
  }
}
</style> 