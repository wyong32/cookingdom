// Service Worker for Cookingdom
const CACHE_NAME = 'cookingdom-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/logo.webp',
  '/images/banner1.webp',
  '/src/main.js',
  '/src/assets/main.css'
];

// 安装 Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('缓存关键资源...');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('Service Worker 安装完成');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker 安装失败:', error);
      })
  );
});

// 激活 Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker 激活中...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker 激活完成');
      return self.clients.claim();
    })
  );
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') {
    return;
  }

  // 跳过第三方请求
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果缓存中有，直接返回
        if (response) {
          console.log('从缓存返回:', event.request.url);
          return response;
        }

        // 否则从网络获取
        return fetch(event.request)
          .then((response) => {
            // 检查响应是否有效
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 克隆响应，因为响应流只能使用一次
            const responseToCache = response.clone();

            // 缓存图片和静态资源
            if (event.request.url.includes('/images/') || 
                event.request.url.includes('.webp') ||
                event.request.url.includes('.css') ||
                event.request.url.includes('.js')) {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch((error) => {
            console.error('网络请求失败:', error);
            // 可以返回一个默认的离线页面
            return new Response('网络连接失败，请检查网络设置', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// 处理消息
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
