<script setup>
import { ref, onMounted, defineAsyncComponent, shallowRef } from 'vue' // Import necessary Vue functions

// 使用异步组件加载 GuidesSection
const GuidesSection = defineAsyncComponent({
  loader: () => import('@/components/GuidesSection.vue'),
  delay: 200,
  timeout: 5000,
  // 加载时显示的组件
  loadingComponent: {
    template: '<div class="async-loading">加载指南内容中...</div>',
  },
  // 出错时显示的组件
  errorComponent: {
    template: '<div class="async-error">加载失败，请刷新页面重试</div>',
  },
})

// Import useGuides to fetch guide data
import { useGuides } from '@/composables/useGuides'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { defaultLang } from '@/i18n'

// 使用 shallowRef 存储动态导入的组件
const Swiper = shallowRef(null)
const SwiperSlide = shallowRef(null)
const swiperModulesComponents = shallowRef(null)
const swiperLoaded = ref(false)

// Use i18n locale for useGuides
const { locale } = useI18n()

// 直接使用 useGuides，但通过显示控制实现懒加载效果
const { guides, isLoading: guidesLoading, error: guidesError } = useGuides(locale)

// 最新关卡数据 (最后5个关卡)
const latestLevels = ref([
  {
    id: 'cookingdom-game-level-51',
    title: 'Cookingdom Level 51 American Breakfast Walkthrough',
  },
  {
    id: 'cookingdom-game-level-52',
    title: 'Cookingdom Level 52 Beans Sweet Soup Walkthrough',
  },
  {
    id: 'cookingdom-game-level-53',
    title: 'Cookingdom Level 53 City IceCream Cone Walkthrough',
  },
  {
    id: 'cookingdom-game-level-54',
    title: 'Cookingdom Level 54 Arroz Cardo Walkthrough',
  },
  {
    id: 'cookingdom-game-level-55',
    title: 'Cookingdom Level 55 Jamaican Pineapple Jerk Chicken Walkthrough',
  },
])

// 辅助函数生成路由对象，处理语言前缀和额外参数
function getLocalizedRoute(name, params = {}) {
  const currentLocale = locale.value
  if (currentLocale === defaultLang) {
    return { name: name, params: params }
  } else {
    return { name: `${name}-lang`, params: { ...params, lang: currentLocale } }
  }
}

// 控制指南部分是否显示
const showGuides = ref(false)

// 广告容器引用
const ad1Container = ref(null)

// 简化的加载函数
const loadGuides = () => {
  console.log('显示指南部分')
  showGuides.value = true
}

// Ref to track the active tab (currently unused, reserved for future filtering)
// const activeTab = ref('1-10') // Default to '1-10'

// Function to change the active tab (currently unused, reserved for future filtering)
// const setActiveTab = (tabName) => {
//   activeTab.value = tabName
//   // Later: Add logic here to filter guides based on the tab
// }

// Function to scroll to a specific section smoothly
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Calculate offset based on fixed header height if necessary
    // const headerOffset = 70; // Example offset, adjust based on your header's actual height
    // const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    // window.scrollTo({
    //   top: offsetPosition,
    //   behavior: "smooth"
    // });

    // Simpler approach: scrollIntoView (might be slightly covered by fixed header initially)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' }) // scrolls to the top of the element
  }
}

// Placeholder images for the slider
const sliderImages = ref([
  '/images/banner1.webp',
  '/images/banner2.webp',
  '/images/banner3.webp',
  '/images/banner4.webp',
  '/images/banner5.webp',
  '/images/banner6.webp',
  '/images/banner7.webp',
  '/images/banner8.webp',
  '/images/banner9.webp',
  '/images/banner10.webp',
])

// 检测是否为移动设备
const isMobile = ref(false)

// 检查设备类型
const checkDeviceType = () => {
  // 使用媒体查询检测移动设备
  isMobile.value = window.matchMedia('(max-width: 767px)').matches
  console.log('设备检测:', isMobile.value ? '移动设备' : '桌面设备')

  // 如果不是移动设备，则加载 Swiper
  if (!isMobile.value && !swiperLoaded.value) {
    loadSwiperComponents()
  }
}

// 动态加载 Swiper 组件
const loadSwiperComponents = async () => {
  try {
    // 动态导入 Swiper 组件
    const swiperModule = await import('swiper/vue')
    Swiper.value = swiperModule.Swiper
    SwiperSlide.value = swiperModule.SwiperSlide

    // 动态导入 Swiper 模块
    const modulesModule = await import('swiper/modules')
    swiperModulesComponents.value = [modulesModule.Autoplay, modulesModule.EffectCoverflow]

    // 动态导入 CSS
    await import('swiper/css')
    await import('swiper/css/autoplay')
    await import('swiper/css/effect-coverflow')

    swiperLoaded.value = true
    console.log('Swiper 组件加载完成')
  } catch (error) {
    console.error('加载 Swiper 组件失败:', error)
  }
}

// 广告脚本加载状态
let adScriptLoaded = false

// 加载广告脚本（只加载一次）
const loadAdScript = () => {
  return new Promise((resolve) => {
    if (adScriptLoaded) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.type = 'application/javascript'
    script.src = 'https://a.magsrv.com/ad-provider.js'
    document.head.appendChild(script)

    script.onload = () => {
      adScriptLoaded = true
      console.log('广告脚本已加载')
      resolve()
    }
  })
}

// 广告1加载函数
const loadAd1 = () => {
  setTimeout(() => {
    loadAdScript().then(() => {
      const ins = document.createElement('ins')
      ins.className = 'eas6a97888e2'
      ins.setAttribute('data-zoneid', '5632176')
      ad1Container.value.appendChild(ins)
      ;(AdProvider = window.AdProvider || []).push({ serve: {} })
      console.log('广告1已加载')
    })
  }, 1000)
}

