---
title: Browser APIs
styles:
- ../assets/JavaScript/apis.css
scripts:
- ../assets/JavaScript/apis.js
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

</section>

---

<section>

## Location API

```js
window.location
```

`href` = entire URL
```js
window.location.href // https://css-tricks.com/example/index.html?s=flexbox
window.location.protocol // https:
window.location.host // css-tricks.com
window.location.pathname // example/index.html
window.location.search // ?s=flexbox

let newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
```
```
https:// developer.markusdoppler.at         :80     /path/filename.html#hash?query=string&num=1
protocol subdomain domain        superdomain port   pathname           hash  query
```

```js
window.location.reload();
```

```js
window.location.replace()
window.location.replace('http://www.ecosia.com')
```

### URL

```js
const url = new URL('../cats', 'http://www.example.com/dogs');

console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"

url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"

url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"

// search parameters
// https://some.site/?id=123
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

</section>

---

<section>

## Do not track

* If these do *not* hold true, one could e.g. instantiate Google analytics.

```js
window.doNotTrack === "1"
navigator.doNotTrack === "1"
navigator.doNotTrack === "yes"
navigator.msDoNotTrack === "1"
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

## Drag and Drop API
* [Drag and Drop Mobile Polyfill](https://github.com/timruffles/mobile-drag-drop)

* `<img>` and `<a>` elements are draggable by default
* other elements

```html
<div draggable="true"></div>
```

Events
* `dragstart`
* `drag`
* `dragend`
* 

* `dragover`
* `dragenter`
* `dragleave`
* `dragexit`
* `drop`

`event.dataTransfer.types`

in `dragenter`, `dragover`
```
// needed for Firefox
event.dataTransfer.dropEffect = 'copy'
event.dataTransfer.dropEffect = 'link'
```

in `dragstart`
```
event.dataTransfer.effectAllowed = 'copyMove';

// needed for Chrome
event.dataTransfer.setData(type, data);
event.dataTransfer.setData('Text', "Test");
```

in `drop`
```
event.dataTransfer.getData('Text')
```

```
event.dataTransfer.setDragImage(dragIcon, -10, -10);
```

</section>

---

<section>

## Intersection Observer API

Defining the observer
```js
const observer = new IntersectionObserver(callback, options);

// Observing an element
observer.observe(document.querySelector("section"));

// Unobserving an element
observer.unobserve(document.querySelector("section"));
```

The callback function takes the two arguments `entries` and `observer`.
```js
new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, i) => {
    // perform intersection action
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
})
```

Options
```js
const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-150px"
};
```

### Intersection Observer v2
[Chrome: Intersection Observer v2](https://web.dev/intersectionobserver-v2/)

</section>

---

<section>

## Resize Observer API

```js
const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    console.log("resize observed on container", entry.target);
    console.log("borderBoxSize", entry.borderBoxSize[0].inlineSize, entry.borderBoxSize[0].blockSize);
    console.log("contentRect", entry.contentRect.width, entry.contentRect.height);
  });
});

resizeObserver.observe(document.getElementById("format-panel"));
```

</section>

---

<section>

## Mutation Observer API

```js
const mutationObserver = new MutationObserver(entries => {
   console.log(entries)
})

const parent = document.querySelector(".parent")

const mutationOptions = { children: true };
mutationObserver.observe(parent, mutationOptions)
mutationObserver.disconnect()

parent.children[0].remove()
setTimeout(() => {
   parent.appendChild(document.createElement("div"))
}, 100)
```

**Children**
```js
const mutationOptions = {
   children: true
}

// evoke observer
parent.children[0].remove()
parent.appendChild(document.createElement("div"))
```


**Attributes**
```js
const mutationOptions = {
   attributes: true,
   attributesOldValue: true,
   attributesFilter: ["id"]
}

// evoke observer
parent.id = "New Id"
```

**Character data**
```js
const mutationOptions = {
   subtree: true,
   characterData: true,
   characterDataOldValue: true
}

// evoke observer
parent.parent.innerText = "Hallo"
```


</section>

---

<section>

## Local Storage, Session Storage and Cookies

### Local Storage


persists locally on this machine (for all browsers)
```js
localStorage.setItem('name', 'Melanie')
localStorage.getItem('name')
localStorage.removeItem('name')
```


### Session Storage

persists only for this session (i.e. as long as this tab is open)
```js
sessionStorage.setItem('name', 'Jacob')
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
sessionStorage.clear()
```



### Cookies

```js
document.cookie = `name=Karl; expires=${new Date(9999,0,1).toUTCString()}`

document.cookie = `lastname=Müller; expires=${new Date(9999,0,1).toUTCString()}`
```

</section>

---

<section>

## Clipboard API

Programmatic copy
```js
navigator.clipboard.writeText("Hello clipboard!").then(() => {
  // Successful copy
}, () => {
  // Copy failed
});
```

Programmatic paste
```js
navigator.clipboard.readText().then((clipboardText) => {
  // paste clipboardText
});
```

Rich text paste
```js
let data = [];
let clipboardItems = await navigator.clipboard.read();
for (let clipboardItem of clipboardItems) {
  if (!clipboardItem.types.includes("text/html"))
    return;

  let blob = await clipboardItem.getType("text/html");
  let html = await new Promise((resolve) => {
    let reader = new FileReader;
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });
    reader.readAsText(blob);
  });

  data.push(html);
}
```

</section>

---

<section>

## Web Animations API

<figure class="fig-1-2">

<div>
  <div id="logo">
    <div id="needle"></div>
  </div>
</div>
<div>

```js
needle.animate({
  transform: [
    "rotateX(35deg) rotateZ(13deg)",
    "rotateX(35deg) rotateZ(733deg)",
  ],
  easing: ["ease-out"],
}, 800);
```

</div>
</figure>


### Composed animations
```js
element.animate(
  [
    { transform: "rotate(O) translate3D(10px, 0px, 100px)" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translateX(25px)"
  ],
  { duration: 3000, iterations: Infinity }
);
```

</section>

---

<section>

## Web Components API

Using the component via the *custom HTML Tag*
```html
<recipe-text>
  <span slot="vegetable">Broccoli</span>
  <span slot="grain">Rice</span>
</recipe-text>
```

*Create class and define custom element*
```js
class RecipeText extends HTMLElement { ... }
customElements.define("recipe-text", RecipeText);
```


### Template

The template can contain any markup and styles pertaining to the custom element.
Define the component via HTML5's `<template>` and `<slot>` tags.
```html
<template id="recipe-text-template">
  <p>
    <slot name="vegetable" part="veg">Tomato</slot> and <slot name="grain" part="veg">Noodles</slot>
  </p>
</template>
```


### Slots
Slots can be used to add custom text.

#### Single slot
```html
<radio-button>
  Slot text
</radio-button>
```

Usage in template
```html
<button>
  <slot />
</button>
```

#### Multiple slots
```html
<emoji-card name="Fruits" emoji="🥝🍇">
  <div slot="sour">Kiwi</div>
  <div slot="sweet">Grape</div>
</emoji-card>
```

Usage in template
```html
<div>
  <h3><slot name="sour" /></h3>
  <p><slot name="sweet" /></p>
</div>
```



### Shadow DOM

Encapsulates e.g. styles pertaining to the custom component from the rest of the DOM.

```js
customElements.define("recipe-text",
  class extends HTMLElement {
    constructor() {
      super();

      let recipeTextTemplate = document.getElementById("recipe-text-template");
      let recipeText = recipeTextTemplate.content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(recipeText.cloneNode(true));
    }
});
```

`mode: open`: JavaScript from outside the `:root` can access and manipulate the elements within the shadow DOM



### Styling the component

#### Styling from within the `<template>` definition
```html
<template id="vegetable-text-template">
  <style>
    p { background-color: pink; padding: 0.5em; border: 1px solid red; }
  </style>

  <p>The <slot name="vegetable">Tomato</slot> is my favourite Vegetable!</p>
</template>
```
**Note**: These styles are scoped directly to the component and nothing leaks out to other elements on the same page, thanks to the shadow DOM.

#### Styling from the page's CSS
```css
vegetable-text span {
  color: blue;
}
```
**Note**: Styles in the main CSS file cannot access elements in the `<template>` or shadow DOM.



#### Styling CSS Shadow parts from the page's CSS
Web Component Template
```html
<template id="format-button">
  <style>
    .format-button { border: 2px solid navy; }
  </style>
  <button class="format-button">
    <span part="icon" class="icon"></span>
    <span part="label" class="label"></span>
  </button>
</template>
```

### Registering the Web component
```js
let template = document.getElementById("format-button");
window.customElements.define(template.id, class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    let newButtonElement = template.content.cloneNode(true);

    let parts = newButtonElement.querySelectorAll("span");
    parts[0].textContent = this.getAttribute("data-icon");
    parts[1].textContent = this.textContent;

    this.shadowRoot.appendChild(newButtonElement);
    this.addEventListener("click", this.handleClick.bind(this));
  }
});
```

**CSS Shadow Part Styles**
```css
#bold::part(icon) {
  color: red;
  font-weight: bold;
}
#italic::part(icon) {
  color: blue;
  font-style: italic;
}
```

Web Component Usage
```html
<format-button id="bold" data-icon="B">Bold</format-button>
<format-button id="italic" data-icon="I">Italic</format-button>
```




### Life Cycle Methods

Lifecycle Hooks in a web component:
* `constructor()`
* `connectedCallback()`
* `disconnectedCallback()`
* `attributeChangedCallback(name, oldValue, newValue)`
* `static get observedAttributes()`

```js
class RadioButton extends HTMLElement {
  // called when an instance of the element is created or upgraded
  constructor() {
    super();
  }

  // called every time the element is inserted into the DOM
  connectedCallback() {  }

  // called every time the element is removed into the DOM
  disconnectedCallback() {  }

  // called when an attribute is added, removed, updated, or replaced
  attributeChangedCallback(attributeName, oldValue, newValue) {  }

  // Invoked each time the custom element is moved to a new document.
  adoptedCallback() {  }

  // observing the following attributes, i.e. attributeChangedCallback() called when attribute modified
  static get observedAttributes() {
    return ['name', 'data'];
  }
}
```


</section>

---

<section>

## Fullscreen API

```js
const requestFullscreen = () => {
   if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
   else if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();
};

const exitFullscreen = (document) => {
   if (!is_fullscreen()) return;
   if (document.exitFullscreen) document.exitFullscreen();
   else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
};

const is_fullscreen = () => document.fullscreenElement || document.webkitFullscreenElement;

// if supported, create event listener
const fullscreen_support = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen;
const fullscreen_change = document.onfullscreenchange !== undefined ? 'fullscreenchange' : 'webkitfullscreenchange';
if (fullscreen_support) {
   document.documentElement.addEventListener(fullscreen_change, () => {
      if (!is_fullscreen()) {
         end_presentation_mode(window);
      }
   });
}
```

```js
if (fullscreen_support) requestFullscreen();
```

```js
if (fullscreen_support) exitFullscreen(window.document);
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

### Caching with Service Workers

```js
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('butterfly-store').then((cache) => cache.addAll([
      '',
      'index.html',
      'index.js',
      'src/style.css',
      'images/peacock-300.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

### Offline Page with Service Workers

```js
const OFFLINE_VERSION = 1;
const CACHE_NAME = 'offline';
const CACHE_URL = 'offline.html';

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.add(new Request(OFFLINE_URL, { chache: 'reload' }))
    })();
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode !== 'navigate') {
    return;
  }
  event.respondWith((async () => {
    try {
      const networkResponse = await fetch(event.request);
      return networkResponse;
    } catch () {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(OFFLINE_URL);
      return cachedResponse;
    }
  })());
});
```

**Service Worker**

Reload app, once back online
```js
window.addEventListener("online", () => {
  window.location.reload()
})
```

Fallback function
```js
async function checkNetworkAndReload() {
  try {
    const response = await fetch('.');
    if (response.status >= 200 & response.status < 500) {
      window.location.reload();
      return
    }
  } catch {
    // Do nothing, still offline
  }
  window.setTimeout(checkNetworkAndReload, 2500);
}
```

</section>

---

<section>

## Web Sharing API
```js
const overlay = document.querySelector("overlay");
const shareModal = document.querySelector("share-modal");
const shareButton = document.querySelector("share-button");
const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: `${title}`,
      url: `${url}`
    })
    .then(() => {
      console.log("Thanks for sharing!");
    })
    .catch(console.error);
  } else {
    overlay.classList.add("show-share");
    shareModal.classList.add("show-share");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("show-share");
  shareModal.classList.remove("show-share");
});
```


```js
const shareButton = document.getElementById("share-button")

shareButton.onclick = async (filesArray) => {
  if (navigator.canShare) {
    navigator.share({
      url: "https://yourapp.com",
      title: "PWAs are awesome",
      text: "I learned to build a PWA today."
    })
  }
}

// use files array
shareButton.onclick = async (filesArray) => {
  if (navigator.canShare) {
    navigator.share({
      files: filesArray,
      title: "PWAs are awesome",
      text: "I learned to build a PWA today."
    })
  }
}
```

</section>

---

<section>

## Geolocation API

```js
window.navigator.geolocation.getCurrentPosition(console.log)
```

</section>

---

<section>

## Device Motion API

Chrome Dev-Tools: Sensors Tab

```js
window.addEventListener("devicemotion", (event) => {
  console.log(event)
  event.acceleration
  event.acceleration.x

  event.rotationRate.beta
  event.rotationRate.gamma
})
```

</section>

---

<section>

## Gamepad API

```js
let frameId;

window.addEventListener("gamepadconnected", (event) => {
  console.log("A gamepad connected:", event.gamepad);

  frameId = window.requestAnimationFrame(animationFrame);
});

window.addEventListener("gamepaddisconnected", (event) => {
  console.log("A gamepad disconnected:", event.gamepad);

  window.cancelAnimationFrame(frameId);
});

function animationFrame() {
   var gamepads = navigator.getGamepads();
   console.log(gamepads);
}
```

</section>
