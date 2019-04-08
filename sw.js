var cacheName = 'Hello-PWA';
//var self = this;
var filesToCache =[
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
this.addEventListener('install', function(e) {
  e.waitUntil(
    this.caches.open(cacheName).then(function(cache) {
        this.console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
this.addEventListener('activate', function(e) {
  this.console.log('[ServiceWorker] Activate');
});

/* Serve cached content when offline */
this.addEventListener('fetch', function(e) {
  e.respondWith(
    this.caches.match(e.request).then(function(response) {
      return response || this.fetch(e.request);
    })
  );
});



this.addEventListener('fetch', function(event) {
 this.console.log(event.request.url);
});