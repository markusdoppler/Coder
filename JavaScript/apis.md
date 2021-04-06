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


### Location

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
location.reload()
location.replace()
location.replace('http://www.ecosia.com')
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

## Resize Observer API

```js
const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    let container = entry.target;
    container.classList.toggle("small", entry.contentRect.width < 175);
  });
});

resizeObserver.observe(document.getElementById("format-panel"));
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

Registering the Web component
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

  // observing the following attributes, i.e. attributeChangedCallback() called when attribute modified
  static get observeredAttributes() {
    return ['name', 'data'];
  }
}
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
