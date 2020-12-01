---
title: Browser APIs
---

# Browser APIs

<section>

## History API

### History
```js
const historyLength = window.history.length;
window.history.back();
window.history.forward();
window.history.go(-2);
history.state
```

Events
```js
window.addEventListener("hashchange", function() {
  e.newURL
  e.oldURL
  history.state
  location.hash
});
window.addEventListener("popstate", function() {
  e.state
});
```


### Location

```js
window.location
```

`href` = entire URL
```js
location.href
```
```
https:// developer.markusdoppler.at         :80     /path/filename.html#hash?query=string&num=1
protocol subdomain domain        superdomain port   pathname           hash  query
```

```js
location.reload()
location.replace()
location.replace('http://www.ecosia.com')
```

</section>

---

<section>

## JSON

```js
let string = JSON.stringify(history.state)
let data = JSON.parse(historyState)
```
</section>

---

<section>

## Intersection Observer API

Defining the observer
```js
const myObserver = new IntersectionObserver(callback, options);
```

The callback function takes the two arguments `entries` and `observer`.
```js
function callback(entries, observer) {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // perform intersection action
      observer.unobserve();
    }
  });
}
```

Options
```js
const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-150px"
};
```

```js
const options = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};
```


Observing an element
```js
const section = document.querySelector("section");

observer.observe(section);
```

</section>

---

<section>

## Local Storage, Session Storage and Cookies

### Local Storage


persists locally on this machine (for all browsers)
```js
localStorage.setItem('name', 'Melanie')
localStorage.removeItem('name')
```


### Session Storage

persists only for this session (i.e. as long as this tab is open)
```js
sessionStorage.setItem('name', 'Jacob')
sessionStorage.removeItem('name')
```



### Cookies

```js
document.cookie = `name=Karl; expires=${new Date(9999,0,1).toUTCString()}`

document.cookie = `lastname=Müller; expires=${new Date(9999,0,1).toUTCString()}`
```

</section>

---

<section>

## Service Workers

Make sure Service Workers are supported
```js
if ('serviceWorker' in navigator) {
  // ...
}
```

Register Service Worker
```js
window.addEventListener('load', function() {
  navigator.serviceWorker
    .register('caching-worker.js')
    .then(reg => console.log("Service Worker registered."))
    .catch(err => console.log(`Service Worker error: ${err}.`));
});
```

### Using Service Worker for Caching

`caching-worker.js`
```js
const cacheName = "v1";

const cacheAssets = [
  'index.html',
  'about.html',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener("install", e => {
  console.log("Service Worker installed.");

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("Service Worker caching files.");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  console.log("Service Worker activated.");

  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log("Service Worker clearing old cache.");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  console.log("Service Worker fetching.");

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Make copy/clone of response
        const resClone = res.clone();

        // Open cache
        caches
          .open(cacheName)
          .then(cache => {
            // Add response to cache
            cache.put(e.request, resClone);
          });

        return res;
      }).catch(err => caches.match(e.request).then(res => res));
  );
});
```

</section>
