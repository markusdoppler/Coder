---
title: Events
---

# Event Listener

<section>

## Adding an Event Listener

```js
image.addEventListener('load', function(e) { newPhotoIsDoneLoading(e); }, false);

document.ontouchstart = function(e){  }
```

<section>

---

<section>

## Mouse 

* [Mouse Events](https://javascript.info/mouse-events-basics#coordinates-clientx-y-pagex-y)

```js
section.addEventListener("mousedown", function(e) { handleTouchEnd(e); }, false);
section.addEventListener("mouseup", function(e) { handleTouchStart(e); }, false);
```

</section>

---

<section>

## Touch 

```js
window.addEventListener("touchstart", function(e){ handleTouchEvent(e); })

function handleTouchEvent(e) {
    var touchXAxis = e.target.pageX;
}

section.addEventListener("touchstart", function(e) { handleTouchEnd(e); }, false);
section.addEventListener("touchend", function(e) { handleTouchStart(e); }, false);
```

</section>

---

<section>

## Keyboard 

```js
window.addEventListener("keydown", function(e){ handleKeyboardEvent(e); })

function handleKeyboardEvent(e) {
if (e.keyCode === 39) {
    // ...
}
```

</section>


---

<section>

## Event

```js
function eventHandler(e) {
   console.log(e) // this is the event object
}
```

### Prevent default

```js
document.ontouchstart = function(e){
        e.preventDefault();
}
```

### Stop Propagation

```js
document.addEventListener("click", function(e){
        e.stopPropagation();
}
```

### Event Target

```js
e.target.parentNode.className
```

### Position – Mouse Down Event

Offset - distance to top left corner of the element clicked on
```js
e.offsetX
e.offsetY
```

Page
```js
e.pageX
e.pageY
```

Layer
```js
e.layerX
e.layerY
```

Client
```js
e.clientX
e.clientY
```

Screen
```js
e.screenX
e.screenY
```


</section>
