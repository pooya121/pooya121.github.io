self.__precacheManifest = [
  {
    "url": "/_next/static/_c353OkNglBnU0SvR7hFT/_buildManifest.js",
    "revision": "de6ac6f31069fe4a67575d3f83484a75"
  },
  {
    "url": "/_next/static/chunks/7991f33fb3b6ad2f3292bcbe507d1ad511601aa3.139d2676227d7015a711.js",
    "revision": "43868f6b4ec0bc3f686a"
  },
  {
    "url": "/_next/static/chunks/ba3229fe436546657cf8eda61ad3fbec0087c96d.afc051837d1e6cbcfe82.js",
    "revision": "66d61cb3f62aeae7e713"
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
    "url": "/_next/static/css/ba3229fe436546657cf8eda61ad3fbec0087c96d.e8dc5114.chunk.css",
    "revision": "66d61cb3f62aeae7e713"
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
    "url": "/_next/static\\_c353OkNglBnU0SvR7hFT\\pages\\_app.js",
    "revision": "52ed7ab4bbbd366a136e"
  },
  {
    "url": "/_next/static\\_c353OkNglBnU0SvR7hFT\\pages\\_error.js",
    "revision": "d212a7313abf7b39e2b9"
  },
  {
    "url": "/_next/static\\_c353OkNglBnU0SvR7hFT\\pages\\fa.js",
    "revision": "79f24f03ac92e969b757"
  },
  {
    "url": "/_next/static\\_c353OkNglBnU0SvR7hFT\\pages\\index.js",
    "revision": "b4cd1251f85e6b11ffb8"
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