// 广告2加载函数
const loadAd2 = () => {
  setTimeout(() => {
    loadAdScript().then(() => {
      const ins = document.createElement('ins')
      ins.className = 'eas6a97888e17'
      ins.setAttribute('data-zoneid', '5632182')

      // 直接添加到body，简单展示
      document.body.appendChild(ins)
      ;(AdProvider = window.AdProvider || []).push({ serve: {} })
      console.log('广告2已加载')
    })
  }, 1000)
}

// 广告2加载函数
const loadAd3 = () => {
  setTimeout(() => {
    loadAdScript().then(() => {
      const ins = document.createElement('ins')
      ins.className = 'eas6a97888e17'
      ins.setAttribute('data-zoneid', '5632204')
      document.body.appendChild(ins)
      ;(AdProvider = window.AdProvider || []).push({ serve: {} })
      console.log('广告3已加载')
    })
  }, 1000)
}

// 组件挂载时检测设备类型并加载数据
onMounted(() => {
  // 检测设备类型
  checkDeviceType()

  // 监听窗口大小变化，重新检测设备类型
  window.addEventListener('resize', checkDeviceType)

  // 加载广告
  loadAd1()
  loadAd2()
  loadAd3()

  // 使用 Intersection Observer 检测元素是否进入视口，实现懒加载
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 当指南部分进入视口时加载数据
        if (entry.isIntersecting) {
          loadGuides()
          // 加载后取消观察
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  ) // 当10%的元素可见时触发

  // 开始观察指南部分
  setTimeout(() => {
    const guidesSection = document.getElementById('guides-section')
    if (guidesSection) {
      observer.observe(guidesSection)
    }
  }, 1000) // 延迟1秒，确保DOM已渲染

  // 组件卸载时清理
  return () => {
    window.removeEventListener('resize', checkDeviceType)
    observer.disconnect()
  }
})
</script>

