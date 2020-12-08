---
title: Animation
styles:
- ../assets/CSS/animations.css
---

# Transitions & Animation

<section>

## Transitions

```css
transition: all .15s ease;
```

<figure class="fig-1-3">

<div class="css-transition-box"></div>

```css
.box {
    background-color: navy;
    transition: background-color 1s ease;
}
.box:hover {
    background-color: aqua;
}
```

</figure>

</section>

---

<section>

## Animation

### Keyframes

```css
@keyframes my-animation {
    0%   {  }
    100% {  }
}
```

### Applying the animation

```css
animation-name: 
```

</section>

---

<section>

## Optimising Animations

Best properties in terms of performance to animate:
* `opacity`
* `transform`

Worst properties to animate in terms of performance (require repaint for every frame):
* `top`
* `bottom`
* `left`
* `right`

### Box-shadow

<figure class="fig-1-1">

<div class="overflow-box">

```html
<div class="real-box-shadow">Real Box Shadow</div>
```

```css
.real-box-shadow {
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0,0,0,0.2);
  transition: transform 1s ease, box-shadow 1s ease;
}
.real-box-shadow:hover {
  transform: translateY(-0.3rem) scale(1.02);
  box-shadow: 0 0.5rem 0.7rem -0.25rem rgba(0,0,0,0.5);
}
```

<div class="real-box-shadow">Real Box Shadow</div>

</div>
<div class="overflow-box">

```html
<div class="pseudo-box-shadow">Pseudo Box Shadow</div>
```

```css
.pseudo-box-shadow {
  position: relative;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(100,100,100,0.2);
  transition: transform 1s ease;
}
.pseudo-box-shadow:hover {
  transform: translateY(-0.3rem) scale(1.02);
}
.pseudo-box-shadow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  box-shadow: 0 0.5rem 0.7rem -0.25rem rgba(100,100,100,0.5);
  transition: opacity 1s ease;
}
.pseudo-box-shadow:hover::after {
  opacity: 1;
}
```

<div class="pseudo-box-shadow">Pseudo Box Shadow</div>

</div>

</figure>

</section>
