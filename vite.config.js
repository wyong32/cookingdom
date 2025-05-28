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
      hostname: 'https://www.cookingdom.co',
      exclude: ['/:id', '/:lang/:id'],
      dynamicRoutes: (() => {
        try {
          const guideIds = loadGuideIds()
          return guideIds.flatMap((id) => [
            `/${id}`,
            `/zh/${id}`,
            `/ru/${id}`,
            `/fil/${id}`,
            `/ms/${id}`,
          ])
        } catch (error) {
          console.warn('[Sitemap Plugin] Error loading guide IDs:', error)
          return []
        }
      })(),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString().split('T')[0],
      routes: {
        '/': { priority: 1.0, changefreq: 'weekly' },
        '/guides': { priority: 0.9, changefreq: 'weekly' },
        '/blog': { priority: 0.8, changefreq: 'weekly' },
        '/download': { priority: 0.7, changefreq: 'monthly' },
        '/zh/': { priority: 0.9, changefreq: 'weekly' },
        '/ru/': { priority: 0.9, changefreq: 'weekly' },
        '/fil/': { priority: 0.9, changefreq: 'weekly' },
        '/ms/': { priority: 0.9, changefreq: 'weekly' },
      },
    }),
    robots({
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://www.cookingdom.co/sitemap.xml',
      CrawlDelay: 1,
      Host: 'https://www.cookingdom.co',
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
            src: '/logo.webp',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'any',
          },
          {
            src: '/logo.webp',
            sizes: '240x240', // 添加实际尺寸的声明
            type: 'image/webp',
            purpose: 'any',
          },
          {
            src: '/logo.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any',
          },
        ],
      },
    }),
  ]

  return {
    plugins,
    base: '/', // 确保基础路径正确
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // 启用代码分割和优化
      rollupOptions: {
        output: {
          // 优化的代码分割配置
          manualChunks(id) {
            // Vue 核心库
            if (
              id.includes('node_modules/vue/') ||
              id.includes('node_modules/vue-router/') ||
              id.includes('node_modules/pinia/')
            ) {
              return 'vue-vendor'
            }
            // i18n 相关
            if (id.includes('node_modules/vue-i18n/')) {
              return 'i18n-vendor'
            }
            // Swiper 相关
            if (id.includes('node_modules/swiper/')) {
              return 'swiper-vendor'
            }
            // 其他 node_modules 依赖
            if (id.includes('node_modules/')) {
              return 'vendor'
            }
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