<template>
  <div class="home-view">
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1>{{ $t('home.hero.title') }}</h1>
            <p>{{ $t('home.hero.description') }}</p>

            <!-- Latest Levels Section -->
            <div class="latest-levels">
              <h3>{{ $t('home.hero.latestLevels.title') }}</h3>
              <ul class="latest-levels-list">
                <li v-for="level in latestLevels" :key="level.id">
                  <RouterLink
                    :to="getLocalizedRoute('guide-detail', { id: level.id })"
                    class="level-link"
                  >
                    {{ level.title }}
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div class="hero-buttons">
              <button class="btn btn-primary" @click="scrollToSection('guides-section')">
                {{ $t('home.hero.button.viewGuides') }}
              </button>
            </div>
          </div>
          <!-- 移动端显示单张图片 -->
          <div v-if="isMobile" class="hero-single-image-container">
            <img
              :src="sliderImages[0]"
              alt="Banner Image"
              class="hero-single-image"
              width="350"
              height="280"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          <!-- 桌面端轮播图 - 仅在组件加载完成后显示 -->
          <div v-else-if="!isMobile && swiperLoaded" class="hero-swiper-container card-slider">
            <component
              :is="Swiper"
              :modules="swiperModulesComponents"
              :effect="'coverflow'"
              :grab-cursor="true"
              :centered-slides="true"
              :slides-per-view="'auto'"
              :loop="true"
              :coverflow-effect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
              }"
              class="hero-swiper"
            >
              <component
                :is="SwiperSlide"
                v-for="(image, index) in sliderImages"
                :key="index"
                class="hero-swiper-slide"
              >
                <img
                  :src="image"
                  :alt="`Cookingdom Game Screenshot ${index + 1}`"
                  class="slider-image"
                  width="300"
                  height="400"
                  loading="lazy"
                />
              </component>
            </component>
          </div>

          <!-- 桌面端加载中状态 -->
          <div v-else-if="!isMobile && !swiperLoaded" class="hero-loading-container">
            <img
              :src="sliderImages[0]"
              alt="Banner Image"
              class="hero-single-image"
              width="350"
              height="280"
              loading="eager"
              fetchpriority="high"
            />
            <div class="loading-indicator">loading...</div>
          </div>
        </div>
      </section>

      <!-- 广告1 -->
      <div class="ad-container">
        <div ref="ad1Container"></div>
      </div>

      <!-- Features Section -->
      <section class="features-section" id="features-section">
        <div class="container">
          <h2>{{ $t('home.features.title') }}</h2>
          <p>{{ $t('home.features.description') }}</p>
          <div class="features-grid">
            <div class="feature-card">
              <div class="icon">🍳</div>
              <h3>{{ $t('home.features.card1.title') }}</h3>
              <p>{{ $t('home.features.card1.description') }}</p>
            </div>
            <div class="feature-card">
              <div class="icon">🎮</div>
              <h3>{{ $t('home.features.card2.title') }}</h3>
              <p>{{ $t('home.features.card2.description') }}</p>
            </div>
            <div class="feature-card">
              <div class="icon">✨</div>
              <h3>{{ $t('home.features.card3.title') }}</h3>
              <p>{{ $t('home.features.card3.description') }}</p>
            </div>
            <div class="feature-card">
              <div class="icon">😊</div>
              <h3>{{ $t('home.features.card4.title') }}</h3>
              <p>{{ $t('home.features.card4.description') }}</p>
            </div>
            <div class="feature-card">
              <div class="icon">📱</div>
              <h3>{{ $t('home.features.card5.title') }}</h3>
              <p>{{ $t('home.features.card5.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Guides Section (使用异步组件和懒加载数据) -->
      <div id="guides-section">
        <h2>{{ $t('guides.title') }}</h2>

        <!-- 未显示状态 - 显示占位内容 -->
        <div v-if="!showGuides" class="guides-placeholder">
          <div class="placeholder-item" v-for="i in 6" :key="i"></div>
        </div>

        <!-- 显示状态 - 根据加载状态显示不同内容 -->
        <template v-else>
          <!-- 加载状态 -->
          <div v-if="guidesLoading" class="guides-loading">
            <div class="loading-spinner"></div>
            <p>Loading guide content...</p>
          </div>

          <!-- 错误状态 -->
          <div v-else-if="guidesError" class="guides-error">
            <p>Loading failed, please refresh the page and try again</p>
            <button @click="loadGuides" class="btn btn-retry">Retry</button>
          </div>

          <!-- 内容已加载 -->
          <GuidesSection
            v-else-if="guides && guides.length > 0"
            :guides="guides"
            :is-loading="guidesLoading"
            :error="guidesError"
          />

          <!-- 无数据状态 -->
          <div v-else class="guides-empty">
            <p>No guide content</p>
          </div>
        </template>
      </div>

      <!-- Downloads Section -->
      <section class="downloads-section" id="downloads-section">
        <div class="container">
          <div class="section-header">
            <h2>{{ $t('home.downloads.title') }}</h2>
          </div>
          <p>{{ $t('home.downloads.description') }}</p>
          <div class="downloads-grid">
            <div class="download-card">
              <div class="download-icon">📱</div>
              <h3>{{ $t('home.downloads.ios.title') }}</h3>
              <p>{{ $t('home.downloads.ios.description') }}</p>
              <div class="download-meta">
                <span class="file-type">{{ $t('home.downloads.ios.meta.type') }}</span>
                <span class="file-size">{{ $t('home.downloads.ios.meta.size') }}</span>
              </div>
              <a
                class="btn btn-download"
                href="https://apps.apple.com/us/app/cookingdom/id6742222069"
                target="_blank"
                >{{ $t('home.downloads.ios.button') }}</a
              >
            </div>
            <div class="download-card">
              <div class="download-icon">🤖</div>
              <h3>{{ $t('home.downloads.android.title') }}</h3>
              <p>{{ $t('home.downloads.android.description') }}</p>
              <div class="download-meta">
                <span class="file-type">{{ $t('home.downloads.android.meta.type') }}</span>
                <span class="file-size">{{ $t('home.downloads.android.meta.size') }}</span>
              </div>
              <a
                class="btn btn-download"
                href="https://play.google.com/store/apps/details?id=com.abi.cook.chill"
                target="_blank"
                >{{ $t('home.downloads.android.button') }}</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- About Game Section (Modified from About Us) -->
      <section class="about-section">
        <div class="container">
          <div class="about-content">
            <div class="text-wrapper">
              <h2>{{ $t('home.about.title') }}</h2>
              <p>{{ $t('home.about.description1') }}</p>
              <p>{{ $t('home.about.description2') }}</p>
              <p>{{ $t('home.about.description3') }}</p>
            </div>

            <div class="game-stats">
              <h3>{{ $t('home.stats.title') }}</h3>
              <div class="stats-grid">
                <div class="stat-card">
                  <strong>1M+</strong>
                  <span>{{ $t('home.stats.downloads') }}</span>
                </div>
                <div class="stat-card">
                  <strong>150+</strong>
                  <span>{{ $t('home.stats.countries') }}</span>
                </div>
                <div class="stat-card">
                  <strong>50+</strong>
                  <span>{{ $t('home.stats.recipes') }}</span>
                </div>
                <div class="stat-card">
                  <strong>4.8/5</strong>
                  <span>{{ $t('home.stats.rating') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Play Section (NEW) -->
      <section class="how-to-play-section">
        <div class="container">
          <h2>{{ $t('home.howToPlay.title') }}</h2>
          <div class="play-steps-list">
            <div class="play-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>{{ $t('home.howToPlay.step1.title') }}</h3>
                <p>{{ $t('home.howToPlay.step1.description') }}</p>
              </div>
            </div>
            <div class="play-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>{{ $t('home.howToPlay.step2.title') }}</h3>
                <p>{{ $t('home.howToPlay.step2.description') }}</p>
              </div>
            </div>
            <div class="play-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>{{ $t('home.howToPlay.step3.title') }}</h3>
                <p>{{ $t('home.howToPlay.step3.description') }}</p>
              </div>
            </div>
            <div class="play-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>{{ $t('home.howToPlay.step4.title') }}</h3>
                <p>{{ $t('home.howToPlay.step4.description') }}</p>
              </div>
            </div>
            <div class="play-step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h3>{{ $t('home.howToPlay.step5.title') }}</h3>
                <p>{{ $t('home.howToPlay.step5.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tips & Tricks Section (NEW) -->
      <section class="tips-tricks-section">
        <div class="container">
          <h2>{{ $t('home.tips.title') }}</h2>
          <p>{{ $t('home.tips.description') }}</p>
          <ul class="tips-list">
            <li>
              <strong>{{ $t('home.tips.tip1_title') }}</strong> {{ $t('home.tips.tip1_text') }}
            </li>
            <li>
              <strong>{{ $t('home.tips.tip2_title') }}</strong> {{ $t('home.tips.tip2_text') }}
            </li>
            <li>
              <strong>{{ $t('home.tips.tip3_title') }}</strong> {{ $t('home.tips.tip3_text') }}
            </li>
            <li>
              <strong>{{ $t('home.tips.tip4_title') }}</strong> {{ $t('home.tips.tip4_text') }}
            </li>
            <li>
              <strong>{{ $t('home.tips.tip5_title') }}</strong> {{ $t('home.tips.tip5_text') }}
            </li>
          </ul>
        </div>
      </section>

      <!-- FAQ Section (NEW) -->
      <section class="faq-section">
        <div class="container">
          <h2>{{ $t('home.faq.title') }}</h2>
          <div class="faq-grid">
            <details class="faq-item">
              <summary>{{ $t('home.faq.q1.question') }}</summary>
              <p>{{ $t('home.faq.q1.answer') }}</p>
            </details>
            <details class="faq-item">
              <summary>{{ $t('home.faq.q2.question') }}</summary>
              <p>{{ $t('home.faq.q2.answer') }}</p>
            </details>
            <details class="faq-item">
              <summary>{{ $t('home.faq.q3.question') }}</summary>
              <p>{{ $t('home.faq.q3.answer') }}</p>
            </details>
            <details class="faq-item">
              <summary>{{ $t('home.faq.q4.question') }}</summary>
              <p>{{ $t('home.faq.q4.answer') }}</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Add scroll margin to sections targeted by hero buttons */
#features-section,
#guides-section,
#downloads-section {
  scroll-margin-top: 80px; /* Adjust based on actual fixed header height + desired gap */
}

/* Add padding-top to main to offset fixed header */
main {
  padding-top: 70px; /* Default padding for larger screens */
}

/* Hero Section Styles */
.hero-section {
  background-color: #fff0f5; /* Original light lavender blush */
  padding: 0 0 3rem; /* Keep adjusted padding */
  /* text-align removed as content is left-aligned */
}

.hero-section .container {
  max-width: 1200px; /* Use the standard container width */
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.hero-content {
  flex: 1; /* Takes available space */
  text-align: left; /* Ensure text is left-aligned */
}

/* Restore Hero Content Styles */
.hero-content h1 {
  font-size: 3rem; /* Original size */
  font-weight: 700;
  color: #ff85a2; /* Original Kawaii pink */
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.1rem;
  color: #7c6f9f; /* Original Darker purple */
  margin-bottom: 2rem;
  max-width: 500px; /* Optional: Limit paragraph width if needed */
}

/* Latest Levels Styles */
.latest-levels {
  margin-bottom: 2rem;
}

.latest-levels h3 {
  font-size: 1.3rem;
  color: #ff85a2; /* Kawaii pink */
  margin-bottom: 1rem;
  font-weight: 600;
}

.latest-levels-list {
  padding: 0 0 0 20px;
  margin: 0;
}

.level-link {
  display: inline-block;
  color: #5b4b8a; /* Dark purple */
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.4;
}

.level-link:hover {
  text-decoration: underline;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Keep Button Styles */
.btn {
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background-color: #ff85a2;
  color: white;
}
.btn-primary:hover {
  background-color: #ff6b8f;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(255, 133, 162, 0.4);
}

.btn-secondary {
  background-color: #f0eaff;
  color: #a08ee6;
  border: 2px solid #a08ee6;
}
.btn-secondary:hover {
  background-color: #e8dff5;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(160, 142, 230, 0.2);
}

.btn-tertiary {
  background-color: #ffdd57;
  color: #8c6d3f;
  border: 2px solid #ffdd57;
}
.btn-tertiary:hover {
  background-color: #ffcc33;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(255, 221, 87, 0.4);
}

/* 移动端单张图片样式 */
.hero-single-image-container {
  margin: 1rem auto;
  width: 100%;
  max-width: 350px;
  min-height: 280px; /* 设置最小高度，防止布局偏移 */
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* 优化图片容器的渲染性能 */
  contain: layout style paint;
  will-change: transform;
  /* 防止布局偏移 */
  aspect-ratio: 350 / 280;
}

.hero-single-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  /* 优化图片渲染性能 */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  transform: translateZ(0); /* 启用硬件加速 */
}

/* 加载中状态样式 */
.hero-loading-container {
  position: relative;
  margin: 1rem auto;
  width: 100%;
  max-width: 350px;
  min-height: 280px; /* 设置最小高度，防止布局偏移 */
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* 防止布局偏移 */
  aspect-ratio: 350 / 280;
}

.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #a08ee6;
  font-weight: bold;
}

/* 桌面端轮播图样式 */
.hero-swiper-container.card-slider {
  flex: 0 0 auto;
  width: 550px;
  height: 420px;
  position: relative;
  /* overflow: visible; */ /* Coverflow might handle overflow differently, let's test without it first */
}

.hero-swiper {
  width: 100%;
  height: 100%;
  padding-top: 10px; /* Add some padding if slides seem cut off at top */
  padding-bottom: 10px; /* Reduced bottom padding as pagination is removed */
}

/* Style individual slides */
.hero-swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px; /* Keep slide width */
  height: 400px; /* Keep slide height */
  border-radius: 15px;
  overflow: hidden;
  /* Remove manual transform and opacity, coverflow effect handles it */
  /* transition: transform 0.3s ease, opacity 0.3s ease; */
  /* opacity: 0.5; */
}

/* Remove active slide specific scaling/opacity */
/* .hero-swiper-slide.swiper-slide-active { ... } */

.slider-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 广告容器样式 */
.ad-container {
  padding: 2rem 0;
  text-align: center;
  background-color: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

/* Features Section */
.features-section {
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, #f8f4ff 0%, #fff0f8 100%); /* Soft gradient */
  contain: layout style paint; /* 防止布局偏移 */
  min-height: 600px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
  overflow: hidden; /* 防止内容溢出导致的布局偏移 */
}

.features-section > .container {
  contain: layout style; /* 防止布局偏移 */
  min-height: 450px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

.features-section h2 {
  font-size: 2rem;
  color: #a08ee6; /* Kawaii purple */
  margin-bottom: 0.5rem;
  min-height: 2.5rem; /* 设置最小高度，防止内容加载时的布局偏移 */
}

.features-section > .container > p {
  font-size: 1.1rem;
  color: #8a7aa7;
  margin-bottom: 3.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  min-height: 1.5em; /* 设置最小高度，防止内容加载时的布局偏移 */
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  grid-template-rows: repeat(auto-fit, minmax(200px, auto)); /* 固定行高 */
  gap: 1.5rem;
  margin: 0 auto;
  contain: layout style; /* 防止布局偏移 */
  min-height: 300px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
  place-items: stretch; /* 确保所有项目填满网格 */
}

.feature-card {
  background-color: #fdf6ff; /* Very light lavender */
  padding: 1.5rem;
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(160, 142, 230, 0.1); /* Soft purple shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  contain: layout style; /* 防止布局偏移 */
  min-height: 200px; /* 设置最小高度，防止内容加载时的布局偏移 */
  width: 100%; /* 确保宽度固定 */
  box-sizing: border-box; /* 确保padding不影响总宽度 */
  transform: translateZ(0); /* 启用硬件加速，减少重绘 */
  will-change: transform; /* 提示浏览器优化变换 */
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(160, 142, 230, 0.2);
}

.feature-card .icon {
  font-size: 2rem;
  color: #ff85a2; /* Kawaii pink */
  margin-bottom: 0.8rem;
  /* Consider using actual icons later */
  min-height: 2rem; /* 设置最小高度，防止内容加载时的布局偏移 */
}

.feature-card h3 {
  font-size: 1.2rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
  min-height: 1.5rem; /* 设置最小高度，防止内容加载时的布局偏移 */
}

.feature-card p {
  font-size: 0.9rem;
  color: #7c6f9f;
  min-height: 4rem; /* 设置最小高度，防止内容加载时的布局偏移 */
}

/* Guides Section */
.guides-section {
  padding: 2rem 0;
}

/* Style for the new h2 title */
#guides-section {
  padding: 2rem 0 0 0;
}

#guides-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #ff85a2; /* Pink color like other titles */
}

/* 异步组件加载状态样式 */
.async-loading,
.async-error {
  text-align: center;
  padding: 2rem;
  color: #a08ee6;
  font-size: 1.1rem;
}

.async-error {
  color: #ff6b8f;
}

/* 指南加载状态样式 */
.guides-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(160, 142, 230, 0.3);
  border-radius: 50%;
  border-top-color: #a08ee6;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.guides-loading p {
  color: #a08ee6;
  font-size: 1rem;
}

/* 错误状态样式 */
.guides-error {
  text-align: center;
  padding: 2rem;
  color: #ff6b8f;
}

.btn-retry {
  background-color: #ff85a2;
  color: white;
  margin-top: 1rem;
}

/* 无数据状态样式 */
.guides-empty {
  text-align: center;
  padding: 3rem;
  color: #a08ee6;
  font-size: 1.1rem;
}

/* 占位内容样式 */
.guides-placeholder {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  /* 设置最小高度，防止布局偏移 */
  min-height: 500px;
}

.placeholder-item {
  height: 200px;
  background: linear-gradient(110deg, #f5f5f5 8%, #efefef 18%, #f5f5f5 33%);
  border-radius: 15px;
  animation: shimmer 1.5s linear infinite;
  background-size: 200% 100%;
  /* 防止布局偏移 */
  contain: layout style paint;
}

@keyframes shimmer {
  to {
    background-position: -200% 0;
  }
}

/* Tabs Navigation Styles */
.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem; /* Spacing between tabs */
  margin-bottom: 2.5rem; /* Space below tabs */
  flex-wrap: wrap; /* Allow tabs to wrap on smaller screens */
}

.tabs-nav button {
  padding: 0.6rem 1.5rem;
  border: 1px solid #fce4ec; /* Light pink border */
  border-radius: 20px;
  background-color: #fff7fa; /* Light pink background */
  color: #a08ee6; /* Kawaii purple text */
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(160, 142, 230, 0.05);
}

.tabs-nav button:hover {
  background-color: #fdf6ff;
  box-shadow: 0 3px 6px rgba(160, 142, 230, 0.1);
}

.tabs-nav button.active {
  background-color: #ff85a2; /* Kawaii pink background for active */
  color: white;
  border-color: #ff85a2;
  box-shadow: 0 3px 6px rgba(255, 133, 162, 0.2);
}

/* Adjusted Guides Grid and Card Styles for Image Grid */
.guides-grid.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* Adjust size */
  gap: 1.5rem; /* Adjust gap */
  margin: 0 auto;
}

.guide-card.image-card {
  background-color: #fffafa; /* Very light pink/off-white */
  border-radius: 10px; /* Slightly less rounded */
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05); /* Lighter shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #fff0f5;
  text-align: center;
}

.guide-card.image-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
}

/* Remove placeholder background, adjust size */
.guide-image-placeholder {
  height: auto; /* Let image determine height */
  background-color: transparent;
  display: block; /* Changed from flex */
  position: relative;
  overflow: hidden;
}

.guide-image-placeholder img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove extra space below image */
  object-fit: cover; /* Ensure image covers */
  opacity: 1; /* Restore full opacity */
  border-bottom: 1px solid #fce4ec; /* Optional separator */
}

/* Adjust content padding and text styles */
.guide-content {
  padding: 0.8rem 0.5rem; /* Less padding */
}

.guide-content h4 {
  font-size: 0.9rem; /* Smaller title */
  color: #5b4b8a;
  margin-bottom: 0; /* Remove bottom margin */
  line-height: 1.3; /* Adjust line height for potential two lines */
  font-weight: 500; /* Lighter font weight */
}

/* Downloads Section */
.downloads-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #e6e6fa 0%, #fff0f5 100%);
  text-align: center;
}

.downloads-section .section-header {
  justify-content: center; /* Center the header */
}

.downloads-section h2 {
  font-size: 2rem;
  color: #5b4b8a; /* Dark Purple */
}

.downloads-section h2 .icon {
  margin-right: 0.5rem;
  font-size: 1.8rem; /* Slightly smaller than h2 */
  vertical-align: middle;
}

.downloads-section > .container > p {
  font-size: 1.1rem;
  color: #8a7aa7;
  margin-bottom: 3.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.downloads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 800px; /* Re-add if needed for specific layout */
}

.download-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 20px; /* More rounded */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid #fdecf2;
  transition: transform 0.3s ease;
}

.download-card:hover {
  transform: scale(1.03);
}

.download-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ff85a2;
}
.download-card:nth-child(2) .download-icon {
  color: #a08ee6;
}

