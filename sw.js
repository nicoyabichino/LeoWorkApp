const CACHE_NAME = 'leo-work-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./index.html', './manifest.json']);
    })
  );
  self.skipWaiting(); // Obliga a la versión nueva a activarse
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

