<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { defaultLang } from '@/i18n'

const { t, locale } = useI18n()

const allLevels = ref([])
const isLoading = ref(true)
const activeTab = ref('levels1_10') // 默认激活第一个标签页

// 动态加载关卡数据的函数
const loadLevels = async (lang) => {
  isLoading.value = true
  try {
    let dataModule
    // 注意：实际项目中可能需要更健壮的路径处理
    if (lang === 'zh') {
      dataModule = await import('@/datas/guides-zh.js')
      // 使用正确的导出名称 guidesZh
      allLevels.value = dataModule.guidesZh
    } else if (lang === 'ru') {
      dataModule = await import('@/datas/guides-ru.js')
      // 假设俄语文件导出 guidesRu (如果不是，需要相应修改)
      // **需要确认 guides-ru.js 的导出名**
      // 暂时假设是 guidesRu
      allLevels.value = dataModule.guidesRu
    } else {
      dataModule = await import('@/datas/guides.js') // 默认 en
      // 英文文件导出 guides
      allLevels.value = dataModule.guides
    }

    // 添加检查，确保数据成功加载
    if (!allLevels.value) {
      console.error(
        `Failed to access the correct export from data module for locale ${lang} in GuideView. Expected 'guides', 'guidesZh', or 'guidesRu'.`
      )
      allLevels.value = [] // 确保出错时清空
    }
  } catch (error) {
    console.error(`Failed to load guides for locale ${lang}:`, error)
    allLevels.value = [] // 加载失败则清空
  } finally {
    isLoading.value = false
  }
}

// 从 i18n 获取 tab 定义
// 注意：i18n 实例需要配置 legacy: false 才能在 setup 中直接访问 t 方法获取对象
// 如果不行，可能需要用 computed 包裹或者在模板中访问 $tm
const tabs = computed(() => {
  const tabKeys = ['special', 'levels1_10', 'levels11_20', 'levels21_30', 'levels31_40']
  return tabKeys.map((key) => ({ key, label: t(`guides.tabs.${key}`) }))
})

// 根据激活的 tab 过滤关卡
const filteredLevels = computed(() => {
  if (isLoading.value || !allLevels.value) return []

  const tabKey = activeTab.value

  return allLevels.value.filter((level) => {
    if (tabKey === 'special') {
      return level.isSpecial === true
    } else {
      // 假设 category 格式为 '1-10', '11-20' 等，与 tab key 'levels1_10' 对应
      const categoryMap = {
        levels1_10: '01-10',
        levels11_20: '11-20',
        levels21_30: '21-30',
        levels31_40: '31-40',
      }
      return level.category === categoryMap[tabKey]
    }
  })
})

// 初始化加载
loadLevels(locale.value)

// 监听语言变化，重新加载数据
watch(locale, (newLocale) => {
  loadLevels(newLocale)
  // 可以在这里重置 activeTab，或者保持不变
  // activeTab.value = 'levels1_10';
})

const changeTab = (tabKey) => {
  activeTab.value = tabKey
}

const getGuideLinkProps = (level) => {
  const currentLocale = locale.value;
  const isDefaultLang = currentLocale === defaultLang;
  let routeName = isDefaultLang ? 'guide-detail' : 'guide-detail-lang';
  let routeParams;

  if (isDefaultLang) {
    routeParams = { id: level.id };
  } else {
    // Critical check: Ensure currentLocale is valid before using it as 'lang' param
    if (currentLocale && typeof currentLocale === 'string') {
       routeParams = { id: level.id, lang: currentLocale };
    } else {
       // Fallback to default route to potentially avoid crash, although navigation might be wrong
       routeName = 'guide-detail'; // Revert to default route name
       routeParams = { id: level.id };
    }
  }

  const linkProps = {
    name: routeName,
    params: routeParams
  };

  return linkProps;
};
</script>

<template>
  <div class="guide-view">
    <h1>{{ t('guides.title') }}</h1>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="changeTab(tab.key)"
        :class="{ active: activeTab === tab.key }"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="guide-list" v-if="!isLoading">
      <ul v-if="filteredLevels.length">
        <li v-for="level in filteredLevels" :key="level.id">
          <RouterLink
            :to="getGuideLinkProps(level)"
            class="guide-item-link"
          >
            <div class="guide-image-placeholder">
              <img
                :src="level.imageUrl"
                :alt="level.title?.replace(/<br\s*\/>/gi, ' ')"
                class="guide-image"
                v-if="level.imageUrl"
              />
            </div>
            <div class="guide-content">
              <h2 v-html="level.title"></h2>
            </div>
          </RouterLink>
        </li>
      </ul>
      <p v-else>
        {{ t('guides.noGuidesAvailable') }}
      </p>
    </div>
    <div v-else>
      <p>Loading...</p>
      <!-- 可以替换为更复杂的加载指示器 -->
    </div>
  </div>
</template>

<style scoped>
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

.guide-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}

.guide-content {
  padding: 1rem;
}

.guide-list h2 {
  margin: 0;
  font-size: 1rem;
  color: #5b4b8a;
  line-height: 1.4;
  min-height: 0;
  padding: 0;
}

.guide-list p {
  color: #666;
  text-align: center;
  padding: 10px;
}

.guide-view > div > p {
  text-align: center;
  color: #888;
  font-size: 1.2em;
}

@media (max-width: 1024px) {
  .guide-list ul {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
  .guide-content h2 {
    font-size: 0.9rem;
  }
}

@media (max-width: 767px) {
  .guide-list ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }
  .guide-image {
    height: 120px;
  }
  .guide-content {
    padding: 0.6rem;
  }
  .guide-content h2 {
    font-size: 0.8rem;
    line-height: 1.3;
  }
}
</style> 