.download-card h3 {
  font-size: 1.3rem;
  color: #5b4b8a;
  margin-bottom: 0.5rem;
}

.download-card p {
  font-size: 0.95rem;
  color: #7c6f9f;
  margin-bottom: 1.5rem;
  min-height: 3em; /* Ensure consistent height */
}

.download-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #8a7aa7;
}

.download-meta span {
  background-color: #f5f5f5;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
}

.btn-download {
  background-color: #ff85a2; /* Kawaii pink */
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  width: 80%; /* Make button wider */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.btn-download:hover {
  background-color: #ff6b81; /* Darker pink */
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* About Game Section */
.about-section {
  padding: 4rem 0;
  /* background-color: #fffafa; Section is now transparent */
  margin: 2rem 0;
}

/* Remove flex from container, apply visual styles here */
.about-section > .container {
  /* display: flex; */ /* Flex removed from here */
  /* gap: 3rem; */
  /* align-items: flex-start; */
  background-color: #fffafa; /* Background on container */
  padding: 3rem; /* Keep padding */
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(160, 142, 230, 0.1);
}

/* Apply flex to about-content */
.about-content {
  /* flex: 1; */ /* Remove old flex property */
  display: flex;
  gap: 3rem; /* Gap between text-wrapper and game-stats */
  align-items: flex-start; /* Align items to top */
}

/* Define flex properties for text-wrapper and game-stats */
.text-wrapper {
  flex: 1; /* Text takes available space */
}

.game-stats {
  flex: 0 0 300px; /* Keep fixed width for stats */
  /* Styles for background, padding, etc. remain the same */
}

.about-content h2 {
  font-size: 2rem;
  color: #a08ee6; /* Changed color to purple based on screenshot */
  margin-bottom: 2rem; /* Increased space below title */
}
.about-content h2 .icon {
  margin-right: 0.5rem;
  vertical-align: middle;
  color: #ffcc80; /* Gold star */
}

.about-content p {
  font-size: 1rem;
  color: #7c6f9f;
  margin-bottom: 1.2rem;
  line-height: 1.7;
}

/* New Game Stats Styles */
.game-stats h3 {
  font-size: 1.3rem;
  color: #5b4b8a;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 1.5rem 1rem; /* Row gap, Column gap */
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-card strong {
  font-size: 2rem;
  font-weight: 700;
  color: #ff85a2; /* Use pink for numbers */
  line-height: 1.1;
  margin-bottom: 0.2rem;
}
/* Optional: different color for rating */
.stat-card:last-child strong {
  color: #ffb347; /* Orange for rating */
}

.stat-card span {
  font-size: 0.9rem;
  color: #7c6f9f;
}

/* How to Play Section Styles */
.how-to-play-section {
  padding: 4rem 0;
  background-color: #fff7fa; /* Light pink tint */
}
.how-to-play-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #a08ee6; /* Kawaii purple */
  margin-bottom: 2.5rem;
}
.how-to-play-section h2 .icon {
  margin-right: 0.5rem;
}

.play-steps-list {
  margin: 0 auto; /* Center the list */
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* Space between steps */
}

.play-step {
  display: flex;
  align-items: flex-start; /* Align icon top */
  gap: 1.5rem; /* Space between icon and text */
  /* Remove styles inherited from step-card if any */
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  text-align: left;
  box-shadow: none;
  border: none;
  transition: none;
}
.play-step:hover {
  transform: none;
}

.step-number {
  flex-shrink: 0; /* Prevent shrinking */
  width: 40px;
  height: 40px;
  background-color: #ffcc80; /* Light orange background */
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
/* Optional: different colors for numbers */
.play-step:nth-child(1) .step-number {
  background-color: #ffcc80;
} /* Light orange */
.play-step:nth-child(2) .step-number {
  background-color: #b3e0ff;
} /* Light blue */
.play-step:nth-child(3) .step-number {
  background-color: #ffb3cc;
} /* Light pink */
.play-step:nth-child(4) .step-number {
  background-color: #b3ffcc;
} /* Light green */
.play-step:nth-child(5) .step-number {
  background-color: #d9b3ff;
} /* Light purple */
.play-step:nth-child(6) .step-number {
  background-color: #ffddb3;
} /* Lighter orange */
.play-step:nth-child(7) .step-number {
  background-color: #e6e6e6;
} /* Light grey */

.step-content {
  /* Remove styles inherited from step-card if any */
  padding: 0;
}

.step-content h3 {
  font-size: 1.4rem; /* Larger title */
  color: #5b4b8a;
  margin-bottom: 0.8rem; /* More space below title */
  font-weight: 600;
}
.step-content p {
  font-size: 1rem; /* Standard paragraph size */
  color: #7c6f9f;
  line-height: 1.7;
}

/* Tips & Tricks Section Styles */
.tips-tricks-section {
  padding: 4rem 0;
  background-color: #ffffff; /* White background */
}
.tips-tricks-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #ff85a2; /* Kawaii pink */
  margin-bottom: 1rem;
}
.tips-tricks-section > .container > p {
  /* Description paragraph */
  text-align: center;
  font-size: 1.1rem;
  color: #8a7aa7;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.tips-list {
  list-style: none; /* Remove default bullets */
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  counter-reset: tips-counter;
}
.tips-list li {
  background-color: #fdf6ff;
  border: 1px solid #f2e8ff;
  border-radius: 10px;
  padding: 1rem 1.5rem 1rem 3.5rem; /* Add space for counter */
  margin-bottom: 1rem;
  position: relative;
  color: #5b4b8a;
  font-size: 1rem;
  line-height: 1.6;
  transition: background-color 0.3s ease;
}
.tips-list li:hover {
  background-color: #f8f0ff;
}
.tips-list li::before {
  counter-increment: tips-counter;
  content: counter(tips-counter);
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: #a08ee6; /* Kawaii purple */
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;
}
.tips-list li strong {
  color: #ff85a2; /* Highlight keywords */
}

/* FAQ Section */
.faq-section {
  padding: 4rem 0;
  background-color: #ffffff;
  margin: 2rem 0;
  border-radius: 0;
  box-shadow: none;
}

.faq-section > .container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(160, 142, 230, 0.08);
}

.faq-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #a08ee6; /* Kawaii Purple */
  margin-bottom: 2.5rem;
}
.faq-section h2 .icon {
  margin-right: 0.5rem;
  vertical-align: middle;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background-color: #fdf6ff; /* Very light lavender */
  border: 1px solid #f2e8ff;
  border-radius: 10px;
  overflow: hidden; /* Prevent content overflow on close */
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
}

