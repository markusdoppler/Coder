---
title: DOM
---
<link href="../assets/style.css" rel="stylesheet">


# Document Object Model (DOM)

<section>

## Root object: `window`
```js
window.alert();
window.console.log("Hello console!");

alert(); // since window is the root object, its methods can be called without stating it
```

Properties of the `window` object don't need to be specified.
<figure>

```js
window.setTimeout(() => {

}, 3000)
```

```js
setTimeout(() => {

}, 3000)
```

</figure>

</section>

---

<section>

## Selecting DOM Elements

### Get Element

Get element nodes for tag, class, or id
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

```js
element.style.display = "block";
element.style.border = "1px solid blue";
element.value
element.className
element.classList.add
element.classList.remove
element.classList.value
element.parentNode
element.textContent
element.innerHTML
element.setAttribute("tabindex", -1)
element.getAttribute("src")
element.src
element.alt
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

</section>

---

<section>

## DOM Traversal

```js
element.parentNode
```

Cloning a node
```js
const clonedNode = document.querySelector("#picture_template").cloneNode(true);
parent.appendChild(clonedNode);
```

</section>

---

<section>

## Timeout & Interval

### Timeout
```js
var to = setTimeout(timeoutDone, 3000);

function timeoutDone() {
  alert("Your three seconds are up!");
}

function someEventToCancelTheTimeout() {
  clearTimout(to);
}
```


### Interval
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

### Animation Frame

```js
function animationStep(time) {
   // do some animations
   
   requestAnimationFrame(animationStep);
}
```


</section>

---

<section>

## Browser APIs

* `window.history`
* `window.localStorage`
* `document.cookie`
* `window.navigator`

For details see [Browser APIs](apis).

</section>

---

<section>

## Measurements

```
window.innerHeight
window.innerWidth
```

</section>

---

<section>

## Event Listeners

```js
window.addEventListener("load", () => alert("loaded dom"));
```

For details see [Event Listeners](events.md).

</section>

---

<section>

## Which Browser am I running on?

```js
navigator.userAgent
```

### Other useful details
```js
navigator.appCodeName
navigator.appName
navigator.appVersion
navigator.cookieEnabled
navigator.platform
navigator.systemLanguage
```

</section>