self.__precacheManifest = [
  {
    "url": "/_next/static/HIDvZqEllTLP0zBHzseeS/_buildManifest.js",
    "revision": "926fcfb7931d03624a9a4b3e814f4122"
  },
  {
    "url": "/_next/static/chunks/commons.0ee7cdbf067251d2ef89.js",
    "revision": "08baf799f1258fd9272c"
  },
  {
    "url": "/_next/static/chunks/d7acd9afa3c45480642a9ec28613f9131dfb9301.139d2676227d7015a711.js",
    "revision": "94c1ef3a98c5fa0e1922"
  },
  {
    "url": "/_next/static/chunks/fa68c6f3778443542bfd774fefd5b9df49fec964.b936349e6c585aa1479b.js",
    "revision": "16705a0e8ab0ddbee5ef"
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
    "url": "/_next/static/css/fa68c6f3778443542bfd774fefd5b9df49fec964.e8dc5114.chunk.css",
    "revision": "16705a0e8ab0ddbee5ef"
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
    "url": "/_next/static\\HIDvZqEllTLP0zBHzseeS\\pages\\_app.js",
    "revision": "161fd2412da322aa9a0e"
  },
  {
    "url": "/_next/static\\HIDvZqEllTLP0zBHzseeS\\pages\\_error.js",
    "revision": "ed858513a7f647a73f84"
  },
  {
    "url": "/_next/static\\HIDvZqEllTLP0zBHzseeS\\pages\\fa.js",
    "revision": "b7805cc96353b73d76cf"
  },
  {
    "url": "/_next/static\\HIDvZqEllTLP0zBHzseeS\\pages\\index.js",
    "revision": "6680c1de6eaf9e2129c3"
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
