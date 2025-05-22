import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'

/**
 * 安全的 router 和 route 使用 composable
 * 提供 fallback 机制，防止 router 注入失败
 */
export function useRouterSafe() {
  let router = null
  let route = null
  let isRouterAvailable = false

  try {
    router = useRouter()
    route = useRoute()
    isRouterAvailable = true
    console.log('useRouterSafe: Router 可用')
  } catch (error) {
    console.warn('useRouterSafe: Router 不可用，使用 fallback:', error)
    
    // 创建 fallback router
    router = {
      push: (to) => {
        console.log('Fallback router.push:', to)
        if (typeof to === 'string') {
          window.location.href = to
        } else if (to.path) {
          window.location.href = to.path
        } else {
          console.warn('无法导航到:', to)
        }
      },
      replace: (to) => {
        console.log('Fallback router.replace:', to)
        if (typeof to === 'string') {
          window.location.replace(to)
        } else if (to.path) {
          window.location.replace(to.path)
        } else {
          console.warn('无法替换到:', to)
        }
      },
      go: (delta) => {
        window.history.go(delta)
      },
      back: () => {
        window.history.back()
      },
      forward: () => {
        window.history.forward()
      }
    }

    // 创建 fallback route
    route = ref({
      path: window.location.pathname,
      name: 'home',
      params: {},
      query: {},
      hash: window.location.hash,
      fullPath: window.location.pathname + window.location.search + window.location.hash,
      matched: [],
      meta: {}
    })
  }

  // 安全的导航函数
  const safePush = (to) => {
    try {
      if (isRouterAvailable && router.push) {
        return router.push(to)
      } else {
        // 使用 fallback
        if (typeof to === 'string') {
          window.location.href = to
        } else if (to.path) {
          window.location.href = to.path
        }
      }
    } catch (error) {
      console.error('导航失败:', error)
      // 最后的 fallback
      if (typeof to === 'string') {
        window.location.href = to
      } else if (to.path) {
        window.location.href = to.path
      }
    }
  }

  // 安全的替换函数
  const safeReplace = (to) => {
    try {
      if (isRouterAvailable && router.replace) {
        return router.replace(to)
      } else {
        // 使用 fallback
        if (typeof to === 'string') {
          window.location.replace(to)
        } else if (to.path) {
          window.location.replace(to.path)
        }
      }
    } catch (error) {
      console.error('替换失败:', error)
      // 最后的 fallback
      if (typeof to === 'string') {
        window.location.replace(to)
      } else if (to.path) {
        window.location.replace(to.path)
      }
    }
  }

  // 获取当前路径
  const currentPath = computed(() => {
    try {
      return route?.path || window.location.pathname
    } catch (error) {
      return window.location.pathname
    }
  })

  return {
    router,
    route,
    isRouterAvailable,
    safePush,
    safeReplace,
    currentPath
  }
}
