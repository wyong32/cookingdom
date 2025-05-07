import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteSitemapPlugin from 'vite-plugin-sitemap'
import { robots } from 'vite-plugin-robots'

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
        // Regex to find 'id: 'cookingdom-game-level-...' strings
        const idMatches = content.match(/id:\s*['|"](cookingdom-game-level-\d+)['|"]/g)
        if (idMatches) {
          idMatches.forEach((match) => {
            const id = match.match(/['|"](cookingdom-game-level-\d+)['|"]/)[1]
            if (id) ids.add(id)
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
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
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
Allow: /terms-of-service/`,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
