---
title: DOM
---
<link href="../assets/style.css" rel="stylesheet">

# Document Object Model (DOM)


<section>

## Selecting DOM Elements

### Get Element(s)

Get element nodes for HTML tag, class, or id
```js
document.body
document.getElementsByTagName("p");
document.getElementsByClassName("class");
document.getElementById("id");
```


### Query Selector
returns the first instance for this query
```js
document.querySelector("div.selected")
```

returns a node list of elements for this query
```js
document.querySelectorAll(".selected")
```

### Matches

```js
e.target.matches("div")
```


</section>

---

<section>

## Accessing element node's properties

Nodes
```js
element.parentNode
parent.append("Hello from JS")
parent.append(element)
parent.appendChild(element)
element.remove()
parent.removeChild(element)

element.innerHTML
element.textContent // text including whitespace from HTML structure
element.innerText   // simple text
element.content

element.value
```

insertAdjacentHTML
```js
const childHTMLString = "<img src='bird.png' alt='bird'>";
parentElement.insertAdjacentHTML("beforeend", childHTMLString);
```

```js
element.replaceWith(node)
```

textContent
```js
document.getElementById("gamebutton").textContent = "Restart Game!";
```

content
```js
const templateContent = document.getElementsByTagName("template")[0].content;
```

appendChild
```js
const childImage = document.createElement("img");
childImage.src = "butterfly.png";
parent.appendChild(childImage);
```

cloneNode
```js
const template = document.createElement("template");
template.innerHTML = `<h3>Title</h3>`;
const node = template.content.cloneNode(true);
```



Attributes
```js
element.setAttribute("tabindex", -1)
element.getAttribute("src")
element.removeAttribute("class")

// image attributes
element.src
element.alt

// data attributes – <span data-index="1" data-vegetable-variety="spinach">Spinach</span>
element.dataset
element.dataset.index
element.dataset.vegetableVariety
```

Classes
```js
element.className
element.classList.add("new-class")
element.classList.add("mystyle", "anotherClass", "thirdClass")
element.classList.remove("highlight")
element.classList.contains('zoom')
element.classList.toggle("switched-on")
element.classList.toggle("switched-on", false)
element.classList.toggle("switched-on", el.width > 120)
element.classList.value
element.classList.length
element.classList.item(0)
```

Style
```js
element.style.display = "block";
element.style.border = "1px solid blue";
element.style.marginLeft = 0;
element.style.animationPlayState = `paused`;
element.style.setProperty("background", "#fff");

document.documentElement.style.cssText = `color: red;`;

const computedStyle = window.getComputedStyle(element);
computedStyle.getPropertyValue('margin')
```

StyleSheets
```js
document.styleSheets /* – stylesheets associated with a page */
document.styleSheets[0].cssRules
document.styleSheets[0].cssRules[0].type
document.styleSheets[0].cssRules[0].deleteRule(rule)
document.styleSheets[0].cssRules[0].appendRule(rule)
```

</section>

---

<section>

## DOM Traversal

```js
element.parentNode
```

```js
element.closest('button:not(.user)')
element.closest('dialog')
```

Cloning a node (pass parameter `true` for deep copy)
```js
const clonedNode = document.querySelector("#picture_template").cloneNode(true);
parent.appendChild(clonedNode);
```

</section>

---

<section>

## Measurements and Scroll

### Screen Measurements
```js
window.innerWidth
window.innerHeight

window.screen.width
window.screen.height
window.screen.availWidth
window.screen.availHeight

window.devicePixelRatio
```

```js
window.orientation
```

### Page and Element Measurements
```js
window.pageXOffset
window.pageYOffset

element.offsetTop
element.getBoundingClientRect().top

document.elementFromPoint(x, y)
```

jQuery's `offset()` in Vanilla
```js
var rect = document.querySelector("#container").getBoundingClientRect();
var offset = { 
  top: rect.top + window.scrollY, 
  left: rect.left + window.scrollX, 
};
console.log(offset);
```


### Scroll
```js
window.scroll({ top: 100, behavior: "smooth" })

window.scrollTo({ top: 100, behavior: "smooth" })

window.scrollBy(dx, dy)
window.scrollBy({ top: 100, behavior: "smooth" })

element.scrollIntoView(true) // align to top
element.scrollIntoView(false) // align to bottom
element.scrollIntoView({ block: "start", behavior: "smooth" })
element.scrollIntoView({ inline: "center", behavior: "smooth" })
```

</section>

---

<section>

## Text Manipulation

### Writing to the document

```js
document.write("");
```


### Text Selection

