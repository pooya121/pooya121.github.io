self.__precacheManifest = [
  {
    "url": "/_next/static/K6v432zt0bCHu-CS-PofB/_buildManifest.js",
    "revision": "73c68d4056b428cddaa76efe5bbff56b"
  },
  {
    "url": "/_next/static/chunks/8d9c7be176670de5436e71760c72386fa5d73a64.625cb45ccdad77ff2f65.js",
    "revision": "0d5a628a01172b1063eb"
  },
  {
    "url": "/_next/static/chunks/8fb73c616d7f22377be81a539c086fd621c43e36.8e9056e8304d89512c7f.js",
    "revision": "1091c28cbbf72d42ff04"
  },
  {
    "url": "/_next/static/chunks/commons.0ee7cdbf067251d2ef89.js",
    "revision": "08baf799f1258fd9272c"
  },
  {
    "url": "/_next/static/chunks/framework.74d547792b3163b4d6d2.js",
    "revision": "7769a45dde4b24cf5e11"
  },
  {
    "url": "/_next/static/chunks/styles.5b265123fb37f00fa463.js",
    "revision": "9a3a7fadc7507dc82d64"
  },
  {
    "url": "/_next/static/css/8d9c7be176670de5436e71760c72386fa5d73a64.e8dc5114.chunk.css",
    "revision": "0d5a628a01172b1063eb"
  },
  {
    "url": "/_next/static/css/styles.f4a0f231.chunk.css",
    "revision": "9a3a7fadc7507dc82d64"
  },
  {
    "url": "/_next/static/runtime/main-d44ebcd23b01514e2fbd.js",
    "revision": "0e5d1fc23cc868b51e25"
  },
  {
    "url": "/_next/static/runtime/polyfills-104006257fab7491bcba.js",
    "revision": "6e04bfa88d2a6553d80d"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static\\K6v432zt0bCHu-CS-PofB\\pages\\_app.js",
    "revision": "1a5dd5af128e393a4af4"
  },
  {
    "url": "/_next/static\\K6v432zt0bCHu-CS-PofB\\pages\\_error.js",
    "revision": "8be653faafec598b8def"
  },
  {
    "url": "/_next/static\\K6v432zt0bCHu-CS-PofB\\pages\\fa.js",
    "revision": "132350501508785f043e"
  },
  {
    "url": "/_next/static\\K6v432zt0bCHu-CS-PofB\\pages\\index.js",
    "revision": "bdb5b8bc99fe45d8f8f7"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
