// sw-admin.js - El motor de la app del Profe
const CACHE_NAME = 'leo-admin-v1'; // Nombre diferente al del alumno

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Guardamos el HTML del admin y su manifest
      return cache.addAll(['./admin.html', './manifest-admin.json']);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});