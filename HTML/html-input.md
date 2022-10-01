---
title: Input
styles:
- ../assets/HTML/html-input.css
---

# Input

<section>

## Checkbox Input

<figure class="fig-1-3">

<div class="example">
  <input type="checkbox" id="my-checkbox" />
  <label for="my-checkbox">My checkbox</label>
</div>

```html
<input type="checkbox" id="my-checkbox" />
<label for="my-checkbox">My checkbox</label>
```

</figure>

### JavaScript Attributes
```js
const checkbox = document.getElementById("my-checkbox");

checkbox.checked

checkbox.addEventListener("change", function () {
  console.log("Checkbox toggled");
});
```

</section>

---

<section>

## Range Input (Slider)

<figure class="fig-1-3">

<div>
    <input type="range" value="1" min="0" max="10" step="1">
</div>

```html
<input type="range" value="1" min="0" max="10" step="1">
```

</figure>


Events
* `oninput`
* `onchange`

Properties
* `defaultValue`
* `value`


### Custom Slider style

<figure class="fig-1-2">

<div>
    <input type="range" value="1" min="0" max="10" step="1" class="custom-slider">
</div>

```html
<input type="range" value="1" min="0" max="10" step="1" class="custom-slider">
```

</figure>

Removing standard styles
```css
input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent; 
  border-color: transparent;
  color: transparent;
}
```

Styling the **thumb**
```css
/* Special styling for WebKit/Blink */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}
/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
/* All the same stuff for IE */
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
```

Styling the **track**
```css
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
```

</section>

---

<section>

## Number `<input>`

```html
<input type="number">
```

```js
input.valueAsNumber
```

</section>

---

<section>

## Form validation

```html
<form action="#" method="post" name="contact_form">
  <h2>Contact Us</h2>

  <label for="name">Name:</label>
  <input type="text" name="name" placeholder="John Doe" required />

  <label for="email">Email:</label>
  <input type="email" name="email" placeholder="john_doe@example.com" required />
  <span class="form_hint">Proper format "name@something.com"</span>

  <label for="website">Website:</label>
  <input type="url" name="website" placeholder="http://johndoe.com" required pattern="(http|https)://.+"/>
  <span class="form_hint">Proper format "http://someaddress.com"</span>

  <label for="message">Message:</label>
  <textarea name="message" cols="40" rows="6" required ></textarea>

  <button class="submit" type="submit">Submit Form</button>
</form>
```

`input` and `textarea` attributes
* `required`
* `placeholder`
* `pattern="(http|https)://.+"`

### Styling input elements

<figure>

<div>
  <input type="email" name="email" placeholder="stevejobs@apple.com" required />
  <span class="form_hint">Proper format "name@something.com"</span>
</div>

```css
input {
  padding: 5px;
  border: 2px solid black;
  outline: none;
  border-radius: 3px;
}
input:required, textarea:required {
	background: #fff url(images/red_asterisk.png) no-repeat 98% center;
}
input:required:valid, textarea:required:valid {
	background: #fff url(images/valid.png) no-repeat 98% center;
	box-shadow: 0 0 5px #5cd053;
	border-color: #28921f;
}
input:focus:invalid, textarea:focus:invalid {
	background: #fff url(images/invalid.png) no-repeat 98% center;
	box-shadow: 0 0 5px #d45252;
	border-color: #b03535;
}
```

</figure>



### Simple Input hint

<figure class="fig-1-2">

<div>
  <input type="email" name="email" placeholder="stevejobs@apple.com" required />
  <span class="form_hint">Proper format "name@something.com"</span>
</div>

<div>

```css
.form_hint {
	display: none;
	position: absolute;
	margin-left: 8px;
	padding: 1px 6px;
	border-radius: 3px 3px 3px 3px;
	background: #d45252;
	color: white;
	z-index: 9; 
}
.form_hint::before {
	position: absolute;
	content: "\25C0";
	color: #d45252;
	top: 1px;
	left: -6px;
}
```

```css
input:focus + .form_hint {
  display: inline;
}
input:required:valid + .form_hint {
  background: #28921f;
}
input:required:valid + .form_hint::before {
  color:#28921f;
}
```

</div>
</figure>

</section>


---

<section>

## `<input>` autocomplete datalist

```html
<form>
  <input type="text" placeholder="Which username??" list="usernames">
  <datalist id="usernames">
    <option value="Jack">
    <option value="Sarah">
    <option value="James">
    <option value="Sasha">
  <datalist>
</form>
```

</section>
