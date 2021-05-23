---
title: Images
---

# Images

<section>

## Attributes for the `img` Tag

```html
  <img src="butterfly.png" alt="a butterfly" />
```

* `src`

Empty base-64 encoded image (may be used as placeholder)
```html
<img src="data:,">
```

* `alt`

* `height` and `width`

* `srcset`
    * Typically four sizes are provided: normal, 2x, 3x, and 4x.
    * Good practise: state `width` and `height` attributes as well

```html
  <img srcset="url size,
               url size,
               url size "
       src="default-url" >
```

* The `srcset` attribute allows you to specify a list of image file URLs, along with size descriptions. You also need to still use the `src` attribute to identify a "default" image source, to be used in browsers that don’t support `srcset`.

Using image densities
```html
  <img srcset="butterfly-4x.png 4x,
               butterfly-3x.png 3x,
               butterfly-2x.png 2x,
               butterfly-1x.png 1x"
       src="butterfly-default.png" >
```

Using image widths
```html
<img srcset="butterfly-4x.png 4025w,
             butterfly-3x.png 3019w,
             butterfly-2x.png 2013w,
             butterfly-1x.png 1006w"
      src="butterfly-default.png" >
```

* `type`

e.g. `type="image/png"`, `type="image/jpg"`, `type="image/webp"`

### Other attributes
* `longdesc` - Defines a URL at which can be found more information about the image. It was written out of the HTML5 specification, but its status is not quite so clear as other deprecated features.
* `lowsrc` - Specified a smaller or lower-quality version of an image.
* `usemap` - Specifies a client-side image map to be used with the image.
* `ismap` - Identifies an image as a server-side image map. When the containing anchor link is clicked, the coordinates of the mouse will be included in the request.

</section>

---

<section>

## Responsive Images

### Responsive Images using just `<img>`

First and foremost: To avoid jumping pages while the image loads, add `width` and `height` properties.
```html
<img width="1200" height="900"
     loading="lazy"
     src="butterfly.png"
     alt="a beautiful butterfly">
```

Responsive image with respect to displayed width
```html
<img src="butterfly.png"
     srcset="butterfly-400w.png 400w,
             butterfly-800w.png 800w,
             butterfly-1400w.png 1400w"
     alt="a beautiful butterfly">
```

Responsive image with respect to DPR (device pixel ratio)
```html
<img src="butterfly.png"
     srcset="butterfly@3x.png 3x,
             butterfly@2x.png 2x,
             butterfly@1x.png"
     alt="a beautiful butterfly">
```

Responsive image with respect to its (approximate) size on screen
```html
<img src="butterfly.png"
     srcset="butterfly-400w.png 400w,
             butterfly-800w.png 800w,
             butterfly-1400w.png 1400w"
     sizes="(min-width: 960px) calc( 100vw / 2 + 2rem ), 100vw"
     alt="a beautiful butterfly">
```


### Responsive Images using `<picture>` and `<source>`

**Note**: Apply any styles to the `img` element, not `picture`!

Load images with respect to screen size
```html
<picture>
  <source media="(min-width: 1400px)"
          srcset="image-extra-large.png">
  <source media="(min-width: 960px)"
          srcset="image-large.png">
  <source srcset="image-small.png">
  <img src="image-all-purpose.png" alt="a beautiful butterfly">
</picture>
```

Load images with respect to screen size **and display size**
```html
<picture>
  <source media="(min-width: 1400px)"
          srcset="image-extra-large-400w.png 400w,
                  image-extra-large-800w.png 800w,
                  image-extra-large-1400w.png 1400w">
  <source media="(min-width: 960px)"
          srcset="image-large-300w.png 300w,
                  image-large-600w.png 600w,
                  image-large-960w.png 960w">
  <source srcset="image-small-200.png,
                  image-small-400.png,
                  image-small-600.png">
  <img src="image-all-purpose.png" alt="a beautiful butterfly">
</picture>
```

Load images with new file types
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="fallback-image.png" alt="a beautiful butterfly">
</picture>
```

Load images with respect to the device's **pixel density**
```html
<picture>
  <source srcset="image@3x.webp 3x,
                  image@2x.webp 2x,
                  image@1x.webp" type="image/webp">
  <img src="fallback-image.png" alt="a beautiful butterfly">
</picture>
```

</section>

---

<section>

## Lazy Loading

Lazy Loading of normal image
```html
<img loading="lazy" src="butterfly.png" alt="a beautiful butterfly">
```

**No** lazy loading
```html
<img loading="eager" src="butterfly.png" alt="a beautiful butterfly">
```


Lazy Loading of image defined using `<picture>`
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img loading="lazy" src="fallback-image.png" alt="a beautiful butterfly">
</picture>
```

<section>

---

<section>

## Styling Images

Responsive full-width image
```css
img {
  max-width: 100%;
  height: auto;
}
```

Background image behaviour with `object-fit` property
```css
img {
  width: 500px;
  height: 500px;
  object-fit: contain;
}
```

### Gap underneath image!?

* Images are `inline` elements, they "sit" on the baseline, i.e. they reserve space for letters that go below the baseline, e.g. "p", "q", etc.

```css
img {
  display: block;
}
```

</section>

---

<section>

## Handling images with JavaScript

Check whether image loads
```js
const image_src = "/assets/images/flower.jpg";
let img = new Image();
img.onload = function() { console.log('✅'); }; 
img.onerror = function() { console.log('❌'); };
img.src = image_src;
```

</section>