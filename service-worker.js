const CACHE_NAME = "joliepascher-v1";

const urlsToCache = [
  "/Joliepascher/",
  "/Joliepascher/index.html",
  "/Joliepascher/manifest.json",
  "/Joliepascher/image.ico"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
