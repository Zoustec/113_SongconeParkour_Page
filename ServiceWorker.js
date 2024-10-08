const cacheName = "Zoustec ltd.-SongconeParkour-1.0.3";
const contentToCache = [
    "Build/1.0.3.loader.js",
    "Build/1.0.3.framework.js.unityweb",
    "Build/1.0.3.data.unityweb",
    "Build/1.0.3.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        
        let response = await caches.match(e.request);
        
        if (response) {
            console.log(`[Service Worker] Found in cache: ${e.request.url}`);
            return response;
        }

        try {
            response = await fetch(e.request);

            if (e.request.method === 'GET') {
                const cache = await caches.open(cacheName);
                console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
                cache.put(e.request, response.clone());
            }

            return response;
        } catch (error) {
            console.error(`[Service Worker] Fetch failed: ${error}`);
            throw error;
        }
    })());
});
