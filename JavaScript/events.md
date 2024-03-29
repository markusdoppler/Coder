---
title: Events
---

# Event Listener

<section>

## Adding an Event Listener

```js
image.addEventListener('load', function(e) { newPhotoIsDoneLoading(e); }, false);

document.ontouchstart = function(e){  }

element.onclick.addListener((event) => {})

element.onclick = function () {}

window.onload = function () {}
```

### Adding an Event Listener from HTML

```html
<body onload="load();"></body>
```

### Removing an Event Listener

```js
window.removeEventListener("keydown", handlerFunction);
```


### Prevent default event handling
* prevent "Submit" button from submitting a form, or
* prevent a link from following the URL,
* prevent from scrolling
```js
event.preventDefault();
```

Check whether event can actually be cancelled
```js
if (event.cancelable) {
  event.preventDefault();
}
```

</section>

---

<section>

## Event Propagation

```js
const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
```

**Capture Phase**
  * Document
  * Grandparent
  * Parent
  * Child
**Bubble Phase**
  * Child
  * Parent
  * Grandparent
  * Document


### Capture
```js
grandparent.addEventListener("click",
  e => {
    // ...
  },
  { capture: true }
)
```

### Stop Event Propagation
```js
grandparent.addEventListener("click", 
  e => {
    e.stopPropagation()
  },
  { capture: true }
)
```

### One-time event listener
```js
grandparent.addEventListener("click", 
  e => {
    // ...
  },
  { once: true }
)
```


### Stop Event Propagation
* prevent further propagation of an event through the DOM (offspring -> ancestors)
```js
event.stopPropagation();
```

### Target DOM Element
```js
var target = event.target;
console.log(target.classname);
```

</section>

---

<section>

## Load Events

`DOMContentLoaded` – after DOM is loaded (before `img` and CSS)
```js
document.addEventListener("DOMContentLoaded", function(){
    //....
});
```

`load` – after everything is loaded and parsed
```js
window.addEventListener("load", function(){
    // ....
});
```

### Page show and hide

```js
window.addEventListener("pageshow", () => {  });
window.addEventListener("pagehide", () => {  });
```

</section>

---

<section>

## List of user input events

Mouse
* `mousemove`
* `mouseover`
* `mouseout`
* `mouseenter`
* `mouseleave`
* `mousedown`
* `mouseup`
* `click`
* `mousewheel`

Touch
* `touchstart`
* `touchmove`
* `touchend`
* `touchcancel`
* `touchforcechange`

Pointer
* `pointermove`
* `pointerdown`
* `pointerup`
* `pointerover`
* `pointerout`
* `pointerenter`
* `pointerleave`

Gesture
* `gesturestart`
* `gesturechange`
* `gestureend`

Device
* `devicemotion`
* `deviceorientation`
* `orientationchange`

Keyboard
* `keydown`
* `keypup`
* `keypress`

</section>

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

section.addEventListener("touchstart", function(e) { handleTouchStart(e); }, false);
section.addEventListener("touchmove", function(e) { handleTouchMove(e); }, false);
section.addEventListener("touchend", function(e) { handleTouchEnd(e); }, false);
```

</section>

---

<section>

## Pointer Events

```js
canvas.addEventListener("pointerdown", startPointer)
canvas.addEventListener("pointermove", movingPointer)
canvas.addEventListener("pointerup",   endPointer)

function startPointer(e) {

}
function endPointer(e) {

}
function movingPointer(e) {
  const coords = {
    client: { x: e.clientX, y: e.clientY },
    offset: { x: e.offsetX, y: e.offsetY },
    page: { x: e.pageX, y: e.pageY },
    screen: { x: e.screenX, y: e.screenY },
    movement: { x: e.movementX, y: e.movementY },
    e: { x: e.x, y: e.y },
  }
  console.table(coords)
  
  console.log(e.pressure, e.webkitForce)
  console.log(e.altitudeAngle, "", e.azimuthAngle, e.tiltX, e.tiltY)
}
```

</section>

---

<section>

## Keyboard 

```js
window.addEventListener("keydown", function(e){ handleKeyboardEvent(e); })
window.addEventListener("keypress", function(e){ handleKeyboardEvent(e); })

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

---

<section>

## List of Events
* [W3Schools](https://www.w3schools.com/jsref/dom_obj_event.asp)

TouchEvent
* `touchstart`
* `touchmove`
* `touchcancel`
* `touchend`

MouseEvent
* `mouseenter`
* `mouseleave`
* `mousemove`
* `mouseover`
* `mouseout`
* ---
* `mousedown`
* `mouseup`
* `click`
* `dblclick`
* `contextmenu` (right click)

KeyboardEvent
* `keydown`
* `keyup`
* `keypress`

DragEvent
* `drag`
* `dragend`
* `dragenter`
* `dragleave`
* `dragover`
* `dragstart`
* `drop`

WheelEvent
* `wheel`

FocusEvent
* `focusin`
* `focusout`
* `focus`
* `blur`

ClipboardEvent
* `cut`
* `copy`
* `paste`


### Event Properties and Methods

Event
```js
preventDefault()
stopPropagation()
stopImmediatePropagation()
target
timeStamp
```

MouseEvent
```js
clientX     // horizontal coordinate relative to the current window, when event was triggered
clientY
MovementX   // horizontal coordinate relative to the position of the last mousemove event
MovementY
offsetX     // horizontal coordinate relative to the position of the edge of the target element
offsetY
pageX       // horizontal coordinate elative to the document, when event was triggered
pageY
screenX     // horizontal coordinate relative to the screen, when event was triggered
screenY
```

Touch Event
```js
clientX     // horizontal coordinate relative to the current window
clientY
touches     // list of all touch objects on the surface
targetTouches   // list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element
changedTouches  // list of all the touch objects whose state changed since the previous touch
```

KeyboardEvent
```js
code    //
key     // key value
keyCode // Unicode character code of the key
repeat
```

Keyboard Codes
|  code  |  key  |
|:------:|:-----:|
|  `65`  |  `a`  |
|  `68`  |  `d`  |
|  `75`  |  `k`  |
|  `73`  |  `i`  |
|  `78`  |  `n`  |
|  `80`  |  `p`  |
|  `82`  |  `r`  |
|  `83`  |  `s`  |
|  `86`  |  `v`  |

ClipboardData
```js
clipboardData
```

WheelEvent
```js
deltaX
deltaX
deltaX
deltaMode  // pixels, lines or pages
```

</section>

---

<section>

## Custom Event

```js
const element = document.querySelector(".element");
```

Sender
```js
element.dispatchEvent(new CustomEvent("value", { detail: this.value }));
```

Receiver
```js
element.addEventListener("value", ({ detail }) => console.log(detail));
```

</section>
