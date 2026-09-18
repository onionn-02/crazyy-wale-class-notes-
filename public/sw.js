// Minimal service worker — its only job is to exist and handle `fetch`,
// which is what Chrome/Android require before treating a site as
// "installable" (Add to Home Screen). It does no caching and changes no
// behavior: every request just passes straight through to the network.
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})
