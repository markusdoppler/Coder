---
title: Accessibility
styles:
- ../assets/HTML/accessibility.css
scripts:
- ../assets/HTML/accessibility.js
---

# Accessibility – A11y

<section>

## Overview

### Types of disabilities
* motor
* cognitive
* auditory
* visual


### Sources

* [ARIA Authoring Practises Guide 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/)
* [a11y casts (Google Chrome Developers)](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

Cool accessible sites
* [Webaim.org](https://webaim.org)


</section>

---

<section>

## Screen Readers

### Voice Over (Mac)
* `Cmd ⌘`+`F5` – Turn on Voice Over
* `VO` – Modifier Key: `Ctrl`+`Alt ⌥`
* `Ctrl` stop talking
* `VO` + `▶︎` / `VO` + `◀`
* `VO` + `Cmd ⌘` (+ `Shift`) + `N` Auto Web Spot
* `VO` + `Spacebar` Click
* `VO` + `Cmd ⌘` + `up` / `down` change speed
Use web
* `VO` + `Shift` + `down` interact with website, when browsing
* `VO` + `Cmd ⌘` + `H` Navigate by headings
* `VO` + `U` The Rotor

### NVDA
* `Caps lock` NVDA key
* `Ctrl` + `Alt` + `N` start NVDA
* `Caps lock` stop talking
* `H` navigate by heading
* `Shift` + `H` navigate backwards by heading
* `F` jump to next field
* `Caps lock` + `Spacebar` enter forms mode
* `Caps lock` enter Application mode
* `Tab` move tabbable elements
* `Spacebar` click element
* `Caps lock` + `F7` enter Elements mode


### Google Chrome
* Accessibility tab 
* [aXe Web Accessibility Testing](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en&utm_source=chromedev) – Colour and contrast plugin
* [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en-US?utm_campaign=chrome_series_chromeaccessibilitydevtoolsextension_011317&utm_source=chromedev&utm_medium=yt-desc) – Colour suggestions if contrast is not met

### (Automated) Testing
* [aXe Core](https://github.com/dequelabs/axe-core)
* Selenium for automated testing


</section>

---

<section>

## Semantic HTML

### HTML
* `lang` attribute on `<html>`

### Headings
* `<h1>` to `<h6>` accordingly
* only one `<h1>` per page

### Structure & Landmarks
* `<header>`
* `<nav>`
* `<aside>`
* `<footer>`
* `<main>`
* `<article>`
* `<section>`

### Buttons and Links
* decide `button` vs. `a`
* `a` leads somewhere, `button` performs an action

### Inputs
* `input`

### Images
* `alt` attribute on image

### Style
* `flex` and `grid` property should not change logical order

### Semantic Properties
* Role – e.g. `button`, `checkbox`
* Name / Label – `aria-labelledby`, `aria-label`, `<label>`, Contents (e.g. Button Text), `title`
* State – e.g. `disabled`, `checked`
* Value – 

Browser generates an accessibility tree from these properties.

</section>

---

<section>

## Focus

refers to selecting an element (and directing all the subsequent keyboard events to that element)

### Keyboard Navigation
<figure>
<form>
  <label>
    <input type="text">
    Address
  </label>
  <label>
    <input type="tel">
    Phone
  </label>
  <select>
    <option value="work">Work</option>
    <option value="mobile">Mobile</option>
    <option value="home">Home</option>
  </select>
</form>
<div>

Move through document with Keyboard
* `Tab` (forwards)
* `Shift` + `Tab` (backwards)
* Arrow buttons or letters for `<select>`

Element focussed (synthetic click activation)
* `Spacebar`
* `Enter`

> Interactive Elements (Buttons etc.) should be focussable

</div>
</figure>

### Tab Order
> HTML dictates tab order

implicit for interactive controls
* `<input>`
* `<select>`
* `<button>`

> Tab order should reflect document order


### `tabindex` for custom interactive controls
indicates that its element can be focussed in sequential order

<figure>
<div>
  <div>No Tabindex</div>
  <div tabindex="0">Tabindex 0</div>
  <div tabindex="-1">Tabindex -1</div>
  <div tabindex="5">Tabindex 5</div>
</div>
<div>

`tabindex="0"`
* focussable via keyboard in DOM order
* `.focus()` requires a tabindex attribute for e.g. divs (or focusable element)

`tabindex="-1"`
* not focussable via keyboard
* *focussed programmatically* (via `focus()` method in JavaScript)
```js
document.querySelector('[tabindex="-1"]').focus();
```

`tabindex="5"`
* focussable via keyboard; jumps ahead of DOM order (avoid)
* `tabindex` greater zero focussed first. `tabindex` starts at lowest value greater than zero an counts up

</div>
</figure>

> A screenreader navigates DOM linearly, not with respect to tab order.


### Native Buttons

<figure>
<div>
  <button class="button">Button</button>
  <div class="button">Div</div>
  <br>
  <button class="button" disabled>Disabled Button</button>
  <div class="button" disabled>Disabled Div</div>
</div>
<div>

Features of `<button>` vs. `<div>` etc.
* automatically in taborder
* automatic ARIA role of "Button"
* synthetic click activation (spacebar or enter key)
* `disabled` attribute function

```html
<button class="button">Button</button>
<div class="button">Div</div>

<button class="button" disabled>Disabled Button</button>
<div class="button" disabled>Disabled Div</div>
```

</div>
</figure>


</section>

---

<section>

## Tabindex

Elements with intrinsic `tabindex="0"`
* `link`
* `button`
* `input`

Programmatically set `tab-index="-1"` to take element out of tab order.

Deque website --> skip to content
* [Skip Nav](https://webaim.org/techniques/skipnav/)


### Example: Custom Element with roving tab index

<input type="text" placeholder="Tab to the fruit of your dreams!">

<radio-group selected="2">
  <radio-button>🍏</radio-button>
  <radio-button>🍓</radio-button>
  <radio-button>🍒</radio-button>
  <radio-button>🍑</radio-button>
  <radio-button>🍋</radio-button>
</radio-group>

<button class="button">Get Fruit</button>

</section>

---

<section>

## Alert
Options
* `tabindex="-1"` and `.focus()` element with JavaScript
* `role="alert"`

```html
role="alert"
```
creates ARIA Live region with `aria-live="assertive"`


### Example

<div id="alert-section" role="alert"></div>
<button id="alert-button" class="button">Show Alert</button>

<template id="alert-template">
  <div class="alert">This is an alert!</div>
</template>


</section>

---

<section>

## Labels
An elements gets its name for assistive technologies from one of the following:
* `aria-labelledby` attribute
* `aria-label` attribute
* `<label>`
* Contents (e.g. Button Text)
* `title` attribute

### Example: `<label>`

* can be used for `<button>`, `<input>`, `<select>`

wrapped in `<label>`
<label>
  Check this box
  <input type="checkbox" checked>
</label>

using `for`-attribute
<input id="my-checkbox" type="checkbox" checked>
<label for="my-checkbox">
  Check this box
</label>

### Example: `aria-label`
* works for HTML elements like `<button>`, `<input>`, `<select>`

<button class="button hamburger" tabindex="0" aria-label="Menu">≡</button>


### Example: `aria-labelledby`

<span id="memory-label">Memory Card</span>
<div id="cucumber-card" class="button memory-card" role="button" tabindex="0" aria-labelledby="memory-label">🥒</div>
<div id="broccoli-card" class="button memory-card" role="button" tabindex="0" aria-labelledby="memory-label broccoli-card">🥦</div>



</section>

---

<section>

## ARIA –  Accessible Rich Internet Applications
or WAI ARIA – Web Accessibility Initiative

### Resources
* [Semantics and ARIA by Google](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)
* [ARIA Techniques by Mozilla](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

* [ARIA Authoring practises](https://www.w3.org/TR/wai-aria-practices-1.1/)


### ARIA Roles

```html
<span role="rater">★★★★★</span>
```

Role
* `switch` (e.g. toggle button)
* `group`
* `region`
* `status`
* `button`
* `checkbox`
* `radio`
* `rater`
* `alert`
* `menu`
* `tree`
* `treeitem`


### ARIA Labels
* `aria-label` – provides essential information
* `aria-labelledby` – provides name via different object
* `aria-describedby` – provides extended information

### ARIA Current
used to indicate current item in a set
* `aria-current="page"` – current link
* `aria-current="step"` – current step
* `aria-current="location"` – current image of flowchart
* `aria-current="date"` – current date on calendar
* `aria-current="time"` – current time in timetable

### ARIA ActiveDescendent

`aria-activedescendent`

### ARIA Properties vs. states
* *properties* – relatively static
* *states* – more dynamic

`aria-multiline`
`aria-singleline`

### ARIA States
* `aria-checked="true"`
* `aria-expanded="true"`
* `aria-expanded="false"`

* `aria-controls="sect-id"`

* `aria-haspopup="menu"`

### ARIA Live Region
used to announce non-interactive content changes
```html
aria-live="assertive" – update announcement interrups user flow
aria-live="polite" – updates announcement when user is idle
aria-live="off" – turned off
```

* `role="alert"` = `aria-live="assertive"`
* `role="status"` = `aria-live="polite"`


### Example: `aria-expanded` and `aria-controls`

<figure>
<div>
  <button class="button settings-button" aria-expanded="false" aria-controls="settings-panel" onclick="this.setAttribute('aria-expanded', !(this.getAttribute('aria-expanded') == 'true'))">Settings</button>
  <div id="settings-panel">
    <label>Option 1 <input type="checkbox" checked></label>
    <label>Option 2 <input type="checkbox"></label>
  </div>
</div>
<div>

```html
<button aria-expanded="false" aria-controls="settings-panel">Settings</button>
<div id="settings-panel">
  <label>Option 1 <input type="checkbox" checked></label>
  <label>Option 2 <input type="checkbox"></label>
</div>
```

```css
button[aria-expanded="false"] + #settings-panel {
  display: none;
}
button[aria-expanded="true"] + #settings-panel {
  display: block;
}
```

</div>
</figure>


### Example: `aria-labelledby`
```html
<p id="input-label">This is an input field</p>
<div aria-labelledby="input" contenteditable="true"></div>
```

```html
<p id="item1">First item</p>
<p id="item2">Second item</p>

<div role="group" aria-labelledby="item1">
  <a href="javascript:" role="button" aria-labelledby="item1">Item Content</a>
</div>
```

### Example: `aria-label`
```html
<div aria-label="This is an input field"></div>
```

</section>

---

<section>

## Images

* Always add `alt` texts to `<img>`-tags!
```html
<img width="1200" height="900"
     loading="lazy"
     src="butterfly.png"
     alt="a beautiful butterfly">
```

</section>

---

<section>

## Colour and Contrast



</section>

---

<section>

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```js
const isSafeToAnimate = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

if (isSafeToAnimate) {
  // do animation
}
```

</section>

---

<section>

## Dark Mode

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #000;
        color: white;
    }
}
```

```css
@media (prefers-color-scheme: light) {
    body {
        background-color: #FFF;
        color: black;
    }
}
```

```css
@media (prefers-color-scheme: no-preference) {

}
```

```js
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  document.querySelector("body").classList.add("dark");
}
```

</section>
