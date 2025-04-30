import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideDetail from '../views/GuideDetail.vue'
import GuideView from '../views/GuideView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import DownloadView from '../views/DownloadView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/TermsOfServiceView.vue'
import { i18n, supportedLangs, defaultLang } from '@/i18n'

const nonDefaultLangs = supportedLangs.filter((lang) => lang !== defaultLang)
const langParamRegex = nonDefaultLangs.join('|')

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
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView,
    },
    {
      path: '/:id(Cookingdom-game-level-\\d+)',
      name: 'guide-detail',
      component: GuideDetail,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/`,
      name: 'home-lang',
      component: HomeView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/guides`,
      name: 'guides-lang',
      component: GuideView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/blog`,
      name: 'blog-lang',
      component: BlogView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/blog/:id`,
      name: 'blog-detail-lang',
      component: BlogDetailView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/download`,
      name: 'download-lang',
      component: DownloadView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/privacy-policy`,
      name: 'privacy-policy-lang',
      component: PrivacyPolicyView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/terms-of-service`,
      name: 'terms-of-service-lang',
      component: TermsOfServiceView,
      props: true,
    },
    {
      path: `/:lang(${langParamRegex})/:id(Cookingdom-game-level-\\d+)`,
      name: 'guide-detail-lang',
      component: GuideDetail,
      props: true,
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
    if (to.fullPath !== toPathWithoutLang) {
      console.log(
        `Redirecting (remove default lang prefix) from ${to.fullPath} to ${toPathWithoutLang}`,
      )
      return next(toPathWithoutLang)
    }
  }

  next()
})

export default router
