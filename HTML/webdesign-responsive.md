---
title: Responsive Webdesign
---

# Responsive Webdesign

<section>

## Viewport

Follow the width of the device
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

_Best Practise_: add viewport information via CSS rather than using `<meta>` tags

```css
@viewport {
    width: device-width;
    zoom: 1;
}
```

### Flexible Media

as the viewport gets smaller any media will scale down according to its containers width

```css
img, video, canvas {
    max-width: 100%;
}
```

**Flexible Embedded Media**

1. `position: absolute`: embedded element needs to be `absolute`ly positioned within a parent element
2. `width: 100%` on the parent element: scale based on the width of the viewport
3. `height: 0` on the parent element: trigger the `hasLayout` mechanism within Internet Explorer
4. `padding-bottom: 56.25%` for video with 16:9 aspect ratio

```css
<figure>
    <iframe src="https://www.youtube.com/embed/4Fqg43ozz7A"></iframe>
</figure>


figure {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 */
}
iframe {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
}
```

</section>

---

<section>

## Flexible Layouts

Flexible grids are built using _relative length units_, most commonly `%` or `em` units.

These relative lengths are then used to declare common grid property values such as `width`, `margin`, or `padding`

### Relative Viewport Lengths

Viewports width
```css
vw
```

Viewports height
```css
vh
```

Minimum of the viewport’s height and width
```css
vmin
```

Maximum of the viewport’s height and width
```css
vmax
```

### Minimum and Maximum Height / Width

```css
min-width
max-width
min-height
max-height
```

</section>

---

<section>

## Media Queries

* Option 1

```html
<!-- Separate CSS File -->
<link href="styles.css" rel="stylesheet" media="all and (max-width: 1024px)">
```

* Option 2 (preferred)

```css
/* @media Rule */
@media all and (max-width: 1024px) {...}
```

* Option 3

```css
/* @import Rule */
@import url(styles.css) all and (max-width: 1024px) {...}
```

*Media Types*
* `all`
* `screen` (default)
* `print`
* `tv`
* `braille`
* `3d-glasses`

*Media Feature*
has to allocate to _true_ to be applied

Prefix
* `min-`: _greater than or equal to_
* `max-`: _less than or equal to_

Height & Width (+ min/max)
* `height`: height of the viewport rendering area, the browser window for example
* `width`: width of the viewport rendering area

```css
(min-width: 300px)
(max-width: 1000px)
```

Orientation
* `orientation: landscape`: display is wider than taller
* `orientation: portrait`: display is taller than wider

Aspect Ratio (+ min/max)
* `aspect-ratio: width/height`
* `device-aspect-ratio: 16/9`

Pixel Ratio (+ min/max)
* `pixel-ratio: 1.3`
* `device-pixel-ratio`

Resolution (+ min/max)
* `resolution: 1.3dppx`
* `device-pixel-ratio: 300dpi`
* `300dpi`: dots per inch
* `1.3dppx`: dots per pixel
* `1.3dpcm`: dots per centimeter

Other
* `color`
* `color-index`
* `monochrome`
* `grid`
* `scan`

**Logical operators**
* `and`
* `not`
* `only`

When using the `not` and `only` logical operators the media type may be left off. In this case the media type is defaulted to `all`.


```css
@media all and (min-width: 800px) and (max-width: 1024px) { ... }
```

```css
@media all and (orientation: landscape) {...}
```

```css
@media not screen and (color) {...}
```

```css
@media all and (min-device-aspect-ratio: 16/9) {...}
```

```css
@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
        only screen and (min-device-pixel-ratio: 1.3) {...}
```

`only` is a new operator thus hiding the styles from devices or browsers that don’t support media queries

```css
@media only screen and (orientation: portrait) {...}
```

### Mobile first

Default styles first

```css
@media screen and (min-width: 400px)  {...}
@media screen and (min-width: 600px)  {...}
@media screen and (min-width: 1000px) {...}
@media screen and (min-width: 1400px) {...}
```

_Best Practise_: try to avoid CSS3 shadows, gradients, transforms, and animations within mobile styles


### Media queries examples

Media query with respect to width of the browser window
```css
@media only screen and (min-width: 768px) {
  body {
    background-color: aliceblue;
  }
}
```

Media query with respect to device width
```css
@media only screen and (min-device-width: 768px) {
  body {
    background-color: aliceblue;
  }
}
```

Media Query following the **Mobile First** approach.
```css
body {
  background-color: maroon;
}

@media only screen and (min-width: 600px) {
  body {
    background-color: orange;
  }
}

@media only screen and (min-width: 768px) {
  body {
    background-color: aliceblue;
  }
}

@media only screen and (min-width: 992px) {
  body {
    background-color: gray;
  }
}

@media only screen and (min-width: 1200px) {
  body {
    background-color: navy;
  }
}
```


Media queries with respect to device orientation
```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

</section>

---

<section>

## Responsive Images

Responsive full width image
```css
img {
  max-width: 100%;
  height: auto;
}
```

Responsive background image
```css
div {
  width: 100%;
  height: 400px;
  background-image: url('butterfly.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: 50% 50%;
}
```

</section>
