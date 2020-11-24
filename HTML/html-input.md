---
title: Input
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