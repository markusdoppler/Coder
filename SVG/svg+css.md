---
title: SVG + CSS
---

# SVG + CSS

<section>

## Stroke

<svg width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path style="stroke: red; stroke-width: 10px; stroke-linejoin: round; fill: none; stroke-dasharray: 24 1;" d="M20 10 L50 70 L 90 20 Z">
  </g>
</svg>

Color and width
```css
stroke: red;
stroke-width: 3px;
```

Linecap
```css
stroke-linecap: round;
stroke-linecap: square;
stroke-linecap: butt;
```

Linejoin
```css
stroke-linejoin: round;
stroke-linejoin: miter;
stroke-linejoin: bevel;
```

Dash array
```css
stroke-dasharray: 5 5;
```

</section>

---

<section>

## Fill

Color fill
```css
fill: #6F327F;
```

Gradient fill (the gradient is defined using SVG tags)
```css
fill: url(#radialgradient);
```

</section>

---

<section>

## Filter
A SVG filter can be applied to an element using CSS
```css
.dropshadow {
  filter: url(#dropshadow);
}
.coloured {
  filter: url(#monochrome);
}
```

</section>