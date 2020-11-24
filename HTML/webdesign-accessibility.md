---
title: Accessibility
---

# Accessibility

<section>

# ARIA – Accessible Rich Internet Applications

`aria-label`
`aria-labelledby`
`aria-describedby`

`aria-expaned="false"`
`aria-controls="sect-id"`


Roles
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

## Accessibility topics

- Aria Labels
- `tab-index="1"`
- `.sr-only` class
- `alt` attribute for images

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
