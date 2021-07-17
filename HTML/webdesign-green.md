---
title: Green Webdesign
---

# Green Webdesign

<section>

## What is Green Webdesign

* Consious design with respect to limited amount of resources on earth
* Only download what is absolutely necessary for the current device and usecase
* ...

</section>

---

<section>

## Loading Optimization

* Only load first interaction code in the first loading phase!
* Serve content directly (as opposed to loading all content with JavaScript)
* Loading CSS blocks rendering
* Avoid render-blocking CSS and JavaScript
* DOM first, JavaScript enhances what's already there
* How much of the JavaScript loaded is actually used? (“Coverage” tab in Chrome Dev Tools)
* Bring fonts, CSS etc. on your own server

Preload
```html
<link rel="preload" as="image" href="" />
<link rel="preload" as="font" crossorigin href="" />
<link rel="preconnect" crossorigin />
```

loads when DOM is ready
```html
<script defer src=""> ... <script>
```

load in non-blocking manner
```html
<script async src=""> ... <script>
```

</section>

---

<section>

## Handling Images

- Load the smallest size necessary for the device you are on!

These technologies can help reduce image file sizes
* Compression of JPGs
* WebP
* SVG OM

</section>
