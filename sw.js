const CACHE_NAME = "lash-atelier-v10";
const APP_FILES = [
  "./",
  "./index.html",
  "./client.html",
  "./admin.html",
  "./styles.css",
  "./app.js",
  "./config.js",
  "./database.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./lash-hero-web.jpg",
  "./lash-detail-web.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
