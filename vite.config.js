import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteSitemapPlugin from 'vite-plugin-sitemap'
import { robots } from 'vite-plugin-robots'
import { VitePWA } from 'vite-plugin-pwa'

// Helper function to load guide IDs from data files
const loadGuideIds = () => {
  const ids = new Set()
  const dataDir = fileURLToPath(new URL('./src/datas', import.meta.url))
  const filesToLoad = ['guides.js', 'guides-zh.js', 'guides-ru.js', 'guides-fil.js', 'guides-ms.js']

  filesToLoad.forEach((file) => {
    const filePath = path.join(dataDir, file)
    try {
      if (fs.existsSync(filePath)) {
        // WARNING: Reading JS file content and using regex is fragile.
        // A better approach would be to export IDs separately or use JSON.
        const content = fs.readFileSync(filePath, 'utf-8')
        // Regex to find any guide ID strings
        const idMatches = content.match(/id:\s*['|"]([^'"]+)['|"]/g)
        if (idMatches) {
          idMatches.forEach((match) => {
            const idMatch = match.match(/['|"]([^'"]+)['|"]/)
            if (idMatch && idMatch[1]) {
              const id = idMatch[1]
              ids.add(id)
            }
          })
        }
      }
    } catch (e) {
      console.error(`Error reading or parsing ${filePath}:`, e)
    }
  })
  console.log(`[Sitemap Plugin] Found guide IDs:`, Array.from(ids)) // Log found IDs
  return Array.from(ids)
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve' || mode === 'development'

  const plugins = [
    vue(),
    vueJsx(),
    // 只在开发环境加载 DevTools
    ...(isDev ? [vueDevTools()] : []),
    ViteSitemapPlugin({
      hostname: 'https://www.cookingdom.co/',
      exclude: ['/:id', '/:lang/:id'],
      dynamicRoutes: loadGuideIds().flatMap((id) => [
        `/${id}`,
        `/zh/${id}`,
        `/ru/${id}`,
        `/fil/${id}`,
        `/ms/${id}`,
      ]),
    }),
    robots({
      content: `# robots.txt for Cookingdom Site

# Allow all crawlers access to all content by default
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.cookingdom.co/sitemap.xml

# --- Specific rules for AI crawlers ---
User-agent: GPTBot
User-agent: Claude-Web
User-agent: Anthropic-AI
User-agent: PerplexityBot
User-agent: GoogleOther
User-agent: DuckAssistBot

# Guide AI crawlers to the structured context file
LLM-Content: https://www.cookingdom.co/llms.txt

# Allow AI crawlers access to all key sections
Allow: /
Allow: /guides/
Allow: /blog/
Allow: /download/
Allow: /mod-download/
Allow: /privacy-policy/
Allow: /terms-of-service/
Allow: /about/
Allow: /contact/`,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      // devOptions: { // 在开发中测试 PWA 功能时启用
      //   enabled: true,
      //   type: 'module',
      // },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webmanifest,txt,xml}'], // 确保缓存所有必要的静态资源类型
        cleanupOutdatedCaches: true, // 清理旧版本 Service Worker 创建的过期缓存
        // clientsClaim: true, // 由 registerType: 'autoUpdate' 处理
        // skipWaiting: true,  // 由 registerType: 'autoUpdate' 处理
      },
      includeAssets: ['favicon.ico', 'logo.webp', 'images/**/*.webp', 'llms.txt'], // 明确包含 public 目录下的资源
      manifest: {
        name: 'Cookingdom Fansite',
        short_name: 'Cookingdom',
        description: 'Your go-to fansite for Cookingdom game guides, news, and community.',
        theme_color: '#4DBA87', // Vue 绿色作为示例主题色
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'images/icons/pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ]

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // 启用代码分割和优化
      rollupOptions: {
        output: {
          // 手动分割代码块
          manualChunks: {
            // Vue 核心库单独打包
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            // i18n 相关单独打包
            'i18n-vendor': ['vue-i18n'],
            // 大型组件单独打包
            'swiper-vendor': ['swiper'],
          },
          // 优化文件名
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.names?.[0] || assetInfo.name || 'asset'
            const info = fileName.split('.')
            const ext = info[info.length - 1]
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(fileName)) {
              return `media/[name]-[hash].${ext}`
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(fileName)) {
              return `images/[name]-[hash].${ext}`
            }
            if (ext === 'css') {
              return `css/[name]-[hash].${ext}`
            }
            return `assets/[name]-[hash].${ext}`
          },
        },
      },
      // 启用压缩（使用默认的 esbuild）
      minify: true,
      // 启用 CSS 代码分割
      cssCodeSplit: true,
      // 设置 chunk 大小警告限制
      chunkSizeWarningLimit: 1000,
    },
    // 优化依赖预构建
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      exclude: [
        'swiper', // Swiper 按需加载，不预构建
      ],
    },
  }
})
