---
title: Input
styles:
- ../assets/HTML/html-input.css
---

# Input

<section>

## Checkbox

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