.faq-item[open] {
  background-color: #f8f0ff;
}

.faq-item summary {
  padding: 1rem 1.5rem;
  font-weight: bold;
  color: #5b4b8a;
  cursor: pointer;
  list-style: none; /* Remove default marker */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-item summary:hover {
  background-color: #f2e8ff;
}

.faq-item summary::-webkit-details-marker {
  display: none; /* Hide default marker (Chrome/Safari) */
}

.faq-item summary::after {
  content: '+'; /* Use text for icon */
  font-size: 1.5rem;
  font-weight: lighter;
  color: #a08ee6;
  transition: transform 0.3s ease;
}

.faq-item[open] summary::after {
  transform: rotate(45deg);
  content: '\00d7'; /* Multiplication sign (X) */
}

.faq-item p {
  padding: 1.5rem; /* Padding only when open */
  color: #7c6f9f;
  line-height: 1.7;
  margin-top: -0.5rem; /* Adjust spacing */
}

/* Footer Styles - REMOVED */
/* .footer { ... } */
/* .footer-content { ... } */
/* .footer-about { ... } */
/* .social-icons a { ... } */
/* .footer-links { ... } */
/* .link-column { ... } */
/* .link-column h4 { ... } */
/* .link-column ul { ... } */
/* .link-column li { ... } */
/* .link-column a { ... } */
/* .footer-bottom { ... } */
/* .footer-bottom .heart { ... } */
/* .footer-content { ... } */
/* .footer-bottom { ... } */

/* Adjust styles that previously relied on full-width sections if necessary */

/* Example adjustment: If a section had max-width previously, it might need removal */
/* Example: .about-section, .faq-section, .downloads-grid used max-width before. */
/* Since the parent container now limits width, these might not be needed, */
/* but double-check layout. For now, let's keep them to maintain internal spacing. */

/* The direct children of the container within header need alignment - REMOVED */

/* Sections themselves can remove max-width if they had it, as container handles it */
/* e.g., remove max-width from .about-section, .faq-section, .downloads-grid, etc. */
/* Let's try removing them for cleaner structure */

.downloads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 800px; /* Re-add if needed for specific layout */
}