* [Selection and Range (javascript.info)](https://javascript.info/selection-range)

```js
let range = new Range();
range.setStart(node, offset);
range.setEnd(node, offset);
```
* `node` – text node or an element node
* If `node` is a text node, then `offset` must be the position in the text.
* If `node` is an element node, then `offset` must be the child number.

```js
window.getSelection();
document.getSelection().removeAllRanges();
document.getSelection().addRange(range);
```

### Input and text fields

Select contents of a text field
```js
document.querySelector("input").select();
```


</section>

---

<section>

## Document Fragment

```js
let fragment = new DocumentFragment()

for (let i = 1; i < 3; i++) {
   let li = document.createElement("li")
   li.innerHTML = i
   fragment.appendChild(li)
}

let list = document.querySelector("ul")
list.appendChild(fragment)
```

</section>

---

<section>

## Separate HTML Document

```js
const doc = document.implementation.createHTMLDocument();
doc.write('<div>'):
document.body.append(doc.body.firstChild);

// Stream HTML contents (div in the body will automatically update)
doc.write('<p>Hello'):
doc.write('world!</p>');
doc.write('<p>Yay!</p>');

doc.write('</div>'):
```

</section>

---

<section>

## Event Listeners

```js
window.addEventListener("load", () => alert("loaded DOM"));
```

For details see [Event Listeners](events.md).

**Mouse**: `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseover`, `mouseout`, `mouseup`
`mousewheel`, `wheel`, 

**Touch**: `touchstart`, `touchmove`, `touchcancel`, `touchend`

**Pointer**: `pointerdown`, `pointermove`, `pointerover`, `pointerout`, `pointerenter`, `pointerleave`, `pointerup`

**Gesture**: `gesturestart`, `gesturechange`, `gestureend`

**Keyboard**: `keydown`, `keypress`, `keyup`

**Device**: `devicemotion`, `deviceorientation`, `orientationchange`

**Frame**: `load`, `abort`, `error`, `beforeunload`, `unload`, 
`pageshow`, `pagehide`, 
`hashchange`, 
`resize`, 
`scroll`

**Form**: `change`, `input`, `select`, 
`focus`, `focusin`, `focusout`, `blur`, 
`invalid`, `reset`, `search`, `submit`

**Drag**: `drag`, `dragstart`, `dragend`, `dragenter`, `dragleave`, 
`drop`

**Animation**: `animationstart`, `animationend`, `animationiteration`

**Animation**: `animationstart`, `animationend`, `animationiteration`,
`transitionend`

**Media**: `abort`, `error`, `waiting`, `canplay`, 
`durationchange`, 
`loadstart`, `loadedmetadata`, `canplaythrough`, `loadeddata`, 
`play`, `pause`, `playing`, `ended`, 
`progress`, 
`timeupdate`, 
`ratechange`, 
`seeked`, 
`seeking`, 
`stalled`, 
`suspend`, 
`volumechange`

**Misc**: 
`message`, 
`online`, `offline`, 
`popstate`, 
`show`, 
`storage`, 
`toggle`, 

</section>

---

<section>

## Root object `window`

**Properties**
* `window.document`
* `window.console`

**Methods**
* `window.alert()`


Properties of the `window` object don't need to be specified.
<figure>

```js
window.setTimeout(() => {
  window.alert("Hi");
}, 3000)
```

```js
setTimeout(() => {
  alert("Hi");
}, 3000)
```

### call `parent` function from within iFrame

`parent` = parent's `window`

```js
// in document
function my_function() {
  // ...
}
```

```js
// in iframe
parent.my_function()
```

</figure>


### Browser APIs
* `window.navigator`
* `window.history`
* `window.localStorage`
* `window.sessionStorage`
* `document.cookie`

For details see [Browser APIs](apis).


### Which Browser am I running on?

```js
navigator.userAgent
```

**Other useful details**
```js
navigator.appCodeName
navigator.appName
navigator.appVersion
navigator.cookieEnabled
navigator.platform
navigator.systemLanguage
```

### Browser

Get all browser windows (not tabs)
```js
await browser.windows.getAll()
```
</section>

---

<section>

## `DOMPoint` and `DOMMatrix`

```js
const point = new DOMPoint(10, 20)
const matrix = new DOMMatrix("translate(10px, 15px)").rotate(30)

matrix.transformPoint(point)
```


**Draw a star mask**

```js
const createStar = ({ points = 5, x = 0, y = 0, size = 1 }) => {
  Array.from({ length: points * 2 }, (_, i) => 
    new DOMMatrix()
      .translate(x, y)
      .scale(size)
      .rotate((i / points) * 360)
      .translate(0, i % 2 ? -1 : -2)
      .transformPoint({ x: 0, y: 0 })
  )
}

function toCSSPolygon(points) {
  const pointsStr = points.map(point => `${point.x}px ${point.y}px`).join(', ')
  return `polygon(${pointsStr})`
}

const rect    = el.getBoundingClientRect() ;
const x       = rect.width / 2:
const y       = rect.height / 2;
const endSize = Math.sqrt(x**2 + y**2);
el.animate({
  clipPath: [
    toCSSPolygon(createStar({ x, y, size: 0 })),
    toCSSPolygon(createStar({ x, y, size: endSize })),
  ]
}, { duration: 500, easing: "ease-in" });
```

</section>

---

<section>

## Feature detection

```js
if (browser.contextMenus) {
  browser.contextMenus.create({ title: "Options...", ... })
}
```

```js
if ("IntersectionObserver" in window) {
  // ...
}
```


</section>

---

<section>

## `setTimeout`, `setInterval` and `requestAnimationFrame`

Functions
* `setTimeout(callback, timeout)`
* `window.clearTimeout(myTimeout)`
* `setInterval(callback, interval)`
* `window.clearInterval(myInterval)`
* `requestAnimationFrame(callback)`


### `setTimeout`
```js
var to = setTimeout(timeoutDone, 3000);

function timeoutDone() {
  alert("Your three seconds are up!");
}

function someEventToCancelTheTimeout() {
  clearTimout(to);
}
```


### `setInterval`
```js
var myVar = setInterval(timer, 1000);

function timer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(t);
}

function stopFunction() {
  clearInterval(myVar);
}
```

### `requestAnimationFrame`

```js
function animationStep(time) {
   // do some animations
   
   requestAnimationFrame(animationStep);
}
```


</section>
