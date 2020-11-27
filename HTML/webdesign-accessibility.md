---
title: Accessibility
---

# Accessibility

<section>

## Accessibility topics

- Semantic HTML
- Colour, Contrast
- Aria Labels
- `tab-index="1"`
- `.sr-only` class

</section>

---

<section>

## Tabindex

* link
* button
* inputs

Programmatically set `tab-index="-1"` to take element out of tab order.

Deque website --> skip to content

[Skip Nav](https://webaim.org/techniques/skipnav/)

</section>

---

<section>

## ARIA – Accessible Rich Internet Applications

* a11y = a*ccessibilit*y

### Resources
* [Semantics and ARIA by Google](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)
* [ARIA Techniques by Mozilla](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)


`aria-label`

`aria-labelledby`

`aria-describedby`

`aria-controls="sect-id"`

Aria Roles
`aria-expanded="true"`
`aria-expanded="false"`
`aria-checked`
`aria-label="label"`


```css
div[aria-expanded="true"]
```


### Roles
`role="button"`
`role="group"`
`role="region"`

```html
  <p id="item1">First item</p>
  <p id="item2">Second item</p>

  <div role="group" aria-labelledby="item1">
    <a href="javascript:" role="button" aria-labelledby="item1">Item Content</a>
  </div>
```


```html
  <p id="input-label">This is an input field</p>
  <div aria-labelledby="input" contenteditable="true"></div>
```

```html
  <div aria-label="This is an input field">
  </div>
```

</section>

---

<section>

## Semantic HTML

### HTML
* `lang` attribute on `<html>`

### Headings
* `<h1>` to `<h6>` accordingly
* only one `<h1>` per page

### Structure
* `<header>`
* `<main>`
* `<article>`
* `<section>`
* `<aside>`
* `<footer>`

### Buttons and Links
* decide `button` vs. `a`
* `a` leads somewhere

### Inputs
* `input` type

### Images
* `alt` attribute on image

### Style
* flexbox and grid order property should not change logical order

</section>

---

<section>

## Images

Always add `alt` text!
```html
<img width="1200" height="900"
     loading="lazy"
     src="butterfly.png"
     alt="a beautiful butterfly">
```

</section>

---

<section>

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```js
const isSafeToAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

if (isSafeToAnimate) {
  // do animation
}
```

</section>

---

<section>

## Dark Mode

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #000;
        color: white;
    }
}
```

```css
@media (prefers-color-scheme: light) {
    body {
        background-color: #FFF;
        color: black;
    }
}
```

```css
@media (prefers-color-scheme: no-preference) {

}
```

```js
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  document.querySelector("body").classList.add("dark");
}
```

</section>
