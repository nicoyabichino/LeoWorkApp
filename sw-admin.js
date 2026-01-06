const CACHE_NAME = 'leo-admin-v3';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Usamos rutas relativas al repositorio
      return cache.addAll([
        './admin.html',
        './manifest-admin.json',
        './icono.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
