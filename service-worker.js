self.__precacheManifest = [
  {
    "url": "/_next/static/LCCzKUkc7mUB2qt-ZMHa3/_buildManifest.js",
    "revision": "9c4778c7c935cf27f7235f186cee0110"
  },
  {
    "url": "/_next/static/chunks/2a2282fd1d0da299de4cde65e1227098ca365b5b.9cf9bccf258f746b35b3.js",
    "revision": "9caa1cc4e38c722b92db"
  },
  {
    "url": "/_next/static/chunks/ba0d76b53de77005b4408c0a8b86635b228638f3.8e9056e8304d89512c7f.js",
    "revision": "1577cbcce6aeda25cb44"
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
    "url": "/_next/static/css/2a2282fd1d0da299de4cde65e1227098ca365b5b.e8dc5114.chunk.css",
    "revision": "9caa1cc4e38c722b92db"
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
    "url": "/_next/static\\LCCzKUkc7mUB2qt-ZMHa3\\pages\\_app.js",
    "revision": "a499c67a8129588c59ba"
  },
  {
    "url": "/_next/static\\LCCzKUkc7mUB2qt-ZMHa3\\pages\\_error.js",
    "revision": "ad2957f6fc41159bc59b"
  },
  {
    "url": "/_next/static\\LCCzKUkc7mUB2qt-ZMHa3\\pages\\fa.js",
    "revision": "d74a3485779c21035780"
  },
  {
    "url": "/_next/static\\LCCzKUkc7mUB2qt-ZMHa3\\pages\\index.js",
    "revision": "2fde4567031b7941d1a7"
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
