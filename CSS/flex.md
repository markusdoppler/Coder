---
title: Flex
---

# Flexbox

<section>

## Flex Box Layout

<figure class="fig-1-3">

<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; border: 2px solid navy;">
  <div style="width: 30%; height: 50%; background: maroon; border-radius: 50%;"></div>
</div>

```css
display: flex;
justify-content: center;
align-items: center;
```

</figure>

### Flex direction

```css
flex-direction: column;
```

### Flex Wrap

```css
flex-wrap: wrap;
```

### Flex Grow, Flex Shrink, Flex Basis
applied to the child within a `display: flex` container
```css
flex: flex-grow flex-shrink flex-basis;
```

<figure class="fig-1-3">

<div style="width: 100%; height: 10rem; display: flex; border: 2px solid navy;">
  <div style="width: 100%; height: 100%; border: 2px solid gray; flex: 0 1 30%;"></div>
  <div style="width: 100%; height: 100%; border: 2px solid gray; flex: 1 0 30%;"></div>
</div>

```css
.flex-container {
  display: flex;
}
.flex-child-1 {
  flex: 0 1 30%;
}
.flex-child-2 {
  flex: 1 0 30%;
}
```

Shorthand
```css
flex: 1;

/* shorthand for */
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```

</figure>

</section>