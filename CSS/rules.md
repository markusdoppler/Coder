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
  src: local ("Santiago"), url("santiago.tt") format("truetype");
  unicode-range: U+??,U+100-220;
  font-size: all;
  font-family: sans-serif;
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

</section>

---

<section>

## `@media` Queries

```css
@media screen and (max-aspect-ratio: 3/4) {  }
@media screen and (orientation: landscape) {  }
```

```css
@media (prefers-reduced-motion) {  }
@media (prefers-contrast) {  }
@media (prefers-reduced-transparency) {  }
@media (prefers-color-scheme) {  }
@media (inverted-colors) {  }
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

</section>
