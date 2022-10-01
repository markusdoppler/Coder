---
title: Dialog
---

# Dialog

<section>

## `<dialog>` / Modal
* [Dialog Polyfill](https://github.com/GoogleChrome/dialog-polyfill)

```html
<dialog>
   <p>Hello</p>
   <button>Dismiss</button>
</dialog>
```

```js
const dialog = document.querySelector("dialog")

dialog.show()
dialog.showModal() // backdrop + close with ESC
dialog.close()
dialog.close("123")
dialog.returnValue // = 123

dialog.addEventListener('close', function(event) {
    if (dialog.returnValue === 'yes') {
      /* ... */
    }
});
```

```html
<dialog open>...</dialog>
```
```css
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
dialog[open] {
  
}
```

### Form Dialog
```html
<dialog>
  <form method="dialog">
    <p>Would you like to continue?</p>
    <button type="submit" value="no">No</button>
    <button type="submit" value="yes">Yes</button>
  </form>
</dialog>
```

</section>
