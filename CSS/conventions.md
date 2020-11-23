---
title: Conventions
---

# Conventions

<section>

## CSS Reset

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}   

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}   

body {
    line-height: 1;
}   

ol, ul {
    list-style: none;
}   

blockquote, q {
    quotes: none;
}   

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}   

table {
    border-collapse: collapse;
    border-spacing: 0;
}   
```

</section>

---

<section>

## My CSS Property Convention

```css
div {
   display
   position

   /* box-property values */
   width
   height
   margin
   border
   padding

   /* colors */

   /* fonts */
}
```

</section>

---

<section>

## BEM – Block-Element-Modifier

* **Block** – the component
* **Element** - the element within the compontent
* **Modifier** - a variation of an element

<figure>

```css
.card {

}
.card .card-title {

}
.card--dark .card-title {

}
```

```html
<section class="card">
    <h3 class="card-title"></h3>
    <img class="card-img" src="img.png"/>
</section>

<section class="card card--dark">
    <h3 class="card-title"></h3>
    <img class="card-img" src="img.png"/>
</section>
```

</figure>

</section>

---

<section>

## Baseline Sizing

Define your baseline from the `line-height` of your smallest text element, like the body text.

Total height of an object adds up to a multiple of the baseline.

```css
h1 {
   font-size: 2.5em;
   line-height: 1.1em;
   margin-bottom: 22px;
}
h2 {
   font-size: 1.625em; /* 26px/16px */
   line-height: 1.269em; /* 33px/26px */
   margin-bottom: 11px;
}
p {
   font-size: 0.875em; /* 16px is the default em size */
   line-height: 1.5714285714285714em; /* = 22px/14px */
   margin-bottom: 22px;
}
```

</section>
