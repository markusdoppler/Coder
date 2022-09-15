---
title: Meta
---

# Meta


<section>

## Overview


**Charset**
```html
<meta charset="utf-8">
```

**Description**
```html
<meta name="description" content="Search for scalar top quark pair production in the dilepton final state at 13 TeV in the full Run2 dataset">
```

**Viewport**
```html
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
```

**HTTP header**

Content Type
```html
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

Content Policy
```html
<meta http-equiv="content-security-policy" content="default-src 'self'">

<meta http-equiv="Content-Security-Policy" content="default-src *; img-src * 'self' data: https: http:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *">
```

Refresh document every 30 seconds
```html
<meta http-equiv="refresh" content="30">
```

</section>

---


<section>

## Viewport

Viewport Height & Width

```html
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="height=device-height">
```

Viewport Scale
* `initial-scale=1`: ([`0`, `10`], default `1`) ratio between the device height, while in a portrait orientation, and the viewport size; in landscape mode this would be the ratio between the device width and the viewport size
* `minimum-scale`: [`0`, `10`] should be a positive integer lower than or equal to the `initial-scale`
* `maximum-scale`: [`0`, `10`] should be a positive integer greater than or equal to the `initial-scale`
* `user-scalable`: [`yes`, `no`] turn on/disable any zooming

```html
<meta name="viewport" content="initial-scale=1">
<meta name="viewport" content="minimum-scale=0">
<meta name="viewport" content="maximum-scale=10">
<meta name="viewport" content="user-scalable=yes">
<meta name="viewport" content="user-scalable=no">
```

Fit the viewport
```html
<meta name="viewport" content="viewport-fit=cover">
```
```html
<meta name="viewport" content="shrink-to-fit=no">
```


Viewport Resolution
* `target-density-dpi`: [`device-dpi`, `high-dpi`, `medium-dpi`, `low-dpi`, number]

```html
<meta name="viewport" content="target-densitydpi=device-dpi">
```


Combining Viewport Values

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

</section>

---

<section>

## Theme Color and Color Scheme

```html
<meta name="theme-color" content="#ecd96f">
<meta name="theme-color" content="#ecd96f" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0b3e05" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="Canvas">

<meta name="color-scheme" content="light dark">
```

</section>

---

<section>

## Link

### Stylesheets
```html
<link rel="stylesheet" media="all" href="style.css">
```


### Favicon
```html
<link rel="icon" href="favicon.png" sizes="16x16">
<link rel="icon" href="favicon.png" sizes="32x32">
<link rel="icon" href="favicon.png" sizes="96x96">
<link rel="icon" type="image/svg+xml" href="/images/favicons/favicon.svg" sizes="any">
<link rel="icon" type="image/png" href="/images/favicons/favicon-196x196.png" sizes="196x196">
<link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png" sizes="16x16">
<link rel="icon" type="image/png" href="/images/favicons/favicon-128.png" sizes="128x128">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" type="image/png" href="/assets/favicon.png">
<link color="rgb(226, 67, 41)" href="mask.svg" rel="mask-icon">
```


### Apple Touch Icon
```html
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="128x128">

<link rel="apple-touch-icon" type="image/x-icon" href="iPhone.png">
<link rel="apple-touch-icon" type="image/x-icon" href="iPad.png" sizes="76x76">
<link rel="apple-touch-icon" type="image/x-icon" href="iPhoneRetina.png" sizes="120x120">
<link rel="apple-touch-icon" type="image/x-icon" href="iPadRetina.png" sizes="152x152">
```

### MS Application
```html
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms_title_image.png">
```

</section>

---

<section>

## SEO

### Canonical URL
```html
<link rel="canonical" href="https://www.markusdoppler.at">
```

### Web Crawlers

don't index the page
```html
<meta name="robots" content="noindex" />
```

don't index the page and don't follow any links on the page
```html
<meta name="robots" content="noindex, nofollow">
```


### SEO Open Graph
* [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/)

```html
<meta property="og:title" content="Facebook Open Graph META Tags"/>
<meta property="og:image" content="http://www.markusdoppler.at/seo.png"/>
<meta property="og:image:alt" content="Markus Doppler's logo is a butterfly.">
<meta property="og:url" content="http://www.markusdoppler.at"/>
<meta property="og:site_name" content="Markus Doppler"/>
<meta property="og:type" content="website"/>
<meta property="og:description" content=""/>
<meta property="og:site_name" content="Markus Doppler">
<meta property="og:locale" content="de_DE">
```

### SEO Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Markus Doppler">
<meta name="twitter:description" content="Markus Doppler">
<meta name="twitter:image" content="http://www.markusdoppler.at/seo.png">
```

</section>

---

<section>

## Image sizes

|      Device or Context      |    Image size    |          Details          |
|:---------------------------:|:----------------:|:--------------------------|
| **Favicon**           	    |                  |                           |
|                             | 16px × 16px      |                           |
|                             | 32px × 32px      |                           |
|                             | 96px × 96px      |                           |
| **Apple Touch Icon**        |                  |                           |
| iPhone	                    | 180px × 180px    | (60pt × 60pt @3x)         |
| iPhone (X/Plus)	            | 120px × 120px    | (60pt × 60pt @2x)         |
| iPad Pro	                  | 167px × 167px    | (83.5pt × 83.5pt @2x)     |
| iPad, iPad mini	            | 152px × 152px    | (76pt × 76pt @2x)         |
| **OG Image**         	      |                  |                           |
| Facebook                    | 1200px × 630px   | 1.91:1 (images will be cropped to this ratio!) |
| Reddit                      | 70px × 70px      | 1:1                       |


</section>