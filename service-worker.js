const CACHE_NAME = "ob-alyans-v1";

const FILES_TO_CACHE = [
  "./",
  "index.html",
  "manifest.json",
  "service-worker.js",
  "icon-192.png",
  "icon-512.png",
  "gram.html",
  "Kalem1.4.html",
  "Kasahsp.html",
  "Radiüsçalışanv1.3.html",
  "Gecmealt.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});