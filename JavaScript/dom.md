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

</section>

---

<section>

## Accessing element node's properties

Nodes
```js
element.parentNode
element.appendChild(childElement)

element.innerHTML
element.innerText
element.textContent
element.content

element.value
```

insertAdjacentHTML
```js
const childHTMLString = "<img src='bird.png' alt='bird'>";
parentElement.insertAdjacentHTML("beforeend", childHTMLString);
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
// image attributes
element.src
element.alt
```

Classes
```js
element.className
element.classList.add
element.classList.remove
element.classList.value
```

Style
```js
element.style.display = "block";
element.style.border = "1px solid blue";
element.style.setProperty("background", "#fff");
```

</section>

---

<section>

## DOM Traversal

```js
element.parentNode
```

Cloning a node (pass parameter `true` for deep copy)
```js
const clonedNode = document.querySelector("#picture_template").cloneNode(true);
parent.appendChild(clonedNode);
```

</section>

---

<section>

## Measurements

```html
window.innerWidth
window.innerHeight

window.screen.width
window.screen.height
window.screen.availWidth
window.screen.availHeight

window.devicePixelRatio
```

```js
element.getBoundingClientRect()
```

<script>
  document.write("window.innerWidth: " + window.innerWidth);
  document.write("window.innerHeight: " + window.innerHeight);
  document.write("window.screen.width: " + window.screen.width);
  document.write("window.screen.height: " + window.screen.height);
  document.write("window.devicePixelRatio: " + window.devicePixelRatio);
  document.write("window.screen.availWidth: " + window.screen.availWidth);
  document.write("window.screen.availHeight: " + window.screen.availHeight);
</script>

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

## Event Listeners

```js
window.addEventListener("load", () => alert("loaded DOM"));
```

For details see [Event Listeners](events.md).

</section>

---

<section>

## Root object `window`

**Properties**
* `window.document`
* `window.console.log()`

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

</section>

---

<section>

## `setTimeout`, `setInterval` and `requestAnimationFrame`

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
