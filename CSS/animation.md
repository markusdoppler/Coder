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

**CSS Fade-In Transition**
```css
.box {
  transition: opacity 500ms ease-in-out;
  opacity: 0;
}
.box:hover {
  opacity: 1;
}
```


### Transition via JavaScript

DOM Events
* `transitionend`


#### JavaScript Fade-In Transition
```js
const element = document.createElement('div');
element.style.opacity = '0';
document.body.append(element);
getComputedStyle(element).opacity;
element.style.transition = 'opacity 500ms ease-in-out';
element.style.opacity = '1';
```

The `getComputedStyle(element).opacity` is essential here, otherwise the rendering engine never sees the opacity of `0`.


#### JavaScript Fade-Out Transition

```js
const animation = element.addEventListener('transitionend', (event) => {
  if (event.target !== element) return;
  element.remove();
});
```


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
animation-name: my-animation;
animation-duration: 400ms;
animation-timing-function: linear;
animation-delay: 0;
animation-iteration-count: infinite;

animation-fill-mode: forwards;
animation-fill-mode: both;

animation-direction: alternate;

animation-play-state: paused;
animation-play-state: running;
```

Shorthand
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```


Example
<figure class="fig-1-3">

<div class="spotlight-pulse-animation"></div>

<div>

```css
.spotlight-pulse-animation {
  animation-name: pulse-animation;
  animation-duration: 400ms;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: infinite;
}

@keyframes pulse-animation {
  0%   { transform: scale(1); }
  25%  { transform: scale(1.5); }
  75%  { transform: scale(0.5); }
  100% { transform: scale(1); }
}
```

</div>

## Animation via JavaScript

DOM Events
* `animationstart`
* `animationiteration`
* `animationend`
* `finish`

### CSS Fade-In Animation
```css
@keyframes fade-in {
  from { opacity: 0; }
}
@keyframes fade-out {
  to { opacity: 0; }
}
```

```js
const element = document.createElement('div');
element.style.animation = 'fade-in 500ms ease-in-out';
document.body.append(element);
```

### JavaScript Fade-Out Animation

```js
element.style.animation = 'fade-out 500ms ease-in-out';
element.addEventListener('animationend', (event) => {
  if (event.target !== element) return;
  element.remove();
});
```

</section>

---

<section>

## CSS Offset Path (Motion Path)

Example
<figure class="fig-1-3">

<div id="motion-demo"></div>

<div>

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

</div>

```css
.modal {
  transition: 1s;
  offset-path: path("M 250,100 S -300,500 -700,-200");
}
.modal.closed {
  offset-distance: 100%;
}
```

</section>

---

<section>

## Web Animations API

```js
element.animate(
  { opacity: '0.2' },
  { duration: 500, easing: 'ease-in-out', fill: 'forwards' }
);
```

* `animation.commitStyles();`
* `animation.cancel();`


### JavaScript Fade-In via Web Animation API
```js
const element = document.createElement('div');
document.body.append(element);
element.animate(
  { opacity: '0', offset: 0 },
  { duration: 500, easing: 'ease-in-out' }
);
```

### JavaScript Fade-Out via Web Animation API
```js
const fade_out_animation = element.animate(
  { opacity: '0' },
  { duration: 500, easing: 'ease-in-out' }
);

// via promise
fade_out_animation.finished.then(() => element.remove());

// via event
fade_out_animation.onfinish = () => element.remove();
```


```js
const fade_out_animation = element.animate(
  { opacity: '0.2' },
  { duration: 500, easing: 'ease-in-out', fill: 'forwards' }
);
```

```js
function animateTo(element, keyframes, options) {
  const animation = element.animate(
    keyframes, 
    { ...options, fill: 'both' }
  );
  animation.addEventListener('finish', () => {
    animation.commitStyles();
    animation.cancel();
  });
  return animation;
}
```

```js
document.getAnimations();
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

Further enhancements
```css
will-change: transform;
```


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

---

<section>

## Easing Curves

```css
.particle {
  transition: transform 200ms linear;
  transition: transform 200ms ease;
  transition: transform 200ms ease-in;
  transition: transform 200ms ease-in-out;
  transition: transform 375ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 200ms cubic-bezier(0, .8, .13, 1);
}
```

</section>
