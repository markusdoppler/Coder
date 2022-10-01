---
title: "@ Rules"
---

# @ Rules

<section>

## `@import`

```css
@import url('fonts.css');
```

</section>

---

<section>

## `@charset`

```css
@charset "iso-8859-1";
```

</section>

---

<section>

## `@font-face`

```css
@font-face {
  font-family: Santiago;
  src: local("Santiago"), url("santiago.tt") format("truetype");
  src: url("santiago.woff2"); /* supported everywhere */
  unicode-range: U+??,U+100-220;
  font-size: all;
  font-family: sans-serif;
  font-display: swap;
}
```

</section>

---

<section>

## `@keyframes`

```css
@keyframes fade-in {
  to { opacity: 1; }
}
```

</section>

---

<section>

## `@supports`

```css
@supports (hover: hover) { 
  
}
```

```css
@supports (aspect-ratio: 1 / 1) { 
  .square {
    aspect-ratio: 1 / 1;
  }
}
```

```css
@supports (display: grid) {

}

@supports selector(:focus-visible) {
   
}
```


### Browser distinction

```css
@supports (-webkit-hyphens: none) { /* Safari only */ }
@supports (-moz-appearance: none) { /* Firefox only */ }
@supports (-webkit-tap-highlight-color: black) { /* Chrome, Edge, Opera only */ }
```

```css
@media (dynamic-range: high) {
   @supports (color(display-p3 0 .5 1)) {
     :where(html) {
       --link: color(display-p3 0 .5 1);
       --link-visited: color(display-p3 .6 .2 1);
     }
   }
}
```

```css
@supports selector(:focus-visible) {
  .custom-button:focus {
    /* Remove the focus indicator on mouse-focus for browsers
       that do support :focus-visible */
    outline: none;
    background: transparent;
  }
}
```

</section>

---

<section>

## `@media` Queries

```css
@media screen and (max-aspect-ratio: 3/4) {  }
@media screen and (orientation: landscape) {  }
```

```css
@media (prefers-reduced-motion: no-preference) {}
@media (prefers-reduced-motion: reduce) {}

@media (prefers-reduced-transparency: no-preference) {}
@media (prefers-reduced-transparency: reduce) {}

@media (prefers-reduced-data: no-preference) {}
@media (prefers-reduced-data: reduce) {}

@media (prefers-contrast: more) {}
@media (prefers-contrast: less) {}

@media (prefers-color-scheme: dark) {}
@media (prefers-color-scheme: light) {}

@media (orientation: portrait) {}
@media (orientation: landscape) {}

@media (inverted-colors) {}

@media (dynamic-range: high) {}

@media (pointer: fine) { /* ok to use small buttons/controls */ }
@media (hover: hover) { /* ok to use :hover-based menus */ }
@media (pointer: coarse) { /* make buttons and other “touch targets” bigger */ }
@media (hover: none), (hover: on-demand) { /* suppress :hover-based menus */ }
```

</section>

---

<section>

## `@container` Queries

```css
.card {
  contain: size layout;
}

@container (max-width: 850px) {
  .links {
    display: none;
  }

  .time {
    font-size: 1.25rem;
  }

  /* ... */
}
```

```css
.card-container {
  contain: inline-size / card-wrap;
}

@container card-wrap size(min-width: 850px) {
  .card {
    /* ... */
  }
}
```


### Container Query units

```css
1qw
1qh
1qi
1qb
1qmin
1qmax
```

</section>

---

<section>

## `@layer` Cascade Layers

1. layer (A, B, C) styles
2. unlayered styles
3. inline styles
4. CSS Animation
5. unlayered styles `!important`
6. layer (C, B, A) styles `!important`
7. inline styles `!important`
8. CSS transitions

```css
@layer A, B;

@import url('framework.css') layer(A.nested-layer);

@layer A {
  section {
    background-color: red;
  }
}
@layer B {
  section {
    background-color: red;
  }
}
```

</section>

---

<section>

## `@scroll-timeline`

```css
@scroll-timeline scolling {
  source: selector(body);
  scroll-offsets: selector(#horizontal-move) start 1,
              selector(#horizontal-move) end 1;
  start: 0;
  end: 100%;
  time-range: 1s;
}

@keyframes move {
  to {
    transform: translateX(calc(-100% + 100vw));
  }
}

#horizontal-move {
  animation: 1s move forwards;
  animation-timeline: scrolling;
}
```

</section>
