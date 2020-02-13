self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/0f383ce786a31e04239e5e555f25e16b224786d6.fbbe3df00213a50b4748.js",
    "revision": "5634fabaf3eb62b34359"
  },
  {
    "url": "/_next/static/chunks/7bb38e5b064a79a712313059a269a7dc46825f69.8e9056e8304d89512c7f.js",
    "revision": "1b9cb731f913b5523fc6"
  },
  {
    "url": "/_next/static/chunks/commons.1a5c5d35909524936b2e.js",
    "revision": "e62592d72608320bff8b"
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
    "url": "/_next/static/css/0f383ce786a31e04239e5e555f25e16b224786d6.e8dc5114.chunk.css",
    "revision": "5634fabaf3eb62b34359"
  },
  {
    "url": "/_next/static/css/styles.f4a0f231.chunk.css",
    "revision": "9a3a7fadc7507dc82d64"
  },
  {
    "url": "/_next/static/n7XsWZrTzNBcGoXtJ4Os_/_buildManifest.js",
    "revision": "5ee6c0e392817e55899d168764dd1105"
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
    "url": "/_next/static\\n7XsWZrTzNBcGoXtJ4Os_\\pages\\_app.js",
    "revision": "d930376cbd6dd4f29860"
  },
  {
    "url": "/_next/static\\n7XsWZrTzNBcGoXtJ4Os_\\pages\\_error.js",
    "revision": "e285acd73e4e845f27ad"
  },
  {
    "url": "/_next/static\\n7XsWZrTzNBcGoXtJ4Os_\\pages\\fa.js",
    "revision": "e01002dc56e2f21a5c4d"
  },
  {
    "url": "/_next/static\\n7XsWZrTzNBcGoXtJ4Os_\\pages\\index.js",
    "revision": "151e231cd4443fa14a0c"
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
