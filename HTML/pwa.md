---
title: PWA
---

# PWA

<section>

## Add to Home screen – A2HS

**Requirements**
* Webapp served over HTTPs
* manifest file
* homescreen icon
* (Chrome: also requires a registered service worker)

</section>

---

<section>

## Icons and Artwork

Icon
```html
<link rel="icon" type="image/jpeg" sizes="196x196" href="favicon-196.jpg">
```

Apple Touch Icon
```html
<link rel="apple-touch-icon" sizes="180x180" href="favicon-180.jpg">
<link rel="apple-touch-icon" sizes="167x167" href="favicon-167.jpg">
<link rel="apple-touch-icon" sizes="152x152" href="favicon-152.jpg">
<link rel="apple-touch-icon" sizes="120x120" href="favicon-120.jpg">
```

Apple Touch Startup Image
```html
<link rel="apple-touch-startup-image" href="apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="apple-splash-2732-2048.jpg" media="(device-width: 1366px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
<!-- other screen sizes and resolutions -->
```

**iOS Device Sizes**
iPhone
* `414x896`   @3x
* `375x812`   @3x
* `414x896`   @2x
* `414x736`   @3x
* `375x667`   @2x iPhone 7 – 1334 x 750 px
* `320x568`   @2x
iPad
* `1024x1366` @2x
* `834x1194`  @2x
* `768x1024`  @2x
* `834x1112`  @2x
* `810x1080`  @2x

</section>

---

<section>

## Meta tags

### Web-App capable
```html
<meta rel="apple-mobile-web-app-capable" content="yes">
```

### Status bar style
white
```html
<meta name="apple-mobile-web-app-status-bar-style" content="default">
```

black
```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

translucent for dark background-color
```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```


### Viewport not scalable (for more native feeling)
```html
<meta rel="viewport" content="initial-scale=1, viewport-fit=cover, user-scalable=no">
```

</section>

---

<section>

## CSS

### Safe areas
```css
env(safe-area-inset-top)
env(safe-area-inset-bottom)
env(safe-area-inset-left)
env(safe-area-inset-right)
```

## adjust header for standalone mode (display color behind statusbar)
```css
header {
  height: 44px;
}
@media screen and (display-mode: standalone) {
  header {
    height: 88px;
  }
}
@media screen and (display-mode: fullscreen) {
  header {
    height: 88px;
  }
}
```

```css
body {
  -webkit-tap-highlight-color: transparent;
}
```

</section>

---

<section>

## JavaScript

### Detect whether app is in standalone mode
```js
if ((navigator.standalone === true) || (window.matchMedia('(display-mode: standalone)'.matches)) {
  // PWA is installed (and therefore fullscreen)
}
```

### Web Sharing API
See [Web Sharing API](../JavaScript/apis.md).

</section>

---

<section>

## Webapp Manifest

`webapp.manifest`
```json
{
  "name": "Recipes",
  "short_name": "Recipes",
  "lang": "en",
  "start_url": "index.html",
  "description": "Collect your Recipes",
  "display": "fullscreen",
  "orientation": "portrait",
  "theme_color": "green",
  "background_color": "green",
  "icons": [
    {
      "src": "icons/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### App Shortcuts
Quickly jump to a specific section in the 
```json
"shortcuts": [
  {
    "name": "Recipes' Home",
    "short_name": "Home",
    "description": "...",
    "url": "index.html?page=home",
    "icons": [
      {
        "src": "icons/icon.png",
        "sizes": "192x192",
        "type": "image/png"
      }
    ]
  }
]
```

### Share target
Share contents with the webapp via the system's share-sheet
```json
"share_target": {
  "action": "/share-photo",
  "method": "POST",
  "enctype": "multipart/form-data",
  "params": {
    "title": "name",
    "text": "description",
    "url": "link",
    "files": [
      {
        "name": "photos",
        "accept": "image/png"
      }
    ]
  }
}
```

</section>





