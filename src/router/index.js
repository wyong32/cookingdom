import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideDetail from '../views/GuideDetail.vue'
import GuideView from '../views/GuideView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import DownloadView from '../views/DownloadView.vue'
import { i18n, supportedLangs, defaultLang } from '@/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guides',
      name: 'guides',
      component: GuideView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:id',
      name: 'blog-detail',
      component: BlogDetailView,
      props: true,
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadView,
    },
    {
      path: '/:id(level-\\d+)',
      name: 'guide-detail',
      component: GuideDetail,
      props: true,
    },
    {
      path: '/:lang(zh|ru)',
      name: 'home-lang',
      component: HomeView,
    },
    {
      path: '/:lang(zh|ru)/guides',
      name: 'guides-lang',
      component: GuideView,
      props: (route) => ({ lang: route.params.lang }),
    },
    {
      path: '/:lang(zh|ru)/blog',
      name: 'blog-lang',
      component: BlogView,
      props: (route) => ({ lang: route.params.lang }),
    },
    {
      path: '/:lang(zh|ru)/blog/:id',
      name: 'blog-detail-lang',
      component: BlogDetailView,
      props: (route) => ({ lang: route.params.lang, id: route.params.id }),
    },
    {
      path: '/:lang(zh|ru)/download',
      name: 'download-lang',
      component: DownloadView,
      props: (route) => ({ lang: route.params.lang }),
    },
    {
      path: '/:lang(zh|ru)/:id(level-\\d+)',
      name: 'guide-detail-lang',
      component: GuideDetail,
      props: (route) => ({ lang: route.params.lang, id: route.params.id }),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const paramsLang = to.params.lang
  const pathFirstPart = to.path.split('/')[1]

  let targetLang = defaultLang

  if (paramsLang && supportedLangs.includes(paramsLang)) {
    targetLang = paramsLang
  } else if (supportedLangs.includes(pathFirstPart) && pathFirstPart !== defaultLang) {
    targetLang = pathFirstPart
  } else {
    targetLang = defaultLang
  }

  if (i18n.global.locale.value !== targetLang) {
    console.log(`Setting i18n locale to: ${targetLang}`)
    i18n.global.locale.value = targetLang
    localStorage.setItem('userLanguage', targetLang)
  }

  const requiresPrefix = targetLang !== defaultLang
  const pathStartsWithLang = pathFirstPart === targetLang

  if (targetLang === defaultLang && pathFirstPart === defaultLang) {
    const toPathWithoutLang = to.path.substring(('/' + defaultLang).length) || '/'
    console.log(`Redirecting (remove default prefix) from ${to.path} to ${toPathWithoutLang}`)
    return next(toPathWithoutLang)
  }

  next()
})

export default router
