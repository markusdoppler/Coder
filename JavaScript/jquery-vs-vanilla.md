---
title: jQuery&Vanilla
---

<link href="../assets/style.css" rel="stylesheet">


# jQuery vs. Vanilla JavaScript

<section>

## Selecting elements

<figure>

```js
$('#el')
$('.card')
$('ul li')
```

```js
document.querySelector('#el')
document.querySelectorAll('.card')
document.querySelectorAll('ul li')
```

</figure>
</section>

---

<section>

## DOM Loaded

<figure>

<div>

```js
$(document).ready(function() {
  // Handler
});
```

```js
$(function() {
  // Handler
});
```

</div>
<div>

```js
window.onload = function() {
  // Handler
}
```

```js
window.addEventListener("load", function() {
  // Handler
});
```

Attention: executes immediately, not on page load!
```js
(function () {
  // Handler
})();
```

</div>
</figure>

</section>

---

<section>

## Event Handler

<figure>

```js
function handler() {
  $(this)
}
```

```js
function handler() {
  this
}
```

</figure>

</section>

