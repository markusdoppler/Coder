---
title: SVG
---

<link href="../assets/style.css" rel="stylesheet">


# SVG

<section>

## Basics

**Viewport** is the size of the *viewable* area, determined by the `width` and `height` attributes.

**Viewbox** controls what shows up in the viewable area, determined by the `viewBox` attribute.

<figure class="fig-1-3">

<svg width="100px" height="100px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#226600" />
</svg>

```xml
<svg width="100px" height="100px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" />
</svg>
```

</figure>

</section>

---

<section>

## Useful References
* [MDN SVG Basic Shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
* [Clean SVG-File with SVG OMG](https://jakearchibald.github.io/svgomg/)
* [SVG.js](https://svgjs.com/docs/3.0/)

</section>

---

<section>

## Shapes

### Rectangle
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" rx="10" ry="10" width="80" height="80" stroke="gray" fill="transparent" stroke-width="5"/>
</svg>

```xml
<rect x="10" y="10" rx="10" ry="10" width="80" height="80" stroke="gray" fill="transparent" stroke-width="5"/>
```

</figure>


### Circle
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="red" fill="transparent" stroke-width="5"/>
</svg>

```xml
<circle cx="50" cy="50" r="40" stroke="red" fill="transparent" stroke-width="5"/>
```

</figure>

### Ellipse
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
</svg>

```xml
<ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
```

</figure>


### Line
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
</svg>

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
```

</figure>

### Polyline
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>
</svg>

```xml
<polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
    stroke="orange" fill="transparent" stroke-width="5"/>
```

</figure>


### Polygon
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>
</svg>

```xml
<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
    stroke="green" fill="transparent" stroke-width="5"/>
```

</figure>

### Path
<figure class="fig-1-3">
<svg width="100" height="100" viewBox="0 0 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

</figure>

</section>

---

<section>

## SVG Path

### SVG Path Vocabulary
move starting point
- `M` = move to

lines
- `L` = line to
- `H` = horizontal line to
- `V` = vertical line to

curves
- `C` = curve to
- `S` = smooth curve to
- `Q` = quadratic Bézier curve
- `T` = smooth quadratic Bézier curve to

arc
- `A` = elliptical arc

close path
- `Z` = close path

NB: Capital letters means **absolutely positioned**, lower cases means **relatively positioned**.


### Curves
![path nomenclature](../assets/SVG/path-nomenclature.svg "path nomenclature")

A curve takes three parameters:
1. the handle from the previous point [2]
2. the handle from the current point [1]
3. the current point [P]

```xml
<path d="M0 0 C30 30 80 10 100 0">
```

</section>

---

<section>

## SVG Gradient

### Radial Gradient

<figure class="fig-1-3">

<svg width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <radialGradient id="redish-radial-gradient" cx="40%" cy="40%" r="90%" fx="10%" fy="20%">
    <stop offset="20%" stop-color="#FFEFCB" />
    <stop offset="50%" stop-color="#F0846A" />
    <stop offset="70%" stop-color="#FF5699" />
    <stop offset="90%" stop-color="#C5363F" />
  </radialGradient>
  <g>
    <path fill="url(#redish-radial-gradient)" d="M0 0 L30 100 L 100 10 Z">
  </g>
</svg>


<div style="overflow-x: scroll">

```xml
<radialGradient id="redish-radial-gradient" cx="40%" cy="40%" r="90%" fx="10%" fy="20%">
  <stop offset="20%" stop-color="#FFEFCB" />
  <stop offset="50%" stop-color="#F0846A" />
  <stop offset="70%" stop-color="#FF5699" />
  <stop offset="90%" stop-color="#C5363F" />
</radialGradient>
```

apply via `fill` attribute
```xml
<path fill="url(#redish-radial-gradient)" class="path" d="M0 0 L30 100 L 100 10 Z">
```

or via CSS
```css
.path {
  fill: url(#redish-radial-gradient);
}
```

</div>
</figure>

</section>

---

<section>

## SVG Filter

### Drop shadow

<figure class="fig-1-3">

<svg width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="dropshadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="9" />
      <feOffset dx="10" dy="10" result="offsetblur" />
      <feFlood flood-color="#6F327F" flood-opacity="0.5" result="offsetColor" />
      <feComposite in="offsetColor" in2="offsetblur" operator="in" result="offsetBlur" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g>
    <path filter="url(#dropshadow)" fill="#6F327F" d="M20 10 L50 70 L 90 20 Z">
  </g>
</svg>

<div style="overflow-x: scroll">

```xml
<defs>
  <filter id="dropshadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="9" />
    <feOffset dx="10" dy="10" result="offsetblur" />
    <feFlood flood-color="#6F327F" flood-opacity="0.5" result="offsetColor" />
    <feComposite in="offsetColor" in2="offsetblur" operator="in" result="offsetBlur" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="offsetBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
```

apply filter via `filter` attribute
```xml
<path filter="url(#dropshadow)" fill="#6F327F" class="path-with-shadow" d="M20 10 L50 70 L 90 20 Z">
```

or via CSS
```css
.path-with-shadow {
  fill: #6F327F;
  filter: url(#dropshadow);
}
```

</div>

</figure>


### Colour filter

```
r = 1 - hex / 255 = 1
g = 1 - hex / 255 = 0.5
b = 1 - hex / 255 = 0.1
```

```svg
<svg>
   <defs>
      <filter id="monochrome" color-interpolation-filters="sRGB" x="0" y="0" height="100%" width="100%">
         <feComponentTransfer>
            <feFuncR type="gamma" amplitude="1" exponent="1" />
            <feFuncG type="gamma" amplitude="1" exponent="0.5" />
            <feFuncB type="gamma" amplitude="1"  exponent="0.1" />
         </feComponentTransfer>
      </filter>
   </defs>
</svg>
```

The filter can be applied to an element using CSS
```css
.element {
  filter: url(#monochrome);
}
```


</section>