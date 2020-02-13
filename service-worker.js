self.__precacheManifest = [
  {
    "url": "/_next/static/R38W2FaX6T93zQVtirwam/_buildManifest.js",
    "revision": "2fda5ba2770f72cfbe353ca1b52e9aa6"
  },
  {
    "url": "/_next/static/chunks/a669a5b2bd1d16bf34ca40c901a4dcc4f4d2d2e4.0a0854ba11fc69d1abc7.js",
    "revision": "8d65aef1ade793319f4d"
  },
  {
    "url": "/_next/static/chunks/commons.1a5c5d35909524936b2e.js",
    "revision": "e62592d72608320bff8b"
  },
  {
    "url": "/_next/static/chunks/d28a534637c352530de7dba3a2d12453dea223ed.139d2676227d7015a711.js",
    "revision": "4da31f967f32646956f4"
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
    "url": "/_next/static/css/a669a5b2bd1d16bf34ca40c901a4dcc4f4d2d2e4.e8dc5114.chunk.css",
    "revision": "8d65aef1ade793319f4d"
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
    "url": "/_next/static\\R38W2FaX6T93zQVtirwam\\pages\\_app.js",
    "revision": "db6880d2520c018bdaaa"
  },
  {
    "url": "/_next/static\\R38W2FaX6T93zQVtirwam\\pages\\_error.js",
    "revision": "a33f2d16bf4f4606c05e"
  },
  {
    "url": "/_next/static\\R38W2FaX6T93zQVtirwam\\pages\\fa.js",
    "revision": "a6b6cc4716440d6f7db7"
  },
  {
    "url": "/_next/static\\R38W2FaX6T93zQVtirwam\\pages\\index.js",
    "revision": "a2980a023d99c2ea0449"
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