.about-section {
  padding: 4rem 0;
  display: flex;
  gap: 3rem;
  align-items: center;
  background-color: #fffafa;
  margin: 2rem 0;
  border-radius: 0;
  box-shadow: none;
}

.faq-section {
  padding: 4rem 0;
  background-color: #ffffff;
  margin: 2rem 0;
  border-radius: 0;
  box-shadow: none;
}

/* Footer content is already wrapped, .footer-content had max-width, remove it - REMOVED */

/* Also remove max-width from section headers and paragraph helpers if they exist */
.guides-section .section-header,
.guides-section > p {
  max-width: none; /* Remove max-width */
  margin-left: 0; /* Adjust if centering is lost */
  margin-right: 0;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0 auto; /* Center grid within its parent section */
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;
}

/* --- Media Queries for Responsiveness --- */

/* Tablet Styles (e.g., <= 1024px) */
@media (max-width: 1024px) {
  .container,
  .hero-section .container,
  .features-section .container,
  .downloads-section .container,
  .about-section > .container,
  .how-to-play-section .container,
  .tips-tricks-section .container,
  .faq-section > .container {
    max-width: 100%; /* Use percentage for better flexibility */
    padding: 0 1rem; /* Adjust padding */
  }

  h1,
  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  h2,
  .hero-content h2 {
    font-size: 1.8rem;
  }
  h3,
  .hero-content h3 {
    font-size: 1.2rem;
  }
  p,
  .hero-content p {
    font-size: 1rem;
  }

  /* Hero Section Tablet */
  .hero-section .container {
    gap: 2rem;
  }
  .hero-swiper-container.card-slider {
    width: 450px; /* Slightly smaller swiper */
    height: 280px;
  }
  .hero-swiper-slide {
    width: 250px;
    height: 250px;
  }

  /* About Section Tablet */
  .about-content {
    flex-direction: column; /* Stack text and stats */
    gap: 2rem;
  }
  .game-stats {
    flex: 0 0 auto; /* Reset flex basis */
    width: 100%; /* Full width */
    max-width: 400px; /* Limit max width */
    margin: 0 auto; /* Center stats */
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* Keep 2 columns if space allows */
  }

  /* Downloads Grid Tablet */
  .downloads-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 100%;
  }

  /* General Button Adjustments */
  .btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
  }
}

