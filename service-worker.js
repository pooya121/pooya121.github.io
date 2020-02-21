self.__precacheManifest = [
  {
    "url": "/_next/static/F4DXm-l4PmlmLvX1a93wO/_buildManifest.js",
    "revision": "864169874264a175954a1d762f089d6e"
  },
  {
    "url": "/_next/static/chunks/83add994004a12ee50d02e5b1ec5e16f1723c40c.5a727c4b1e652acbe421.js",
    "revision": "bdba53cb985bab271c61"
  },
  {
    "url": "/_next/static/chunks/commons.0ee7cdbf067251d2ef89.js",
    "revision": "08baf799f1258fd9272c"
  },
  {
    "url": "/_next/static/chunks/d66a733620dd38723dad1e107d5800a5db471221.8e9056e8304d89512c7f.js",
    "revision": "4144f92e12e0b7839098"
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
    "url": "/_next/static/css/83add994004a12ee50d02e5b1ec5e16f1723c40c.e8dc5114.chunk.css",
    "revision": "bdba53cb985bab271c61"
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
    "url": "/_next/static\\F4DXm-l4PmlmLvX1a93wO\\pages\\_app.js",
    "revision": "c2a7bfa04bd75aaa5855"
  },
  {
    "url": "/_next/static\\F4DXm-l4PmlmLvX1a93wO\\pages\\_error.js",
    "revision": "e2ae1366ed2e7b52b32d"
  },
  {
    "url": "/_next/static\\F4DXm-l4PmlmLvX1a93wO\\pages\\fa.js",
    "revision": "b712ca2ada55b85466b8"
  },
  {
    "url": "/_next/static\\F4DXm-l4PmlmLvX1a93wO\\pages\\index.js",
    "revision": "f3043dcf39ac37407769"
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
