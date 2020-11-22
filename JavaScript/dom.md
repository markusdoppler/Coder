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

```js
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("p");
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