/* Mobile Styles (e.g., <= 767px) */
@media (max-width: 767px) {
  h1,
  .hero-content h1 {
    font-size: 1.2rem;
  }
  h2,
  .hero-content h2 {
    font-size: 1.6rem;
  }
  h3,
  .hero-content h3 {
    font-size: 1.1rem;
  }
  p,
  .hero-content p {
    font-size: 0.95rem;
  }
  main {
    padding-top: 85px; /* Adjusted padding-top for optimized mobile header */
  }
  #features-section,
  #guides-section,
  #downloads-section {
    scroll-margin-top: 0px; /* Also adjust scroll margin */
  }
  .features-section {
    padding: 2em 0;
    min-height: 400px; /* 移动端减少最小高度 */
  }
  .features-section > .container {
    min-height: 350px; /* 移动端减少最小高度 */
  }
  .features-section > .container > p {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    min-height: 1.2em; /* 移动端减少最小高度 */
  }

  /* Hero Section Mobile */
  .hero-section .container {
    flex-direction: column; /* Stack content and swiper */
    text-align: center;
    max-width: 100%;
    gap: 0rem;
  }
  .hero-content {
    text-align: center;
    align-items: center;
    max-width: 100%;
  }
  .hero-content p {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  /* Latest Levels Mobile Styles */
  .latest-levels {
    margin-bottom: 1.5rem;
  }

  .latest-levels h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .level-link {
    font-size: 0.8rem;
    line-height: 1.3;
    display: block;
    text-align: left;
  }

  .hero-buttons {
    justify-content: center;
    gap: 0.5rem;
  }
  .btn {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
  .hero-section {
    padding: 0 0 2rem;
  }
  .features-section h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    min-height: 2rem; /* 移动端减少最小高度 */
  }
  /* 移动端隐藏轮播图，显示单张图片 */
  .hero-swiper-container.card-slider {
    display: none; /* 完全隐藏轮播图 */
  }

  /* 移动端单张图片样式 */
  .hero-single-image-container {
    width: 90%;
    max-width: 350px;
    margin: 1rem auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .hero-single-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
  }

  /* Features Section Mobile */
  .features-grid {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    min-height: 250px; /* 移动端减少最小高度 */
  }

  .feature-card {
    padding: 1rem;
    min-height: 150px; /* 移动端减少最小高度 */
  }
  .feature-card .icon {
    min-height: 1.5rem; /* 移动端减少最小高度 */
  }
  .feature-card h3 {
    font-size: 1.2rem;
    min-height: 1.2rem; /* 移动端减少最小高度 */
  }
  .feature-card p {
    font-size: 0.8rem;
    min-height: 3rem; /* 移动端减少最小高度 */
  }

  .guides-section {
    padding: 2em 0;
  }

  /* Downloads Section Mobile */
  .downloads-grid {
    grid-template-columns: repeat(2, 1fr); /* Single column */
    gap: 0.5rem;
  }
  .download-icon {
    line-height: 1.2;
  }

  .download-card {
    padding: 1rem;
  }
  .download-card h3 {
    font-size: 1rem;
  }
  .download-card p {
    font-size: 0.8rem;
  }

  .download-meta span {
    font-size: 0.8rem;
  }

  .about-section {
    margin-top: 0;
    padding: 2em 0;
  }
  .about-content {
    gap: 0rem;
  }
  /* About Section Mobile */
  .about-section > .container {
    padding: 0 1rem;
  }
  .about-content h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
  }
  .about-content p {
    font-size: 0.8rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* Can keep 2 cols */
  }

  .stat-card strong {
    font-size: 1.5rem;
  }

  /* How to Play Mobile */
  .play-step {
    flex-direction: column; /* Stack number and content */
    align-items: center; /* Center items */
    text-align: center;
    gap: 1rem;
  }
  .step-content {
    text-align: center;
  }
  .step-content h3 {
    font-size: 1.2rem;
  }

  /* Tips List Mobile */
  .tips-list li {
    padding: 0.8rem 1rem 0.8rem 3rem;
    font-size: 0.9rem;
  }
  .tips-list li::before {
    left: 1rem;
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
  }

  /* FAQ Mobile */

  .how-to-play-section {
    padding: 2em 0;
  }
  .play-step {
    gap: 0.5rem;
  }
  .how-to-play-section h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
  }
  .play-step h3 {
    font-size: 1.2rem;
  }
  .play-step p {
    font-size: 0.8rem;
  }
  .tips-tricks-section {
    padding: 2em 0;
  }
  .tips-tricks-section h2 {
    font-size: 1.5rem;
    line-height: 1.2;
  }
  .tips-tricks-section > .container > p {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
  .tips-list li {
    font-size: 0.8rem;
  }

  .faq-section {
    padding: 1.5em 0;
  }
  .faq-section h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .faq-section > .container {
    padding: 0 1rem;
  }
  .faq-item summary {
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
    line-height: 1.2;
  }
  .faq-item p {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style>
