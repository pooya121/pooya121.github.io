self.__precacheManifest = [
  {
    "url": "/_next/static/CzW7lOjlGVKv8YRuq5B6-/_buildManifest.js",
    "revision": "6161666fe55173f2adc21b9e1ab1a7a6"
  },
  {
    "url": "/_next/static/chunks/4c6627cdab3a9828f6f7dcca698bcaf3db219750.d88a92a12e1fd5efb285.js",
    "revision": "5ed72034ba9cd0e86f5d"
  },
  {
    "url": "/_next/static/chunks/74e6597d51aa6d3751950fc1bbe15cc15db490ee.8e9056e8304d89512c7f.js",
    "revision": "691807b0e92a123c02cb"
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
    "url": "/_next/static/css/4c6627cdab3a9828f6f7dcca698bcaf3db219750.e8dc5114.chunk.css",
    "revision": "5ed72034ba9cd0e86f5d"
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
    "url": "/_next/static\\CzW7lOjlGVKv8YRuq5B6-\\pages\\_app.js",
    "revision": "4ca61df9a37d2916c20b"
  },
  {
    "url": "/_next/static\\CzW7lOjlGVKv8YRuq5B6-\\pages\\_error.js",
    "revision": "aefcb758661dcb9c9e69"
  },
  {
    "url": "/_next/static\\CzW7lOjlGVKv8YRuq5B6-\\pages\\fa.js",
    "revision": "49538739203ae8248c5d"
  },
  {
    "url": "/_next/static\\CzW7lOjlGVKv8YRuq5B6-\\pages\\index.js",
    "revision": "bca064b65565ba224ba1"
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
