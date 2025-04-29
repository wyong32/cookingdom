<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
// 导入 i18n 配置中导出的变量
import { supportedLangs, defaultLang } from '@/i18n'

const { locale } = useI18n() // 获取当前的 locale ref
const router = useRouter()
const route = useRoute()

// 当前选择的语言，用于 v-model 绑定到 select
const currentLocale = locale // 直接使用 i18n 的 locale ref

function changeLocale(event) {
  console.log('--- changeLocale function entered ---')

  const newLang = event.target.value
  console.log(`Target language value: ${newLang}`)

  if (!supportedLangs.includes(newLang)) {
    console.log('Selected language is not in supportedLangs, exiting.')
    return
  }

  const currentPath = route.path
  let basePath = currentPath

  // Check if the path starts with any known language prefix (including default)
  for (const lang of supportedLangs) {
    const prefix = `/${lang}`
    if (currentPath.startsWith(prefix + '/')) {
      // e.g., /zh/some/path or /en/some/path
      basePath = currentPath.substring(prefix.length) // -> /some/path
      console.log(`Stripped prefix '${prefix}', basePath is now: ${basePath}`)
      break // Found and removed prefix
    } else if (currentPath === prefix) {
      // e.g., exactly /zh or /en
      basePath = '/'
      console.log(`Path was exactly prefix '${prefix}', basePath is now: /`)
      break // Found and removed prefix
    }
  }

  let newPath = basePath
  // If the target language is not the default, add the prefix
  if (newLang !== defaultLang) {
    // Ensure basePath starts with '/', unless it IS '/'
    const pathSegment = basePath === '/' ? '' : basePath
    newPath = `/${newLang}${pathSegment}`
  }

  // Final check: if newPath is empty, make it root
  if (newPath === '') newPath = '/'

  console.log(
    `Current Path: ${currentPath}, Calculated Base Path: ${basePath}, Target New Path: ${newPath}`
  )
  localStorage.setItem('userLanguage', newLang)

  // Only push if the path actually changes to avoid redundant navigation
  if (route.path !== newPath) {
    router.push(newPath)
  } else {
    console.log('New path is the same as current path, navigation skipped.')
    // Even if path is same, locale might need update if v-model didn't trigger watcher
    // Though unlikely with current setup, we ensure locale sync here
    if (locale.value !== newLang) {
      console.log('Path same, but ensuring i18n locale matches selected language.')
      locale.value = newLang
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">{{ $t('header.logo') }}</div>
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'home' }">{{ $t('nav.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'guides' }">{{ $t('nav.guides') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'blog' }">{{ $t('nav.blog') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'download' }">{{ $t('nav.download') }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="mascot-placeholder-header">
        <!-- Placeholder for the small mascot -->
        <img
          src="https://placehold.co/50x50/ff85a2/ffffff?text=:)"
          alt="Mascot"
          style="width: 50px; opacity: 0.7"
        />

        <!-- 语言切换下拉框 -->
        <div class="language-switcher">
          <select v-model="currentLocale" @change="changeLocale">
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Base Header Styles */
.header {
  padding: 0.8rem 0; /* Slightly reduced padding */
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #fce4ec;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header > .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.4rem; /* Slightly smaller logo */
  font-weight: bold;
  color: #ff85a2;
}

.header nav ul {
  list-style: none;
  display: flex;
  gap: 1.8rem; /* Slightly reduced gap */
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
}

.header nav a {
  text-decoration: none;
  color: #7c6f9f;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.95rem; /* Slightly smaller links */
}

.header nav a:hover {
  color: #ff85a2;
}
.mascot-placeholder-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mascot-placeholder-header img {
  width: 45px; /* Slightly smaller mascot */
  height: 45px;
  opacity: 0.7;
  animation: bounce-small 2s infinite ease-in-out;
}

/* --- Media Queries --- */

/* Tablet Styles (<= 1024px) */
@media (max-width: 1024px) {
  .header > .container {
    max-width: 90%;
    padding: 0 1.5rem; /* More padding */
  }
  .header nav ul {
    gap: 1rem;
  }
  .header nav a {
    font-size: 0.9rem;
  }
  .logo {
    font-size: 1.3rem;
  }
}

/* Mobile Styles (<= 767px) */
@media (max-width: 767px) {
  .header {
    padding: 0.8rem 0; /* Increase padding slightly for two lines */
  }
  .header > .container {
    padding: 0 1rem;
    flex-wrap: wrap; /* Allow items to wrap */
    justify-content: center; /* Center items horizontally */
    row-gap: 0.5rem; /* Add gap between logo row and nav row */
  }
  .logo {
    font-size: 1.2rem;
    width: 100%; /* Allow logo to take full width initially */
    text-align: center; /* Center logo text */
    margin-bottom: 0.25rem; /* Add space below logo */
  }
  .header nav {
    display: block; /* Ensure nav is displayed */
    width: 100%; /* Nav takes full width */
    order: 3; /* Place nav after logo (and mascot if it existed) */
  }
  .header nav ul {
    justify-content: center; /* Center nav items */
    gap: 0.8rem; /* Adjust gap for mobile */
    flex-wrap: wrap; /* Allow nav items to wrap too if needed */
  }
  .header nav a {
    font-size: 0.85rem; /* Adjust link size */
  }
  .mascot-placeholder-header img {
    /* Keep hidden on mobile or adjust as needed */
    display: none;
  }
  .language-switcher {
    order: 2; /* 在移动视图中，让它排在 logo 下方，导航之前 */
    margin-left: 0;
    margin-bottom: 0.5rem; /* 添加一些底部间距 */
    width: auto; /* 不要占满整行 */
    display: inline-block; /* 允许居中 */
  }
  .header nav {
    order: 3; /* 导航在切换器之后 */
  }
  .logo {
    order: 1; /* Logo 最先 */
    margin-bottom: 0.5rem; /* 为切换器留出空间 */
  }
}

@keyframes bounce-small {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  } /* Smaller bounce */
  60% {
    transform: translateY(-3px);
  }
}

.language-switcher {
  margin-left: 1rem; /* 在导航和 mascot 之间添加一些间距 */
}

.language-switcher select {
  padding: 0.3rem 0.5rem;
  border: 1px solid #fce4ec;
  border-radius: 4px;
  background-color: #fff;
  color: #7c6f9f;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.language-switcher select:hover {
  border-color: #ff85a2;
}

/* Add active link styling if needed */
.header nav a.router-link-active {
  color: #ff85a2; /* Example active color */
  font-weight: bold;
}
</style> 